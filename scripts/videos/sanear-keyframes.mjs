#!/usr/bin/env node
// Limpia los restos de la tuberia vieja en un mito ya rehecho con spec:
//   · borra los keyframes huerfanos (ids que no estan en la spec, p. ej. los
//     `b1a.reuse.jpg` reciclados entre mitos, que sobreviven al --force porque
//     tienen otro id y luego confunden al auditor y al montaje);
//   · vacia `reusadas` en bloques.json, que declaraba bloques tomando la
//     imagen del triptico editorial en vez del keyframe propio.
//
//   node scripts/videos/sanear-keyframes.mjs <spec.mjs> [--dry-run]
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const specPath = process.argv[2];
const dry = process.argv.includes("--dry-run");
if (!specPath) { console.error("uso: sanear-keyframes.mjs <spec.mjs> [--dry-run]"); process.exit(1); }

const spec = await import(pathToFileURL(path.resolve(specPath)).href);
const dir = path.join("content/videos", spec.OUT_DIR);
const ids = new Set(spec.ITEMS.map((i) => i.id));

const huerfanos = fs.existsSync(dir)
  ? fs.readdirSync(dir).filter((f) => {
      if (f.endsWith(".json")) return false;
      const tag = path.basename(f, path.extname(f)).replace(/\.crop-9x16$/, "");
      return !ids.has(tag);
    })
  : [];
for (const f of huerfanos) {
  console.log(`${dry ? "[dry] " : ""}borrar huerfano  ${path.join(dir, f)}`);
  if (!dry) fs.unlinkSync(path.join(dir, f));
}

const bj = path.join(path.dirname(dir), "bloques.json");
if (fs.existsSync(bj)) {
  const j = JSON.parse(fs.readFileSync(bj, "utf8"));
  const n = (j.reusadas || []).length;
  if (n) {
    console.log(`${dry ? "[dry] " : ""}vaciar reusadas  ${bj}  (${n})`);
    if (!dry) {
      j.reusadas = [];
      j.generacion_actual = { provider: "openai", model: "gpt-image-2", spec: specPath };
      fs.writeFileSync(bj, JSON.stringify(j, null, 2) + "\n");
    }
  }
}
console.log(`${spec.SPEC_NAME}: ${huerfanos.length} huerfanos, spec con ${ids.size} ids`);
