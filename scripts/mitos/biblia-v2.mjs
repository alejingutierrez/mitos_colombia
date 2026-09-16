/**
 * Contrato verificable de la Biblia visual V2.
 *
 * La V1 comprobaba sobre todo continuidad física (archivo, referencia, formato).
 * La V2 añade lo que debe existir ANTES de generar: evidencia, límites culturales,
 * gramática mítica, firma de magia y modelos que hagan visibles esas decisiones.
 * Este módulo no llama proveedores ni escribe archivos.
 */

import { IMAGE_QUALITY_POLICY } from "../../src/lib/image-quality-policy.js";

export const BIBLIA_V2_SCHEMA = "mitos-colombia-biblia-visual/v2";

export const PREFLIGHT_STAGES = ["research", "design", "generate"];

export const SOURCE_ROLES = [
  "community_voice",
  "primary_or_early",
  "academic",
  "territorial",
  "comparative",
];

export const CLAIM_STATUSES = [
  "documented_core",
  "variant",
  "contemporary_memory",
  "academic_hypothesis",
  "editorial_interpretation",
  "uncertain",
];

export const SENSITIVITY_LEVELS = [
  "public",
  "contextual",
  "consult_required",
  "do_not_visualize",
];

export const MAGIC_MODES = [
  "manifest",
  "latent",
  "transformative",
  "symbolic",
  "none_attested",
];

export const MAGIC_INTENSITIES = [
  "absent",
  "latent",
  "threshold",
  "manifest",
  "rupture",
  "echo",
];

export const MODEL_KINDS = [
  "personaje",
  "criatura",
  "animal",
  "objeto",
  "planta",
  "paisaje",
  "arquitectura",
  "fenomeno",
  "transformacion",
  "gesto_ritual",
  "relacion",
  "huella",
];

export const MODEL_LAYERS = ["ancla", "magia", "continuidad"];

const SOURCE_BACKED_CLAIMS = new Set([
  "documented_core",
  "variant",
  "contemporary_memory",
  "academic_hypothesis",
]);

const GRAMMAR_FIELDS = [
  "ordinary_world",
  "extraordinary_fact",
  "magic_rule",
  "limit_or_cost",
  "transformation",
  "trace",
  "emotional_center",
];

const SIGNATURE_FIELDS = [
  "material_translation",
  "light_behavior",
  "scale_behavior",
  "movement_behavior",
  "genericity_test",
];

const VISUAL_SYSTEM_FIELDS = ["thesis", "palette_logic"];
const ASPECTS = new Set(["1:1", "16:9", "9:16", "3:2", "2:3"]);
const ERA_REGISTERS = new Set([
  "prehispanico",
  "colonial_rural",
  "indeterminado",
  "contemporaneo_wayuu",
  "mitico_wayuu",
  "historico_wayuu",
]);

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
  if (!hasText(value)) add(report, "errors", path, "debe ser texto no vacío");
}

function requireList(report, value, path, minimum = 1) {
  if (!Array.isArray(value) || value.length < minimum) {
    add(report, "errors", path, `debe contener al menos ${minimum} elemento(s)`);
    return [];
  }
  return value;
}

