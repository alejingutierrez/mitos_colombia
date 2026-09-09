#!/usr/bin/env node

/**
 * Lechos musicales para las narraciones: piezas de 30 s en bucle sin costura.
 *
 * Se generan con la API de música de ElevenLabs (`generation_mode: "loop"`,
 * `music_v2`, instrumental forzado) y se guardan en `narration_beds`. La
 * narración de cada mito toma uno por rotación, así que ampliar el catálogo es
 * lo único que hace falta para que dejen de repetirse.
 *
 * Uso:
 *   node scripts/mitos/generar-lechos.mjs --ingerir <carpeta>   sube WAV ya hechos
 *   node scripts/mitos/generar-lechos.mjs --nuevos 4            genera 4 lechos nuevos
 *   node scripts/mitos/generar-lechos.mjs --listar
 *
 * Por qué se piden 45 s para entregar 30: el modelo mete entrada y salida en los
 * extremos —medido, una pieza caía de -21 a -68 dB en los últimos 4 s—, así que
 * se recorta del centro. Y por qué se barre el punto de corte: el crossfade
 * evita el chasquido, pero no un salto de INTENSIDAD entre dos pasajes; el
 * barrido busca el corte donde ese escalón es mínimo (bajó de 8,8 dB a 0,1 dB).
 */

import { put } from "@vercel/blob";
import { sql } from "@vercel/postgres";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import dotenv from "dotenv";
import { CHARACTERS } from "../../src/lib/narration-character.js";

const rootDir = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
dotenv.config({ path: path.join(rootDir, ".env.local") });
dotenv.config({ path: path.join(rootDir, ".env") });
if (!process.env.POSTGRES_URL && process.env.DATABASE_URL) {
  process.env.POSTGRES_URL = process.env.DATABASE_URL;
}

const args = process.argv.slice(2);
const valor = (n, d = null) => {
  const i = args.indexOf(`--${n}`);
  return i !== -1 && args[i + 1] && !args[i + 1].startsWith("--") ? args[i + 1] : d;
};

/* ---- parámetros del bucle (medidos, no supuestos: ver cabecera) ---- */
const FUENTE_S = 45;   // lo que se le pide al modelo
const LARGO_S = 30;    // duración del bucle entregado
const CRUCE_S = 1.5;   // crossfade que cierra el bucle
const LUFS_OBJETIVO = -24;
const TP_OBJETIVO = -1.5;

/* Mundo sonoro común. Lo que cambia entre piezas es QUÉ lleva el peso; si sólo
 * se cambiaran adjetivos saldrían seis versiones de lo mismo. */
const MUNDO =
  "Pre-Columbian Andean and Muisca folk music, indigenous Colombian highlands. " +
  "Only ancestral instruments: cane flutes, clay ocarina, panpipes, hide frame drum, " +
  "seed rattles, shell rattles. Strictly no modern instruments, no synthesizers, " +
  "no guitar, no piano, no drum kit, no vocals. Raw, acoustic, close-recorded, spacious. " +
  "Steady and continuous from beginning to end, no intro, no fade out, no ending.";

const CATALOGO = [
  { slug: "07-caracol-de-montana", title: "Caracol de montaña", characters: ["montana", "ceremonia", "camino"], foco: "A conch shell trumpet sounds long low calls that echo off rock walls, answered far away by another. Sparse hide drum strokes between calls. Vast, announcing, ancient." },
  { slug: "08-lluvia-sobre-la-piedra", title: "Lluvia sobre la piedra", characters: ["agua", "montana"], foco: "Steady highland rain on stone and thatch, with a clay ocarina playing a slow descending figure through it. A soft shell rattle keeps a loose pulse. Wet, close, sheltered." },
  { slug: "09-telar-de-semillas", title: "Telar de semillas", characters: ["oficio", "comunidad"], foco: "Seed rattles and shell rattles interlock in a dry hypnotic weave, like hands working a loom. A single cane flute holds one long note above. Repetitive, textural, trance-like." },
  { slug: "10-fuego-y-humo", title: "Fuego y humo", characters: ["fuego", "noche"], foco: "Crackling fire close by, a low hide drum pulsing slowly like breathing, and a breathy low flute circling a few notes. Warm, enclosed, nocturnal." },
  { slug: "11-rio-que-baja", title: "Río que baja", characters: ["agua", "camino"], foco: "A fast cold mountain river carries everything, with panpipes rising and falling over it in short overlapping phrases. Light rattles. Moving, bright, restless." },
  { slug: "12-silencio-de-la-sabana", title: "Silencio de la sabana", characters: ["silencio", "viento"], foco: "Almost nothing: distant wind across open grassland, one far-off bird, and a single cane flute note held and released every few seconds. Extremely sparse, patient, empty." },
];

