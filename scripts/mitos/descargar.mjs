#!/usr/bin/env node
/**
 * Baja a la bandeja los .png nativos de generaciones hechas en higgsfield.ai.
 *
 * La galería de la web sirve las imágenes a través de un proxy con la URL
 * firmada en el query string, que el navegador no deja leer. Pero el nombre del
 * archivo nativo sí es legible y es determinista —`hf_<fecha>_<hora>_<job>.png`—,
 * así que basta con sacar esos tres campos del DOM y reconstruir la ruta.
 * Sale mucho más barato que pedirle el historial completo a la API, que
 * devuelve el prompt entero de cada trabajo.
 *
 *   node scripts/mitos/descargar.mjs --slug la-aparicion-del-hombre \
 *     --ids "20260823|072548|ab7c...,20260823|073010|cd12..."
 */
import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const args = Object.fromEntries(
  process.argv.slice(2).reduce((acc, a, i, arr) => {
    if (a.startsWith("--")) acc.push([a.slice(2), arr[i + 1]?.startsWith("--") ? true : arr[i + 1]]);
    return acc;
  }, [])
);

const USER = args.user || "user_3H5pyS3mWMYbD5GWsIvBNlM1R3F";
const CDN = args.cdn || "https://d8j0ntlcm91z4.cloudfront.net";
const destino = args.destino || join("content/mitos-visuales/_inbox", args.slug);
await mkdir(destino, { recursive: true });

const ids = String(args.ids).split(",").map((s) => s.trim()).filter(Boolean);
for (const id of ids) {
  const [fecha, hora, job] = id.split("|");
  const nombre = `hf_${fecha}_${hora}_${job}.png`;
  const res = await fetch(`${CDN}/${USER}/${nombre}`);
  if (!res.ok) {
    console.error(`  ✗ ${job.slice(0, 8)} — HTTP ${res.status}`);
    continue;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(join(destino, nombre), buf);
  console.log(`  ✔ ${job.slice(0, 8)}  ${(buf.length / 1024 / 1024).toFixed(1)} MB → ${destino}`);
}