function validateResearchRoot(plan, report) {
  const corpus = plan.corpus;
  if (!isObject(corpus)) {
    add(report, "errors", "corpus", "falta el corpus congelado");
  } else {
    if (corpus.frozen !== true) add(report, "errors", "corpus.frozen", "debe ser true antes de investigar en serie");
    requireText(report, corpus.frozen_at, "corpus.frozen_at");
    const slugs = requireList(report, corpus.myth_slugs, "corpus.myth_slugs");
    const duplicates = slugs.filter((slug, index) => slugs.indexOf(slug) !== index);
    if (duplicates.length) add(report, "errors", "corpus.myth_slugs", `contiene duplicados: ${unique(duplicates).join(", ")}`);

    const planSlugs = Object.keys(plan.myths || {});
    const absent = unique(slugs).filter((slug) => !planSlugs.includes(slug));
    const extra = planSlugs.filter((slug) => !unique(slugs).includes(slug));
    if (absent.length) add(report, "errors", "corpus.myth_slugs", `faltan expedientes para: ${absent.join(", ")}`);
    if (extra.length) add(report, "errors", "myths", `hay mitos fuera del corpus congelado: ${extra.join(", ")}`);
  }

  const research = plan.research;
  if (!isObject(research)) {
    add(report, "errors", "research", "falta el bloque de investigación visual");
    return new Map();
  }

  const sources = requireList(report, research.sources, "research.sources");
  const sourceMap = new Map();
  for (const [index, source] of sources.entries()) {
    const path = `research.sources[${index}]`;
    if (!isObject(source)) {
      add(report, "errors", path, "debe ser un objeto");
      continue;
    }
    requireText(report, source.id, `${path}.id`);
    if (hasText(source.id) && sourceMap.has(source.id)) add(report, "errors", `${path}.id`, `id repetido: ${source.id}`);
    if (hasText(source.id)) sourceMap.set(source.id, source);
    if (!SOURCE_ROLES.includes(source.role)) add(report, "errors", `${path}.role`, `rol inválido: ${source.role || "vacío"}`);
    requireText(report, source.title, `${path}.title`);
    requireText(report, source.locator, `${path}.locator`);
    requireText(report, source.supports, `${path}.supports`);
    requireText(report, source.limitations, `${path}.limitations`);
  }

  const boundaries = research.cultural_boundaries;
  if (!isObject(boundaries)) {
    add(report, "errors", "research.cultural_boundaries", "falta clasificar lo público, lo consultable y lo no visualizable");
  } else {
    for (const key of ["public", "consult_before_visualizing", "do_not_visualize"]) {
      if (!Array.isArray(boundaries[key])) add(report, "errors", `research.cultural_boundaries.${key}`, "debe ser una lista explícita, incluso []");
    }
  }

  const review = research.community_review;
  if (!isObject(review)) {
    add(report, "errors", "research.community_review", "falta registrar el estado de revisión cultural");
  } else {
    if (!["pending", "approved", "documented_exception"].includes(review.status)) {
      add(report, "errors", "research.community_review.status", "debe ser pending, approved o documented_exception");
    }
    requireList(report, review.scope, "research.community_review.scope");
    requireText(report, review.notes, "research.community_review.notes");
    if (review.status === "documented_exception") {
      requireText(report, review.reason, "research.community_review.reason");
      requireList(report, review.fallback_safeguards, "research.community_review.fallback_safeguards", 2);
    }
  }

  return sourceMap;
}

function validateVisualSystem(plan, report) {
  const system = plan.visual_system;
  if (!isObject(system)) {
    add(report, "errors", "visual_system", "falta el sistema visual de la comunidad");
    return;
  }
  for (const field of VISUAL_SYSTEM_FIELDS) requireText(report, system[field], `visual_system.${field}`);
  requireList(report, system.territory_anchors, "visual_system.territory_anchors", 2);
  requireList(report, system.materials, "visual_system.materials", 2);
  requireList(report, system.generic_fantasy_to_avoid, "visual_system.generic_fantasy_to_avoid", 2);
  requireList(report, system.magic_principles, "visual_system.magic_principles", 2);
}

