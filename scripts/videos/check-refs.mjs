// Comprueba que todas las referencias de biblia de una spec existen en disco.
// El generador ya aborta si falta alguna —y hace bien, porque generar con la
// continuidad rota es gastar créditos para nada—, pero eso pasa después de
// encolar. Esto lo caza antes.
//
//   node scripts/videos/check-refs.mjs <spec.mjs> [spec.mjs...]
import fs from "node:fs"; import path from "node:path";
import { pathToFileURL } from "node:url";
let malas = 0;
for (const p of process.argv.slice(2)) {
  const spec = await import(pathToFileURL(path.resolve(p)).href);
  const ids = new Set(spec.ITEMS.map((i) => i.id));
  const faltan = new Map();
  for (const it of spec.ITEMS) {
    for (const r of it.refs || []) {
      if (!r.includes("/")) {           // hermano de la misma spec
        if (!ids.has(r)) faltan.set(r, (faltan.get(r) || new Set()).add(it.id));
        continue;
      }
      if (!fs.existsSync(path.join("content/videos", `${r}.jpg`)))
        faltan.set(r, (faltan.get(r) || new Set()).add(it.id));
    }
  }
  if (!faltan.size) { console.log(`ok   ${spec.SPEC_NAME}`); continue; }
  malas += 1;
  console.log(`ROTO ${spec.SPEC_NAME}`);
  for (const [r, quien] of faltan) console.log(`   · ${r} — en ${[...quien].join(", ")}`);
}
process.exit(malas ? 1 : 0);
