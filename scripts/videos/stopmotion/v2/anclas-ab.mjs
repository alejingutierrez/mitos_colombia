// Anclas A y B de un plano: A con el mundo atado por imagen; B como EDICIÓN de A.
//   node scripts/videos/stopmotion/v2/anclas-ab.mjs --spec <plano.json> --out <dir> [--que a|b|ambas] [--force]
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { genImage, rootDir } from "../img.mjs";
import { cargarPlano, promptA, promptB } from "./comun.mjs";

const args = process.argv.slice(2);
const flag = (n, d = null) => (args.indexOf(n) === -1 ? d : args[args.indexOf(n) + 1]);
const p = await cargarPlano(path.resolve(rootDir, flag("--spec")));
const out = path.resolve(rootDir, flag("--out"), p.plano);
const que = flag("--que", "ambas");
const force = args.includes("--force");
await fs.mkdir(out, { recursive: true });
const existe = (f) => fs.access(f).then(() => true).catch(() => false);
const refs = (p.refs || []).map((r) => path.resolve(rootDir, r.ruta));
for (const r of refs) if (!(await existe(r))) throw new Error(`falta la referencia ${r}`);

const A = path.join(out, "A.jpg"), Bp = path.join(out, "B.jpg");
if (que !== "b" && (force || !(await existe(A)))) {
  const r = await genImage({ prompt: promptA(p), refs, outPath: A, quality: "high", size: "1088x1920", tag: `v2/${p.plano}/A` });
  console.log(`${p.plano} A  ${(r.ms / 1000).toFixed(0)}s  $${r.usd.toFixed(3)}`);
}
// Máscara de edición para B: sólo la zona donde el estado cambia es editable; el
// resto del plató se conserva píxel a píxel. Sin esto, "la misma fotografía"
// era una petición y el modelo la interpretaba: movía bohíos y añadía cercas.
let mask = null;
if (p.mascara) {
  const { width: W, height: H } = await sharp(A).metadata();
  const m = p.mascara;
  const x0 = Math.round(m.x0 * W), y0 = Math.round(m.y0 * H), x1 = Math.round(m.x1 * W), y1 = Math.round(m.y1 * H);
  const hueco = Buffer.alloc((x1 - x0) * (y1 - y0) * 4, 0);
  mask = path.join(out, "mascara-B.png");
  await sharp({ create: { width: W, height: H, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 1 } } })
    .composite([{ input: hueco, raw: { width: x1 - x0, height: y1 - y0, channels: 4 }, left: x0, top: y0, blend: "dest-out" }])
    .png().toFile(mask);
  console.log(`${p.plano} máscara: editable x ${m.x0}-${m.x1}, y ${m.y0}-${m.y1}`);
}
if (que !== "a" && p.B && (force || !(await existe(Bp)))) {
  const r = await genImage({ prompt: promptB(p), refs: [A, ...refs.slice(0, 3)], outPath: Bp, quality: "high", size: "1088x1920", mask, tag: `v2/${p.plano}/B` });
  console.log(`${p.plano} B  ${(r.ms / 1000).toFixed(0)}s  $${r.usd.toFixed(3)}`);
}
