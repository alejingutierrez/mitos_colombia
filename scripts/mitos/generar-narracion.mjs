#!/usr/bin/env node

/**
 * Narración de un mito con ElevenLabs → Vercel Blob → tabla `myth_narrations`.
 *
 * Se narra SÓLO el título y el relato (columna `mito`). El resto del expediente
 * —historia, versiones, lección, similitudes, fuentes— se queda fuera a
 * propósito: el botón de la página promete "escuchar el relato".
 *
 * El audio se genera UNA vez y se sirve desde el CDN del blob. No hay
 * generación por reproducción: cada play saldría a la API y costaría créditos.
 *
 * Uso:
 *   node scripts/mitos/generar-narracion.mjs --slug bachue
 *   node scripts/mitos/generar-narracion.mjs --slug bachue --dry-run   (no llama a la API)
 *   node scripts/mitos/generar-narracion.mjs --slug bachue --force     (regenera aunque el texto no haya cambiado)
 *   node scripts/mitos/generar-narracion.mjs --all --limit 10          (todos los que tengan relato y falten)
 *   node scripts/mitos/generar-narracion.mjs --slug bachue --sin-lecho (voz sola, sin música)
 *   node scripts/mitos/generar-narracion.mjs --slug bachue --lecho 04-viento-de-paramo
 *
 * Cada narración lleva un lecho musical distinto por rotación (el menos usado
 * del catálogo). Para que dejen de repetirse basta con ampliar el catálogo:
 *   node scripts/mitos/generar-lechos.mjs --nuevos 4
 *
 * Requiere ELEVENLABS_API_KEY, BLOB_READ_WRITE_TOKEN y POSTGRES_URL en .env.local.
 */

import { put } from "@vercel/blob";
import { sql } from "@vercel/postgres";
import { spawnSync } from "node:child_process";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import dotenv from "dotenv";
import {
  AUDIO_CONTENT_TYPE,
  AUDIO_FORMAT,
  DEFAULT_VOICE,
  MASTER_CONTENT_TYPE,
  MAX_REQUEST_CHARS,
  BED_FADE_IN_S,
  BED_FADE_OUT_S,
  BED_GAIN_DB,
  MP3_BITRATE_KBPS,
  PCM_CHANNELS,
  PCM_SAMPLE_RATE,
  VOICE_LUFS,
  buildNarrationText,
  formatClock,
  narrationBlobPath,
  narrationRenderHash,
  pcmDuration,
} from "../../src/lib/narration.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..", "..");
dotenv.config({ path: join(rootDir, ".env.local") });
dotenv.config({ path: join(rootDir, ".env") });

if (!process.env.POSTGRES_URL && process.env.DATABASE_URL) {
  process.env.POSTGRES_URL = process.env.DATABASE_URL;
}

const args = process.argv.slice(2);
function flag(name) {
  return args.includes(`--${name}`);
}
function value(name, fallback = null) {
  const i = args.indexOf(`--${name}`);
  if (i === -1) return fallback;
  const next = args[i + 1];
  return next && !next.startsWith("--") ? next : fallback;
}

const slug = value("slug");
const all = flag("all");
const dryRun = flag("dry-run");
const force = flag("force");
const limit = Number.parseInt(value("limit", "0"), 10) || 0;
const sinLecho = flag("sin-lecho");
const lechoForzado = value("lecho");

if (!slug && !all) {
  console.error("Uso: --slug <slug> | --all [--limit N] [--dry-run] [--force]");
  process.exit(1);
}

const API_KEY = process.env.ELEVENLABS_API_KEY;
if (!API_KEY && !dryRun) {
  console.error("[narración] falta ELEVENLABS_API_KEY en .env.local");
  process.exit(1);
}
if (!process.env.BLOB_READ_WRITE_TOKEN && !dryRun) {
  console.error("[narración] falta BLOB_READ_WRITE_TOKEN en .env.local");
  process.exit(1);
}

if (!dryRun && spawnSync("ffmpeg", ["-version"]).status !== 0) {
  console.error("[narración] hace falta ffmpeg: el PCM se envuelve en WAV y se codifica el MP3 con él");
  process.exit(1);
}

