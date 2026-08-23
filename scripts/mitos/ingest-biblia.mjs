#!/usr/bin/env node
/**
 * Mete fichas nuevas a la biblia de la comunidad y las deja citables.
 *
 * Una ficha no sirve de nada si el siguiente mito no sabe que existe, así que
 * este script hace las tres cosas a la vez: guarda el `.jpg` con el nombre
 * exacto que espera el pipeline de video (`content/videos/<ref>.jpg`), añade la
 * entrada al `manifest.json` de la biblia con su prompt, y la registra en
 * `higgsfield-ids.json` como pendiente de subir. Así el manual visual se
 * alimenta solo a medida que los mitos se producen.
 *
 *   node scripts/mitos/ingest-biblia.mjs --comunidad muiscas \
 *     --slug la-aparicion-del-hombre \
 *     --fichas "sogamoso_cacique=20260823|073438|983c...,ramiriqui_cacique=..."
 */
import { mkdir, writeFile, readFile } from "node:fs/promises";
import { readFileSync } from "node:fs";
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
// Una tanda de `biblia-libre` cruza varios mitos, así que la ficha dice a cuál
// pertenece y no al revés: se busca por nombre en todo el plan. `--slug` queda
// como filtro opcional para cuando se quiere ingestar sólo un mito.
function duenoDe(nombre) {
  for (const [s2, m2] of Object.entries(plan.mitos)) {
    if ((m2.biblia || {})[nombre]) return [s2, m2.biblia[nombre]];
  }
  throw new Error(`la ficha "${nombre}" no está declarada en ningún mito del plan`);
}

const bibliaDir = join("content/videos", comunidad, "biblia");
await mkdir(bibliaDir, { recursive: true });
const manifestPath = join(bibliaDir, "manifest.json");
const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
const idsPath = join(bibliaDir, "higgsfield-ids.json");
const ids = JSON.parse(await readFile(idsPath, "utf8"));
ids.pendientes_de_subir = ids.pendientes_de_subir || {};

for (const par of String(args.fichas).split(",").map((s) => s.trim()).filter(Boolean)) {
  const [nombre, id] = par.split("=");
  const [duenoSlug, ficha] = duenoDe(nombre);
  if (slug && slug !== duenoSlug) { console.log(`  · ${nombre} es de ${duenoSlug}, no de ${slug} — la salto`); continue; }

  const [fecha, hora, job] = id.split("|");
  const res = await fetch(`${CDN}/${USER}/hf_${fecha}_${hora}_${job}.png`);
  if (!res.ok) throw new Error(`no se pudo bajar ${nombre}: HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const meta = await sharp(buf).metadata();

  await sharp(buf).jpeg({ quality: 92 }).toFile(join(bibliaDir, `${nombre}.jpg`));
  // El recorte 9:16 es lo que consumen los specs de video; las fichas de
  // personaje ya son verticales, pero paisajes y props no.
  await sharp(buf).resize(1080, 1920, { fit: "cover" }).jpeg({ quality: 92 })
    .toFile(join(bibliaDir, `${nombre}.crop-9x16.jpg`));

  manifest.items[nombre] = {
    kind: ficha.kind,
    preset: { personaje: "vertical", paisaje: "horizontal", prop: "square" }[ficha.kind],
    refs: ficha.refs || [],
    estrenado_en: duenoSlug,
    fecha: args.fecha || new Date().toISOString().slice(0, 10),
    job_id: job,
    px: `${meta.width}x${meta.height}`,
    descripcion: ficha.desc,
    ...(ficha.nota ? { nota: ficha.nota } : {}),
  };
  ids.pendientes_de_subir[nombre] = "generada en la web; súbela a Higgsfield cuando se necesite como referencia por API";
  console.log(`  ✔ ${nombre.padEnd(24)} ${ficha.kind.padEnd(10)} ${String(meta.width).padStart(4)}x${meta.height}  ← ${duenoSlug}`);
}

await writeFile(manifestPath, JSON.stringify(manifest, null, 1) + "\n");
await writeFile(idsPath, JSON.stringify(ids, null, 2) + "\n");
console.log(`\n  biblia: ${Object.keys(manifest.items).length} fichas`);
