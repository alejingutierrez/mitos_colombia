import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

import dotenv from "dotenv";
import pg from "pg";

import { pananCommunityPage } from "../../editorial/panan/community.mjs";

const { Client } = pg;
const SLUG = "pananes";
const NAME = "Panán";
const confirmationPhrase = "sync-panan-community-identity";

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
      `SELECT id, region_id, name, slug, image_url, image_prompt
       FROM communities
       WHERE slug = $1
       LIMIT 1`,
      [SLUG],
    );
    if (current.rowCount !== 1) throw new Error("No existe la comunidad Panán.");
    const before = current.rows[0];
    console.log(
      JSON.stringify(
        {
          mode: options.apply ? "apply" : "dry-run",
          slug: SLUG,
          before: { name: before.name, imagePrompt: before.image_prompt },
          after: { name: NAME, imagePrompt: pananCommunityPage.imagePrompt },
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
      `${SLUG}-community-profile-${timestamp}.json`,
    );
    await fs.writeFile(
      backupPath,
      `${JSON.stringify(before, null, 2)}\n`,
      "utf8",
    );
    const result = await client.query(
      `UPDATE communities
       SET name = $1, image_prompt = $2
       WHERE id = $3
       RETURNING id, name, slug, image_url, image_prompt`,
      [NAME, pananCommunityPage.imagePrompt, before.id],
    );
    console.log(
      JSON.stringify(
        { status: "applied", backupPath, community: result.rows[0] },
        null,
        2,
      ),
    );
  } finally {
    await client.end();
  }
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
