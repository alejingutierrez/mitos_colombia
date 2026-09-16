/**
 * Compilador de contratos visuales Wayuu V3.
 *
 * Cada activo nace de una entidad ya aprobada. Los contratos son borradores
 * trazables: completan el universo, pero no se vuelven canon hasta el piloto y
 * el QA visual. No generan imágenes por sí solos.
 */

const HISTORICAL_MYTHS = new Set([
  "el-indio-guerrero-ipuana",
  "el-indio-kuriruputa",
  "el-indio-pushalna",
  "el-pequeno-indio-kosina",
  "la-sed-da-los-civilizados",
  "las-wanulus-y-el-valle-de-la-muerte",
  "los-dos-hermanos",
  "umarala",
]);

const PURPOSE_VIEW = {
  identity_sheet: { view_type: "canonical_full_body", aspect: "1:1", intent: "identidad corporal completa y legible" },
  state_sheet: { view_type: "state_sequence", aspect: "16:9", intent: "continuidad entre estados sin adelantar un keyframe" },
  object_sheet: { view_type: "canonical_object", aspect: "1:1", intent: "forma, escala, material y uso legibles" },
  botanical_sheet: { view_type: "canonical_botanical", aspect: "1:1", intent: "morfologia vegetal sin flora generica" },
  spatial_model: { view_type: "spatial_grammar", aspect: "16:9", intent: "relaciones espaciales, entradas, planos y escala" },
  environment_model: { view_type: "environment_grammar", aspect: "16:9", intent: "sistema territorial y profundidad de paisaje" },
  phenomenon_rule: { view_type: "phenomenon_grammar", aspect: "16:9", intent: "entrada, accion, limite y huella del fenomeno" },
  presence_model: { view_type: "presence_grammar", aspect: "16:9", intent: "accion y huella sin inventar anatomia" },
  group_grammar: { view_type: "group_grammar", aspect: "16:9", intent: "numero, relaciones, escala y variacion interna" },
};

