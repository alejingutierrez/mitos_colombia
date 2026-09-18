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
 * Al terminar purga la caché del sitio (`--no-revalidate` lo salta, `--site`
 * apunta a otro dominio): escribir en la base no basta porque la interna del
 * mito está prerenderizada.
 *
 * La carpeta debe traer los tres archivos con sufijo `-horizontal`, `-vertical`
 * y `-cuadrada` (o `-square`), en png o jpg. Si hay un `manifest.json` al lado,
 * se leen de ahí las descripciones de escena y quedan guardadas como prompts.
 *
 * Antes de escribir imprime los valores actuales: ese bloque es el respaldo
 * para revertir. Con `--dry-run` sólo muestra el plan, sin subir ni escribir.
 */

import { existsSync } from "node:fs";
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { basename, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import { createHash } from "node:crypto";

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
  { key: "horizontal", preset: "horizontal", acto: "entrada", match: /-horizontal\.(png|jpe?g)$/i, fallback: "entrada.jpg" },
  { key: "vertical", preset: "vertical", acto: "acto", match: /-vertical\.(png|jpe?g)$/i, fallback: "acto.jpg" },
  { key: "cuadrada", preset: "square", acto: "huella", match: /-(cuadrada|square)\.(png|jpe?g)$/i, fallback: "huella.jpg" },
];

const JPEG_QUALITY = 88;

// Lado largo máximo del archivo publicado. `IMAGE_PRESETS` describe lo que
// genera el pipeline viejo de OpenAI (1536 px de ancho como techo), y usar esas
// medidas aquí tiraba el 43% del ancho de las piezas de 2K: en escritorio la
// portada pide ~2880 px con `sizes="100vw"` y se veía blanda. Subimos la
// resolución nativa y dejamos que next/image reescale por dispositivo, que no
// le cuesta ancho de banda a nadie.
const MAX_EDGE = 2688;

function parseArgs(argv) {
  const args = { dryRun: false, revalidate: true };
  for (let i = 2; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === "--dry-run") args.dryRun = true;
    else if (token === "--no-revalidate") args.revalidate = false;
    else if (token === "--slug") args.slug = argv[++i];
    else if (token === "--dir") args.dir = argv[++i];
    else if (token === "--selection") args.selection = argv[++i];
    else if (token === "--preserve-original") args.preserveOriginal = true;
    else if (token === "--env") args.env = argv[++i];
    else if (token === "--site") args.site = argv[++i];
    else if (token === "--receipt-dir") args.receiptDir = argv[++i];
    else if (token === "--publication-id") args.publicationId = argv[++i];
    else throw new Error(`Argumento no reconocido: ${token}`);
  }
  if (!args.slug) throw new Error("Falta --slug");
  if (!args.dir && !args.selection) throw new Error("Falta --dir o --selection");
  return args;
}

/**
 * Escribir en Postgres no basta: la interna del mito está prerenderizada y el
 * dato pasa por `unstable_cache`. Sin esta purga la imagen nueva no se ve en
 * producción hasta que expire la ventana de ISR.
 */