/**
 * Del PCM crudo salen las dos piezas: el máster WAV (sin pérdida, se archiva y
 * sirve para mezclar) y el MP3 que baja el navegador.
 */
async function renderAudio(pcm, duration, bed) {
  const dir = await mkdtemp(join(tmpdir(), "narracion-"));
  try {
    const raw = join(dir, "voz.pcm");
    const wavPath = join(dir, "voz.wav");
    const mp3Path = join(dir, "mezcla.mp3");
    await writeFile(raw, pcm);

    // Máster: la voz SOLA, sin música. Es a propósito: cambiar de lecho más
    // adelante es entonces una mezcla local y no hay que volver a pagarle a
    // ElevenLabs por narrar lo mismo otra vez.
    const entrada = ["-f", "s16le", "-ar", String(PCM_SAMPLE_RATE), "-ac", String(PCM_CHANNELS), "-i", raw];
    const wavRes = spawnSync("ffmpeg", ["-y", "-loglevel", "error", ...entrada, "-c:a", "pcm_s16le", wavPath]);
    if (wavRes.status !== 0) throw new Error(`ffmpeg (wav): ${String(wavRes.stderr).slice(0, 200)}`);

    // MP3 del reproductor: voz nivelada + lecho 18 dB por debajo.
    // `normalize=0` en amix es obligatorio; sin él ffmpeg divide cada entrada
    // entre el número de pistas y la voz perdería 6 dB.
    const salidaFade = Math.max(0, duration - BED_FADE_OUT_S);
    const args = bed
      ? ["-y", "-loglevel", "error", ...entrada, "-stream_loop", "-1", "-i", bed.archivo,
         "-filter_complex",
         `[0:a]loudnorm=I=${VOICE_LUFS}:TP=-1.5:LRA=11,aformat=channel_layouts=stereo[voz];` +
         `[1:a]atrim=0:${duration},asetpts=PTS-STARTPTS,volume=${BED_GAIN_DB}dB,` +
         `afade=t=in:st=0:d=${BED_FADE_IN_S},afade=t=out:st=${salidaFade}:d=${BED_FADE_OUT_S}[lecho];` +
         `[voz][lecho]amix=inputs=2:duration=first:normalize=0[out]`,
         "-map", "[out]", "-c:a", "libmp3lame", "-b:a", `${MP3_BITRATE_KBPS}k`, mp3Path]
      : ["-y", "-loglevel", "error", ...entrada,
         "-af", `loudnorm=I=${VOICE_LUFS}:TP=-1.5:LRA=11`,
         "-c:a", "libmp3lame", "-b:a", `${MP3_BITRATE_KBPS}k`, mp3Path];
    const mp3Res = spawnSync("ffmpeg", args);
    if (mp3Res.status !== 0) throw new Error(`ffmpeg (mp3): ${String(mp3Res.stderr).slice(0, 300)}`);

    return { wav: await readFile(wavPath), mp3: await readFile(mp3Path) };
  } finally {
    await rm(dir, { recursive: true, force: true }).catch(() => {});
  }
}

/**
 * Elige lecho por ROTACIÓN: el menos usado del catálogo, y a igualdad de usos
 * el de slug menor. Así los mitos van repartiéndose las piezas en vez de
 * amontonarse en una, y cada lecho nuevo que se añade entra el primero en el
 * reparto porque arranca con cero usos.
 */
async function pickBed(forzado) {
  const r = forzado
    ? await sql.query("SELECT slug, title, audio_url FROM narration_beds WHERE slug = $1", [forzado])
    : await sql.query(`
        SELECT b.slug, b.title, b.audio_url,
               (SELECT count(*) FROM myth_narrations n WHERE n.bed_slug = b.slug) AS usos
        FROM narration_beds b
        ORDER BY usos ASC, b.slug ASC
        LIMIT 1
      `);
  return r.rows[0] || null;
}

