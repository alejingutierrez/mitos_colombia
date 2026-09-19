#!/usr/bin/env node
/**
 * Lleva una biblia heredada al carril V3, para que sus relatos puedan tener
 * acta con la misma compuerta que los otros 436.
 *
 * Chami y huitoto cerraron biblia antes de que existiera el plan V3, cada una
 * en su formato: chami un inventario de 147 entidades con categoria, decision
 * y mitos; huitoto un freeze de 172 trabajos con `myth_ids` numericos. Ninguna
 * tiene plan, y sin plan el linter de actas no puede comprobar que una escena
 * se componga con fichas que de verdad llegan a lamina.
 *
 * Esto **no rehace la biblia**: la traduce. Las decisiones que ya tomo se
 * respetan tal cual, y lo unico que se añade es la forma que el carril espera.
 *
 *   node scripts/mitos/adaptar-biblia-heredada.mjs --chami <inventario.json>
 *   node scripts/mitos/adaptar-biblia-heredada.mjs --huitoto <freeze.json>
 */
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import pg from "pg";

const DECISION = { propio: "required", required: "required", embedded: "embedded", excluded: "excluded", excluido: "excluded" };
const KINDS = new Set(["personaje", "deidad_fuerza", "criatura", "animal", "colectivo", "objeto",
  "planta", "arquitectura", "lugar", "paisaje", "fenomeno"]);

const slug = (s) => String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")
  .replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "").slice(0, 60);

function loadEnv() {
  for (const f of [resolve(".env"), "/Users/alegut/MyApps/Personal/mitos_colombia/.env"]) {
    if (!existsSync(f)) continue;
    for (const l of readFileSync(f, "utf8").split("\n")) {
      const m = l.match(/^([A-Z0-9_]+)=(.*)$/);
      if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
    }
  }
}

/** El plan base sale del congelador; aqui solo se le cuelgan entidades y refs. */
function plantilla(base, entidades, refsPorMito) {
  base.entities = entidades;
  base.inventory = {
    ...base.inventory,
    status: "heredado",
    frozen: true,
    method: "Traduccion de la biblia cerrada antes del carril V3. Las decisiones son las que esa biblia tomo; no se reabren aqui.",
    heredado_de: base.__origen,
  };
  delete base.__origen;
  for (const [s, m] of Object.entries(base.myths || {})) m.entity_refs = refsPorMito[s] || [];
  return base;
}

