// Genera las poses CLAVE de un plano, en cadena corta (cada clave desde la
// anterior + el primer fotograma como ancla de identidad) y las deja ya
// colocadas en la rejilla de la escalera, para que `escalera.mjs` sólo tenga
// que rellenar entre claves vecinas.
//
//   node scripts/videos/stopmotion/claves.mjs --plano p.json --dir <carpeta> --niveles 5
import fs from "node:fs/promises";
import path from "node:path";
import { genImage, rootDir } from "./img.mjs";
import { promptClave } from "./prompts.mjs";

const args = process.argv.slice(2);
const flag = (n, d = null) => (args.indexOf(n) === -1 ? d : args[args.indexOf(n) + 1]);
const plano = JSON.parse(await fs.readFile(path.resolve(rootDir, flag("--plano")), "utf8"));
const dir = path.resolve(rootDir, flag("--dir"));
const D = 2 ** Number(flag("--niveles", 5));
const claves = plano.poses.claves || [];
if (!claves.length) throw new Error("el plano no tiene poses.claves");

const nombre = (i) => path.join(dir, `f${String(i).padStart(4, "0")}.jpg`);
const existe = (p) => fs.access(p).then(() => true).catch(() => false);
await fs.mkdir(dir, { recursive: true });
if (!(await existe(nombre(0)))) await fs.copyFile(path.join(dir, "A.jpg"), nombre(0));
if (!(await existe(nombre(D)))) await fs.copyFile(path.join(dir, "B.jpg"), nombre(D));

// Las claves reparten la rejilla en tramos iguales: con 3 claves internas y
// 32 pasos, caen en 8, 16 y 24.
const paso = D / (claves.length + 1);
let usd = 0;
for (let k = 0; k < claves.length; k++) {
  const idx = Math.round((k + 1) * paso);
  if (await existe(nombre(idx))) { console.log(`clave ${k + 1} (f${idx}): ya está`); continue; }
  const previa = k === 0 ? nombre(0) : nombre(Math.round(k * paso));
  const r = await genImage({
    prompt: promptClave(plano, { i: k + 1, total: claves.length + 1, pose: claves[k], ms: (idx / D) * plano.duracion_s * 1000 }),
    refs: [previa, nombre(0)],
    outPath: nombre(idx),
    quality: flag("--quality", "high"),
    size: flag("--size", "1088x1920"),
    tag: `${plano.plano}/clave${k + 1}`,
  });
  usd += r.usd;
  console.log(`clave ${k + 1} → f${String(idx).padStart(4, "0")}  ${(r.ms / 1000).toFixed(0)}s  $${r.usd.toFixed(3)}`);
}
console.log(`claves listas · $${usd.toFixed(2)}`);
