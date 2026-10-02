// Prueba de control: la misma secuencia hecha EN CADENA (cada fotograma desde
// el anterior) en vez de por bisección. Sirve para medir la deriva: sin dos
// anclas que lo aten, ¿cuánto se va el plató y la identidad en N pasos?
//
//   node scripts/videos/stopmotion/cadena.mjs --plano p.json --dir <carpeta> --pasos 8 --desde A.jpg
import fs from "node:fs/promises";
import path from "node:path";
import { genImage, rootDir } from "./img.mjs";
import { promptCadena } from "./prompts.mjs";

const args = process.argv.slice(2);
const flag = (n, d = null) => (args.indexOf(n) === -1 ? d : args[args.indexOf(n) + 1]);
const plano = JSON.parse(await fs.readFile(path.resolve(rootDir, flag("--plano")), "utf8"));
const dir = path.resolve(rootDir, flag("--dir"));
const pasos = Number(flag("--pasos", 8));
const desde = path.resolve(rootDir, flag("--desde"));
await fs.mkdir(dir, { recursive: true });

const nombre = (i) => path.join(dir, `f${String(i).padStart(4, "0")}.jpg`);
await fs.copyFile(desde, nombre(0));

// El avance de cada paso se reparte por igual: el prompt describe la fracción
// del gesto que toca a este fotograma, no el gesto completo.
const avanceDe = (i) =>
  `el gesto avanza un ${Math.round(100 / pasos)}% más hacia esta pose final, sólo esa fracción y ni un poco más: ${plano.poses.fin}`;

let usd = 0;
for (let i = 1; i <= pasos; i++) {
  const r = await genImage({
    prompt: promptCadena(plano, { paso: i, total: pasos, avance: avanceDe(i) }),
    refs: [nombre(i - 1)],
    outPath: nombre(i),
    quality: flag("--quality", "high"),
    size: flag("--size", "1088x1920"),
    tag: `${plano.plano}/cadena/f${i}`,
  });
  usd += r.usd;
  console.log(`  f${i}/${pasos}  ${(r.ms / 1000).toFixed(0)}s  $${r.usd.toFixed(3)}`);
}
console.log(`cadena de ${pasos} pasos · $${usd.toFixed(2)}`);
