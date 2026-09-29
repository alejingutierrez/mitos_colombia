#!/usr/bin/env node
/**
 * Repara `entity.evidence_basis` en los planes ya escritos, sin tocar nada mas.
 *
 * El constructor resolvia la base con «gana la mas firme»: bastaba una fila
 * `documented_core` para que la entidad entera quedara `documented`, aunque el
 * resto de lo que la sostiene fuera `uncertain`. Eso **lava la incertidumbre**,
 * que es justo lo que este proyecto existe para no hacer: una duda no puede
 * volverse canon visual por vecindad con un dato firme.
 *
 * La regla correcta es la inversa: **gana la mas debil**, porque una ficha no
 * es mas solida que la afirmacion mas floja que la sostiene. Y para que la
 * rebaja no esconda lo que si esta documentado, se guarda la mezcla completa
 * en `evidence_basis_mix`.
 *
 * Es una reparacion quirurgica y no un rehecho: los planes ya cerrados llevan
 * horas de escritura dentro y **solo se toca este campo**.
 *
 *   node scripts/mitos/reparar-evidence-basis.mjs
 *   node scripts/mitos/reparar-evidence-basis.mjs --check
 */
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { BASIS_V2_A_V3 } from "./build-inventario-v3.mjs";

const PLANES = "content/mitos-visuales";

/** De mas firme a mas floja. Gana la ultima que aparezca. */
const ORDEN_BASE = [
  "documented_core",
  "contemporary_memory",
  "variant",
  "academic_hypothesis",
  "editorial_interpretation",
  "uncertain",
];

function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i += 1) {
    if (argv[i].startsWith("--")) out[argv[i].slice(2)] = true;
  }
  return out;
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  let tocados = 0;
  let planes = 0;

  for (const file of readdirSync(PLANES).filter((n) => n.endsWith(".v3.json")).sort()) {
    const path = join(PLANES, file);
    const plan = JSON.parse(readFileSync(path, "utf8"));
    const matriz = plan.research?.evidence_matrix;
    if (!Array.isArray(matriz) || !matriz.length) continue;

    const porEntidad = new Map();
    for (const fila of matriz) {
      for (const id of fila.affects || []) {
        if (!porEntidad.has(id)) porEntidad.set(id, new Set());
        if (fila.basis) porEntidad.get(id).add(fila.basis);
      }
    }

    let cambios = 0;
    for (const [id, entidad] of Object.entries(plan.entities || {})) {
      const bases = porEntidad.get(id);
      if (!bases || !bases.size) continue;
      const masDebil = [...ORDEN_BASE].reverse().find((b) => bases.has(b));
      const nueva = BASIS_V2_A_V3[masDebil] || "uncertain";
      const mezcla = ORDEN_BASE.filter((b) => bases.has(b));
      if (entidad.evidence_basis !== nueva || !entidad.evidence_basis_mix) {
        if (entidad.evidence_basis !== nueva) cambios += 1;
        entidad.evidence_basis = nueva;
        entidad.evidence_basis_mix = mezcla;
      }
    }

    if (cambios && !args.check) writeFileSync(path, `${JSON.stringify(plan, null, 2)}\n`);
    if (cambios) {
      planes += 1;
      tocados += cambios;
      console.log(`${file.replace(/\.v3\.json$/, "").padEnd(28)} ${String(cambios).padStart(4)} entidades rebajadas`);
    }
  }

  console.log("-".repeat(60));
  console.log(`${tocados} entidades en ${planes} planes${args.check ? " (solo verificacion)" : ""}`);
  console.log("La base de una ficha es la de su afirmacion mas floja, no la de la mas firme.");
}

main();
