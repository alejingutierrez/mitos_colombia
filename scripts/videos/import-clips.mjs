// Importa los clips descargados de la web de Higgsfield (hf_YYYYMMDD_HHMMSS_<job>.mp4)
// a los clips/cNN.mp4 que espera el plan.json del video.
//
// Doctrina: con el arnés de 1-en-vuelo el orden de llegada ES el orden de envío,
// así que el mapeo por defecto es secuencial (hf_* ordenados por timestamp del nombre
// → bloques motion del plan en orden). Para casos ambiguos (llegada tardía colada,
// tanda con reintentos) se pasa un --map explícito.
//
// Uso:
//   node scripts/videos/import-clips.mjs --in ~/Downloads --plan .../plan.json            # dry-run
//   node scripts/videos/import-clips.mjs --in ~/Downloads --plan .../plan.json --apply    # copia
//   node scripts/videos/import-clips.mjs --in ... --plan ... --map map.json --apply
//     (map.json: { "c01": "hf_20260831_182300_<job>.mp4", ... } — rutas relativas a --in)
//
// Con --map el mapa puede ser PARCIAL: se importan solo los clips mapeados (el caso de
// regenerar un clip suelto tras QC). Sin --map, el mapeo es secuencial y exige conteo
// exacto.
//
// Con --apply escribe además clips/import-map.json: el registro versionable de qué
// archivo hf_* respalda cada cNN (equivalente del manifest de keyframes). Si un clip
// ya tenía entrada, la anterior se conserva en su campo "replaced" (historial de
// regeneraciones — los .mp4 no van a git, así que este archivo es el único registro).

import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import process from "node:process";

const args = process.argv.slice(2);
const argVal = (flag) => {
  const i = args.indexOf(flag);
  return i >= 0 && args[i + 1] && !args[i + 1].startsWith("--") ? args[i + 1] : null;
};
const inDir = argVal("--in");
const planPath = argVal("--plan");
const mapPath = argVal("--map");
const apply = args.includes("--apply");
if (!inDir || !planPath) {
  console.error("Uso: node scripts/videos/import-clips.mjs --in <dir> --plan plan.json [--map map.json] [--apply]");
  process.exit(1);
}

const expandHome = (p) => (p.startsWith("~") ? path.join(os.homedir(), p.slice(1)) : p);
const inDirAbs = path.resolve(expandHome(inDir));
const plan = JSON.parse(fs.readFileSync(planPath, "utf8"));
const planDir = path.dirname(path.resolve(planPath));

const HF_RE = /^hf_(\d{8})_(\d{6})_[0-9a-f-]{36}\.mp4$/;

// 1. Destinos: los bloques motion del plan, en orden.
const motionBlocks = plan.blocks.filter((b) => b.type === "motion" && b.clip);
if (!motionBlocks.length) {
  console.error("El plan no tiene bloques motion con clip.");
  process.exit(1);
}

// 2. Origen: hf_*.mp4 del directorio, ordenados por timestamp del nombre.
const hfFiles = fs
  .readdirSync(inDirAbs)
  .filter((f) => HF_RE.test(f))
  .sort();
console.log(`[import-clips] ${hfFiles.length} archivos hf_*.mp4 en ${inDirAbs} · ${motionBlocks.length} bloques motion en el plan`);

// 3. Mapeo cNN → archivo hf.
let mapping; // [{ clipRel, hfFile }]
if (mapPath) {
  const map = JSON.parse(fs.readFileSync(mapPath, "utf8"));
  const byName = new Map(motionBlocks.map((b) => [path.basename(b.clip, ".mp4"), b]));
  const desconocidos = Object.keys(map).filter((k) => !byName.has(k));
  if (desconocidos.length) {
    console.error(`✗ el map nombra clips que no existen en el plan: ${desconocidos.join(", ")}`);
    process.exit(1);
  }
  // Mapa parcial permitido: se importan SOLO los clips mapeados (regeneración suelta).
  mapping = Object.entries(map).map(([clipName, hfFile]) => ({
    clipRel: byName.get(clipName).clip,
    clipName,
    hfFile,
  }));
  if (mapping.length < motionBlocks.length) {
    console.log(`[import-clips] map parcial: ${mapping.length}/${motionBlocks.length} clips (los demás quedan como están)`);
  }
} else {
  if (hfFiles.length !== motionBlocks.length) {
    console.error(
      `✗ conteo desigual: ${hfFiles.length} hf_*.mp4 vs ${motionBlocks.length} bloques motion.` +
        ` Limpia el directorio (o usa --map) — una llegada tardía de otra tanda descuadra el orden.`
    );
    process.exit(1);
  }
  mapping = motionBlocks.map((b, i) => ({
    clipRel: b.clip,
    clipName: path.basename(b.clip, ".mp4"),
    hfFile: hfFiles[i],
  }));
}

