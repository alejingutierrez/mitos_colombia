// Plancha de planificación + sus tiras: la acción entera en una imagen, y luego
// una tira por hoja de producción.
//
//   node scripts/videos/stopmotion/plancha.mjs --plano p.json --master A.jpg --out <dir>
//     [--cols 9] [--filas 4] [--size 2160x1712]
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { genImage, rootDir } from "./img.mjs";
import { promptPlancha } from "./prompts.mjs";

const args = process.argv.slice(2);
const flag = (n, d = null) => (args.indexOf(n) === -1 ? d : args[args.indexOf(n) + 1]);
const plano = JSON.parse(await fs.readFile(path.resolve(rootDir, flag("--plano")), "utf8"));
const master = path.resolve(rootDir, flag("--master"));
const dir = path.resolve(rootDir, flag("--out"));
const cols = Number(flag("--cols", 9));
const filas = Number(flag("--filas", 4));
const size = flag("--size", "2160x1712");
const [W, H] = size.split("x").map(Number);
const celdas = plano.poses.hoja.slice(0, filas * cols);

await fs.mkdir(dir, { recursive: true });
const outPath = path.join(dir, "plancha.png");
const r = await genImage({
  prompt: promptPlancha(plano, { filas, cols, celdas }),
  refs: [master],
  outPath,
  quality: flag("--quality", "high"),
  size,
  tag: `${plano.plano}/plancha`,
});
console.log(`plancha ${size} · ${celdas.length} poses · ${(r.ms / 1000).toFixed(0)}s · $${r.usd.toFixed(4)}`);

const fh = Math.floor(H / filas);
for (let f = 0; f < filas; f++) {
  await sharp(outPath)
    .extract({ left: 0, top: f * fh, width: W, height: fh })
    .png()
    .toFile(path.join(dir, `tira-${f}.png`));
}
console.log(`${filas} tiras de ${cols} poses → ${path.relative(process.cwd(), dir)}/tira-N.png`);
