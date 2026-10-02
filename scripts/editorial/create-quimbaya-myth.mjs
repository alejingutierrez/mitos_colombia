import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

import dotenv from "dotenv";
import pg from "pg";

import { quimbayaMythsBySlug } from "../../editorial/quimbaya/records.mjs";
import {
  addedQuimbayaSlugs,
  quimbayaCategoryBySlug,
} from "../../editorial/quimbaya/universe.mjs";

const { Client } = pg;
const confirmationPhrase = "create-nabsacadas-with-image-pair";
const verticalBasePrompt =
  "Segunda escena vertical 9:16 de un relato del Cauca medio quimbaya como ilustración editorial 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.";

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

function validateRecord(data) {
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
      throw new Error(`${data.slug}: ${field} tiene ${count} palabras.`);
    }
  }
  if (data.category_path !== quimbayaCategoryBySlug[data.slug]) {
    throw new Error(`${data.slug}: categoría inesperada.`);
  }
  const sources = [...data.keySources, ...data.sources];
  if (sources.length !== 7) {
    throw new Error(`${data.slug}: se esperaban siete fuentes.`);
  }
  if (new Set(sources.map(({ url }) => url)).size !== sources.length) {
    throw new Error(`${data.slug}: fuentes duplicadas.`);
  }
  if (
    !/^https:\/\//.test(data.image_url) ||
    !/^https:\/\//.test(data.vertical_image_url) ||
    data.image_url === data.vertical_image_url ||
    /pending\.invalid/.test(data.image_url + data.vertical_image_url)
  ) {
    throw new Error(`${data.slug}: pareja visual pública inválida.`);
  }
  for (const prompt of [
    data.image_prompt_horizontal,
    data.image_prompt_vertical,
  ]) {
    if (
      !/2D full paper cut/i.test(prompt) ||
      !/paper quilling/i.test(prompt) ||
      !/acabado gr[aá]fico plano/i.test(prompt) ||
      !/sin fotograf[ií]a/i.test(prompt) ||
      !/objeto f[ií]sico/i.test(prompt) ||
      !/maqueta/i.test(prompt) ||
      !/diorama/i.test(prompt) ||
      !/CGI|render 3D/i.test(prompt)
    ) {
      throw new Error(`${data.slug}: dirección visual incompleta.`);
    }
  }
}

async function savePlan(record) {
  const directory = path.resolve("artifacts", "editorial-backups");
  await fs.mkdir(directory, { recursive: true });
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const output = path.join(
    directory,
    `quimbaya-create-${record.slug}-${timestamp}.json`,
  );
  await fs.writeFile(
    output,
    `${JSON.stringify(
      {
        createdAt: new Date().toISOString(),
        action: "create",
        before: null,
        record,
      },
      null,
      2,
    )}\n`,
    "utf8",
  );
  return output;
}

async function insertMyth(client, data, taxonomy, tagIds) {
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
      data.title,
      data.slug,
      taxonomy.region_id,
      taxonomy.community_id,
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
      data.image_prompt_horizontal,
      data.image_url,
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
       $20, $21, $22,
       $23, $24, TRUE, $25,
       $26, $27, $28, NOW()
     )
     RETURNING id`,
    [
      mythId,
      data.title,
      data.slug,
      taxonomy.region_id,
      taxonomy.community_id,
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
      data.image_prompt_horizontal,
      data.image_prompt_horizontal,
      data.image_prompt_vertical,
      data.image_url,
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
    `INSERT INTO vertical_images (
       entity_type, entity_id, entity_name, entity_slug,
       base_prompt, custom_prompt, image_url
     )
     VALUES ('myth', $1, $2, $3, $4, $5, $6)`,
    [
      mythId,
      data.title,
      data.slug,
      verticalBasePrompt,
      data.image_prompt_vertical,
      data.vertical_image_url,
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
  if (addedQuimbayaSlugs.length !== 1) {
    throw new Error("La incorporación Quimbaya debe contener un único slug.");
  }
  const record = quimbayaMythsBySlug[addedQuimbayaSlugs[0]];
  validateRecord(record);
  dotenv.config({ path: path.resolve(options.envFile), quiet: true });
  const connectionString =
    process.env.POSTGRES_URL_NON_POOLING ||
    process.env.DATABASE_URL_UNPOOLED ||
    process.env.POSTGRES_URL ||
    process.env.DATABASE_URL;
  if (!connectionString) throw new Error("No hay conexión Postgres.");
  if (options.apply && options.confirmation !== confirmationPhrase) {
    throw new Error(`Para aplicar usa --confirm=${confirmationPhrase}.`);
  }
  const client = new Client({
    connectionString,
    ssl: { rejectUnauthorized: false },
  });
  await client.connect();
  try {
    const taxonomyResult = await client.query(
      `SELECT r.id AS region_id, c.id AS community_id
       FROM regions r
       JOIN communities c ON c.region_id = r.id
       WHERE c.slug = 'quimbaya'
       LIMIT 1`,
    );
    if (taxonomyResult.rowCount !== 1) {
      throw new Error("No existe la taxonomía histórica Quimbaya.");
    }
    const category = await client.query(
      "SELECT 1 FROM myths WHERE category_path = $1 LIMIT 1",
      [record.category_path],
    );
    if (!category.rowCount) throw new Error("La categoría histórica no existe.");
    const existing = await client.query(
      "SELECT slug FROM myths WHERE slug = $1 LIMIT 1",
      [record.slug],
    );
    if (existing.rowCount) {
      throw new Error(`Ya existe la incorporación: ${record.slug}.`);
    }
    const tagResult = await client.query(
      "SELECT id, name FROM tags WHERE name = ANY($1::text[])",
      [record.tags],
    );
    const tagsByName = new Map(
      tagResult.rows.map(({ id, name }) => [name, Number(id)]),
    );
    const missing = record.tags.filter((name) => !tagsByName.has(name));
    if (missing.length) throw new Error(`Faltan etiquetas: ${missing.join(", ")}`);
    console.log(
      JSON.stringify(
        {
          mode: options.apply ? "apply" : "dry-run",
          addition: {
            slug: record.slug,
            title: record.title,
            sources: record.keySources.length + record.sources.length,
            images: [record.image_url, record.vertical_image_url],
          },
        },
        null,
        2,
      ),
    );
    if (!options.apply) return;
    const backupPath = await savePlan(record);
    await client.query("BEGIN");
    try {
      await client.query("LOCK TABLE myths IN SHARE ROW EXCLUSIVE MODE");
      const created = await insertMyth(
        client,
        record,
        taxonomyResult.rows[0],
        record.tags.map((name) => tagsByName.get(name)),
      );
      await client.query("COMMIT");
      console.log(
        JSON.stringify(
          { status: "created", backupPath, slug: record.slug, ...created },
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