const ff = (a) => spawnSync("ffmpeg", ["-y", "-loglevel", "error", ...a], { encoding: "utf8" });
const medir = (f, filtro, re) => {
  const r = spawnSync("ffmpeg", ["-hide_banner", "-nostats", "-i", f, "-af", filtro, "-f", "null", "-"], { encoding: "utf8" });
  const m = String(r.stderr).match(re);
  return m ? Number(m[1]) : null;
};
const rms = (f, a, b) => medir(f, `atrim=${a}:${b},astats=metadata=1:reset=0`, /RMS level dB:\s*(-?[\d.]+)/);
const lufs = (f) => medir(f, "ebur128=framelog=quiet", /I:\s*(-?[\d.]+)\s*LUFS[\s\S]*$/);
const duracion = (f) => Number(spawnSync("ffprobe", ["-v","error","-show_entries","format=duration","-of","csv=p=0",f], { encoding: "utf8" }).stdout.trim());

/** Bucle de LARGO_S a partir del segundo `inicio`, cerrado con crossfade. */
function construirBucle(src, inicio, destino) {
  const S = inicio;
  const filtro =
    `[0:a]atrim=${S}:${S + CRUCE_S},asetpts=PTS-STARTPTS[h];` +
    `[0:a]atrim=${S + LARGO_S}:${S + LARGO_S + CRUCE_S},asetpts=PTS-STARTPTS[t];` +
    `[0:a]atrim=${S + CRUCE_S}:${S + LARGO_S},asetpts=PTS-STARTPTS[c];` +
    `[t][h]acrossfade=d=${CRUCE_S}:c1=tri:c2=tri[s];` +
    `[s][c]concat=n=2:v=0:a=1[o]`;
  return ff(["-i", src, "-filter_complex", filtro, "-map", "[o]", "-c:a", "pcm_s16le", destino]).status === 0;
}

/** Escalón de nivel en la costura: se duplica el bucle y se compara el empalme. */
function escalonCostura(bucle, dir) {
  const dos = path.join(dir, "_dos.wav");
  ff(["-i", bucle, "-i", bucle, "-filter_complex", "[0:a][1:a]concat=n=2:v=0:a=1[o]", "-map", "[o]", "-c:a", "pcm_s16le", dos]);
  const paso = Math.abs(rms(dos, LARGO_S - 0.6, LARGO_S) - rms(dos, LARGO_S, LARGO_S + 0.6));
  fs.rmSync(dos, { force: true });
  return paso;
}

/** Sonoridad igualada y pico verdadero bajo control (loudnorm de dos pasadas). */
function normalizar(archivo, dir) {
  const r = spawnSync("ffmpeg", ["-hide_banner","-nostats","-i",archivo,"-af",`loudnorm=I=${LUFS_OBJETIVO}:TP=${TP_OBJETIVO}:LRA=11:print_format=json`,"-f","null","-"], { encoding: "utf8" });
  const j = String(r.stderr).match(/\{[^{}]*input_i[\s\S]*?\}/);
  if (!j) return false;
  const m = JSON.parse(j[0]);
  const tmp = path.join(dir, "_norm.wav");
  const ok = ff(["-i", archivo, "-af",
    `loudnorm=I=${LUFS_OBJETIVO}:TP=${TP_OBJETIVO}:LRA=11:measured_I=${m.input_i}:measured_TP=${m.input_tp}` +
    `:measured_LRA=${m.input_lra}:measured_thresh=${m.input_thresh}:offset=${m.target_offset}:linear=true`,
    "-ar", "48000", "-c:a", "pcm_s16le", tmp]).status === 0;
  if (ok) fs.copyFileSync(tmp, archivo);
  fs.rmSync(tmp, { force: true });
  return ok;
}

async function registrar({ slug, title, archivo, prompt, characters }) {
  const blob = await put(`narraciones/lechos/${slug}.wav`, fs.readFileSync(archivo), {
    access: "public", contentType: "audio/wav",
    addRandomSuffix: false, allowOverwrite: true,
    token: process.env.BLOB_READ_WRITE_TOKEN,
  });
  await sql`
    INSERT INTO narration_beds (slug, title, audio_url, duration_seconds, lufs, seam_step_db, prompt, characters)
    VALUES (${slug}, ${title}, ${blob.url}, ${duracion(archivo)}, ${lufs(archivo)}, ${null}, ${prompt},
            ${characters ? JSON.stringify(characters) : null})
    ON CONFLICT (slug) DO UPDATE SET
      title = EXCLUDED.title, audio_url = EXCLUDED.audio_url,
      duration_seconds = EXCLUDED.duration_seconds, lufs = EXCLUDED.lufs,
      prompt = COALESCE(EXCLUDED.prompt, narration_beds.prompt),
      characters = COALESCE(EXCLUDED.characters, narration_beds.characters)
  `;
  return blob.url;
}

