#!/usr/bin/env node
/**
 * Junta los censos de ficha de todos los corpus y saca el inventario completo.
 *
 * Hace tres cosas que no se pueden hacer corpus por corpus:
 *
 *  1. **Recalcula los totales** en vez de creerles. Un censo que declara 94
 *     fichas y suma 97 es un censo roto, y el error se propaga al presupuesto.
 *  2. **Cruza las figuras panregionales.** La Llorona, el Mohan y la Patasola
 *     aparecen en varios de los catorce corpus mestizos. Producirlas una vez
 *     por region es el gasto evitable mas grande del proyecto, y solo se ve
 *     mirando los catorce juntos.
 *  3. **Cuadra la resta contra la base**: paginas censadas + paginas con
 *     biblia = 596. Si no cuadra, alguna pagina se cayo en silencio, que es el
 *     unico error que no se puede auditar despues.
 *
 *   node scripts/mitos/agregar-censo.mjs --censo <dir> --md docs/censo-fichas-biblias.md
 */
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { ATTEMPTS, blendedCostPerSheet } from "./costo-biblia.mjs";

const KINDS = [
  "personaje",
  "deidad_fuerza",
  "criatura",
  "animal",
  "colectivo",
  "objeto",
  "planta",
  "arquitectura",
  "lugar",
  "paisaje",
  "fenomeno",
];

const KIND_LABEL = {
  personaje: "personajes",
  deidad_fuerza: "deidades y fuerzas",
  criatura: "criaturas",
  animal: "animales",
  colectivo: "colectivos",
  objeto: "objetos",
  planta: "plantas",
  arquitectura: "arquitectura",
  lugar: "lugares",
  paisaje: "paisajes",
  fenomeno: "fenómenos",
};

/** Las seis que ya tienen biblia, con sus laminas reales instaladas. */
export const CLOSED = [
  { id: "muiscas", label: "Muiscas", pages: 41, sheets: 151 },
  { id: "wayuu", label: "Wayúu", pages: 27, sheets: 237 },
  { id: "nasa-paeces", label: "Nasa – Páez", pages: 26, sheets: 60 },
  { id: "chimila", label: "Ette Ennaka (Chimila)", pages: 23, sheets: 54 },
  { id: "chami", label: "Chamí", pages: 22, sheets: 118 },
  { id: "huitotos", label: "Huitoto / Murui-Muina", pages: 21, sheets: 196 },
];

export const TOTAL_PAGES = 596;

function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i += 1) {
    if (!argv[i].startsWith("--")) continue;
    const key = argv[i].slice(2);
    const next = argv[i + 1];
    out[key] = !next || next.startsWith("--") ? true : next;
  }
  return out;
}

export function loadCensus(dir) {
  return readdirSync(dir)
    .filter((name) => name.endsWith(".json"))
    .sort()
    .map((name) => {
      const data = JSON.parse(readFileSync(join(dir, name), "utf8"));
      data.__file = name;
      return data;
    });
}

/** No se le cree a `totals`: se recalcula y se reporta la diferencia. */
export function audit(census) {
  const entities = census.entities || [];
  const groups = census.sheet_groups || [];
  const byDecision = { required: 0, embedded: 0, excluded: 0, sin_decision: 0 };
  const byKind = Object.fromEntries(KINDS.map((kind) => [kind, 0]));
  const sheetsByKind = Object.fromEntries(KINDS.map((kind) => [kind, 0]));
  const problems = [];
  const ids = new Set();

  for (const entity of entities) {
    if (ids.has(entity.id)) problems.push(`id repetido: ${entity.id}`);
    ids.add(entity.id);
    if (!KINDS.includes(entity.kind)) problems.push(`categoria invalida en ${entity.id}: ${entity.kind}`);
    else byKind[entity.kind] += 1;
    const decision = entity.decision;
    if (!["required", "embedded", "excluded"].includes(decision)) {
      byDecision.sin_decision += 1;
      problems.push(`sin decision declarada: ${entity.id}`);
      continue;
    }
    byDecision[decision] += 1;
    if (decision === "required") {
      const sheets = Number(entity.sheets || 0);
      if (sheets < 1) problems.push(`required sin lamina: ${entity.id}`);
      if (KINDS.includes(entity.kind)) sheetsByKind[entity.kind] += sheets;
    }
    if (decision === "embedded" && !entity.covered_by) problems.push(`embedded sin covered_by: ${entity.id}`);
    if (decision === "excluded" && !entity.reason) problems.push(`excluded sin reason: ${entity.id}`);
  }

  const sheetsFromEntities = entities
    .filter((entity) => entity.decision === "required")
    .reduce((total, entity) => total + Number(entity.sheets || 0), 0);
  const sheetsFromGroups = groups.reduce((total, group) => total + Number(group.sheets || 0), 0);
  const sheets = sheetsFromEntities + sheetsFromGroups;

  const declared = census.totals || {};
  if (declared.sheets !== undefined && declared.sheets !== sheets) {
    problems.push(`totals.sheets declara ${declared.sheets}, suma ${sheets}`);
  }
  if (declared.entities !== undefined && declared.entities !== entities.length) {
    problems.push(`totals.entities declara ${declared.entities}, hay ${entities.length}`);
  }

  return {
    id: census.id,
    label: census.label || census.id,
    era: census.era || null,
    pages: Number(census.pages || 0),
    canon_pages: Number(census.canon_pages ?? census.pages ?? 0),
    entities: entities.length,
    ...byDecision,
    sheets,
    sheet_groups: groups.length,
    by_kind: byKind,
    sheets_by_kind: sheetsByKind,
    panregional: entities.filter((entity) => entity.decision === "required" && entity.panregional).length,
    problems,
  };
}