// 4. Verificación técnica de cada clip (resolución/fps/duración).
function probe(file) {
  const res = spawnSync(
    "ffprobe",
    ["-v", "error", "-select_streams", "v:0", "-show_entries", "stream=width,height,r_frame_rate,duration", "-of", "json", file],
    { encoding: "utf8" }
  );
  try {
    const s = JSON.parse(res.stdout).streams[0];
    const [num, den] = s.r_frame_rate.split("/").map(Number);
    return { width: s.width, height: s.height, fps: num / (den || 1), duration: Number(s.duration) };
  } catch {
    return null;
  }
}

let warns = 0;
const record = {};
for (const m of mapping) {
  const src = path.join(inDirAbs, m.hfFile);
  const p = probe(src);
  if (!p) {
    console.error(`✗ ${m.clipName}: ffprobe falló sobre ${m.hfFile}`);
    process.exit(1);
  }
  const flags = [];
  if (p.width !== plan.width || p.height !== plan.height) flags.push(`${p.width}x${p.height}≠${plan.width}x${plan.height}`);
  const block = motionBlocks.find((b) => b.clip === m.clipRel);
  if (block?.duration && Math.abs(p.duration - block.duration) > 0.6) flags.push(`dur ${p.duration.toFixed(2)}s vs plan ${block.duration}s`);
  if (flags.length) {
    warns += 1;
    console.log(`! ${m.clipName} ← ${m.hfFile} · ${flags.join(" · ")} (el ensamblador normaliza, pero revisa que sea el clip correcto)`);
  } else {
    console.log(`  ${m.clipName} ← ${m.hfFile} · ${p.width}x${p.height} @${p.fps.toFixed(0)}fps ${p.duration.toFixed(2)}s`);
  }
  record[m.clipName] = { source: m.hfFile, width: p.width, height: p.height, fps: p.fps, duration: p.duration };
}

if (!apply) {
  console.log(`\n[import-clips] dry-run: nada copiado (${warns} avisos). Repite con --apply para copiar.`);
  process.exit(0);
}

// 5. Copia + registro (fusiona con el import-map existente; lo reemplazado queda en
//    "replaced" — el único historial de regeneraciones, porque los .mp4 no van a git).
for (const m of mapping) {
  const src = path.join(inDirAbs, m.hfFile);
  const dst = path.resolve(planDir, m.clipRel);
  fs.mkdirSync(path.dirname(dst), { recursive: true });
  fs.copyFileSync(src, dst);
}
const recordPath = path.resolve(planDir, path.dirname(mapping[0].clipRel), "import-map.json");
const now = new Date().toISOString();
let previo = { clips: {} };
if (fs.existsSync(recordPath)) {
  try { previo = JSON.parse(fs.readFileSync(recordPath, "utf8")); } catch { /* registro corrupto: se rehace */ }
}
const clipsOut = { ...(previo.clips || {}) };
for (const [clipName, entry] of Object.entries(record)) {
  const anterior = clipsOut[clipName];
  const nuevo = { ...entry, imported_at: now, from: inDirAbs };
  if (anterior && anterior.source !== entry.source) {
    nuevo.replaced = [...(anterior.replaced || []), { ...anterior, replaced: undefined }];
  } else if (anterior?.replaced) {
    nuevo.replaced = anterior.replaced;
  }
  clipsOut[clipName] = nuevo;
}
fs.writeFileSync(recordPath, `${JSON.stringify({ updated_at: now, clips: clipsOut }, null, 2)}\n`);
console.log(`\n[import-clips] ${mapping.length} clips copiados · registro en ${path.relative(planDir, recordPath)} (${warns} avisos).`);
