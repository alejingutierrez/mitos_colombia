// Validador de plan.json ANTES de generar clips (cero costos):
//  - existencia de cada archivo (clips, voces, música, sfx, stills)
//  - mide el fin real de cada narración (silencedetect) y verifica que la
//    ventana de su bloque narrativo alcance (habla + offset + aire)
//  - sugiere la partición de duraciones de clips (pares 5/6) por bloque
//  - avisa si la música es más corta que el video (la resolución final la
//    maneja el ensamblador, pero conviene saberlo)
//
// Uso:
//   node scripts/videos/validate-plan.mjs --plan content/videos/<x>/plan.json
//   node scripts/videos/validate-plan.mjs --plan ... --suggest   (solo con voces:
//     imprime las duraciones de clip recomendadas aunque falten los clips)

import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const args = process.argv.slice(2);
const planPath = args[args.indexOf("--plan") + 1];
const suggest = args.includes("--suggest");
if (!planPath || planPath.startsWith("--")) {
  console.error("Uso: node scripts/videos/validate-plan.mjs --plan plan.json [--suggest]");
  process.exit(1);
}
const plan = JSON.parse(fs.readFileSync(planPath, "utf8"));
const planDir = path.dirname(path.resolve(planPath));
const resolveInput = (p) => (p ? (path.isAbsolute(p) ? p : path.resolve(planDir, p)) : null);
const VOICE_OFFSET = plan.voice_offset ?? 0.5;
const GAP = 0.3;

function probeDuration(file) {
  const res = spawnSync("ffprobe", ["-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", file], { encoding: "utf8" });
  return Number.parseFloat(String(res.stdout).trim());
}
function probeSpeechEnd(file, totalDur) {
  const res = spawnSync("ffmpeg", ["-i", file, "-af", "silencedetect=n=-35dB:d=0.2", "-f", "null", "-"], { encoding: "utf8" });
  const log = `${res.stderr || ""}`;
  const starts = [...log.matchAll(/silence_start:\s*([\d.]+)/g)].map((m) => Number(m[1]));
  const ends = [...log.matchAll(/silence_end:\s*([\d.]+)/g)].map((m) => Number(m[1]));
  if (!starts.length) return totalDur;
  const lastStart = starts[starts.length - 1];
  const lastEnd = ends.length >= starts.length ? ends[ends.length - 1] : totalDur;
  return lastEnd >= totalDur - 0.15 ? lastStart : totalDur;
}
// Partición en pares de clips de 5-6 s que cubra `need` segundos.
function suggestPair(need) {
  for (const [a, b] of [[5, 5], [5, 6], [6, 6], [6, 7], [7, 7]]) {
    if (a + b >= need) return [a, b];
  }
  return [7, Math.ceil(need - 7)];
}

let errors = 0;
let warns = 0;
const err = (m) => { errors += 1; console.log(`✗ ${m}`); };
const warn = (m) => { warns += 1; console.log(`! ${m}`); };

// 1. Archivos
for (const b of plan.blocks) {
  for (const key of ["clip", "image", "voice", "sfx"]) {
    if (b[key]) {
      const p = resolveInput(b[key]);
      if (!fs.existsSync(p)) {
        if (suggest && (key === "clip" || key === "image")) continue; // aún no generados
        err(`bloque ${b.n}: falta ${key} → ${b[key]}`);
      }
    }
  }
}
const musicPath = resolveInput(plan.music);
if (plan.music && !fs.existsSync(musicPath)) err(`música no encontrada: ${plan.music}`);

// 2. Ventanas narrativas: de cada bloque con voz al siguiente con voz (o el final)
const voiced = plan.blocks
  .map((b, i) => ({ b, i }))
  .filter(({ b }) => b.voice && fs.existsSync(resolveInput(b.voice)));
let totalPlanned = 0;
const durations = plan.blocks.map((b) => {
  if (b.duration) return b.duration;
  if (b.clip && fs.existsSync(resolveInput(b.clip))) return Math.floor(probeDuration(resolveInput(b.clip)));
  return 0;
});
totalPlanned = durations.reduce((a, d) => a + d, 0);

console.log(`\n[validate-plan] ${plan.blocks.length} bloques · ${voiced.length} narraciones · total planificado ${totalPlanned.toFixed(1)}s`);
for (let k = 0; k < voiced.length; k++) {
  const { b, i } = voiced[k];
  const vPath = resolveInput(b.voice);
  const vDur = probeDuration(vPath);
  const speechEnd = probeSpeechEnd(vPath, vDur);
  const nextI = k + 1 < voiced.length ? voiced[k + 1].i : plan.blocks.length;
  const window = durations.slice(i, nextI).reduce((a, d) => a + d, 0);
  const need = speechEnd + GAP;
  const [a2, b2] = suggestPair(need);
  const label = `bloque ${b.n} (voz ${path.basename(b.voice)})`;
  if (suggest) {
    console.log(`  ${label}: habla ${speechEnd.toFixed(2)}s → ventana mínima ${need.toFixed(1)}s → clips sugeridos ${a2}s + ${b2}s`);
  }
  const isLastVoice = k === voiced.length - 1;
  if (window > 0 && window < need - 0.05) {
    err(`${label}: ventana ${window.toFixed(1)}s < habla+aire ${need.toFixed(1)}s → sube duraciones (sugerido ${a2}+${b2})`);
  } else if (window > 0 && window - need > 3.5 && !isLastVoice) {
    warn(`${label}: ${(window - need).toFixed(1)}s de aire muerto tras el habla — considera acortar clips`);
  }
}

// 3. Música vs duración total
if (plan.music && fs.existsSync(musicPath) && totalPlanned > 0) {
  const mDur = probeDuration(musicPath);
  if (mDur < totalPlanned - 5) {
    warn(`música ${mDur.toFixed(0)}s vs video ~${totalPlanned.toFixed(0)}s: resolverá antes del final (el ensamblador la funde; el cierre queda solo con ambiente)`);
  }
}

// 4. Subtítulos demasiado largos por cue
for (const b of plan.blocks) {
  if (b.subtitle && b.subtitle.split(/\s+/).length > 24) {
    warn(`bloque ${b.n}: subtítulo de ${b.subtitle.split(/\s+/).length} palabras (>24): revisa que la voz calce`);
  }
}

console.log(`\n[validate-plan] ${errors} errores, ${warns} avisos.`);
if (errors > 0) process.exit(1);
