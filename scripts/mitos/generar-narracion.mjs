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
 *   node scripts/mitos/generar-narracion.mjs --slug bachue --lecho 04-viento-de-paramo,10-fuego-y-humo
 *
 * Cada narración lleva VARIOS lechos encadenados (uno por cada ~55 s), para que
 * un mismo bucle de 30 s no se repita seis veces seguidas y se vuelva monótono.
 *
 * Los lechos se eligen por el CARÁCTER de cada tramo del relato (un mito de
 * caminos no lleva debajo la laguna de otro) y, a igualdad de encaje, por menor
 * uso. Para ganar variedad basta con ampliar el catálogo:
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
  BED_CROSSFADE_S,
  BED_FADE_IN_S,
  BED_FADE_OUT_S,
  BED_GAIN_DB,
  bedCountForDuration,
  bedSegmentLength,
  MP3_BITRATE_KBPS,
  PCM_CHANNELS,
  PCM_SAMPLE_RATE,
  VOICE_LUFS,
  buildNarrationParts,
  formatClock,
  narrationBlobPath,
  narrationRenderHash,
  pcmDuration,
  wordTimingsFromAlignment,
} from "../../src/lib/narration.js";
import { chooseBedsForStory } from "../../src/lib/narration-character.js";

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
/**
 * Pista de fondo de la duración exacta de la narración, hecha de VARIOS lechos
 * encadenados con cruces largos.
 *
 * Cada lecho se repite en bucle sólo dentro de su tramo (`-stream_loop -1` en
 * la entrada) y el relevo al siguiente se hace con `acrossfade`, que come el
 * cruce: por eso los tramos miden más que su parte proporcional. El resultado
 * dura lo mismo que la voz, sin costuras audibles y sin que ninguna vuelta se
 * repita tantas veces como para que el oído la aprenda.
 */
function construirLecho(beds, duration) {
  const K = beds.length;
  const X = BED_CROSSFADE_S;
  const L = bedSegmentLength(duration, K, X);
  const entradas = beds.flatMap((b) => ["-stream_loop", "-1", "-i", b.archivo]);

  const partes = beds.map(
    (_, i) => `[${i + 1}:a]atrim=0:${L.toFixed(3)},asetpts=PTS-STARTPTS[s${i}]`
  );
  let etiqueta = "s0";
  for (let i = 1; i < K; i += 1) {
    partes.push(`[${etiqueta}][s${i}]acrossfade=d=${X}:c1=tri:c2=tri[x${i}]`);
    etiqueta = `x${i}`;
  }
  const salidaFade = Math.max(0, duration - BED_FADE_OUT_S);
  partes.push(
    `[${etiqueta}]volume=${BED_GAIN_DB}dB,` +
      `afade=t=in:st=0:d=${BED_FADE_IN_S},` +
      `afade=t=out:st=${salidaFade.toFixed(3)}:d=${BED_FADE_OUT_S}[lecho]`
  );
  return { entradas, cadena: partes.join(";"), tramo: L };
}

