import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

import dotenv from "dotenv";
import pg from "pg";

import { pananMedia } from "../../editorial/panan/media.mjs";
import { pananMythsBySlug } from "../../editorial/panan/records.mjs";
import { canonicalPananSlugs } from "../../editorial/panan/universe.mjs";

const { Client } = pg;
const confirmationPhrase = "sync-panan-full-paper-cut-media";
const verticalBasePrompt =
  "Segunda escena vertical 9:16 de un relato de Panán, pueblo Pastos, como ilustración editorial 2D full paper cut y paper quilling; sin fotografía de papel, objeto físico, maqueta, diorama, CGI ni render 3D.";

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

async function saveBackup(payload) {
  const directory = path.resolve("artifacts", "editorial-backups");
  await fs.mkdir(directory, { recursive: true });
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const output = path.join(directory, `panan-media-${timestamp}.json`);
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
      [canonicalPananSlugs],
    );
    if (result.rowCount !== canonicalPananSlugs.length) {
      throw new Error(
        `Se esperaban ${canonicalPananSlugs.length} filas y hay ${result.rowCount}.`,
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
      const dossier = pananMythsBySlug[row.slug];
      const media = pananMedia[row.slug];
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
          changes: changes.map(({ slug }) => slug),
        },
        null,
        2,
      ),
    );
    if (!options.apply || !changes.length) return;
    const backupPath = await saveBackup({ before: result.rows });
    await client.query("BEGIN");
    try {
      for (const row of result.rows) {
        const dossier = pananMythsBySlug[row.slug];
        const media = pananMedia[row.slug];
        await client.query(
          `UPDATE myths
           SET title = $1, image_url = $2, image_prompt = $3, updated_at = NOW()
           WHERE id = $4`,
          [
            dossier.title,
            media.horizontal,
            dossier.image_prompt_horizontal,
            row.id,
          ],
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
