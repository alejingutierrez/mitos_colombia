#!/usr/bin/env node
/**
 * Recoge las imágenes que el humano generó a mano en higgsfield.ai y las deja
 * hechas material del repositorio.
 *
 * El ilimitado de Higgsfield sólo aplica en su web y su uso automatizado está
 * prohibido, así que el reparto quedó: la persona genera y pega, el repositorio
 * hace todo lo demás. Por eso este script no pide que los archivos vengan
 * nombrados: los identifica por PROPORCIÓN, que es un dato que la imagen ya
 * trae. Tres archivos en una carpeta y listo.
 *
 *   npm run mitos:ingest -- --comunidad muiscas --slug creacion-muiscas
 */
import { readdir, mkdir, writeFile, rm } from "node:fs/promises";
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
if (!slug) throw new Error("falta --slug");

const plan = JSON.parse(readFileSync(`content/mitos-visuales/${comunidad}.json`, "utf8"));
const mito = plan.mitos[slug];
if (!mito) throw new Error(`mito no está en el plan: ${slug}`);

const inbox = args.inbox || join("content/mitos-visuales/_inbox", slug);
if (!existsSync(inbox)) throw new Error(`no existe la bandeja ${inbox} — deja ahí las tres imágenes`);

const IMG = /\.(png|jpe?g|webp)$/i;
const archivos = (await readdir(inbox)).filter((f) => IMG.test(f));
if (!archivos.length) throw new Error(`la bandeja ${inbox} está vacía`);

/** Proporción -> acto. Es el único dato que necesitamos del archivo. */
function actoDe(w, h) {
  const r = w / h;
  if (r > 1.4) return "entrada";   // 16:9
  if (r < 0.75) return "acto";     // 9:16
  if (r > 0.9 && r < 1.1) return "huella"; // 1:1
  return null;
}

const FORMATO = { entrada: "horizontal", acto: "vertical", huella: "cuadrada" };
const dir = join("content/videos", comunidad, "mitos", slug);
await mkdir(dir, { recursive: true });

const encontrados = {};
for (const f of archivos) {
  const src = join(inbox, f);
  const buf = await sharp(src).toBuffer();
  const meta = await sharp(buf).metadata();
  const acto = actoDe(meta.width, meta.height);
  if (!acto) {
    console.warn(`  ⚠ ${f} (${meta.width}x${meta.height}) no cuadra con 16:9, 9:16 ni 1:1 — lo salto`);
    continue;
  }
  if (encontrados[acto]) throw new Error(`dos archivos con la misma proporción para "${acto}": ${encontrados[acto].archivo_origen} y ${f}. Deja sólo el bueno en la bandeja.`);

  await sharp(buf).png().toFile(join(dir, `${slug}-${FORMATO[acto]}.png`));
  await sharp(buf).jpeg({ quality: 92 }).toFile(join(dir, `${acto}.jpg`));
  if (acto === "acto") {
    await sharp(buf).resize(1080, 1920, { fit: "cover" }).jpeg({ quality: 92 })
      .toFile(join(dir, "acto.crop-9x16.jpg"));
  }

  const escena = mito.escenas[acto];
  encontrados[acto] = {
    acto,
    archivo: `${slug}-${FORMATO[acto]}.png`,
    archivo_origen: f,
    aspect_ratio: { entrada: "16:9", acto: "9:16", huella: "1:1" }[acto],
    px: `${meta.width}x${meta.height}`,
    composicion: escena?.composicion,
    refs: escena?.refs || [],
    escena: escena?.escena,
  };
  console.log(`  ✔ ${acto.padEnd(8)} ${String(meta.width).padStart(4)}x${String(meta.height).padEnd(4)} ${escena?.composicion || "?"}   ← ${f}`);
}

const faltan = ["entrada", "acto", "huella"].filter((a) => !encontrados[a]);
if (faltan.length) console.warn(`\n  ⚠ falta(n): ${faltan.join(", ")} — el manifiesto queda incompleto`);

const items = {};
for (const acto of ["entrada", "acto", "huella"]) {
  if (encontrados[acto]) items[FORMATO[acto]] = encontrados[acto];
}
await writeFile(join(dir, "manifest.json"), JSON.stringify({
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
  generado_en: "higgsfield.ai (web, unlimited)",
  model: "gpt_image_2",
  resolution: "2k",
  quality: "high",
  costo_creditos: 0,
  fecha: args.fecha || new Date().toISOString().slice(0, 10),
  estrena: mito.estrena || [],
  items,
}, null, 2) + "\n");

console.log(`\n  manifiesto → ${join(dir, "manifest.json")}`);
if (!faltan.length && !args["conservar-bandeja"]) {
  await rm(inbox, { recursive: true, force: true });
  console.log(`  bandeja vaciada`);
}
console.log(`\n  publicar al sitio:  npm run images:apply:triptych -- --slug ${slug} --dir ${dir}`);
