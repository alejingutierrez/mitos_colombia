#!/usr/bin/env node
/**
 * ¿Cada mito tiene cuadros para sostener un video de 80 a 180 s?
 *
 * La regla (usuario, 2026-09-16): 16 a 36 cuadros por mito, a 2 por bloque y
 * ~5 s por clip. Es decir N entre 8 y 18 bloques. El largo lo decide lo que el
 * canon sostenga: 16 no es una meta a la que rellenar, es un piso por debajo
 * del cual el relato no da para un video.
 *
 *   node scripts/videos/auditar-cuadros.mjs
 */
import fs from "node:fs";
import path from "node:path";

const MIN = 16, MAX = 36;
const filas = [];

// Fuente por comunidad, en orden de autoridad: el guion vivo manda sobre el
// inventario en disco, porque es el que fija cuántos bloques hay.
for (const dir of ["docs/videos/muiscas/mvp-guiones", "docs/videos/nasa-paeces/mvp-guiones"]) {
  if (!fs.existsSync(dir)) continue;
  const com = dir.split("/")[2];
  const vivos = new Map();
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".json"))) {
    const g = JSON.parse(fs.readFileSync(path.join(dir, f), "utf8"));
    if (!(g.lines || []).length) continue;
    const mito = g.mito || f.replace(/^guion-|-v\d+(?:-[\w-]+)?\.json$/g, "");
    const v = Number((f.match(/-v(\d+)/) || [0, 0])[1]);
    if (!vivos.has(mito) || v > vivos.get(mito).v) vivos.set(mito, { v, n: g.lines.length * 2 });
  }
  for (const [m, { n }] of vivos) filas.push([com, m, n, "guion vivo"]);
}

// Wayuu: el plan de preproducción declara los bloques
for (const p of fs.existsSync("content/videos/wayuu/videos") ? fs.readdirSync("content/videos/wayuu/videos") : []) {
  const fp = `content/videos/wayuu/videos/${p}/preproduccion-01/plan.json`;
  if (!fs.existsSync(fp)) continue;
  filas.push(["wayuu", p, (JSON.parse(fs.readFileSync(fp, "utf8")).blocks || []).length * 2, "plan"]);
}

// Ette Ennaka: cuadros seleccionados en la campaña
const sel = "content/videos/chimila/keyframes/produccion-api-03/selection.complete.v1.json";
if (fs.existsSync(sel))
  for (const x of JSON.parse(fs.readFileSync(sel, "utf8")).myths)
    filas.push(["ette-ennaka", x.slug, (x.selected || []).length, "selección"]);

const bajos = filas.filter(([, , n]) => n < MIN);
const altos = filas.filter(([, , n]) => n > MAX);
const porCom = {};
for (const [c, , n] of filas) {
  porCom[c] ??= { t: 0, b: 0, a: 0 };
  porCom[c].t++;
  if (n < MIN) porCom[c].b++; else if (n > MAX) porCom[c].a++;
}

console.log(`Regla: ${MIN}-${MAX} cuadros por mito ⇒ videos de 80-180 s\n`);
for (const [c, { t, b, a }] of Object.entries(porCom))
  console.log(`  ${c.padEnd(14)} ${String(t - b - a).padStart(3)}/${t} en rango${b ? ` · ${b} por debajo` : ""}${a ? ` · ${a} por encima` : ""}`);

if (bajos.length) {
  console.log(`\n  Por debajo de ${MIN} — no dan para un video:`);
  for (const [c, m, n] of bajos.sort((x, y) => x[2] - y[2]))
    console.log(`    ${c.padEnd(13)} ${m.padEnd(34)} ${String(n).padStart(2)} cuadros ≈${n * 5}s · faltan ${MIN - n}`);
}
if (altos.length) {
  console.log(`\n  Por encima de ${MAX} — pasan de 180 s:`);
  for (const [c, m, n] of altos) console.log(`    ${c.padEnd(13)} ${m.padEnd(34)} ${n} cuadros`);
}
process.exit(bajos.length || altos.length ? 1 : 0);
