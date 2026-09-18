import assert from "node:assert/strict";
import test from "node:test";

import { validateBibleV2 } from "./biblia-v2.mjs";
import { buildVisualModelPromptV2 } from "./art-direction.mjs";

function fixture() {
  const sources = [
    ["voz", "community_voice"],
    ["temprana", "primary_or_early"],
    ["academica", "academic"],
    ["territorio", "territorial"],
    ["comparativa", "comparative"],
  ].map(([id, role]) => ({
    id,
    role,
    title: `Fuente ${id}`,
    locator: `archivo://${id}`,
    supports: "Una parte delimitada del expediente de prueba.",
    limitations: "No sustituye las demás funciones documentales.",
  }));
  return {
    schema: "mitos-colombia-biblia-visual/v2",
    status: "approved",
    generation_locked: false,
    community: "Comunidad de prueba",
    region: "Andina",
    corpus: { frozen: true, frozen_at: "2026-09-03", myth_slugs: ["mito-prueba"] },
    research: {
      sources,
      cultural_boundaries: { public: ["paisaje"], consult_before_visualizing: [], do_not_visualize: [] },
      community_review: { status: "approved", scope: ["lenguaje visual", "límites"], notes: "Revisión de prueba registrada." },
    },
    visual_system: {
      thesis: "La materia cotidiana deja ver una regla imposible propia del relato.",
      territory_anchors: ["piedra húmeda", "sendero alto"],
      materials: ["papel fibroso", "barro mate"],
      palette_logic: "La claridad sólo aparece donde actúa la fuerza del relato.",
      generic_fantasy_to_avoid: ["aura genérica", "runas inventadas"],
      magic_principles: ["la luz tiene peso", "la huella permanece en la materia"],
    },
    myths: {
      "mito-prueba": {
        title: "Mito de prueba",
        evidence: {
          source_ids: sources.map((source) => source.id),
          claims: [
            {
              id: "nucleo",
              statement: "La luz sale de una piedra y deja una hendidura.",
              status: "documented_core",
              sensitivity: "public",
              source_ids: ["voz", "temprana"],
            },
            {
              id: "traduccion-material",
              statement: "La luz se construye como papel translúcido con peso.",
              status: "editorial_interpretation",
              sensitivity: "public",
              source_ids: [],
              reversible: true,
            },
          ],
        },
        mythic_grammar: {
          ordinary_world: "Una persona espera junto a una piedra opaca.",
          extraordinary_fact: "La piedra abre la claridad desde adentro.",
          magic_rule: "La claridad sólo existe donde la piedra se abre.",
          limit_or_cost: "Cada abertura deja una grieta permanente.",
          transformation: "La piedra pasa de opaca a translúcida sin perder peso.",
          trace: "Una hendidura clara queda en el suelo.",
          emotional_center: "El asombro de descubrir que la luz también hiere la materia.",
        },
        magic_signature: {
          mode: "manifest",
          distinctive_elements: ["claridad con peso", "grieta que permanece"],
          material_translation: "Capas de papel translúcido prensadas dentro de piedra mate.",
          light_behavior: "No ilumina alrededor: ocupa una ranura concreta.",
          scale_behavior: "La piedra sigue pequeña mientras la claridad atraviesa el valle.",
          movement_behavior: "Se abre despacio y luego queda inmóvil.",
          genericity_test: "Sin la piedra, el peso y la grieta, la imagen dejaría de pertenecer a este mito.",
          intensity_curve: { entry: "latent", act: "rupture", trace: "echo" },
        },
        model_refs: ["piedra", "luz_con_peso"],
      },
    },
    models: {
      piedra: {
        kind: "objeto",
        layer: "ancla",
        introduced_by: "mito-prueba",
        used_by: ["mito-prueba"],
        description: "Piedra pequeña, opaca y pesada.",
        evidence_refs: ["mito-prueba:nucleo"],
        invariants: ["grieta central"],
        allowed_variations: ["ángulo de cámara"],
        forbidden_variations: ["símbolos grabados"],
        views: [{ id: "canon", state: "cerrada", purpose: "fijar identidad", description: "Piedra opaca antes del acto.", aspect: "1:1", era: "indeterminado", magic_intensity: "latent", reference_views: [] }],
      },
      luz_con_peso: {
        kind: "fenomeno",
        layer: "magia",
        introduced_by: "mito-prueba",
        used_by: ["mito-prueba"],
        description: "La regla física imposible de la claridad.",
        evidence_refs: ["mito-prueba:nucleo", "mito-prueba:traduccion-material"],
        invariants: ["ocupa la grieta"],
        allowed_variations: ["longitud"],
        forbidden_variations: ["aura", "partículas"],
        views: [{ id: "regla", state: "manifiesta", purpose: "fijar comportamiento", description: "La claridad atraviesa la piedra sin irradiar.", aspect: "16:9", era: "indeterminado", magic_intensity: "manifest", reference_views: ["piedra:canon"] }],
      },
    },
    generation_batch: {
      id: "prueba-01",
      asset_type: "bible",
      model_ids: ["piedra", "luz_con_peso"],
      provider: "OpenAI API",
      model: "gpt-image-2",
      quality: "medium",
      framing: "immersive_full_bleed",
      surface_finish: "layered_depth_no_exposed_support",
      package_dir: "content/mitos-visuales/_openai/prueba",
      output_dir: "output/imagegen/prueba",
      safeguards: ["sin texto", "sin símbolos inventados"],
    },
    approval: {
      approved_by: "Editor de prueba",
      approved_at: "2026-09-03",
      scope: "Investigación, límites, firma de magia y modelos.",
      model_ids: ["piedra", "luz_con_peso"],
    },
  };
}

