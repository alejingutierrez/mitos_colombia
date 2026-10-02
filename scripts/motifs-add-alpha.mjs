#!/usr/bin/env node
/**
 * Añade canal alfa a los PNG de /public/motifs.
 *
 * Los assets generados con gpt-image-2 salieron con fondo blanco opaco
 * (3 canales, isOpaque=true). El componente `Motif` los usa "pelados" sobre
 * fondos oscuros y sobre círculos de color, así que ese fondo se veía como un
 * rectángulo/cuadrado sólido — visible en la sala del oráculo y dentro de las
 * cartas de tarot del home.
 *
 * Estrategia: los motivos son line-art de un solo tinte sobre blanco puro.
 * Se invierte la composición sobre blanco para recuperar color y opacidad:
 *
 *   Cs = c·a + 255·(1 − a)      (lo que hay en el archivo)
 *   a  = 1 − min(r,g,b)/255     (máxima alfa que conserva la saturación)
 *   c  = (Cs − 255·(1 − a)) / a
 *
 * Es la operación estándar de "quitar fondo blanco" en arte lineal: deja los
 * bordes con antialias suave en vez de recortarlos a diente de sierra.
 *
 * Uso:  node scripts/motifs-add-alpha.mjs [--dry]
 */

import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const DIR = path.join(process.cwd(), "public", "motifs");
const DRY = process.argv.includes("--dry");

// Por debajo de este alfa el píxel es ruido de compresión contra el blanco.
const ALPHA_FLOOR = 0.02;

async function convert(file) {
  const abs = path.join(DIR, file);
  const src = sharp(abs);
  const meta = await src.metadata();

  if (meta.hasAlpha) return { file, skipped: "ya tiene alfa" };

  const { data, info } = await src
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const out = Buffer.alloc(info.width * info.height * 4);
  let opaquePx = 0;

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    let a = 1 - Math.min(r, g, b) / 255;
    if (a < ALPHA_FLOOR) {
      out[i] = out[i + 1] = out[i + 2] = out[i + 3] = 0;
      continue;
    }
    if (a > 1) a = 1;
    opaquePx++;

    const white = 255 * (1 - a);
    out[i] = Math.max(0, Math.min(255, Math.round((r - white) / a)));
    out[i + 1] = Math.max(0, Math.min(255, Math.round((g - white) / a)));
    out[i + 2] = Math.max(0, Math.min(255, Math.round((b - white) / a)));
    out[i + 3] = Math.round(a * 255);
  }

  const coverage = ((opaquePx / (info.width * info.height)) * 100).toFixed(1);

  if (!DRY) {
    const png = await sharp(out, {
      raw: { width: info.width, height: info.height, channels: 4 },
    })
      .png({ compressionLevel: 9, palette: false })
      .toBuffer();
    await fs.writeFile(abs, png);
  }

  return { file, size: `${info.width}×${info.height}`, coverage: `${coverage}%` };
}

const files = (await fs.readdir(DIR)).filter((f) => f.endsWith(".png")).sort();
let converted = 0;
let skipped = 0;

for (const file of files) {
  const res = await convert(file);
  if (res.skipped) {
    skipped++;
    continue;
  }
  converted++;
  console.log(`  ${res.file.padEnd(24)} ${res.size.padStart(11)}  tinta ${res.coverage}`);
}

console.log(
  `\n${DRY ? "[dry] " : ""}${converted} convertidos, ${skipped} omitidos, ${files.length} totales.`
);
