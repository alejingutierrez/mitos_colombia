// QC del flipbook en tres escalas (guía §13): fotograma a fotograma, pares
// consecutivos y la secuencia a la cadencia de entrega.
//
// Como todos los fotogramas van sobre el MISMO plató, |fotograma − plató| es la
// silueta exacta del sujeto: de ahí salen la altura y el centroide por
// fotograma (si la altura sube y baja sin que la acción lo pida, es bombeo de
// escala), la distancia a la pose final (debe bajar) y el salto entre vecinos.
//
//   node scripts/videos/stopmotion/v3/qc-flipbook.mjs --dir <flipbook> --plato plato.jpg [--cadencia 12]
import fs from "node:fs/promises";
import path from "node:path";
import { spawnSync } from "node:child_process";
import sharp from "sharp";
const args = process.argv.slice(2);
const flag = (n, d = null) => (args.indexOf(n) === -1 ? d : args[args.indexOf(n) + 1]);
const fb = path.resolve(flag("--dir"));
const plato = path.resolve(flag("--plato"));
const cad = Number(flag("--cadencia", 12));
const frames = path.join(fb, "frames");
const files = (await fs.readdir(frames)).filter((f) => /^f\d{2}\.jpg$/.test(f)).sort();
const W = 272, H = 480;
const g = async (f) => sharp(f).resize(W, H, { fit: "fill" }).greyscale().raw().toBuffer();
const pl = await sharp(plato).resize(W, H, { fit: "fill" }).raw().toBuffer();
const seq = [];
for (const f of files) {
  const rgb = await sharp(path.join(frames, f)).resize(W, H, { fit: "fill" }).raw().toBuffer();
  let x0 = W, y0 = H, x1 = -1, y1 = -1, n = 0, sx = 0, sy = 0;
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) { const i = (y * W + x) * 3; const d = Math.max(Math.abs(rgb[i] - pl[i]), Math.abs(rgb[i + 1] - pl[i + 1]), Math.abs(rgb[i + 2] - pl[i + 2])); if (d > 40) { n++; sx += x; sy += y; if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; } }
  seq.push({ f, gris: await g(path.join(frames, f)), alto: (y1 - y0 + 1) / H, cx: n ? sx / n / W : 0, base: y1 / H, area: n / (W * H) });
}
const mad = (a, b) => { let s = 0; for (let i = 0; i < a.length; i++) s += Math.abs(a[i] - b[i]); return s / a.length; };
const fin = seq.at(-1).gris;
const dFin = seq.map((s) => mad(s.gris, fin));
const vec = seq.slice(1).map((s, i) => mad(seq[i].gris, s.gris));
let subidas = 0; for (let i = 1; i < dFin.length; i++) if (dFin[i] > dFin[i - 1] + 2) subidas++;
const altos = seq.map((s) => s.alto);
let bombeo = 0; for (let i = 2; i < altos.length; i++) { const a = altos[i - 2], b = altos[i - 1], c = altos[i]; if ((b > a + 0.03 && b > c + 0.03) || (b < a - 0.03 && b < c - 0.03)) bombeo++; }
console.log(`${files.length} fotogramas · altura del sujeto: ${altos.map((a) => a.toFixed(2)).join(" ")}`);
console.log(`base (pies) por fotograma: ${seq.map((s) => s.base.toFixed(2)).join(" ")}`);
console.log(`distancia a la pose final: ${dFin.map((v) => v.toFixed(0)).join(" ")} · subidas > 2: ${subidas}`);
console.log(`salto entre vecinos: media ${(vec.reduce((a, b) => a + b, 0) / vec.length).toFixed(1)} · máximo ${Math.max(...vec).toFixed(1)} en ${files[vec.indexOf(Math.max(...vec)) + 1]}`);
console.log(`bombeo de altura (picos aislados > 3%): ${bombeo}`);
const mp4 = (await fs.readdir(fb)).find((f) => f.endsWith("-flipbook.mp4"));
if (mp4) {
  const tira = path.join(fb, `tira-${cad}fps.jpg`);
  spawnSync("ffmpeg", ["-y", "-v", "error", "-t", "3", "-i", path.join(fb, mp4), "-vf", `fps=${cad},scale=150:-1,tile=12x3`, "-frames:v", "1", tira]);
  console.log(`tira a ${cad} dibujos/s (3 s) → ${path.relative(process.cwd(), tira)}`);
}
await fs.writeFile(path.join(fb, "qc.json"), JSON.stringify({ altos, bases: seq.map((s) => s.base), distancia_final: dFin, saltos: vec, subidas, bombeo }, null, 1));
