import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { pathToFileURL } from "node:url";

import dotenv from "dotenv";
import pg from "pg";

const { Client } = pg;
const confirmationPhrase = "create-new-editorial-myth";

function usage() {
  console.log(
    "Uso: node scripts/create-editorial-myth.mjs <archivo.mjs> [--env=.env] [--apply --confirm=create-new-editorial-myth]",
  );
}

function parseArgs(argv) {
  const options = { file: "", envFile: ".env", apply: false, confirmation: "" };
  for (const arg of argv) {
    if (arg === "--apply") options.apply = true;
    else if (arg.startsWith("--confirm=")) {
      options.confirmation = arg.slice("--confirm=".length);
    } else if (arg.startsWith("--env=")) {
      options.envFile = arg.slice("--env=".length);
    } else if (!arg.startsWith("-") && !options.file) options.file = arg;
    else throw new Error(`Argumento no reconocido: ${arg}`);
  }
  if (!options.file) {
    usage();
    throw new Error("Falta el módulo del mito.");
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
      throw new Error(`${field}: ${count} palabras; se esperaban ${min}-${max}.`);
    }
  }
  if (String(data.leccion).includes("\n")) {
    throw new Error("La lección debe ser una sola frase.");
  }
  const expectedContent = [
    ["Mito", data.mito],
    ["Historia", data.historia],
    ["Versiones", data.versiones],
    ["Lección", data.leccion],
    ["Similitudes", data.similitudes],
  ]
    .map(([heading, body]) => `${heading}\n${body}`)
    .join("\n\n");
  if (data.content !== expectedContent) {
    throw new Error("content no coincide con los cinco campos editoriales.");
  }
  if (!data.slug || !data.title || !data.category_path) {
    throw new Error("Faltan slug, title o category_path.");
  }
  if (!Array.isArray(data.tags) || data.tags.length !== 4) {
    throw new Error("La metodología exige exactamente cuatro etiquetas.");
  }
  if (!Array.isArray(data.focus_keywords) || data.focus_keywords.length !== 5) {
    throw new Error("La metodología exige exactamente cinco palabras clave.");
  }
  const sourceUrls = [...data.keySources, ...data.sources].map(
    ({ title, summary, url }) => {
      if (!title || !summary || !url) {
        throw new Error("Cada fuente requiere title, summary y url.");
      }
      return new URL(url).toString();
    },
  );
  if (sourceUrls.length < 5 || new Set(sourceUrls).size !== sourceUrls.length) {
    throw new Error("Fuentes insuficientes o duplicadas.");
  }
  for (const [label, url] of [
    ["horizontal", data.image_url],
    ["vertical", data.vertical_image_url],
  ]) {
    if (!/^https:\/\//.test(url || "")) {
      throw new Error(`La imagen ${label} debe ser HTTPS.`);
    }
  }
  if (data.image_url === data.vertical_image_url) {
    throw new Error("La horizontal y la vertical deben ser distintas.");
  }
  for (const prompt of [
    data.image_prompt_horizontal,
    data.image_prompt_vertical,
  ]) {
    if (
      !/full paper cut/i.test(prompt) ||
      !/paper quilling/i.test(prompt) ||
      !/sin fotograf[ií]a/i.test(prompt) ||
      !/maqueta/i.test(prompt) ||
      !/diorama/i.test(prompt) ||
      !/CGI|render 3D/i.test(prompt)
    ) {
      throw new Error("La dirección visual full paper cut está incompleta.");
    }
  }
  if (String(data.excerpt).length > 180) {
    throw new Error("excerpt supera 180 caracteres.");
  }
  if (String(data.seo_title).length > 60) {
    throw new Error("seo_title supera 60 caracteres.");
  }
  if (String(data.seo_description).length > 165) {
    throw new Error("seo_description supera 165 caracteres.");
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

async function savePlan(data, taxonomy) {
  const directory = path.resolve("artifacts", "editorial-backups");
  await fs.mkdir(directory, { recursive: true });
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const output = path.join(
    directory,
    `${data.slug}-create-${timestamp}.json`,
  );
  await fs.writeFile(
    output,
    `${JSON.stringify(
      {
        createdAt: new Date().toISOString(),
        action: "create",
        before: null,
        taxonomy,
        record: data,
      },
      null,
      2,
    )}\n`,
    "utf8",
  );
  return output;
}

async function insertRecord(client, data, taxonomy, tagIds) {
  await client.query("LOCK TABLE myths IN SHARE ROW EXCLUSIVE MODE");
  const existing = await client.query(
    "SELECT id FROM myths WHERE slug = $1 LIMIT 1",
    [data.slug],
  );
  if (existing.rowCount) {
    throw new Error(`${data.slug} ya existe y no será sobrescrito.`);
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
      "Segunda escena vertical 9:16 como ilustración editorial 2D full paper cut y paper quilling; sin fotografía de papel, objeto físico, maqueta, diorama, CGI ni render 3D.",
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
  const modulePath = path.resolve(options.file);
  const { default: data } = await import(pathToFileURL(modulePath).href);
  validate(data);
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
      `SELECT region_id, community_id
       FROM myths
       WHERE category_path = $1
       GROUP BY region_id, community_id`,
      [data.category_path],
    );
    if (taxonomyResult.rowCount !== 1) {
      throw new Error(
        `La categoría debe resolver una taxonomía existente única: ${data.category_path}.`,
      );
    }
    const taxonomy = taxonomyResult.rows[0];
    const existing = await client.query(
      "SELECT id FROM myths WHERE slug = $1 LIMIT 1",
      [data.slug],
    );
    const tagResult = await client.query(
      "SELECT id, name FROM tags WHERE name = ANY($1::text[])",
      [data.tags],
    );
    const tagsByName = new Map(
      tagResult.rows.map(({ id, name }) => [name, Number(id)]),
    );
    const missingTags = data.tags.filter((name) => !tagsByName.has(name));
    if (missingTags.length) {
      throw new Error(`Faltan etiquetas: ${missingTags.join(", ")}.`);
    }
    console.log(
      JSON.stringify(
        {
          mode: options.apply ? "apply" : "dry-run",
          slug: data.slug,
          existing: existing.rowCount > 0,
          categoryPath: data.category_path,
          taxonomy,
          sources: data.keySources.length + data.sources.length,
          tags: data.tags,
          images: {
            horizontal: data.image_url,
            vertical: data.vertical_image_url,
          },
        },
        null,
        2,
      ),
    );
    if (existing.rowCount) throw new Error(`${data.slug} ya existe.`);
    if (!options.apply) return;
    const backupPath = await savePlan(data, taxonomy);
    await client.query("BEGIN");
    try {
      const created = await insertRecord(
        client,
        data,
        taxonomy,
        data.tags.map((name) => tagsByName.get(name)),
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
