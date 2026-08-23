// Genera assets de biblia visual y keyframes de video con OpenAI (gpt-image-2),
// heredando el estilo studioPaperMaquette del sitio.
//
// Uso:
//   node scripts/videos/generate-keyframes.mjs --spec scripts/videos/specs/muisca-bachue-biblia.mjs
//   node scripts/videos/generate-keyframes.mjs --spec ... --only kf_b2_emerge --force
//   node scripts/videos/generate-keyframes.mjs --spec ... --dry-run
//
// Salida: content/videos/<spec>/  (<id>.jpg + <id>.crop-9x16.jpg para vertical)
// Manifiesto reproducible: content/videos/<spec>/manifest.json (prompts usados).

import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath, pathToFileURL } from "node:url";

import dotenv from "dotenv";
import OpenAI, { toFile } from "openai";
import sharp from "sharp";

import { IMAGE_STYLE_PROFILES } from "../../src/lib/image-generation.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "../..");

// El worktree puede no tener .env (gitignored): caer al .env del repo principal.
for (const envPath of [
  path.join(rootDir, ".env"),
  path.resolve(rootDir, "../../..", ".env"),
]) {
  dotenv.config({ path: envPath });
  if (process.env.OPENAI_API_KEY) break;
}

const args = process.argv.slice(2);
function getFlag(name, fallback = null) {
  const index = args.indexOf(name);
  if (index === -1) return fallback;
  const value = args[index + 1];
  if (!value || value.startsWith("--")) return true;
  return value;
}
const specPath = getFlag("--spec");
const only = String(getFlag("--only", "") || "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);
const dryRun = args.includes("--dry-run");
const force = args.includes("--force");
// Por defecto una referencia rota aborta la corrida antes de gastar un crédito.
// Esta bandera vuelve al comportamiento viejo: avisar y generar sin ella.
const allowMissingRefs = args.includes("--allow-missing-refs");

const MODEL = process.env.IMAGE_GENERATION_MODEL || "gpt-image-2";
const QUALITY = process.env.IMAGE_GENERATION_QUALITY || "high";
const SIZES = { vertical: "1024x1536", square: "1024x1024", horizontal: "1536x1024" };

function buildPrompt(item, spec) {
  const style = IMAGE_STYLE_PROFILES.studioPaperMaquette.lines;
  const kindHeader = {
    personaje:
      "Ficha de personaje para una biblia visual: UNA figura (o grupo indicado) de cuerpo entero, frontal, centrada, sobre fondo mate liso color crema claro, sin escenario ni utilería extra. La figura es un recorte y volumen de papel con capas, bordes y fibras visibles.",
    paisaje:
      "Paisaje de biblia visual: un solo tableau artesanal de borde a borde, profundidad por capas de papel, sin personas.",
    prop:
      "Ficha de objeto para biblia visual: el objeto único, centrado, con detalle artesanal de papel.",
    keyframe:
      "Fotograma inicial (keyframe) de una escena de video vertical: composición frontal de borde a borde, acción esencial en el eje central con aire arriba y abajo; los rostros y manos lejos de los bordes laterales. El 15% inferior del encuadre queda libre de rostros, manos y objetos narrativos clave (allí se sobreimprimen subtítulos), y el 20% superior sin elementos críticos (allí puede ir un título).",
  }[item.kind];

  return [
    "Dirección de arte para la biblia visual en video de mitos colombianos (pueblo muisca, altiplano cundiboyacense).",
    "",
    "Técnica central:",
    "- Fotografía frontal de una maqueta física real de papel artesanal, no ilustración digital.",
    ...style.map((line) => `- ${line}`),
    `- ${kindHeader}`,
    "",
    "Escena:",
    `- ${item.scene}`,
    "",
    `Paleta: ${spec.PALETTE}.`,
    `Evitar SIEMPRE: ${spec.SHARED_AVOID}${item.avoid ? `; ademas evitar: ${item.avoid}` : ""}.`,
  ].join("\n");
}

async function fileExists(p) {
  return fs
    .access(p)
    .then(() => true)
    .catch(() => false);
}

async function callOpenAI(openai, item, prompt, refPaths) {
  const size = SIZES[item.preset] || SIZES.vertical;
  if (!refPaths.length) {
    const params = {
      model: MODEL,
      prompt,
      n: 1,
      size,
      quality: QUALITY,
      moderation: "low",
      output_format: "jpeg",
    };
    const res = await openai.images.generate(params);
    return Buffer.from(res.data[0].b64_json, "base64");
  }

  const images = await Promise.all(
    refPaths.map((p) =>
      fs
        .readFile(p)
        .then((buf) => toFile(buf, path.basename(p), { type: "image/jpeg" }))
    )
  );
  // images.edit con referencias; parámetros opcionales se degradan si la API los rechaza.
  const attempts = [
    { model: MODEL, image: images, prompt, n: 1, size, quality: QUALITY, input_fidelity: "high", output_format: "jpeg" },
    { model: MODEL, image: images, prompt, n: 1, size, quality: QUALITY, output_format: "jpeg" },
    { model: MODEL, image: images, prompt, n: 1, size, quality: QUALITY },
  ];
  let lastError;
  for (const params of attempts) {
    try {
      const res = await openai.images.edit(params);
      return Buffer.from(res.data[0].b64_json, "base64");
    } catch (error) {
      lastError = error;
      const msg = String(error?.message || "");
      if (!/unknown|unrecognized|unsupported|does not support|not supported|invalid.*parameter/i.test(msg)) throw error;
    }
  }
  throw lastError;
}

// Un ref con "/" apunta a otra spec: content/videos/<spec>/<id>.jpg
// Uno sin "/" es un hermano de esta misma spec: <outDir>/<id>.jpg
function refPathFor(ref, outDir) {
  return ref.includes("/")
    ? path.join(rootDir, "content", "videos", `${ref}.jpg`)
    : path.join(outDir, `${ref}.jpg`);
}

/**
 * Comprueba TODAS las referencias antes de generar nada.
 *
 * Antes, una referencia que no existía sólo imprimía un aviso y la imagen se
 * generaba sin ella: el resultado salía sin la continuidad visual que la
 * referencia garantizaba, y el aviso se perdía entre la salida del generador.
 * Así se colaron dos keyframes de Bachué con `vasija_ceramica` roto, y nadie
 * lo vio hasta auditar la biblia meses después.
 *
 * Ahora se valida en seco y de una vez, así el fallo cuesta cero créditos y se
 * ven todas las referencias rotas juntas, no una por corrida.
 */
async function assertRefsExist(items, outDir) {
  const producedHere = new Set(items.map((item) => item.id));
  const missing = [];
  for (const item of items) {
    for (const ref of item.refs || []) {
      // Un hermano de esta corrida todavía no está en disco: lo hará la ola previa.
      if (!ref.includes("/") && producedHere.has(ref)) continue;
      const refPath = refPathFor(ref, outDir);
      if (!(await fileExists(refPath))) {
        missing.push({ id: item.id, ref, refPath: path.relative(rootDir, refPath) });
      }
    }
  }
  if (!missing.length) return;

  const detail = missing
    .map((m) => `  · ${m.id} → ${m.ref}   (falta ${m.refPath})`)
    .join("\n");
  if (allowMissingRefs) {
    console.warn(
      `[keyframes] ${missing.length} referencia(s) rota(s), continúo por --allow-missing-refs:\n${detail}`
    );
    return;
  }
  throw new Error(
    `${missing.length} referencia(s) rota(s). No genero nada para no gastar créditos con la continuidad rota:\n${detail}\n` +
      `  Revisa que el archivo exista como .jpg con ese nombre exacto, o pasa --allow-missing-refs si de verdad quieres generarlas sin referencia.`
  );
}

async function main() {
  if (!specPath) throw new Error("--spec es requerido");
  const spec = await import(pathToFileURL(path.resolve(rootDir, specPath)).href);
  // OUT_DIR (relativo a content/videos/) permite escribir en la biblioteca del
  // pueblo (p. ej. "muiscas/biblia"); sin él, cae al nombre de la spec.
  const outDir = path.join(rootDir, "content", "videos", spec.OUT_DIR || spec.SPEC_NAME);
  await fs.mkdir(outDir, { recursive: true });

  const manifestPath = path.join(outDir, "manifest.json");
  const manifest = (await fileExists(manifestPath))
    ? JSON.parse(await fs.readFile(manifestPath, "utf8"))
    : { spec: spec.SPEC_NAME, model: MODEL, quality: QUALITY, items: {} };

  const items = spec.ITEMS.filter((i) => !only.length || only.includes(i.id));
  console.log(`[keyframes] spec=${spec.SPEC_NAME} items=${items.length} model=${MODEL} dryRun=${dryRun}`);

  await assertRefsExist(items, outDir);

  const openai = dryRun ? null : new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const concurrency = Math.max(1, Number(getFlag("--concurrency", 4)) || 4);
  let ok = 0;
  let failed = 0;

  async function processItem(item) {
    const outPath = path.join(outDir, `${item.id}.jpg`);
    if (!force && (await fileExists(outPath))) {
      console.log(`[keyframes] skip (existe): ${item.id}`);
      return "skip";
    }
    const refPaths = [];
    for (const ref of item.refs || []) {
      const refPath = refPathFor(ref, outDir);
      if (!(await fileExists(refPath))) {
        // Red de seguridad: `assertRefsExist` ya validó en seco, así que llegar
        // aquí significa que la referencia desapareció durante la corrida.
        if (!allowMissingRefs) {
          throw new Error(
            `${item.id}: falta la referencia ${ref} (${path.relative(rootDir, refPath)}). No genero sin ella.`
          );
        }
        console.warn(`[keyframes] ${item.id}: falta la referencia ${ref} — se genera sin ella`);
        continue;
      }
      refPaths.push(refPath);
    }
    const prompt = buildPrompt(item, spec);
    if (dryRun) {
      console.log(`\n=== ${item.id} (${item.kind}, refs: ${refPaths.length}) ===\n${prompt}\n`);
      return "skip";
    }
    console.log(`[keyframes] generando ${item.id} (${item.kind}, refs: ${refPaths.length})...`);
    const buffer = await callOpenAI(openai, item, prompt, refPaths);
    await fs.writeFile(outPath, buffer);
    if (item.preset === "vertical") {
      await sharp(buffer)
        .resize(1080, 1920, { fit: "cover", position: "centre" })
        .jpeg({ quality: 92, mozjpeg: true })
        .toFile(path.join(outDir, `${item.id}.crop-9x16.jpg`));
    }
    manifest.items[item.id] = {
      kind: item.kind,
      preset: item.preset,
      refs: item.refs || [],
      prompt,
      generated_at: new Date().toISOString(),
    };
    console.log(`[keyframes] ok ${item.id}`);
    return "ok";
  }

  // Olas por dependencias: un item espera solo a refs de ESTA corrida que aún no
  // existen en disco; el resto corre en paralelo (limitado por --concurrency).
  const pendingIds = new Set(items.map((i) => i.id));
  const doneIds = new Set();
  const remaining = [...items];
  while (remaining.length) {
    const wave = [];
    for (const item of remaining) {
      const deps = (item.refs || []).filter((r) => !r.includes("/") && pendingIds.has(r) && !doneIds.has(r));
      if (!deps.length) wave.push(item);
    }
    if (!wave.length) {
      console.error(`[keyframes] dependencia circular o irresoluble entre: ${remaining.map((i) => i.id).join(", ")}`);
      failed += remaining.length;
      break;
    }
    for (let i = 0; i < wave.length; i += concurrency) {
      const chunk = wave.slice(i, i + concurrency);
      const results = await Promise.allSettled(chunk.map((item) => processItem(item)));
      results.forEach((res, j) => {
        const item = chunk[j];
        doneIds.add(item.id);
        if (res.status === "fulfilled") {
          if (res.value === "ok") ok += 1;
        } else {
          failed += 1;
          console.error(`[keyframes] ERROR ${item.id}: ${res.reason?.message || res.reason}`);
        }
      });
      await fs.writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
    }
    for (const item of wave) {
      const idx = remaining.indexOf(item);
      if (idx !== -1) remaining.splice(idx, 1);
    }
  }
  console.log(`[keyframes] listo: ${ok} ok, ${failed} con error. Salida: ${outDir}`);
  if (failed > 0) process.exitCode = 1;
}

main().catch((error) => {
  console.error("[keyframes] error fatal:", error.message);
  process.exitCode = 1;
});