const KIND_CONTRACT = {
  personaje: {
    silhouette: "Figura humana individual de cuerpo completo, proporcion estable y gesto narrativo sobrio; debe diferenciarse por edad, porte, funcion y marcadores materiales, no por estereotipos.",
    materials: ["papel mate de fibra visible", "capas prensadas para cuerpo y vestuario", "hilo solo cuando el relato lo exige"],
    palette: "Arena, barro, carbon y fibras naturales; un acento propio de la entidad puede repetirse, sin patrones kanas o marcas claniles inventadas.",
    scale: "Escala humana coherente con animales, puertas, chinchorros y paisaje; cuerpo completo sin heroicidad monumental.",
  },
  deidad_fuerza: {
    silhouette: "No fijar cuerpo humano. La presencia se reconoce por una relacion irrepetible entre territorio, materia, clima, objeto, ausencia y huella.",
    materials: ["papel territorial fibroso", "capas de agua, suelo, aire o sombra segun evidencia", "uniones fisicas visibles dentro del mundo"],
    palette: "Color gobernado por la accion documentada de la fuerza; sin halo, aura, ojos luminosos o codigo religioso externo.",
    scale: "Escala relacional: puede atravesar varios planos sin convertirse en gigante antropomorfo.",
  },
  criatura: {
    silhouette: "Silueta singular derivada de la accion y los estados documentados; si la forma no esta descrita, usar presencia y huella en vez de anatomia inventada.",
    materials: ["papel mate estratificado", "fibras y pliegues con volumen fisico", "superficies propias del estado narrativo"],
    palette: "Contraste suficiente para continuidad, restringido a materiales y acciones del relato.",
    scale: "Escala declarada frente a una referencia material; evitar monstruosidad generica.",
  },
  animal: {
    silhouette: "Morfologia zoologica reconocible, cuerpo completo cuando es individuo y variacion controlada cuando es grupo; sin hibridacion no documentada.",
    materials: ["capas de papel recortado para anatomia", "fibras finas para pelaje o pluma cuando corresponda", "cantos internos y articulaciones fisicas"],
    palette: "Color natural o explicitamente narrado; no usar brillo magico para señalar importancia.",
    scale: "Escala zoologica verificable frente al entorno y los personajes.",
  },
  colectivo: {
    silhouette: "Conjunto legible como relacion, no multitud de clones: variacion de escala, postura y distancia sin convertir el grupo en tipo etnico generico.",
    materials: ["figuras de papel individualizadas", "planos separados", "objetos relacionales solo si estan documentados"],
    palette: "Familia cromatica compartida con variaciones internas; sin uniformes o emblemas inventados.",
    scale: "Numero y separacion suficientes para entender el grupo sin llenar la imagen de extras.",
  },
  objeto: {
    silhouette: "Contorno, volumen, piezas y modo de uso claramente separables; evitar convertir utileria cotidiana en reliquia mistica.",
    materials: ["papel, fibra, madera o mineral traducidos a paper craft", "uniones y desgaste fisico", "sombras proyectadas coherentes"],
    palette: "Color propio del material y el estado; sin ornamentacion cultural no respaldada.",
    scale: "Escala demostrable mediante mano, suelo o arquitectura sin texto ni regla grafica.",
  },
  planta: {
    silhouette: "Morfologia botanica especifica en tallos, hojas, fruto y crecimiento; prohibida la sustitucion por cactus saguaro o flora desertica generica.",
    materials: ["papel recortado y plegado por organo vegetal", "fibras visibles", "volumen por capas y separacion real"],
    palette: "Verdes, ocres y frutos localizados según especie y estado, sin saturacion tropical uniforme.",
    scale: "Altura y extension legibles frente a suelo, vivienda o figura secundaria.",
  },
  arquitectura: {
    silhouette: "Sistema constructivo legible por estructura, cubierta, cerramiento, vacios y relacion con senderos; no casa decorativa aislada.",
    materials: ["yotojoro, madera, paja y barro cuando estan documentados", "capas estructurales separadas", "suelo fibroso continuo"],
    palette: "Materiales mates de arena, madera y barro; sin patrones decorativos inventados.",
    scale: "Escala habitable demostrada por vanos, sombra y relaciones espaciales.",
  },
  lugar: {
    silhouette: "Umbral y organizacion espacial propios del relato; la geografia incierta se mantiene aproximada y nunca se publica como coordenada.",
    materials: ["estratos de papel y suelo prensado", "elementos materiales citados por el relato", "aire y oclusiones entre planos"],
    palette: "Paleta territorial modulada por funcion, clima y estado narrativo.",
    scale: "Profundidad recorrible con primer plano, plano medio y fondo a distancias reales.",
  },
  paisaje: {
    silhouette: "Perfil territorial continuo y reconocible, con costa, planicie, serrania o ecotono solo donde corresponda.",
    materials: ["estratos amplios de papel fibroso", "relieve plegado y prensado", "agua o vegetacion localizada"],
    palette: "Arena, sal, roca y sombra como base; azul y verde aparecen localizados, no como filtro exotizante.",
    scale: "Gran profundidad atmosferica construida con capas fisicas, sin borde exterior de maqueta.",
  },
  fenomeno: {
    silhouette: "Secuencia material de causa, accion, limite y huella; debe entenderse sin texto, aura o particulas magicas genericas.",
    materials: ["papel y fibras que cambian de tension, humedad, luz o posicion", "capas causales separadas", "huella fisica persistente"],
    palette: "El cambio cromatico nace de la materia afectada, nunca de un resplandor sobrenatural por defecto.",
    scale: "Escala definida por aquello que transforma, desde objeto hasta territorio.",
  },
};

const COMMON_AVOID = [
  "borde exterior, carton soporte, base, mesa, estudio o marco visibles",
  "collage plano, ilustracion 2D o recortes pegados sin distancia fisica",
  "aura, chispas, runas, ojos luminosos o humo mistico generico",
  "tocados panindigenas, atrapasuenos, simbolos navajo o fantasia sahariana",
  "kanas, marcas claniles o patrones textiles inventados",
  "texto, etiquetas, letras, flechas graficas, watermark o firma",
  "violencia o sexualidad explicitas, desnudez o cuerpos vulnerados",
];

