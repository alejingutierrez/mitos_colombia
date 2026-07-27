import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { pathToFileURL } from "node:url";
import dotenv from "dotenv";
import pg from "pg";
import {
  WAYUU_CATEGORY_PATH,
  newWayuuSlugs,
} from "../../editorial/wayuu/universe.mjs";

const { Client } = pg;

function parseArgs(argv) {
  const options = { envFile: ".env", apply: false };
  for (const arg of argv) {
    if (arg === "--apply") {
      options.apply = true;
    } else if (arg.startsWith("--env=")) {
      options.envFile = arg.slice("--env=".length);
    } else {
      throw new Error(`Argumento no reconocido: ${arg}`);
    }
  }
  return options;
}

function words(value) {
  return String(value || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

function validate(data) {
  const ranges = {
    mito: [300, 650],
    historia: [220, 600],
    versiones: [170, 550],
    leccion: [8, 22],
    similitudes: [150, 450],
  };
  for (const [field, [min, max]] of Object.entries(ranges)) {
    const count = words(data[field]);
    if (count < min || count > max) {
      throw new Error(
        `${data.slug}: ${field} tiene ${count} palabras; se esperaban ${min}-${max}.`,
      );
    }
  }
  const sourceUrls = [...data.keySources, ...data.sources].map(
    ({ url }) => url,
  );
  if (sourceUrls.length < 5 || new Set(sourceUrls).size !== sourceUrls.length) {
    throw new Error(`${data.slug}: fuentes insuficientes o duplicadas.`);
  }
  if (data.category_path !== WAYUU_CATEGORY_PATH) {
    throw new Error(`${data.slug}: categoría Wayuu inesperada.`);
  }
  if (data.image_url) {
    throw new Error(`${data.slug}: la incorporación no debe crear imagen.`);
  }
}

async function loadModules() {
  const modules = [];
  for (const slug of newWayuuSlugs) {
    const modulePath = path.resolve(
      "editorial",
      "wayuu",
      "myths",
      `${slug}.mjs`,
    );
    const { default: data } = await import(pathToFileURL(modulePath).href);
    if (data.slug !== slug) {
      throw new Error(`${slug}: el módulo declara ${data.slug}.`);
    }
    validate(data);
    modules.push(data);
  }
  return modules;
}

async function saveCreationPlan(modules) {
  const outputDir = path.resolve("artifacts", "editorial-backups");
  await fs.mkdir(outputDir, { recursive: true });
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const outputPath = path.join(
    outputDir,
    `wayuu-new-myths-${timestamp}.json`,
  );
  await fs.writeFile(
    outputPath,
    `${JSON.stringify(
      {
        createdAt: new Date().toISOString(),
        action: "create",
        before: null,
        slugs: modules.map(({ slug }) => slug),
        records: modules,
      },
      null,
      2,
    )}\n`,
    "utf8",
  );
  return outputPath;
}

async function insertMyth(client, data, regionId, communityId, tagIds) {
  await client.query("LOCK TABLE myths IN SHARE ROW EXCLUSIVE MODE");
  const existing = await client.query(
    "SELECT id FROM myths WHERE slug = $1 LIMIT 1",
    [data.slug],
  );
  if (existing.rowCount) {
    throw new Error(`${data.slug}: ya existe y no será sobrescrito.`);
  }

  const sourceRowResult = await client.query(
    "SELECT COALESCE(MAX(source_row), 0) + 1 AS source_row FROM myths",
  );
  const sourceRow = Number(sourceRowResult.rows[0].source_row);
  const mythResult = await client.query(
    `INSERT INTO myths (
       title, slug, region_id, community_id, category_path, tags_raw,
       mito, historia, versiones, leccion, similitudes, content, excerpt,
       seo_title, seo_description, focus_keyword, focus_keywords_raw,
       image_prompt, image_url, latitude, longitude, content_formatted,
       source_row, updated_at
     )
     VALUES (
       $1, $2, $3, $4, $5, $6,
       $7, $8, $9, $10, $11, $12, $13,
       $14, $15, $16, $17,
       $18, NULL, $19, $20, TRUE,
       $21, NOW()
     )
     RETURNING id`,
    [
      data.title,
      data.slug,
      regionId,
      communityId,
      data.category_path,
      data.tags.join(", "),
      data.mito,
      data.historia,
      data.versiones,
      data.leccion,
      data.similitudes,
      data.content,
      data.excerpt,
      data.seo_title,
      data.seo_description,
      data.focus_keyword,
      data.focus_keywords.join("|"),
      data.image_prompt,
      data.latitude,
      data.longitude,
      sourceRow,
    ],
  );
  const mythId = mythResult.rows[0].id;

  const editorialResult = await client.query(
    `INSERT INTO editorial_myths (
       source_myth_id, title, slug, region_id, community_id,
       category_path, tags_raw, mito, historia, versiones, leccion,
       similitudes, content, excerpt, seo_title, seo_description,
       focus_keyword, focus_keywords_raw, image_prompt,
       image_prompt_horizontal, image_prompt_vertical, image_url,
       latitude, longitude, content_formatted, source_row,
       sources_json, key_sources_json, research_notes, updated_at
     )
     VALUES (
       $1, $2, $3, $4, $5,
       $6, $7, $8, $9, $10, $11,
       $12, $13, $14, $15, $16,
       $17, $18, $19,
       $20, $21, NULL,
       $22, $23, TRUE, $24,
       $25, $26, $27, NOW()
     )
     RETURNING id`,
    [
      mythId,
      data.title,
      data.slug,
      regionId,
      communityId,
      data.category_path,
      data.tags.join(", "),
      data.mito,
      data.historia,
      data.versiones,
      data.leccion,
      data.similitudes,
      data.content,
      data.excerpt,
      data.seo_title,
      data.seo_description,
      data.focus_keyword,
      data.focus_keywords.join("|"),
      data.image_prompt,
      data.image_prompt_horizontal,
      data.image_prompt_vertical,
      data.latitude,
      data.longitude,
      sourceRow,
      JSON.stringify(data.sources),
      JSON.stringify(data.keySources),
      data.researchNotes,
    ],
  );
  const editorialId = editorialResult.rows[0].id;

  await client.query(
    `INSERT INTO myth_tags (myth_id, tag_id)
     SELECT $1, tag_id FROM unnest($2::int[]) AS tag_id`,
    [mythId, tagIds],
  );
  await client.query(
    `INSERT INTO editorial_myth_tags (editorial_myth_id, tag_id)
     SELECT $1, tag_id FROM unnest($2::int[]) AS tag_id`,
    [editorialId, tagIds],
  );
  await client.query(
    `INSERT INTO myth_keywords (myth_id, keyword)
     SELECT $1, keyword FROM unnest($2::text[]) AS keyword`,
    [mythId, data.focus_keywords],
  );
  await client.query(
    `INSERT INTO editorial_myth_keywords (editorial_myth_id, keyword)
     SELECT $1, keyword FROM unnest($2::text[]) AS keyword`,
    [editorialId, data.focus_keywords],
  );
  await client.query(
    `INSERT INTO seo_pages (
       page_type, slug, meta_title, meta_description, meta_keywords,
       og_title, og_description, twitter_title, twitter_description,
       canonical_path, updated_at
     )
     VALUES (
       'myth', $1, $2, $3, $4,
       $5, $6, $7, $8,
       $9, NOW()
     )
     ON CONFLICT (page_type, slug) DO UPDATE SET
       meta_title = EXCLUDED.meta_title,
       meta_description = EXCLUDED.meta_description,
       meta_keywords = EXCLUDED.meta_keywords,
       og_title = EXCLUDED.og_title,
       og_description = EXCLUDED.og_description,
       twitter_title = EXCLUDED.twitter_title,
       twitter_description = EXCLUDED.twitter_description,
       canonical_path = EXCLUDED.canonical_path,
       updated_at = NOW()`,
    [
      data.slug,
      data.seo.meta_title,
      data.seo.meta_description,
      data.seo.meta_keywords,
      data.seo.og_title,
      data.seo.og_description,
      data.seo.twitter_title,
      data.seo.twitter_description,
      data.seo.canonical_path,
    ],
  );

  return { mythId, editorialId, sourceRow };
}

async function run() {
  const options = parseArgs(process.argv.slice(2));
  const modules = await loadModules();
  dotenv.config({ path: path.resolve(options.envFile), quiet: true });
  const connectionString =
    process.env.POSTGRES_URL_NON_POOLING ||
    process.env.DATABASE_URL_UNPOOLED ||
    process.env.POSTGRES_URL ||
    process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error(`No se encontró una conexión Postgres en ${options.envFile}.`);
  }

  const client = new Client({
    connectionString,
    ssl: { rejectUnauthorized: false },
  });
  await client.connect();
  try {
    const taxonomy = await client.query(
      `SELECT r.id AS region_id, c.id AS community_id
       FROM regions r
       JOIN communities c ON c.region_id = r.id
       WHERE r.name = 'Caribe' AND c.name = 'Wayúu'
       LIMIT 1`,
    );
    if (!taxonomy.rowCount) {
      throw new Error("No existe la taxonomía Caribe > Wayúu.");
    }
    const { region_id: regionId, community_id: communityId } = taxonomy.rows[0];

    const existing = await client.query(
      "SELECT slug FROM myths WHERE slug = ANY($1::text[]) ORDER BY slug",
      [newWayuuSlugs],
    );
    if (existing.rowCount) {
      throw new Error(
        `Las incorporaciones ya existen: ${existing.rows
          .map(({ slug }) => slug)
          .join(", ")}`,
      );
    }

    const allTagNames = [...new Set(modules.flatMap(({ tags }) => tags))];
    const tagResult = await client.query(
      "SELECT id, name FROM tags WHERE name = ANY($1::text[])",
      [allTagNames],
    );
    const tagsByName = new Map(
      tagResult.rows.map(({ id, name }) => [name, Number(id)]),
    );
    const missingTags = allTagNames.filter((name) => !tagsByName.has(name));
    if (missingTags.length) {
      throw new Error(`Faltan etiquetas existentes: ${missingTags.join(", ")}`);
    }

    console.log(
      JSON.stringify(
        {
          mode: options.apply ? "apply" : "dry-run",
          categoryPath: WAYUU_CATEGORY_PATH,
          additions: modules.map((data) => ({
            slug: data.slug,
            title: data.title,
            tags: data.tags,
            sources: data.keySources.length + data.sources.length,
            imageAction: "none",
          })),
        },
        null,
        2,
      ),
    );
    if (!options.apply) {
      console.log("Dry-run correcto. Añade --apply para crear los registros.");
      return;
    }

    const backupPath = await saveCreationPlan(modules);
    const created = [];
    for (const data of modules) {
      await client.query("BEGIN");
      try {
        const result = await insertMyth(
          client,
          data,
          Number(regionId),
          Number(communityId),
          data.tags.map((name) => tagsByName.get(name)),
        );
        await client.query("COMMIT");
        created.push({ slug: data.slug, ...result });
      } catch (error) {
        await client.query("ROLLBACK");
        throw error;
      }
    }
    console.log(JSON.stringify({ applied: true, backupPath, created }, null, 2));
  } finally {
    await client.end();
  }
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
