#!/usr/bin/env node
/**
 * Repara las entidades que quedaron sin `myth_refs` ni `evidence`.
 *
 * Dos causas, las dos del constructor. Las **hojas de agrupacion** buscaban a
 * quien cubren por el campo `covers` del censo, que a veces trae texto libre
 * en vez de ids: la busqueda correcta va al reves, por quien declara
 * `covered_by` apuntando a la hoja. Y algunas **entidades del censo no citan
 * ningun mito**, con lo que no pueden sostener una ficha.
 *
 * Una entidad sin un solo mito no es un error de formato: es una ficha que
 * nadie pidio. No se le inventa un mito — se retira del inventario y **la
 * ausencia queda declarada**, que es la unica manera de auditarla despues.
 *
 *   node scripts/mitos/reparar-refs-vacias.mjs
 */
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PLANES = "content/mitos-visuales";
let reparadas = 0;
let retiradas = 0;

for (const file of readdirSync(PLANES).filter((n) => n.endsWith(".v3.json")).sort()) {
  const path = join(PLANES, file);
  const plan = JSON.parse(readFileSync(path, "utf8"));
  const campo = (plan.corpus?.required_fields || []).includes("content") ? "content" : "mito";
  let cambios = 0;
  const ausencias = [];

  for (const [id, entidad] of Object.entries(plan.entities || {})) {
    if ((entidad.myth_refs || []).length) continue;

    // Una hoja de agrupacion hereda los mitos de lo que de verdad la declara.
    const cubiertas = Object.values(plan.entities).filter((e) => e.covered_by === id);
    const mitos = [...new Set(cubiertas.flatMap((e) => e.myth_refs || []))];
    if (mitos.length) {
      entidad.myth_refs = mitos;
      entidad.evidence = mitos.slice(0, 3).map((slug) => ({
        myth: slug,
        field: campo,
        note: entidad.description || "Piezas menores agrupadas en una sola hoja.",
      }));
      cambios += 1;
      reparadas += 1;
      continue;
    }

    ausencias.push({
      entity_id: id,
      name: entidad.name,
      kind: entidad.kind,
      was: entidad.visual_status,
      reason:
        "Ninguna pagina del corpus la cita. No se le inventa un mito: se retira del inventario y la ausencia queda declarada.",
    });
    delete plan.entities[id];
    cambios += 1;
    retiradas += 1;
  }

  if (ausencias.length) {
    plan.inventory.declared_absences = [...(plan.inventory.declared_absences || []), ...ausencias];
  }
  if (cambios) {
    // Un ref huerfano en un mito apuntaria a una entidad que ya no existe.
    for (const mito of Object.values(plan.myths || {})) {
      mito.entity_refs = (mito.entity_refs || []).filter((ref) => plan.entities[ref.entity_id]);
    }
    writeFileSync(path, `${JSON.stringify(plan, null, 2)}\n`);
    console.log(
      `${file.replace(/\.v3\.json$/, "").padEnd(28)} ${ausencias.length ? `${ausencias.length} retiradas` : ""} ${cambios - ausencias.length ? `${cambios - ausencias.length} hojas reenlazadas` : ""}`.trimEnd(),
    );
  }
}

console.log("-".repeat(60));
console.log(`${reparadas} hojas reenlazadas por vuelta · ${retiradas} entidades retiradas con su ausencia declarada`);
