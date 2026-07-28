import { createHash } from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

import { del, put } from "@vercel/blob";
import dotenv from "dotenv";
import pg from "pg";
import sharp from "sharp";

import juanTama from "../../editorial/nasa/myths/juan-tama.mjs";
import { NASA_CATEGORY_PATH } from "../../editorial/nasa/universe.mjs";

const { Client } = pg;
const confirmationPhrase = "create-nasa-juan-tama-with-image-pair";
const rootDir = path.resolve(new URL("../..", import.meta.url).pathname);

const assets = [
  {
    orientation: "horizontal",
    width: 1536,
    height: 864,
    inputPath: "output/imagegen/nasa/juan-tama/juan-tama-horizontal.png",
  },
  {
    orientation: "vertical",
    width: 864,
    height: 1536,
    inputPath: "output/imagegen/nasa/juan-tama/juan-tama-vertical.png",
  },
];

function parseArgs(argv) {
  const options = { apply: false, confirmation: "", envFile: ".env" };
  for (const arg of argv) {
    if (arg === "--apply") {
      options.apply = true;
    } else if (arg.startsWith("--confirm=")) {
      options.confirmation = arg.slice("--confirm=".length);
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

function validateDossier() {
  const ranges = {
    mito: [300, 650],
    historia: [220, 600],
    versiones: [170, 550],
    leccion: [8, 22],
    similitudes: [150, 450],
  };
  for (const [field, [min, max]] of Object.entries(ranges)) {
    const count = words(juanTama[field]);
    if (count < min || count > max) {
      throw new Error(
        `${field}: ${count} palabras; se esperaban ${min}-${max}.`,
      );
    }
  }
  const sourceUrls = [...juanTama.keySources, ...juanTama.sources].map(
    ({ url }) => url,
  );
  if (sourceUrls.length < 5 || new Set(sourceUrls).size !== sourceUrls.length) {
    throw new Error("Fuentes insuficientes o duplicadas.");
  }
  if (juanTama.category_path !== NASA_CATEGORY_PATH) {
    throw new Error(`Categoría inesperada: ${juanTama.category_path}.`);
  }
  if (
    !juanTama.image_prompt_horizontal ||
    !juanTama.image_prompt_vertical ||
    juanTama.image_prompt_horizontal === juanTama.image_prompt_vertical
  ) {
    throw new Error("Los prompts horizontal y vertical deben ser distintos.");
  }
}

async function prepareAssets() {
  const prepared = [];
  for (const asset of assets) {
    const absolutePath = path.join(rootDir, asset.inputPath);
    const source = await fs.readFile(absolutePath);
    const buffer = await sharp(source)
      .rotate()
      .resize(asset.width, asset.height, {
        fit: "cover",
        position: "centre",
      })
      .jpeg({ quality: 92, chromaSubsampling: "4:4:4" })
      .toBuffer();
    const metadata = await sharp(buffer).metadata();
    if (
      metadata.format !== "jpeg" ||
      metadata.width !== asset.width ||
      metadata.height !== asset.height
    ) {
      throw new Error(
        `${asset.orientation}: conversión inesperada ${metadata.format} ${metadata.width}x${metadata.height}.`,
      );
    }
    prepared.push({
      ...asset,
      buffer,
      bytes: buffer.length,
      sha256: createHash("sha256").update(buffer).digest("hex"),
    });
  }
  if (prepared[0].sha256 === prepared[1].sha256) {
    throw new Error("La pareja visual debe contener dos escenas distintas.");
  }
  return prepared;
}

function connectionString() {
  return (
    process.env.POSTGRES_URL_NON_POOLING ||
    process.env.DATABASE_URL_UNPOOLED ||
    process.env.POSTGRES_URL ||
    process.env.DATABASE_URL
  );
}

async function savePlan(prepared) {
  const outputDir = path.join(rootDir, "artifacts", "editorial-backups");
  await fs.mkdir(outputDir, { recursive: true });
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const outputPath = path.join(
    outputDir,
    `nasa-juan-tama-create-${timestamp}.json`,
  );
  await fs.writeFile(
    outputPath,
    `${JSON.stringify(
      {
        createdAt: new Date().toISOString(),
        action: "create",
        before: null,
        record: {
          ...juanTama,
          image_url: null,
          vertical_image_url: null,
        },
        assets: prepared.map(({ orientation, width, height, bytes, sha256 }) => ({
          orientation,
          width,
          height,
          bytes,
          sha256,
        })),
      },
      null,
      2,
    )}\n`,
    "utf8",
  );
  return outputPath;
}

function blobPath(orientation, runEpoch) {
  const folder = orientation === "horizontal" ? "mitos" : "vertical/myth";
  return `${folder}/juan-tama-${runEpoch}.jpg`;
}

async function uploadAssets(prepared, runEpoch) {
  const uploaded = [];
  try {
    for (const asset of prepared) {
      const blob = await put(blobPath(asset.orientation, runEpoch), asset.buffer, {
        access: "public",
        contentType: "image/jpeg",
      });
      uploaded.push({ ...asset, url: blob.url });
    }
    return uploaded;
  } catch (error) {
    await Promise.allSettled(uploaded.map(({ url }) => del(url)));
    throw error;
  }
}

async function insertJuanTama(client, taxonomy, tagIds, uploaded) {
  const horizontal = uploaded.find(
    ({ orientation }) => orientation === "horizontal",
  );
  const vertical = uploaded.find(({ orientation }) => orientation === "vertical");
  if (!horizontal || !vertical) {
    throw new Error("Falta una URL cargada de la pareja visual.");
  }

  await client.query("LOCK TABLE myths IN SHARE ROW EXCLUSIVE MODE");
  const existing = await client.query(
    "SELECT id FROM myths WHERE slug = $1 LIMIT 1",
    [juanTama.slug],
  );
  if (existing.rowCount) {
    throw new Error("juan-tama ya existe y no será sobrescrito.");
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
      juanTama.title,
      juanTama.slug,
      taxonomy.region_id,
      taxonomy.community_id,
      juanTama.category_path,
      juanTama.tags.join(", "),
      juanTama.mito,
      juanTama.historia,
      juanTama.versiones,
      juanTama.leccion,
      juanTama.similitudes,
      juanTama.content,
      juanTama.excerpt,
      juanTama.seo_title,
      juanTama.seo_description,
      juanTama.focus_keyword,
      juanTama.focus_keywords.join("|"),
      juanTama.image_prompt_horizontal,
      horizontal.url,
      juanTama.latitude,
      juanTama.longitude,
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
      juanTama.title,
      juanTama.slug,
      taxonomy.region_id,
      taxonomy.community_id,
      juanTama.category_path,
      juanTama.tags.join(", "),
      juanTama.mito,
      juanTama.historia,
      juanTama.versiones,
      juanTama.leccion,
      juanTama.similitudes,
      juanTama.content,
      juanTama.excerpt,
      juanTama.seo_title,
      juanTama.seo_description,
      juanTama.focus_keyword,
      juanTama.focus_keywords.join("|"),
      juanTama.image_prompt_horizontal,
      juanTama.image_prompt_horizontal,
      juanTama.image_prompt_vertical,
      horizontal.url,
      juanTama.latitude,
      juanTama.longitude,
      sourceRow,
      JSON.stringify(juanTama.sources),
      JSON.stringify(juanTama.keySources),
      juanTama.researchNotes,
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
      juanTama.title,
      juanTama.slug,
      "Segunda escena vertical 9:16 de un mito Nasa como ilustración editorial completa full paper cut y paper quilling; sin fotografía, maqueta física, diorama ni render 3D.",
      juanTama.image_prompt_vertical,
      vertical.url,
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
    [mythId, juanTama.focus_keywords],
  );
  await client.query(
    `INSERT INTO editorial_myth_keywords (editorial_myth_id, keyword)
     SELECT $1, keyword FROM unnest($2::text[]) AS keyword`,
    [editorialId, juanTama.focus_keywords],
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
      juanTama.slug,
      juanTama.seo.meta_title,
      juanTama.seo.meta_description,
      juanTama.seo.meta_keywords,
      juanTama.seo.og_title,
      juanTama.seo.og_description,
      juanTama.seo.twitter_title,
      juanTama.seo.twitter_description,
      juanTama.seo.canonical_path,
    ],
  );

  return {
    mythId,
    editorialId,
    sourceRow,
    horizontalUrl: horizontal.url,
    verticalUrl: vertical.url,
  };
}

async function run() {
  const options = parseArgs(process.argv.slice(2));
  validateDossier();
  const prepared = await prepareAssets();
  const backupPath = await savePlan(prepared);

  dotenv.config({ path: path.resolve(options.envFile), quiet: true });
  if (!connectionString()) {
    throw new Error(`No se encontró conexión Postgres en ${options.envFile}.`);
  }
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    throw new Error(`No se encontró BLOB_READ_WRITE_TOKEN en ${options.envFile}.`);
  }

  const client = new Client({
    connectionString: connectionString(),
    ssl: { rejectUnauthorized: false },
  });
  await client.connect();
  let uploaded = [];
  try {
    const taxonomyResult = await client.query(
      `SELECT r.id AS region_id, c.id AS community_id
       FROM regions r
       JOIN communities c ON c.region_id = r.id
       WHERE r.name = 'Pacífico' AND c.slug = 'nasa-paeces'
       ORDER BY c.id
       LIMIT 1`,
    );
    if (!taxonomyResult.rowCount) {
      throw new Error("No existe la taxonomía Pacífico > Nasa - Paeces.");
    }
    const taxonomy = taxonomyResult.rows[0];

    const existing = await client.query(
      "SELECT id FROM myths WHERE slug = $1 LIMIT 1",
      [juanTama.slug],
    );
    if (existing.rowCount) {
      throw new Error("juan-tama ya existe; se detiene para evitar duplicación.");
    }

    const tagResult = await client.query(
      "SELECT id, name FROM tags WHERE name = ANY($1::text[])",
      [juanTama.tags],
    );
    const tagsByName = new Map(
      tagResult.rows.map(({ id, name }) => [name, Number(id)]),
    );
    const missingTags = juanTama.tags.filter((name) => !tagsByName.has(name));
    if (missingTags.length) {
      throw new Error(`Faltan etiquetas existentes: ${missingTags.join(", ")}`);
    }
    const tagIds = juanTama.tags.map((name) => tagsByName.get(name));

    const plan = {
      mode: options.apply ? "apply" : "dry-run",
      slug: juanTama.slug,
      taxonomy,
      tags: juanTama.tags,
      sources: [...juanTama.keySources, ...juanTama.sources].length,
      images: prepared.map(({ orientation, width, height, bytes, sha256 }) => ({
        orientation,
        width,
        height,
        bytes,
        sha256,
      })),
      backupPath,
    };
    console.log(JSON.stringify(plan, null, 2));

    if (!options.apply) {
      console.log(
        `Dry-run completo. Para aplicar: --apply --confirm=${confirmationPhrase}`,
      );
      return;
    }
    if (options.confirmation !== confirmationPhrase) {
      throw new Error(
        `Confirmación inválida. Use --confirm=${confirmationPhrase}`,
      );
    }

    uploaded = await uploadAssets(prepared, Date.now());
    await client.query("BEGIN");
    try {
      const result = await insertJuanTama(
        client,
        taxonomy,
        tagIds,
        uploaded,
      );
      await client.query("COMMIT");
      console.log(
        JSON.stringify(
          {
            status: "applied",
            ...result,
            backupPath,
          },
          null,
          2,
        ),
      );
    } catch (error) {
      await client.query("ROLLBACK");
      throw error;
    }
  } catch (error) {
    if (uploaded.length) {
      await Promise.allSettled(uploaded.map(({ url }) => del(url)));
    }
    throw error;
  } finally {
    await client.end();
  }
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
