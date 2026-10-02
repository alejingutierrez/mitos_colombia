/**
 * Biblia visual Wayuu V3: manifiesto de descubrimiento, no plan de generacion.
 *
 * La V2 se conserva como registro historico de 58 pruebas de gramatica y
 * anclas narrativas. Ninguna de esas pruebas se da por promovida a modelo V3:
 * primero debe contrastarse contra el inventario de entidades y redisenarse
 * con vistas de identidad/estado cuando corresponda.
 */

import { wayuuVisualBibleV2 } from "./visual-bible-v2.mjs";
import { wayuuEntityInventoryV3 } from "./entity-inventory-v3.mjs";
import { buildWayuuModelLibraryV3, WAYUU_PILOT_MODEL_IDS_V3 } from "./model-library-v3.mjs";
import { WAYUU_MATERIAL_CULTURE_PROTOCOL_V3 } from "./material-culture-v3.mjs";
import { WAYUU_ULEPALA_MODEL_IDS_V3 } from "./ulepala-directions-v3.mjs";
import { WAYUU_GUANURU_MODEL_IDS_V3 } from "./guanuru-directions-v3.mjs";
import { WAYUU_MAJAYURA_PURO_MODEL_IDS_V3 } from "./majayura-puro-directions-v3.mjs";
import { WAYUU_UMARALA_MODEL_IDS_V3 } from "./umarala-directions-v3.mjs";
import { WAYUU_LA_CHAMA_MODEL_IDS_V3 } from "./la-chama-directions-v3.mjs";
import { WAYUU_WORUNKA_MODEL_IDS_V3 } from "./worunka-directions-v3.mjs";
import { WAYUU_SERRANIAS_MODEL_IDS_V3 } from "./serranias-directions-v3.mjs";
import { WAYUU_WALEKER_MODEL_IDS_V3 } from "./waleker-directions-v3.mjs";

const compiled = buildWayuuModelLibraryV3(wayuuEntityInventoryV3.entities);
const entities = Object.fromEntries(
  Object.entries(wayuuEntityInventoryV3.entities).map(([entityId, entity]) => [entityId, {
    ...entity,
    model_refs: compiled.entityModelRefs[entityId],
  }]),
);
const myths = wayuuEntityInventoryV3.myths;

function candidateEntityRefs(legacyModelId) {
  return Object.entries(entities)
    .filter(([, entity]) => entity.legacy_model_refs.includes(legacyModelId))
    .map(([entityId]) => entityId)
    .sort();
}

function classifyLegacyAsset(legacyModelId, legacyModel) {
  if (["territorio_alta_guajira", "macuira_ecotono", "piichipala_arquitectura", "flora_sequia"].includes(legacyModelId)) {
    return "foundation_candidate";
  }
  if (legacyModel.layer === "magia") return "magic_grammar_board";
  if (["personaje", "criatura", "animal"].includes(legacyModel.kind)) return "placeholder_or_anchor_scene";
  return "candidate_entity_model";
}

const legacyAssets = Object.fromEntries(
  Object.entries(wayuuVisualBibleV2.models).map(([legacyModelId, legacyModel]) => [legacyModelId, {
    source_schema: wayuuVisualBibleV2.schema,
    classification: classifyLegacyAsset(legacyModelId, legacyModel),
    review_status: "pending_reaudit",
    candidate_entity_refs: candidateEntityRefs(legacyModelId),
    description: legacyModel.description,
    note: "Activo heredado: no cuenta como cobertura V3 hasta aprobar inventario, contrato de diseno, vistas y QA de identidad.",
  }]),
);

const requiredEntities = Object.values(entities).filter((entity) => entity.visual_status === "required");
const requiredAssets = requiredEntities.reduce((total, entity) => total + entity.model_requirements.length, 0);

