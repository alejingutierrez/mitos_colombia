import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

import dotenv from "dotenv";
import pg from "pg";

import {
  chamiCategoryBySlug,
  sourceChamiSlugs,
} from "../../editorial/chami/universe.mjs";

const { Client } = pg;
const confirmationPhrase = "chami-21-localized-category-paths";

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

async function saveBackup(rows) {
  const directory = path.resolve("artifacts", "editorial-backups");
  await fs.mkdir(directory, { recursive: true });
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const output = path.join(directory, `chami-taxonomy-${timestamp}.json`);
  await fs.writeFile(
    output,
    `${JSON.stringify({ createdAt: new Date().toISOString(), rows }, null, 2)}\n`,
    "utf8",
  );
  return output;
}

async function run() {
  const options = parseArgs(process.argv.slice(2));
  dotenv.config({ path: path.resolve(options.envFile), quiet: true });
  if (!connectionString()) {
    throw new Error(`No se encontró conexión Postgres en ${options.envFile}.`);
  }
  if (options.apply && options.confirmation !== confirmationPhrase) {
    throw new Error(`Para aplicar usa --confirm=${confirmationPhrase}.`);
  }

  const client = new Client({
    connectionString: connectionString(),
    ssl: { rejectUnauthorized: false },
  });
  await client.connect();
  try {
    const current = await client.query(
      `SELECT m.id, m.slug, m.category_path, c.slug AS community_slug
       FROM myths m
       JOIN communities c ON c.id = m.community_id
       WHERE m.slug = ANY($1::text[])
       ORDER BY m.slug`,
      [sourceChamiSlugs],
    );
    if (current.rowCount !== sourceChamiSlugs.length) {
      throw new Error(
        `Se esperaban ${sourceChamiSlugs.length} mitos y se encontraron ${current.rowCount}.`,
      );
    }
    const wrongCommunity = current.rows.filter(
      ({ community_slug }) => community_slug !== "chami",
    );
    if (wrongCommunity.length) {
      throw new Error(
        `Hay slugs fuera de Chamí: ${wrongCommunity.map(({ slug }) => slug).join(", ")}.`,
      );
    }
    const changes = current.rows
      .map((row) => ({
        ...row,
        next_category_path: chamiCategoryBySlug[row.slug],
      }))
      .filter(({ category_path, next_category_path }) => {
        return category_path !== next_category_path;
      });
    const distribution = Object.values(chamiCategoryBySlug).reduce(
      (counts, category) => {
        counts[category] = (counts[category] || 0) + 1;
        return counts;
      },
      {},
    );
    console.log(
      JSON.stringify(
        {
          mode: options.apply ? "apply" : "dry-run",
          universe: current.rowCount,
          changes: changes.length,
          distribution,
          preview: changes.map(
            ({ slug, category_path, next_category_path }) => ({
              slug,
              before: category_path,
              after: next_category_path,
            }),
          ),
        },
        null,
        2,
      ),
    );
    if (!options.apply || !changes.length) return;

    const backupPath = await saveBackup(current.rows);
    await client.query("BEGIN");
    try {
      for (const change of changes) {
        const result = await client.query(
          `UPDATE myths
           SET category_path = $1, updated_at = NOW()
           WHERE id = $2 AND category_path = $3
           RETURNING id`,
          [change.next_category_path, change.id, change.category_path],
        );
        if (result.rowCount !== 1) {
          throw new Error(`${change.slug}: cambió desde el preflight.`);
        }
        await client.query(
          `UPDATE editorial_myths
           SET category_path = $1, updated_at = NOW()
           WHERE source_myth_id = $2`,
          [change.next_category_path, change.id],
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