function validateMythResearch(slug, myth, sourceMap, report) {
  const base = `myths.${slug}`;
  if (!isObject(myth)) {
    add(report, "errors", base, "debe ser un objeto");
    return { claims: new Map(), magicMode: null };
  }
  requireText(report, myth.title, `${base}.title`);

  const evidence = myth.evidence;
  if (!isObject(evidence)) {
    add(report, "errors", `${base}.evidence`, "falta la matriz de evidencia visual");
    return { claims: new Map(), magicMode: null };
  }

  const sourceIds = unique(requireList(report, evidence.source_ids, `${base}.evidence.source_ids`));
  for (const id of sourceIds) {
    if (!sourceMap.has(id)) add(report, "errors", `${base}.evidence.source_ids`, `fuente desconocida: ${id}`);
  }
  if (sourceIds.length < 5 && !hasText(evidence.documented_gap)) {
    add(report, "errors", `${base}.evidence.source_ids`, "requiere cinco fuentes útiles o una carencia documental explicada");
  }
  const roles = unique(sourceIds.map((id) => sourceMap.get(id)?.role).filter(Boolean));
  if (roles.length < 3 && !hasText(evidence.documented_gap)) {
    add(report, "errors", `${base}.evidence.source_ids`, "las fuentes deben cubrir al menos tres funciones distintas");
  }
  for (const role of SOURCE_ROLES) {
    if (!roles.includes(role)) add(report, "warnings", `${base}.evidence.source_ids`, `función documental ausente: ${role}`);
  }

  const claims = new Map();
  for (const [index, claim] of requireList(report, evidence.claims, `${base}.evidence.claims`).entries()) {
    const path = `${base}.evidence.claims[${index}]`;
    if (!isObject(claim)) {
      add(report, "errors", path, "debe ser un objeto");
      continue;
    }
    requireText(report, claim.id, `${path}.id`);
    requireText(report, claim.statement, `${path}.statement`);
    if (hasText(claim.id) && claims.has(claim.id)) add(report, "errors", `${path}.id`, `id repetido: ${claim.id}`);
    if (hasText(claim.id)) claims.set(claim.id, claim);
    if (!CLAIM_STATUSES.includes(claim.status)) add(report, "errors", `${path}.status`, `estado inválido: ${claim.status || "vacío"}`);
    if (!SENSITIVITY_LEVELS.includes(claim.sensitivity)) add(report, "errors", `${path}.sensitivity`, `sensibilidad inválida: ${claim.sensitivity || "vacía"}`);

    const claimSources = unique(Array.isArray(claim.source_ids) ? claim.source_ids : []);
    if (SOURCE_BACKED_CLAIMS.has(claim.status) && !claimSources.length) {
      add(report, "errors", `${path}.source_ids`, "una afirmación documental debe citar al menos una fuente");
    }
    for (const id of claimSources) {
      if (!sourceMap.has(id)) add(report, "errors", `${path}.source_ids`, `fuente desconocida: ${id}`);
    }
    if (claim.status === "editorial_interpretation" && claim.reversible !== true) {
      add(report, "errors", `${path}.reversible`, "una invención o lectura editorial debe ser explícitamente reversible");
    }
  }

  const grammar = myth.mythic_grammar;
  if (!isObject(grammar)) add(report, "errors", `${base}.mythic_grammar`, "falta extraer la gramática mítica");
  else for (const field of GRAMMAR_FIELDS) requireText(report, grammar[field], `${base}.mythic_grammar.${field}`);

  const signature = myth.magic_signature;
  if (!isObject(signature)) {
    add(report, "errors", `${base}.magic_signature`, "falta la firma de magia, incluso si el modo es none_attested");
    return { claims, magicMode: null };
  }
  if (!MAGIC_MODES.includes(signature.mode)) add(report, "errors", `${base}.magic_signature.mode`, `modo inválido: ${signature.mode || "vacío"}`);
  for (const field of SIGNATURE_FIELDS) requireText(report, signature[field], `${base}.magic_signature.${field}`);
  requireList(report, signature.distinctive_elements, `${base}.magic_signature.distinctive_elements`, 2);
  if (!isObject(signature.intensity_curve)) {
    add(report, "errors", `${base}.magic_signature.intensity_curve`, "falta la curva entrada/acto/huella");
  } else {
    for (const beat of ["entry", "act", "trace"]) {
      if (!MAGIC_INTENSITIES.includes(signature.intensity_curve[beat])) {
        add(report, "errors", `${base}.magic_signature.intensity_curve.${beat}`, `intensidad inválida: ${signature.intensity_curve[beat] || "vacía"}`);
      }
    }
  }
  return { claims, magicMode: signature.mode };
}

function splitEvidenceRef(ref) {
  const separator = String(ref).indexOf(":");
  if (separator < 1) return null;
  return { slug: ref.slice(0, separator), claimId: ref.slice(separator + 1) };
}

