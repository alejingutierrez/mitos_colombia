#!/usr/bin/env node
/**
 * Arma una hoja de contactos numerada con varias generaciones.
 *
 * Sirve para el caso en que el emparejamiento tag↔imagen se perdió (una tanda
 * que se trabó, una recarga a mitad de camino): en vez de adivinar por orden de
 * llegada —que con dos generaciones en vuelo no es fiable— se miran todas
 * juntas y se asigna a ojo. Una imagen en vez de catorce.
 *
 *   node scripts/mitos/hoja-contactos.mjs --ids "a,b,c" --salida /tmp/hoja.jpg
 */
import { mkdtemp, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import sharp from "sharp";

const args = Object.fromEntries(
  process.argv.slice(2).reduce((acc, a, i, arr) => {
    if (a.startsWith("--")) acc.push([a.slice(2), arr[i + 1]?.startsWith("--") ? true : arr[i + 1]]);
    return acc;
  }, [])
);
const USER = args.user || "user_3H5pyS3mWMYbD5GWsIvBNlM1R3F";
const CDN = args.cdn || "https://d8j0ntlcm91z4.cloudfront.net";
const CEL = Number(args.celda || 300);
const COLS = Number(args.cols || 5);

const ids = String(args.ids).split(",").map((s) => s.trim()).filter(Boolean);
const dir = args.cache || (await mkdtemp(join(tmpdir(), "hoja-")));
const celdas = [];

for (let i = 0; i < ids.length; i++) {
  const [fecha, hora, job] = ids[i].split("|");
  const res = await fetch(`${CDN}/${USER}/hf_${fecha}_${hora}_${job}.png`);
  if (!res.ok) { console.error(`  ✗ ${job.slice(0, 8)} HTTP ${res.status}`); continue; }
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(join(dir, `${i}.png`), buf);
  const img = await sharp(buf).resize(CEL, CEL, { fit: "contain", background: "#111" }).toBuffer();
  // El número va quemado en la celda: es lo que permite decir "la 7 es b5a".
  const etiqueta = Buffer.from(
    `<svg width="${CEL}" height="34"><rect width="${CEL}" height="34" fill="#000" opacity="0.75"/>` +
    `<text x="8" y="24" font-family="monospace" font-size="22" fill="#fff">${i} · ${job.slice(0, 8)}</text></svg>`
  );
  celdas.push(await sharp(img).composite([{ input: etiqueta, top: CEL - 34, left: 0 }]).toBuffer());
  console.log(`  ${String(i).padStart(2)} ${job.slice(0, 8)}`);
}

const filas = Math.ceil(celdas.length / COLS);
const hoja = sharp({ create: { width: COLS * CEL, height: filas * CEL, channels: 3, background: "#111" } });
await hoja.composite(celdas.map((input, i) => ({
  input, left: (i % COLS) * CEL, top: Math.floor(i / COLS) * CEL,
}))).jpeg({ quality: 88 }).toFile(args.salida);
console.log(`\n  hoja de ${celdas.length} → ${args.salida}  (originales en ${dir})`);