async function revalidateSite({ slug, site }) {
  const base = (site || process.env.NEXT_PUBLIC_SITE_URL || "")
    .trim()
    .replace(/\/+$/, "");
  const user = process.env.ADMIN_USERNAME;
  const pass = process.env.ADMIN_PASSWORD;

  if (!base || !user || !pass) {
    console.log(
      "\n  ⚠ No purgué caché: faltan NEXT_PUBLIC_SITE_URL, ADMIN_USERNAME o ADMIN_PASSWORD."
    );
    console.log("    La imagen nueva aparecerá cuando expire el ISR (1 h).");
    return { ok: false, skipped: true, reason: "faltan variables para purgar caché" };
  }

  let response;
  try {
    response = await fetch(`${base}/api/admin/revalidate`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Basic ${Buffer.from(`${user}:${pass}`).toString("base64")}`,
      },
      body: JSON.stringify({ slugs: [slug], paths: ["/mitos"] }),
    });
  } catch (error) {
    console.log(`\n  ⚠ No pude purgar caché: ${error.message}`);
    return { ok: false, reason: error.message };
  }

  if (!response.ok) {
    console.log(
      `\n  ⚠ La purga de caché respondió ${response.status}. La imagen aparecerá cuando expire el ISR.`
    );
    return { ok: false, status: response.status };
  }
  const result = await response.json();
  console.log(`\n  ✓ Caché purgada: ${result.paths?.join(", ")}`);
  return { ok: true, status: response.status, paths: result.paths || [] };
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
    const hit = entries.find((name) => format.match.test(name)) ||
      (entries.includes(format.fallback) ? format.fallback : null);
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

/**
 * Tamaño de publicación: la proporción la manda el preset, la resolución la
 * manda el original (con `MAX_EDGE` como techo). Nunca amplía.
 */
export function computeTargetSize({ sourceWidth, sourceHeight, preset, preserveOriginal = false }) {
  // Las piezas aprobadas en 3:2 / 2:3 se publican completas cuando se pide
  // preservar el maestro, sin imponer el encuadre del pipeline anterior.
  if (preserveOriginal) return { width: sourceWidth, height: sourceHeight };
  const ratio = preset.outputWidth / preset.outputHeight;
  // El lado que manda es el largo del preset: en apaisada el ancho, en vertical
  // el alto, en cuadrada da igual.
  const targetLong = Math.min(MAX_EDGE, ratio >= 1 ? sourceWidth : sourceHeight);
  return {
    width: ratio >= 1 ? targetLong : Math.round(targetLong * ratio),
    height: ratio >= 1 ? Math.round(targetLong / ratio) : targetLong,
  };
}

async function targetFor(path, presetKey, preserveOriginal = false) {
  const preset = IMAGE_PRESETS[presetKey];
  const { width: sourceWidth = 0, height: sourceHeight = 0 } =
    await sharp(path).metadata();
  return {
    preset,
    sourceWidth,
    sourceHeight,
    ...computeTargetSize({ sourceWidth, sourceHeight, preset, preserveOriginal }),
  };
}

/** Reencuadra a la proporción del preset a resolución nativa y comprime a jpeg. */
async function renderForPreset(path, presetKey) {
  const { preset, width, height } = await targetFor(path, presetKey);

  const buffer = await sharp(path)
    .resize(width, height, { fit: "cover", position: "centre", withoutEnlargement: true })
    .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
    .toBuffer();
  return { buffer, preset, width, height };
}

async function fetchMyth(slug, db = sql) {
  const result = await db.query(
    `SELECT id, title, slug, image_url, square_image_url, updated_at, content, mito,
            image_prompt_horizontal, image_prompt_vertical, image_prompt_square
     FROM myths WHERE slug = $1 LIMIT 1`,
    [slug]
  );
  return result.rows[0] || null;
}

async function fetchVerticalRow(mythId, db = sql) {
  const result = await db.query(
    `SELECT id, image_url, updated_at FROM vertical_images
     WHERE entity_type = 'myth' AND entity_id = $1
     ORDER BY updated_at DESC, id DESC LIMIT 1`,
    [mythId]
  );
  return result.rows[0] || null;
}

async function insertVerticalVersion({ myth, imageUrl, prompt, db = sql }) {
  const result = await db.query(
    `INSERT INTO vertical_images
       (entity_type, entity_id, entity_name, entity_slug, base_prompt, custom_prompt, image_url, created_at, updated_at)
     VALUES ('myth', $1, $2, $3, $4, $5, $6, NOW(), NOW())
     RETURNING id`,
    [myth.id, myth.title, myth.slug, prompt || "Tríptico del mito · acto", prompt || null, imageUrl]
  );
  return { action: "creada", id: result.rows[0]?.id || null };
}

async function localEvidence(path, presetKey, preserveOriginal = false) {
  const buffer = await readFile(path);
  const target = await targetFor(path, presetKey, preserveOriginal);
  return {
    path: path.replace(`${REPO_ROOT}/`, ""),
    bytes: buffer.length,
    sha256: createHash("sha256").update(buffer).digest("hex"),
    source: { width: target.sourceWidth, height: target.sourceHeight },
    published: { width: target.width, height: target.height },
  };
}

export async function readTriptychSelection(selectionPath, slug) {
  const selection = JSON.parse(await readFile(selectionPath, "utf8"));
  if (selection.myth !== slug || selection.selected?.length !== 3) throw new Error("Selección de otro mito o incompleta");
  const files = {}, items = {};
  for (const format of FORMATS) {
    const matches = selection.selected.filter(item => item.act === format.acto);
    if (matches.length !== 1) throw new Error(`Selección duplicada o ausente: ${format.acto}`);
    const item = matches[0];
    const path = resolve(REPO_ROOT, item.path);
    if (createHash("sha256").update(await readFile(path)).digest("hex") !== item.sha256) throw new Error(`Asset cambió: ${format.acto}`);
    const prompt = await readFile(resolve(REPO_ROOT, item.prompt_file), "utf8");
    const hashes = [prompt, prompt.endsWith("\n") ? prompt.slice(0, -1) : prompt]
      .map(value => createHash("sha256").update(value).digest("hex"));
    if (!hashes.includes(item.prompt_sha256)) throw new Error(`Prompt cambió: ${format.acto}`);
    const expectedQuality = selection.schema === "ette-reviewed-triptych-publication/v1"
      ? "high" : (format.acto === "entrada" ? "high" : "medium");
    if (item.quality !== expectedQuality) throw new Error(`Calidad incorrecta: ${format.acto}`);
    if (format.acto === "huella" && item.visual_function !== "symbolic_synthesis") throw new Error("Huella sin contrato simbólico");
    files[format.key] = path;
    items[format.key] = { escena: prompt };
  }
  return { selection, files, items };
}

export async function promoteTriptych({ client, myth, verticalBefore, uploaded, scenes }) {
  await client.query("BEGIN");
  try {
    const locked = (await client.query("SELECT updated_at FROM myths WHERE id = $1 FOR UPDATE", [myth.id])).rows[0];
    if (!locked || new Date(locked.updated_at).getTime() !== new Date(myth.updated_at).getTime()) throw new Error("El mito cambió durante la subida; no sobrescribo cambios concurrentes");
    const latest = await fetchVerticalRow(myth.id, client);
    if ((latest?.id || null) !== (verticalBefore?.id || null)) throw new Error("La selección vertical cambió durante la subida");
    await client.query(`UPDATE myths SET image_url=$1, square_image_url=$2,
      image_prompt_horizontal=COALESCE($3,image_prompt_horizontal),
      image_prompt_vertical=COALESCE($4,image_prompt_vertical),
      image_prompt_square=COALESCE($5,image_prompt_square), updated_at=NOW() WHERE id=$6`,
      [uploaded.horizontal,uploaded.cuadrada,scenes.horizontal?.escena||null,
        scenes.vertical?.escena||null,scenes.cuadrada?.escena||null,myth.id]);
    const version = await insertVerticalVersion({ myth, imageUrl: uploaded.vertical, prompt: scenes.vertical?.escena, db: client });
    await client.query("COMMIT");
    return version;
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  }
}

async function main() {
  const args = parseArgs(process.argv);
  loadEnv(args.env);

  const dir = resolve(args.dir || dirname(args.selection));
  const selected = args.selection ? await readTriptychSelection(resolve(args.selection), args.slug) : null;
  const files = selected?.files || await resolveFiles(dir);
  const manifest = selected ? { items: selected.items } : await readManifest(dir);
  const scenes = manifest?.items || {};

  const myth = await fetchMyth(args.slug);
  if (!myth) throw new Error(`No existe un mito con slug "${args.slug}"`);
  if (selected?.selection.schema === "ette-reviewed-triptych-publication/v1") {
    if (Number(myth.id) !== selected.selection.myth_id) throw new Error("ID del mito fuera del lote congelado");
    if (createHash("sha256").update(myth.mito).digest("hex") !== selected.selection.mito_target_sha256) throw new Error("El relato Chimila cambió respecto del corpus seleccionado");
    if (!args.preserveOriginal) throw new Error("Este lote Chimila exige --preserve-original");
  }
  if (selected && createHash("sha256").update(myth.content).digest("hex") !== selected.selection.narrative_target_sha256) throw new Error("El relato publicado cambió respecto del tríptico seleccionado");
  const verticalBefore = await fetchVerticalRow(myth.id);
  const publicationId = args.publicationId || new Date().toISOString().replace(/[:.]/g, "-");
  const receiptDir = resolve(
    args.receiptDir || join(dir, "..", "..", "publication-receipts"),
    publicationId
  );
  const receiptPath = join(receiptDir, `${myth.slug}.json`);
  const local = {};
  for (const format of FORMATS) {
    local[format.key] = await localEvidence(files[format.key], format.preset, args.preserveOriginal);
    if (args.preserveOriginal) {
      const evidence = local[format.key];
      if (evidence.source.width !== evidence.published.width || evidence.source.height !== evidence.published.height) throw new Error("La proporción original no coincide: no recorto en modo preserve-original");
      if ((await sharp(files[format.key]).metadata()).format !== "jpeg") throw new Error("preserve-original requiere JPEG");
    }
  }

  console.log(`\n▸ ${myth.title}  (#${myth.id} · ${myth.slug})`);
  console.log("\n  ANTES — respaldo para revertir:");
  console.log(`    image_url        = ${myth.image_url || "(vacío)"}`);
  console.log(`    vertical_images  = ${verticalBefore?.image_url || "(sin fila)"}`);
  console.log(`    square_image_url = ${myth.square_image_url || "(vacío)"}`);

  console.log("\n  ESCENAS a publicar:");
  for (const format of FORMATS) {
    const t = await targetFor(files[format.key], format.preset, args.preserveOriginal);
    console.log(
      `    ${format.acto.padEnd(8)} ${t.sourceWidth}×${t.sourceHeight} → ${t.width}×${t.height}  ${basename(files[format.key])}`
    );
  }

  if (args.dryRun) {
    console.log("\n  --dry-run: no subo nada ni escribo en la base.\n");
    return;
  }

  if (existsSync(receiptPath)) {
    throw new Error(`Ya existe el recibo ${receiptPath}; no reemplazo una publicación anterior`);
  }
  await mkdir(receiptDir, { recursive: true });
  const receipt = {
    schema: "mitos-colombia-triptych-publication-v1",
    publication_id: publicationId,
    status: "planned",
    started_at: new Date().toISOString(),
    myth: { id: myth.id, title: myth.title, slug: myth.slug },
    local,
    selection: args.selection || null,
    narrative_target_sha256: createHash("sha256").update(myth.content).digest("hex"),
    preserve_original_bytes: Boolean(args.preserveOriginal),
    before: {
      image_url: myth.image_url || null,
      vertical_image: verticalBefore
        ? { id: verticalBefore.id, image_url: verticalBefore.image_url, updated_at: verticalBefore.updated_at }
        : null,
      square_image_url: myth.square_image_url || null,
      updated_at: myth.updated_at,
      image_prompt_horizontal: myth.image_prompt_horizontal,
      image_prompt_vertical: myth.image_prompt_vertical,
      image_prompt_square: myth.image_prompt_square,
    },
    preservation: {
      blob_uploads_use_new_random_suffixes: true,
      previous_blob_urls_are_not_deleted: true,
      previous_vertical_database_row_is_not_updated_or_deleted: true,
    },
  };
  await writeFile(receiptPath, JSON.stringify(receipt, null, 2) + "\n");

  const uploaded = {};
  receipt.uploads = {};
  for (const format of FORMATS) {
    const rendered = args.preserveOriginal
      ? { buffer: await readFile(files[format.key]), ...await targetFor(files[format.key], format.preset, true) }
      : await renderForPreset(files[format.key], format.preset);
    const { buffer, preset, width, height } = rendered;
    const filename = buildBlobFilename({
      preset: format.preset,
      slug: myth.slug,
      entityType: "myth",
    });
    const blob = await put(filename, buffer, {
      access: "public",
      contentType: preset.contentType,
      token: process.env.BLOB_READ_WRITE_TOKEN,
      addRandomSuffix: true,
    });
    uploaded[format.key] = blob.url;
    receipt.uploads[format.key] = { url: blob.url, sha256: createHash("sha256").update(buffer).digest("hex"), bytes: buffer.length, width, height };
    receipt.status = "uploading";
    await writeFile(receiptPath, JSON.stringify(receipt, null, 2) + "\n");
    console.log(
      `    ✓ ${format.acto} ${width}×${height} · ${Math.round(buffer.length / 1024)} KB → ${blob.url}`
    );
  }

  receipt.status = "uploaded";
  // Archivo remoto aditivo: conserva tanto los punteros anteriores como los
  // nuevos, incluso si se pierde el checkout local. No contiene credenciales.
  const archive = await put(`triptych-history/${myth.slug}/${publicationId}.json`, JSON.stringify(receipt, null, 2), {
    access: "public", contentType: "application/json", token: process.env.BLOB_READ_WRITE_TOKEN, addRandomSuffix: true,
  });
  receipt.remote_history_url = archive.url;
  await writeFile(receiptPath, JSON.stringify(receipt, null, 2) + "\n");
  const client = await sql.connect();
  let verticalResult;
  try {
    verticalResult = await promoteTriptych({ client, myth, verticalBefore, uploaded, scenes });
  } finally { client.release(); }
  receipt.status = "database_committed";
  receipt.vertical_version_inserted = verticalResult;
  await writeFile(receiptPath, JSON.stringify(receipt, null, 2) + "\n");

  const after = await fetchMyth(args.slug);
  const verticalAfter = await fetchVerticalRow(myth.id);
  console.log(`\n  DESPUÉS (fila vertical ${verticalResult.action}):`);
  console.log(`    image_url        = ${after.image_url}`);
  console.log(`    vertical_images  = ${verticalAfter?.image_url}`);
  console.log(`    square_image_url = ${after.square_image_url}`);

  const revalidation = args.revalidate
    ? await revalidateSite({ slug: myth.slug, site: args.site })
    : { ok: false, skipped: true, reason: "--no-revalidate" };
  receipt.status = "published";
  receipt.completed_at = new Date().toISOString();
  receipt.after = {
    image_url: after.image_url,
    vertical_image: verticalAfter
      ? { id: verticalAfter.id, image_url: verticalAfter.image_url, updated_at: verticalAfter.updated_at }
      : null,
    square_image_url: after.square_image_url,
  };
  receipt.vertical_version_inserted = verticalResult;
  receipt.revalidation = revalidation;
  await writeFile(receiptPath, JSON.stringify(receipt, null, 2) + "\n");
  console.log(`  ✓ Recibo aditivo: ${receiptPath}`);
  console.log("");
}

// Sólo corre si se invoca directamente: así los tests pueden importar
// `computeTargetSize` sin disparar la publicación.
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch((error) => {
    console.error(`\n✖ ${error.message}\n`);
    process.exitCode = 1;
  });
}
