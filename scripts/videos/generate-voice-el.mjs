// Narración con ElevenLabs (text-to-speech) para los videos de mitos.
// Lee un JSON de tomas, genera cada línea con contexto de prosodia continua
// (previous_text / next_text) y reporta si cada toma cabe en su ventana.
//
// Uso:
//   node scripts/videos/generate-voice-el.mjs --lines docs/videos/muiscas/mvp-guiones/guion-a.json --out-dir content/videos/muiscas/videos/bachue/voces-mvp-a
//   (flags opcionales: --only 3,7 regenera solo esas tomas 1-indexadas)
//
// Formato del JSON de tomas:
// {
//   "voice_id": "...", "model_id": "eleven_multilingual_v2",
//   "voice_settings": { "stability": 0.5, "similarity_boost": 0.8, "style": 0.3, "speed": 1.0 },
//   "lines": [ { "text": "...", "window": 9.35 }, ... ]   // window: tope de habla en s
// }
//
// La API key se lee de ELEVENLABS_API_KEY (.env del repo o del repo padre).

import { spawnSync } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import dotenv from "dotenv";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "../..");
for (const envPath of [path.join(rootDir, ".env"), path.resolve(rootDir, "../../..", ".env")]) {
  dotenv.config({ path: envPath });
  if (process.env.ELEVENLABS_API_KEY) break;
}
const API_KEY = process.env.ELEVENLABS_API_KEY;
if (!API_KEY) {
  console.error("[voz-el] falta ELEVENLABS_API_KEY en .env");
  process.exit(1);
}

const args = process.argv.slice(2);
function getFlag(name, fallback = null) {
  const i = args.indexOf(name);
  if (i === -1) return fallback;
  return args[i + 1] && !args[i + 1].startsWith("--") ? args[i + 1] : true;
}
const linesPath = getFlag("--lines");
const outDir = getFlag("--out-dir");
const only = String(getFlag("--only", "") || "").split(",").map((s) => Number(s.trim())).filter(Boolean);
if (!linesPath || !outDir) {
  console.error("Uso: --lines tomas.json --out-dir carpeta [--only 2,5]");
  process.exit(1);
}

const spec = JSON.parse(await fs.readFile(path.resolve(rootDir, linesPath), "utf8"));
const outAbs = path.resolve(rootDir, outDir);
await fs.mkdir(outAbs, { recursive: true });

function probe(file, filterArgs = []) {
  const res = spawnSync("ffprobe", ["-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", file], { encoding: "utf8" });
  return Number.parseFloat(String(res.stdout).trim());
}
function speechEnd(file, totalDur) {
  const res = spawnSync("ffmpeg", ["-i", file, "-af", "silencedetect=n=-35dB:d=0.2", "-f", "null", "-"], { encoding: "utf8" });
  const log = `${res.stderr || ""}`;
  const starts = [...log.matchAll(/silence_start:\s*([\d.]+)/g)].map((m) => Number(m[1]));
  const ends = [...log.matchAll(/silence_end:\s*([\d.]+)/g)].map((m) => Number(m[1]));
  if (!starts.length) return totalDur;
  const lastStart = starts[starts.length - 1];
  const lastEnd = ends.length >= starts.length ? ends[ends.length - 1] : totalDur;
  return lastEnd >= totalDur - 0.15 ? lastStart : totalDur;
}

const model = spec.model_id || "eleven_multilingual_v2";
let fails = 0;
for (let i = 0; i < spec.lines.length; i++) {
  const n = i + 1;
  if (only.length && !only.includes(n)) continue;
  const line = spec.lines[i];
  const outPath = path.join(outAbs, `voz${String(n).padStart(2, "0")}.mp3`);
  // eleven_v3 aún no soporta previous_text/next_text (contexto de prosodia).
  const supportsContext = !/^eleven_v3/.test(model);
  const body = {
    text: line.text,
    model_id: model,
    voice_settings: spec.voice_settings || undefined,
    previous_text: supportsContext && i > 0 ? spec.lines[i - 1].text : undefined,
    next_text: supportsContext && i < spec.lines.length - 1 ? spec.lines[i + 1].text : undefined,
  };
  // La línea puede traer su propia voz y settings (elenco alternado por bloque).
  if (line.voice_settings) body.voice_settings = line.voice_settings;
  const voiceId = line.voice_id || spec.voice_id;
  const res = await fetch(
    `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}?output_format=mp3_44100_128`,
    { method: "POST", headers: { "xi-api-key": API_KEY, "Content-Type": "application/json" }, body: JSON.stringify(body) }
  );
  if (!res.ok) {
    fails += 1;
    console.error(`[voz-el] ERROR toma ${n}: ${res.status} ${(await res.text()).slice(0, 300)}`);
    continue;
  }
  await fs.writeFile(outPath, Buffer.from(await res.arrayBuffer()));
  const dur = probe(outPath);
  const end = speechEnd(outPath, dur);
  const window = line.window || null;
  const fit = window ? (end <= window ? "OK" : `SE PASA ${(end - window).toFixed(2)}s`) : "";
  if (window && end > window) fails += 1;
  console.log(`[voz-el] voz${String(n).padStart(2, "0")} ${dur.toFixed(2)}s (habla ${end.toFixed(2)}s${window ? ` / tope ${window}` : ""}) ${fit}`);
}
console.log(`[voz-el] listo → ${outAbs}${fails ? ` · ${fails} problema(s)` : ""}`);
if (fails) process.exitCode = 1;
