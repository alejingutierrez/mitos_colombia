#!/usr/bin/env node
/**
 * Compuerta de la Etapa 0: verificar el dossier de investigacion.
 *
 * El validador V3 comprueba el corpus congelado, el inventario y los
 * contratos, pero **no mira el bloque `research`**: la calidad del dossier
 * quedaba entera en el ojo del editor. Este script cubre ese hueco con lo que
 * si se puede comprobar solo — que las fuentes tengan localizador, que la
 * matriz use los enums de la V2, que cada ficha `required` del censo este
 * tocada por al menos una afirmacion, y que el sistema visual respete los
 * topes que impiden que el modelo tire la tecnica.
 *
 * Lo que no puede comprobar —si la fuente dice lo que el dossier afirma— sigue
 * siendo trabajo del editor, y por eso el informe termina diciendolo.
 *
 *   node scripts/mitos/preflight-research.mjs --research <dir> --censo <dir>
 *   node scripts/mitos/preflight-research.mjs --research <dir> --censo <dir> --id koguis
 */
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join, resolve } from "node:path";

export const EVIDENCE_BASES = [
  "documented_core",
  "variant",
  "contemporary_memory",
  "academic_hypothesis",
  "editorial_interpretation",
  "uncertain",
];
export const SENSITIVITIES = ["public", "contextual", "consult_required", "do_not_visualize"];
export const SOURCE_ROLES = [
  "community_voice",
  "primary_or_early",
  "academic",
  "territorial",
  "comparison",
  "institutional",
];

/** Los topes que evitan que el bloque de tecnica compita con veinte reglas. */
export const MAX_PALETTE_RULES = 4;
export const MAX_PROHIBITIONS = 8;

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

