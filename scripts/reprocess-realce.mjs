// Reprocesa imagenes YA existentes aplicandoles el mismo realce editorial
// (brillo/saturacion) que la generacion nueva, para lograr uniformidad de color
// sin volver a llamar a OpenAI. Baja el blob actual, aplica enhanceImageBuffer y
// resube, actualizando la URL en la base.
//
// Uso:
//   node scripts/reprocess-realce.mjs --target home-banners [--dry-run]
import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath, pathToFileURL } from "node:url";

import { put } from "@vercel/blob";
import dotenv from "dotenv";
import pg from "pg";

import {
  enhanceImageBuffer,
  IMAGE_POST_BRIGHTNESS,
  IMAGE_POST_SATURATION,
} from "../src/lib/image-generation.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
dotenv.config({ path: path.join(rootDir, ".env") });

const { Client } = pg;
const args = process.argv.slice(2);
const getFlag = (name, fallback = null) => {
  const i = args.indexOf(name);
  return i !== -1 && args[i + 1] ? args[i + 1] : fallback;
};
const hasFlag = (name) => args.includes(name);

const target = getFlag("--target", "home-banners");
const dryRun = hasFlag("--dry-run");
const postgresUrl =
  process.env.POSTGRES_URL_NON_POOLING ||
  process.env.DATABASE_URL_UNPOOLED ||
  process.env.POSTGRES_URL ||
  process.env.DATABASE_URL;

const TARGETS = {
  "home-banners": {
    table: "home_banners",
    blobPrefix: "banners/home",
    preset: "homeBanner",
  },
};

function slugify(value) {
  return String(value || "image")
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

async function main() {
  const cfg = TARGETS[target];
  if (!cfg) throw new Error(`Target invalido: ${target}`);
  if (!postgresUrl) throw new Error("POSTGRES_URL/DATABASE_URL requerido.");
  if (!dryRun && !process.env.BLOB_READ_WRITE_TOKEN)
    throw new Error("BLOB_READ_WRITE_TOKEN requerido.");

  console.log(
    `[realce] target=${target} brillo=${IMAGE_POST_BRIGHTNESS} saturacion=${IMAGE_POST_SATURATION} dryRun=${dryRun}`
  );

  const client = new Client({ connectionString: postgresUrl });
  await client.connect();
  const { rows } = await client.query(
    `SELECT id, slug, image_url FROM ${cfg.table} WHERE image_url IS NOT NULL ORDER BY id`
  );
  console.log(`[realce] piezas: ${rows.length}`);

  const report = [];
  const failures = [];
  for (const row of rows) {
    try {
      if (dryRun) {
        report.push({ id: row.id, slug: row.slug, would_reprocess: true });
        console.log(`[realce] (dry) ${cfg.table}:${row.id} ${row.slug}`);
        continue;
      }
      const res = await fetch(row.image_url);
      if (!res.ok) throw new Error(`fetch ${res.status}`);
      const original = Buffer.from(await res.arrayBuffer());
      const enhanced = await enhanceImageBuffer(original, { preset: cfg.preset });
      const filename = `${cfg.blobPrefix}/${slugify(row.slug)}-realce-${Date.now()}.jpg`;
      const blob = await put(filename, enhanced, {
        access: "public",
        contentType: "image/jpeg",
      });
      await client.query(
        `UPDATE ${cfg.table} SET image_url = $1, updated_at = NOW() WHERE id = $2`,
        [blob.url, row.id]
      );
      report.push({ id: row.id, slug: row.slug, old_url: row.image_url, new_url: blob.url });
      console.log(`[realce] ok ${cfg.table}:${row.id} ${row.slug} -> ${blob.url}`);
    } catch (error) {
      failures.push({ id: row.id, slug: row.slug, error: error.message });
      console.error(`[realce] fallo ${cfg.table}:${row.id} ${row.slug}: ${error.message}`);
    }
  }

  await client.end();

  const outDir = path.join(rootDir, "artifacts", "image-regeneration");
  await fs.mkdir(outDir, { recursive: true });
  const outPath = path.join(
    outDir,
    `${new Date().toISOString().replace(/[:.]/g, "-")}-realce-${target}.json`
  );
  await fs.writeFile(
    outPath,
    `${JSON.stringify({ ok: report.length, fallidos: failures.length, report, failures }, null, 2)}\n`
  );
  console.log(`[realce] listo: ${report.length} ok, ${failures.length} fallidos -> ${outPath}`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((error) => {
    console.error("[realce] error:", error.message);
    process.exitCode = 1;
  });
}
