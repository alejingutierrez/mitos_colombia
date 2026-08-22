#!/usr/bin/env node

/**
 * Añade a Postgres las columnas de la tercera escena del tríptico.
 * Es idempotente: todo va con ADD COLUMN IF NOT EXISTS.
 *
 * Uso: node scripts/migrate-square-images-pg.mjs [--env <ruta al .env>]
 */

import { sql } from "@vercel/postgres";
import dotenv from "dotenv";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const REPO_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const envFlag = process.argv.indexOf("--env");
const envPaths =
  envFlag > -1
    ? [process.argv[envFlag + 1]]
    : [join(REPO_ROOT, ".env.local"), join(REPO_ROOT, ".env")];
for (const path of envPaths) dotenv.config({ path, quiet: true });
if (!process.env.POSTGRES_URL && process.env.DATABASE_URL) {
  process.env.POSTGRES_URL = process.env.DATABASE_URL;
}

const COLUMNS = [
  ["square_image_url", "TEXT"],
  ["image_prompt_horizontal", "TEXT"],
  ["image_prompt_vertical", "TEXT"],
  ["image_prompt_square", "TEXT"],
];

async function main() {
  if (!process.env.POSTGRES_URL) {
    throw new Error("POSTGRES_URL no está configurada. Pasa --env <ruta>.");
  }

  for (const [name, type] of COLUMNS) {
    await sql.query(
      `ALTER TABLE myths ADD COLUMN IF NOT EXISTS ${name} ${type}`
    );
    console.log(`  ✓ myths.${name}`);
  }

  const check = await sql.query(
    `SELECT column_name FROM information_schema.columns
     WHERE table_name = 'myths' AND column_name = ANY($1::text[])
     ORDER BY column_name`,
    [COLUMNS.map(([name]) => name)]
  );
  console.log(
    `\nColumnas presentes: ${check.rows.map((r) => r.column_name).join(", ")}\n`
  );
}

main().catch((error) => {
  console.error(`\n✖ ${error.message}\n`);
  process.exitCode = 1;
});
