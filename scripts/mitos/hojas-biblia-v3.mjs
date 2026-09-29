#!/usr/bin/env node
/**
 * Hojas de contacto y balance de una biblia V3 ya producida.
 *
 * Para cada lamina del plan toma la version vigente —la tanda mas reciente,
 * no rechazada, que la tenga en disco— y arma una hoja por capa en
 * output/imagegen/_hojas/<corpus>-<NN>-<capa>.jpg. Imprime el balance: laminas
 * del plan, generadas y las que faltan (bloqueadas por el filtro), y lo deja
 * en content/mitos-visuales/_openai/<corpus>/biblia-v3/BALANCE.json.
 *
 *   node scripts/mitos/hojas-biblia-v3.mjs koguis katios
 *   node scripts/mitos/hojas-biblia-v3.mjs --sin-hojas koguis
 */
import { execFileSync } from "node:child_process";
import { copyFileSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { tmpdir } from "node:os";
import { CAPAS } from "./prepare-biblia-tanda-v3.mjs";

const FUENTE = "/System/Library/Fonts/Supplemental/Arial.ttf";
const args = process.argv.slice(2);
const sinHojas = args.includes("--sin-hojas");
const corpora = args.filter((a) => !a.startsWith("--"));

function vigentes(corpus) {
  const base = resolve("content/mitos-visuales/_openai", corpus, "biblia-v3");
  const out = new Map();
  if (!existsSync(base)) return out;
  const tandas = readdirSync(base)
    .filter((t) => /^tanda-\d+/.test(t) && existsSync(join(base, t, "freeze.json")) && !existsSync(join(base, t, "RECHAZADO.md")))
    .sort((a, b) => Number(a.match(/\d+/)[0]) - Number(b.match(/\d+/)[0]));
  for (const t of tandas) {
    const f = JSON.parse(readFileSync(join(base, t, "freeze.json"), "utf8"));
    for (const x of f.fichas) {
      const img = resolve("output/imagegen", corpus, "biblia-v3", t, `${x.job}.jpeg`);
      if (existsSync(img)) out.set(x.job, { img, ficha: x, capa: f.capa });
    }
  }
  return out;
}

for (const corpus of corpora) {
  const plan = JSON.parse(readFileSync(`content/mitos-visuales/${corpus}.v3.json`, "utf8"));
  const hechas = vigentes(corpus);
  const balance = { corpus, fecha: new Date().toISOString().slice(0, 10), capas: {}, faltan: [] };
  for (const [ci, capa] of CAPAS.entries()) {
    const jobs = [];
    for (const [id, m] of Object.entries(plan.models || {})) {
      const e = plan.entities[m.entity_refs[0]];
      if (!capa.toma(e, m.entity_refs[0])) continue;
      for (const v of m.views) jobs.push({ job: `${id}--${v.id}`.replace(/[/\\:*?"<>|]+/g, "-"), nombre: e.name, vista: v.id });
    }
    if (!jobs.length) continue;
    const ok = jobs.filter((j) => hechas.has(j.job));
    balance.capas[capa.id] = { plan: jobs.length, generadas: ok.length };
    for (const j of jobs.filter((j) => !hechas.has(j.job))) balance.faltan.push({ capa: capa.id, entidad: j.nombre, vista: j.vista });
    if (sinHojas || !ok.length) continue;
    const dir = join(tmpdir(), `hoja-${corpus}-${capa.id}`);
    rmSync(dir, { recursive: true, force: true });
    mkdirSync(dir, { recursive: true });
    ok.forEach((j, i) => {
      const etiqueta = `${String(i + 1).padStart(2, "0")} ${j.nombre.split(" (")[0].split(",")[0].slice(0, 34)}${j.vista === "canon" ? "" : " · estado"}`.replace(/[/\\]/g, "-");
      copyFileSync(hechas.get(j.job).img, join(dir, `${etiqueta}.jpeg`));
    });
    const ancho = ["mundo", "paisajes", "colectivos"].includes(capa.id) ? "420x280" : ["animales", "atrezo"].includes(capa.id) ? "300x300" : "240x427";
    const salida = resolve("output/imagegen/_hojas", `${corpus}-${String(ci + 1).padStart(2, "0")}-${capa.id}.jpg`);
    mkdirSync(resolve("output/imagegen/_hojas"), { recursive: true });
    execFileSync("montage", [...readdirSync(dir).sort().map((f) => join(dir, f)), "-font", FUENTE, "-pointsize", "13", "-set", "label", "%t",
      "-geometry", `${ancho}+5+5`, "-background", "white", "-tile", ancho.startsWith("240") ? "8x" : "5x", salida]);
  }
  const total = Object.values(balance.capas).reduce((a, c) => ({ plan: a.plan + c.plan, gen: a.gen + c.generadas }), { plan: 0, gen: 0 });
  balance.total = total;
  writeFileSync(resolve("content/mitos-visuales/_openai", corpus, "biblia-v3", "BALANCE.json"), `${JSON.stringify(balance, null, 2)}\n`);
  console.log(`${corpus.padEnd(28)} ${String(total.gen).padStart(4)} de ${String(total.plan).padEnd(4)} faltan ${balance.faltan.length}`);
}
