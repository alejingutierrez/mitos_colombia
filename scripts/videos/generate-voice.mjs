// Narración con OpenAI TTS (gpt-4o-mini-tts) para los videos de mitos.
//
// Uso:
//   node scripts/videos/generate-voice.mjs --text "..." --voice onyx --out voz.wav
//   node scripts/videos/generate-voice.mjs --lines docs/videos/muiscas/bachue-lineas.json --voice onyx --out-dir content/videos/bachue/voces
//
// --lines: JSON [{ "n": 1, "text": "..." }, ...] → genera voz01.wav, voz02.wav, ...

import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

import dotenv from "dotenv";
import OpenAI from "openai";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "../..");
for (const envPath of [
  path.join(rootDir, ".env"),
  path.resolve(rootDir, "../../..", ".env"),
]) {
  dotenv.config({ path: envPath });
  if (process.env.OPENAI_API_KEY) break;
}

const args = process.argv.slice(2);
function getFlag(name, fallback = null) {
  const i = args.indexOf(name);
  if (i === -1) return fallback;
  return args[i + 1] && !args[i + 1].startsWith("--") ? args[i + 1] : true;
}

const MODEL = process.env.TTS_MODEL || "gpt-4o-mini-tts";
const voice = getFlag("--voice", "onyx");
const DEFAULT_INSTRUCTIONS =
  "Narra en español latinoamericano neutro (colombiano), como un contador de leyendas: " +
  "ritmo pausado y envolvente, voz cálida y grave, tono misterioso pero sereno, " +
  "pausas naturales entre frases, sin sonar teatral ni robótico. Pronunciación clara " +
  "de nombres indígenas como 'Bachué' (ba-CHUÉ) e 'Iguaque' (i-GUA-que).";
const instructions = getFlag("--instructions", DEFAULT_INSTRUCTIONS);

async function synth(openai, text, outPath) {
  const res = await openai.audio.speech.create({
    model: MODEL,
    voice,
    input: text,
    instructions,
    response_format: "wav",
  });
  const buffer = Buffer.from(await res.arrayBuffer());
  await fs.mkdir(path.dirname(outPath), { recursive: true });
  await fs.writeFile(outPath, buffer);
  console.log(`[voz] ok ${outPath} (${(buffer.length / 1024).toFixed(0)} KB)`);
}

async function main() {
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const text = getFlag("--text");
  const linesPath = getFlag("--lines");

  if (text) {
    const out = getFlag("--out", "voz.wav");
    await synth(openai, text, path.resolve(out));
    return;
  }
  if (linesPath) {
    const outDir = path.resolve(getFlag("--out-dir", "voces"));
    const lines = JSON.parse(await fs.readFile(path.resolve(linesPath), "utf8"));
    for (const line of lines) {
      const out = path.join(outDir, `voz${String(line.n).padStart(2, "0")}.wav`);
      await synth(openai, line.text, out);
    }
    return;
  }
  throw new Error("Pasa --text o --lines");
}

main().catch((error) => {
  console.error("[voz] error:", error.message);
  process.exitCode = 1;
});
