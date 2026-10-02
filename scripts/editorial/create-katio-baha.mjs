import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

import dotenv from "dotenv";
import pg from "pg";

import baha from "../../editorial/katio/myths/baha.mjs";
import { katioMedia } from "../../editorial/katio/media.mjs";

const { Client } = pg;
const confirmationPhrase = "create-katio-baha-with-two-paper-cut-images";

function parseArgs(argv) {
  const options = { envFile: ".env", apply: false, confirmation: "" };
  for (const arg of argv) {
    if (arg === "--apply") options.apply = true;
    else if (arg.startsWith("--confirm=")) {
      options.confirmation = arg.slice("--confirm=".length);
    } else if (arg.startsWith("--env=")) {
      options.envFile = arg.slice("--env=".length);
    } else throw new Error(`Argumento no reconocido: ${arg}`);
  }
  return options;
}

function words(value) {
  return String(value || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

function validate() {
  const ranges = {
    mito: [300, 650],
    historia: [220, 600],
    versiones: [170, 550],
    leccion: [8, 22],
    similitudes: [150, 450],
  };
  for (const [field, [min, max]] of Object.entries(ranges)) {
    const count = words(baha[field]);
    if (count < min || count > max) {
      throw new Error(`${field}: ${count} palabras; se esperaban ${min}-${max}.`);
    }
  }
  const urls = [...baha.keySources, ...baha.sources].map(({ url }) => url);
  if (urls.length < 5 || new Set(urls).size !== urls.length) {
    throw new Error("Fuentes insuficientes o duplicadas.");
  }
  const media = katioMedia.baha;
  if (
    !/^https:\/\//.test(media.horizontal) ||
    !/^https:\/\//.test(media.vertical) ||
    media.horizontal === media.vertical
  ) {
    throw new Error("Baha requiere horizontal y vertical públicas y distintas.");
  }
  for (const prompt of [
    baha.image_prompt_horizontal,
    baha.image_prompt_vertical,
  ]) {
    if (!/full paper cut/i.test(prompt) || !/paper quilling/i.test(prompt)) {
      throw new Error("Los prompts de Baha deben fijar full paper cut.");
    }
  }
}

function connectionString() {
  return (
    process.env.POSTGRES_URL_NON_POOLING ||
    process.env.DATABASE_URL_UNPOOLED ||
    process.env.POSTGRES_URL ||
    process.env.DATABASE_URL
  );
}

async function savePlan() {
  const directory = path.resolve("artifacts", "editorial-backups");
  await fs.mkdir(directory, { recursive: true });
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const output = path.join(directory, `katio-baha-create-${timestamp}.json`);
  await fs.writeFile(
    output,
    `${JSON.stringify(
      {
        createdAt: new Date().toISOString(),
        action: "create",
        before: null,
        record: baha,
        media: katioMedia.baha,
      },
      null,
      2,
    )}\n`,
    "utf8",
  );
  return output;
}

async function insertBaha(client, taxonomy, tagIds) {
  const media = katioMedia.baha;
  await client.query("LOCK TABLE myths IN SHARE ROW EXCLUSIVE MODE");
  const existing = await client.query(
    "SELECT id FROM myths WHERE slug = $1 LIMIT 1",
    [baha.slug],
  );
  if (existing.rowCount) throw new Error("baha ya existe y no será sobrescrito.");

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
       $18, $19, $20, $21, TRUE,
       $22, NOW()
     )
     RETURNING id`,
    [
      baha.title,
      baha.slug,
      taxonomy.region_id,
      taxonomy.community_id,
      baha.category_path,
      baha.tags.join(", "),
      baha.mito,
      baha.historia,
      baha.versiones,
      baha.leccion,
      baha.similitudes,
      baha.content,
      baha.excerpt,
      baha.seo_title,
      baha.seo_description,
      baha.focus_keyword,
      baha.focus_keywords.join("|"),
      baha.image_prompt_horizontal,
      media.horizontal,
      baha.latitude,
      baha.longitude,
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
       $20, $21, $22,
       $23, $24, TRUE, $25,
       $26, $27, $28, NOW()
     )
     RETURNING id`,
    [
      mythId,
      baha.title,
      baha.slug,
      taxonomy.region_id,
      taxonomy.community_id,
      baha.category_path,
      baha.tags.join(", "),
      baha.mito,
      baha.historia,
      baha.versiones,
      baha.leccion,
      baha.similitudes,
      baha.content,
      baha.excerpt,
      baha.seo_title,
      baha.seo_description,
      baha.focus_keyword,
      baha.focus_keywords.join("|"),
      baha.image_prompt_horizontal,
      baha.image_prompt_horizontal,
      baha.image_prompt_vertical,
      media.horizontal,
      baha.latitude,
      baha.longitude,
      sourceRow,
      JSON.stringify(baha.sources),
      JSON.stringify(baha.keySources),
      baha.researchNotes,
    ],
  );
  const editorialId = editorialResult.rows[0].id;

  await client.query(
    `INSERT INTO vertical_images (
       entity_type, entity_id, entity_name, entity_slug,
       base_prompt, custom_prompt, image_url
     )
     VALUES ('myth', $1, $2, $3, $4, $5, $6)`,
    [
      mythId,
      baha.title,
      baha.slug,
      "Segunda escena vertical 9:16 de un mito Katío como ilustración full paper cut y paper quilling; sin fotografía, maqueta física, diorama ni render 3D.",
      baha.image_prompt_vertical,
      media.vertical,
    ],
  );
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
    [mythId, baha.focus_keywords],
  );
  await client.query(
    `INSERT INTO editorial_myth_keywords (editorial_myth_id, keyword)
     SELECT $1, keyword FROM unnest($2::text[]) AS keyword`,
    [editorialId, baha.focus_keywords],
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
      baha.slug,
      baha.seo.meta_title,
      baha.seo.meta_description,
      baha.seo.meta_keywords,
      baha.seo.og_title,
      baha.seo.og_description,
      baha.seo.twitter_title,
      baha.seo.twitter_description,
      baha.seo.canonical_path,
    ],
  );
  return { mythId, editorialId, sourceRow };
}

