/**
 * Contrato de Biblia visual V3.
 *
 * La V3 corrige el error estructural de la V2: el denominador de cobertura ya
 * no nace de los modelos que decidimos producir, sino de un inventario de
 * entidades extraido de los relatos. Una regla magica, una escena o un
 * placeholder nunca sustituyen el modelo de un personaje, criatura o animal.
 */

export const BIBLIA_V3_SCHEMA = "mitos-colombia-biblia-visual/v3";
export const PREFLIGHT_STAGES_V3 = [
  "research",
  "inventory",
  "design",
  "pilot",
  "generate",
  "complete",
];

export const ENTITY_KINDS_V3 = [
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

export const VISUAL_STATUSES_V3 = ["required", "embedded", "excluded"];
export const EVIDENCE_BASES_V3 = [
  "documented",
  "variant",
  "inferred",
  "editorial_interpretation",
  "uncertain",
];
export const SENSITIVITIES_V3 = ["public", "contextual", "sensitive"];
export const MYTH_ENTITY_ROLES_V3 = [
  "primary",
  "secondary",
  "setting",
  "magic_subject",
  "plot_object",
  "variant",
];

const MODEL_PURPOSES = [
  "identity_sheet",
  "state_sheet",
  "object_sheet",
  "botanical_sheet",
  "spatial_model",
  "environment_model",
  "phenomenon_rule",
  "presence_model",
  "group_grammar",
  "relationship_board",
  "magic_rule",
];

const ENTITY_MODEL_PURPOSES = new Set([
  "identity_sheet",
  "state_sheet",
  "object_sheet",
  "botanical_sheet",
  "spatial_model",
  "environment_model",
  "phenomenon_rule",
  "presence_model",
  "group_grammar",
]);

const IDENTITY_KINDS = new Set(["personaje", "criatura", "animal"]);
const DESIGN_FIELDS = [
  "distinctive_silhouette",
  "materials",
  "palette_logic",
  "scale",
  "continuity_markers",
  "documented_features",
  "editorial_features",
];
const EXTRACTION_PASSES = [
  "named_entities",
  "unnamed_roles",
  "animals_and_creatures",
  "objects_and_plants",
  "places_and_architecture",
  "states_and_transformations",
  "variant_differences",
];

function isObject(value) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function hasText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function unique(values) {
  return [...new Set(values)];
}

function add(report, type, path, message) {
  report[type].push({ path, message });
}

function requireText(report, value, path) {
  if (!hasText(value)) add(report, "errors", path, "debe ser texto no vacio");
}

function requireList(report, value, path, minimum = 1) {
  if (!Array.isArray(value) || value.length < minimum) {
    add(report, "errors", path, `debe contener al menos ${minimum} elemento(s)`);
    return [];
  }
  return value;
}

function validateResearch(plan, report) {
  const corpus = plan.corpus;
  if (!isObject(corpus)) {
    add(report, "errors", "corpus", "falta el corpus congelado");
    return;
  }
  if (corpus.frozen !== true) add(report, "errors", "corpus.frozen", "debe ser true");
  const slugs = unique(requireList(report, corpus.myth_slugs, "corpus.myth_slugs"));
  const mythSlugs = Object.keys(plan.myths || {});
  const missing = slugs.filter((slug) => !mythSlugs.includes(slug));
  const extra = mythSlugs.filter((slug) => !slugs.includes(slug));
  if (missing.length) add(report, "errors", "myths", `faltan mitos del corpus: ${missing.join(", ")}`);
  if (extra.length) add(report, "errors", "myths", `hay mitos fuera del corpus: ${extra.join(", ")}`);

  const source = plan.source_snapshot;
  if (!isObject(source)) {
    add(report, "errors", "source_snapshot", "falta la huella del corpus editorial leido");
  } else {
    requireText(report, source.retrieved_at, "source_snapshot.retrieved_at");
    requireText(report, source.sha256, "source_snapshot.sha256");
    if (source.record_count !== slugs.length) {
      add(report, "errors", "source_snapshot.record_count", "debe coincidir con el corpus congelado");
    }
    const fields = requireList(report, source.fields, "source_snapshot.fields");
    for (const field of ["mito", "historia", "versiones", "research_notes"]) {
      if (!fields.includes(field)) add(report, "errors", "source_snapshot.fields", `falta leer ${field}`);
    }
  }
}

export function deriveInventoryCoverage(plan) {
  const entities = plan.entities || {};
  const byKind = {};
  const byVisualStatus = {};
  let requiredEntities = 0;
  let requiredAssets = 0;
  let modeledEntities = 0;
  for (const entity of Object.values(entities)) {
    byKind[entity.kind] = (byKind[entity.kind] || 0) + 1;
    byVisualStatus[entity.visual_status] = (byVisualStatus[entity.visual_status] || 0) + 1;
    if (entity.visual_status !== "required") continue;
    requiredEntities += 1;
    requiredAssets += Array.isArray(entity.model_requirements) ? entity.model_requirements.length : 0;
    const modelPurposes = new Set(
      (entity.model_refs || [])
        .map((modelId) => plan.models?.[modelId])
        .filter(Boolean)
        .filter((model) => model.placeholder !== true && ENTITY_MODEL_PURPOSES.has(model.purpose))
        .map((model) => model.purpose),
    );
    if ((entity.model_requirements || []).every((purpose) => modelPurposes.has(purpose))) modeledEntities += 1;
  }
  return {
    entities: Object.keys(entities).length,
    by_kind: Object.fromEntries(Object.entries(byKind).sort(([a], [b]) => a.localeCompare(b))),
    by_visual_status: byVisualStatus,
    required_entities: requiredEntities,
    required_assets: requiredAssets,
    modeled_entities: modeledEntities,
    remaining_entities: requiredEntities - modeledEntities,
  };
}

function validateInventory(plan, report, { requireFrozen = false } = {}) {
  if (!isObject(plan.entities) || !Object.keys(plan.entities).length) {
    add(report, "errors", "entities", "falta el inventario de entidades");
    return;
  }
  if (!isObject(plan.inventory)) {
    add(report, "errors", "inventory", "falta el control editorial del inventario");
  } else {
    requireText(report, plan.inventory.method, "inventory.method");
    requireText(report, plan.inventory.inclusion_rule, "inventory.inclusion_rule");
    requireText(report, plan.inventory.exclusion_rule, "inventory.exclusion_rule");
    if (requireFrozen && plan.inventory.frozen !== true) {
      add(report, "errors", "inventory.frozen", "debe aprobarse y congelarse antes de disenar modelos");
    }
    if (requireFrozen) {
      requireText(report, plan.inventory.approved_by, "inventory.approved_by");
      requireText(report, plan.inventory.approved_at, "inventory.approved_at");
    } else if (plan.inventory.frozen !== true) {
      add(report, "warnings", "inventory.frozen", "inventario completo pero pendiente de aprobacion editorial");
    }
  }

  const mythSlugs = new Set(Object.keys(plan.myths || {}));
  const actualMythsByEntity = new Map(Object.keys(plan.entities).map((id) => [id, []]));
  for (const [slug, myth] of Object.entries(plan.myths || {})) {
    requireText(report, myth?.title, `myths.${slug}.title`);
    const extraction = myth?.extraction;
    if (!isObject(extraction)) {
      add(report, "errors", `myths.${slug}.extraction`, "falta la bitacora de extraccion de entidades");
    } else {
      const fields = requireList(report, extraction.reviewed_fields, `myths.${slug}.extraction.reviewed_fields`);
      for (const field of ["mito", "historia", "versiones", "research_notes"]) {
        if (!fields.includes(field)) add(report, "errors", `myths.${slug}.extraction.reviewed_fields`, `falta revisar ${field}`);
      }
      const passes = requireList(report, extraction.passes, `myths.${slug}.extraction.passes`);
      for (const pass of EXTRACTION_PASSES) {
        if (!passes.includes(pass)) add(report, "errors", `myths.${slug}.extraction.passes`, `falta la pasada ${pass}`);
      }
      if (!Array.isArray(extraction.unresolved_mentions)) {
        add(report, "errors", `myths.${slug}.extraction.unresolved_mentions`, "debe ser lista explicita, incluso []");
      }
      if (!["agent_reviewed", "editorial_approved"].includes(extraction.review_status)) {
        add(report, "errors", `myths.${slug}.extraction.review_status`, "debe ser agent_reviewed o editorial_approved");
      }
      if (requireFrozen && extraction.review_status !== "editorial_approved") {
        add(report, "errors", `myths.${slug}.extraction.review_status`, "la extraccion debe aprobarse editorialmente antes del diseno");
      }
      requireText(report, extraction.reviewed_at, `myths.${slug}.extraction.reviewed_at`);
      requireText(report, extraction.note, `myths.${slug}.extraction.note`);
    }
    const refs = requireList(report, myth?.entity_refs, `myths.${slug}.entity_refs`);
    const ids = refs.map((ref) => ref?.entity_id).filter(hasText);
    const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
    if (duplicates.length) add(report, "errors", `myths.${slug}.entity_refs`, `entidades repetidas: ${unique(duplicates).join(", ")}`);
    if (!refs.some((ref) => ref?.role === "primary")) {
      add(report, "errors", `myths.${slug}.entity_refs`, "cada mito necesita al menos una entidad primaria");
    }
    for (const [index, ref] of refs.entries()) {
      const path = `myths.${slug}.entity_refs[${index}]`;
      if (!isObject(ref)) {
        add(report, "errors", path, "debe ser objeto");
        continue;
      }
      requireText(report, ref.entity_id, `${path}.entity_id`);
      if (!Object.hasOwn(plan.entities, ref.entity_id)) {
        add(report, "errors", `${path}.entity_id`, `entidad desconocida: ${ref.entity_id}`);
      } else {
        actualMythsByEntity.get(ref.entity_id).push(slug);
      }
      if (!MYTH_ENTITY_ROLES_V3.includes(ref.role)) add(report, "errors", `${path}.role`, `rol invalido: ${ref.role || "vacio"}`);
      requireText(report, ref.note, `${path}.note`);
    }
  }

  for (const [entityId, entity] of Object.entries(plan.entities)) {
    const path = `entities.${entityId}`;
    if (!isObject(entity)) {
      add(report, "errors", path, "debe ser objeto");
      continue;
    }
    requireText(report, entity.name, `${path}.name`);
    if (!ENTITY_KINDS_V3.includes(entity.kind)) add(report, "errors", `${path}.kind`, `tipo invalido: ${entity.kind || "vacio"}`);
    if (!VISUAL_STATUSES_V3.includes(entity.visual_status)) add(report, "errors", `${path}.visual_status`, `estado invalido: ${entity.visual_status || "vacio"}`);
    if (!EVIDENCE_BASES_V3.includes(entity.evidence_basis)) add(report, "errors", `${path}.evidence_basis`, `base invalida: ${entity.evidence_basis || "vacia"}`);
    if (!SENSITIVITIES_V3.includes(entity.sensitivity)) add(report, "errors", `${path}.sensitivity`, `sensibilidad invalida: ${entity.sensitivity || "vacia"}`);
    if (!Array.isArray(entity.aliases)) add(report, "errors", `${path}.aliases`, "debe ser lista explicita, incluso []");
    requireList(report, entity.states, `${path}.states`);
    requireText(report, entity.description, `${path}.description`);
    const declaredMyths = unique(requireList(report, entity.myth_refs, `${path}.myth_refs`));
    for (const slug of declaredMyths) if (!mythSlugs.has(slug)) add(report, "errors", `${path}.myth_refs`, `mito desconocido: ${slug}`);
    const actualMyths = unique(actualMythsByEntity.get(entityId) || []);
    const missingMyths = actualMyths.filter((slug) => !declaredMyths.includes(slug));
    const phantomMyths = declaredMyths.filter((slug) => !actualMyths.includes(slug));
    if (missingMyths.length) add(report, "errors", `${path}.myth_refs`, `faltan usos: ${missingMyths.join(", ")}`);
    if (phantomMyths.length) add(report, "errors", `${path}.myth_refs`, `usos no citados por mitos: ${phantomMyths.join(", ")}`);
    const evidence = requireList(report, entity.evidence, `${path}.evidence`);
    for (const [index, item] of evidence.entries()) {
      if (!isObject(item)) {
        add(report, "errors", `${path}.evidence[${index}]`, "debe ser objeto");
        continue;
      }
      if (!declaredMyths.includes(item.myth)) add(report, "errors", `${path}.evidence[${index}].myth`, "debe pertenecer a myth_refs");
      if (!["mito", "historia", "versiones", "research_notes"].includes(item.field)) {
        add(report, "errors", `${path}.evidence[${index}].field`, "campo de corpus invalido");
      }
      requireText(report, item.note, `${path}.evidence[${index}].note`);
    }
    if (!Array.isArray(entity.model_refs)) add(report, "errors", `${path}.model_refs`, "debe ser lista explicita, incluso []");
    if (!Array.isArray(entity.legacy_model_refs)) add(report, "errors", `${path}.legacy_model_refs`, "debe ser lista explicita, incluso []");

    if (entity.visual_status === "required") {
      const requirements = unique(requireList(report, entity.model_requirements, `${path}.model_requirements`));
      for (const purpose of requirements) {
        if (!ENTITY_MODEL_PURPOSES.has(purpose)) add(report, "errors", `${path}.model_requirements`, `proposito invalido para cobertura: ${purpose}`);
      }
      if (entity.placeholder === true) add(report, "errors", `${path}.placeholder`, "una entidad requerida no puede ser placeholder");
    } else if (entity.visual_status === "embedded") {
      requireText(report, entity.covered_by, `${path}.covered_by`);
      if (hasText(entity.covered_by) && !Object.hasOwn(plan.entities, entity.covered_by)) {
        add(report, "errors", `${path}.covered_by`, `entidad desconocida: ${entity.covered_by}`);
      }
      requireText(report, entity.coverage_note, `${path}.coverage_note`);
    } else if (entity.visual_status === "excluded") {
      requireText(report, entity.exclusion_reason, `${path}.exclusion_reason`);
    }
  }
}

function validateDesign(plan, report) {
  if (!isObject(plan.models)) {
    add(report, "errors", "models", "falta la biblioteca de modelos V3");
    return;
  }
  for (const [modelId, model] of Object.entries(plan.models)) {
    const path = `models.${modelId}`;
    if (!isObject(model)) {
      add(report, "errors", path, "debe ser objeto");
      continue;
    }
    if (!MODEL_PURPOSES.includes(model.purpose)) add(report, "errors", `${path}.purpose`, `proposito invalido: ${model.purpose || "vacio"}`);
    const entityRefs = unique(requireList(report, model.entity_refs, `${path}.entity_refs`));
    for (const entityId of entityRefs) if (!Object.hasOwn(plan.entities || {}, entityId)) add(report, "errors", `${path}.entity_refs`, `entidad desconocida: ${entityId}`);
    if (model.placeholder === true && entityRefs.some((id) => plan.entities?.[id]?.visual_status === "required")) {
      add(report, "errors", `${path}.placeholder`, "un placeholder no cubre una entidad requerida");
    }
    if (ENTITY_MODEL_PURPOSES.has(model.purpose)) {
      if (!isObject(model.design_contract)) {
        add(report, "errors", `${path}.design_contract`, "falta contrato de diseno");
      } else {
        for (const field of DESIGN_FIELDS) {
          const value = model.design_contract[field];
          if (Array.isArray(value)) requireList(report, value, `${path}.design_contract.${field}`);
          else requireText(report, value, `${path}.design_contract.${field}`);
        }
      }
      const views = requireList(report, model.views, `${path}.views`);
      if (model.purpose === "identity_sheet" && entityRefs.some((id) => IDENTITY_KINDS.has(plan.entities?.[id]?.kind)) && !views.some((view) => view?.view_type === "canonical_full_body")) {
        add(report, "errors", `${path}.views`, "las fichas de identidad corporal de personajes, criaturas y animales exigen canonical_full_body");
      }
    }
  }

  for (const [entityId, entity] of Object.entries(plan.entities || {})) {
    if (entity.visual_status !== "required") continue;
    const refs = unique(requireList(report, entity.model_refs, `entities.${entityId}.model_refs`));
    const models = refs.map((id) => plan.models?.[id]).filter(Boolean);
    for (const id of refs) if (!Object.hasOwn(plan.models, id)) add(report, "errors", `entities.${entityId}.model_refs`, `modelo desconocido: ${id}`);
    for (const requirement of entity.model_requirements || []) {
      if (!models.some((model) => model.purpose === requirement && model.placeholder !== true && model.entity_refs?.includes(entityId))) {
        add(report, "errors", `entities.${entityId}.model_refs`, `falta modelo real con proposito ${requirement}`);
      }
    }
  }
}

function validatePilot(plan, report) {
  const pilot = plan.pilot;
  if (!isObject(pilot)) {
    add(report, "errors", "pilot", "falta el piloto multicategoria");
    return;
  }
  if (pilot.status !== "approved") add(report, "errors", "pilot.status", "debe estar approved antes de producir en serie");
  const requiredKinds = unique(requireList(report, pilot.required_kinds, "pilot.required_kinds"));
  const modelIds = unique(requireList(report, pilot.model_ids, "pilot.model_ids"));
  for (const kind of requiredKinds) {
    const covered = modelIds.some((modelId) => (plan.models?.[modelId]?.entity_refs || []).some((entityId) => plan.entities?.[entityId]?.kind === kind));
    if (!covered) add(report, "errors", "pilot.model_ids", `falta piloto de categoria ${kind}`);
  }
  requireText(report, pilot.approved_by, "pilot.approved_by");
  requireText(report, pilot.approved_at, "pilot.approved_at");
  requireText(report, pilot.contact_sheet, "pilot.contact_sheet");
}

function validateGeneration(plan, report) {
  if (plan.generation_locked !== false) add(report, "errors", "generation_locked", "la generacion sigue bloqueada");
  const batch = plan.generation_batch;
  if (!isObject(batch)) {
    add(report, "errors", "generation_batch", "falta la tanda congelada");
    return;
  }
  requireText(report, batch.id, "generation_batch.id");
  const ids = unique(requireList(report, batch.model_ids, "generation_batch.model_ids"));
  for (const id of ids) if (!Object.hasOwn(plan.models || {}, id)) add(report, "errors", "generation_batch.model_ids", `modelo desconocido: ${id}`);
  if (batch.quality !== "medium") add(report, "errors", "generation_batch.quality", "la Biblia se produce en medium");
  if (batch.framing !== "immersive_full_bleed") add(report, "errors", "generation_batch.framing", "debe ser immersive_full_bleed");
  if (batch.surface_finish !== "layered_depth_no_exposed_support") add(report, "errors", "generation_batch.surface_finish", "debe conservar profundidad por capas sin soporte exterior");
}

function validateComplete(plan, report) {
  const coverage = deriveInventoryCoverage(plan);
  if (coverage.remaining_entities !== 0) {
    add(report, "errors", "completion.coverage", `faltan ${coverage.remaining_entities} entidades requeridas con todos sus modelos`);
  }
  const completion = plan.completion;
  if (!isObject(completion)) {
    add(report, "errors", "completion", "falta el cierre editorial");
    return;
  }
  if (completion.status !== "complete") add(report, "errors", "completion.status", "debe ser complete");
  if (completion.qa_passed !== true) add(report, "errors", "completion.qa_passed", "falta QA individual y de continuidad");
  requireText(report, completion.contact_sheet, "completion.contact_sheet");
  requireText(report, completion.approved_by, "completion.approved_by");
  requireText(report, completion.approved_at, "completion.approved_at");
}

export function validateBibleV3(plan, { stage = "research" } = {}) {
  const report = {
    ok: false,
    stage,
    errors: [],
    warnings: [],
    summary: {},
  };
  if (!PREFLIGHT_STAGES_V3.includes(stage)) {
    add(report, "errors", "stage", `etapa invalida: ${stage}`);
    return report;
  }
  if (!isObject(plan)) {
    add(report, "errors", "plan", "debe ser objeto");
    return report;
  }
  if (plan.schema !== BIBLIA_V3_SCHEMA) add(report, "errors", "schema", `debe ser ${BIBLIA_V3_SCHEMA}`);
  requireText(report, plan.community, "community");
  validateResearch(plan, report);

  const researchReady = report.errors.length === 0;
  if (stage !== "research" && researchReady) validateInventory(plan, report, { requireFrozen: stage !== "inventory" });

  // Un fallo temprano cierra la compuerta y evita cientos de errores derivados.
  // El editor debe ver primero la decision que realmente desbloquea el proceso.
  const inventoryReady = report.errors.length === 0;
  if (["design", "pilot", "generate", "complete"].includes(stage) && inventoryReady) validateDesign(plan, report);
  const designReady = report.errors.length === 0;
  if (["pilot", "generate", "complete"].includes(stage) && designReady) validatePilot(plan, report);
  const pilotReady = report.errors.length === 0;
  if (["generate", "complete"].includes(stage) && pilotReady) validateGeneration(plan, report);
  if (stage === "complete") validateComplete(plan, report);

  report.summary = {
    myths: Object.keys(plan.myths || {}).length,
    ...deriveInventoryCoverage(plan),
    models: Object.keys(plan.models || {}).length,
  };
  report.ok = report.errors.length === 0;
  return report;
}