export const WAYUU_PRODUCTION_BATCH_01_MODEL_IDS_V3 = [
  "madre_jose_juan__identity_sheet",
  "madre_jose_juan__state_sheet",
  "jose_juan__state_sheet",
  "juramia__state_sheet",
  "jujia__identity_sheet",
  "jujia__state_sheet",
  "peones_jose_juan__group_grammar",
  "jovenes_alijuna_cueva__group_grammar",
  "hija_jujia__identity_sheet",
  "serpientes_guardianas__group_grammar",
  "caballo_prueba_jose_juan__identity_sheet",
  "roza_jose_juan__spatial_model",
  "dominio_subterraneo_jujia__spatial_model",
];

export const WAYUU_PRODUCTION_BATCH_02_MODEL_IDS_V3 = [
  "aramai__identity_sheet",
  "aramai__state_sheet",
  "mareiwa__state_sheet",
  "wanuru__presence_model",
  "wanuru__state_sheet",
  "epidemia_aramai__phenomenon_rule",
  "jaguey__spatial_model",
];

export const WAYUU_PRODUCTION_BATCH_03_MODEL_IDS_V3 = [
  "kuriruputa__identity_sheet",
  "kuriruputa__state_sheet",
  "nueva_pareja_kuriruputa__identity_sheet",
  "corral_kuriruputa__spatial_model",
  "rebanos__group_grammar",
];

export const WAYUU_PRODUCTION_BATCH_04_MODEL_IDS_V3 = [
  "guerrero_ipuana__identity_sheet",
  "guerrero_ipuana__state_sheet",
  "hijo_guerrero_ipuana__identity_sheet",
  "hijo_guerrero_ipuana__state_sheet",
  "majayura_sueno_ipuana__identity_sheet",
  "arco_flechas__object_sheet",
];

export const WAYUU_PRODUCTION_BATCH_05_MODEL_IDS_V3 = [
  "jaichuasay__identity_sheet",
  "jaichuasay__state_sheet",
  "venado_guia_jaichuasay__identity_sheet",
  "serrania_transformacion_jaichuasay__spatial_model",
  "serrania_macuira__environment_model",
];

export const WAYUU_PRODUCTION_BATCH_06_MODEL_IDS_V3 = [
  "hermana_arquera__identity_sheet",
  "hermana_arquera__state_sheet",
  "hermano_arquera__identity_sheet",
  "hermano_arquera__state_sheet",
  "perro_hermanos__identity_sheet",
  "mula_hermanos__identity_sheet",
  "chinchorro__object_sheet",
];

export const WAYUU_PRODUCTION_BATCH_07_MODEL_IDS_V3 = [
  "jirairay_canto__phenomenon_rule",
  "outsu_jirairay__identity_sheet",
  "paciente_jirairay__identity_sheet",
  "maraca_outsu__object_sheet",
  "tabaco_ritual__object_sheet",
  "alimentos_ceremonia__object_sheet",
];

export const WAYUU_PRODUCTION_BATCH_08_MODEL_IDS_V3 = [
  "hermano_mayor_valle__identity_sheet",
  "hermano_menor_valle__identity_sheet",
  "serpiente_valle__identity_sheet",
  "valle_documentacion_pendiente__environment_model",
  "casa_parcela_valle__spatial_model",
  "rifle_valle__object_sheet",
  "huesos_senales_valle__object_sheet",
];

export const WAYUU_PRODUCTION_BATCH_09_MODEL_IDS_V3 = [
  "manna__identity_sheet",
  "manna__state_sheet",
  "sain_ma__presence_model",
  "mannuuya__presence_model",
  "juya__presence_model",
  "juya__state_sheet",
  "kalamantuunay__identity_sheet",
  "kalamantuunay__state_sheet",
  "hombres_tigre__group_grammar",
  "tumajule__identity_sheet",
  "tumajule__state_sheet",
  "peeliyuu__identity_sheet",
  "peeliyuu__state_sheet",
  "aaner__identity_sheet",
  "tinaja_manna__object_sheet",
  "costa_mar_guajira__environment_model",
];

