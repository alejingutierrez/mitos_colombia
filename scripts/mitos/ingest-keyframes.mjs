#!/usr/bin/env node
/**
 * Guarda las escenas de video de un mito con el nombre que espera el
 * ensamblador y deja el plan de bloques al lado.
 *
 * A diferencia del tríptico, aquí no se puede identificar por proporción —las
 * escenas son todas verticales—, así que el emparejamiento siempre se hace por
 * tag. Acepta tanto ids históricos de Higgsfield como archivos locales ya
 * nombrados por el paquete OpenAI; ningún modo reemplaza una escena existente.
 *
 *   node scripts/mitos/ingest-keyframes.mjs --slug la-aparicion-del-hombre \
 *     --pares "b1a=20260823|075031|8600...,b1b=..."
 *   node scripts/mitos/ingest-keyframes.mjs --slug el-bermejo-aspira-a-ser-rey \
 *     --local-dir content/mitos-visuales/_openai/muiscas/el-bermejo-aspira-a-ser-rey/generated \
 *     --jobs content/mitos-visuales/_openai/muiscas/el-bermejo-aspira-a-ser-rey/jobs.json
 */
import { mkdir, writeFile, readFile, readdir } from "node:fs/promises";
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { createHash } from "node:crypto";
import sharp from "sharp";

const args = Object.fromEntries(
  process.argv.slice(2).reduce((acc, a, i, arr) => {
    if (a.startsWith("--")) acc.push([a.slice(2), arr[i + 1]?.startsWith("--") ? true : arr[i + 1]]);
    return acc;
  }, [])
);
const comunidad = args.comunidad || "muiscas";
const slug = args.slug;
if (!slug) throw new Error("falta --slug");
const USER = args.user || "user_3H5pyS3mWMYbD5GWsIvBNlM1R3F";
const CDN = args.cdn || "https://d8j0ntlcm91z4.cloudfront.net";
const localDir = args["local-dir"] ? String(args["local-dir"]) : null;
const jobsPath = args.jobs ? String(args.jobs) : null;

const plan = JSON.parse(readFileSync(`content/mitos-visuales/${comunidad}.json`, "utf8"));
const mito = plan.mitos[slug];
if (!mito) throw new Error(`mito no está en el plan: ${slug}`);
const carpeta = mito.carpeta || slug;
const carpetaVideo = mito.carpeta_video || slug;
const dir = join("content/videos", comunidad, "videos", carpetaVideo, "keyframes");
await mkdir(dir, { recursive: true });

const bloques = mito.video?.bloques || {};
const buscaEscena = (tag) => {
  const n = tag.slice(0, -1), cual = tag.slice(-1);
  return bloques[n]?.[cual];
};

const bloquesPath = join(dir, "..", "bloques.json");
const manifestPrevio = existsSync(bloquesPath)
  ? JSON.parse(await readFile(bloquesPath, "utf8"))
  : null;
const hechosPorTag = new Map((manifestPrevio?.keyframes || []).map((item) => [item.tag, item]));

const jobsManifest = jobsPath ? JSON.parse(await readFile(jobsPath, "utf8")) : null;
if (localDir && !jobsManifest) throw new Error("la ingesta OpenAI exige --jobs para conservar prompt, referencias y modelo");
if (jobsManifest && (jobsManifest.community !== comunidad || jobsManifest.myth !== slug)) {
  throw new Error(`el paquete ${jobsPath} pertenece a ${jobsManifest.community}/${jobsManifest.myth}, no a ${comunidad}/${slug}`);
}
const jobsByTag = new Map((jobsManifest?.jobs || []).map((job) => [job.tag, job]));

let pares;
if (localDir) {
  if (!existsSync(localDir)) throw new Error(`no existe --local-dir: ${localDir}`);
  const files = (await readdir(localDir)).filter((file) => /^b\d+[ab]\.(png|jpe?g|webp)$/i.test(file)).sort();
  if (!files.length) throw new Error(`no hay archivos bNa/bNb en ${localDir}`);
  pares = files.map((file) => {
    const tag = file.replace(/\.(png|jpe?g|webp)$/i, "");
    const escena = buscaEscena(tag);
    if (!escena) throw new Error(`el bloque "${tag}" no está en el plan de ${slug}`);
    if (!jobsByTag.has(tag)) throw new Error(`${tag}: no tiene evidencia en ${jobsPath}`);
    return { tag, id: file, escena, localPath: join(localDir, file) };
  });
} else {
  pares = String(args.pares || "").split(",").map((s) => s.trim()).filter(Boolean).map((par) => {
    const [tag, id] = par.split("=");
    const escena = buscaEscena(tag);
    if (!escena) throw new Error(`el bloque "${tag}" no está en el plan de ${slug}`);
    return { tag, id, escena };
  });
}
if (!pares.length) throw new Error("no hay pares para ingerir");