async function main() {
  loadEnv();
  const args = Object.fromEntries(process.argv.slice(2).reduce((a, x, i, all) => {
    if (x.startsWith("--")) a.push([x.slice(2), all[i + 1]?.startsWith("--") ? true : all[i + 1]]);
    return a;
  }, []));

  if (args.chami) {
    const inv = JSON.parse(readFileSync(String(args.chami), "utf8"));
    const base = JSON.parse(readFileSync(String(args.base), "utf8"));
    base.__origen = String(args.chami);
    const entidades = {};
    const refs = {};
    const usados = new Set();
    for (const e of inv.entidades) {
      let id = slug(e.nombre);
      while (usados.has(id)) id += "_b";
      usados.add(id);
      const estado = DECISION[e.decision] || "excluded";
      entidades[id] = {
        name: e.nombre,
        kind: KINDS.has(e.categoria) ? e.categoria : "objeto",
        description: e.nota || e.nombre,
        aliases: [],
        states: ["canonico"],
        evidence_basis: "documented",
        sensitivity: "public",
        visual_status: estado,
        capa_heredada: e.capa || null,
        ...(estado === "embedded" ? { covered_by: null, coverage_note: e.nota || "Heredado de la biblia V1." } : {}),
        ...(estado === "excluded" ? { exclusion_reason: e.nota || "Heredado de la biblia V1." } : {}),
        model_requirements: [], model_refs: [], legacy_model_refs: [],
        myth_refs: e.mitos || [],
        evidence: [],
      };
      for (const m of e.mitos || []) (refs[m] ||= []).push({ entity_id: id, role: "secondary", note: e.nota || "Heredado de la biblia V1." });
    }
    // Cada relato necesita una primaria que llegue a lamina: se propone la
    // ficha `required` que aparece en menos mitos, y el acta la confirma.
    for (const [m, lista] of Object.entries(refs)) {
      const cand = lista.filter((r) => entidades[r.entity_id].visual_status === "required")
        .sort((a, b) => entidades[a.entity_id].myth_refs.length - entidades[b.entity_id].myth_refs.length)[0];
      if (cand) { cand.role = "primary"; cand.role_derivada = "candidata, confirmar"; }
    }
    const plan = plantilla(base, entidades, refs);
    writeFileSync(String(args.out), `${JSON.stringify(plan, null, 2)}\n`);
    const req = Object.values(entidades).filter((e) => e.visual_status === "required").length;
    console.log(`chami: ${inv.entidades.length} entidades -> ${req} required, ${Object.values(entidades).filter((e) => e.visual_status === "embedded").length} embedded, ${Object.values(entidades).filter((e) => e.visual_status === "excluded").length} excluded`);
    console.log(`  relatos con refs: ${Object.keys(refs).length} de ${Object.keys(plan.myths).length}`);
    return;
  }

  if (args.huitoto) {
    const freeze = JSON.parse(readFileSync(String(args.huitoto), "utf8"));
    const base = JSON.parse(readFileSync(String(args.base), "utf8"));
    base.__origen = String(args.huitoto);
    const c = new pg.Client({ connectionString: process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });
    await c.connect();
    const { rows } = await c.query("SELECT id, slug FROM myths WHERE slug = ANY($1)", [Object.keys(base.myths)]);
    await c.end();
    const slugPorId = Object.fromEntries(rows.map((r) => [String(r.id), r.slug]));
    const entidades = {};
    const refs = {};
    for (const j of freeze.jobs) {
      if (j.parent && j.parent !== j.id) continue; // las variantes cuelgan de su padre
      const id = slug(j.id + "_" + (j.title || ""));
      entidades[id] = {
        name: j.title || j.id,
        kind: "personaje",
        description: j.title || j.id,
        aliases: [j.id],
        states: ["canonico"],
        evidence_basis: "documented",
        sensitivity: "public",
        visual_status: "required",
        ficha_heredada: j.id,
        model_requirements: [], model_refs: [], legacy_model_refs: [],
        myth_refs: (j.myth_ids || []).map((n) => slugPorId[String(n)]).filter(Boolean),
        evidence: [],
      };
      for (const n of j.myth_ids || []) {
        const s = slugPorId[String(n)];
        if (s) (refs[s] ||= []).push({ entity_id: id, role: "secondary", note: `Ficha ${j.id} de la biblia cerrada.` });
      }
    }
    for (const [, lista] of Object.entries(refs)) {
      const cand = lista.sort((a, b) => entidades[a.entity_id].myth_refs.length - entidades[b.entity_id].myth_refs.length)[0];
      if (cand) { cand.role = "primary"; cand.role_derivada = "candidata, confirmar"; }
    }
    const plan = plantilla(base, entidades, refs);
    writeFileSync(String(args.out), `${JSON.stringify(plan, null, 2)}\n`);
    console.log(`huitoto: ${freeze.jobs.length} trabajos -> ${Object.keys(entidades).length} fichas`);
    console.log(`  relatos con refs: ${Object.keys(refs).length} de ${Object.keys(plan.myths).length}`);
    const sin = Object.keys(plan.myths).filter((s) => !refs[s]);
    console.log(`  relatos SIN ninguna ficha: ${sin.length}${sin.length ? " -> " + sin.join(", ") : ""}`);
    return;
  }
  throw new Error("usa --chami <inv> o --huitoto <freeze>, con --base <plan> y --out <plan>");
}

main().catch((e) => { console.error(e.message); process.exitCode = 1; });
