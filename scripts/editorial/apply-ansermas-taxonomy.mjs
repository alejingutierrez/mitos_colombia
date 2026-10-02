import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

import dotenv from "dotenv";
import pg from "pg";

import {
  ansermasCategoryBySlug,
  canonicalAnsermasSlugs,
} from "../../editorial/ansermas/universe.mjs";

const { Client } = pg;
const confirmationPhrase = "move-two-ansermas-myths-to-risaralda-taxonomy";

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

async function run() {
  const options = parseArgs(process.argv.slice(2));
  if (options.apply && options.confirmation !== confirmationPhrase) {
    throw new Error(`Para aplicar usa --confirm=${confirmationPhrase}.`);
  }
  dotenv.config({ path: path.resolve(options.envFile), quiet: true });
  const connectionString =
    process.env.POSTGRES_URL_NON_POOLING ||
    process.env.DATABASE_URL_UNPOOLED ||
    process.env.POSTGRES_URL ||
    process.env.DATABASE_URL;
  if (!connectionString) throw new Error("No hay conexión Postgres.");
  const client = new Client({
    connectionString,
    ssl: { rejectUnauthorized: false },
  });
  await client.connect();
  try {
    const current = await client.query(
      `SELECT m.*, c.slug AS community_slug
       FROM myths m
       JOIN communities c ON c.id = m.community_id
       WHERE m.slug = ANY($1::text[])
       ORDER BY m.slug`,
      [canonicalAnsermasSlugs],
    );
    if (current.rowCount !== canonicalAnsermasSlugs.length) {
      throw new Error(
        `Se esperaban ${canonicalAnsermasSlugs.length} mitos y hay ${current.rowCount}.`,
      );
    }
    const outside = current.rows.filter(
      ({ community_slug }) => community_slug !== "ansermas",
    );
    if (outside.length) {
      throw new Error(
        `Hay slugs fuera de Ansermas: ${outside.map(({ slug }) => slug).join(", ")}.`,
      );
    }
    const changes = current.rows.filter(
      ({ slug, category_path }) =>
        category_path !== ansermasCategoryBySlug[slug],
    );
    console.log(
      JSON.stringify(
        {
          mode: options.apply ? "apply" : "dry-run",
          universe: current.rowCount,
          changes: changes.map(({ slug, category_path }) => ({
            slug,
            before: category_path,
            after: ansermasCategoryBySlug[slug],
          })),
        },
        null,
        2,
      ),
    );
    if (!options.apply || !changes.length) return;

    const directory = path.resolve("artifacts", "editorial-backups");
    await fs.mkdir(directory, { recursive: true });
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const backupPath = path.join(
      directory,
      `ansermas-taxonomy-${timestamp}.json`,
    );
    await fs.writeFile(
      backupPath,
      `${JSON.stringify(current.rows, null, 2)}\n`,
      "utf8",
    );

    await client.query("BEGIN");
    try {
      for (const row of changes) {
        await client.query(
          `UPDATE myths
           SET category_path = $1, updated_at = NOW()
           WHERE id = $2`,
          [ansermasCategoryBySlug[row.slug], row.id],
        );
        await client.query(
          `UPDATE editorial_myths
           SET category_path = $1, updated_at = NOW()
           WHERE source_myth_id = $2`,
          [ansermasCategoryBySlug[row.slug], row.id],
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
