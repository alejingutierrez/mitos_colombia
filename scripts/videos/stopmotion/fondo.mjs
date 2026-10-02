// Plancha de fondo: N estados del decorado, registrados y con sólo lo que arde
// o se mece en movimiento.
//
// Tres pasos, y los tres hacen falta:
//  1. una hoja de N celdas del plató vacío, cambiando sólo el fuego y el humo;
//  2. registro contra la primera celda (el modelo redibuja y desplaza el set);
//  3. mediana + zona de acción: el decorado queda congelado píxel a píxel y
//     sólo la lumbre pasa fotograma a fotograma.
//
//   node scripts/videos/stopmotion/fondo.mjs --plano p.json --plato plato.jpg --out <dir> [--filas 2 --cols 2]
import fs from "node:fs/promises";
import path from "node:path";
import { spawnSync } from "node:child_process";
import sharp from "sharp";
import { genImage, rootDir } from "./img.mjs";
import { promptPlanchaFondo } from "./prompts.mjs";

const args = process.argv.slice(2);
const flag = (n, d = null) => (args.indexOf(n) === -1 ? d : args[args.indexOf(n) + 1]);
const specPath = path.resolve(rootDir, flag("--plano"));
const spec = JSON.parse(await fs.readFile(specPath, "utf8"));
const comunPath = path.join(path.dirname(specPath), "_comun.json");
const comun = await fs.readFile(comunPath, "utf8").then(JSON.parse).catch(() => ({}));
const plano = { ...comun, ...spec };
const plato = path.resolve(rootDir, flag("--plato"));
const dir = path.resolve(rootDir, flag("--out"));
const filas = Number(flag("--filas", 2));
const cols = Number(flag("--cols", 2));
const size = flag("--size", "2160x3840");
const [W, H] = size.split("x").map(Number);
const fondo = plano.fondo || {};
const tanda = Number(flag("--tanda", 0));
const celdas = (fondo.estados || []).slice(tanda * filas * cols, (tanda + 1) * filas * cols);
if (celdas.length !== filas * cols) throw new Error(`el plano necesita fondo.estados con ${filas * cols} entradas`);

const crudo = path.join(dir, "crudo");
await fs.mkdir(crudo, { recursive: true });
const hojaPath = path.join(crudo, `hoja-${tanda}.jpg`);
const r = await genImage({
  prompt: promptPlanchaFondo(plano, { filas, cols, celdas, mueve: fondo.mueve || "las llamas y el humo" }),
  refs: [plato],
  outPath: hojaPath,
  quality: flag("--quality", "high"),
  size,
  tag: `${plano.plano}/plancha-fondo`,
});
console.log(`plancha de fondo ${size} · ${celdas.length} estados · ${(r.ms / 1000).toFixed(0)}s · $${r.usd.toFixed(4)}`);

const cw = Math.floor(W / cols), ch = Math.floor(H / filas);
for (let i = 0; i < celdas.length; i++) {
  await sharp(hojaPath)
    .extract({ left: (i % cols) * cw, top: Math.floor(i / cols) * ch, width: cw, height: ch })
    .resize(1088, 1920, { fit: "fill", kernel: "lanczos3" })
    .jpeg({ quality: 95 })
    .toFile(path.join(crudo, `f${String(tanda * filas * cols + i).padStart(4, "0")}.jpg`));
}

if (args.includes("--solo-generar")) process.exit(0);
const corre = (script, extra) => {
  const res = spawnSync("node", [path.join(rootDir, "scripts/videos/stopmotion", script), ...extra], { encoding: "utf8" });
  if (res.status !== 0) throw new Error(res.stderr?.slice(-1500) || `${script} falló`);
  return res.stdout.trim().split("\n").filter((l) => !l.includes("compuestos")).join(" · ");
};
const alineado = path.join(dir, "alineado");
console.log(corre("alinear.mjs", ["--dir", crudo, "--out", alineado, "--margen", "0.05", "--lado", "0.45", "--alto", "0.30"]).split("\n").pop());
console.log(corre("estabilizar.mjs", ["--dir", alineado, "--out", dir, "--umbral", flag("--umbral", "26"), "--arriba", flag("--arriba", "60"), "--engorde", "8", "--vida", "0"]));
