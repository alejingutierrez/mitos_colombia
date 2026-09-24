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
  // **Las once categorias admiten un segundo modelo**, y asi lo dice la tabla
  // de `docs/biblia-visual-v3.md`: «segun necesidad explicita» para el
  // colectivo, «segun uso o transformacion» para el objeto, «segun ciclo
  // documentado» para la planta, «segun cambio espacial» para arquitectura y
  // lugar, «segun clima o epoca» para el paisaje y «segun fases de la regla»
  // para el fenomeno. Tener solo cuatro obligo a katios a resolver
  // barro/piedra y arbol/tronco, y a boyaca la cuesta que se multiplica, como
  // dos registros de la misma lamina: era un limite de este script, no una
  // decision. El segundo modelo solo se emite si hay `states_to_model`.
  colectivo: ["group_grammar", "state_sheet"],
  objeto: ["object_sheet", "state_sheet"],
  planta: ["botanical_sheet", "state_sheet"],
  arquitectura: ["spatial_model", "state_sheet"],
  lugar: ["spatial_model", "state_sheet"],
  paisaje: ["environment_model", "state_sheet"],
  fenomeno: ["phenomenon_rule", "state_sheet"],
};

/** Las fichas de cuerpo de personaje, criatura y animal exigen esta vista. */
const IDENTITY_KINDS = new Set(["personaje", "criatura", "animal"]);

/**
 * Un cuerpo humano de pie va en 9:16, como las fichas de persona de wayuu V4 y
 * chami V1 (`FICHAS.personaje`, 1024x1536). En 1:1 la figura entera queda a un
 * tercio del alto y el modelo rellena el resto con paisaje.
 */
const VERTICAL_KINDS = new Set(["personaje", "deidad_fuerza"]);

export function viewFor(purpose, kind) {
  const base = VIEW_BY_PURPOSE[purpose];
  if (VERTICAL_KINDS.has(kind) && (purpose === "identity_sheet" || purpose === "state_sheet")) {
    return { ...base, aspect: "9:16" };
  }
  return base;
}

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
 * **El recorte de epoca esta revertido, y la sonda es por que.**
 *
 * `era` se estrechaba al estrato en que vive cada ficha. Ahorraba 142
 * caracteres de media y podia borrar un deslinde: en `choco-afro` el campo no
 * enumera epocas sino «Entra: ...» y «No entra: ...», el parser leyo esas dos
 * etiquetas como estratos, se quedo con la lista de inclusion y tiro casi toda
 * la de prohibiciones — incluido «ningun elemento embera ni wounaan», que el
 * dossier llama prohibicion total y no graduada.
 *
 * Un estrechado seguro tendria que conservar intacta toda frase de
 * prohibicion, y entonces no ahorra nada: en katios las prohibiciones son la
 * mitad de cada estrato. El ahorro no paga el riesgo, asi que `era` viaja
 * entera.
 *
 * La otra mitad del fallo tambien queda escrita: `cuycuyes` declara dos capas
 * y solo una encajaba en el patron de etiqueta, asi que no se estrecho y el
 * modelo recibio las dos epocas — y dibujo las dos en el mismo cuadro, que es
 * justo lo que ese dossier prohibe. Detectar mal es tan caro como recortar mal.
 */

const TECNICA_3D = /maqueta|tridimensional|\b3d\b|diorama|volum|sombra f[ií]sica|profundidad f[ií]sica/i;
const TECNICA_2D = /\b2d\b|acabado gr[aá]fico plano|ilustraci[oó]n plana|gr[aá]fico plano|plano sin volumen/i;
/** «nunca ilustracion plana» PIDE la maqueta: no la contradice. */
const NEGACION = /\b(nunca|jam[aá]s|sin|ni|no|evitar|prohibid\w*|lejos de)\s*$/i;

/** Quita los tramos negados antes de buscar la contradiccion. */
function afirmaciones(texto) {
  const t = String(texto || "");
  let out = "";
  for (const m of t.matchAll(new RegExp(TECNICA_2D.source, "gi"))) {
    const antes = t.slice(Math.max(0, m.index - 40), m.index).replace(/[^\p{L}\s]/gu, " ");
    if (!NEGACION.test(antes.trimEnd())) out += ` ${m[0]}`;
  }
  return out;
}

export function tecnicaSeContradice(technique, styleMedium) {
  if (!technique || !styleMedium) return false;
  const sm2 = afirmaciones(styleMedium);
  const t2 = afirmaciones(technique);
  return (TECNICA_3D.test(technique) && Boolean(sm2.trim()))
    || (Boolean(t2.trim()) && TECNICA_3D.test(styleMedium));
}

/** Las citas sostienen la ficha; no dirigen el pincel. Siguen en `design_contract`. */
const CITA = /^((?:corpus|dossier|canon|m[oó]dulo|fuente)\b[^:]{0,40}|[^:]{0,60}\b(?:1[4-9]\d\d|20[0-2]\d)\b[^:]{0,40}|[^:]{0,40}\bet al\b[^:]{0,20})\s*:\s+/i;

/**
 * La tecnica abre el prompt y se repite al cierre. No es estilo: es la
 * instruccion que el modelo tira primero cuando el prompt se alarga. La tanda
 * 01 wayuu salio fotorrealista por decirla al final, entre veinte reglas.
 *
 * **Recorte 2.** `style_medium` viajaba como campo aparte y no repetia ni una
 * frase de `technique` —medido: 0 % de solape—, asi que la tecnica se decia en
 * dos bloques separados por cinco campos. Ahora se pliega en uno solo al
 * frente. No ahorra caracteres: los concentra donde mandan.
 */
function buildPromptSpec({ plan, entity, purpose, view }) {
  const vs = plan.visual_system || {};
  const technique = vs.technique || "";
  const choca = tecnicaSeContradice(technique, vs.style_medium);
  return {
    use_case: "stylized-concept",
    asset_type: `Biblia visual ${plan.community} V1 - ${purpose}`,
    technique_first: choca ? technique : [technique, vs.style_medium].filter(Boolean).join(" "),
    ...(choca ? { style_medium: vs.style_medium } : {}),
    primary_request: `${view.purpose} para ${entity.name}. ${entity.design.silhouette}`,
    composition_framing: `${view.aspect}; mundo full bleed hasta los cuatro limites; ${entity.design.scale}`,
    lighting_mood: vs.lighting || "luz natural lateral suave, sombras fisicas entre capas",
    // La lista de materiales del corpus se repetia identica en cada lamina, y el
    // agente escribio la de su entidad **contra** ella: repetirla es ruido.
    materials_textures: (entity.design.materials || []).join("; "),
    era: vs.era || null,
    constraints: [
      // La silueta ya viaja entera en `primary_request`, y `entity.description`
      // es campo de inventario —lo que la figura hace en todo el corpus—, no de
      // diseño: en una hoja de identidad empuja al modelo a narrar nueve actos.
      ...(entity.design.documented || []).map((feature) => `documentado: ${feature.replace(CITA, "")}`),
      ...(vs.palette_rules || []),
      "primer plano, plano medio y fondo a distancias fisicas distintas, con aire, oclusiones, cantos internos y sombras proyectadas",
    ],
    avoid: vs.prohibitions || [],
    technique_close: vs.technique_close || technique,
  };
}

function buildViews({ entity, purpose }) {
  const base = viewFor(purpose, entity.kind);
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
        prompt_spec: buildPromptSpec({ plan, entity, purpose, view: viewFor(purpose, entity.kind) }),
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
