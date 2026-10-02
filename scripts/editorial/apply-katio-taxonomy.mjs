import process from "node:process";
import path from "node:path";

import dotenv from "dotenv";
import pg from "pg";

import {
  canonicalKatioSlugs,
  katioCategoryBySlug,
} from "../../editorial/katio/universe.mjs";

const { Client } = pg;

function parseArgs(argv) {
  const options = { envFile: ".env", apply: false };
  for (const arg of argv) {
    if (arg === "--apply") options.apply = true;
    else if (arg.startsWith("--env=")) {
      options.envFile = arg.slice("--env=".length);
    } else throw new Error(`Argumento no reconocido: ${arg}`);
  }
  return options;
}

async function run() {
  const options = parseArgs(process.argv.slice(2));
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
    const rows = await client.query(
      `SELECT m.id, m.slug, m.category_path, c.slug AS community_slug
       FROM myths m
       JOIN communities c ON c.id = m.community_id
       WHERE m.slug = ANY($1::text[])
       ORDER BY m.slug`,
      [canonicalKatioSlugs],
    );
    if (rows.rowCount !== canonicalKatioSlugs.length) {
      throw new Error(
        `Se esperaban ${canonicalKatioSlugs.length} mitos Katío y hay ${rows.rowCount}.`,
      );
    }
    const outside = rows.rows.filter(
      ({ community_slug }) => community_slug !== "katios",
    );
    if (outside.length) {
      throw new Error(
        `Hay slugs fuera de Katíos: ${outside.map(({ slug }) => slug).join(", ")}.`,
      );
    }
    const changes = rows.rows.filter(
      ({ slug, category_path }) =>
        category_path !== katioCategoryBySlug[slug],
    );
    console.log(
      JSON.stringify(
        {
          mode: options.apply ? "apply" : "dry-run",
          universe: rows.rowCount,
          changes: changes.map(({ slug, category_path }) => ({
            slug,
            before: category_path,
            after: katioCategoryBySlug[slug],
          })),
        },
        null,
        2,
      ),
    );
    if (!options.apply || !changes.length) return;
    await client.query("BEGIN");
    try {
      for (const row of changes) {
        await client.query(
          `UPDATE myths
           SET category_path = $1, updated_at = NOW()
           WHERE id = $2`,
          [katioCategoryBySlug[row.slug], row.id],
        );
        await client.query(
          `UPDATE editorial_myths
           SET category_path = $1, updated_at = NOW()
           WHERE source_myth_id = $2`,
          [katioCategoryBySlug[row.slug], row.id],
        );
      }
      await client.query("COMMIT");
      console.log(JSON.stringify({ status: "applied", changed: changes.length }));
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
