import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

import dotenv from "dotenv";
import pg from "pg";

import {
  uwaCommunitySeo,
  uwaCommunitySeoPayload,
} from "../../editorial/uwa/community.mjs";

const { Client } = pg;
const PAGE_TYPE = "community";
const SLUG = "u-wa";

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
    const current = await client.query(
      `SELECT * FROM seo_pages
       WHERE page_type = $1 AND slug = $2
       LIMIT 1`,
      [PAGE_TYPE, SLUG],
    );
    console.log(
      JSON.stringify(
        {
          mode: options.apply ? "apply" : "dry-run",
          slug: SLUG,
          previousTitle: current.rows[0]?.meta_title || null,
          nextTitle: uwaCommunitySeo.meta_title,
          canonical: uwaCommunitySeo.canonical_path,
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
      `${SLUG}-community-seo-${timestamp}.json`,
    );
    await fs.writeFile(
      backupPath,
      `${JSON.stringify(current.rows[0] || null, null, 2)}\n`,
      "utf8",
    );
    const seo = uwaCommunitySeo;
    const result = await client.query(
      `INSERT INTO seo_pages (
         page_type, slug, meta_title, meta_description, meta_keywords,
         og_title, og_description, twitter_title, twitter_description,
         canonical_path, summary, payload, updated_at
       )
       VALUES (
         $1, $2, $3, $4, $5,
         $6, $7, $8, $9,
         $10, $11, $12::jsonb, NOW()
       )
       ON CONFLICT (page_type, slug)
       DO UPDATE SET
         meta_title = EXCLUDED.meta_title,
         meta_description = EXCLUDED.meta_description,
         meta_keywords = EXCLUDED.meta_keywords,
         og_title = EXCLUDED.og_title,
         og_description = EXCLUDED.og_description,
         twitter_title = EXCLUDED.twitter_title,
         twitter_description = EXCLUDED.twitter_description,
         canonical_path = EXCLUDED.canonical_path,
         summary = EXCLUDED.summary,
         payload = EXCLUDED.payload,
         updated_at = NOW()
       RETURNING page_type, slug, meta_title, canonical_path`,
      [
        PAGE_TYPE,
        SLUG,
        seo.meta_title,
        seo.meta_description,
        seo.meta_keywords,
        seo.og_title,
        seo.og_description,
        seo.twitter_title,
        seo.twitter_description,
        seo.canonical_path,
        seo.summary,
        JSON.stringify(uwaCommunitySeoPayload()),
      ],
    );
    console.log(
      JSON.stringify(
        { status: "applied", backupPath, seo: result.rows[0] },
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
