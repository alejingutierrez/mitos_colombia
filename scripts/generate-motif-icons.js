import "dotenv/config";
import OpenAI from "openai";
import sharp from "sharp";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

/**
 * Genera íconos-motivo del sistema de diseño (rediseño 2026) con OpenAI gpt-image-2.
 *
 * Estándar "Variante B": line-art minimal bold, trazo grueso uniforme, contornos
 * abiertos (sin rellenos sólidos), verde selva #1c5c3f sobre blanco, legible a 32-48px.
 *
 * Uso:
 *   node scripts/generate-motif-icons.js "a jaguar head" jaguar
 *   node scripts/generate-motif-icons.js "a toucan" tucan --outdir public/motifs
 *
 * Argumentos:
 *   1) subject  — descripción en inglés del sujeto ("a jaguar head", "a river wave")
 *   2) slug     — nombre de archivo de salida (kebab-case)
 *   --outdir    — carpeta destino (default: public/motifs)
 *   --model     — override del modelo (default: gpt-image-2)
 */

const ACCENT = "#1c5c3f";

const args = process.argv.slice(2);

function getFlag(flag, fallback) {
  const i = args.indexOf(flag);
  if (i === -1 || i === args.length - 1) return fallback;
  return args[i + 1];
}

const positional = args.filter((a) => !a.startsWith("--") && args[args.indexOf(a) - 1]?.startsWith("--") !== true);
const subject = positional[0];
const slug = positional[1];
const outdir = getFlag("--outdir", "public/motifs");
const model = getFlag("--model", "gpt-image-2");

if (!subject || !slug) {
  console.error('Uso: node scripts/generate-motif-icons.js "<subject en inglés>" <slug> [--outdir dir]');
  process.exit(1);
}
if (!process.env.OPENAI_API_KEY) {
  console.error("Falta OPENAI_API_KEY en el entorno (.env).");
  process.exit(1);
}

/** Plantilla de prompt del estándar Variante B. */
function buildPrompt(subjectText) {
  return `Vector-style line icon of ${subjectText}, front-facing, centered, on a 1024x1024
canvas with roughly 10% even margin on all sides.

MEDIUM: single-weight open-outline ink line art. Every shape (silhouette, features, surface
markings) is drawn as an OPEN STROKE OUTLINE — never a solid filled shape, never a filled dot.
Small markings (spots, rosettes, scales) render as small hollow ring/loop outlines.

LINE WEIGHT: bold and thick, approximately 18-20px stroke width at this 1024px canvas size,
uniform and consistent across the whole drawing, no hairline-thin details anywhere.

COLOR: a single flat dark forest green, hex ${ACCENT}, for all strokes. Plain solid white
background (#ffffff). No gradients, no secondary colors, no color fills.

DETAIL LEVEL: minimal to moderate — enough distinguishing detail to read clearly as the subject
(silhouette, eyes, characteristic markings) but only simple outline strokes. NO cross-hatching,
NO fur/feather/scale texture, NO shading or gradients, NO drop shadow.

COMPOSITION: symmetrical where the subject allows it, centered, clean and legible at small sizes
down to 32px. No text, no watermark, no signature, no border around the canvas.`;
}

const SIZES = [512, 256, 128, 96, 64, 48, 32];

async function main() {
  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const dir = path.resolve(process.cwd(), outdir);
  await mkdir(dir, { recursive: true });

  console.log(`Generando "${slug}" (${subject}) con ${model}…`);
  const result = await client.images.generate({
    model,
    prompt: buildPrompt(subject),
    size: "1024x1024",
    quality: "high",
    moderation: "low",
    n: 1,
  });

  const b64 = result.data?.[0]?.b64_json;
  if (!b64) throw new Error("La respuesta no incluye b64_json");
  const buf = Buffer.from(b64, "base64");

  const masterPath = path.join(dir, `${slug}-1024.png`);
  await writeFile(masterPath, buf);
  console.log(`  ✓ ${masterPath}`);

  for (const size of SIZES) {
    const out = path.join(dir, `${slug}-${size}.png`);
    await sharp(buf).resize(size, size, { fit: "contain", background: "#ffffff" }).png().toFile(out);
    console.log(`  ✓ ${out}`);
  }
  console.log("Listo. Revisa siempre las versiones de 32/48px antes de aprobar.");
}

main().catch((e) => {
  console.error("Error:", e.message);
  process.exit(1);
});