/** El lecho vive en el blob; se baja una vez por corrida y se reutiliza. */
const cacheLechos = new Map();
async function fetchBed(bed, dir) {
  if (!bed) return null;
  if (cacheLechos.has(bed.slug)) return cacheLechos.get(bed.slug);
  const res = await fetch(bed.audio_url);
  if (!res.ok) throw new Error(`no se pudo bajar el lecho ${bed.slug}: HTTP ${res.status}`);
  const archivo = join(dir, `${bed.slug}.wav`);
  await writeFile(archivo, Buffer.from(await res.arrayBuffer()));
  const entrada = { ...bed, archivo };
  cacheLechos.set(bed.slug, entrada);
  return entrada;
}

async function synthesize(text) {
  const response = await fetch(
    `https://api.elevenlabs.io/v1/text-to-speech/${DEFAULT_VOICE.id}?output_format=${AUDIO_FORMAT}`,
    {
      method: "POST",
      headers: { "xi-api-key": API_KEY, "Content-Type": "application/json" },
      body: JSON.stringify({
        text,
        model_id: DEFAULT_VOICE.modelId,
        voice_settings: DEFAULT_VOICE.settings,
      }),
    }
  );
  if (!response.ok) {
    throw new Error(
      `ElevenLabs ${response.status}: ${(await response.text()).slice(0, 300)}`
    );
  }
  return Buffer.from(await response.arrayBuffer());
}

async function narrateMyth(myth, dirLechos) {
  const label = `${myth.slug}`;
  const text = buildNarrationText(myth);
  if (!text) {
    console.log(`  · ${label}: sin relato (columna \`mito\` vacía) → se salta`);
    return "skipped";
  }
  if (text.length > MAX_REQUEST_CHARS) {
    console.error(
      `  ✗ ${label}: el relato mide ${text.length} caracteres y el tope por petición es ${MAX_REQUEST_CHARS}. ` +
        `Hay que partirlo en tomas antes de narrarlo; no se genera para no cortar la frase a mitad.`
    );
    return "failed";
  }

  const bed = sinLecho ? null : await fetchBed(await pickBed(lechoForzado), dirLechos);
  if (!sinLecho && !bed) {
    console.log(`  ! ${label}: no hay lechos en el catálogo, se narra sin música`);
  }
  const hash = narrationRenderHash(text, DEFAULT_VOICE, bed);
  const existing = await sql`
    SELECT audio_url, master_url, render_hash, duration_seconds
    FROM myth_narrations
    WHERE myth_slug = ${myth.slug} AND voice_id = ${DEFAULT_VOICE.id}
    LIMIT 1
  `;
  const current = existing.rows[0];
  if (current && current.render_hash === hash && !force) {
    console.log(
      `  = ${label}: ya narrado y el relato no ha cambiado (${formatClock(current.duration_seconds)}) → --force para rehacerlo`
    );
    return "unchanged";
  }
  if (current && current.render_hash !== hash) {
    console.log(`  ↻ ${label}: cambió el relato o los ajustes de voz desde la última narración, se regenera`);
  }

  if (dryRun) {
    console.log(
      `  ~ ${label}: ${text.length} caracteres · voz ${DEFAULT_VOICE.name} · ${DEFAULT_VOICE.modelId} (dry-run, no se llamó a la API)`
    );
    return "dry";
  }

  const pcm = await synthesize(text);
  const duration = pcmDuration(pcm.length);
  const { wav, mp3 } = await renderAudio(pcm, duration, bed);
  const subir = (ruta, cuerpo, tipo) =>
    put(ruta, cuerpo, {
      access: "public",
      contentType: tipo,
      addRandomSuffix: false,
      allowOverwrite: true,
      token: process.env.BLOB_READ_WRITE_TOKEN,
    });
  const [blob, master] = await Promise.all([
    subir(narrationBlobPath(myth.slug, hash), mp3, AUDIO_CONTENT_TYPE),
    subir(narrationBlobPath(myth.slug, hash, DEFAULT_VOICE.name, "wav"), wav, MASTER_CONTENT_TYPE),
  ]);

  await sql`
    INSERT INTO myth_narrations (
      myth_id, myth_slug, audio_url, master_url, voice_id, voice_name, model_id,
      render_hash, char_count, duration_seconds, bed_slug, bed_gain_db, updated_at
    ) VALUES (
      ${myth.id}, ${myth.slug}, ${blob.url}, ${master.url}, ${DEFAULT_VOICE.id}, ${DEFAULT_VOICE.name},
      ${DEFAULT_VOICE.modelId}, ${hash}, ${text.length}, ${duration},
      ${bed?.slug ?? null}, ${bed ? BED_GAIN_DB : null}, NOW()
    )
    ON CONFLICT (myth_slug, voice_id) DO UPDATE SET
      myth_id = EXCLUDED.myth_id,
      audio_url = EXCLUDED.audio_url,
      master_url = EXCLUDED.master_url,
      bed_slug = EXCLUDED.bed_slug,
      bed_gain_db = EXCLUDED.bed_gain_db,
      voice_name = EXCLUDED.voice_name,
      model_id = EXCLUDED.model_id,
      render_hash = EXCLUDED.render_hash,
      char_count = EXCLUDED.char_count,
      duration_seconds = EXCLUDED.duration_seconds,
      updated_at = NOW()
  `;

  console.log(
    `  ✓ ${label}: ${formatClock(duration)} · ${text.length} caracteres · ` +
      `MP3 ${Math.round(mp3.length / 1024)} KB · máster WAV ${Math.round(wav.length / 1024)} KB\n` +
      `    lecho: ${bed ? `${bed.title} (${BED_GAIN_DB} dB)` : "sin música"}\n` +
      `    reproductor: ${blob.url}\n    máster (voz sola): ${master.url}`
  );
  return "generated";
}

