// Genera las dos anclas de un plano: fotograma A (inicio) y B (fin).
//   node scripts/videos/stopmotion/anclas.mjs --plano <ruta.json> [--quality high] [--solo a|b]
import fs from "node:fs/promises";
import path from "node:path";
import { genImage, rootDir } from "./img.mjs";
import { promptInicio, promptFin } from "./prompts.mjs";

const args = process.argv.slice(2);
const flag = (n, d = null) => (args.indexOf(n) === -1 ? d : args[args.indexOf(n) + 1]);
const planoPath = path.resolve(rootDir, flag("--plano"));
const plano = JSON.parse(await fs.readFile(planoPath, "utf8"));
const quality = flag("--quality", "high");
const size = flag("--size", "1088x1920");
const solo = flag("--solo");
const outDir = path.join(path.dirname(planoPath), "..", plano.plano, `anclas-${quality}`);
const ficha = path.resolve(rootDir, plano.refs_ficha[0]);

if (solo !== "b") {
  const a = path.join(outDir, "A.jpg");
  const r = await genImage({ prompt: promptInicio(plano), refs: [ficha], outPath: a, quality, size, tag: `${plano.plano}/A/${quality}` });
  console.log(`A  ${(r.ms / 1000).toFixed(1)}s  $${r.usd.toFixed(4)}  ${path.relative(rootDir, a)}`);
}
if (solo !== "a") {
  const a = path.join(outDir, "A.jpg");
  const b = path.join(outDir, "B.jpg");
  const r = await genImage({ prompt: promptFin(plano), refs: [a, ficha], outPath: b, quality, size, tag: `${plano.plano}/B/${quality}` });
  console.log(`B  ${(r.ms / 1000).toFixed(1)}s  $${r.usd.toFixed(4)}  ${path.relative(rootDir, b)}`);
}