export const WAYUU_PRODUCTION_BATCH_10_MODEL_IDS_V3 = [
  "olivo_mareiwa__botanical_sheet",
  "tormenta_nacimiento_mareiwa__phenomenon_rule",
  "honda_piedra_mareiwa__object_sheet",
  "pozos_salados_mareiwa__spatial_model",
  "pava_semillera__identity_sheet",
  "turpial_semillero__identity_sheet",
  "paloma_semillera__identity_sheet",
  "tuna_higo__botanical_sheet",
  "primeros_wayuu__group_grammar",
  "outsu_lluvia_mareiwa__group_grammar",
];

export const WAYUU_PRODUCTION_BATCH_11_MODEL_IDS_V3 = [
  "mma__presence_model",
  "kai_sol__presence_model",
  "kashi_luna__presence_model",
  "trupillo__botanical_sheet",
  "arachi__spatial_model",
  "cavidad_origen__spatial_model",
  "barro_creacion__object_sheet",
  "fogon_primero__object_sheet",
];

export const WAYUU_PRODUCTION_BATCH_12_MODEL_IDS_V3 = [
  "hermana_litoral__identity_sheet",
  "hermana_litoral__state_sheet",
  "hermano_litoral__identity_sheet",
  "hermano_litoral__state_sheet",
  "padre_katetamana__identity_sheet",
  "hija_katetamana__identity_sheet",
  "hija_katetamana__state_sheet",
  "cerro_katetamana__spatial_model",
];

export const WAYUU_PRODUCTION_BATCH_13_MODEL_IDS_V3 = [
  "jururiana__identity_sheet",
  "jururiana__state_sheet",
  "warir__identity_sheet",
  "gran_lluvia_jururiana__phenomenon_rule",
  "reservas_semillas_jururiana__object_sheet",
  "animales_oscuros_jururiana__group_grammar",
  "patsuo__spatial_model",
  "habitacion_oscura_warir__spatial_model",
];

export const WAYUU_PRODUCTION_BATCH_14_MODEL_IDS_V3 = [
  "pushaina__identity_sheet",
  "pushaina__state_sheet",
  "hija_pushaina__identity_sheet",
  "kasap__identity_sheet",
  "presencia_invisible_pushaina__presence_model",
  "culebra_pushaina__identity_sheet",
  "zorro_pushaina__identity_sheet",
  "mapurito_pushaina__identity_sheet",
  "gallinazo_pushaina__identity_sheet",
  "ciempies_pushaina__identity_sheet",
  "anillo_oculto_pushaina__object_sheet",
  "ofrenda_alimento_pushaina__object_sheet",
  "lugar_caida_pushaina__spatial_model",
  "casa_grande_pushaina__spatial_model",
  "cementerios_pushaina__spatial_model",
];

export const WAYUU_PRODUCTION_BATCH_15_MODEL_IDS_V3 = [
  "siki__identity_sheet",
  "siki__state_sheet",
  "mujer_siki__identity_sheet",
  "mujer_siki__state_sheet",
  "suegra_siki__identity_sheet",
  "suegra_siki__state_sheet",
  "senores_wunaapu__group_grammar",
  "senores_wunaapu__state_sheet",
  "mouwa_fuego__identity_sheet",
  "jamu_hambre__presence_model",
  "pala_maravillosa_siki__object_sheet",
  "huerta_siki__spatial_model",
  "cultivos_huerta_siki__object_sheet",
  "junuunay__identity_sheet",
  "junuunay__state_sheet",
  "kenaa_fuego__identity_sheet",
  "kenaa_fuego__state_sheet",
  "jimut_cigarron__identity_sheet",
  "serumaa_sikiyuu__identity_sheet",
  "serumaa_sikiyuu__state_sheet",
  "humanidad_sin_fuego__group_grammar",
  "gruta_fuego_maleiwa__spatial_model",
  "brasas_morral_junuunay__object_sheet",
  "noche_revela_kenaa__phenomenon_rule",
  "caujaro_koushot__botanical_sheet",
  "kasemashi__identity_sheet",
  "kasemashi__state_sheet",
  "maleiwa_viejo_fuego__identity_sheet",
  "flecha_meteoro_awaalas__phenomenon_rule",
  "piedras_puloi_fuego__spatial_model",
  "maayui_ulapiuy__group_grammar",
  "varitas_friccion__object_sheet",
];