async function main() {
  if (args.includes("--listar")) {
    const r = await sql`SELECT slug, title, duration_seconds, lufs, characters FROM narration_beds ORDER BY slug`;
    console.log(`Catálogo de lechos: ${r.rows.length}\n`);
    for (const b of r.rows) {
      console.log(
        `  ${b.slug.padEnd(26)} ${b.title.padEnd(28)} ${Number(b.duration_seconds).toFixed(2)}s · ` +
          `${Number(b.lufs).toFixed(1)} LUFS · ${(b.characters || []).join(", ") || "SIN ETIQUETAR"}`
      );
    }
    // Un carácter con pocos lechos condena a los mitos de ese tema a repetir
    // siempre los mismos; conviene verlo antes de producir en tanda.
    const cuenta = Object.fromEntries(CHARACTERS.map((c) => [c, 0]));
    for (const b of r.rows) for (const c of b.characters || []) cuenta[c] = (cuenta[c] || 0) + 1;
    const flojos = CHARACTERS.filter((c) => cuenta[c] <= 1);
    console.log(`\nlechos por carácter: ${JSON.stringify(cuenta)}`);
    if (flojos.length) console.log(`⚠️  con uno o ninguno: ${flojos.join(", ")} — ahí la variedad se agota enseguida`);
    return;
  }

  const carpeta = valor("ingerir");
  const dir = await mkdtemp(path.join(tmpdir(), "lechos-"));
  try {
    if (carpeta) {
      // Los WAV ya están afinados y aprobados: se suben tal cual, sin retocar.
      const base = path.resolve(rootDir, carpeta);
      const titulos = JSON.parse(fs.readFileSync(path.join(base, "titulos.json"), "utf8"));
      for (const [slug, title] of Object.entries(titulos)) {
        const archivo = path.join(base, `${slug}.wav`);
        if (!fs.existsSync(archivo)) { console.log(`· ${slug}: no está en la carpeta, se salta`); continue; }
        const url = await registrar({ slug, title, archivo, prompt: null, characters: null });
        console.log(`✓ ${title.padEnd(28)} ${duracion(archivo).toFixed(2)}s · ${lufs(archivo).toFixed(1)} LUFS\n    ${url}`);
      }
    } else {
      const cuantos = Number.parseInt(valor("nuevos", "0"), 10);
      if (!cuantos) { console.error("Uso: --nuevos N | --ingerir <carpeta> | --listar"); process.exitCode = 1; return; }
      const existentes = new Set((await sql`SELECT slug FROM narration_beds`).rows.map((r) => r.slug));
      const pendientes = CATALOGO.filter((p) => !existentes.has(p.slug)).slice(0, cuantos);
      if (!pendientes.length) { console.log("El catálogo de prompts ya está agotado; añade más en CATALOGO."); return; }

      for (const p of pendientes) {
        const res = await fetch("https://api.elevenlabs.io/v1/music?output_format=pcm_48000", {
          method: "POST",
          headers: { "xi-api-key": process.env.ELEVENLABS_API_KEY, "Content-Type": "application/json" },
          body: JSON.stringify({
            prompt: `${MUNDO} ${p.foco}`,
            music_length_ms: FUENTE_S * 1000,
            generation_mode: "loop",
            model_id: "music_v2",
            force_instrumental: true,
          }),
        });
        if (!res.ok) { console.log(`✗ ${p.slug}: HTTP ${res.status} · ${(await res.text()).slice(0, 160)}`); continue; }

        const raw = path.join(dir, `${p.slug}.pcm`);
        const largo = path.join(dir, `${p.slug}-45s.wav`);
        fs.writeFileSync(raw, Buffer.from(await res.arrayBuffer()));
        ff(["-f", "s16le", "-ar", "48000", "-ac", "2", "-i", raw, "-c:a", "pcm_s16le", largo]);
        fs.rmSync(raw, { force: true });

        // Barrido del punto de corte: nos quedamos con el escalón más pequeño.
        let mejor = null;
        for (let S = 1; S + LARGO_S + CRUCE_S <= FUENTE_S; S += 1) {
          const cand = path.join(dir, `_c${S}.wav`);
          if (!construirBucle(largo, S, cand)) continue;
          const e = escalonCostura(cand, dir);
          if (!mejor || e < mejor.e) { if (mejor) fs.rmSync(mejor.archivo, { force: true }); mejor = { S, e, archivo: cand }; }
          else fs.rmSync(cand, { force: true });
        }
        if (!mejor) { console.log(`✗ ${p.slug}: no se pudo construir el bucle`); continue; }
        normalizar(mejor.archivo, dir);
        const url = await registrar({
          slug: p.slug, title: p.title, archivo: mejor.archivo,
          prompt: `${MUNDO} ${p.foco}`, characters: p.characters,
        });
        await sql`UPDATE narration_beds SET seam_step_db = ${mejor.e} WHERE slug = ${p.slug}`;
        console.log(`✓ ${p.title.padEnd(28)} corte ${String(mejor.S).padStart(2)}s · costura ${mejor.e.toFixed(1)} dB · ${lufs(mejor.archivo).toFixed(1)} LUFS\n    ${url}`);
        fs.rmSync(mejor.archivo, { force: true });
        fs.rmSync(largo, { force: true });
      }
    }
    const n = await sql`SELECT count(*)::int AS n FROM narration_beds`;
    console.log(`\nCatálogo de lechos: ${n.rows[0].n}`);
  } finally {
    await rm(dir, { recursive: true, force: true }).catch(() => {});
  }
}

main().catch((e) => { console.error("\n❌", e.message); process.exit(1); });
