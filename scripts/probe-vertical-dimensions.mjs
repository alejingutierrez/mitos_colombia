#!/usr/bin/env node

/**
 * Sonda de dimensiones reales del arte vertical.
 *
 * POR QUÉ EXISTE
 * --------------
 * La ficha del mito encuadra la obra vertical en una caja fija de 9:16 con
 * `object-contain`. Todo lo que no mide exactamente 9:16 aparece con franjas
 * negras arriba y abajo, y en el archivo conviven varios formatos (2:3 es el
 * mayoritario, 9:16 y el 9:16 grande de la serie muisca). La caja tiene que
 * tomar la proporción de cada obra, y para eso hay que conocer su tamaño real:
 * la base de datos guarda la URL, nunca el ancho ni el alto.
 *
 * QUÉ HACE
 * --------
 * 1. Lee —SOLO LECTURA— las URL que pueden caer en la ranura vertical.
 * 2. Pide de cada archivo únicamente sus primeros bytes (petición `Range`) y
 *    lee ancho y alto desde la cabecera: JPEG (SOF0..SOF15), PNG (IHDR) y
 *    WebP (VP8 / VP8L / VP8X). Nunca descarga la imagen completa.
 * 3. Escribe `src/lib/vertical-image-dimensions.json`, ordenado, para que el
 *    diff sea determinista.
 *
 * ⚠️ Esta sonda NO escribe una sola fila en la base de datos. Solo hace SELECT.
 *
 * QUÉ URL ENTRAN AL MAPA
 * ----------------------
 * - Todas las de `vertical_images` (mitos, categorías y comunidades).
 * - La apaisada `myths.image_url` de los mitos cuya vertical más reciente ya
 *   quedó obsoleta frente al mito. Esos mitos son reales: `attachMythImageVariants`
 *   descarta la variante vieja y entonces la ranura vertical termina mostrando
 *   la apaisada. Sin su medida, la caja adaptativa fallaría justo ahí.
 *
 * USO
 * ---
 *   npm run images:probe:vertical
 *   node scripts/probe-vertical-dimensions.mjs --only=el-cueche
 *   node scripts/probe-vertical-dimensions.mjs --force --concurrency=4
 *
 * Opciones:
 *   --only=<texto>     Solo las URL cuyo slug o ruta contengan <texto>.
 *   --force            Vuelve a medir incluso lo ya guardado.
 *   --concurrency=N    Peticiones en paralelo (por defecto 8).
 *   --keep-orphans     No borra del mapa las claves que ya nadie usa.
 *   --dry-run          Mide y reporta, pero no escribe el JSON.
 *   --verbose          Una línea por imagen medida.
 */

import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

import dotenv from "dotenv";
import pg from "pg";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const OUTPUT = path.join(ROOT, "src", "lib", "vertical-image-dimensions.json");

// Escalera de lectura: casi todos los JPEG declaran su SOF dentro de los
// primeros 32 KB. Si un archivo trae EXIF o un perfil ICC gordo, se pide más,
// pero nunca pasamos de 1 MB: la sonda mide cabeceras, no descarga obras.
const PREFIX_STEPS = [32 * 1024, 256 * 1024, 1024 * 1024];
const RETRY_DELAYS_MS = [500, 1500, 4000];
const REQUEST_TIMEOUT_MS = 20000;
const USER_AGENT = "mitos-colombia/probe-vertical-dimensions";

function parseArgs(argv) {
  const options = {
    only: null,
    force: false,
    concurrency: 8,
    keepOrphans: false,
    dryRun: false,
    verbose: false,
  };

  for (const arg of argv) {
    if (arg.startsWith("--only=")) options.only = arg.slice(7).trim() || null;
    else if (arg === "--force") options.force = true;
    else if (arg.startsWith("--concurrency=")) {
      const value = Number.parseInt(arg.slice(14), 10);
      if (Number.isFinite(value) && value > 0) {
        options.concurrency = Math.min(value, 16);
      }
    } else if (arg === "--keep-orphans") options.keepOrphans = true;
    else if (arg === "--dry-run") options.dryRun = true;
    else if (arg === "--verbose") options.verbose = true;
    else if (arg === "--help" || arg === "-h") options.help = true;
    else console.warn(`⚠️  Opción desconocida, se ignora: ${arg}`);
  }

  return options;
}

