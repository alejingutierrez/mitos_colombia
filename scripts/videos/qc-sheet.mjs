#!/usr/bin/env node
// Hojas de contacto para el QC visual de los clips de un plan: 5 fotogramas por clip
// (0 · 1,25 · 2,5 · 3,75 · 4,9 s) en fila, N clips por hoja, con etiqueta. Se miran
// antes de ensamblar: apertura no congelada, estilo papel intacto, sin figuras nuevas,
// caras iguales entre el primer y el último fotograma.
//
// Uso: node scripts/videos/qc-sheet.mjs --plan <plan.json> --out <dir> [--per 6] [--width 216]
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import sharp from "sharp";

const args = process.argv.slice(2);
const val = (f, d = null) => { const i = args.indexOf(f); return i >= 0 && args[i + 1] ? args[i + 1] : d; };
const planPath = val("--plan"); const outDir = val("--out"); const per = Number(val("--per", 6)); const width = Number(val("--width", 216));
if (!planPath || !outDir) { console.error("Uso: --plan plan.json --out dir [--per 6] [--width 216]"); process.exit(1); }
const plan = JSON.parse(fs.readFileSync(planPath, "utf8"));
const planDir = path.dirname(path.resolve(planPath));
const clips = plan.blocks.filter((b) => b.type === "motion" && b.clip).map((b) => ({ name: path.basename(b.clip, ".mp4"), file: path.resolve(planDir, b.clip) })).filter((c) => fs.existsSync(c.file));
fs.mkdirSync(outDir, { recursive: true });
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "qc-"));
const TIMES = [0, 1.25, 2.5, 3.75, 4.9];
const H = Math.round(width * 16 / 9);
const LABEL = 28;
let sheet = 0;
for (let i = 0; i < clips.length; i += per) {
  const group = clips.slice(i, i + per);
  const comps = [];
  for (let r = 0; r < group.length; r++) {
    const c = group[r];
    for (let k = 0; k < TIMES.length; k++) {
      const png = path.join(tmp, `${c.name}-${k}.png`);
      spawnSync("ffmpeg", ["-y", "-loglevel", "error", "-ss", String(TIMES[k]), "-i", c.file, "-frames:v", "1", "-vf", `scale=${width}:${H}`, png]);
      if (fs.existsSync(png)) comps.push({ input: png, left: k * width, top: r * (H + LABEL) + LABEL });
    }
    const label = Buffer.from(`<svg width="${width * TIMES.length}" height="${LABEL}" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#111"/><text x="8" y="20" font-family="Helvetica" font-size="18" fill="#F5F0E6">${c.name}  ·  t = ${TIMES.join(" / ")} s</text></svg>`);
    comps.push({ input: label, left: 0, top: r * (H + LABEL) });
  }
  sheet += 1;
  const out = path.join(outDir, `qc-sheet-${String(sheet).padStart(2, "0")}.png`);
  await sharp({ create: { width: width * TIMES.length, height: group.length * (H + LABEL), channels: 3, background: "#222" } }).composite(comps).png().toFile(out);
  console.log(`${out}: ${group.map((c) => c.name).join(", ")}`);
}
fs.rmSync(tmp, { recursive: true, force: true });
console.log(`[qc-sheet] ${clips.length} clips en ${sheet} hoja(s)`);
