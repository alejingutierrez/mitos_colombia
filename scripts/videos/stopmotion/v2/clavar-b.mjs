// Clavar B al plató de A: como la máscara de la API es una pista y no un
// cerrojo (medido: fuera de la máscara A y B difieren 6,2 con ella y 7,0 sin
// ella), la única forma de que A y B compartan el decorado píxel a píxel es
// componerlo: dentro del rectángulo editable manda B, fuera manda A, con un
// borde difuminado para que la costura no se vea.
//
//   node scripts/videos/stopmotion/v2/clavar-b.mjs --spec P13.json --dir <planos-out> [--pluma 48]
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { rootDir } from "../img.mjs";
import { cargarPlano } from "./comun.mjs";
const args = process.argv.slice(2);
const flag = (n, d = null) => (args.indexOf(n) === -1 ? d : args[args.indexOf(n) + 1]);
const p = await cargarPlano(path.resolve(rootDir, flag("--spec")));
const dir = path.resolve(rootDir, flag("--dir"), p.plano);
const pluma = Number(flag("--pluma", 48));
const A = path.join(dir, "A.jpg"), B = path.join(dir, "B.jpg");
const { width: W, height: H } = await sharp(A).metadata();
const m = p.mascara;
const x0 = Math.round(m.x0 * W), y0 = Math.round(m.y0 * H), x1 = Math.round(m.x1 * W), y1 = Math.round(m.y1 * H);
// Máscara suave: 255 dentro del rectángulo, difuminada `pluma` px hacia fuera.
const dura = Buffer.alloc(W * H, 0);
for (let y = y0; y < y1; y++) dura.fill(255, y * W + x0, y * W + x1);
const suaveBuf = await sharp(dura, { raw: { width: W, height: H, channels: 1 } }).blur(pluma / 3).toColourspace("b-w").raw().toBuffer();
const canales = suaveBuf.length / (W * H);
const suave = canales === 1 ? suaveBuf : Buffer.from(Array.from({ length: W * H }, (_, i) => suaveBuf[i * canales]));
const libre = path.join(dir, "B-libre.jpg");
if (!(await fs.access(libre).then(() => true).catch(() => false))) await fs.copyFile(B, libre);
const a = await sharp(A).raw().toBuffer(), b = await sharp(libre).raw().toBuffer();
const out = Buffer.allocUnsafe(W * H * 3);
for (let i = 0, q = 0; i < W * H; i++, q += 3) { const t = suave[i] / 255; for (let c = 0; c < 3; c++) out[q + c] = Math.round(a[q + c] + t * (b[q + c] - a[q + c])); }
await sharp(out, { raw: { width: W, height: H, channels: 3 } }).jpeg({ quality: 95 }).toFile(B);
console.log(`${p.plano}: B clavada al plató de A (rectángulo ${x0},${y0}-${x1},${y1}, pluma ${pluma}px) → B.jpg (la libre queda en B-libre.jpg)`);
