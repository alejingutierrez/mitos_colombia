/**
 * Render v10 · captura las láminas de una composición a 1080×1350
 * contra /design-system/instagram-v10 y arma el contact sheet.
 *
 * Uso:
 *   node scripts/instagram/render-v10.mjs --slug bachue [--edition v10]
 *     [--base-url http://localhost:3111] [--output carpeta]
 */

import { execFile } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import { promisify } from "node:util";
import sharp from "sharp";

const run = promisify(execFile);

function argument(name, fallback = "") {
  const index = process.argv.indexOf(`--${name}`);
  return index >= 0 ? process.argv[index + 1] : fallback;
}

const slug = argument("slug");
const edition = argument("edition", "v10");
const baseUrl = argument("base-url", "http://localhost:3111");
if (!slug) {
  throw new Error("Uso: node scripts/instagram/render-v10.mjs --slug <slug> [...opciones]");
}

const compositionPath = argument(
  "composition",
  path.join(process.cwd(), "artifacts", "instagram", slug, `composition-${edition}.json`)
);
const outputDirectory = argument(
  "output",
  path.join(process.cwd(), "artifacts", "instagram", slug, `v10-${edition}`)
);

const composition = JSON.parse(await fs.readFile(compositionPath, "utf8"));
await fs.mkdir(outputDirectory, { recursive: true });

function escapeXml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

const outputs = [];
for (const slide of composition.slides) {
  const filename = `${String(slide.sequence).padStart(2, "0")}-${slide.screenType}.png`;
  const destination = path.join(outputDirectory, filename);
  const url = `${baseUrl}/design-system/instagram-v10?composition=${encodeURIComponent(slug)}&edition=${encodeURIComponent(edition)}&slide=${slide.sequence}`;
  const waitExtra = slide.screenType === "territorio" ? "3600" : "900";
  let lastError;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      await run(
        "npx",
        [
          "--no-install",
          "playwright",
          "screenshot",
          "--channel",
          "chrome",
          "--viewport-size",
          "1080,1350",
          "--wait-for-selector",
          "[data-v10-slide]",
          "--wait-for-timeout",
          waitExtra,
          url,
          destination,
        ],
        { cwd: process.cwd(), maxBuffer: 1024 * 1024 * 5 }
      );
      lastError = null;
      break;
    } catch (error) {
      lastError = error;
    }
  }
  if (lastError) throw lastError;
  const metadata = await sharp(destination).metadata();
  if (metadata.width !== 1080 || metadata.height !== 1350) {
    throw new Error(`${filename} mide ${metadata.width}×${metadata.height}; se esperaba 1080×1350.`);
  }
  outputs.push({ sequence: slide.sequence, file: filename, template_id: slide.template_id });
  console.log(`  ${filename} · ${slide.template_id}`);
}

// --- contact sheet -----------------------------------------------------------
const columns = 5;
const thumbW = 260;
const thumbH = 325;
const gap = 24;
const padding = 32;
const header = 110;
const labelH = 54;
const rows = Math.ceil(outputs.length / columns);
const width = padding * 2 + columns * thumbW + (columns - 1) * gap;
const height = header + padding + rows * (thumbH + labelH) + (rows - 1) * gap;

const layers = [];
for (const [index, item] of outputs.entries()) {
  const thumbnail = await sharp(path.join(outputDirectory, item.file))
    .resize(thumbW, thumbH, { fit: "cover" })
    .png()
    .toBuffer();
  layers.push({
    input: thumbnail,
    left: padding + (index % columns) * (thumbW + gap),
    top: header + Math.floor(index / columns) * (thumbH + labelH + gap),
  });
}
const labels = outputs
  .map((item, index) => {
    const x = padding + (index % columns) * (thumbW + gap);
    const y = header + Math.floor(index / columns) * (thumbH + labelH + gap) + thumbH + 22;
    const name = composition.slides[index].template_variant;
    return `<text class="n" x="${x}" y="${y}">${String(item.sequence).padStart(2, "0")} · ${escapeXml(name)}</text>`;
  })
  .join("");
const sheetSvg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <style>
    .e { font: 700 13px 'Noto Sans Display', Arial, sans-serif; letter-spacing: 4px; fill: #c5a45d; }
    .t { font: 500 36px 'Noto Sans Display', Arial, sans-serif; fill: #f3edde; }
    .n { font: 600 12px 'Noto Sans Display', Arial, sans-serif; fill: #cfd8d2; }
  </style>
  <text class="e" x="${padding}" y="34">CARRUSEL V10 · ACABADO A+C · MODO ${escapeXml(composition.mode)}</text>
  <text class="t" x="${padding}" y="78">${escapeXml(composition.myth?.title || slug)} · ${outputs.length} láminas</text>
  ${labels}
</svg>`;
await sharp({ create: { width, height, channels: 3, background: "#101716" } })
  .composite([...layers, { input: Buffer.from(sheetSvg), left: 0, top: 0 }])
  .png()
  .toFile(path.join(outputDirectory, "contact-sheet.png"));

await fs.writeFile(
  path.join(outputDirectory, "manifest.json"),
  `${JSON.stringify({ slug, edition, mode: composition.mode, seed: composition.seed, slides: outputs }, null, 2)}\n`
);
console.log(`contact-sheet.png y manifest.json → ${path.relative(process.cwd(), outputDirectory)}`);
