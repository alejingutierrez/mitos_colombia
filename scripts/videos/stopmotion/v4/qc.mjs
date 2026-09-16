// QC del carril v4 (cuadro completo, sin recortes).
//
// Como aquí NO hay plató clavado, lo que hay que vigilar es justo lo que el
// método regala: la DERIVA. Tres números por cadena:
//   · deriva de decorado: diferencia media entre fotogramas consecutivos en las
//     bandas donde no hay acción (arriba: cielo y techos; abajo: suelo);
//   · deriva acumulada: distancia del fotograma N al PRIMERO en esas bandas
//     (si crece sin parar, el decorado se está yendo);
//   · avance: distancia de cada fotograma al último, que debe bajar.
//
//   node scripts/videos/stopmotion/v4/qc.mjs --dir <v4> [--desde 1] [--hasta 24]
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
const args = process.argv.slice(2);
const flag = (n, d = null) => (args.indexOf(n) === -1 ? d : args[args.indexOf(n) + 1]);
const dir = path.resolve(flag("--dir"));
const frames = path.join(dir, "frames");
const files = (await fs.readdir(frames)).filter((f) => /^f\d{3}\.jpg$/.test(f)).sort()
  .filter((f) => { const i = Number(f.slice(1, 4)); return i >= Number(flag("--desde", 1)) && i <= Number(flag("--hasta", 999)); });
const W = 216, H = 384;
const g = async (f) => sharp(path.join(frames, f)).resize(W, H, { fit: "fill" }).greyscale().raw().toBuffer();
const seq = []; for (const f of files) seq.push(await g(f));
const banda = (a, b) => { let s = 0, n = 0; for (const [y0, y1] of [[0, Math.round(H * 0.22)], [Math.round(H * 0.9), H]]) for (let y = y0; y < y1; y++) for (let x = 0; x < W; x++) { s += Math.abs(a[y * W + x] - b[y * W + x]); n++; } return s / n; };
const mad = (a, b) => { let s = 0; for (let i = 0; i < a.length; i++) s += Math.abs(a[i] - b[i]); return s / a.length; };
const vecinos = seq.slice(1).map((x, i) => banda(seq[i], x));
const acum = seq.map((x) => banda(seq[0], x));
const avance = seq.map((x) => mad(x, seq.at(-1)));
const cambio = seq.slice(1).map((x, i) => mad(seq[i], x));
let subidas = 0; for (let i = 1; i < avance.length; i++) if (avance[i] > avance[i - 1] + 2) subidas++;
console.log(`${files.length} fotogramas (${files[0]} → ${files.at(-1)})`);
console.log(`deriva de decorado entre vecinos: media ${(vecinos.reduce((a, b) => a + b, 0) / vecinos.length).toFixed(2)} · máx ${Math.max(...vecinos).toFixed(2)}   (bajo 1,5 no se nota)`);
console.log(`deriva acumulada contra el primero: ${acum.map((v) => v.toFixed(1)).join(" ")}`);
console.log(`cambio total entre vecinos: media ${(cambio.reduce((a, b) => a + b, 0) / cambio.length).toFixed(1)} · máx ${Math.max(...cambio).toFixed(1)}`);
console.log(`avance hacia el último: ${avance.map((v) => v.toFixed(0)).join(" ")} · retrocesos ${subidas}`);