async function renderAudio(pcm, duration, beds) {
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
    const lecho = beds?.length ? construirLecho(beds, duration) : null;
    const args = lecho
      ? ["-y", "-loglevel", "error", ...entrada, ...lecho.entradas,
         "-filter_complex",
         `[0:a]loudnorm=I=${VOICE_LUFS}:TP=-1.5:LRA=11,aformat=channel_layouts=stereo[voz];` +
         `${lecho.cadena};` +
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
/**
 * Elige los lechos de una narración: por CARÁCTER del tramo que va a acompañar
 * y, a igualdad, por menor uso.
 *
 * La consulta trae el catálogo entero ordenado por uso —no los N primeros—
 * porque el filtro temático se aplica después: si sólo llegaran los menos
 * usados, un mito de agua podría quedarse sin ningún lecho de agua entre los
 * candidatos y el tema se perdería justo cuando más importa.
 */
async function pickBeds(cuantos, forzado, story, slug) {
  if (forzado) {
    const pedidos = forzado.split(",").map((x) => x.trim()).filter(Boolean);
    const r = await sql.query(
      "SELECT slug, title, audio_url, characters FROM narration_beds WHERE slug = ANY($1)",
      [pedidos]
    );
    // Se respeta el orden que pidió quien ejecuta, no el que devuelva la base.
    return pedidos.map((sl) => r.rows.find((x) => x.slug === sl)).filter(Boolean);
  }
  const r = await sql.query(`
    SELECT b.slug, b.title, b.audio_url, b.characters,
           (SELECT count(*) FROM myth_narrations n
             WHERE n.bed_slugs @> to_jsonb(b.slug)) AS usos
    FROM narration_beds b
    ORDER BY usos ASC, b.slug ASC
  `);
  // El slug como semilla: mismo mito, mismos lechos siempre; mitos distintos
  // con el mismo perfil temático, repartos distintos.
  return chooseBedsForStory(story, r.rows, cuantos, slug);
}

/** Los lechos viven en el blob; cada uno se baja una vez por corrida. */
const cacheLechos = new Map();
async function fetchBeds(beds, dir) {
  const salida = [];
  for (const bed of beds) {
    if (cacheLechos.has(bed.slug)) {
      salida.push(cacheLechos.get(bed.slug));
      continue;
    }
    const res = await fetch(bed.audio_url);
    if (!res.ok) throw new Error(`no se pudo bajar el lecho ${bed.slug}: HTTP ${res.status}`);
    const archivo = join(dir, `${bed.slug}.wav`);
    await writeFile(archivo, Buffer.from(await res.arrayBuffer()));
    const entrada = { ...bed, archivo };
    cacheLechos.set(bed.slug, entrada);
    salida.push(entrada);
  }
  return salida;
}

/**
 * Se pide por `with-timestamps` y no por el endpoint normal: además del audio
 * devuelve el instante de inicio y fin de CADA CARÁCTER del texto enviado. De
 * ahí salen las marcas por palabra que resaltan la lectura en la página. Es la
 * alineación del propio motor de voz, no una estimación por número de sílabas.
 *
 * El audio viene en base64 dentro del JSON, así que la respuesta pesa un tercio
 * más que el PCM; a cambio no hay que alinear a posteriori ni mantener dos
 * peticiones que podrían no corresponderse entre sí.
 */
async function synthesize(text) {
  const response = await fetch(
    `https://api.elevenlabs.io/v1/text-to-speech/${DEFAULT_VOICE.id}/with-timestamps?output_format=${AUDIO_FORMAT}`,
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
  const payload = await response.json();
  return {
    pcm: Buffer.from(payload.audio_base64, "base64"),
    alignment: payload.alignment || null,
  };
}

async function narrateMyth(myth, dirLechos) {
  const label = `${myth.slug}`;
  const parts = buildNarrationParts(myth);
  const text = parts?.text;
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

  // Cuántos lechos hacen falta se decide por la duración, y la duración sólo se
  // conoce tras sintetizar. Se estima aquí a partir del número de caracteres
  // —unos 14,5 por segundo con estos ajustes— porque el hash tiene que estar
  // cerrado antes de gastar la petición: si ya existe ese audio, no se genera.
  const duracionEstimada = text.length / 14.5;
  const cuantosLechos = bedCountForDuration(duracionEstimada);
  const beds = sinLecho
    ? []
    : await fetchBeds(await pickBeds(cuantosLechos, lechoForzado, parts.story, myth.slug), dirLechos);
  if (!sinLecho && !beds.length) {
    console.log(`  ! ${label}: no hay lechos en el catálogo, se narra sin música`);
  }
  const hash = narrationRenderHash(text, DEFAULT_VOICE, beds);
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

  const { pcm, alignment } = await synthesize(text);
  const duration = pcmDuration(pcm.length);
  // Sólo se resaltan las palabras del RELATO: la narración abre con el título,
  // que no tiene span en la página.
  const timings = wordTimingsFromAlignment(alignment, text, parts.storyOffset);
  if (!timings) {
    console.log(`  ! ${label}: sin alineación utilizable, el audio queda sin resaltado de palabras`);
  }
  const { wav, mp3 } = await renderAudio(pcm, duration, beds);
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
      render_hash, char_count, duration_seconds, bed_slugs, bed_gain_db, word_timings, updated_at
    ) VALUES (
      ${myth.id}, ${myth.slug}, ${blob.url}, ${master.url}, ${DEFAULT_VOICE.id}, ${DEFAULT_VOICE.name},
      ${DEFAULT_VOICE.modelId}, ${hash}, ${text.length}, ${duration},
      ${beds.length ? JSON.stringify(beds.map((b) => b.slug)) : null},
      ${beds.length ? BED_GAIN_DB : null},
      ${timings ? JSON.stringify(timings) : null}, NOW()
    )
    ON CONFLICT (myth_slug, voice_id) DO UPDATE SET
      myth_id = EXCLUDED.myth_id,
      audio_url = EXCLUDED.audio_url,
      master_url = EXCLUDED.master_url,
      bed_slugs = EXCLUDED.bed_slugs,
      bed_gain_db = EXCLUDED.bed_gain_db,
      word_timings = EXCLUDED.word_timings,
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
      `    lechos: ${beds.length ? beds.map((b) => `${b.title}${b.characters?.length ? ` [${b.characters[0]}]` : ""}`).join(" → ") + ` (${BED_GAIN_DB} dB)` : "sin música"} · ` +
      `${timings ? `${timings.length} palabras con marca de tiempo` : "sin resaltado"}\n` +
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
