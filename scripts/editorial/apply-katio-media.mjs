import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

import dotenv from "dotenv";
import pg from "pg";

import { katioMedia } from "../../editorial/katio/media.mjs";
import { katioMythsBySlug } from "../../editorial/katio/records.mjs";
import { katioReviewedSlugs } from "../../editorial/katio/universe.mjs";

const { Client } = pg;
const confirmationPhrase = "sync-katio-horizontal-and-vertical-paper-cut-media";
const verticalBasePrompt =
  "Segunda escena vertical 9:16 de un relato revisado como ilustración full paper cut y paper quilling; sin fotografía, objeto físico, maqueta, diorama ni render 3D.";

function parseArgs(argv) {
  const options = { apply: false, confirmation: "", envFile: ".env" };
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

function connectionString() {
  return (
    process.env.POSTGRES_URL_NON_POOLING ||
    process.env.DATABASE_URL_UNPOOLED ||
    process.env.POSTGRES_URL ||
    process.env.DATABASE_URL
  );
}

function validateInventory() {
  for (const slug of katioReviewedSlugs) {
    const dossier = katioMythsBySlug[slug];
    const media = katioMedia[slug];
    if (!dossier || !media) throw new Error(`${slug}: inventario incompleto.`);
    if (
      !/^https:\/\//.test(media.horizontal) ||
      !/^https:\/\//.test(media.vertical) ||
      media.horizontal === media.vertical
    ) {
      throw new Error(`${slug}: falta una pareja visual pública y distinta.`);
    }
    if (
      /PENDING_/.test(media.horizontal) ||
      /PENDING_/.test(media.vertical)
    ) {
      throw new Error(`${slug}: quedan marcadores visuales pendientes.`);
    }
  }
}

async function saveBackup(payload) {
  const directory = path.resolve("artifacts", "editorial-backups");
  await fs.mkdir(directory, { recursive: true });
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const output = path.join(directory, `katio-media-${timestamp}.json`);
  await fs.writeFile(
    output,
    `${JSON.stringify(
      { createdAt: new Date().toISOString(), ...payload },
      null,
      2,
    )}\n`,
    "utf8",
  );
  return output;
}

async function run() {
  const options = parseArgs(process.argv.slice(2));
  validateInventory();
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
    const result = await client.query(
      `SELECT m.id, m.slug, m.title, m.image_url, m.image_prompt,
              e.id AS editorial_id, e.image_url AS editorial_image_url,
              e.image_prompt_horizontal, e.image_prompt_vertical,
              v.id AS vertical_id, v.entity_name, v.entity_slug,
              v.base_prompt, v.custom_prompt, v.image_url AS vertical_image_url
       FROM myths m
       LEFT JOIN editorial_myths e ON e.source_myth_id = m.id
       LEFT JOIN vertical_images v
         ON v.entity_type = 'myth' AND v.entity_id = m.id
       WHERE m.slug = ANY($1::text[])
       ORDER BY m.slug, v.id`,
      [katioReviewedSlugs],
    );
    if (result.rowCount !== katioReviewedSlugs.length) {
      throw new Error(
        `Se esperaban ${katioReviewedSlugs.length} filas con una vertical y hay ${result.rowCount}.`,
      );
    }
    const missing = result.rows.filter(
      ({ editorial_id, vertical_id }) => !editorial_id || !vertical_id,
    );
    if (missing.length) {
      throw new Error(
        `Faltan expedientes o verticales: ${missing
          .map(({ slug }) => slug)
          .join(", ")}.`,
      );
    }

    const changes = result.rows.filter((row) => {
      const dossier = katioMythsBySlug[row.slug];
      const media = katioMedia[row.slug];
      return (
        row.title !== dossier.title ||
        row.image_url !== media.horizontal ||
        row.editorial_image_url !== media.horizontal ||
        row.image_prompt !== dossier.image_prompt_horizontal ||
        row.image_prompt_horizontal !== dossier.image_prompt_horizontal ||
        row.image_prompt_vertical !== dossier.image_prompt_vertical ||
        row.entity_name !== dossier.title ||
        row.entity_slug !== dossier.slug ||
        row.base_prompt !== verticalBasePrompt ||
        row.custom_prompt !== dossier.image_prompt_vertical ||
        row.vertical_image_url !== media.vertical
      );
    });
    console.log(
      JSON.stringify(
        {
          mode: options.apply ? "apply" : "dry-run",
          universe: result.rowCount,
          changes: changes.map((row) => ({
            slug: row.slug,
            horizontalChanged:
              row.image_url !== katioMedia[row.slug].horizontal,
            verticalChanged:
              row.vertical_image_url !== katioMedia[row.slug].vertical,
            metadataChanged:
              row.base_prompt !== verticalBasePrompt ||
              row.entity_name !== katioMythsBySlug[row.slug].title,
          })),
        },
        null,
        2,
      ),
    );
    if (!options.apply || !changes.length) return;

    const backupPath = await saveBackup({
      before: result.rows,
      after: Object.fromEntries(
        katioReviewedSlugs.map((slug) => [
          slug,
          {
            title: katioMythsBySlug[slug].title,
            media: katioMedia[slug],
            imagePromptHorizontal:
              katioMythsBySlug[slug].image_prompt_horizontal,
            imagePromptVertical: katioMythsBySlug[slug].image_prompt_vertical,
          },
        ]),
      ),
    });
    await client.query("BEGIN");
    try {
      for (const row of result.rows) {
        const dossier = katioMythsBySlug[row.slug];
        const media = katioMedia[row.slug];
        await client.query(
          `UPDATE myths
           SET title = $1, image_url = $2, image_prompt = $3, updated_at = NOW()
           WHERE id = $4`,
          [dossier.title, media.horizontal, dossier.image_prompt_horizontal, row.id],
        );
        await client.query(
          `UPDATE editorial_myths
           SET title = $1,
               image_url = $2,
               image_prompt = $3,
               image_prompt_horizontal = $3,
               image_prompt_vertical = $4,
               updated_at = NOW()
           WHERE source_myth_id = $5`,
          [
            dossier.title,
            media.horizontal,
            dossier.image_prompt_horizontal,
            dossier.image_prompt_vertical,
            row.id,
          ],
        );
        await client.query(
          `UPDATE vertical_images
           SET entity_name = $1,
               entity_slug = $2,
               base_prompt = $3,
               custom_prompt = $4,
               image_url = $5,
               updated_at = NOW()
           WHERE id = $6`,
          [
            dossier.title,
            dossier.slug,
            verticalBasePrompt,
            dossier.image_prompt_vertical,
            media.vertical,
            row.vertical_id,
          ],
        );
      }
      await client.query("COMMIT");
      console.log(
        JSON.stringify(
          { status: "applied", changed: changes.length, backupPath },
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
