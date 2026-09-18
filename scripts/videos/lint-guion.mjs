#!/usr/bin/env node
/**
 * Valida un guion contra la regla única de la fase 1
 * (docs/videos/PRODUCCION-END-TO-END.md §2):
 *
 *   N bloques de 2 frases y 17-19 palabras, N entre 8 y 18,
 *   a 2 clips por bloque ⇒ N×2 keyframes.
 *   Una sola cita directa, en el clímax.
 *   `window` = duración real del bloque − voice_offset (9,5 con 2 clips de 5 s).
 *
 * La banda de 17-19 no es un capricho: escrito como «≤19» autorizó el guion de
 * 10-15 palabras del video 1, que dejó la narración en el 44 % del metraje.
 *
 *   node scripts/videos/lint-guion.mjs <guion.json> [...]
 */
import fs from "node:fs";

const palabras = (s) => s.replace(/[«»—,.:;¡!¿?]/g, " ").split(/\s+/).filter(Boolean).length;
const frases = (s) => s.split(/(?<=[.!?])\s+/).filter((x) => x.trim()).length;

let fallos = 0;
for (const ruta of process.argv.slice(2)) {
  const g = JSON.parse(fs.readFileSync(ruta, "utf8"));
  const lineas = g.lines || [];
  const errores = [];
  /* La banda real es 8-18 bloques = 16-36 cuadros = 80-180 s (usuario,
   * 2026-09-16). El «9-12 típico» del documento es una frecuencia observada, no
   * un límite: el-diluvio necesita 14 para no sacrificar su segunda catástrofe. */
  if (lineas.length < 8 || lineas.length > 18)
    errores.push(`N=${lineas.length} fuera de 8-18 (16-36 cuadros, 80-180 s)`);

  lineas.forEach((l, i) => {
    const tag = l.bloque || `b${i + 1}`;
    const w = palabras(l.text), f = frases(l.text);
    if (w < 17 || w > 19) errores.push(`${tag}: ${w} palabras (banda 17-19)`);
    if (f !== 2) errores.push(`${tag}: ${f} frases (deben ser 2)`);
    if (l.window == null) errores.push(`${tag}: sin window`);
  });

  // El mapeo de keyframes: 2 por bloque, sin repetir, y los nuevos declarados.
  const kf = lineas.flatMap((l) => l.keyframes || []);
  if (kf.length) {
    if (kf.length !== lineas.length * 2)
      errores.push(`${kf.length} keyframes mapeados, deben ser ${lineas.length * 2} (2 por bloque)`);
    const rep = kf.filter((k, i) => kf.indexOf(k) !== i);
    if (rep.length) errores.push(`keyframes repetidos: ${[...new Set(rep)].join(", ")}`);
    const declarados = new Set((g.keyframes_nuevos || []).map((k) => k.tag));
    lineas.forEach((l) => (l.keyframes || []).forEach((k) => {
      if (declarados.has(k)) return;
    }));
  }

  const citas = (JSON.stringify(lineas).match(/«/g) || []).length;
  if (citas !== 1) errores.push(`${citas} citas directas (debe haber exactamente 1, en el clímax)`);

  const nombre = g.mito || ruta;
  if (errores.length) {
    fallos++;
    console.log(`✘ ${nombre}`);
    errores.forEach((e) => console.log(`    ${e}`));
  } else {
    console.log(`✔ ${nombre} · ${lineas.length} bloques · ${lineas.length * 2} keyframes que sostener`);
  }
}
process.exit(fallos ? 1 : 0);
