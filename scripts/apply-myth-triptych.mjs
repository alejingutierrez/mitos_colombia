#!/usr/bin/env node

/**
 * Publica el tríptico de un mito: sube las tres escenas a Vercel Blob y deja
 * sus URLs como las imágenes principales del mito.
 *
 *   1 entrada  · 16:9 · el personaje llega a su mundo  -> myths.image_url
 *   2 acto     · 9:16 · el momento por el que se cuenta -> vertical_images
 *   3 huella   · 1:1  · lo que queda cuando ya no está  -> myths.square_image_url
 *
 * Uso:
 *   node scripts/apply-myth-triptych.mjs --slug <slug> --dir <carpeta> [--dry-run]
 *
 * La carpeta debe traer los tres archivos con sufijo `-horizontal`, `-vertical`
 * y `-cuadrada` (o `-square`), en png o jpg. Si hay un `manifest.json` al lado,
 * se leen de ahí las descripciones de escena y quedan guardadas como prompts.
 *
 * Antes de escribir imprime los valores actuales: ese bloque es el respaldo
 * para revertir. Con `--dry-run` sólo muestra el plan, sin subir ni escribir.
 */

import { readdir, readFile } from "node:fs/promises";
import { basename, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

import { put } from "@vercel/blob";
import { sql } from "@vercel/postgres";
import dotenv from "dotenv";
import sharp from "sharp";

import {
  IMAGE_PRESETS,
  buildBlobFilename,
} from "../src/lib/image-generation.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, "..");

const FORMATS = [
  { key: "horizontal", preset: "horizontal", acto: "entrada", match: /-horizontal\.(png|jpe?g)$/i },
  { key: "vertical", preset: "vertical", acto: "acto", match: /-vertical\.(png|jpe?g)$/i },
  { key: "cuadrada", preset: "square", acto: "huella", match: /-(cuadrada|square)\.(png|jpe?g)$/i },
];

const JPEG_QUALITY = 86;

function parseArgs(argv) {
  const args = { dryRun: false };
  for (let i = 2; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === "--dry-run") args.dryRun = true;
    else if (token === "--slug") args.slug = argv[++i];
    else if (token === "--dir") args.dir = argv[++i];
    else if (token === "--env") args.env = argv[++i];
    else throw new Error(`Argumento no reconocido: ${token}`);
  }
  if (!args.slug) throw new Error("Falta --slug");
  if (!args.dir) throw new Error("Falta --dir");
  return args;
}

function loadEnv(explicitPath) {
  const candidates = explicitPath
    ? [explicitPath]
    : [join(REPO_ROOT, ".env.local"), join(REPO_ROOT, ".env")];
  for (const path of candidates) {
    dotenv.config({ path, quiet: true });
  }
  if (!process.env.POSTGRES_URL && process.env.DATABASE_URL) {
    process.env.POSTGRES_URL = process.env.DATABASE_URL;
  }
  const missing = ["POSTGRES_URL", "BLOB_READ_WRITE_TOKEN"].filter(
    (key) => !process.env[key]
  );
  if (missing.length) {
    throw new Error(
      `Faltan variables de entorno: ${missing.join(", ")}. Pasa --env <ruta al .env>.`
    );
  }
}

async function resolveFiles(dir) {
  const entries = await readdir(dir);
  const found = {};
  for (const format of FORMATS) {
    const hit = entries.find((name) => format.match.test(name));
    if (!hit) {
      throw new Error(
        `No encontré la escena "${format.key}" en ${dir} (busco *-${format.key}.png|jpg)`
      );
    }
    found[format.key] = join(dir, hit);
  }
  return found;
}

