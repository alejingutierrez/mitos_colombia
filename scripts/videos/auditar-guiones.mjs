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
  if (N < 9 || N > 12) errs.push(`N=${N} fuera de 9-12`);
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
const dirM = "docs/videos/muiscas/mvp-guiones";
if (fs.existsSync(dirM)) {
  for (const f of fs.readdirSync(dirM).filter((x) => x.endsWith(".json"))) {
    const g = JSON.parse(fs.readFileSync(path.join(dirM, f), "utf8"));
    const l = (g.lines || []).map((x) => x.text || "").filter(Boolean);
    if (l.length) res.push(evalua(f.replace(/^guion-|\.json$/g, ""), "muiscas", l));
  }
}
const dirW = "content/videos/wayuu/videos";
if (fs.existsSync(dirW)) {
  for (const m of fs.readdirSync(dirW)) {
    const fp = path.join(dirW, m, "preproduccion-01", "plan.json");
    if (!fs.existsSync(fp)) continue;
    const l = (JSON.parse(fs.readFileSync(fp, "utf8")).blocks || []).map((b) => b.voice_over || "").filter(Boolean);
    if (l.length) res.push(evalua(m, "wayuu", l));
  }
}
const dirN = "content/videos/nasa-paeces/keyframes-comunidad-20260913/myths";
if (fs.existsSync(dirN)) {
  for (const m of fs.readdirSync(dirN)) {
    const fp = path.join(dirN, m, "GUION.md");
    if (!fs.existsSync(fp)) continue;
    const l = fs.readFileSync(fp, "utf8").split(/\n## /).slice(1)
      .map((s) => s.split("\n").slice(1).filter((x) => x.trim() && !x.trim().startsWith("- k")).join(" ").trim())
      .filter(Boolean);
    if (l.length) res.push(evalua(m, "nasa-páez", l));
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