async function main() {
  if (!process.env.POSTGRES_URL) {
    throw new Error("POSTGRES_URL o DATABASE_URL no está configurada");
  }

  // `sql.query` y no la plantilla etiquetada: el lote lleva partes opcionales
  // (el LIMIT, y el filtro de "sólo los que faltan") y los fragmentos anidados
  // de `@vercel/postgres` no se componen.
  const targets = slug
    ? await sql.query("SELECT id, slug, title, mito FROM myths WHERE slug = $1", [slug])
    : await sql.query(
        `
          SELECT m.id, m.slug, m.title, m.mito
          FROM myths m
          LEFT JOIN myth_narrations n
            ON n.myth_slug = m.slug AND n.voice_id = $1
          WHERE m.mito IS NOT NULL AND length(trim(m.mito)) > 0
            ${force ? "" : "AND n.id IS NULL"}
          ORDER BY m.slug
          ${limit ? `LIMIT ${limit}` : ""}
        `,
        [DEFAULT_VOICE.id]
      );

  if (!targets.rows.length) {
    console.log(slug ? `No existe el mito "${slug}".` : "No hay mitos pendientes de narrar.");
    return;
  }

  console.log(
    `🎙️  ${targets.rows.length} mito(s) · voz ${DEFAULT_VOICE.name} (${DEFAULT_VOICE.id})${dryRun ? " · DRY RUN" : ""}\n`
  );

  const tally = {};
  const dirLechos = await mkdtemp(join(tmpdir(), "lechos-"));
  try {
    for (const myth of targets.rows) {
      try {
        const result = await narrateMyth(myth, dirLechos);
        tally[result] = (tally[result] || 0) + 1;
      } catch (error) {
        tally.failed = (tally.failed || 0) + 1;
        console.error(`  ✗ ${myth.slug}: ${error.message}`);
      }
    }
  } finally {
    await rm(dirLechos, { recursive: true, force: true }).catch(() => {});
  }

  console.log(
    `\n${tally.failed ? "⚠️" : "✅"}  ${Object.entries(tally).map(([k, v]) => `${k}: ${v}`).join(" · ")}`
  );
  if (tally.failed) process.exitCode = 1;
}

main().catch((error) => {
  console.error("\n❌", error.message);
  process.exit(1);
});