/** Una figura que aparece como `required` en dos o mas corpus se produce dos o mas veces. */
export function crossRegional(censuses) {
  const byName = new Map();
  for (const census of censuses) {
    for (const entity of census.entities || []) {
      if (entity.decision !== "required") continue;
      if (!entity.panregional) continue;
      const key = String(entity.name || entity.id)
        .toLowerCase()
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "")
        .replace(/^(el|la|los|las)\s+/, "")
        .replace(/[^a-z\s]/g, "")
        .split(/\s+/)
        .slice(0, 2)
        .join(" ");
      if (!byName.has(key)) byName.set(key, []);
      byName.get(key).push({ corpus: census.id, name: entity.name, sheets: Number(entity.sheets || 0) });
    }
  }
  return [...byName.entries()]
    .filter(([, uses]) => uses.length > 1)
    .map(([key, uses]) => ({
      key,
      corpora: uses.length,
      sheets: uses.reduce((total, use) => total + use.sheets, 0),
      savings: uses.reduce((total, use) => total + use.sheets, 0) - Math.max(...uses.map((u) => u.sheets)),
      uses,
    }))
    .sort((a, b) => b.savings - a.savings);
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const dir = resolve(String(args.censo || ""));
  if (!existsSync(dir)) throw new Error(`no existe el censo: ${dir}`);

  const censuses = loadCensus(dir);
  const rows = censuses.map(audit).sort((a, b) => b.sheets - a.sheets);
  const perSheet = blendedCostPerSheet();
  const cross = crossRegional(censuses);

  const totals = rows.reduce(
    (acc, row) => ({
      pages: acc.pages + row.pages,
      entities: acc.entities + row.entities,
      required: acc.required + row.required,
      embedded: acc.embedded + row.embedded,
      excluded: acc.excluded + row.excluded,
      sheets: acc.sheets + row.sheets,
    }),
    { pages: 0, entities: 0, required: 0, embedded: 0, excluded: 0, sheets: 0 },
  );

  console.log("corpus".padEnd(28), "pág".padStart(4), "ent".padStart(5), "req".padStart(4), "emb".padStart(4), "exc".padStart(4), "fichas".padStart(7), "f/pág".padStart(6), "USD".padStart(7));
  for (const row of rows) {
    console.log(
      row.id.padEnd(28),
      String(row.pages).padStart(4),
      String(row.entities).padStart(5),
      String(row.required).padStart(4),
      String(row.embedded).padStart(4),
      String(row.excluded).padStart(4),
      String(row.sheets).padStart(7),
      (row.pages ? (row.sheets / row.pages).toFixed(1) : "-").padStart(6),
      (row.sheets * perSheet * ATTEMPTS.central).toFixed(2).padStart(7),
    );
  }
  console.log("-".repeat(80));
  console.log(
    "TOTAL CENSADO".padEnd(28),
    String(totals.pages).padStart(4),
    String(totals.entities).padStart(5),
    String(totals.required).padStart(4),
    String(totals.embedded).padStart(4),
    String(totals.excluded).padStart(4),
    String(totals.sheets).padStart(7),
    (totals.pages ? (totals.sheets / totals.pages).toFixed(1) : "-").padStart(6),
    (totals.sheets * perSheet * ATTEMPTS.central).toFixed(2).padStart(7),
  );

  const closedPages = CLOSED.reduce((total, item) => total + item.pages, 0);
  console.log(
    `\ncobertura: ${totals.pages} censadas + ${closedPages} con biblia = ${totals.pages + closedPages} de ${TOTAL_PAGES}` +
      (totals.pages + closedPages === TOTAL_PAGES ? " ✓" : `  ⚠ FALTAN ${TOTAL_PAGES - totals.pages - closedPages}`),
  );
  console.log(`corpus censados: ${rows.length}`);

  const problems = rows.flatMap((row) => row.problems.map((problem) => `${row.id}: ${problem}`));
  if (problems.length) {
    console.log(`\n⚠ ${problems.length} problemas de consistencia:`);
    for (const problem of problems.slice(0, 40)) console.log(`  ${problem}`);
  } else console.log("\nconsistencia: sin problemas");

  if (cross.length) {
    console.log(`\nfiguras panregionales repetidas (${cross.length}) — el ahorro si se produce una canónica:`);
    let savings = 0;
    for (const item of cross) {
      savings += item.savings;
      console.log(`  ${item.key.padEnd(22)} ${item.corpora} corpus · ${item.sheets} fichas · ahorra ${item.savings}  (${item.uses.map((u) => u.corpus).join(", ")})`);
    }
    console.log(`  ahorro total: ${savings} fichas = $${(savings * perSheet * ATTEMPTS.central).toFixed(2)}`);
  }

  if (args.md) {
    const mdPath = resolve(String(args.md));
    mkdirSync(dirname(mdPath), { recursive: true });
    writeFileSync(mdPath, renderMarkdown({ rows, totals, cross, perSheet, closedPages }));
    console.log(`\ninforme: ${mdPath}`);
  }
}

