import assert from "node:assert/strict";
import test from "node:test";
import { validateBibleV3 } from "./biblia-v3.mjs";
import { wayuuVisualBibleV3 } from "../../editorial/wayuu/visual-bible-v3.mjs";
import { WAYUU_PRODUCTION_DIRECTIONS_V3 } from "../../editorial/wayuu/production-direction-v3.mjs";
import {
  materialCulturePromptLines,
  validateWayuuMaterialCultureDecision,
  WAYUU_MATERIAL_CULTURE_PROTOCOL_V3,
  WAYUU_WARDROBE_REPERTOIRE_V3,
} from "../../editorial/wayuu/material-culture-v3.mjs";

const EXTRACTION_PASSES = [
  "named_entities",
  "unnamed_roles",
  "animals_and_creatures",
  "objects_and_plants",
  "places_and_architecture",
  "states_and_transformations",
  "variant_differences",
];

function entity(name, kind, requirement, { visualStatus = "required", coveredBy } = {}) {
  return {
    name,
    kind,
    aliases: [],
    description: `${name} dentro del relato de prueba.`,
    states: ["canonico"],
    evidence_basis: "documented",
    sensitivity: "public",
    visual_status: visualStatus,
    myth_refs: ["hijo-del-condor"],
    evidence: [{ myth: "hijo-del-condor", field: "mito", note: `${name} aparece en la accion central.` }],
    model_requirements: visualStatus === "required" ? [requirement] : [],
    model_refs: visualStatus === "required" ? [`${name.toLowerCase().replaceAll(" ", "-")}__${requirement}`] : [],
    legacy_model_refs: [],
    ...(visualStatus === "embedded" ? { covered_by: coveredBy, coverage_note: "Se resuelve dentro del modelo indicado." } : {}),
  };
}

function model(entityId, purpose, kind) {
  return {
    purpose,
    entity_refs: [entityId],
    placeholder: false,
    design_contract: {
      distinctive_silhouette: "Silueta individual y reconocible.",
      materials: ["papel fibroso", "capas prensadas"],
      palette_logic: "Paleta propia y separable del resto del elenco.",
      scale: "Escala humana o animal declarada.",
      continuity_markers: ["marca estable de capas", "proporcion constante"],
      documented_features: ["funcion narrativa"],
      editorial_features: ["solucion reversible rotulada"],
    },
    views: [{ id: "canon", view_type: ["personaje", "deidad_fuerza", "criatura", "animal"].includes(kind) ? "canonical_full_body" : "canonical" }],
  };
}

function fixture() {
  const entities = {
    madre: entity("Madre", "personaje", "identity_sheet"),
    hijo: entity("Hijo", "personaje", "identity_sheet"),
    juramia: entity("Juramia", "criatura", "identity_sheet"),
    cueva: entity("Cueva", "lugar", "spatial_model"),
  };
  const models = Object.fromEntries(
    Object.entries(entities).map(([id, item]) => [item.model_refs[0], model(id, item.model_requirements[0], item.kind)]),
  );
  return {
    schema: "mitos-colombia-biblia-visual/v3",
    community: "Wayuu",
    corpus: { frozen: true, myth_slugs: ["hijo-del-condor"] },
    source_snapshot: {
      retrieved_at: "2026-09-03",
      record_count: 1,
      sha256: "abc123",
      fields: ["mito", "historia", "versiones", "research_notes"],
    },
    inventory: {
      method: "Lectura completa y extraccion por pasadas.",
      inclusion_rule: "Todo elemento con funcion de identidad, accion o continuidad.",
      exclusion_rule: "Solo se excluye con razon explicita.",
      frozen: true,
      approved_by: "Editor",
      approved_at: "2026-09-03",
    },
    myths: {
      "hijo-del-condor": {
        title: "El hijo del Condor",
        extraction: {
          reviewed_fields: ["mito", "historia", "versiones", "research_notes"],
          passes: EXTRACTION_PASSES,
          unresolved_mentions: [],
          review_status: "editorial_approved",
          reviewed_at: "2026-09-03",
          note: "Madre, hijo, Juramia y cueva se separan como entidades.",
        },
        entity_refs: [
          { entity_id: "madre", role: "primary", note: "Persona cautiva y liberada." },
          { entity_id: "hijo", role: "primary", note: "Crece y libera a su madre." },
          { entity_id: "juramia", role: "secondary", note: "Condor que inicia el cautiverio." },
          { entity_id: "cueva", role: "setting", note: "Lugar de cautiverio y crecimiento." },
        ],
      },
    },
    entities,
    models,
    pilot: {
      status: "approved",
      required_kinds: ["personaje", "criatura", "lugar"],
      model_ids: Object.keys(models),
      approved_by: "Editor",
      approved_at: "2026-09-03",
      contact_sheet: "pilot/contact-sheet.jpg",
    },
    generation_locked: false,
    generation_batch: {
      id: "pilot",
      model_ids: Object.keys(models),
      quality: "medium",
      framing: "immersive_full_bleed",
      surface_finish: "layered_depth_no_exposed_support",
    },
    completion: {
      status: "complete",
      qa_passed: true,
      contact_sheet: "final/contact-sheet.jpg",
      approved_by: "Editor",
      approved_at: "2026-09-03",
    },
  };
}

test("el inventario pasa antes de que existan modelos, pero advierte si aun no esta congelado", () => {
  const plan = fixture();
  plan.inventory.frozen = false;
  delete plan.inventory.approved_by;
  delete plan.inventory.approved_at;
  plan.models = {};
  for (const entityItem of Object.values(plan.entities)) entityItem.model_refs = [];
  const report = validateBibleV3(plan, { stage: "inventory" });
  assert.equal(report.ok, true, JSON.stringify(report.errors, null, 2));
  assert.equal(report.summary.required_entities, 4);
  assert.equal(report.summary.modeled_entities, 0);
  assert.ok(report.warnings.some((warning) => warning.path === "inventory.frozen"));
});

