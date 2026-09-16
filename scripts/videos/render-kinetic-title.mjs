// Renderiza una apertura de motion typography sobre un clip existente.
// Las letras se construyen por capas con Sharp y se animan cuadro a cuadro;
// FFmpeg conserva el movimiento del clip y, opcionalmente, toma el audio de
// otro archivo (útil para probar títulos sobre un máster ya mezclado).
//
// Uso:
//   node scripts/videos/render-kinetic-title.mjs \
//     --clip clips-v4/c01.mp4 --audio bochica-final-v4-r2.mp4 \
//     --font content/videos/fonts/Asimovian-Latin.woff2 \
//     --text BOCHICA --out bochica-title-prototype.mp4

import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import process from "node:process";
import sharp from "sharp";

const args = process.argv.slice(2);
function getFlag(name, fallback = null) {
  const index = args.indexOf(name);
  if (index === -1) return fallback;
  return args[index + 1] && !args[index + 1].startsWith("--") ? args[index + 1] : true;
}

const clipPath = getFlag("--clip");
const audioPath = getFlag("--audio");
const fontPath = getFlag("--font");
const text = String(getFlag("--text", "BOCHICA")).trim().toUpperCase();
const outPath = getFlag("--out");
const keepTemp = args.includes("--keep-temp");

if (!clipPath || !fontPath || !outPath || !text) {
  console.error("Uso: --clip <video> --font <woff2/ttf> --text <titulo> --out <mp4> [--audio <video>] [--keep-temp]");
  process.exit(1);
}

for (const input of [clipPath, fontPath, audioPath].filter(Boolean)) {
  if (!fs.existsSync(input)) throw new Error(`No existe el archivo: ${input}`);
}

const WIDTH = 1080;
const HEIGHT = 1920;
const FPS = 24;
const DURATION = 5;
const OVERLAY_HEIGHT = 330;
const OVERLAY_Y = 228;
const FRAME_COUNT = FPS * DURATION;
const FONT_NAME = "Asimovian";
const TITLE_SIZE = 90;
const TRACKING = 8;
const MARGIN = 26;

const workDir = fs.mkdtempSync(path.join(os.tmpdir(), "mitos-kinetic-title-"));
const framePattern = path.join(workDir, "title-%04d.png");
const overlayPath = path.join(workDir, "title-overlay.mov");

function run(command, commandArgs) {
  const result = spawnSync(command, commandArgs, { encoding: "utf8" });
  if (result.status !== 0) {
    throw new Error(`${command} falló:\n${result.stderr?.slice(-4000)}`);
  }
  return result.stdout;
}