function validateModelLibrary(plan, mythContexts, report) {
  const base = "models";
  if (!isObject(plan.models) || !Object.keys(plan.models).length) {
    add(report, "errors", base, "debe declarar la biblioteca comunitaria antes de producir fichas");
    return;
  }

  const viewIds = new Set();
  for (const [modelId, model] of Object.entries(plan.models)) {
    for (const view of model?.views || []) {
      if (hasText(view?.id)) viewIds.add(`${modelId}:${view.id}`);
    }
  }

  const consumers = new Map(Object.keys(plan.models).map((modelId) => [modelId, []]));
  for (const [slug, context] of mythContexts) {
    const refs = unique(requireList(report, context.myth.model_refs, `myths.${slug}.model_refs`));
    for (const modelId of refs) {
      if (!Object.hasOwn(plan.models, modelId)) add(report, "errors", `myths.${slug}.model_refs`, `modelo desconocido: ${modelId}`);
      else consumers.get(modelId).push(slug);
    }
  }

  for (const [modelId, model] of Object.entries(plan.models)) {
    const path = `${base}.${modelId}`;
    if (!isObject(model)) {
      add(report, "errors", path, "debe ser un objeto");
      continue;
    }
    if (!MODEL_KINDS.includes(model.kind)) add(report, "errors", `${path}.kind`, `tipo inválido: ${model.kind || "vacío"}`);
    if (!MODEL_LAYERS.includes(model.layer)) add(report, "errors", `${path}.layer`, `capa inválida: ${model.layer || "vacía"}`);
    requireText(report, model.description, `${path}.description`);
    requireList(report, model.invariants, `${path}.invariants`);
    requireList(report, model.allowed_variations, `${path}.allowed_variations`);
    requireList(report, model.forbidden_variations, `${path}.forbidden_variations`);
    requireText(report, model.introduced_by, `${path}.introduced_by`);
    if (hasText(model.introduced_by) && !mythContexts.has(model.introduced_by)) {
      add(report, "errors", `${path}.introduced_by`, `mito desconocido: ${model.introduced_by}`);
    }
    const usedBy = unique(requireList(report, model.used_by, `${path}.used_by`));
    for (const slug of usedBy) {
      if (!mythContexts.has(slug)) add(report, "errors", `${path}.used_by`, `mito desconocido: ${slug}`);
    }
    if (hasText(model.introduced_by) && !usedBy.includes(model.introduced_by)) {
      add(report, "errors", `${path}.used_by`, "debe incluir el mito que introduce el modelo");
    }
    const actualConsumers = unique(consumers.get(modelId) || []);
    const missingConsumers = actualConsumers.filter((slug) => !usedBy.includes(slug));
    const phantomConsumers = usedBy.filter((slug) => !actualConsumers.includes(slug));
    if (missingConsumers.length) add(report, "errors", `${path}.used_by`, `faltan consumidores declarados: ${missingConsumers.join(", ")}`);
    if (phantomConsumers.length) add(report, "errors", `${path}.used_by`, `declara consumidores que no citan el modelo: ${phantomConsumers.join(", ")}`);

    const evidenceRefs = unique(requireList(report, model.evidence_refs, `${path}.evidence_refs`));
    for (const ref of evidenceRefs) {
      const parsed = splitEvidenceRef(ref);
      const claim = parsed ? mythContexts.get(parsed.slug)?.claims.get(parsed.claimId) : null;
      if (!claim) {
        add(report, "errors", `${path}.evidence_refs`, `afirmación desconocida: ${ref}; usa mito:afirmación`);
        continue;
      }
      if (claim.status === "uncertain") add(report, "errors", `${path}.evidence_refs`, `${ref} es una duda y no puede convertirse en canon visual`);
      if (claim.sensitivity === "do_not_visualize") add(report, "errors", `${path}.evidence_refs`, `${ref} está marcado do_not_visualize`);
    }

    for (const [index, view] of requireList(report, model.views, `${path}.views`).entries()) {
      const viewPath = `${path}.views[${index}]`;
      if (!isObject(view)) {
        add(report, "errors", viewPath, "debe ser un objeto");
        continue;
      }
      requireText(report, view.id, `${viewPath}.id`);
      requireText(report, view.state, `${viewPath}.state`);
      requireText(report, view.purpose, `${viewPath}.purpose`);
      requireText(report, view.description, `${viewPath}.description`);
      if (!ERA_REGISTERS.has(view.era)) add(report, "errors", `${viewPath}.era`, `registro de época inválido o ausente: ${view.era || "vacío"}`);
      if (!Array.isArray(view.reference_views)) {
        add(report, "errors", `${viewPath}.reference_views`, "debe ser una lista explícita, incluso []");
      } else {
        for (const reference of unique(view.reference_views)) {
          if (!viewIds.has(reference)) add(report, "errors", `${viewPath}.reference_views`, `vista desconocida: ${reference}`);
          if (reference === `${modelId}:${view.id}`) add(report, "errors", `${viewPath}.reference_views`, "una vista no puede referenciarse a sí misma");
        }
      }
      if (!ASPECTS.has(view.aspect)) add(report, "errors", `${viewPath}.aspect`, `proporción inválida: ${view.aspect || "vacía"}`);
      if (!MAGIC_INTENSITIES.includes(view.magic_intensity)) {
        add(report, "errors", `${viewPath}.magic_intensity`, `intensidad inválida: ${view.magic_intensity || "vacía"}`);
      }
    }
  }

  for (const [slug, context] of mythContexts) {
    const referenced = (context.myth.model_refs || []).map((modelId) => plan.models[modelId]).filter(Boolean);
    if (!referenced.some((model) => model.layer === "ancla")) {
      add(report, "errors", `myths.${slug}.model_refs`, "cada mito necesita al menos un modelo comunitario de capa ancla");
    }
    if (context.magicMode && context.magicMode !== "none_attested" && !referenced.some((model) => model.layer === "magia")) {
      add(report, "errors", `myths.${slug}.model_refs`, "un mito con magia declarada necesita al menos un modelo comunitario de capa magia");
    }
  }
}

