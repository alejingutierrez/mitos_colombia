import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import dotenv from "dotenv";
import pg from "pg";
import {
  WAYUU_CATEGORY_PATH,
  existingWayuuSlugs,
} from "../../editorial/wayuu/universe.mjs";

const { Client } = pg;

function parseArgs(argv) {
  const options = { envFile: ".env" };
  for (const arg of argv) {
    if (arg.startsWith("--env=")) {
      options.envFile = arg.slice("--env=".length);
    } else {
      throw new Error(`Argumento no reconocido: ${arg}`);
    }
  }
  return options;
}

async function run() {
  const { envFile } = parseArgs(process.argv.slice(2));
  dotenv.config({ path: path.resolve(envFile), quiet: true });
  const connectionString =
    process.env.POSTGRES_URL_NON_POOLING ||
    process.env.DATABASE_URL_UNPOOLED ||
    process.env.POSTGRES_URL ||
    process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error(`No se encontró una conexión Postgres en ${envFile}.`);
  }

  const client = new Client({
    connectionString,
    ssl: { rejectUnauthorized: false },
  });
  await client.connect();

  try {
    const myths = await client.query(
      `SELECT m.*, r.name AS region, c.name AS community
       FROM myths m
       JOIN regions r ON r.id = m.region_id
       LEFT JOIN communities c ON c.id = m.community_id
       WHERE m.slug = ANY($1::text[])
       ORDER BY m.slug`,
      [existingWayuuSlugs],
    );
    const ids = myths.rows.map(({ id }) => id);
    const editorials = await client.query(
      `SELECT *
       FROM editorial_myths
       WHERE source_myth_id = ANY($1::int[])
       ORDER BY slug`,
      [ids],
    );
    const seo = await client.query(
      `SELECT *
       FROM seo_pages
       WHERE page_type = 'myth' AND slug = ANY($1::text[])
       ORDER BY slug`,
      [existingWayuuSlugs],
    );
    const tags = await client.query(
      `SELECT mt.myth_id, t.id, t.name, t.slug
       FROM myth_tags mt
       JOIN tags t ON t.id = mt.tag_id
       WHERE mt.myth_id = ANY($1::int[])
       ORDER BY mt.myth_id, t.name`,
      [ids],
    );
    const keywords = await client.query(
      `SELECT myth_id, keyword
       FROM myth_keywords
       WHERE myth_id = ANY($1::int[])
       ORDER BY myth_id, keyword`,
      [ids],
    );
    const verticalImages = await client.query(
      `SELECT *
       FROM vertical_images
       WHERE entity_type = 'myth' AND entity_id = ANY($1::int[])
       ORDER BY entity_id, id`,
      [ids],
    );

    const missing = existingWayuuSlugs.filter(
      (slug) => !myths.rows.some((row) => row.slug === slug),
    );
    const outsideCategory = myths.rows
      .filter(({ category_path }) => category_path !== WAYUU_CATEGORY_PATH)
      .map(({ slug, category_path }) => ({ slug, category_path }));
    if (missing.length || outsideCategory.length) {
      throw new Error(
        `Universo Wayúu inconsistente: ${JSON.stringify({
          missing,
          outsideCategory,
        })}`,
      );
    }

    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const outputDir = path.resolve("artifacts", "editorial-preflight");
    const outputPath = path.join(outputDir, `wayuu-${timestamp}.json`);
    await fs.mkdir(outputDir, { recursive: true });
    await fs.writeFile(
      outputPath,
      `${JSON.stringify(
        {
          createdAt: new Date().toISOString(),
          categoryPath: WAYUU_CATEGORY_PATH,
          slugs: existingWayuuSlugs,
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
          myths: myths.rowCount,
          editorials: editorials.rowCount,
          seoEntries: seo.rowCount,
          tagLinks: tags.rowCount,
          keywords: keywords.rowCount,
          verticalImages: verticalImages.rowCount,
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
