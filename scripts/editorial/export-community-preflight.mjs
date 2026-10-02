import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

import dotenv from "dotenv";
import pg from "pg";

const { Client } = pg;

function parseArgs(argv) {
  const options = {
    community: "",
    envFile: ".env",
  };

  for (const arg of argv) {
    if (arg.startsWith("--community=")) {
      options.community = arg.slice("--community=".length);
    } else if (arg.startsWith("--env=")) {
      options.envFile = arg.slice("--env=".length);
    } else {
      throw new Error(`Argumento no reconocido: ${arg}`);
    }
  }

  if (!options.community) {
    throw new Error("Falta --community=<slug>.");
  }

  return options;
}

function connectionString() {
  return (
    process.env.POSTGRES_URL_NON_POOLING ||
    process.env.DATABASE_URL_UNPOOLED ||
    process.env.POSTGRES_URL ||
    process.env.DATABASE_URL
  );
}

async function run() {
  const options = parseArgs(process.argv.slice(2));
  dotenv.config({ path: path.resolve(options.envFile), quiet: true });
  const postgresUrl = connectionString();
  if (!postgresUrl) {
    throw new Error(`No se encontró una conexión Postgres en ${options.envFile}.`);
  }

  const client = new Client({
    connectionString: postgresUrl,
    ssl: { rejectUnauthorized: false },
  });
  await client.connect();

  try {
    const communityResult = await client.query(
      `SELECT id, name, slug
       FROM communities
       WHERE slug = $1
       ORDER BY id`,
      [options.community],
    );
    const communities = communityResult.rows;
    if (!communities.length) {
      throw new Error(`No existe la comunidad ${options.community}.`);
    }
    const communityIds = communities.map(({ id }) => id);

    const myths = await client.query(
      `SELECT m.*, r.name AS region, r.slug AS region_slug,
              c.name AS community, c.slug AS community_slug
       FROM myths m
       JOIN regions r ON r.id = m.region_id
       JOIN communities c ON c.id = m.community_id
       WHERE c.id = ANY($1::int[])
       ORDER BY m.category_path, m.slug`,
      [communityIds],
    );
    const ids = myths.rows.map(({ id }) => id);
    const slugs = myths.rows.map(({ slug }) => slug);

    const [editorials, seo, tags, keywords, verticalImages] = await Promise.all([
      client.query(
        `SELECT *
         FROM editorial_myths
         WHERE source_myth_id = ANY($1::int[])
         ORDER BY slug`,
        [ids],
      ),
      client.query(
        `SELECT *
         FROM seo_pages
         WHERE page_type = 'myth' AND slug = ANY($1::text[])
         ORDER BY slug`,
        [slugs],
      ),
      client.query(
        `SELECT mt.myth_id, t.id, t.name, t.slug
         FROM myth_tags mt
         JOIN tags t ON t.id = mt.tag_id
         WHERE mt.myth_id = ANY($1::int[])
         ORDER BY mt.myth_id, t.name`,
        [ids],
      ),
      client.query(
        `SELECT myth_id, keyword
         FROM myth_keywords
         WHERE myth_id = ANY($1::int[])
         ORDER BY myth_id, keyword`,
        [ids],
      ),
      client.query(
        `SELECT *
         FROM vertical_images
         WHERE entity_type = 'myth' AND entity_id = ANY($1::int[])
         ORDER BY entity_id, id`,
        [ids],
      ),
    ]);

    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const outputDir = path.resolve("artifacts", "editorial-preflight");
    const outputPath = path.join(
      outputDir,
      `${options.community}-${timestamp}.json`,
    );
    await fs.mkdir(outputDir, { recursive: true });
    await fs.writeFile(
      outputPath,
      `${JSON.stringify(
        {
          createdAt: new Date().toISOString(),
          communities,
          counts: {
            myths: myths.rowCount,
            editorials: editorials.rowCount,
            seoEntries: seo.rowCount,
            tagLinks: tags.rowCount,
            keywords: keywords.rowCount,
            verticalImages: verticalImages.rowCount,
          },
          myths: myths.rows,
          editorials: editorials.rows,
          seo: seo.rows,
          tags: tags.rows,
          keywords: keywords.rows,
          verticalImages: verticalImages.rows,
        },
        null,
        2,
      )}\n`,
      "utf8",
    );

    console.log(
      JSON.stringify(
        {
          outputPath,
          communities,
          counts: {
            myths: myths.rowCount,
            editorials: editorials.rowCount,
            seoEntries: seo.rowCount,
            tagLinks: tags.rowCount,
            keywords: keywords.rowCount,
            verticalImages: verticalImages.rowCount,
          },
        },
        null,
        2,
      ),
    );
  } finally {
    await client.end();
  }
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