async function run() {
  const options = parseArgs(process.argv.slice(2));
  validate();
  dotenv.config({ path: path.resolve(options.envFile), quiet: true });
  if (!connectionString()) throw new Error("No hay conexión Postgres.");
  if (options.apply && options.confirmation !== confirmationPhrase) {
    throw new Error(`Para aplicar usa --confirm=${confirmationPhrase}.`);
  }

  const client = new Client({
    connectionString: connectionString(),
    ssl: { rejectUnauthorized: false },
  });
  await client.connect();
  try {
    const taxonomyResult = await client.query(
      `SELECT r.id AS region_id, c.id AS community_id
       FROM regions r
       JOIN communities c ON c.region_id = r.id
       WHERE r.name = 'Andina' AND c.name = 'Katíos'
       LIMIT 1`,
    );
    if (!taxonomyResult.rowCount) throw new Error("No existe Andina > Katíos.");
    const existing = await client.query(
      "SELECT id FROM myths WHERE slug = 'baha' LIMIT 1",
    );
    const tagResult = await client.query(
      "SELECT id, name FROM tags WHERE name = ANY($1::text[])",
      [baha.tags],
    );
    const tagsByName = new Map(
      tagResult.rows.map(({ id, name }) => [name, Number(id)]),
    );
    const missingTags = baha.tags.filter((name) => !tagsByName.has(name));
    if (missingTags.length) {
      throw new Error(`Faltan etiquetas: ${missingTags.join(", ")}.`);
    }
    console.log(
      JSON.stringify(
        {
          mode: options.apply ? "apply" : "dry-run",
          slug: baha.slug,
          existing: existing.rowCount > 0,
          categoryPath: baha.category_path,
          sources: baha.keySources.length + baha.sources.length,
          tags: baha.tags,
          images: katioMedia.baha,
        },
        null,
        2,
      ),
    );
    if (existing.rowCount) throw new Error("baha ya existe.");
    if (!options.apply) return;

    const backupPath = await savePlan();
    await client.query("BEGIN");
    try {
      const created = await insertBaha(
        client,
        taxonomyResult.rows[0],
        baha.tags.map((name) => tagsByName.get(name)),
      );
      await client.query("COMMIT");
      console.log(
        JSON.stringify(
          { status: "created", backupPath, ...created },
          null,
          2,
        ),
      );
    } catch (error) {
      await client.query("ROLLBACK");
      throw error;
    }
  } finally {
    await client.end();
  }
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