function renderMarkdown({ rows, totals, cross, perSheet, closedPages }) {
  const cost = (sheets, factor = ATTEMPTS.central) => `$${(sheets * perSheet * factor).toFixed(0)}`;
  const kindTotals = Object.fromEntries(KINDS.map((kind) => [kind, 0]));
  for (const row of rows) for (const kind of KINDS) kindTotals[kind] += row.sheets_by_kind[kind];

  return `# Censo de fichas: las biblias que faltan

**Contado leyendo, no multiplicando.** Cada corpus se leyó entero —los cuatro
campos editoriales de cada página— y cada entidad detectada quedó con una
decisión declarada: ficha propia, cubierta por otra ficha, o excluida con su
razón verificada contra el texto. Nada detectado desaparece en silencio.

## Total

| | |
|---|---|
| páginas censadas | **${totals.pages}** |
| entidades detectadas | **${totals.entities}** |
| con ficha propia | ${totals.required} |
| cubiertas por otra ficha | ${totals.embedded} |
| excluidas con razón | ${totals.excluded} |
| **láminas a producir** | **${totals.sheets}** |
| láminas por página | ${(totals.sheets / totals.pages).toFixed(1)} |
| **costo de imagen** | **${cost(totals.sheets)}** (rango ${cost(totals.sheets, ATTEMPTS.optimista)}–${cost(totals.sheets, ATTEMPTS.pesimista)}) |

Cobertura: ${totals.pages} censadas + ${closedPages} con biblia = ${totals.pages + closedPages} de ${TOTAL_PAGES} páginas de la base.

## Por corpus

| corpus | páginas | entidades | fichas | f/pág | USD |
|---|---:|---:|---:|---:|---:|
${rows.map((row) => `| ${row.label} | ${row.pages} | ${row.entities} | **${row.sheets}** | ${row.pages ? (row.sheets / row.pages).toFixed(1) : "–"} | ${cost(row.sheets)} |`).join("\n")}

## Por categoría

| categoría | láminas |
|---|---:|
${KINDS.map((kind) => `| ${KIND_LABEL[kind]} | ${kindTotals[kind]} |`).join("\n")}

${
  cross.length
    ? `## Figuras panregionales

Aparecen como ficha propia en más de un corpus. Producir una lámina canónica y
heredarla con variante barata ahorra **${cross.reduce((total, item) => total + item.savings, 0)} láminas**.

| figura | corpus | fichas hoy | ahorro |
|---|---:|---:|---:|
${cross.map((item) => `| ${item.key} | ${item.corpora} | ${item.sheets} | ${item.savings} |`).join("\n")}
`
    : ""
}
## Cómo se contó

Una entidad gana ficha propia sólo si conduce una acción, reaparece en dos o
más relatos con cuerpo reconocible, es el escenario del acto de un relato sin
ser intercambiable con otro ya fichado, o es el objeto por el que se cuenta el
relato. Lo demás va \`embedded\` —la ropa del personaje, el techo de la casa,
el objeto menor agrupado de a cinco en una hoja de utilería— o \`excluded\`,
con la razón leída del texto.

El costo sale de \`scripts/mitos/costo-biblia.mjs\`, que usa la densidad de
tokens medida en los 387 \`usage\` reales del ledger de stop-motion y 1,35
intentos por lámina aceptada.
`;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  try {
    main();
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