export const WAYUU_PRODUCTION_BATCH_16_MODEL_IDS_V3 = [
  "comerciante_alijuna_1__identity_sheet",
  "comerciante_alijuna_1__state_sheet",
  "comerciante_alijuna_2__identity_sheet",
  "comerciante_alijuna_2__state_sheet",
  "carga_panela__object_sheet",
  "utta__spatial_model",
];

export const WAYUU_PRODUCTION_BATCH_17_MODEL_IDS_V3 = [
  "kosina_joven__identity_sheet",
  "kosina_joven__state_sheet",
  "madre_kosina__identity_sheet",
  "caballo_kosina__state_sheet",
  "hermano_caballo_kosina__identity_sheet",
  "familia_caballos_kosina__group_grammar",
  "aliado_rico_kosina__identity_sheet",
  "indigenas_ricos_camino_kosina__group_grammar",
  "duenos_caballos_kosina__group_grammar",
  "jefe_fiesta_kosina__identity_sheet",
  "lagartijas_kosina__group_grammar",
  "burros_camino_kosina__group_grammar",
  "patilla__botanical_sheet",
  "ahuyama__botanical_sheet",
  "frijol_roza_kosina__botanical_sheet",
  "trupillo_sancochado_kosina__object_sheet",
  "faja_captura_kosina__object_sheet",
  "manea_caballo_kosina__object_sheet",
  "tambor_carreras_kosina__object_sheet",
  "huellas_caballo_kosina__phenomenon_rule",
  "roza_kosina__spatial_model",
  "vivienda_kosina__spatial_model",
  "pista_carreras_kosina__spatial_model",
  "corral_caballos_kosina__spatial_model",
  "abertura_subterranea_caballo__spatial_model",
];

export const WAYUU_PRODUCTION_BATCH_18_MODEL_IDS_V3 = [
  "viudo_viaje_mas_alla__identity_sheet",
  "viudo_viaje_mas_alla__state_sheet",
  "esposa_muerta_viaje__identity_sheet",
  "esposa_muerta_viaje__state_sheet",
  "madre_viudo_viaje__identity_sheet",
  "hermana_viudo_viaje__identity_sheet",
  "parientes_muertos_jepira__group_grammar",
  "danzantes_yolujaa_jepira__group_grammar",
  "yolujaa__presence_model",
  "alcaravan_guardian__identity_sheet",
  "agua_yolujaa__object_sheet",
  "recinto_agua_yolujaa__spatial_model",
  "puerta_autonoma_jepira__spatial_model",
  "montana_cienaga_jepira__spatial_model",
  "caballos_muertos_jepira__group_grammar",
  "alimentos_aparecidos_jepira__object_sheet",
  "kasha_yonna_jepira__object_sheet",
  "casas_descanso_jepira__spatial_model",
  "sendero_bifurcado_juya__spatial_model",
  "semeruco__botanical_sheet",
  "vacas_lecheras_juya__group_grammar",
  "vaca_guia_juya__identity_sheet",
  "pulowi__presence_model",
  "pulowi__state_sheet",
  "casa_enramada_pulowi__spatial_model",
  "botellas_juya__object_sheet",
  "boa_banco__identity_sheet",
  "boa_banco__state_sheet",
  "corzo_hombre_arco__identity_sheet",
  "corzo_hombre_arco__state_sheet",
  "venado_hombre_rico__identity_sheet",
  "venado_hombre_rico__state_sheet",
  "conejos_jugadores__group_grammar",
  "juego_oulakawaa_waleeru__object_sheet",
  "patilla__state_sheet",
  "ahuyama__state_sheet",
  "maiz_juya__botanical_sheet",
  "melon_juya__botanical_sheet",
  "melon_juya__state_sheet",
  "arana_anciana_viaje__identity_sheet",
  "arana_anciana_viaje__state_sheet",
  "hilo_arana_regreso__object_sheet",
  "jepira__spatial_model",
  "dominio_juya__spatial_model",
];