test("un expediente completo pasa la puerta de generación", () => {
  const report = validateBibleV2(fixture(), { stage: "generate" });
  assert.equal(report.ok, true, JSON.stringify(report.errors, null, 2));
  assert.equal(report.summary.sources, 5);
  assert.equal(report.summary.models, 2);
});

test("la generación queda bloqueada aunque el diseño esté completo", () => {
  const plan = fixture();
  plan.generation_locked = true;
  const report = validateBibleV2(plan, { stage: "generate" });
  assert.equal(report.ok, false);
  assert.ok(report.errors.some((error) => error.path === "generation_locked"));
});

test("la Biblia no puede desviarse a high", () => {
  const plan = fixture();
  plan.generation_batch.quality = "high";
  const report = validateBibleV2(plan, { stage: "generate" });
  assert.equal(report.ok, false);
  assert.ok(report.errors.some((error) => error.path === "generation_batch.quality" && /medium/.test(error.message)));
});

test("una tanda se bloquea si permite ver el soporte de la maqueta", () => {
  const plan = fixture();
  plan.generation_batch.framing = "studio_object";
  const report = validateBibleV2(plan, { stage: "generate" });
  assert.equal(report.ok, false);
  assert.ok(report.errors.some((error) => error.path === "generation_batch.framing"));
});

test("una tanda se bloquea si pierde capas o muestra el soporte exterior", () => {
  const plan = fixture();
  plan.generation_batch.surface_finish = "flat_collage";
  const report = validateBibleV2(plan, { stage: "generate" });
  assert.equal(report.ok, false);
  assert.ok(report.errors.some((error) => error.path === "generation_batch.surface_finish"));
});

test("cada vista exige un registro de época explícito", () => {
  const plan = fixture();
  delete plan.models.piedra.views[0].era;
  const report = validateBibleV2(plan, { stage: "design" });
  assert.equal(report.ok, false);
  assert.ok(report.errors.some((error) => error.path === "models.piedra.views[0].era"));
});

test("una magia declarada necesita un modelo mágico, no sólo personajes y objetos", () => {
  const plan = fixture();
  plan.myths["mito-prueba"].model_refs = ["piedra"];
  plan.models.luz_con_peso.used_by = [];
  const report = validateBibleV2(plan, { stage: "design" });
  assert.equal(report.ok, false);
  assert.ok(report.errors.some((error) => /modelo .*capa magia/.test(error.message)));
});