/**
 * Valida una etapa sin escribir ni generar.
 *
 * research: corpus + fuentes + evidencia + gramática mítica.
 * design: research + lenguaje visual + inventario completo de modelos.
 * generate: design + desbloqueo y aprobación explícitos + límites resueltos.
 */
export function validateBibleV2(plan, { stage = "research" } = {}) {
  const report = {
    ok: false,
    stage,
    errors: [],
    warnings: [],
    summary: { myths: 0, sources: 0, models: 0 },
  };
  if (!PREFLIGHT_STAGES.includes(stage)) {
    add(report, "errors", "stage", `etapa inválida: ${stage}`);
    return report;
  }
  if (!isObject(plan)) {
    add(report, "errors", "plan", "el plan debe ser un objeto JSON");
    return report;
  }
  if (plan.schema !== BIBLIA_V2_SCHEMA) add(report, "errors", "schema", `debe ser ${BIBLIA_V2_SCHEMA}`);
  requireText(report, plan.community, "community");
  requireText(report, plan.region, "region");
  if (!["research", "design", "review", "approved"].includes(plan.status)) {
    add(report, "errors", "status", "debe ser research, design, review o approved");
  }
  if (typeof plan.generation_locked !== "boolean") add(report, "errors", "generation_locked", "debe ser booleano y explícito");
  if (!isObject(plan.myths) || !Object.keys(plan.myths).length) add(report, "errors", "myths", "debe contener al menos un mito");

  const sourceMap = validateResearchRoot(plan, report);
  report.summary.sources = sourceMap.size;
  report.summary.myths = Object.keys(plan.myths || {}).length;

  if (stage !== "research") validateVisualSystem(plan, report);
  const mythContexts = new Map();
  for (const [slug, myth] of Object.entries(plan.myths || {})) {
    const { claims, magicMode } = validateMythResearch(slug, myth, sourceMap, report);
    mythContexts.set(slug, { myth, claims, magicMode });
  }
  if (stage !== "research") validateModelLibrary(plan, mythContexts, report);
  report.summary.models = Object.keys(plan.models || {}).length;

  if (stage === "generate") {
    if (plan.generation_locked !== false) add(report, "errors", "generation_locked", "sigue bloqueada: no se puede llamar ninguna API de imagen");
    if (plan.status !== "approved") add(report, "errors", "status", "la generación exige status approved");
    const batch = plan.generation_batch;
    let batchModelIds = [];
    if (!isObject(batch)) {
      add(report, "errors", "generation_batch", "falta congelar una tanda de modelos; la aprobación nunca es global");
    } else {
      requireText(report, batch.id, "generation_batch.id");
      batchModelIds = unique(requireList(report, batch.model_ids, "generation_batch.model_ids"));
      requireText(report, batch.provider, "generation_batch.provider");
      requireText(report, batch.model, "generation_batch.model");
      requireText(report, batch.quality, "generation_batch.quality");
      if (batch.asset_type !== "bible") {
        add(report, "errors", "generation_batch.asset_type", "una tanda de Biblia V2 debe declarar asset_type bible");
      }
      if (batch.quality !== IMAGE_QUALITY_POLICY.bible) {
        add(report, "errors", "generation_batch.quality", `la Biblia sólo se produce en ${IMAGE_QUALITY_POLICY.bible}`);
      }
      if (batch.framing !== "immersive_full_bleed") {
        add(report, "errors", "generation_batch.framing", "debe ser immersive_full_bleed: sin borde exterior, base, cartón, mesa ni estudio visibles");
      }
      if (batch.surface_finish !== "layered_depth_no_exposed_support") {
        add(report, "errors", "generation_batch.surface_finish", "debe ser layered_depth_no_exposed_support: capas internas a distintas distancias, sin perímetro, base ni cartón soporte visibles");
      }
      requireText(report, batch.package_dir, "generation_batch.package_dir");
      requireText(report, batch.output_dir, "generation_batch.output_dir");
      requireList(report, batch.safeguards, "generation_batch.safeguards", 2);
      for (const modelId of batchModelIds) {
        if (!Object.hasOwn(plan.models || {}, modelId)) {
          add(report, "errors", "generation_batch.model_ids", `modelo desconocido: ${modelId}`);
        }
      }
    }
    const batchModelSet = new Set(batchModelIds);
    const batchEvidenceRefs = new Set(
      batchModelIds.flatMap((modelId) => plan.models?.[modelId]?.evidence_refs || []),
    );
    const review = plan.research?.community_review;
    if (!review || !["approved", "documented_exception"].includes(review.status)) {
      add(report, "errors", "research.community_review.status", "la generación exige revisión aprobada o una excepción documentada con salvaguardas");
    }
    const pending = (plan.research?.cultural_boundaries?.consult_before_visualizing || []).filter((item) => {
      if (!isObject(item) || item.status === "resolved") return !isObject(item);
      const blockedModelIds = Array.isArray(item.blocked_model_ids) ? item.blocked_model_ids : [];
      return !blockedModelIds.length || blockedModelIds.some((modelId) => batchModelSet.has(modelId));
    });
    if (pending.length) add(report, "errors", "research.cultural_boundaries.consult_before_visualizing", `${pending.length} asunto(s) siguen sin resolver`);
    const sensitiveClaims = [];
    for (const [slug, myth] of Object.entries(plan.myths || {})) {
      for (const claim of myth?.evidence?.claims || []) {
        const ref = `${slug}:${claim.id || "sin-id"}`;
        if (
          claim.sensitivity === "consult_required" &&
          claim.consultation_status !== "resolved" &&
          batchEvidenceRefs.has(ref)
        ) {
          sensitiveClaims.push(ref);
        }
      }
    }
    if (sensitiveClaims.length) add(report, "errors", "myths.*.evidence.claims", `afirmaciones sensibles sin resolver: ${sensitiveClaims.join(", ")}`);
    const approval = plan.approval;
    if (!isObject(approval)) add(report, "errors", "approval", "falta la aprobación editorial final");
    else {
      requireText(report, approval.approved_by, "approval.approved_by");
      requireText(report, approval.approved_at, "approval.approved_at");
      requireText(report, approval.scope, "approval.scope");
      const approvedModelIds = unique(requireList(report, approval.model_ids, "approval.model_ids"));
      const outsideApproval = batchModelIds.filter((modelId) => !approvedModelIds.includes(modelId));
      const outsideBatch = approvedModelIds.filter((modelId) => !batchModelSet.has(modelId));
      if (outsideApproval.length || outsideBatch.length) {
        add(
          report,
          "errors",
          "approval.model_ids",
          "debe coincidir exactamente con generation_batch.model_ids",
        );
      }
    }
  }

  report.ok = report.errors.length === 0;
  return report;
}
