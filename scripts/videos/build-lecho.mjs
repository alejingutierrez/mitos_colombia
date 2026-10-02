#!/usr/bin/env node
/**
 * Lecho musical para un VIDEO a partir del catálogo de lechos de las narraciones
 * del sitio (tabla `narration_beds` en Postgres; WAV de 30 s en bucle en Vercel
 * Blob, archivados a -24 LUFS). Es la MISMA receta de
 * scripts/mitos/generar-narracion.mjs: K tramos de igual largo, cada lecho en
 * bucle dentro de su tramo, relevos con `acrossfade` de 4 s y fade de entrada y
 * salida, a la duración exacta del video.
 *
 * Uso:
 *   node scripts/videos/build-lecho.mjs --guion docs/videos/muiscas/mvp-guiones/guion-x.json \
 *     --duration 94 --slug la-aparicion-del-hombre --out content/videos/muiscas/videos/x/lecho-v1.wav \
 *     [--cuantos 3] [--lecho 24-piedra-que-recuerda,18-manos-de-barro,04-viento-de-paramo] [--dry-run]
 *
 * Sin --lecho elige por CARÁCTER del texto del guion (chooseBedsForStory, igual que
 * la narración: el tema manda y a igualdad gana el menos usado). Con --lecho se
 * fija la lista EN ORDEN — necesario en videos: el guion es corto (~110 palabras) y
 * una sola palabra («agua», «recorrían») basta para que el léxico traiga un río o
 * una canoa a un mito que no los tiene. Elegir por ACTO, mirando los títulos del
 * catálogo (`npm run mitos:lechos -- --listar`).
 *
 * El WAV sale al nivel de archivo (-24 LUFS): el nivel final lo pone el
 * ensamblador (plan `mix: "narracion"` → lecho a -34 LUFS, 18 dB bajo la voz).
 * Deja al lado un `<out>.json` con los lechos elegidos (manifiesto).
 *
 * Requiere POSTGRES_URL (o DATABASE_URL) en .env.local/.env del repo principal.
 */

import { sql } from "@vercel/postgres";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import dotenv from "dotenv";
import {
  BED_CROSSFADE_S,
  BED_FADE_IN_S,
  BED_FADE_OUT_S,
  bedCountForDuration,
  bedSegmentLength,
} from "../../src/lib/narration.js";
import { chooseBedsForStory, splitStory, topCharacters } from "../../src/lib/narration-character.js";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
for (const dir of [rootDir, path.resolve(rootDir, "../../..")]) {
  dotenv.config({ path: path.join(dir, ".env.local"), quiet: true });
  dotenv.config({ path: path.join(dir, ".env"), quiet: true });
  if (process.env.POSTGRES_URL || process.env.DATABASE_URL) break;
}
if (!process.env.POSTGRES_URL && process.env.DATABASE_URL) process.env.POSTGRES_URL = process.env.DATABASE_URL;

const args = process.argv.slice(2);
const flag = (n) => args.includes(`--${n}`);
const value = (n, d = null) => {
  const i = args.indexOf(`--${n}`);
  return i !== -1 && args[i + 1] && !args[i + 1].startsWith("--") ? args[i + 1] : d;
};
const guionPath = value("guion");
const duration = Number(value("duration"));
const slug = value("slug", "video");
const outPath = value("out");
const forzados = value("lecho");
const dryRun = flag("dry-run");
if (!guionPath || !Number.isFinite(duration) || duration <= 0 || !outPath) {
  console.error("Uso: --guion guion.json --duration <s> --out lecho.wav [--slug x] [--cuantos N] [--lecho a,b,c] [--dry-run]");
  process.exit(1);
}
if (!process.env.POSTGRES_URL) {
  console.error("[lecho] falta POSTGRES_URL/DATABASE_URL");
  process.exit(1);
}

const guion = JSON.parse(fs.readFileSync(path.resolve(rootDir, guionPath), "utf8"));
const story = guion.lines.map((l) => l.text).join("\n\n");
const cuantos = Number(value("cuantos", bedCountForDuration(duration)));

async function pickBeds() {
  if (forzados) {
    const pedidos = forzados.split(",").map((x) => x.trim()).filter(Boolean);
    const r = await sql.query(
      "SELECT slug, title, audio_url, characters, lufs, duration_seconds FROM narration_beds WHERE slug = ANY($1)",
      [pedidos]
    );
    const lechos = pedidos.map((sl) => r.rows.find((x) => x.slug === sl));
    const faltan = pedidos.filter((sl, i) => !lechos[i]);
    if (faltan.length) throw new Error(`lechos inexistentes en el catálogo: ${faltan.join(", ")}`);
    return { lechos, modo: "forzado" };
  }
  const r = await sql.query(`
    SELECT b.slug, b.title, b.audio_url, b.characters, b.lufs, b.duration_seconds,
           (SELECT count(*) FROM myth_narrations n WHERE n.bed_slugs @> to_jsonb(b.slug)) AS usos
    FROM narration_beds b
    ORDER BY usos ASC, b.slug ASC
  `);
  return { lechos: chooseBedsForStory(story, r.rows, cuantos, slug), modo: "por carácter" };
}