function eraScope(entity) {
  const refs = entity.myth_refs || [];
  if (refs.some((slug) => HISTORICAL_MYTHS.has(slug))) return "historico_wayuu_segun_relato";
  if (["paisaje", "arquitectura", "planta"].includes(entity.kind)) return "territorial_documentado_no_fecha_unica";
  return "mitico_wayuu_no_reconstruccion_prehispanica";
}

function modelId(entityId, purpose) {
  return `${entityId}__${purpose}`;
}

function viewFor(entity, purpose) {
  const base = PURPOSE_VIEW[purpose];
  return {
    id: purpose === "state_sheet" ? "estados" : "canon",
    view_type: base.view_type,
    purpose: base.intent,
    aspect: base.aspect,
    era: eraScope(entity),
    states: purpose === "state_sheet" ? entity.states : [entity.states[0]],
    reference_views: [],
  };
}

function designContract(entity, purpose) {
  const kind = KIND_CONTRACT[entity.kind];
  const states = entity.states.join(", ");
  return {
    distinctive_silhouette: `${kind.silhouette} Entidad: ${entity.name}. Funcion visual: ${entity.description}`,
    materials: kind.materials,
    palette_logic: kind.palette,
    scale: kind.scale,
    continuity_markers: [
      `nombre estable: ${entity.name}`,
      `funcion estable: ${entity.description}`,
      `estados declarados: ${states}`,
    ],
    documented_features: [entity.description, ...entity.aliases.map((alias) => `alias documentado: ${alias}`)],
    editorial_features: [
      `traduccion editorial reversible para ${purpose}`,
      "paper craft fotografiado como maqueta 3D inmersiva con capas a distintas distancias",
      "sin presentar fisonomia, ornamento o simbolo inventado como hecho cultural",
    ],
  };
}

function promptSpec(entity, purpose) {
  const base = PURPOSE_VIEW[purpose];
  return {
    use_case: "stylized-concept",
    asset_type: `Biblia visual Wayuu V3 · ${purpose}`,
    primary_request: `${base.intent} para ${entity.name}. ${entity.description}`,
    style_medium: "maqueta artesanal inmersiva de paper craft 3D fotografiada, no ilustracion plana",
    composition_framing: `${base.aspect}; mundo full bleed hasta los cuatro limites; ${KIND_CONTRACT[entity.kind].scale}`,
    lighting_mood: "luz natural lateral suave, sombras fisicas entre capas, atmósfera sobria y maravillosa segun la accion",
    materials_textures: KIND_CONTRACT[entity.kind].materials.join("; "),
    constraints: [
      KIND_CONTRACT[entity.kind].silhouette,
      `mostrar: ${entity.description}`,
      `estados autorizados: ${entity.states.join(", ")}`,
      "primer plano, plano medio y fondo a distancias fisicas distintas, con aire, oclusiones, cantos internos y sombras proyectadas",
      "generacion desde texto; no usar imagen local de referencia en el piloto inicial",
    ],
    avoid: COMMON_AVOID,
  };
}

export function buildWayuuModelLibraryV3(entityRegistry) {
  const models = {};
  const entityModelRefs = {};
  for (const [entityId, entity] of Object.entries(entityRegistry)) {
    entityModelRefs[entityId] = [];
    if (entity.visual_status !== "required") continue;
    for (const purpose of entity.model_requirements) {
      const id = modelId(entityId, purpose);
      entityModelRefs[entityId].push(id);
      models[id] = {
        purpose,
        entity_refs: [entityId],
        placeholder: false,
        design_status: "ready_for_pilot_review",
        evidence_refs: entity.evidence,
        design_contract: designContract(entity, purpose),
        prompt_spec: promptSpec(entity, purpose),
        views: [viewFor(entity, purpose)],
      };
    }
  }
  return { models, entityModelRefs };
}

export const WAYUU_PILOT_MODEL_IDS_V3 = [
  "jose_juan__identity_sheet",
  "mareiwa__presence_model",
  "juramia__identity_sheet",
  "caballo_kosina__identity_sheet",
  "hermanas_kuriruputa__group_grammar",
  "tuma_roja__object_sheet",
  "cardon_iguaraya__botanical_sheet",
  "rancheria_wayuu__spatial_model",
  "cueva_juramia__spatial_model",
  "territorio_alta_guajira__environment_model",
  "fuego_compartido__phenomenon_rule",
];