const vistos = new Set();
for (const { tag, id } of pares) {
  if (id === "PENDIENTE" || !id) continue;
  if (vistos.has(tag)) throw new Error(`el bloque "${tag}" está repetido en la tanda`);
  vistos.add(tag);
  const masterPath = join(dir, `${tag}.jpg`);
  const cropPath = join(dir, `${tag}.crop-9x16.jpg`);
  if (existsSync(masterPath) || existsSync(cropPath) || hechosPorTag.has(tag)) {
    throw new Error(`el keyframe "${tag}" ya existe; la ingesta aditiva no reemplaza archivos ni manifiesto`);
  }
}

for (const { tag, id, escena, localPath } of pares) {
  if (id === "PENDIENTE" || !id) { console.warn(`  ⚠ ${tag} sin id — quedó pendiente`); continue; }

  let buf;
  let job;
  if (localPath) {
    buf = await readFile(localPath);
    job = jobsByTag.get(tag);
  } else {
    const [fecha, hora, remoteJob] = id.split("|");
    const res = await fetch(`${CDN}/${USER}/hf_${fecha}_${hora}_${remoteJob}.png`);
    if (!res.ok) { console.error(`  ✗ ${tag} — HTTP ${res.status}`); continue; }
    buf = Buffer.from(await res.arrayBuffer());
    job = remoteJob;
  }
  const meta = await sharp(buf).metadata();
  if (!meta.width || !meta.height) throw new Error(`${tag}: la imagen no tiene dimensiones legibles`);
  if (localPath) {
    const expected = String(jobsManifest.size || "").match(/^(\d+)x(\d+)$/);
    if (expected && (meta.width !== Number(expected[1]) || meta.height !== Number(expected[2]))) {
      throw new Error(`${tag}: mide ${meta.width}x${meta.height}; el paquete exige el máster nativo ${jobsManifest.size}`);
    }
    if (meta.width >= meta.height) throw new Error(`${tag}: el máster OpenAI no es vertical`);
  }

  await sharp(buf).jpeg({ quality: 92 }).toFile(join(dir, `${tag}.jpg`));
  // El ensamblador anima el 1080x1920; el .jpg grande queda como maestro.
  await sharp(buf).resize(1080, 1920, { fit: "cover" }).jpeg({ quality: 92 })
    .toFile(join(dir, `${tag}.crop-9x16.jpg`));
  hechosPorTag.set(tag, localPath ? {
    tag,
    provider: jobsManifest.provider,
    model: jobsManifest.model,
    quality: jobsManifest.quality,
    source_px: `${meta.width}x${meta.height}`,
    output_px: "1080x1920",
    comp: escena.comp,
    desc: escena.desc,
    refs: job.refs,
    prompt_file: job.prompt_file,
    prompt_sha256: job.prompt_sha256,
    image_sha256: createHash("sha256").update(buf).digest("hex"),
    account_source: jobsManifest.account_source,
    // `created_at` pertenece al paquete reproducible: es el momento de preparar
    // prompts/refs, no una afirmación sobre cuándo respondió la API.
    package_prepared_at: jobsManifest.created_at,
    ingested_at: new Date().toISOString(),
  } : { tag, job, px: `${meta.width}x${meta.height}`, comp: escena.comp, desc: escena.desc });
  console.log(`  ✔ ${tag}  ${meta.width}x${meta.height} → 1080x1920  ${escena.comp}  ${localPath ? "OpenAI" : "Higgsfield"}`);
}

// El plan de bloques queda junto a los keyframes: quien arme el video no tiene
// que volver al plan de la comunidad para saber qué es cada imagen.
const reusadas = [];
for (const [n, b] of Object.entries(bloques)) {
  for (const cual of ["a", "b"]) {
    if (b[cual]?.reusa) reusadas.push({ tag: `${n}${cual}`, reusa: b[cual].reusa });
  }
}
const hechos = [...hechosPorTag.values()].sort((a, b) => a.tag.localeCompare(b.tag, undefined, { numeric: true }));
await writeFile(bloquesPath, JSON.stringify({
  mito: slug, comunidad: plan.comunidad, carpeta_triptico: carpeta,
  estructura: plan.video?.estructura,
  nota_deslinde: mito.video?.nota_deslinde,
  ...(jobsManifest ? { generacion_actual: {
    provider: jobsManifest.provider,
    model: jobsManifest.model,
    quality: jobsManifest.quality,
    account_source: jobsManifest.account_source,
  } } : {}),
  lineas: Object.fromEntries(Object.entries(bloques).map(([n, b]) => [n, b.linea])),
  keyframes: hechos, reusadas,
}, null, 2) + "\n");

const esperadas = Object.values(bloques).flatMap((b) => [b.a, b.b]).filter((e) => e && !e.reusa).length;
console.log(`\n  ${hechos.length}/${esperadas} escenas · plan de bloques → ${join(dir, "..", "bloques.json")}`);
