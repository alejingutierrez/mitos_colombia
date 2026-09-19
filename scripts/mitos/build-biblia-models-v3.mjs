#!/usr/bin/env node
/**
 * Compuerta 5 de la Biblia visual V3: derivar los contratos de modelo desde el
 * inventario de entidades.
 *
 * El reparto es deliberado. Lo que cambia de una entidad a otra —silueta,
 * materiales, paleta, escala, marcadores de continuidad, rasgos documentados y
 * decisiones editoriales— lo escribe quien hizo las siete pasadas, en
 * `entity.design`. Lo que no cambia —la tecnica, el encuadre, las
 * prohibiciones, la forma del `prompt_spec`— lo pone este script desde
 * `plan.visual_system`.
 *
 * Asi se evita la trampa de la plantilla compartida: si el contrato entero
 * saliera de una plantilla, doscientas fichas se leerian igual y ninguna
 * diria nada de su entidad. Y al reves: si cada agente escribiera tambien el
 * envoltorio, la tecnica se diria de doscientas maneras distintas y el modelo
 * la ignoraria.
 *
 *   node scripts/mitos/build-biblia-models-v3.mjs --plan content/mitos-visuales/koguis.v3.json
 *   node scripts/mitos/build-biblia-models-v3.mjs --plan <plan> --check
 */
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

/** Que ficha exige cada categoria. La primera es la base; la segunda solo si hay estados. */
export const PURPOSE_BY_KIND = {
  personaje: ["identity_sheet", "state_sheet"],
  deidad_fuerza: ["identity_sheet", "state_sheet"],
  criatura: ["identity_sheet", "state_sheet"],
  animal: ["identity_sheet", "state_sheet"],
  // La V3 admite un segundo modelo «segun necesidad explicita» para el
  // colectivo y «segun ciclo documentado» para la planta. Tenerlos con una
  // sola ficha obligo a katios a resolver barro/piedra y arbol/tronco como dos
  // registros de la misma lamina: era un limite de este script, no una
  // decision.
  colectivo: ["group_grammar", "state_sheet"],
  objeto: ["object_sheet"],
  planta: ["botanical_sheet", "state_sheet"],
  arquitectura: ["spatial_model"],
  lugar: ["spatial_model"],
  paisaje: ["environment_model"],
  fenomeno: ["phenomenon_rule"],
};

/** Las fichas de cuerpo de personaje, criatura y animal exigen esta vista. */
const IDENTITY_KINDS = new Set(["personaje", "criatura", "animal"]);

const VIEW_BY_PURPOSE = {
  identity_sheet: { view_type: "canonical_full_body", aspect: "1:1", purpose: "identidad corporal completa y legible" },
  state_sheet: { view_type: "state_variation", aspect: "1:1", purpose: "el cambio de estado sin perder la identidad" },
  group_grammar: { view_type: "group_arrangement", aspect: "16:9", purpose: "gramatica del grupo: cuantos, como se ordenan, que los hace uno" },
  object_sheet: { view_type: "object_three_quarter", aspect: "1:1", purpose: "hechura, escala y uso del objeto" },
  botanical_sheet: { view_type: "botanical_plate", aspect: "1:1", purpose: "porte, hoja, fruto y ciclo documentado" },
  spatial_model: { view_type: "spatial_establishing", aspect: "16:9", purpose: "planta, materiales y relacion con el cuerpo que la habita" },
  environment_model: { view_type: "environment_establishing", aspect: "16:9", purpose: "el mundo hasta los cuatro limites, con su hora y su clima" },
  phenomenon_rule: { view_type: "phenomenon_phases", aspect: "16:9", purpose: "la regla del prodigio en fases legibles" },
};

const DESIGN_FIELDS = [
  ["silhouette", "distinctive_silhouette", "text"],
  ["materials", "materials", "list"],
  ["palette", "palette_logic", "text"],
  ["scale", "scale", "text"],
  ["continuity", "continuity_markers", "list"],
  ["documented", "documented_features", "list"],
  ["editorial", "editorial_features", "list"],
];

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

/** Los propositos que exige una entidad, segun su categoria y sus estados. */
export function requirementsFor(entity) {
  const purposes = PURPOSE_BY_KIND[entity.kind];
  if (!purposes) throw new Error(`categoria sin proposito definido: ${entity.kind}`);
  const [base, stateful] = purposes;
  const modelStates = entity.design?.states_to_model || [];
  return stateful && modelStates.length ? [base, stateful] : [base];
}

/**
 * La tecnica abre el prompt y se repite al cierre. No es estilo: es la
 * instruccion que el modelo tira primero cuando el prompt se alarga. La tanda
 * 01 wayuu salio fotorrealista por decirla al final, entre veinte reglas.
 */