export const WAYUU_PRODUCTION_BATCH_19_MODEL_IDS_V3 = WAYUU_ULEPALA_MODEL_IDS_V3;
export const WAYUU_PRODUCTION_BATCH_20_MODEL_IDS_V3 = WAYUU_GUANURU_MODEL_IDS_V3;
export const WAYUU_PRODUCTION_BATCH_21_MODEL_IDS_V3 = WAYUU_MAJAYURA_PURO_MODEL_IDS_V3;
export const WAYUU_PRODUCTION_BATCH_22_MODEL_IDS_V3 = WAYUU_UMARALA_MODEL_IDS_V3;
export const WAYUU_PRODUCTION_BATCH_23_MODEL_IDS_V3 = WAYUU_LA_CHAMA_MODEL_IDS_V3;
export const WAYUU_PRODUCTION_BATCH_24_MODEL_IDS_V3 = WAYUU_WORUNKA_MODEL_IDS_V3;
export const WAYUU_PRODUCTION_BATCH_25_MODEL_IDS_V3 = WAYUU_SERRANIAS_MODEL_IDS_V3;
export const WAYUU_PRODUCTION_BATCH_26_MODEL_IDS_V3 = WAYUU_WALEKER_MODEL_IDS_V3;

export const wayuuVisualBibleV3 = {
  schema: "mitos-colombia-biblia-visual/v3",
  status: "production_complete",
  generation_locked: false,
  community: "Wayúu",
  visual_memory: {
    library: "content/mitos-visuales/wayuu.visual-memory.v1.json",
    role: "Inspiración desde imágenes actuales, versiones anteriores y referencias históricas documentadas; no equivale a canon narrativo.",
    review_required_before_new_triptych: true,
    protocol: "docs/biblia-memoria-visual-v1.md",
    preserve_prior_decisions: true,
  },
  region: "Caribe",
  corpus: {
    ...wayuuVisualBibleV2.corpus,
    source_snapshot_sha256: wayuuEntityInventoryV3.source_snapshot.sha256,
  },
  source_snapshot: wayuuEntityInventoryV3.source_snapshot,
  research: wayuuVisualBibleV2.research,
  editorial_authorization: {
    ...wayuuVisualBibleV2.editorial_authorization,
    scope: "Produccion visual Wayuu con inventario exhaustivo previo; la autorizacion cultural no sustituye la aprobacion del denominador ni el QA de diseno.",
    generation_gate: "unlocked_after_inventory_design_and_multicategory_pilot_approval",
  },
  visual_system: wayuuVisualBibleV2.visual_system,
  material_culture_protocol: WAYUU_MATERIAL_CULTURE_PROTOCOL_V3,
  inventory: wayuuEntityInventoryV3.inventory,
  myths,
  entities,
  models: compiled.models,
  legacy_assets: {
    status: "quarantined_for_reaudit",
    source_plan: "editorial/wayuu/visual-bible-v2.mjs",
    count: Object.keys(legacyAssets).length,
    promotion_rule: "Un activo heredado solo se promueve tras mapearlo a entidades, asignarle proposito V3, completar el contrato de diseno y superar QA visual.",
    assets: legacyAssets,
  },
  pilot: {
    status: "approved",
    required_kinds: ["personaje", "deidad_fuerza", "criatura", "animal", "colectivo", "objeto", "planta", "arquitectura", "lugar", "paisaje", "fenomeno"],
    model_ids: WAYUU_PILOT_MODEL_IDS_V3,
    generation_mode: "text_only_no_local_references",
    quality: "medium",
    selection_manifest: "content/mitos-visuales/_openai/wayuu/biblia-v3/pilot-selection.json",
    approved_by: "Propietario editorial del proyecto",
    approved_at: "2026-09-03",
    contact_sheet: "output/imagegen/wayuu-v3/pilot-contact-sheet.jpeg",
    progress: { selected_models: 11, required_models: 11, remaining_models: 0 },
    note: "Las once categorias superaron QA. Las correcciones conservaron el volumen 3D por capas, eliminaron simbolos inventados y evitaron soporte exterior visible.",
  },
  generation_batch: {
    id: "wayuu-v3-production-26-waleker-el-origen-del-tejido-medium",
    myth_slug: "waleker-el-origen-del-tejido",
    model_ids: WAYUU_PRODUCTION_BATCH_26_MODEL_IDS_V3,
    quality: "medium",
    framing: "immersive_full_bleed",
    surface_finish: "layered_depth_no_exposed_support",
    generation_mode: "text_only_no_local_references",
    status: "QA_PASS_AFTER_RESEARCH_AND_CORRECTIONS_09",
    selection_manifest: "content/mitos-visuales/_openai/wayuu/biblia-v3-production/wayuu-v3-production-26-waleker-el-origen-del-tejido-medium/selection.json",
    contact_sheet: "output/imagegen/wayuu-v3-production/waleker-batch26-selected-contact-sheet.jpeg",
  },
  production: {
    selection_manifest: "content/mitos-visuales/_openai/wayuu/biblia-v3-production/accepted-selection.json",
    progress: { selected_models: 435, required_models: 435, remaining_models: 0 },
    completed_myths: ["aramai", "creacion-wayuu", "el-hijo-del-condor", "el-incesto", "el-indio-guerrero-ipuana", "el-indio-jaichuasay", "el-indio-jururiana", "el-indio-kuriruputa", "el-indio-pushalna", "el-origen-del-fuego", "el-pequeno-indio-kosina", "el-viaje-del-mas-alla", "guanuru", "jirairay", "la-chama", "la-india-worunka", "la-majayura-que-pierde-a-los-hombres", "la-sed-da-los-civilizados", "las-wanulus-y-el-valle-de-la-muerte", "los-dominios-de-juya", "los-dos-hermanos", "los-mellizos-transformadores", "maleiwa", "serranias-de-la-guajira", "ulepala", "umarala", "waleker-el-origen-del-tejido"],
    note: "Cobertura completa: 435 selecciones con QA individual, procedencia y SHA-256; 27/27 mitos cubiertos. QA de Biblia no equivale a publicación ni a canon comunitario.",
  },
  completion: {
    status: "complete",
    qa_passed: true,
    contact_sheet: "output/imagegen/wayuu-v3-production/wayuu-biblia-v3-complete-contact-sheet.jpeg",
    approved_by: "Autorización editorial de producción completa del propietario y QA técnico-editorial del pipeline",
    approved_at: "2026-09-04",
    denominator: {
      total_detected_entities: Object.keys(entities).length,
      required_entities: requiredEntities.length,
      required_model_assets: requiredAssets,
    },
  },
  next_gate: {
    action: "review_complete_wayuu_bible_before_triptychs",
    review_items: [
      "revisar el tablero final de 435 modelos sin confundir QA editorial con validación comunitaria o publicación",
      "congelar esta selección antes de derivar trípticos para no reabrir identidades, vestuario o reglas mágicas durante la composición",
      "mantener trípticos vertical y cuadrado en medium; producir únicamente el horizontal en high",
      "reutilizar los contratos de indumentaria por contexto y conservar pintura facial excluida salvo nueva evidencia específica",
    ],
    effect_of_approval: "La Biblia Wayuu V3 queda cerrada con 431 entidades detectadas, 357 entidades visuales requeridas, 435 modelos seleccionados y 27/27 mitos cubiertos. El siguiente producto es el sistema de trípticos, no una ampliación silenciosa del denominador.",
  },
};

export default wayuuVisualBibleV3;