test("una extraccion que olvida la pasada de animales y criaturas queda bloqueada", () => {
  const plan = fixture();
  plan.myths["hijo-del-condor"].extraction.passes = EXTRACTION_PASSES.filter((item) => item !== "animals_and_creatures");
  const report = validateBibleV3(plan, { stage: "inventory" });
  assert.equal(report.ok, false);
  assert.ok(report.errors.some((error) => /animals_and_creatures/.test(error.message)));
});

test("un personaje citado por el mito debe existir como entidad independiente", () => {
  const plan = fixture();
  plan.myths["hijo-del-condor"].entity_refs.push({ entity_id: "jujia", role: "secondary", note: "Antagonista de las pruebas." });
  const report = validateBibleV3(plan, { stage: "inventory" });
  assert.equal(report.ok, false);
  assert.ok(report.errors.some((error) => /entidad desconocida: jujia/.test(error.message)));
});

test("un modelo magico no sustituye la ficha de identidad de un personaje", () => {
  const plan = fixture();
  const id = plan.entities.hijo.model_refs[0];
  plan.models[id].purpose = "magic_rule";
  const report = validateBibleV3(plan, { stage: "design" });
  assert.equal(report.ok, false);
  assert.ok(report.errors.some((error) => error.path === "entities.hijo.model_refs" && /identity_sheet/.test(error.message)));
});

test("un placeholder no cubre una entidad requerida", () => {
  const plan = fixture();
  const id = plan.entities.madre.model_refs[0];
  plan.models[id].placeholder = true;
  const report = validateBibleV3(plan, { stage: "design" });
  assert.equal(report.ok, false);
  assert.ok(report.errors.some((error) => /placeholder no cubre/.test(error.message)));
});

test("una figura de identidad exige vista canonica de cuerpo completo", () => {
  const plan = fixture();
  const id = plan.entities.juramia.model_refs[0];
  plan.models[id].views[0].view_type = "tableau";
  const report = validateBibleV3(plan, { stage: "design" });
  assert.equal(report.ok, false);
  assert.ok(report.errors.some((error) => error.path === `models.${id}.views`));
});

test("una deidad o fuerza sin anatomia documentada usa presencia y no cuerpo completo", () => {
  const plan = fixture();
  const previousId = plan.entities.madre.model_refs[0];
  delete plan.models[previousId];
  plan.entities.madre.kind = "deidad_fuerza";
  plan.entities.madre.model_requirements = ["presence_model"];
  plan.entities.madre.model_refs = ["madre__presence_model"];
  plan.models.madre__presence_model = model("madre", "presence_model", "deidad_fuerza");
  plan.models.madre__presence_model.views = [{ id: "presencia", view_type: "presence_grammar" }];
  const report = validateBibleV3(plan, { stage: "design" });
  assert.equal(report.ok, true, JSON.stringify(report.errors, null, 2));
});

test("el diseno no puede empezar sin aprobacion editorial del inventario y cada extraccion", () => {
  const plan = fixture();
  plan.inventory.frozen = false;
  plan.myths["hijo-del-condor"].extraction.review_status = "agent_reviewed";
  const report = validateBibleV3(plan, { stage: "design" });
  assert.equal(report.ok, false);
  assert.ok(report.errors.some((error) => error.path === "inventory.frozen"));
  assert.ok(report.errors.some((error) => error.path.endsWith("extraction.review_status")));
});

test("complete usa como denominador las entidades requeridas, no los modelos declarados", () => {
  const plan = fixture();
  const missingModel = plan.entities.cueva.model_refs[0];
  delete plan.models[missingModel];
  const report = validateBibleV3(plan, { stage: "complete" });
  assert.equal(report.ok, false);
  assert.equal(report.summary.remaining_entities, 1);
  assert.ok(report.errors.some((error) => error.path === "completion.coverage"));
});

test("el inventario Wayuu real pasa congelado con 27 bitacoras y 431 entidades reconciliadas", () => {
  const report = validateBibleV3(wayuuVisualBibleV3, { stage: "inventory" });
  assert.equal(report.ok, true, JSON.stringify(report.errors, null, 2));
  assert.equal(report.summary.myths, 27);
  assert.equal(report.summary.entities, 431);
  assert.equal(report.summary.required_entities, 357);
  assert.equal(report.summary.required_assets, 435);
  assert.equal(report.warnings.length, 0);
  assert.equal(wayuuVisualBibleV3.inventory.status, "approved_frozen");
});

test("los 58 activos V2 quedan en cuarentena y los 435 contratos V3 son independientes", () => {
  assert.equal(wayuuVisualBibleV3.legacy_assets.count, 58);
  assert.equal(Object.keys(wayuuVisualBibleV3.models).length, 435);
  assert.ok(Object.values(wayuuVisualBibleV3.legacy_assets.assets).every((asset) => asset.review_status === "pending_reaudit"));
  assert.ok(Object.keys(wayuuVisualBibleV3.models).every((id) => !Object.hasOwn(wayuuVisualBibleV3.legacy_assets.assets, id)));
});

