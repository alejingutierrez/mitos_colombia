// Dos números que deciden si un plano interpolado sirve:
//
//  1. DERIVA DE PLATÓ: cuánto cambia el fondo entre fotograma y fotograma. Si el
//     decorado "respira", el clip parpadea y no hay montaje que lo salve.
//  2. REPARTO DEL MOVIMIENTO: cuánto cambia el cuadro entero en cada paso. Si la
//     curva tiene un pico, el modelo metió todo el movimiento en un salto y el
//     resto del clip está congelado.
//
//   node scripts/videos/stopmotion/qc.mjs --dir <carpeta> [--banda 0.28]
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const args = process.argv.slice(2);
const flag = (n, d = null) => (args.indexOf(n) === -1 ? d : args[args.indexOf(n) + 1]);
const dir = path.resolve(flag("--dir"));
const banda = Number(flag("--banda", 0.28)); // franja superior = cielo/fondo, sin figura

const files = (await fs.readdir(dir)).filter((f) => /^f\d{4}\.jpg$/.test(f)).sort();
const W = 216, H = 384;
const grises = await Promise.all(
  files.map((f) => sharp(path.join(dir, f)).resize(W, H, { fit: "fill" }).greyscale().raw().toBuffer())
);
const mad = (a, b, y0, y1) => {
  let s = 0, n = 0;
  for (let y = y0; y < y1; y++) for (let x = 0; x < W; x++) { s += Math.abs(a[y * W + x] - b[y * W + x]); n++; }
  return s / n;
};
const filas = [];
for (let i = 1; i < grises.length; i++) {
  filas.push({
    par: `${files[i - 1]}→${files[i]}`,
    todo: mad(grises[i - 1], grises[i], 0, H),
    fondo: mad(grises[i - 1], grises[i], 0, Math.floor(H * banda)),
  });
}
const prom = (k) => filas.reduce((a, f) => a + f[k], 0) / filas.length;
const max = (k) => Math.max(...filas.map((f) => f[k]));
console.log(`\n  ${files.length} fotogramas en ${path.basename(dir)}\n`);
console.log("  paso                 cuadro   fondo");
for (const f of filas) console.log(`  ${f.par.padEnd(20)} ${f.todo.toFixed(2).padStart(6)} ${f.fondo.toFixed(2).padStart(7)}`);
console.log(`\n  movimiento medio ${prom("todo").toFixed(2)} · pico ${max("todo").toFixed(2)} · irregularidad ${(max("todo") / prom("todo")).toFixed(2)}×`);
console.log(`  deriva de plató  media ${prom("fondo").toFixed(2)} · pico ${max("fondo").toFixed(2)}   (por debajo de ~1,5 el fondo no parpadea)`);
