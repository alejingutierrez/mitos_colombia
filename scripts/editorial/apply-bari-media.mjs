import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

import dotenv from "dotenv";
import pg from "pg";

import { bariMedia } from "../../editorial/bari/media.mjs";
import { bariMythsBySlug } from "../../editorial/bari/records.mjs";
import { canonicalBariSlugs } from "../../editorial/bari/universe.mjs";

const { Client } = pg;
const confirmationPhrase = "sync-six-bari-image-pairs";
const verticalBasePrompt =
  "Segunda escena vertical 9:16 de un relato Barí como ilustración editorial 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.";

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

function validate() {
  for (const slug of canonicalBariSlugs) {
    const record = bariMythsBySlug[slug];
    const media = bariMedia[slug];
    if (
      !record ||
      !/^https:\/\//.test(media?.horizontal || "") ||
      !/^https:\/\//.test(media?.vertical || "") ||
      media.horizontal === media.vertical ||
      /pending\.invalid/.test(media.horizontal + media.vertical)
    ) {
      throw new Error(`${slug}: inventario visual inválido.`);
    }
  }
}

async function run() {
  const options = parseArgs(process.argv.slice(2));
  validate();
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
    const current = await client.query(
      `SELECT m.id, m.slug, m.image_url, m.image_prompt,
              e.image_url AS editorial_image_url,
              e.image_prompt_horizontal, e.image_prompt_vertical,
              v.id AS vertical_id, v.image_url AS vertical_image_url,
              v.base_prompt, v.custom_prompt
       FROM myths m
       LEFT JOIN editorial_myths e ON e.source_myth_id = m.id
       LEFT JOIN vertical_images v
         ON v.entity_type = 'myth' AND v.entity_id = m.id
       WHERE m.slug = ANY($1::text[])
       ORDER BY m.slug`,
      [canonicalBariSlugs],
    );
    if (current.rowCount !== canonicalBariSlugs.length) {
      throw new Error(
        `Se esperaban ${canonicalBariSlugs.length} mitos y hay ${current.rowCount}.`,
      );
    }
    console.log(
      JSON.stringify(
        {
          mode: options.apply ? "apply" : "dry-run",
          updates: current.rows.map((row) => ({
            slug: row.slug,
            before: [row.image_url, row.vertical_image_url],
            after: [
              bariMedia[row.slug].horizontal,
              bariMedia[row.slug].vertical,
            ],
          })),
        },
        null,
        2,
      ),
    );
    if (!options.apply) return;

    const directory = path.resolve("artifacts", "editorial-backups");
    await fs.mkdir(directory, { recursive: true });
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const backupPath = path.join(
      directory,
      `bari-media-${timestamp}.json`,
    );
    await fs.writeFile(
      backupPath,
      `${JSON.stringify(current.rows, null, 2)}\n`,
      "utf8",
    );
    await client.query("BEGIN");
    try {
      for (const row of current.rows) {
        const record = bariMythsBySlug[row.slug];
        const media = bariMedia[row.slug];
        await client.query(
          `UPDATE myths
           SET image_url = $2, image_prompt = $3, updated_at = NOW()
           WHERE id = $1`,
          [row.id, media.horizontal, record.image_prompt_horizontal],
        );
        await client.query(
          `UPDATE editorial_myths
           SET image_url = $2,
               image_prompt = $3,
               image_prompt_horizontal = $3,
               image_prompt_vertical = $4,
               updated_at = NOW()
           WHERE source_myth_id = $1`,
          [
            row.id,
            media.horizontal,
            record.image_prompt_horizontal,
            record.image_prompt_vertical,
          ],
        );
        const vertical = await client.query(
          `UPDATE vertical_images
           SET entity_name = $2,
               entity_slug = $3,
               base_prompt = $4,
               custom_prompt = $5,
               image_url = $6
           WHERE entity_type = 'myth' AND entity_id = $1
           RETURNING id`,
          [
            row.id,
            record.title,
            row.slug,
            verticalBasePrompt,
            record.image_prompt_vertical,
            media.vertical,
          ],
        );
        if (vertical.rowCount !== 1) {
          throw new Error(`${row.slug}: falta la fila vertical única.`);
        }
      }
      await client.query("COMMIT");
      console.log(JSON.stringify({ status: "applied", backupPath }, null, 2));
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
