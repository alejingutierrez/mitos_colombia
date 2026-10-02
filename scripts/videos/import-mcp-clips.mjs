#!/usr/bin/env node
/**
 * Importa clips generados por el MCP de Higgsfield (generate_video_batch → jobs_wait)
 * a los clips/cNN.mp4 que espera el plan del video, y lleva el registro versionable
 * clips-vN/import-map.json (los .mp4 NO van a git: este archivo es el historial).
 *
 * Entrada: un JSON de jobs escrito a mano (o por el agente) a partir de la
 * respuesta de jobs_wait:
 *   { "c02": { "job_id": "…", "url": "https://…mp4", "model": "kling3_0", "mode": "pro",
 *              "sound": "off", "duration": 5, "aspect_ratio": "9:16", "cost_cr": 8.75,
 *              "media_id": "…", "prompt_ref": "movimiento-v1.json#c02" }, … }
 *
 * Uso:
 *   node scripts/videos/import-mcp-clips.mjs --plan <plan-vN.json> --jobs <jobs.json>            # dry-run
 *   node scripts/videos/import-mcp-clips.mjs --plan <plan-vN.json> --jobs <jobs.json> --apply    # baja y registra
 *
 * Con --apply: baja cada url a la ruta `clip` del bloque correspondiente (mapa parcial
 * permitido: sólo los cNN presentes en el JSON), verifica con ffprobe (resolución,
 * fps, duración) y avisa si se desvía de 1080×1920 / 5 s. Si un cNN ya tenía entrada
 * en import-map.json, la anterior pasa a `replaced` (historial de regeneraciones).
 */

import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const args = process.argv.slice(2);
const argVal = (f) => { const i = args.indexOf(f); return i >= 0 && args[i + 1] && !args[i + 1].startsWith("--") ? args[i + 1] : null; };
const planPath = argVal("--plan");
const jobsPath = argVal("--jobs");
const apply = args.includes("--apply");
if (!planPath || !jobsPath) {
  console.error("Uso: --plan plan.json --jobs jobs.json [--apply]");
  process.exit(1);
}
const plan = JSON.parse(fs.readFileSync(planPath, "utf8"));
const planDir = path.dirname(path.resolve(planPath));
const jobs = JSON.parse(fs.readFileSync(jobsPath, "utf8"));
const byName = new Map(plan.blocks.filter((b) => b.type === "motion" && b.clip).map((b) => [path.basename(b.clip, ".mp4"), b]));

const desconocidos = Object.keys(jobs).filter((k) => !byName.has(k));
if (desconocidos.length) {
  console.error(`✗ el JSON de jobs nombra clips que no están en el plan: ${desconocidos.join(", ")}`);
  process.exit(1);
}

function probe(file) {
  const res = spawnSync("ffprobe", ["-v", "error", "-select_streams", "v:0", "-show_entries", "stream=width,height,r_frame_rate,codec_name:format=duration", "-of", "json", file], { encoding: "utf8" });
  try {
    const j = JSON.parse(res.stdout); const s = j.streams[0];
    const [n, d] = s.r_frame_rate.split("/").map(Number);
    return { width: s.width, height: s.height, fps: Math.round((n / (d || 1)) * 100) / 100, codec: s.codec_name, duration: Number(j.format.duration) };
  } catch { return null; }
}

const entries = Object.entries(jobs).sort(([a], [b]) => a.localeCompare(b));
console.log(`[import-mcp] ${entries.length} clip(s) en ${jobsPath} · plan con ${byName.size} bloques motion${apply ? "" : " · DRY-RUN"}`);
let clipsDir = null;
let mapPath = null;
let map = {};
let warns = 0;
for (const [name, job] of entries) {
  const dest = path.resolve(planDir, byName.get(name).clip);
  if (!clipsDir) { clipsDir = path.dirname(dest); mapPath = path.join(clipsDir, "import-map.json"); if (fs.existsSync(mapPath)) map = JSON.parse(fs.readFileSync(mapPath, "utf8")); }
  if (!job.url) { console.log(`✗ ${name}: sin url`); warns += 1; continue; }
  if (!apply) { console.log(`  ${name} ← ${job.url.slice(0, 80)}… → ${path.relative(process.cwd(), dest)}`); continue; }
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  const dl = spawnSync("curl", ["-sSL", "--fail", "-o", dest, job.url], { encoding: "utf8" });
  if (dl.status !== 0) { console.log(`✗ ${name}: descarga falló: ${dl.stderr.slice(0, 200)}`); warns += 1; continue; }
  const p = probe(dest);
  const kb = Math.round(fs.statSync(dest).size / 1024);
  let nota = "";
  if (!p) { nota = " ⚠ ffprobe no pudo leerlo"; warns += 1; }
  else {
    if (p.width !== (plan.width || 1080) || p.height !== (plan.height || 1920)) { nota += ` ⚠ ${p.width}x${p.height} ≠ ${plan.width || 1080}x${plan.height || 1920}`; warns += 1; }
    const want = byName.get(name).duration || 5;
    if (Math.abs(p.duration - want) > 0.25) { nota += ` ⚠ dura ${p.duration.toFixed(2)}s (plan ${want}s)`; warns += 1; }
  }
  const prev = map[name];
  map[name] = {
    job_id: job.job_id, url: job.url, model: job.model, mode: job.mode, sound: job.sound, duration: job.duration,
    aspect_ratio: job.aspect_ratio, cost_cr: job.cost_cr, media_id: job.media_id, prompt_ref: job.prompt_ref,
    file: path.relative(clipsDir, dest), kb, probe: p, imported: new Date().toISOString(),
    ...(prev ? { replaced: [...(prev.replaced || []), { ...prev, replaced: undefined }] } : {}),
  };
  console.log(`  ✓ ${name} ${p ? `${p.width}x${p.height} ${p.fps}fps ${p.duration.toFixed(2)}s ${p.codec}` : ""} ${kb} KB${prev ? " (reemplaza una versión anterior)" : ""}${nota}`);
}
if (apply && mapPath) {
  fs.writeFileSync(mapPath, JSON.stringify(map, null, 2));
  const total = Object.values(map).reduce((a, m) => a + (Number(m.cost_cr) || 0), 0);
  console.log(`[import-mcp] import-map.json: ${Object.keys(map).length} clip(s) · costo registrado ${total.toFixed(2)} cr${warns ? ` · ${warns} aviso(s)` : ""}`);
}
if (warns) process.exitCode = 1;