const ff = (a) => spawnSync("ffmpeg", ["-y", "-loglevel", "error", ...a], { encoding: "utf8" });

async function main() {
  const { lechos, modo } = await pickBeds();
  const K = lechos.length;
  const X = BED_CROSSFADE_S;
  const L = bedSegmentLength(duration, K, X);
  const tramos = splitStory(story, K);
  console.log(`[lecho] ${slug}: ${duration}s · ${K} lechos (${modo}) · tramo ${L.toFixed(1)}s · cruce ${X}s`);
  lechos.forEach((b, i) => {
    const t0 = Math.max(0, i * (L - X));
    console.log(`  ${i + 1}. ${b.slug} «${b.title}» [${(b.characters || []).join(", ")}] · entra en ${t0.toFixed(1)}s · texto del tramo: [${topCharacters(tramos[i] || "", 3).join(",")}] "${(tramos[i] || "").slice(0, 60)}…"`);
  });
  if (dryRun) return;

  const dir = await mkdtemp(path.join(tmpdir(), "lecho-video-"));
  try {
    const archivos = [];
    for (const b of lechos) {
      const res = await fetch(b.audio_url);
      if (!res.ok) throw new Error(`no se pudo bajar ${b.slug}: HTTP ${res.status}`);
      const f = path.join(dir, `${b.slug}.wav`);
      await writeFile(f, Buffer.from(await res.arrayBuffer()));
      archivos.push(f);
    }
    // Misma cadena que construirLecho() de generar-narracion.mjs, sin la ganancia
    // (-10 dB) porque aquí el nivel lo decide el ensamblador.
    const entradas = archivos.flatMap((f) => ["-stream_loop", "-1", "-i", f]);
    const partes = archivos.map((_, i) => `[${i}:a]atrim=0:${L.toFixed(3)},asetpts=PTS-STARTPTS[s${i}]`);
    let etiqueta = "s0";
    for (let i = 1; i < K; i += 1) {
      partes.push(`[${etiqueta}][s${i}]acrossfade=d=${X}:c1=tri:c2=tri[x${i}]`);
      etiqueta = `x${i}`;
    }
    const salidaFade = Math.max(0, duration - BED_FADE_OUT_S);
    partes.push(
      `[${etiqueta}]afade=t=in:st=0:d=${BED_FADE_IN_S},afade=t=out:st=${salidaFade.toFixed(3)}:d=${BED_FADE_OUT_S},atrim=0:${duration.toFixed(3)}[lecho]`
    );
    const outAbs = path.resolve(rootDir, outPath);
    fs.mkdirSync(path.dirname(outAbs), { recursive: true });
    const r = ff([...entradas, "-filter_complex", partes.join(";"), "-map", "[lecho]", "-ar", "48000", "-c:a", "pcm_s16le", outAbs]);
    if (r.status !== 0) throw new Error(`ffmpeg: ${String(r.stderr).slice(0, 400)}`);
    const dur = Number(spawnSync("ffprobe", ["-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", outAbs], { encoding: "utf8" }).stdout.trim());
    const med = spawnSync("ffmpeg", ["-hide_banner", "-nostats", "-i", outAbs, "-af", "ebur128=framelog=quiet", "-f", "null", "-"], { encoding: "utf8" });
    const lufs = (String(med.stderr).match(/I:\s*(-?[\d.]+)\s*LUFS/g) || []).pop();
    await writeFile(
      `${outAbs}.json`,
      JSON.stringify(
        {
          slug, duration, cuantos: K, modo, tramo_s: Number(L.toFixed(3)), crossfade_s: X,
          fade_in_s: BED_FADE_IN_S, fade_out_s: BED_FADE_OUT_S, nivel: "de archivo (-24 LUFS); el ensamblador lo lleva a music_lufs",
          lechos: lechos.map((b, i) => ({ orden: i + 1, slug: b.slug, title: b.title, characters: b.characters, audio_url: b.audio_url, entra_s: Number(Math.max(0, i * (L - X)).toFixed(2)) })),
          generado: new Date().toISOString(),
        },
        null,
        2
      )
    );
    console.log(`[lecho] listo → ${outAbs} (${dur.toFixed(2)}s, ${lufs || "LUFS ?"}) + manifiesto ${path.basename(outAbs)}.json`);
  } finally {
    await rm(dir, { recursive: true, force: true }).catch(() => {});
  }
}

main().catch((e) => {
  console.error("\n❌", e.message);
  process.exit(1);
});