function clamp(value, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

function easeOutCubic(value) {
  const t = clamp(value);
  return 1 - (1 - t) ** 3;
}

function easeOutBack(value) {
  const t = clamp(value);
  const c1 = 1.35;
  const c3 = c1 + 1;
  return 1 + c3 * (t - 1) ** 3 + c1 * (t - 1) ** 2;
}

function easeInOutCubic(value) {
  const t = clamp(value);
  return t < 0.5 ? 4 * t ** 3 : 1 - ((-2 * t + 2) ** 3) / 2;
}

function esc(value) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

async function textLayer(character, size, color) {
  return sharp({
    text: {
      text: `<span foreground="${color}" font_desc="${FONT_NAME} ${size}">${esc(character)}</span>`,
      rgba: true,
      dpi: 144,
      align: "centre",
      font: FONT_NAME,
      fontfile: fontPath,
    },
  })
    .png()
    .toBuffer();
}

async function reduceOpacity(input, opacity) {
  if (opacity >= 0.999) return input;
  return sharp(input)
    .ensureAlpha()
    .linear([1, 1, 1, clamp(opacity)], [0, 0, 0, 0])
    .png()
    .toBuffer();
}

async function buildLetter(character) {
  const [shadowGlyph, goldGlyph, outlineGlyph, fillMask] = await Promise.all([
    textLayer(character, TITLE_SIZE + 7, "#07140F"),
    textLayer(character, TITLE_SIZE + 4, "#B78A35"),
    textLayer(character, TITLE_SIZE + 3, "#173B31"),
    textLayer(character, TITLE_SIZE, "#FFFFFF"),
  ]);
  const [shadowMeta, goldMeta, outlineMeta, fillMeta] = await Promise.all(
    [shadowGlyph, goldGlyph, outlineGlyph, fillMask].map((buffer) => sharp(buffer).metadata())
  );
  const fillTexture = Buffer.from(`
    <svg width="${fillMeta.width}" height="${fillMeta.height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="paper" x1="0" y1="0" x2="0.8" y2="1">
          <stop offset="0" stop-color="#FFF9EA"/>
          <stop offset="0.52" stop-color="#F2E8D3"/>
          <stop offset="1" stop-color="#DCC9A5"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#paper)"/>
    </svg>
  `);
  const fillGlyph = await sharp(fillTexture)
    .composite([{ input: fillMask, blend: "dest-in" }])
    .png()
    .toBuffer();
  const glyphWidth = Math.max(shadowMeta.width, goldMeta.width, outlineMeta.width, fillMeta.width);
  const glyphHeight = Math.max(shadowMeta.height, goldMeta.height, outlineMeta.height, fillMeta.height);
  const canvasWidth = glyphWidth + MARGIN * 2;
  const canvasHeight = glyphHeight + MARGIN * 2;
  const centered = (meta, dx = 0, dy = 0) => ({
    left: Math.round((canvasWidth - meta.width) / 2 + dx),
    top: Math.round((canvasHeight - meta.height) / 2 + dy),
  });
  const shadow = await sharp(await reduceOpacity(shadowGlyph, 0.3)).blur(8).png().toBuffer();
  const composed = await sharp({
    create: {
      width: canvasWidth,
      height: canvasHeight,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([
      { input: shadow, ...centered(shadowMeta, 7, 10) },
      { input: goldGlyph, ...centered(goldMeta, 4, 5) },
      { input: outlineGlyph, ...centered(outlineMeta) },
      { input: fillGlyph, ...centered(fillMeta) },
    ])
    .png()
    .toBuffer();

  return {
    buffer: composed,
    width: canvasWidth,
    height: canvasHeight,
    advance: glyphWidth,
    opacityCache: new Map([[24, composed]]),
    variantCache: new Map(),
  };
}

async function letterAtOpacity(letter, opacity) {
  const key = Math.round(clamp(opacity) * 24);
  if (!letter.opacityCache.has(key)) {
    letter.opacityCache.set(key, await reduceOpacity(letter.buffer, key / 24));
  }
  return letter.opacityCache.get(key);
}

async function letterVariant(letter, opacity, angle) {
  const opacityKey = Math.round(clamp(opacity) * 24);
  const angleKey = Math.round(angle * 2) / 2;
  const cacheKey = `${opacityKey}:${angleKey}`;
  if (!letter.variantCache.has(cacheKey)) {
    const faded = await letterAtOpacity(letter, opacityKey / 24);
    if (Math.abs(angleKey) < 0.01) {
      letter.variantCache.set(cacheKey, {
        buffer: faded,
        offsetX: 0,
        offsetY: 0,
      });
    } else {
      const rotated = await sharp(faded)
        .rotate(angleKey, { background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .png()
        .toBuffer();
      const meta = await sharp(rotated).metadata();
      letter.variantCache.set(cacheKey, {
        buffer: rotated,
        offsetX: (letter.width - meta.width) / 2,
        offsetY: (letter.height - meta.height) / 2,
      });
    }
  }
  return letter.variantCache.get(cacheKey);
}

function ornamentSvg(time, titleLeft, titleWidth) {
  const intro = easeInOutCubic((time - 1.05) / 0.72);
  const outro = easeInOutCubic((time - 3.72) / 0.58);
  const progress = intro * (1 - outro);
  const targetWidth = titleWidth * 0.72;
  const currentWidth = targetWidth * progress;
  const center = titleLeft + titleWidth / 2;
  const left = center - currentWidth / 2;
  const right = center + currentWidth / 2;
  const opacity = clamp(progress * 1.15);
  const glint = intro > 0.08 && intro < 0.98 ? 1 : 0;
  return Buffer.from(`
    <svg width="${WIDTH}" height="${OVERLAY_HEIGHT}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gold" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stop-color="#8E6727" stop-opacity="0.25"/>
          <stop offset="0.5" stop-color="#E0BD69"/>
          <stop offset="1" stop-color="#8E6727" stop-opacity="0.25"/>
        </linearGradient>
        <filter id="glow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="4" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <path d="M ${left.toFixed(2)} 238 H ${right.toFixed(2)}" stroke="#173B31" stroke-opacity="${(opacity * 0.52).toFixed(3)}" stroke-width="6" stroke-linecap="round"/>
      <path d="M ${left.toFixed(2)} 238 H ${right.toFixed(2)}" stroke="url(#gold)" stroke-width="2.5" stroke-linecap="round" opacity="${opacity.toFixed(3)}"/>
      <path d="M ${center} 231 l 7 7 -7 7 -7 -7 z" fill="#D3A84E" opacity="${opacity.toFixed(3)}"/>
      ${glint ? `<g fill="#F8E3A3" filter="url(#glow)" opacity="${(1 - Math.abs(intro - 0.55) * 1.6).toFixed(3)}"><path d="M ${right.toFixed(2)} 226 v24 M ${(right - 12).toFixed(2)} 238 h24" stroke="#F8E3A3" stroke-width="2"/></g>` : ""}
    </svg>
  `);
}

async function main() {
  const letters = await Promise.all([...text].map(buildLetter));
  const totalAdvance = letters.reduce((sum, letter) => sum + letter.advance, 0) + TRACKING * (letters.length - 1);
  const titleLeft = Math.round((WIDTH - totalAdvance) / 2);
  const finalY = 40;
  const midpoint = (letters.length - 1) / 2;
  const finalPositions = [];
  let cursor = titleLeft;
  for (const letter of letters) {
    finalPositions.push(cursor - MARGIN);
    cursor += letter.advance + TRACKING;
  }

  console.log(`[title] ${text}: ${letters.length} letras · ancho ${Math.round(totalAdvance)}px · ${FRAME_COUNT} cuadros`);
  for (let frame = 0; frame < FRAME_COUNT; frame += 1) {
    const time = frame / FPS;
    const composites = [{ input: ornamentSvg(time, titleLeft, totalAdvance), left: 0, top: 0 }];
    for (let index = 0; index < letters.length; index += 1) {
      const introStart = 0.42 + index * 0.075;
      const intro = clamp((time - introStart) / 0.62);
      const exitStart = 3.66 + (letters.length - 1 - index) * 0.045;
      const exit = clamp((time - exitStart) / 0.56);
      const opacity = easeOutCubic(intro) * (1 - easeInOutCubic(exit));
      if (opacity <= 0.005) continue;

      const enterMotion = easeOutBack(intro);
      const exitMotion = easeInOutCubic(exit);
      const spread = (index - midpoint) * 18 * (1 - easeOutCubic(intro));
      const drift = time > 1.4 && time < 3.65 ? -3 * Math.sin(((time - 1.4) / 2.25) * Math.PI) : 0;
      const x = finalPositions[index] + spread + (index - midpoint) * 7 * exitMotion;
      const y = finalY + 52 * (1 - enterMotion) - 30 * exitMotion + drift;
      const direction = index % 2 === 0 ? -1 : 1;
      const angle = direction * 5.5 * (1 - easeOutCubic(intro)) - direction * 3.5 * exitMotion;
      const variant = await letterVariant(letters[index], opacity, angle);
      composites.push({
        input: variant.buffer,
        left: Math.round(x + variant.offsetX),
        top: Math.round(y + variant.offsetY),
      });
    }

    const output = path.join(workDir, `title-${String(frame + 1).padStart(4, "0")}.png`);
    await sharp({
      create: {
        width: WIDTH,
        height: OVERLAY_HEIGHT,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      },
    })
      .composite(composites)
      .png()
      .toFile(output);
  }

  run("ffmpeg", [
    "-y",
    "-framerate",
    String(FPS),
    "-i",
    framePattern,
    "-c:v",
    "qtrle",
    "-pix_fmt",
    "argb",
    overlayPath,
  ]);

  const ffmpegArgs = ["-y", "-i", clipPath, "-i", overlayPath];
  if (audioPath) ffmpegArgs.push("-i", audioPath);
  ffmpegArgs.push(
    "-filter_complex",
    `[0:v]trim=duration=${DURATION},setpts=PTS-STARTPTS,scale=${WIDTH}:${HEIGHT}:force_original_aspect_ratio=increase,crop=${WIDTH}:${HEIGHT},fps=${FPS},fade=t=in:st=0:d=0.6[bg];[1:v]format=argb[title];[bg][title]overlay=0:${OVERLAY_Y}:format=auto[vout]`,
    "-map",
    "[vout]"
  );
  if (audioPath) ffmpegArgs.push("-map", "2:a?");
  ffmpegArgs.push(
    "-t",
    String(DURATION),
    "-r",
    String(FPS),
    "-c:v",
    "libx264",
    "-preset",
    "medium",
    "-crf",
    "18",
    "-pix_fmt",
    "yuv420p"
  );
  if (audioPath) ffmpegArgs.push("-c:a", "aac", "-b:a", "192k");
  ffmpegArgs.push("-movflags", "+faststart", outPath);
  run("ffmpeg", ffmpegArgs);

  console.log(`[title] listo: ${outPath}`);
  if (keepTemp) console.log(`[title] temporales: ${workDir}`);
  else fs.rmSync(workDir, { recursive: true, force: true });
}

main().catch((error) => {
  console.error(error);
  console.error(`[title] temporales conservados para diagnóstico: ${workDir}`);
  process.exit(1);
});
