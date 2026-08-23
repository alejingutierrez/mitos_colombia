#!/usr/bin/env node
/**
 * Guarda las escenas de video de un mito con el nombre que espera el
 * ensamblador y deja el plan de bloques al lado.
 *
 * A diferencia del tríptico, aquí no se puede identificar por proporción —las
 * 17 escenas son todas 9:16—, así que el emparejamiento viene del encolador,
 * que anota el `job_id` en el instante del envío. Se le pasa `tag=id` y nadie
 * tiene que adivinar cuál es cuál.
 *
 *   node scripts/mitos/ingest-keyframes.mjs --slug la-aparicion-del-hombre \
 *     --pares "b1a=20260823|075031|8600...,b1b=..."
 */
import { mkdir, writeFile } from "node:fs/promises";
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const args = Object.fromEntries(
  process.argv.slice(2).reduce((acc, a, i, arr) => {
    if (a.startsWith("--")) acc.push([a.slice(2), arr[i + 1]?.startsWith("--") ? true : arr[i + 1]]);
    return acc;
  }, [])
);
const comunidad = args.comunidad || "muiscas";
const slug = args.slug;
const USER = args.user || "user_3H5pyS3mWMYbD5GWsIvBNlM1R3F";
const CDN = args.cdn || "https://d8j0ntlcm91z4.cloudfront.net";

const plan = JSON.parse(readFileSync(`content/mitos-visuales/${comunidad}.json`, "utf8"));
const mito = plan.mitos[slug];
if (!mito) throw new Error(`mito no está en el plan: ${slug}`);
const carpeta = mito.carpeta || slug;
const dir = join("content/videos", comunidad, "videos", slug, "keyframes");
await mkdir(dir, { recursive: true });

const bloques = mito.video?.bloques || {};
const buscaEscena = (tag) => {
  const n = tag.slice(0, -1), cual = tag.slice(-1);
  return bloques[n]?.[cual];
};

const hechos = [];
for (const par of String(args.pares || "").split(",").map((s) => s.trim()).filter(Boolean)) {
  const [tag, id] = par.split("=");
  const escena = buscaEscena(tag);
  if (!escena) throw new Error(`el bloque "${tag}" no está en el plan de ${slug}`);
  if (id === "PENDIENTE" || !id) { console.warn(`  ⚠ ${tag} sin id — quedó pendiente`); continue; }

  const [fecha, hora, job] = id.split("|");
  const res = await fetch(`${CDN}/${USER}/hf_${fecha}_${hora}_${job}.png`);
  if (!res.ok) { console.error(`  ✗ ${tag} — HTTP ${res.status}`); continue; }
  const buf = Buffer.from(await res.arrayBuffer());
  const meta = await sharp(buf).metadata();

  await sharp(buf).jpeg({ quality: 92 }).toFile(join(dir, `${tag}.jpg`));
  // El ensamblador anima el 1080x1920; el .jpg grande queda como maestro.
  await sharp(buf).resize(1080, 1920, { fit: "cover" }).jpeg({ quality: 92 })
    .toFile(join(dir, `${tag}.crop-9x16.jpg`));
  hechos.push({ tag, job, px: `${meta.width}x${meta.height}`, comp: escena.comp, desc: escena.desc });
  console.log(`  ✔ ${tag}  ${meta.width}x${meta.height}  ${escena.comp}`);
}

// El plan de bloques queda junto a los keyframes: quien arme el video no tiene
// que volver al plan de la comunidad para saber qué es cada imagen.
const reusadas = [];
for (const [n, b] of Object.entries(bloques)) {
  for (const cual of ["a", "b"]) {
    if (b[cual]?.reusa) reusadas.push({ tag: `${n}${cual}`, reusa: b[cual].reusa });
  }
}
await writeFile(join(dir, "..", "bloques.json"), JSON.stringify({
  mito: slug, comunidad: plan.comunidad, carpeta_triptico: carpeta,
  estructura: plan.video?.estructura,
  nota_deslinde: mito.video?.nota_deslinde,
  lineas: Object.fromEntries(Object.entries(bloques).map(([n, b]) => [n, b.linea])),
  keyframes: hechos, reusadas,
}, null, 2) + "\n");

const esperadas = Object.values(bloques).flatMap((b) => [b.a, b.b]).filter((e) => e && !e.reusa).length;
console.log(`\n  ${hechos.length}/${esperadas} escenas · plan de bloques → ${join(dir, "..", "bloques.json")}`);
