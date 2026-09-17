// Vuelve a pedir sólo los cuadros de una spec que no quedaron en disco.
//
//   node scripts/videos/completar-keyframes.mjs <spec.mjs>
//
// Existe porque la API devuelve `terminated` de vez en cuando —un cuadro de
// cada cuarenta, sin patrón— y con lotes de mil imágenes eso deja huecos que
// luego hay que cazar a mano. Imprime la lista y no genera nada si no falta
// ninguno, así se puede encadenar detrás de cada generación.
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { spawnSync } from "node:child_process";

const specPath = process.argv[2];
if (!specPath) {
  console.error("uso: completar-keyframes.mjs <spec.mjs>");
  process.exit(1);
}
const spec = await import(pathToFileURL(path.resolve(specPath)).href);
const dir = path.join("content/videos", spec.OUT_DIR);
const enDisco = new Set(fs.existsSync(dir) ? fs.readdirSync(dir) : []);
const faltan = spec.ITEMS.map((i) => i.id).filter((id) => !enDisco.has(`${id}.jpg`));

if (!faltan.length) {
  console.log(`[completar] ${spec.SPEC_NAME}: nada que rellenar`);
  process.exit(0);
}
console.log(`[completar] ${spec.SPEC_NAME}: faltan ${faltan.length} — ${faltan.join(", ")}`);
const r = spawnSync(
  process.execPath,
  ["scripts/videos/generate-keyframes.mjs", "--spec", specPath, "--only", faltan.join(","), "--force"],
  { stdio: "inherit" },
);
process.exit(r.status ?? 1);