function buildPromptSpec({ plan, entity, purpose, view }) {
  const vs = plan.visual_system || {};
  const technique = vs.technique || "";
  return {
    use_case: "stylized-concept",
    asset_type: `Biblia visual ${plan.community} V1 - ${purpose}`,
    technique_first: technique,
    primary_request: `${view.purpose} para ${entity.name}. ${entity.design.silhouette}`,
    style_medium: vs.style_medium || technique,
    composition_framing: `${view.aspect}; mundo full bleed hasta los cuatro limites; ${entity.design.scale}`,
    lighting_mood: vs.lighting || "luz natural lateral suave, sombras fisicas entre capas",
    materials_textures: [...(vs.materials_base || []), ...entity.design.materials].join("; "),
    era: vs.era || null,
    constraints: [
      entity.design.silhouette,
      `mostrar: ${entity.description}`,
      ...(entity.design.documented || []).map((feature) => `documentado: ${feature}`),
      ...(vs.palette_rules || []),
      "primer plano, plano medio y fondo a distancias fisicas distintas, con aire, oclusiones, cantos internos y sombras proyectadas",
    ],
    avoid: vs.prohibitions || [],
    technique_close: vs.technique_close || technique,
  };
}

function buildViews({ entity, purpose }) {
  const base = VIEW_BY_PURPOSE[purpose];
  if (purpose !== "state_sheet") {
    return [
      {
        id: "canon",
        view_type: base.view_type,
        purpose: base.purpose,
        aspect: base.aspect,
        states: [entity.states?.[0] || "canonico"],
        reference_views: [],
      },
    ];
  }
  return (entity.design.states_to_model || []).map((state) => ({
    id: `estado_${state}`,
    view_type: base.view_type,
    purpose: `${base.purpose}: ${state}`,
    aspect: base.aspect,
    states: [state],
    reference_views: ["canon"],
  }));
}

export function buildModels(plan) {
  const models = {};
  const problems = [];

  for (const [entityId, entity] of Object.entries(plan.entities || {})) {
    if (entity.visual_status !== "required") {
      entity.model_requirements = [];
      entity.model_refs = [];
      entity.legacy_model_refs = entity.legacy_model_refs || [];
      continue;
    }
    if (!entity.design) {
      problems.push(`${entityId}: falta el bloque design`);
      continue;
    }
    for (const [source, , type] of DESIGN_FIELDS) {
      const value = entity.design[source];
      if (type === "list" && (!Array.isArray(value) || !value.length)) problems.push(`${entityId}.design.${source}: lista vacia`);
      if (type === "text" && (typeof value !== "string" || !value.trim())) problems.push(`${entityId}.design.${source}: texto vacio`);
    }
    if (problems.some((problem) => problem.startsWith(`${entityId}`))) continue;

    const requirements = requirementsFor(entity);
    entity.model_requirements = requirements;
    entity.model_refs = requirements.map((purpose) => `${entityId}__${purpose}`);
    entity.legacy_model_refs = entity.legacy_model_refs || [];

    for (const purpose of requirements) {
      const views = buildViews({ entity, purpose });
      if (purpose === "identity_sheet" && IDENTITY_KINDS.has(entity.kind)) {
        views[0].view_type = "canonical_full_body";
      }
      const design_contract = Object.fromEntries(
        DESIGN_FIELDS.map(([source, target]) => [target, entity.design[source]]),
      );
      models[`${entityId}__${purpose}`] = {
        purpose,
        entity_refs: [entityId],
        placeholder: false,
        design_status: "ready_for_pilot_review",
        evidence_refs: entity.evidence || [],
        design_contract,
        prompt_spec: buildPromptSpec({ plan, entity, purpose, view: VIEW_BY_PURPOSE[purpose] }),
        views,
      };
    }
  }
  return { models, problems };
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const planPath = resolve(String(args.plan || ""));
  if (!planPath || !existsSync(planPath)) throw new Error(`no existe el plan: ${planPath}`);
  const plan = JSON.parse(readFileSync(planPath, "utf8"));

  if (!plan.visual_system?.technique) {
    throw new Error("falta plan.visual_system.technique: la tecnica tiene que abrir el prompt");
  }

  const { models, problems } = buildModels(plan);
  if (problems.length) {
    for (const problem of problems) console.error(`ERROR ${problem}`);
    throw new Error(`${problems.length} entidades requeridas sin contrato utilizable`);
  }

  plan.models = models;
  if (!args.check) writeFileSync(planPath, `${JSON.stringify(plan, null, 2)}\n`);

  const byPurpose = {};
  for (const model of Object.values(models)) byPurpose[model.purpose] = (byPurpose[model.purpose] || 0) + 1;
  const required = Object.values(plan.entities).filter((entity) => entity.visual_status === "required").length;
  console.log(`contratos de modelo - ${plan.community}`);
  console.log(`  entidades requeridas: ${required} - modelos: ${Object.keys(models).length}${args.check ? " (solo verificacion)" : ""}`);
  for (const [purpose, count] of Object.entries(byPurpose).sort()) console.log(`    ${purpose}: ${count}`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  try {
    main();
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