async function readManifest(dir) {
  try {
    const raw = await readFile(join(dir, "manifest.json"), "utf8");
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

/** Reencuadra al tamaño de salida del preset y comprime a jpeg. */
async function renderForPreset(path, presetKey) {
  const preset = IMAGE_PRESETS[presetKey];
  const buffer = await sharp(path)
    .resize(preset.outputWidth, preset.outputHeight, {
      fit: "cover",
      position: "centre",
    })
    .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
    .toBuffer();
  return { buffer, preset };
}

async function fetchMyth(slug) {
  const result = await sql.query(
    `SELECT id, title, slug, image_url, square_image_url, updated_at
     FROM myths WHERE slug = $1 LIMIT 1`,
    [slug]
  );
  return result.rows[0] || null;
}

async function fetchVerticalRow(mythId) {
  const result = await sql.query(
    `SELECT id, image_url, updated_at FROM vertical_images
     WHERE entity_type = 'myth' AND entity_id = $1
     ORDER BY updated_at DESC, id DESC LIMIT 1`,
    [mythId]
  );
  return result.rows[0] || null;
}

async function upsertVertical({ myth, imageUrl, prompt }) {
  const existing = await fetchVerticalRow(myth.id);
  if (existing) {
    await sql.query(
      `UPDATE vertical_images
       SET image_url = $1, custom_prompt = COALESCE($2, custom_prompt), updated_at = NOW()
       WHERE id = $3`,
      [imageUrl, prompt || null, existing.id]
    );
    return "actualizada";
  }
  await sql.query(
    `INSERT INTO vertical_images
       (entity_type, entity_id, entity_name, entity_slug, base_prompt, custom_prompt, image_url, created_at, updated_at)
     VALUES ('myth', $1, $2, $3, $4, $5, $6, NOW(), NOW())`,
    [myth.id, myth.title, myth.slug, prompt || "Tríptico del mito · acto", prompt || null, imageUrl]
  );
  return "creada";
}

async function main() {
  const args = parseArgs(process.argv);
  loadEnv(args.env);

  const dir = resolve(args.dir);
  const files = await resolveFiles(dir);
  const manifest = await readManifest(dir);
  const scenes = manifest?.items || {};

  const myth = await fetchMyth(args.slug);
  if (!myth) throw new Error(`No existe un mito con slug "${args.slug}"`);
  const verticalBefore = await fetchVerticalRow(myth.id);

  console.log(`\n▸ ${myth.title}  (#${myth.id} · ${myth.slug})`);
  console.log("\n  ANTES — respaldo para revertir:");
  console.log(`    image_url        = ${myth.image_url || "(vacío)"}`);
  console.log(`    vertical_images  = ${verticalBefore?.image_url || "(sin fila)"}`);
  console.log(`    square_image_url = ${myth.square_image_url || "(vacío)"}`);

  console.log("\n  ESCENAS a publicar:");
  for (const format of FORMATS) {
    const preset = IMAGE_PRESETS[format.preset];
    console.log(
      `    ${format.acto.padEnd(8)} ${String(preset.outputWidth).padStart(4)}×${preset.outputHeight}  ${basename(files[format.key])}`
    );
  }

  if (args.dryRun) {
    console.log("\n  --dry-run: no subo nada ni escribo en la base.\n");
    return;
  }

  const uploaded = {};
  for (const format of FORMATS) {
    const { buffer, preset } = await renderForPreset(files[format.key], format.preset);
    const filename = buildBlobFilename({
      preset: format.preset,
      slug: myth.slug,
      entityType: "myth",
    });
    const blob = await put(filename, buffer, {
      access: "public",
      contentType: preset.contentType,
      token: process.env.BLOB_READ_WRITE_TOKEN,
    });
    uploaded[format.key] = blob.url;
    console.log(`    ✓ ${format.acto} → ${blob.url}`);
  }

  // El mito primero: `isMythImageVariantCurrent` considera vieja a la vertical
  // si su updated_at quedara por detrás del del mito.
  await sql.query(
    `UPDATE myths
     SET image_url = $1,
         square_image_url = $2,
         image_prompt_horizontal = COALESCE($3, image_prompt_horizontal),
         image_prompt_vertical = COALESCE($4, image_prompt_vertical),
         image_prompt_square = COALESCE($5, image_prompt_square),
         updated_at = NOW()
     WHERE id = $6`,
    [
      uploaded.horizontal,
      uploaded.cuadrada,
      scenes.horizontal?.escena || null,
      scenes.vertical?.escena || null,
      scenes.cuadrada?.escena || null,
      myth.id,
    ]
  );

  const verticalAction = await upsertVertical({
    myth,
    imageUrl: uploaded.vertical,
    prompt: scenes.vertical?.escena || null,
  });

  const after = await fetchMyth(args.slug);
  const verticalAfter = await fetchVerticalRow(myth.id);
  console.log(`\n  DESPUÉS (fila vertical ${verticalAction}):`);
  console.log(`    image_url        = ${after.image_url}`);
  console.log(`    vertical_images  = ${verticalAfter?.image_url}`);
  console.log(`    square_image_url = ${after.square_image_url}\n`);
}

main().catch((error) => {
  console.error(`\n✖ ${error.message}\n`);
  process.exitCode = 1;
});