test("una duda no puede convertirse en canon visual", () => {
  const plan = fixture();
  plan.myths["mito-prueba"].evidence.claims[0].status = "uncertain";
  const report = validateBibleV2(plan, { stage: "design" });
  assert.equal(report.ok, false);
  assert.ok(report.errors.some((error) => /no puede convertirse en canon/.test(error.message)));
});

test("none_attested permite asombro sin inventar un fenómeno sobrenatural", () => {
  const plan = fixture();
  plan.myths["mito-prueba"].magic_signature.mode = "none_attested";
  plan.myths["mito-prueba"].model_refs = ["piedra"];
  delete plan.models.luz_con_peso;
  const report = validateBibleV2(plan, { stage: "design" });
  assert.equal(report.ok, true, JSON.stringify(report.errors, null, 2));
});

test("un asunto que exige consulta bloquea la API aunque el resto esté aprobado", () => {
  const plan = fixture();
  plan.research.cultural_boundaries.consult_before_visualizing = [
    { topic: "Representación sensible", status: "pending" },
  ];
  const report = validateBibleV2(plan, { stage: "generate" });
  assert.equal(report.ok, false);
  assert.ok(report.errors.some((error) => /siguen sin resolver/.test(error.message)));
});

test("una tanda pública puede avanzar sin desbloquear modelos sensibles diferidos", () => {
  const plan = fixture();
  plan.research.cultural_boundaries.consult_before_visualizing = [
    {
      topic: "Representación sensible fuera de la tanda",
      status: "pending",
      blocked_model_ids: ["ser_sensible"],
    },
  ];
  const report = validateBibleV2(plan, { stage: "generate" });
  assert.equal(report.ok, true, JSON.stringify(report.errors, null, 2));
});

test("la aprobación debe coincidir exactamente con los modelos de la tanda", () => {
  const plan = fixture();
  plan.approval.model_ids = ["piedra"];
  const report = validateBibleV2(plan, { stage: "generate" });
  assert.equal(report.ok, false);
  assert.ok(report.errors.some((error) => error.path === "approval.model_ids"));
});

test("el prompt V2 hace visible la regla imposible y bloquea la fantasía intercambiable", () => {
  const myth = fixture().myths["mito-prueba"];
  const models = fixture().models;
  const prompt = buildVisualModelPromptV2({
    comunidad: "Comunidad de prueba",
    region: "Andina",
    modeloId: "luz_con_peso",
    modelo: models.luz_con_peso,
    vista: models.luz_con_peso.views[0],
    mythicGrammar: myth.mythic_grammar,
    magicSignature: myth.magic_signature,
    paleta: "gris piedra y blanco lechoso",
  });
  assert.match(prompt, /La claridad sólo existe donde la piedra se abre/);
  assert.match(prompt, /claridad con peso/);
  assert.match(prompt, /No resolver la magia con aura genérica/);
  assert.match(prompt, /aura; partículas/);
  assert.match(prompt, /borde exterior de la maqueta/);
  assert.match(prompt, /cartón crudo/);
});

test("una ficha ancla sin magia no contamina el territorio con el prodigio", () => {
  const plan = fixture();
  const model = plan.models.piedra;
  model.views[0].magic_intensity = "absent";
  const prompt = buildVisualModelPromptV2({
    comunidad: plan.community,
    region: plan.region,
    modeloId: "piedra",
    modelo: model,
    vista: model.views[0],
    mythicGrammar: plan.myths["mito-prueba"].mythic_grammar,
    magicSignature: plan.myths["mito-prueba"].magic_signature,
    paleta: "gris piedra",
  });
  assert.match(prompt, /SIN REPRESENTAR EL PRODIGIO/);
  assert.doesNotMatch(prompt, /HECHO IMPOSIBLE:/);
});