test("el lote 26 cierra Waleker y completa la Biblia Wayuu", () => {
  const report = validateBibleV3(wayuuVisualBibleV3, { stage: "design" });
  assert.equal(report.ok, true, JSON.stringify(report.errors, null, 2));
  assert.equal(report.summary.models, 435);
  assert.equal(report.summary.modeled_entities, 357);
  const pilotReport = validateBibleV3(wayuuVisualBibleV3, { stage: "pilot" });
  assert.equal(pilotReport.ok, true, JSON.stringify(pilotReport.errors, null, 2));
  assert.equal(wayuuVisualBibleV3.pilot.progress.selected_models, 11);
  const generateReport = validateBibleV3(wayuuVisualBibleV3, { stage: "generate" });
  assert.equal(generateReport.ok, true, JSON.stringify(generateReport.errors, null, 2));
  assert.equal(wayuuVisualBibleV3.generation_batch.quality, "medium");
  assert.equal(wayuuVisualBibleV3.generation_batch.id, "wayuu-v3-production-26-waleker-el-origen-del-tejido-medium");
  assert.equal(wayuuVisualBibleV3.generation_batch.model_ids.length, 28);
  assert.equal(wayuuVisualBibleV3.generation_batch.status, "QA_PASS_AFTER_RESEARCH_AND_CORRECTIONS_09");
  assert.equal(wayuuVisualBibleV3.production.progress.selected_models, 435);
  assert.equal(wayuuVisualBibleV3.production.progress.required_models, 435);
  assert.equal(wayuuVisualBibleV3.production.progress.remaining_models, 0);
  assert.equal(wayuuVisualBibleV3.production.completed_myths.length, 27);
  assert.ok(wayuuVisualBibleV3.production.completed_myths.includes("el-indio-pushalna"));
  assert.ok(wayuuVisualBibleV3.production.completed_myths.includes("el-origen-del-fuego"));
  assert.ok(wayuuVisualBibleV3.production.completed_myths.includes("la-sed-da-los-civilizados"));
  assert.ok(wayuuVisualBibleV3.production.completed_myths.includes("el-pequeno-indio-kosina"));
  assert.ok(wayuuVisualBibleV3.production.completed_myths.includes("el-viaje-del-mas-alla"));
  assert.ok(wayuuVisualBibleV3.production.completed_myths.includes("los-dominios-de-juya"));
  assert.ok(wayuuVisualBibleV3.production.completed_myths.includes("ulepala"));
  assert.ok(wayuuVisualBibleV3.production.completed_myths.includes("guanuru"));
  assert.ok(wayuuVisualBibleV3.production.completed_myths.includes("la-majayura-que-pierde-a-los-hombres"));
  assert.ok(wayuuVisualBibleV3.production.completed_myths.includes("umarala"));
  assert.ok(wayuuVisualBibleV3.production.completed_myths.includes("la-chama"));
  assert.ok(wayuuVisualBibleV3.production.completed_myths.includes("la-india-worunka"));
  assert.ok(wayuuVisualBibleV3.production.completed_myths.includes("serranias-de-la-guajira"));
  assert.ok(wayuuVisualBibleV3.production.completed_myths.includes("waleker-el-origen-del-tejido"));
  assert.equal(wayuuVisualBibleV3.next_gate.action, "review_complete_wayuu_bible_before_triptychs");
  const completeReport = validateBibleV3(wayuuVisualBibleV3, { stage: "complete" });
  assert.equal(completeReport.ok, true, JSON.stringify(completeReport.errors, null, 2));
  const umaralaRefs = wayuuVisualBibleV3.myths.umarala.entity_refs.map((ref) => ref.entity_id);
  assert.equal(umaralaRefs.length, 30);
  assert.ok(umaralaRefs.includes("jumajule_umarala"));
  assert.ok(umaralaRefs.includes("hombre_parashi_venado"));
  assert.ok(umaralaRefs.includes("transmision_vida_nombre_umarala"));
  assert.ok(umaralaRefs.includes("curacion_nocturna_umarala"));
  assert.ok(umaralaRefs.includes("partida_occidente_umarala"));
  assert.ok(!umaralaRefs.includes("imitadores_umarala"));
  assert.ok(!umaralaRefs.includes("companero_piel_venado"));
  assert.equal(wayuuVisualBibleV3.entities.paciente_umarala.visual_status, "required");
  assert.deepEqual(wayuuVisualBibleV3.entities.paciente_umarala.model_refs, [
    "paciente_umarala__identity_sheet",
    "paciente_umarala__state_sheet",
  ]);
  assert.deepEqual(wayuuVisualBibleV3.entities.hombre_parashi_venado.model_refs, [
    "hombre_parashi_venado__identity_sheet",
    "hombre_parashi_venado__state_sheet",
  ]);
  assert.equal(wayuuVisualBibleV3.entities.madre_umarala.visual_status, "excluded");
  assert.equal(wayuuVisualBibleV3.entities.resultado_servidor_umarala.visual_status, "excluded");
  assert.match(WAYUU_PRODUCTION_DIRECTIONS_V3.umarala__identity_sheet.focus, /Kotin/);
  assert.match(WAYUU_PRODUCTION_DIRECTIONS_V3.tia_outsu_umarala__identity_sheet.focus, /Wayuushein/);
  assert.match(WAYUU_PRODUCTION_DIRECTIONS_V3.hombre_parashi_venado__identity_sheet.focus, /Kemiisa/);
  assert.match(WAYUU_PRODUCTION_DIRECTIONS_V3.partida_occidente_umarala__phenomenon_rule.focus, /exactamente CUATRO hombres/);
  const chamaRefs = wayuuVisualBibleV3.myths["la-chama"].entity_refs.map((ref) => ref.entity_id);
  assert.equal(chamaRefs.length, 21);
  assert.ok(chamaRefs.includes("companera_chama"));
  assert.ok(chamaRefs.includes("familia_chama"));
  assert.ok(chamaRefs.includes("caballos_hombre_chama"));
  assert.ok(chamaRefs.includes("ollas_mochilas_chama"));
  assert.ok(chamaRefs.includes("esterilla_chama"));
  assert.ok(chamaRefs.includes("manta_roja_chama"));
  assert.ok(chamaRefs.includes("metamorfosis_chama"));
  assert.ok(chamaRefs.includes("transformacion_carga_chama"));
  assert.ok(chamaRefs.includes("desenlace_violento_chama"));
  assert.ok(!chamaRefs.includes("hermanos_chama"));
  assert.ok(!chamaRefs.includes("ollas_transformadas_chama"));
  assert.deepEqual(wayuuVisualBibleV3.entities.la_chama.aliases, []);
  assert.deepEqual(wayuuVisualBibleV3.entities.la_chama.states, [
    "anciana_humana",
    "majayura",
    "tigre_jaguar",
    "huevo",
    "flor_no_especificada",
  ]);
  assert.equal(wayuuVisualBibleV3.entities.nueva_pareja_hombre_chama.visual_status, "required");
  assert.deepEqual(wayuuVisualBibleV3.entities.familia_chama.model_refs, ["familia_chama__group_grammar"]);
  assert.equal(wayuuVisualBibleV3.entities.desenlace_violento_chama.visual_status, "excluded");
  assert.match(WAYUU_PRODUCTION_DIRECTIONS_V3.la_chama__identity_sheet.focus, /cabello gris carbon.*tobillos/);
  assert.match(WAYUU_PRODUCTION_DIRECTIONS_V3.la_chama__state_sheet.focus, /exactamente CINCO formas/);
  assert.match(WAYUU_PRODUCTION_DIRECTIONS_V3.hombre_caballos_chama__identity_sheet.focus, /Kotin arena claro/);
  assert.match(WAYUU_PRODUCTION_DIRECTIONS_V3.hijo_chama__identity_sheet.focus, /Kemiisa verde trupillo/);
  assert.match(WAYUU_PRODUCTION_DIRECTIONS_V3.familia_chama__group_grammar.focus, /exactamente CUATRO parientes/);
  assert.match(WAYUU_PRODUCTION_DIRECTIONS_V3.transformacion_carga_chama__phenomenon_rule.focus, /exactamente CUATRO cadenas/);
  const worunkaRefs = wayuuVisualBibleV3.myths["la-india-worunka"].entity_refs.map((ref) => ref.entity_id);
  assert.equal(worunkaRefs.length, 34);
  for (const requiredRef of [
    "piedra_worunka",
    "color_aves_worunka",
    "transformaciones_cuerpo_worunka",
    "cambio_alianzas_worunka",
    "matas_fruto_rojo_worunka",
    "origen_tumas_worunka",
    "siembra_cosecha_worunka",
    "comunidad_cosecha_worunka",
  ]) assert.ok(worunkaRefs.includes(requiredRef), requiredRef);
  assert.deepEqual(wayuuVisualBibleV3.entities.worunka.states, [
    "embarazada_debil",
    "fortalecida",
    "convertida_en_piedra",
  ]);
  assert.equal(wayuuVisualBibleV3.entities.intervenciones_corporales_explicitas_worunka.visual_status, "excluded");
  assert.equal(wayuuVisualBibleV3.entities.sexualidad_explicita_worunka.visual_status, "excluded");
  assert.equal(wayuuVisualBibleV3.entities.hombre_costillas_worunka.covered_by, "transformaciones_cuerpo_worunka");
  assert.match(WAYUU_PRODUCTION_DIRECTIONS_V3.worunka__identity_sheet.focus, /Wayuushein azul noche/);
  assert.match(WAYUU_PRODUCTION_DIRECTIONS_V3.color_aves_worunka__phenomenon_rule.focus, /exactamente CUATRO destinos aviares/);
  assert.match(WAYUU_PRODUCTION_DIRECTIONS_V3.transformaciones_cuerpo_worunka__phenomenon_rule.focus, /CUATRO operaciones abstractas/);
  assert.match(WAYUU_PRODUCTION_DIRECTIONS_V3.comunidad_cosecha_worunka__group_grammar.focus, /exactamente SEIS personas/);
  const serraniasRefs = wayuuVisualBibleV3.myths["serranias-de-la-guajira"].entity_refs.map((ref) => ref.entity_id);
  assert.equal(serraniasRefs.length, 43);
  for (const requiredRef of [
    "companero_anonimo_serranias",
    "transformacion_viajeros_serranias",
    "retiro_mar_serranias",
    "pozos_salados_mareiwa",
    "morva_serranias",
    "dispersion_semillas_aves_serranias",
    "maschura_serranias",
    "sangre_toro_planta_serranias",
    "sojoo_serranias",
    "ita_totumo_serranias",
    "cavidad_origen",
    "organizacion_vida_serranias",
  ]) assert.ok(serraniasRefs.includes(requiredRef), requiredRef);
  assert.ok(!serraniasRefs.includes("tuna_higo"));
  assert.deepEqual(wayuuVisualBibleV3.entities.companero_anonimo_serranias.model_refs, [
    "companero_anonimo_serranias__identity_sheet",
    "companero_anonimo_serranias__state_sheet",
  ]);
  assert.equal(wayuuVisualBibleV3.entities.sandalias_epits_serranias.covered_by, "epits");
  assert.equal(wayuuVisualBibleV3.entities.marcas_claniles.visual_status, "excluded");
  assert.equal(wayuuVisualBibleV3.entities.hambre_sed_muerte_serranias.visual_status, "excluded");
  assert.match(WAYUU_PRODUCTION_DIRECTIONS_V3.wojoro__identity_sheet.focus, /Kemiisa arcilla, Kotin arena/);
  assert.match(WAYUU_PRODUCTION_DIRECTIONS_V3.epits__state_sheet.focus, /exactamente UN PAR de waireñas/);
  assert.match(WAYUU_PRODUCTION_DIRECTIONS_V3.monkii__group_grammar.focus, /exactamente CUATRO hombres/);
  assert.match(WAYUU_PRODUCTION_DIRECTIONS_V3.transformacion_viajeros_serranias__phenomenon_rule.focus, /nueve pequeñas señales textiles/);
  assert.match(WAYUU_PRODUCTION_DIRECTIONS_V3.organizacion_vida_serranias__phenomenon_rule.focus, /exactamente SEIS adultos/);
  const walekerRefs = wayuuVisualBibleV3.myths["waleker-el-origen-del-tejido"].entity_refs.map((ref) => ref.entity_id);
  assert.equal(walekerRefs.length, 33);
  for (const requiredRef of [
    "uyaaliwa_outshi_waleker",
    "tool_waleker",
    "kulamia_waleker",
    "maawui_waleker",
    "sese_waleker",
    "hermanas_irunuu_waleker",
    "isashii_waleker",
    "suumain_yolujaa_waleker",
    "transformacion_nocturna_waleker",
    "tejido_nocturno_waleker",
    "sueno_chinchorro_waleker",
    "revelacion_secreto_waleker",
    "legado_textil_waleker",
  ]) assert.ok(walekerRefs.includes(requiredRef), requiredRef);
  assert.ok(!walekerRefs.includes("tias_variante_waleker"));
  assert.ok(!walekerRefs.includes("padre_variante_waleker"));
  assert.deepEqual(wayuuVisualBibleV3.entities.irunuu.model_refs, [
    "irunuu__identity_sheet",
    "irunuu__state_sheet",
  ]);
  assert.deepEqual(wayuuVisualBibleV3.entities.hermanas_irunuu_waleker.model_refs, [
    "hermanas_irunuu_waleker__group_grammar",
    "hermanas_irunuu_waleker__state_sheet",
  ]);
  assert.equal(wayuuVisualBibleV3.entities.familia_perdida_wokoloonat.visual_status, "excluded");
  assert.equal(wayuuVisualBibleV3.entities.kalaira_pasado_wokoloonat.visual_status, "excluded");
  assert.match(WAYUU_PRODUCTION_DIRECTIONS_V3.irunuu__identity_sheet.focus, /Kemiisa arena bajo Kotin azul gris/);
  assert.match(WAYUU_PRODUCTION_DIRECTIONS_V3.irunuu__state_sheet.focus, /Aanaláa exterior azul noche/);
  assert.match(WAYUU_PRODUCTION_DIRECTIONS_V3.waleker__state_sheet.focus, /Püna'a arena rojiza/);
  assert.match(WAYUU_PRODUCTION_DIRECTIONS_V3.hermanas_irunuu_waleker__state_sheet.focus, /exactamente TRES hermanas.*exactamente TRES murciélagos/);
  assert.match(WAYUU_PRODUCTION_DIRECTIONS_V3.legado_textil_waleker__phenomenon_rule.focus, /exactamente CUATRO representantes materiales/);
  assert.match(WAYUU_PRODUCTION_DIRECTIONS_V3.legado_textil_waleker__phenomenon_rule.focus, /exactamente SEIS manos abstractas/);
  const puroRefs = wayuuVisualBibleV3.myths["la-majayura-que-pierde-a-los-hombres"].entity_refs.map((ref) => ref.entity_id);
  assert.deepEqual(puroRefs, [
    "majayura_puro",
    "hombres_alcanzados_puro",
    "cueva_puro",
    "desorientacion_puro",
    "secreto_y_silencio_puro",
    "piedra_blanca_movil_puro",
    "papach_piedra",
    "ausencia_o_muerte_puro",
    "ahogamiento_puro",
    "territorio_alta_guajira",
    "costa_mar_guajira",
  ]);
  assert.equal(wayuuVisualBibleV3.entities.papach_piedra.kind, "objeto");
  assert.equal(wayuuVisualBibleV3.entities.ausencia_o_muerte_puro.visual_status, "excluded");
  assert.equal(wayuuVisualBibleV3.entities.ahogamiento_puro.visual_status, "excluded");
  for (const removed of ["joven_puro", "companeros_puro", "papach", "piedra_blanca_puro", "bienes_ocultos_puro", "voces_cueva_puro"]) {
    assert.equal(Object.hasOwn(wayuuVisualBibleV3.entities, removed), false);
  }
  assert.ok(!puroRefs.includes("pulowi"));
  assert.match(WAYUU_PRODUCTION_DIRECTIONS_V3.hombres_alcanzados_puro__group_grammar.focus, /Kotin/);
  assert.match(WAYUU_PRODUCTION_DIRECTIONS_V3.hombres_alcanzados_puro__group_grammar.focus, /She'etebe/);
  assert.match(WAYUU_PRODUCTION_DIRECTIONS_V3.hombres_alcanzados_puro__group_grammar.focus, /Asheinpalajanaa/);
  assert.match(WAYUU_PRODUCTION_DIRECTIONS_V3.majayura_puro__identity_sheet.focus, /Wayuushein/);
  assert.equal(wayuuVisualBibleV3.entities.habitante_enfermo_guanuru.visual_status, "required");
  assert.deepEqual(wayuuVisualBibleV3.entities.habitante_enfermo_guanuru.model_refs, [
    "habitante_enfermo_guanuru__identity_sheet",
    "habitante_enfermo_guanuru__state_sheet",
  ]);
  assert.equal(wayuuVisualBibleV3.entities.familia_casa_guanuru.visual_status, "required");
  assert.deepEqual(wayuuVisualBibleV3.entities.familia_casa_guanuru.model_refs, ["familia_casa_guanuru__group_grammar"]);
  assert.equal(wayuuVisualBibleV3.entities.pasos_sin_huellas_guanuru.kind, "fenomeno");
  assert.deepEqual(wayuuVisualBibleV3.entities.pasos_sin_huellas_guanuru.model_refs, ["pasos_sin_huellas_guanuru__phenomenon_rule"]);
  assert.match(WAYUU_PRODUCTION_DIRECTIONS_V3.mariposa_blanca_guanuru__identity_sheet.focus, /No se afirma especie/);
  assert.ok(WAYUU_PRODUCTION_DIRECTIONS_V3.mariposa_blanca_guanuru__identity_sheet.avoid.some((item) => /Guanuru anatomy/.test(item)));
  assert.match(WAYUU_PRODUCTION_DIRECTIONS_V3.craneo_caballo_proteccion__object_sheet.focus, /postcontacto/);
  assert.equal(wayuuVisualBibleV3.myths.ulepala.entity_refs.length, 67);
  assert.equal(wayuuVisualBibleV3.myths["los-dominios-de-juya"].entity_refs.length, 25);
  assert.equal(wayuuVisualBibleV3.entities.pasajes_intimos_ulepala.visual_status, "excluded");
  assert.equal(wayuuVisualBibleV3.entities.doncellas_ofrecidas_maleiwa.visual_status, "excluded");
  assert.equal(wayuuVisualBibleV3.entities.tunas_conejos_ulepala.kind, "fenomeno");
  assert.ok(!wayuuVisualBibleV3.myths.ulepala.entity_refs.some((ref) => [
    "pulowi",
    "boa_banco",
    "corzo_hombre_arco",
    "venado_hombre_rico",
    "conejos_jugadores",
    "arana_anciana_viaje",
  ].includes(ref.entity_id)));
  assert.equal(wayuuVisualBibleV3.myths["el-viaje-del-mas-alla"].entity_refs.length, 45);
  assert.equal(wayuuVisualBibleV3.entities.parejas_intimas_jepira.visual_status, "excluded");
  assert.equal(wayuuVisualBibleV3.entities.maiz_juya.visual_status, "required");
  assert.deepEqual(wayuuVisualBibleV3.entities.patilla.model_refs, ["patilla__botanical_sheet", "patilla__state_sheet"]);
  assert.equal(wayuuVisualBibleV3.myths["el-origen-del-fuego"].entity_refs.length, 34);
  assert.deepEqual(
    wayuuVisualBibleV3.myths["la-sed-da-los-civilizados"].entity_refs.map((ref) => ref.entity_id),
    ["comerciante_alijuna_1", "comerciante_alijuna_2", "carga_panela", "utta", "cerro_katetamana", "mareiwa", "territorio_alta_guajira"],
  );
  assert.equal(Object.hasOwn(wayuuVisualBibleV3.entities, "viajeros_wayuu_sed"), false);
  assert.equal(Object.hasOwn(wayuuVisualBibleV3.entities, "familias_agua_utta"), false);
  assert.equal(Object.hasOwn(wayuuVisualBibleV3.entities, "recipientes_agua_utta"), false);
  assert.equal(wayuuVisualBibleV3.entities.animales_fuego.visual_status, "embedded");
  assert.deepEqual(wayuuVisualBibleV3.entities.maayui_ulapiuy.model_refs, ["maayui_ulapiuy__group_grammar"]);
  assert.equal(wayuuVisualBibleV3.myths["el-pequeno-indio-kosina"].entity_refs.length, 27);
  assert.equal(wayuuVisualBibleV3.entities.kosina_joven.evidence_basis, "uncertain");
  assert.equal(wayuuVisualBibleV3.entities.duenos_caballos_kosina.visual_status, "required");
  assert.deepEqual(wayuuVisualBibleV3.entities.vivienda_kosina.model_refs, ["vivienda_kosina__spatial_model"]);
  assert.ok(!wayuuVisualBibleV3.myths["el-pequeno-indio-kosina"].entity_refs.some((ref) => ref.entity_id === "rancheria_wayuu"));
});

test("la compuerta de cultura material es prospectiva y no invalida los 60 modelos aceptados", () => {
  assert.equal(WAYUU_MATERIAL_CULTURE_PROTOCOL_V3.effective_from_production_batch, 8);
  assert.match(WAYUU_MATERIAL_CULTURE_PROTOCOL_V3.prior_assets_policy, /60 modelos/);
  assert.equal(wayuuVisualBibleV3.material_culture_protocol.status, "approved_for_future_batches");
  const errors = validateWayuuMaterialCultureDecision(undefined, {
    modelId: "persona_anterior__identity_sheet",
    entity: { kind: "personaje" },
    batchId: "wayuu-v3-production-07-jirairay-medium",
  });
  assert.deepEqual(errors, []);
});

test("desde el lote 08 una figura humana sin decisiones de cultura material queda bloqueada", () => {
  const errors = validateWayuuMaterialCultureDecision(undefined, {
    modelId: "persona_futura__identity_sheet",
    entity: { kind: "personaje" },
    batchId: "wayuu-v3-production-08-prueba-medium",
  });
  assert.ok(errors.some((error) => /falta la pasada obligatoria/.test(error)));
});

test("una criatura de apariencia humana tambien activa la compuerta de cultura material", () => {
  const errors = validateWayuuMaterialCultureDecision(undefined, {
    modelId: "anciana_mitica__identity_sheet",
    entity: { kind: "criatura" },
    batchId: "wayuu-v3-production-09-prueba-medium",
    direction: { human_presenting: true },
  });
  assert.ok(errors.some((error) => /falta la pasada obligatoria/.test(error)));
});

test("una decision completa hace visibles indumentaria y pintura sin inventar motivos", () => {
  const decision = {
    person_scope: "mujer Wayuu adulta individual",
    temporal_register: "historic_postcontact_indeterminate",
    time_basis: "tiempo mitico sin fecha historica exacta; tipologia tradicional documentada",
    narrative_moment: "viaje diurno por territorio abierto",
    activity_context: "caminar y visitar parientes bajo sol intenso",
    occasion_context: "travel",
    considered_ensembles: [
      {
        id: "manta_sin_pintura",
        label: "manta larga con waireñas y rostro sin pintura",
        fit: "posible para viaje corto",
        rationale: "la manta y las waireñas están documentadas, pero no resolvería la protección facial del viaje prolongado",
        source_refs: ["artesanias_tejeduria_wayuu_2016"],
      },
      {
        id: "manta_paipai_viaje",
        label: "manta larga, waireñas y cobertura protectora de paipai",
        fit: "mejor ajuste para viaje diurno prolongado",
        rationale: "combina prendas documentadas con la función solar específica del paipai sin inventar un motivo",
        source_refs: ["artesanias_tejeduria_wayuu_2016", "icanh_aspectos_magia_guajira"],
      },
    ],
    chosen_ensemble: {
      id: "manta_paipai_viaje",
      rationale: "responde a indumentaria y protección solar documentadas para el momento narrativo",
      specification: "manta larga lisa, waireñas y cobertura terrosa mate de paipai sin dibujo ceremonial",
      layers: ["manta larga lisa", "waireñas", "cobertura terrosa de paipai"],
    },
    attire: {
      decision: "include_documented",
      evidence: "institutional_general",
      rationale: "la manta es indumentaria femenina tradicional documentada",
      specification: "manta larga lisa de volumen amplio y mangas simples",
    },
    footwear: {
      decision: "include_documented",
      evidence: "institutional_general",
      rationale: "las waireñas son apropiadas para el paisaje seco",
      specification: "sandalias abiertas de suela plana",
    },
    accessories: {
      decision: "omit_contextually",
      evidence: "editorial_reversible",
      rationale: "el relato no exige sombrero, mochila ni joyeria en este momento",
    },
    face_paint: {
      decision: "include_contextual",
      evidence: "source_specific",
      rationale: "el paipai protector esta respaldado para exposicion prolongada al sol",
      specification: "cobertura terrosa mate de paipai, no un simbolo ceremonial",
      motif_policy: "source_specific_only",
    },
    source_refs: ["artesanias_tejeduria_wayuu_2016", "icanh_aspectos_magia_guajira"],
    continuity_markers: ["misma manta lisa", "misma cobertura terrosa del rostro durante el viaje"],
  };
  const errors = validateWayuuMaterialCultureDecision(decision, {
    modelId: "persona_futura__identity_sheet",
    entity: { kind: "personaje" },
    batchId: "wayuu-v3-production-08-prueba-medium",
  });
  assert.deepEqual(errors, []);
  assert.match(materialCulturePromptLines(decision).join("\n"), /Never invent facial motifs/);
});

test("la nueva compuerta rechaza una sola prenda presentada como conjunto completo", () => {
  const decision = structuredClone(WAYUU_PRODUCTION_DIRECTIONS_V3.hermano_mayor_valle__identity_sheet.material_culture);
  decision.considered_ensembles = [decision.considered_ensembles[0]];
  decision.chosen_ensemble = {
    id: "wayuco_siira_bare_torso",
    rationale: "se escogió por verse tradicional",
    specification: "wayuco con torso descubierto",
    layers: ["wayuco"],
  };
  const errors = validateWayuuMaterialCultureDecision(decision, {
    modelId: "persona_futura__identity_sheet",
    entity: { kind: "personaje" },
    batchId: "wayuu-v3-production-08-prueba-medium",
  });
  assert.ok(errors.some((error) => /al menos dos conjuntos/.test(error)));
});

test("desde el lote 15 el repertorio ejecutable impide usar el wayuco como traje masculino completo", () => {
  assert.equal(WAYUU_MATERIAL_CULTURE_PROTOCOL_V3.repertoire_gate_from_production_batch, 15);
  assert.equal(WAYUU_WARDROBE_REPERTOIRE_V3.wusi_aichee.coverage_role, "base_partial");
  assert.equal(WAYUU_WARDROBE_REPERTOIRE_V3.kemiisa_piiraneeru.coverage_role, "upper_body_layer");

  const decision = structuredClone(WAYUU_PRODUCTION_DIRECTIONS_V3.hermano_mayor_valle__identity_sheet.material_culture);
  decision.wardrobe_profile = "male";
  decision.wardrobe_refs = ["wusi_aichee", "sira_kumusu_aamuushi", "wairenas"];
  let errors = validateWayuuMaterialCultureDecision(decision, {
    modelId: "hombre_fuego__identity_sheet",
    entity: { kind: "personaje" },
    batchId: "wayuu-v3-production-15-el-origen-del-fuego-medium",
  });
  assert.ok(errors.some((error) => /no bastan/.test(error)));

  decision.wardrobe_refs.push("kemiisa_piiraneeru");
  errors = validateWayuuMaterialCultureDecision(decision, {
    modelId: "hombre_fuego__identity_sheet",
    entity: { kind: "personaje" },
    batchId: "wayuu-v3-production-15-el-origen-del-fuego-medium",
  });
  assert.deepEqual(errors, []);
  assert.match(materialCulturePromptLines(decision).join("\n"), /complete outfit must define the silhouette/);
});

test("desde el lote 17 la ropa Wayuu exige una silueta completa verificable y no repite loincloth en el prompt", () => {
  assert.equal(WAYUU_MATERIAL_CULTURE_PROTOCOL_V3.silhouette_gate_from_production_batch, 17);
  const decision = structuredClone(WAYUU_PRODUCTION_DIRECTIONS_V3.hermano_mayor_valle__identity_sheet.material_culture);
  decision.wardrobe_profile = "male";
  decision.wardrobe_refs = [
    "wusi_aichee",
    "sira_kumusu_aamuushi",
    "kemiisa_piiraneeru",
    "wairenas",
    "wom_woma_hat",
    "woolii_waist_bag",
  ];
  let errors = validateWayuuMaterialCultureDecision(decision, {
    modelId: "hombre_wayuu_futuro__identity_sheet",
    entity: { kind: "personaje" },
    batchId: "wayuu-v3-production-17-prueba-medium",
  });
  assert.ok(errors.some((error) => /falta el contrato de silueta/.test(error)));

  decision.wardrobe_visual_contract = {
    dominant_silhouette: "camisa holgada de manga larga como volumen superior dominante y conjunto de viaje estratificado",
    front_read: "cuello, mangas, borde inferior de camisa, faja, base inferior, calzado y bolsa se leen como piezas separadas",
    side_or_back_read: "la camisa conserva hombros, espalda y mangas; el sombrero y la bolsa mantienen volumen independiente",
    anti_collapse_rule: "rechazar si desaparece la camisa, si el torso queda descubierto o si todas las capas se funden en una sola pieza inferior",
  };
  errors = validateWayuuMaterialCultureDecision(decision, {
    modelId: "hombre_wayuu_futuro__identity_sheet",
    entity: { kind: "personaje" },
    batchId: "wayuu-v3-production-17-prueba-medium",
  });
  assert.deepEqual(errors, []);
  const prompt = materialCulturePromptLines(decision).join("\n");
  assert.match(prompt, /DOMINANT WARDROBE SILHOUETTE/);
  assert.doesNotMatch(prompt, /loincloth/i);
});

test("un alijuna no se valida con el repertorio Wayuu y exige componentes historicos propios", () => {
  const direction = WAYUU_PRODUCTION_DIRECTIONS_V3.comerciante_alijuna_1__identity_sheet;
  const decision = structuredClone(direction.material_culture);
  let errors = validateWayuuMaterialCultureDecision(decision, {
    modelId: "comerciante_alijuna_1__identity_sheet",
    entity: { kind: "personaje" },
    batchId: "wayuu-v3-production-16-la-sed-de-los-forasteros-medium",
    direction,
  });
  assert.deepEqual(errors, []);
  assert.equal(decision.cultural_scope, "non_wayuu_alijuna");
  assert.equal(decision.wardrobe_refs, undefined);
  assert.match(materialCulturePromptLines(decision).join("\n"), /do not transfer one community's wardrobe repertoire/);

  decision.wardrobe_components = ["camisa", "pantalon"];
  errors = validateWayuuMaterialCultureDecision(decision, {
    modelId: "comerciante_alijuna_1__identity_sheet",
    entity: { kind: "personaje" },
    batchId: "wayuu-v3-production-16-la-sed-de-los-forasteros-medium",
    direction,
  });
  assert.ok(errors.some((error) => /al menos tres componentes historicos/.test(error)));
});

test("el lote 17 conserva Kusina como identidad no resuelta y exige ropa completa sin transferencia Wayuu", () => {
  const direction = WAYUU_PRODUCTION_DIRECTIONS_V3.kosina_joven__identity_sheet;
  const decision = structuredClone(direction.material_culture);
  let errors = validateWayuuMaterialCultureDecision(decision, {
    modelId: "kosina_joven__identity_sheet",
    entity: { kind: "personaje" },
    batchId: "wayuu-v3-production-17-el-pequeno-indio-kosina-medium",
    direction,
  });
  assert.deepEqual(errors, []);
  assert.equal(decision.cultural_scope, "kusina_identity_unresolved");
  assert.equal(decision.wardrobe_refs, undefined);
  const prompt = materialCulturePromptLines(decision).join("\n");
  assert.match(prompt, /historically and relationally ambiguous/i);
  assert.match(prompt, /complete plain outfit/i);
  assert.doesNotMatch(prompt, /loincloth/i);

  delete decision.wardrobe_visual_contract;
  errors = validateWayuuMaterialCultureDecision(decision, {
    modelId: "kosina_joven__identity_sheet",
    entity: { kind: "personaje" },
    batchId: "wayuu-v3-production-17-el-pequeno-indio-kosina-medium",
    direction,
  });
  assert.ok(errors.some((error) => /contrato de silueta/.test(error)));
});

test("los colectivos indigenas no resueltos usan componentes propios y no el repertorio Wayuu", () => {
  const direction = WAYUU_PRODUCTION_DIRECTIONS_V3.duenos_caballos_kosina__group_grammar;
  const decision = structuredClone(direction.material_culture);
  let errors = validateWayuuMaterialCultureDecision(decision, {
    modelId: "duenos_caballos_kosina__group_grammar",
    entity: { kind: "colectivo" },
    batchId: "wayuu-v3-production-17-el-pequeno-indio-kosina-medium",
    direction,
  });
  assert.deepEqual(errors, []);
  assert.ok(decision.collective_wardrobe.member_groups.every((group) => group.wardrobe_refs === undefined));
  assert.ok(decision.collective_wardrobe.member_groups.every((group) => group.wardrobe_components.length >= 3));

  decision.collective_wardrobe.member_groups[0].wardrobe_components = ["camisa", "pantalon"];
  errors = validateWayuuMaterialCultureDecision(decision, {
    modelId: "duenos_caballos_kosina__group_grammar",
    entity: { kind: "colectivo" },
    batchId: "wayuu-v3-production-17-el-pequeno-indio-kosina-medium",
    direction,
  });
  assert.ok(errors.some((error) => /grupo no Wayuu exige al menos tres componentes/.test(error)));
});

test("desde el lote 10 un colectivo humano no puede repetir un unico uniforme", () => {
  const decision = structuredClone(WAYUU_PRODUCTION_DIRECTIONS_V3.hombres_tigre__group_grammar.material_culture);
  let errors = validateWayuuMaterialCultureDecision(decision, {
    modelId: "primeros_wayuu__group_grammar",
    entity: { kind: "colectivo" },
    batchId: "wayuu-v3-production-10-maleiwa-medium",
  });
  assert.ok(errors.some((error) => /falta el plan obligatorio de variacion interna/.test(error)));

  decision.collective_wardrobe = {
    variation_axis: "edad, rol y actividad",
    anti_uniformity_rule: "ningun conjunto se replica como uniforme del colectivo",
    member_groups: [
      {
        id: "adultos_a",
        scope: "dos adultos",
        ensemble: "camisa corta, wayuco, si'ira y waireñas",
        rationale: "conjunto completo de trabajo",
        source_refs: ["icanh_organizacion_social_guajira_1950"],
      },
      {
        id: "adultos_b",
        scope: "dos adultos distintos",
        ensemble: "camisa corta, wayuco, si'ira y waireñas",
        rationale: "replica exactamente el primer conjunto",
        source_refs: ["icanh_organizacion_social_guajira_1950"],
      },
    ],
  };
  errors = validateWayuuMaterialCultureDecision(decision, {
    modelId: "primeros_wayuu__group_grammar",
    entity: { kind: "colectivo" },
    batchId: "wayuu-v3-production-10-maleiwa-medium",
  });
  assert.ok(errors.some((error) => /no puede repetir un unico uniforme/.test(error)));

  decision.collective_wardrobe.member_groups[1].ensemble = "manta masculina larga sobre wayuco, si'ira y waireñas";
  decision.collective_wardrobe.member_groups[1].source_refs = ["mincultura_caracterizacion_wayuu"];
  errors = validateWayuuMaterialCultureDecision(decision, {
    modelId: "primeros_wayuu__group_grammar",
    entity: { kind: "colectivo" },
    batchId: "wayuu-v3-production-10-maleiwa-medium",
  });
  assert.deepEqual(errors, []);
  assert.match(materialCulturePromptLines(decision).join("\n"), /ANTI-UNIFORMITY RULE/);
});

test("toda figura humana o humanizada del lote activo supera la compuerta", () => {
  for (const modelId of wayuuVisualBibleV3.generation_batch.model_ids) {
    const model = wayuuVisualBibleV3.models[modelId];
    const entity = wayuuVisualBibleV3.entities[model.entity_refs[0]];
    const direction = WAYUU_PRODUCTION_DIRECTIONS_V3[modelId];
    const errors = validateWayuuMaterialCultureDecision(
      direction?.material_culture,
      { modelId, entity, batchId: wayuuVisualBibleV3.generation_batch.id, direction },
    );
    assert.deepEqual(errors, [], errors.join("\n"));
  }
});
