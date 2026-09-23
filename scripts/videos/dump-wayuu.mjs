// Vuelca todo lo que hace falta para escribir el spec de escenas de un mito
// wayúu: los bloques del guion, los nudos y deslindes del acta, las entidades
// del inventario V4 con sus sensibilidades, y qué fichas de la biblia existen
// ya en disco para cada una.
//
//   node scripts/videos/dump-wayuu.mjs <slug> [slug...]
import fs from "node:fs"; import path from "node:path";

const G = "docs/videos/wayuu/mvp-guiones", A = "docs/videos/wayuu/actas";
const INV = ".claude/worktrees/wayuu-myths-methodology-b88ddd/content/mitos-visuales/wayuu.v4.inventario.json";
const BIB = "content/videos/wayuu/biblia";
const inv = JSON.parse(fs.readFileSync(INV, "utf8"));
const fichas = new Set(fs.readdirSync(BIB).map((f) => f.replace(/\.jpg$/, "")));

for (const slug of process.argv.slice(2)) {
  const gs = fs.readdirSync(G).filter((f) => f.startsWith(`guion-${slug}-v`)).sort();
  const g = JSON.parse(fs.readFileSync(path.join(G, gs.at(-1)), "utf8"));
  const a = JSON.parse(fs.readFileSync(path.join(A, `acta-${slug}.json`), "utf8"));
  const m = inv.mitos[slug] || { hereda: [], propias: [] };
  console.log(`\n${"=".repeat(78)}\n### ${g.titulo}  ·  slug ${slug}  ·  N=${g.lines.length}  ·  ${g.lines.length * 4} cuadros`);
  console.log(`CITA: ${g.nota_cita || "—"}`);
  console.log(`\nBLOQUES:`);
  for (const l of g.lines) console.log(`  ${l.bloque} [${(l.cubre || []).join(",")}] ${l.text}`);
  console.log(`\nDESLINDES:`);
  for (const d of a.deslindes) console.log(`  - ${d}`);
  const hay = (id) => (fichas.has(id) ? "" : "  ← SIN FICHA");
  console.log(`\nHEREDA (${(m.hereda || []).length}):`);
  for (const h of m.hereda || []) console.log(`  ${h}${hay(h)}`);
  console.log(`\nPROPIAS (${(m.propias || []).length}):`);
  for (const p of m.propias || []) {
    const s = [p.sensibilidad && `SENSIBILIDAD:${p.sensibilidad}`, p.decision].filter(Boolean).join(" · ");
    console.log(`  ${p.id} — ${p.nombre} [${p.categoria}] ${s}${hay(p.id)}`);
    if (p.nota_visual) console.log(`      nota: ${p.nota_visual}`);
    if (p.nota) console.log(`      nota: ${p.nota}`);
    if (p.estados) console.log(`      estados: ${p.estados.join(", ")}`);
  }
  if (m.sin_resolver?.length) console.log(`\nSIN RESOLVER: ${m.sin_resolver.join(", ")}`);
}
