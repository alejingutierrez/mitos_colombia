// Repara las costuras: un fotograma PUENTE entre dos vecinos que saltan.
//
// Las hojas de producción reparten el gesto de maravilla por dentro, pero entre
// hoja y hoja hay un salto: cada hoja vuelve a dibujar al personaje y la pose no
// enlaza. Medido, esas tres costuras eran el único paso por encima de 3,0 en
// todo el plano. En vez de rehacer nada, se genera un fotograma intermedio en
// cada costura —anclado por sus dos vecinos— y se renumera la secuencia.
//
//   node scripts/videos/stopmotion/puente.mjs --plano p.json --dir <recortes> --out <dir> --entre 8,17,26
import fs from "node:fs/promises";
import path from "node:path";
import { genImage, rootDir } from "./img.mjs";
import { promptPuenteRecorte } from "./prompts.mjs";

const args = process.argv.slice(2);
const flag = (n, d = null) => (args.indexOf(n) === -1 ? d : args[args.indexOf(n) + 1]);
const plano = JSON.parse(await fs.readFile(path.resolve(rootDir, flag("--plano")), "utf8"));
const dir = path.resolve(rootDir, flag("--dir"));
const out = path.resolve(rootDir, flag("--out"));
const entre = String(flag("--entre", "")).split(",").filter(Boolean).map(Number);
await fs.mkdir(out, { recursive: true });

const files = (await fs.readdir(dir)).filter((f) => /^f\d{4}\.png$/.test(f)).sort();
const puentes = new Map();
let usd = 0;
await Promise.all(
  entre.map(async (i) => {
    const a = path.join(dir, files[i]);
    const b = path.join(dir, files[i + 1]);
    const tmp = path.join(out, `.puente-${i}.png`);
    const r = await genImage({
      prompt: promptPuenteRecorte(plano),
      refs: [a, b],
      outPath: tmp,
      quality: flag("--quality", "high"),
      size: flag("--size", "1088x1920"),
      background: "transparent",
      formato: "png",
      tag: `${plano.plano}/puente/${i}`,
    });
    usd += r.usd;
    puentes.set(i, tmp);
    console.log(`  puente ${i}→${i + 1}  ${(r.ms / 1000).toFixed(0)}s  $${r.usd.toFixed(3)}`);
  })
);

// Renumerar: la secuencia final lleva los originales y los puentes intercalados.
let n = 0;
for (let i = 0; i < files.length; i++) {
  await fs.copyFile(path.join(dir, files[i]), path.join(out, `f${String(n++).padStart(4, "0")}.png`));
  if (puentes.has(i)) {
    await fs.rename(puentes.get(i), path.join(out, `f${String(n++).padStart(4, "0")}.png`));
  }
}
console.log(`${n} fotogramas (${puentes.size} puentes) · $${usd.toFixed(2)} → ${path.relative(process.cwd(), out)}`);
