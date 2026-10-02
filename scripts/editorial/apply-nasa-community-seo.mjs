import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

import dotenv from "dotenv";
import pg from "pg";

import {
  nasaCommunitySeo,
  nasaCommunitySeoPayload,
} from "../../editorial/nasa/community.mjs";

const { Client } = pg;
const PAGE_TYPE = "community";
const SLUG = "nasa-paeces";

function parseArgs(argv) {
  const options = { envFile: ".env", apply: false };
  for (const arg of argv) {
    if (arg === "--apply") {
      options.apply = true;
    } else if (arg.startsWith("--env=")) {
      options.envFile = arg.slice("--env=".length);
    } else {
      throw new Error(`Argumento no reconocido: ${arg}`);
    }
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
  if (!connectionString) {
    throw new Error(`No se encontró una conexión Postgres en ${options.envFile}.`);
  }

  const client = new Client({
    connectionString,
    ssl: { rejectUnauthorized: false },
  });
  await client.connect();
  try {
    const current = await client.query(
      `SELECT *
       FROM seo_pages
       WHERE page_type = $1 AND slug = $2
       LIMIT 1`,
      [PAGE_TYPE, SLUG],
    );
    const report = {
      mode: options.apply ? "apply" : "dry-run",
      pageType: PAGE_TYPE,
      slug: SLUG,
      previousTitle: current.rows[0]?.meta_title || null,
      nextTitle: nasaCommunitySeo.meta_title,
      removesCumanday:
        JSON.stringify(current.rows[0] || {}).toLowerCase().includes("cumanday") &&
        !JSON.stringify(nasaCommunitySeo).toLowerCase().includes("cumanday"),
    };
    console.log(JSON.stringify(report, null, 2));
    if (!options.apply) return;

    const backupDir = path.resolve("artifacts", "editorial-backups");
    await fs.mkdir(backupDir, { recursive: true });
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const backupPath = path.join(
      backupDir,
      `${SLUG}-community-seo-${timestamp}.json`,
    );
    await fs.writeFile(
      backupPath,
      `${JSON.stringify(current.rows[0] || null, null, 2)}\n`,
      "utf8",
    );

    const payload = nasaCommunitySeoPayload();
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
        nasaCommunitySeo.meta_title,
        nasaCommunitySeo.meta_description,
        nasaCommunitySeo.meta_keywords,
        nasaCommunitySeo.og_title,
        nasaCommunitySeo.og_description,
        nasaCommunitySeo.twitter_title,
        nasaCommunitySeo.twitter_description,
        nasaCommunitySeo.canonical_path,
        nasaCommunitySeo.summary,
        JSON.stringify(payload),
      ],
    );
    console.log(
      JSON.stringify(
        {
          status: "applied",
          backupPath,
          seo: result.rows[0],
        },
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