/**
 * Clave del mapa: la ruta del blob, sin host ni query.
 *
 * Vercel Blob nunca reescribe el contenido de una ruta ya publicada — cada
 * subida crea `vertical/<tipo>/<slug>-<timestamp>.jpg`, con el epoch en el
 * nombre—, así que la ruta identifica los bytes de forma única y permanente.
 * Dejar fuera el host es deliberado: si algún día cambia el dominio del CDN o
 * se sirve desde otra cuenta de blob, el mapa sigue sirviendo sin regenerarse.
 * Y como es legible, el diff del JSON se lee como una lista de obras.
 */
export function toDimensionKey(url) {
  if (!url) return null;
  const raw = String(url).trim();
  if (!raw) return null;

  try {
    return decodeURIComponent(new URL(raw).pathname).replace(/^\/+/, "") || null;
  } catch {
    // Rutas relativas (`/images/foo.jpg`) y cualquier otro valor suelto.
    const withoutQuery = raw.split(/[?#]/)[0];
    return withoutQuery.replace(/^\/+/, "") || null;
  }
}

/* ------------------------------------------------------------------ */
/* Lectores de cabecera                                                */
/* ------------------------------------------------------------------ */

function parseJpeg(buffer) {
  let pos = 2;

  while (pos + 3 < buffer.length) {
    if (buffer[pos] !== 0xff) {
      pos += 1;
      continue;
    }

    let marker = buffer[pos + 1];
    // Relleno: una cadena de 0xFF antes del marcador real es legal.
    while (marker === 0xff && pos + 2 < buffer.length) {
      pos += 1;
      marker = buffer[pos + 1];
    }

    // Marcadores sin carga útil.
    if (marker === 0xd8 || marker === 0x01 || (marker >= 0xd0 && marker <= 0xd7)) {
      pos += 2;
      continue;
    }
    if (marker === 0xd9) return { status: "unsupported", reason: "jpeg-sin-sof" };
    if (pos + 4 > buffer.length) return { status: "truncated" };

    const length = buffer.readUInt16BE(pos + 2);
    if (length < 2) return { status: "unsupported", reason: "jpeg-corrupto" };

    // SOF0..SOF15 salvo DHT (C4), JPG (C8) y DAC (CC), que no son marcos.
    const isStartOfFrame =
      marker >= 0xc0 &&
      marker <= 0xcf &&
      marker !== 0xc4 &&
      marker !== 0xc8 &&
      marker !== 0xcc;

    if (isStartOfFrame) {
      if (pos + 9 > buffer.length) return { status: "truncated" };
      return {
        status: "ok",
        format: "jpeg",
        h: buffer.readUInt16BE(pos + 5),
        w: buffer.readUInt16BE(pos + 7),
      };
    }

    // SOS: empiezan los datos comprimidos, ya no habrá SOF que leer.
    if (marker === 0xda) return { status: "unsupported", reason: "jpeg-sin-sof" };

    pos += 2 + length;
  }

  return { status: "truncated" };
}

function parsePng(buffer) {
  if (buffer.length < 24) return { status: "truncated" };
  if (buffer.toString("latin1", 12, 16) !== "IHDR") {
    return { status: "unsupported", reason: "png-sin-ihdr" };
  }
  return {
    status: "ok",
    format: "png",
    w: buffer.readUInt32BE(16),
    h: buffer.readUInt32BE(20),
  };
}

function parseWebp(buffer) {
  if (buffer.length < 16) return { status: "truncated" };
  const chunk = buffer.toString("latin1", 12, 16);

  if (chunk === "VP8X") {
    if (buffer.length < 30) return { status: "truncated" };
    return {
      status: "ok",
      format: "webp",
      w: buffer.readUIntLE(24, 3) + 1,
      h: buffer.readUIntLE(27, 3) + 1,
    };
  }

  if (chunk === "VP8L") {
    if (buffer.length < 25) return { status: "truncated" };
    const bits = buffer.readUInt32LE(21);
    return {
      status: "ok",
      format: "webp",
      w: (bits & 0x3fff) + 1,
      h: ((bits >>> 14) & 0x3fff) + 1,
    };
  }

  if (chunk === "VP8 ") {
    if (buffer.length < 30) return { status: "truncated" };
    return {
      status: "ok",
      format: "webp",
      w: buffer.readUInt16LE(26) & 0x3fff,
      h: buffer.readUInt16LE(28) & 0x3fff,
    };
  }

  return { status: "unsupported", reason: `webp-${chunk.trim() || "?"}` };
}

/**
 * Devuelve `{status:"ok", w, h, format}`, `{status:"truncated"}` cuando faltan
 * bytes para decidir, o `{status:"unsupported", reason}` si no es una imagen
 * que sepamos leer. Nunca lanza.
 */
export function readImageDimensions(buffer) {
  if (!buffer || buffer.length < 12) return { status: "truncated" };

  if (buffer[0] === 0xff && buffer[1] === 0xd8) return parseJpeg(buffer);
  if (buffer.toString("latin1", 0, 8) === "\x89PNG\r\n\x1a\n") return parsePng(buffer);
  if (
    buffer.toString("latin1", 0, 4) === "RIFF" &&
    buffer.toString("latin1", 8, 12) === "WEBP"
  ) {
    return parseWebp(buffer);
  }

  return { status: "unsupported", reason: "formato-desconocido" };
}

/* ------------------------------------------------------------------ */
/* Red                                                                 */
/* ------------------------------------------------------------------ */

class HttpError extends Error {
  constructor(status, url) {
    super(`HTTP ${status} · ${url}`);
    this.status = status;
    this.retriable = status === 429 || status >= 500;
  }
}

/**
 * Descarga como mucho `maxBytes` del comienzo del archivo. Pide un `Range`,
 * pero además corta el flujo a mano: si el origen ignora el rango y responde
 * 200 con la obra entera, igual dejamos de leer al llegar al tope.
 */
async function fetchPrefix(url, maxBytes) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(url, {
      headers: {
        Range: `bytes=0-${maxBytes - 1}`,
        "User-Agent": USER_AGENT,
      },
      signal: controller.signal,
    });

    if (response.status !== 200 && response.status !== 206) {
      // Vacía el cuerpo para no dejar la conexión colgada.
      await response.body?.cancel().catch(() => {});
      throw new HttpError(response.status, url);
    }

    if (!response.body) return Buffer.alloc(0);

    const reader = response.body.getReader();
    const chunks = [];
    let total = 0;

    while (total < maxBytes) {
      const { done, value } = await reader.read();
      if (done) break;
      chunks.push(value);
      total += value.length;
    }
    await reader.cancel().catch(() => {});

    return Buffer.concat(chunks.map((chunk) => Buffer.from(chunk))).subarray(
      0,
      maxBytes
    );
  } finally {
    clearTimeout(timer);
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Mide una URL subiendo por la escalera de prefijos y reintentando los fallos
 * de red o los 429/5xx. Un 404 no se reintenta: no va a aparecer.
 */
async function probeUrl(url) {
  let lastError = null;

  for (const maxBytes of PREFIX_STEPS) {
    for (let attempt = 0; attempt <= RETRY_DELAYS_MS.length; attempt += 1) {
      try {
        const buffer = await fetchPrefix(url, maxBytes);
        const result = readImageDimensions(buffer);

        if (result.status === "ok") {
          if (
            !Number.isInteger(result.w) ||
            !Number.isInteger(result.h) ||
            result.w <= 0 ||
            result.h <= 0
          ) {
            return { ok: false, reason: "medidas-invalidas" };
          }
          return { ok: true, w: result.w, h: result.h, format: result.format };
        }

        if (result.status === "unsupported") {
          return { ok: false, reason: result.reason };
        }

        // Truncado: hay que pedir más bytes, si queda escalón.
        lastError = "cabecera-incompleta";
        break;
      } catch (error) {
        const retriable = error instanceof HttpError ? error.retriable : true;
        lastError =
          error instanceof HttpError ? `http-${error.status}` : "error-de-red";

        if (!retriable || attempt === RETRY_DELAYS_MS.length) {
          if (!retriable) return { ok: false, reason: lastError };
          break;
        }
        await sleep(RETRY_DELAYS_MS[attempt]);
      }
    }
  }

  return { ok: false, reason: lastError || "sin-medida" };
}

/* ------------------------------------------------------------------ */
/* Base de datos (SOLO LECTURA)                                        */
/* ------------------------------------------------------------------ */

function loadEnv() {
  for (const file of [".env.local", ".env"]) {
    dotenv.config({ path: path.join(ROOT, file), quiet: true });
  }
}

async function readSourceUrls() {
  const connectionString =
    process.env.DATABASE_URL_UNPOOLED ||
    process.env.POSTGRES_URL_NON_POOLING ||
    process.env.DATABASE_URL ||
    process.env.POSTGRES_URL;

  if (!connectionString) {
    throw new Error(
      "Falta DATABASE_URL (o POSTGRES_URL) para leer las URL verticales."
    );
  }

  const client = new pg.Client({
    connectionString,
    ssl: { rejectUnauthorized: false },
  });
  await client.connect();

  try {
    // Toda la obra vertical publicada, sin importar a qué entidad pertenece.
    const verticals = await client.query(`
      SELECT
        vi.image_url AS url,
        'vertical:' || vi.entity_type AS source,
        MIN(vi.entity_slug) AS slug
      FROM vertical_images vi
      WHERE NULLIF(TRIM(vi.image_url), '') IS NOT NULL
      GROUP BY vi.image_url, vi.entity_type
    `);

    // Los mitos cuya vertical más reciente quedó obsoleta frente al mito:
    // `attachMythImageVariants` la descarta y la ranura vertical acaba
    // mostrando la apaisada. Réplica exacta de `isMythImageVariantCurrent`:
    // si falta cualquiera de las dos fechas, la variante se considera vigente
    // (la comparación en SQL da NULL y la fila no entra).
    const fallbacks = await client.query(`
      WITH latest AS (
        SELECT DISTINCT ON (vi.entity_id)
          vi.entity_id,
          COALESCE(vi.updated_at, vi.created_at) AS variant_at,
          m.updated_at AS source_at
        FROM vertical_images vi
        JOIN myths m ON m.id = vi.entity_id
        WHERE vi.entity_type = 'myth'
          AND NULLIF(TRIM(vi.image_url), '') IS NOT NULL
        ORDER BY vi.entity_id,
                 vi.updated_at DESC NULLS LAST,
                 vi.created_at DESC NULLS LAST
      )
      SELECT m.image_url AS url, 'respaldo:myth' AS source, m.slug AS slug
      FROM myths m
      LEFT JOIN latest ON latest.entity_id = m.id
      WHERE NULLIF(TRIM(m.image_url), '') IS NOT NULL
        AND (latest.entity_id IS NULL OR latest.variant_at < latest.source_at)
    `);

    return { verticals: verticals.rows, fallbacks: fallbacks.rows };
  } finally {
    await client.end();
  }
}

/* ------------------------------------------------------------------ */
/* Utilidades de informe                                               */
/* ------------------------------------------------------------------ */

function greatestCommonDivisor(a, b) {
  return b === 0 ? a : greatestCommonDivisor(b, a % b);
}

export function describeRatio(w, h) {
  const divisor = greatestCommonDivisor(w, h) || 1;
  return `${w / divisor}:${h / divisor}`;
}

/**
 * Una obra por línea, con las claves ordenadas: el archivo sigue siendo JSON
 * válido, el diff se lee como una lista de obras (una línea cambia por imagen)
 * y pesa un tercio menos que el mismo objeto indentado a cuatro niveles.
 */
export function serializeMap(map) {
  const lines = Object.keys(map)
    .sort()
    .map(
      (key) =>
        `  ${JSON.stringify(key)}: { "w": ${map[key].w}, "h": ${map[key].h} }`
    );
  return lines.length ? `{\n${lines.join(",\n")}\n}\n` : "{}\n";
}

async function readExistingMap() {
  try {
    const raw = await fs.readFile(OUTPUT, "utf8");
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

async function runPool(items, concurrency, worker) {
  let cursor = 0;
  const runners = Array.from(
    { length: Math.min(concurrency, items.length) },
    async () => {
      while (cursor < items.length) {
        const index = cursor;
        cursor += 1;
        await worker(items[index], index);
      }
    }
  );
  await Promise.all(runners);
}

/* ------------------------------------------------------------------ */
/* Programa                                                            */
/* ------------------------------------------------------------------ */

async function main() {
  const options = parseArgs(process.argv.slice(2));

  if (options.help) {
    console.log(
      [
        "Uso: node scripts/probe-vertical-dimensions.mjs [opciones]",
        "  --only=<texto>     Solo las URL cuyo slug o ruta contengan <texto>",
        "  --force            Vuelve a medir incluso lo ya guardado",
        "  --concurrency=N    Peticiones en paralelo (por defecto 8, máx. 16)",
        "  --keep-orphans     No borra las claves que ya nadie usa",
        "  --dry-run          Mide y reporta, pero no escribe el JSON",
        "  --verbose          Una línea por imagen medida",
      ].join("\n")
    );
    return;
  }

  loadEnv();

  console.log("📚 Leyendo las URL verticales (solo lectura)…");
  const { verticals, fallbacks } = await readSourceUrls();

  const byKey = new Map();
  for (const row of [...verticals, ...fallbacks]) {
    const key = toDimensionKey(row.url);
    if (!key) continue;
    if (!byKey.has(key)) {
      byKey.set(key, { key, url: String(row.url).trim(), sources: new Set() });
    }
    byKey.get(key).sources.add(row.source);
  }

  const allKeys = new Set(byKey.keys());
  console.log(
    `   ${verticals.length} filas de vertical_images · ${fallbacks.length} respaldos apaisados` +
      ` → ${allKeys.size} URL distintas`
  );

  let candidates = [...byKey.values()];
  if (options.only) {
    const needle = options.only.toLowerCase();
    candidates = candidates.filter(
      (item) =>
        item.key.toLowerCase().includes(needle) ||
        [...item.sources].some((source) => source.toLowerCase().includes(needle))
    );
    // El slug no viaja en el objeto agrupado: se busca también en las filas.
    const slugMatches = new Set(
      [...verticals, ...fallbacks]
        .filter((row) => String(row.slug || "").toLowerCase().includes(needle))
        .map((row) => toDimensionKey(row.url))
        .filter(Boolean)
    );
    for (const key of slugMatches) {
      if (byKey.has(key) && !candidates.includes(byKey.get(key))) {
        candidates.push(byKey.get(key));
      }
    }
    console.log(`   --only=${options.only} → ${candidates.length} coincidencias`);
  }

  const existing = await readExistingMap();
  const result = { ...existing };

  const pending = options.force
    ? candidates
    : candidates.filter((item) => {
        const entry = existing[item.key];
        return !(
          entry &&
          Number.isInteger(entry.w) &&
          Number.isInteger(entry.h) &&
          entry.w > 0 &&
          entry.h > 0
        );
      });

  const reused = candidates.length - pending.length;
  if (reused > 0) {
    console.log(`   ${reused} ya estaban medidas (usa --force para rehacerlas)`);
  }

  const failures = [];
  let done = 0;
  let resolved = 0;

  if (pending.length > 0) {
    console.log(
      `🔎 Midiendo ${pending.length} imágenes con ${options.concurrency} peticiones en paralelo…`
    );
  }

  await runPool(pending, options.concurrency, async (item) => {
    const outcome = await probeUrl(item.url);
    done += 1;

    if (outcome.ok) {
      resolved += 1;
      result[item.key] = { w: outcome.w, h: outcome.h };
      if (options.verbose) {
        console.log(
          `   ✓ ${String(outcome.w).padStart(4)}×${String(outcome.h).padEnd(4)} ` +
            `${describeRatio(outcome.w, outcome.h).padEnd(7)} ${item.key}`
        );
      }
    } else {
      failures.push({ key: item.key, url: item.url, reason: outcome.reason });
      console.warn(`   ✗ ${item.key} · ${outcome.reason}`);
    }

    if (!options.verbose && done % 25 === 0) {
      console.log(`   … ${done}/${pending.length}`);
    }
  });

  // Limpieza de huérfanas: solo en corridas completas, donde sí conocemos el
  // universo entero de claves vigentes.
  let pruned = 0;
  if (!options.only && !options.keepOrphans) {
    for (const key of Object.keys(result)) {
      if (!allKeys.has(key)) {
        delete result[key];
        pruned += 1;
      }
    }
    if (pruned > 0) console.log(`🧹 ${pruned} claves huérfanas retiradas del mapa`);
  }

  const sorted = {};
  for (const key of Object.keys(result).sort()) sorted[key] = result[key];

  if (options.dryRun) {
    console.log("🧪 --dry-run: no se escribió el JSON");
  } else {
    await fs.mkdir(path.dirname(OUTPUT), { recursive: true });
    await fs.writeFile(OUTPUT, serializeMap(sorted), "utf8");
    console.log(`💾 ${path.relative(ROOT, OUTPUT)} · ${Object.keys(sorted).length} entradas`);
  }

  // Informe
  const distribution = new Map();
  for (const [, value] of Object.entries(sorted)) {
    const label = `${value.w}×${value.h} (${describeRatio(value.w, value.h)})`;
    distribution.set(label, (distribution.get(label) || 0) + 1);
  }

  const total = Object.keys(sorted).length;
  console.log("\n──────── resumen ────────");
  console.log(`URL distintas en la base : ${allKeys.size}`);
  console.log(`Medidas en esta corrida  : ${resolved} de ${pending.length}`);
  console.log(`Entradas en el mapa      : ${total}`);
  console.log(
    `Cobertura                : ${
      allKeys.size ? ((total / allKeys.size) * 100).toFixed(1) : "0.0"
    }%`
  );
  console.log(`Fallidas                 : ${failures.length}`);
  console.log("\nProporciones encontradas:");
  for (const [label, count] of [...distribution.entries()].sort(
    (a, b) => b[1] - a[1]
  )) {
    const share = total ? ((count / total) * 100).toFixed(1) : "0.0";
    console.log(`  ${String(count).padStart(4)}  ${share.padStart(5)}%  ${label}`);
  }

  if (failures.length > 0) {
    console.log("\nFallidas (detalle):");
    for (const failure of failures) {
      console.log(`  ${failure.reason.padEnd(18)} ${failure.key}`);
    }
    process.exitCode = 1;
  }
}

const invokedDirectly =
  process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (invokedDirectly) {
  main().catch((error) => {
    console.error("💥 La sonda falló:", error);
    process.exitCode = 1;
  });
}