export function validateResearch(research, census) {
  const errors = [];
  const warnings = [];

  const sources = research.sources || [];
  if (!sources.length) errors.push("sin fuentes");
  const sourceIds = new Set();
  for (const source of sources) {
    if (!source.id) errors.push("una fuente sin id");
    if (sourceIds.has(source.id)) errors.push(`fuente repetida: ${source.id}`);
    sourceIds.add(source.id);
    if (!/^https?:\/\//.test(String(source.locator || ""))) {
      errors.push(`${source.id}: el localizador no es una URL consultable`);
    }
    if (!SOURCE_ROLES.includes(source.role)) errors.push(`${source.id}: rol invalido (${source.role})`);
    // Una fuente sin limitacion declarada es una fuente que nadie audito.
    if (!String(source.limitations || "").trim()) errors.push(`${source.id}: sin limitaciones declaradas`);
    if (!String(source.supports || "").trim()) errors.push(`${source.id}: no dice que sostiene`);
  }

  const roles = new Set(sources.map((source) => source.role));
  if (!roles.has("community_voice")) {
    warnings.push("ninguna fuente de voz comunitaria: deberia pesar en cuantas laminas se autorizan");
  }
  if (!roles.has("primary_or_early")) warnings.push("ninguna fuente primaria o temprana");

  const matrix = research.evidence_matrix || [];
  if (!matrix.length) errors.push("matriz de evidencia vacia");
  const touched = new Set();
  for (const [index, row] of matrix.entries()) {
    const where = `matriz[${index}]`;
    if (!String(row.claim || "").trim()) errors.push(`${where}: sin afirmacion`);
    if (!EVIDENCE_BASES.includes(row.basis)) errors.push(`${where}: base invalida (${row.basis})`);
    if (!SENSITIVITIES.includes(row.sensitivity)) errors.push(`${where}: sensibilidad invalida (${row.sensitivity})`);
    for (const id of row.source_ids || []) {
      if (!sourceIds.has(id)) errors.push(`${where}: fuente desconocida ${id}`);
    }
    if (!(row.source_ids || []).length && row.basis !== "editorial_interpretation") {
      errors.push(`${where}: sin fuente y no esta declarada como interpretacion editorial`);
    }
    for (const id of row.affects || []) touched.add(id);
  }

  const review = research.cultural_review || {};
  if (review.status !== "documented_exception" && review.status !== "approved") {
    errors.push("la revision cultural debe ser documented_exception o approved");
  }
  if (review.status === "documented_exception") {
    if (!String(review.why_no_consultation || "").trim()) errors.push("la excepcion no explica por que no hubo consulta");
    if ((review.safeguards || []).length < 2) errors.push("la excepcion exige al menos dos salvaguardas");
  }

  if (!(research.gaps || []).length) {
    warnings.push("cero carencias documentales declaradas: sospechoso en cualquier corpus");
  }

  const vs = research.visual_system_draft || {};
  for (const field of ["technique", "technique_close", "style_medium", "lighting", "era"]) {
    if (!String(vs[field] || "").trim()) errors.push(`visual_system_draft.${field} vacio`);
  }
  if ((vs.palette_rules || []).length > MAX_PALETTE_RULES) {
    errors.push(`${(vs.palette_rules || []).length} reglas de color: el tope es ${MAX_PALETTE_RULES}`);
  }
  if ((vs.prohibitions || []).length > MAX_PROHIBITIONS) {
    errors.push(`${(vs.prohibitions || []).length} prohibiciones: el tope es ${MAX_PROHIBITIONS}`);
  }

  // La cobertura es lo que hace util el dossier: una ficha sin evidencia se
  // dibuja de memoria, que es exactamente lo que este proceso existe para evitar.
  let required = [];
  let uncovered = [];
  if (census) {
    required = (census.entities || []).filter((entity) => entity.decision === "required").map((entity) => entity.id);
    uncovered = required.filter((id) => !touched.has(id));
    // Un `affects` puede apuntar a una entidad `embedded` o `excluded`, o a una
    // hoja de agrupacion: documentar por que algo NO se dibuja es parte del
    // trabajo. Solo es error el id que no existe en ninguna parte del censo.
    const known = new Set([
      ...(census.entities || []).map((entity) => entity.id),
      ...(census.sheet_groups || []).map((group) => group.id),
    ]);
    const unknown = [...touched].filter((id) => !known.has(id));
    if (unknown.length) {
      errors.push(`${unknown.length} affects no existen en el censo: ${unknown.slice(0, 6).join(", ")}`);
    }
    if (uncovered.length) {
      errors.push(`${uncovered.length} fichas sin una sola afirmacion que las sostenga: ${uncovered.slice(0, 8).join(", ")}`);
    }
  }

  return {
    ok: errors.length === 0,
    errors,
    warnings,
    summary: {
      sources: sources.length,
      roles: [...roles].sort(),
      claims: matrix.length,
      gaps: (research.gaps || []).length,
      required,
      uncovered,
      restricted: matrix.filter((row) => ["consult_required", "do_not_visualize"].includes(row.sensitivity)).length,
    },
  };
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const researchDir = resolve(String(args.research || "content/mitos-visuales/research-2026-09-18"));
  const censusDir = args.censo ? resolve(String(args.censo)) : null;
  if (!existsSync(researchDir)) throw new Error(`no existe: ${researchDir}`);

  const files = readdirSync(researchDir)
    .filter((name) => name.endsWith(".json"))
    .filter((name) => !args.id || name === `${args.id}.json`)
    .sort();
  if (!files.length) throw new Error("no hay dossiers que verificar");

  let failed = 0;
  for (const file of files) {
    const id = file.replace(/\.json$/, "");
    const research = JSON.parse(readFileSync(join(researchDir, file), "utf8"));
    const censusPath = censusDir ? join(censusDir, file) : null;
    const census = censusPath && existsSync(censusPath) ? JSON.parse(readFileSync(censusPath, "utf8")) : null;
    const report = validateResearch(research, census);
    const { summary } = report;
    console.log(
      `${report.ok ? "PASS" : "FALLA"}  ${id.padEnd(20)} ${String(summary.sources).padStart(2)} fuentes · ${String(summary.claims).padStart(3)} afirmaciones · ${String(summary.restricted).padStart(2)} restringidas · ${String(summary.gaps).padStart(2)} carencias · ${summary.required.length - summary.uncovered.length}/${summary.required.length} fichas cubiertas`,
    );
    for (const warning of report.warnings) console.log(`      WARN ${warning}`);
    for (const error of report.errors) console.log(`      ERROR ${error}`);
    if (!report.ok) failed += 1;
  }

  console.log(`\n${files.length - failed}/${files.length} dossiers pasan la compuerta de la Etapa 0.`);
  console.log("Lo que este script NO puede comprobar es si la fuente dice lo que el dossier afirma:");
  console.log("eso lo lee el editor, y es la unica parte que importa de verdad.");
  if (failed) process.exitCode = 1;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  try {
    main();
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
