#!/usr/bin/env node
import fs from "node:fs/promises";
import path from "node:path";
import { wayuuVisualBibleV3 } from "../../editorial/wayuu/visual-bible-v3.mjs";

const plan = wayuuVisualBibleV3;
const entities = plan.entities;
const statuses = {
  required: "modelo propio",
  embedded: "embebida",
  excluded: "excluida",
};

const lines = [
  "# Revisión editorial · inventario Wayúu V3",
  "",
  "> Este archivo es una vista generada de `content/mitos-visuales/wayuu.v3.json`. No se edita a mano.",
  "",
  `- Corpus: ${Object.keys(plan.myths).length} mitos.`,
  `- Entidades detectadas: ${Object.keys(entities).length}.`,
  `- Entidades con modelo propio: ${Object.values(entities).filter((entity) => entity.visual_status === "required").length}.`,
  `- Entidades embebidas: ${Object.values(entities).filter((entity) => entity.visual_status === "embedded").length}.`,
  `- Exclusiones documentadas: ${Object.values(entities).filter((entity) => entity.visual_status === "excluded").length}.`,
  `- Activos de modelo requeridos: ${plan.completion.denominator.required_model_assets}.`,
  `- Estado: ${plan.inventory.status}; ${plan.inventory.frozen ? "inventario congelado" : "todavía no está congelado"}.`,
  "",
  "## Qué se aprueba",
  "",
  "Aprobar esta revisión confirma que las entidades, categorías, estados, coberturas embebidas y exclusiones forman el denominador correcto. No aprueba diseños ni genera imágenes.",
  "",
  "## Conteo por categoría",
  "",
  "| categoría | total | modelo propio | embebida | excluida |",
  "|---|---:|---:|---:|---:|",
];

const kinds = [...new Set(Object.values(entities).map((entity) => entity.kind))].sort();
for (const kind of kinds) {
  const group = Object.values(entities).filter((entity) => entity.kind === kind);
  lines.push(`| ${kind} | ${group.length} | ${group.filter((entity) => entity.visual_status === "required").length} | ${group.filter((entity) => entity.visual_status === "embedded").length} | ${group.filter((entity) => entity.visual_status === "excluded").length} |`);
}

lines.push("", "## Revisión mito por mito", "");
for (const [slug, myth] of Object.entries(plan.myths)) {
  lines.push(`### ${myth.title}`, "", `\`${slug}\` · ${myth.entity_refs.length} referencias`, "", myth.extraction.note, "");
  for (const ref of myth.entity_refs) {
    const entity = entities[ref.entity_id];
    const stateNote = entity.states.length > 1 ? ` · estados: ${entity.states.join(", ")}` : "";
    lines.push(`- **${entity.name}** — ${entity.kind}; ${statuses[entity.visual_status]}; rol ${ref.role}${stateNote}. ${ref.note}`);
  }
  lines.push("");
}

lines.push("## Decisiones que no deben quedar invisibles", "");
for (const [entityId, entity] of Object.entries(entities).filter(([, item]) => item.visual_status !== "required")) {
  const reason = entity.visual_status === "embedded"
    ? `cubierta por \`${entity.covered_by}\`: ${entity.coverage_note}`
    : entity.exclusion_reason;
  lines.push(`- \`${entityId}\` · **${entity.name}** · ${statuses[entity.visual_status]}: ${reason}`);
}

lines.push(
  "",
  "## Siguiente compuerta",
  "",
  `Acción: \`${plan.next_gate.action}\`.`,
  "",
  plan.next_gate.effect_of_approval,
  "",
  ...plan.next_gate.review_items.map((item) => `- ${item}`),
  "",
);

const target = path.resolve("docs/wayuu-biblia-visual-v3-inventario.md");
await fs.writeFile(target, `${lines.join("\n")}\n`, "utf8");
console.log(target);
