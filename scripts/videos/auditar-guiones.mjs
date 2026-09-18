#!/usr/bin/env node
/**
 * Audita TODOS los guiones del repo contra la regla única de la fase 1
 * (docs/videos/PRODUCCION-END-TO-END.md §2), sea cual sea su formato:
 *
 *   muiscas   docs/videos/muiscas/mvp-guiones/guion-<mito>.json → lines[].text
 *   wayuu     content/videos/wayuu/videos/<mito>/preproduccion-01/plan.json → blocks[].voice_over
 *   nasa      content/videos/nasa-paeces/keyframes-.../myths/<mito>/GUION.md → secciones ##
 *
 * La regla: N bloques (9-12) de 2 frases y 17-19 palabras, y UNA cita directa
 * en el clímax. La banda no es capricho: escrita como «≤19» autorizó el guion
 * de 10-15 palabras que dejó la narración en el 44 % del metraje.
 *
 *   node scripts/videos/auditar-guiones.mjs [--detalle]
 */
import fs from "node:fs";
import path from "node:path";

const palabras = (s) => s.replace(/[«»"“”—–,.:;¡!¿?()]/g, " ").split(/\s+/).filter(Boolean).length;
const frases = (s) => s.split(/(?<=[.!?])\s+/).filter((x) => x.trim()).length;

function evalua(nombre, comunidad, lineas) {
  const errs = [];
  const N = lineas.length;
  if (N < 8 || N > 18) errs.push(`N=${N} fuera de 8-18 (16-36 cuadros, 80-180 s)`);
  const malW = lineas.filter((t) => palabras(t) < 17 || palabras(t) > 19).length;
  const malF = lineas.filter((t) => frases(t) !== 2).length;
  if (malW) errs.push(`${malW}/${N} bloques fuera de 17-19 palabras`);
  if (malF) errs.push(`${malF}/${N} bloques que no son de 2 frases`);
  const texto = lineas.join(" ");
  const citas = (texto.match(/«/g) || []).length || (texto.match(/—\s*[A-ZÁÉÍÓÚÑ]/g) || []).length;
  if (citas !== 1) errs.push(`${citas} citas directas (debe haber 1, en el clímax)`);
  return { nombre, comunidad, N, errs };
}

const res = [];

/* Sólo se audita la versión VIVA de cada mito: el vN más alto. Las anteriores
 * se conservan porque produjeron los másters entregados y la doctrina las cita,
 * pero medirlas contra la regla de hoy no dice nada: son de antes de que se
 * fijara. Lo de historico/ queda fuera por lo mismo. */
function vivos(dir) {
  if (!fs.existsSync(dir)) return [];
  const porMito = new Map();
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".json"))) {
    const g = JSON.parse(fs.readFileSync(path.join(dir, f), "utf8"));
    if (!(g.lines || []).length) continue;
    const mito = g.mito || f.replace(/^guion-|-v\d+(?:-[\w-]+)?\.json$|\.json$/g, "");
    const v = Number((f.match(/-v(\d+)(?:-[\w-]+)?\.json$/) || [0, 0])[1]);
    const prev = porMito.get(mito);
    if (!prev || v > prev.v) porMito.set(mito, { v, g, mito });
  }
  return [...porMito.values()];
}

for (const { mito, g } of vivos("docs/videos/muiscas/mvp-guiones")) {
  res.push(evalua(mito, "muiscas", g.lines.map((x) => x.text || "").filter(Boolean)));
}
for (const { mito, g } of vivos("docs/videos/nasa-paeces/mvp-guiones")) {
  res.push(evalua(mito, "nasa-páez", g.lines.map((x) => x.text || "").filter(Boolean)));
}
for (const { mito, g } of vivos("docs/videos/ette-ennaka/mvp-guiones")) {
  res.push(evalua(mito, "ette-ennaka", g.lines.map((x) => x.text || "").filter(Boolean)));
}
for (const { mito, g } of vivos("docs/videos/wayuu/mvp-guiones")) {
  res.push(evalua(mito, "wayuu", g.lines.map((x) => x.text || "").filter(Boolean)));
}
/* Los planes de preproducción son anteriores a la regla única (bloques de 26
 * palabras de mediana). Sólo cuentan para los mitos que todavía no tienen
 * guion vivo; si no, el mismo mito aparecía dos veces y fallaba siempre. */
const conGuion = new Set(res.filter((r) => r.comunidad === "wayuu").map((r) => r.nombre));
const dirW = "content/videos/wayuu/videos";
if (fs.existsSync(dirW)) {
  for (const m of fs.readdirSync(dirW)) {
    const fp = path.join(dirW, m, "preproduccion-01", "plan.json");
    if (!fs.existsSync(fp) || conGuion.has(m)) continue;
    const l = (JSON.parse(fs.readFileSync(fp, "utf8")).blocks || []).map((b) => b.voice_over || "").filter(Boolean);
    if (l.length) res.push(evalua(m, "wayuu", l));
  }
}
const ok = res.filter((r) => !r.errs.length);
console.log(`${res.length} guiones auditados · ${ok.length} cumplen · ${res.length - ok.length} no\n`);
const porCom = {};
for (const r of res) (porCom[r.comunidad] ??= []).push(r);
for (const [c, l] of Object.entries(porCom)) {
  console.log(`  ${c.padEnd(12)} ${l.filter((r) => !r.errs.length).length}/${l.length} cumplen`);
}
if (process.argv.includes("--detalle")) {
  for (const [c, l] of Object.entries(porCom)) {
    console.log(`\n######## ${c}`);
    for (const r of l.sort((a, b) => a.nombre.localeCompare(b.nombre))) {
      console.log(`  ${r.errs.length ? "✘" : "✔"} ${r.nombre.padEnd(38)} N=${String(r.N).padStart(2)}  ${r.errs.join(" · ")}`);
    }
  }
}
process.exit(res.length - ok.length ? 1 : 0);
