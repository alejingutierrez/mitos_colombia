#!/usr/bin/env node
/**
 * Baja los resultados de una tanda de Higgsfield a la carpeta del mito y deja
 * el manifiesto que el resto del pipeline sabe leer.
 *
 * Se le pasa un JSON de resultados (índice -> url) porque las URLs sólo las
 * conoce quien habló con la API; el script se encarga de lo demás: nombra los
 * archivos como los espera `apply-myth-triptych.mjs` (`<slug>-horizontal.png`),
 * escribe copias `.jpg` con el nombre del acto para el pipeline de video, y
 * recorta el 9:16 listo para animar.
 *
 *   node scripts/mitos/fetch-results.mjs --comunidad muiscas --slug chiminigagua \
 *     --resultados '[{"acto":"entrada","url":"...","job_id":"..."}, ...]'
 */
import { mkdir, writeFile } from "node:fs/promises";
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
const resultados = JSON.parse(args.resultados || readFileSync(args.archivo, "utf8"));

const plan = JSON.parse(readFileSync(`content/mitos-visuales/${comunidad}.json`, "utf8"));
const mito = plan.mitos[slug];
if (!mito) throw new Error(`mito no está en el plan: ${slug}`);

const FORMATO = { entrada: "horizontal", acto: "vertical", huella: "cuadrada" };
const dir = join("content/videos", comunidad, "mitos", slug);
await mkdir(dir, { recursive: true });

const items = {};
for (const r of resultados) {
  const formato = FORMATO[r.acto];
  const res = await fetch(r.url);
  if (!res.ok) throw new Error(`no se pudo bajar ${r.acto}: ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());

  // El .png es el maestro; el .jpg con nombre de acto es lo que citan los specs
  // de video (`generate-keyframes.mjs` busca `content/videos/<ref>.jpg`).
  const png = join(dir, `${slug}-${formato}.png`);
  await writeFile(png, buf);
  const meta = await sharp(buf).metadata();
  await sharp(buf).jpeg({ quality: 92 }).toFile(join(dir, `${r.acto}.jpg`));

  // El acto es el que se anima: dejarlo ya recortado a 1080x1920.
  if (r.acto === "acto") {
    await sharp(buf).resize(1080, 1920, { fit: "cover" }).jpeg({ quality: 92 })
      .toFile(join(dir, "acto.crop-9x16.jpg"));
  }

  const escena = mito.escenas[r.acto];
  items[formato] = {
    acto: r.acto,
    archivo: `${slug}-${formato}.png`,
    aspect_ratio: { entrada: "16:9", acto: "9:16", huella: "1:1" }[r.acto],
    px: `${meta.width}x${meta.height}`,
    job_id: r.job_id,
    composicion: escena.composicion,
    refs: escena.refs || [],
    escena: escena.escena,
  };
  console.log(`  ✔ ${r.acto.padEnd(8)} ${meta.width}x${meta.height}  ${escena.composicion}`);
}

const manifest = {
  spec: `${comunidad}-mitos-triptico`,
  mito: slug,
  slug,
  comunidad: plan.comunidad,
  region: plan.region,
  doctrina: plan.doctrina,
  bloque: mito.bloque,
  arco: mito.arco,
  ...(mito.protagonista ? { protagonista: mito.protagonista } : {}),
  ...(mito.deslinde_nota ? { deslinde_nota: mito.deslinde_nota } : {}),
  generado_en: "higgsfield",
  model: "gpt_image_2",
  resolution: "2k",
  quality: "high",
  fecha: args.fecha || new Date().toISOString().slice(0, 10),
  estrena: mito.estrena || [],
  items,
};
await writeFile(join(dir, "manifest.json"), JSON.stringify(manifest, null, 2) + "\n");
console.log(`\n  manifiesto → ${join(dir, "manifest.json")}`);
