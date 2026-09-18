/**
 * Bloques compartidos de dirección de arte para el tríptico de cada mito.
 *
 * La técnica deriva del taller de papel Muisca y evoluciona con decisiones
 * editoriales explícitas. Desde Arámai V1.5 usa recortes casi planos y magia
 * cotidiana. Los prompts históricos congelados nunca se reescriben.
 * Lo que sí cambia por escena viene de `visual-direction.js` (composición,
 * época, territorio), que ya comparten el generador del sitio y el de video.
 */

import { SYMBOLIC_HUELLA_LINES } from "../../src/lib/triptych-functions.js";
import {
  getCompositionLines,
  getEraLines,
  inferEra,
  getRegionCraft,
  getCommunityCraft,
} from "../../src/lib/visual-direction.js";
import { PAPER_CHARACTER_LINES, MAGIC_IN_THE_ORDINARY_LINES, buildNarrativeMagicLines } from "../../src/lib/narrative-magic.js";

/** Técnica: idéntica a la de la biblia, menos la línea de "ficha de personaje". */
export const TECNICA = `Técnica central:
- Fotografía frontal de una maqueta física real de papel artesanal, no ilustración digital.
- Tratamiento inmersivo: el encuadre entra en la escena y la llena de borde a borde; la maqueta nunca aparece como un objeto colocado ante la cámara.
- No mostrar el borde exterior de la maqueta, hojas sueltas, base, soporte, cartón crudo, mesa, estudio, ciclorama, marco ni vacío fuera de la escena. El cielo, suelo, agua o fondo narrativo deben continuar hasta los cuatro límites de la imagen.
- Menos epica generica, pintura digital y fantasia intercambiable; mas relieve bajo, sombras reales, fibras y factura humana. La magia especifica del mito debe seguir siendo visible y material.
- La escena debe parecer construida con papeles artesanales, fibras y piezas recortadas a distintas distancias, sin delatar un soporte de cartón ni convertirse en render o ilustración pulida.
- PERSONAJES DE PAPEL CORTADO, NO ILUSTRACIONES CON TEXTURA: cada figura se construye con pocas piezas delgadas recortadas y superpuestas; el cuerpo conserva proporciones naturales.
- La identidad y la edad se leen mediante proporción, geometría de recortes, postura y dos o tres pliegues físicos; nunca mediante piel fotográfica, poros, arrugas pintadas, degradados suaves, aerógrafo, pincel digital o sombreado ilustrado.
${PAPER_CHARACTER_LINES.map((line) => `- ${line}`).join("\n")}
- Personajes integrados al diorama con gesto sobrio; evitar máscaras sobredimensionadas, dramatismo físico, fantasía teatral y acabado de muñeco plástico.
- Profundidad tridimensional inconfundible: primer plano, plano medio y fondo son capas físicas escalonadas a distintas distancias, con aire real, oclusiones, parallax potencial y sombras proyectadas entre ellas. Los cantos internos del papel pueden verse y deben ayudar a leer la profundidad; nunca mostrar cartón corrugado ni el perímetro o sustrato exterior de la maqueta.`;

export const PROHIBICIONES = `Evitar SIEMPRE: texto, letras, logos, marcas de agua; marco, borde exterior o perímetro de la maqueta, cartón crudo o corrugado, base, soporte, mesa, estudio o fondo fuera del mundo narrativo; collage plano sin distancia entre capas; CGI, render 3D o ilustracion digital pulida; personaje pintado o impreso sobre una silueta plana; piel fotográfica, poros, arrugas realistas, sombreado suave, aerógrafo, volumen facial pintado o cabeza redondeada esculpida; muñeco plástico, arcilla, madera tallada o stop-motion de silicona; coronas, tronos o templos europeos; piramides, penachos o iconografia mesoamericana; simbolos espirituales inventados; joyeria inventada u oro en el cuerpo salvo que el relato lo pida; dramatismo excesivo; flores en el pelo, maquillaje, pose de modelo, sonrisa amplia. Tratamiento corporal sobrio y documental cuando la ficha o la escena lo requiera.`;

/** Lo que distingue a cada acto del tríptico. Es la doctrina "entrada-acto-huella". */
export const ACTOS = {
  entrada: {
    aspect_ratio: "16:9",
    etiqueta: "la entrada del personaje",
    lines: [
      "ESTE ES EL ACTO 1 — LA ENTRADA DEL PERSONAJE: plano general de presentación donde la figura protagonista es legible dentro del paisaje.",
      "La acción y sus relaciones mandan: conservar personas cuando el relato las requiere, sin exigir que la figura sea el objeto más grande del cuadro.",
      "Diorama denso y habitado, nunca minimalista; acción en curso, jamás una pose estática.",
      "Ninguna figura de espaldas a la cámara.",
      "La luz hace legible la relación entre acción, mundo y prodigio; no aislar siempre al personaje con un foco de retrato.",
      "Un objeto del hilo narrativo del mito visible en cuadro.",
      "Un tercio del encuadre queda abierto y limpio para un título.",
    ],
  },
  acto: {
    aspect_ratio: "9:16",
    etiqueta: "el acto mítico",
    lines: [
      "ESTE ES EL ACTO 2 — EL ACTO MÍTICO: el momento por el que se cuenta el mito, en OTRO LUGAR Y OTRA LUZ que la entrada.",
      "Si el relato ocurre en un solo escenario, cambiar la hora y la distancia de cámara respecto a la entrada.",
      "Es la escena de mayor energía del tríptico.",
    ],
  },
  huella: {
    aspect_ratio: "1:1",
    etiqueta: "síntesis simbólica del mito",
    lines: [
      "ESTE ES EL ACTO 3 — LA HUELLA: síntesis simbólica de lo que el mito significa y deja.",
      ...SYMBOLIC_HUELLA_LINES,
    ],
  },
};

export const REGLAS_KEYFRAME = [
  "ESTE ES UN FOTOGRAMA DE UNA SECUENCIA DE VIDEO VERTICAL 9:16, no el tríptico ni la escena principal del mito.",
  "La acción esencial ocurre dentro del 70% central del ancho; rostros, manos y objetos narrativos quedan lejos de los bordes laterales.",
  "El 20% superior queda sin elementos críticos para permitir un título y el 15% inferior queda libre de rostros, manos y objetos clave para subtítulos.",
  "Composición de borde a borde, sin texto dentro de la imagen y sin marco.",
];

export const MAGIA_SITUADA_V2 = [
  "MAGIA SITUADA: la magia no es decoración añadida; debe obedecer la regla imposible particular de este mito.",
  "Hacer visible el verbo del prodigio mediante materia, luz, escala o movimiento, y conservar su límite, costo o huella.",
  "No resolver la magia con aura genérica ni adornos intercambiables. Luz, sombras o estrellas pueden ser una licencia plástica declarada si expresan la acción del relato; no se presentan como símbolos tradicionales documentados.",
  "La sobriedad protege el canon cultural, no el tamaño de lo imposible: la proposición fantástica debe dominar la lectura y producir asombro inmediato.",
  ...MAGIC_IN_THE_ORDINARY_LINES,
];

export const IMAGINACION_MITICA_V3 = [
  "DOBLE CONTRATO: separar el canon cultural protegido del campo de imaginación mítica.",
  "CANON PROTEGIDO: personas, edades, cuerpos, vestuario, arquitectura, objetos documentados y relaciones sociales no se deforman, sustituyen ni decoran por fantasía.",
  "CAMPO IMAGINATIVO: territorio, profundidad, luz, sombra, escala, tiempo y comportamiento del papel sí pueden actuar de manera físicamente imposible cuando expresan la regla propia del mito.",
  "REALISMO MÁGICO VISUAL: el mundo cotidiano conserva peso, textura y credibilidad mientras acepta lo imposible con absoluta naturalidad; nadie posa para explicar el prodigio.",
  "JERARQUÍA: la contradicción imposible debe ser legible y estar relacionada con la vida cotidiana; su importancia no se mide por ocupar una fracción fija del cuadro.",
  "MISTERIO: mostrar la consecuencia material sin explicar el mecanismo; permitir silencio, reverberación, escala sublime y luz imposible sin caer en efectos intercambiables.",
  "No confundir misticismo con oscuridad uniforme, niebla, brillo, partículas o símbolos. El asombro nace de una ley visual única que transforma el mundo reconocible.",
];

const MODELOS_V2 = {
  personaje: "Modelo de identidad: cuerpo, rostro, edad, vestuario y proporciones reutilizables.",
  criatura: "Modelo de criatura: anatomía y materialidad constantes, sin monstruosidad añadida.",
  animal: "Modelo animal: especie, escala, silueta y comportamiento verificables.",
  objeto: "Modelo de objeto: forma, material, escala y marcas de uso legibles.",
  planta: "Modelo de planta: morfología, escala y estado narrativo legibles.",
  paisaje: "Modelo de lugar: geografía y relaciones espaciales reutilizables, no una escena de trama.",
  arquitectura: "Modelo arquitectónico: estructura, materiales, accesos y escala coherentes.",
  fenomeno: "Modelo de fenómeno: aislar y fijar cómo la regla imposible actúa sobre materia simple.",
  transformacion: "Modelo de transformación: conservar identidad mientras se distingue umbral, cambio y consecuencia.",
  gesto_ritual: "Modelo de gesto público documentado: fijar sujetos, manos, objetos y relación espacial sin inventar ceremonial.",
  relacion: "Modelo de relación: la distancia, orientación y tensión entre sujetos es el canon.",
  huella: "Modelo de huella: fijar la consecuencia material que permanece cuando termina el acto.",
};

function mythicDirectionLines(mythicGrammar, magicSignature) {
  if (!mythicGrammar || !magicSignature) return [];
  const distinctive = (magicSignature.distinctive_elements || []).join("; ");
  return [
    ...MAGIA_SITUADA_V2,
    `REALIDAD ORDINARIA: ${mythicGrammar.ordinary_world}`,
    `HECHO IMPOSIBLE: ${mythicGrammar.extraordinary_fact}`,
    `REGLA: ${mythicGrammar.magic_rule}`,
    `LÍMITE O COSTO: ${mythicGrammar.limit_or_cost}`,
    `TRANSFORMACIÓN: ${mythicGrammar.transformation}`,
    `HUELLA: ${mythicGrammar.trace}`,
    `CENTRO EMOCIONAL: ${mythicGrammar.emotional_center}`,
    `TRADUCCIÓN MATERIAL: ${magicSignature.material_translation}`,
    `COMPORTAMIENTO DE LA LUZ: ${magicSignature.light_behavior}`,
    `COMPORTAMIENTO DE LA ESCALA: ${magicSignature.scale_behavior}`,
    `COMPORTAMIENTO DEL MOVIMIENTO: ${magicSignature.movement_behavior}`,
    ...(distinctive ? [`RASGOS QUE HACEN ÚNICA ESTA MAGIA: ${distinctive}`] : []),
    `PRUEBA DE GENERICIDAD: ${magicSignature.genericity_test}`,
  ];
}

function mythicImaginationLines(mythicImagination) {
  if (!mythicImagination) return [];
  const motifArc = Object.entries(mythicImagination.motif_arc || {})
    .map(([act, value]) => `${act}: ${value}`)
    .join("; ");
  return [
    ...IMAGINACION_MITICA_V3,
    `CANON CULTURAL PROTEGIDO EN ESTE MITO: ${mythicImagination.protected_canon}`,
    `CAMPO DE LIBERTAD IMAGINATIVA: ${mythicImagination.imaginative_field}`,
    `IMAGEN IMPOSIBLE DOMINANTE: ${mythicImagination.dominant_impossible_image}`,
    `ESCALA DEL PRODIGIO: ${mythicImagination.scale_contract}`,
    `LUZ MÍSTICA SITUADA: ${mythicImagination.mystical_light}`,
    ...(motifArc ? [`ARCO DEL MOTIVO ENTRE LAS TRES PIEZAS: ${motifArc}`] : []),
    `PRUEBA DE ASOMBRO INMEDIATO: ${mythicImagination.wonder_test}`,
    `PRUEBA DE MEMORIA: ${mythicImagination.memory_test}`,
  ];
}

function characterArtTreatmentLines(characterArtTreatment) {
  if (!characterArtTreatment) return [];
  return [
    "TRATAMIENTO MATERIAL DE PERSONAJES:",
    `MEDIO: ${characterArtTreatment.medium}`,
    `CONSTRUCCIÓN: ${characterArtTreatment.construction}`,
    `MÉTODO DE IDENTIDAD: ${characterArtTreatment.identity_method}`,
    `RECHAZAR SI: ${characterArtTreatment.reject_if}`,
  ];
}

/**
 * Fichas de biblia: personaje, paisaje y prop.
 *
 * Las tres líneas se copian LITERAL del `manifest.json` de la biblia muisca
 * —son las que produjeron las 21 fichas que ya existen— para que una ficha
 * nueva de 2026 sea intercambiable con una de 2026-08. Si se reescriben, el
 * elenco deja de parecer del mismo taller.
 */
export const FICHAS = {
  personaje: {
    aspect_ratio: "9:16",
    linea: "- Ficha de personaje para una biblia visual: UNA figura (o grupo indicado) de cuerpo entero, frontal, centrada, sobre fondo mate liso color crema claro que llega a los cuatro límites, sin escenario ni utilería extra. La figura conserva capas y fibras de papel, sin canto de cartón ni borde exterior del soporte.",
  },
  paisaje: {
    aspect_ratio: "16:9",
    linea: "- Paisaje de biblia visual: un solo tableau artesanal de borde a borde, profundidad por capas de papel, sin personas.",
  },
  prop: {
    aspect_ratio: "1:1",
    linea: "- Ficha de objeto para biblia visual: el objeto único, centrado, con detalle artesanal de papel.",
  },
};

/**
 * Compone el prompt de una ficha de biblia.
 *
 * Una ficha no lleva esquema de composición: su encuadre ya está fijado por el
 * tipo (figura entera y frontal, tableau de borde a borde, objeto centrado).
 * Declararle una composición encima sería pelear con eso.
 */
export function buildFicha({ comunidad, region, kind, descripcion, paleta, eraOverride }) {
  const F = FICHAS[kind];
  if (!F) throw new Error(`tipo de ficha desconocido: ${kind}`);
  return [
    `Dirección de arte para la biblia visual de mitos colombianos (${comunidad}, región ${region}).`,
    "",
    TECNICA,
    F.linea,
    "",
    ...getEraLines(inferEra(comunidad, eraOverride)),
    "",
    `TERRITORIO: ${getRegionCraft(region)}.`,
    `COMUNIDAD: ${getCommunityCraft(comunidad)}.`,
    "",
    "Escena:",
    descripcion.trim(),
    "",
    `Paleta: ${paleta}`,
    PROHIBICIONES,
  ].join("\n");
}

/**
 * Compone el prompt final de una escena.
 *
 * El orden importa: primero la técnica (que no se negocia), después el mundo
 * material (época y territorio), después el encuadre y sólo al final la escena.
 * Poner la escena de último es lo que evita que el modelo la trate como un
 * detalle más entre las reglas.
 */
export function buildPrompt({
  comunidad,
  region,
  acto,
  composicion,
  escena,
  paleta,
  eraOverride,
  extra = [],
  mythicGrammar,
  magicSignature,
  mythicImagination,
  characterArtTreatment,
  narrativeMagic,
}) {
  // `eraOverride` existe por los mitos de DOS épocas: el Pozo de Hunzahúa es
  // prehispánico cuando se quiebra la vasija y colonial cuando llega Donato con
  // palas de hierro. Sin esto, el bloque de época prohibiría el metal justo en
  // la escena que lo necesita, y en un corpus donde `Mestizo` y `Mixto` son el
  // 42% eso no es un caso raro.
  const A = ACTOS[acto];
  if (!A) throw new Error(`acto desconocido: ${acto}`);
  const era = inferEra(comunidad, eraOverride);

  return [
    `Dirección de arte para la biblia visual de mitos colombianos (${comunidad}, región ${region}).`,
    "",
    TECNICA,
    "",
    ...getEraLines(era),
    "",
    `TERRITORIO: ${getRegionCraft(region)}.`,
    `COMUNIDAD: ${getCommunityCraft(comunidad)}.`,
    ...(mythicGrammar && magicSignature && !narrativeMagic ? ["", ...mythicDirectionLines(mythicGrammar, magicSignature)] : []),
    ...(mythicImagination && !narrativeMagic ? ["", ...mythicImaginationLines(mythicImagination)] : []),
    ...(characterArtTreatment ? ["", ...characterArtTreatmentLines(characterArtTreatment)] : []),
    ...buildNarrativeMagicLines(narrativeMagic),
    "",
    ...A.lines,
    "",
    ...getCompositionLines(composicion),
    "",
    "Escena:",
    escena.trim(),
    ...(extra.length ? ["", ...extra] : []),
    "",
    `Paleta: ${paleta}`,
    PROHIBICIONES,
  ].join("\n");
}

/**
 * Compone un fotograma vertical de video sin fingir que es el acto central del
 * tríptico. Las referencias se enumeran en el mismo orden en que se adjuntan a
 * images.edit para que su función sea auditable y no se mezclen identidades.
 */
export function buildVideoKeyframePrompt({
  comunidad,
  region,
  composicion,
  escena,
  paleta,
  eraOverride,
  referencias = [],
  mythicGrammar,
  magicSignature,
  mythicImagination,
  characterArtTreatment,
  narrativeMagic,
}) {
  const era = inferEra(comunidad, eraOverride);
  return [
    `Dirección de arte para un fotograma de video de mitos colombianos (${comunidad}, región ${region}).`,
    "",
    TECNICA,
    "",
    ...getEraLines(era),
    "",
    `TERRITORIO: ${getRegionCraft(region)}.`,
    `COMUNIDAD: ${getCommunityCraft(comunidad)}.`,
    ...(mythicGrammar && magicSignature && !narrativeMagic ? ["", ...mythicDirectionLines(mythicGrammar, magicSignature)] : []),
    ...(mythicImagination && !narrativeMagic ? ["", ...mythicImaginationLines(mythicImagination)] : []),
    ...(characterArtTreatment ? ["", ...characterArtTreatmentLines(characterArtTreatment)] : []),
    ...buildNarrativeMagicLines(narrativeMagic),
    "",
    ...REGLAS_KEYFRAME,
    "",
    ...getCompositionLines(composicion),
    ...(referencias.length
      ? [
          "",
          "REFERENCIAS VISUALES ADJUNTAS, EN ESTE MISMO ORDEN:",
          ...referencias.map((ref, index) => `${index + 1}. ${ref}`),
          "Conservar de ellas únicamente las identidades, objetos, arquitectura, materiales y continuidad indicados; no copiar su encuadre si contradice la escena nueva.",
        ]
      : []),
    "",
    "Escena:",
    escena.trim(),
    "",
    `Paleta: ${paleta}`,
    PROHIBICIONES,
  ].join("\n");
}

/**
 * Compone una vista de modelo V2. No genera la imagen: traduce el contrato ya
 * validado a un prompt reproducible, conservando evidencia y firma de magia.
 */
export function buildVisualModelPromptV2({
  comunidad,
  region,
  modeloId,
  modelo,
  vista,
  mythicGrammar,
  magicSignature,
  paleta,
  eraOverride,
}) {
  if (!modelo || !MODELOS_V2[modelo.kind]) throw new Error(`tipo de modelo V2 desconocido: ${modelo?.kind}`);
  if (!vista) throw new Error(`falta la vista del modelo V2: ${modeloId}`);
  const era = inferEra(comunidad, eraOverride);
  const directionLines =
    modelo.layer === "ancla" && vista.magic_intensity === "absent"
      ? [
          "CONTEXTO MÍTICO, SIN REPRESENTAR EL PRODIGIO EN ESTA VISTA:",
          `REALIDAD ORDINARIA: ${mythicGrammar.ordinary_world}`,
          `LÍMITE O COSTO QUE NO SE DEBE BORRAR: ${mythicGrammar.limit_or_cost}`,
          "Esta ficha fija el mundo material anterior al prodigio: no añadir aura, presencias, transformaciones ni símbolos para hacerla parecer mágica.",
        ]
      : mythicDirectionLines(mythicGrammar, magicSignature);
  return [
    `Dirección de arte para un modelo de Biblia visual V2 (${comunidad}, región ${region}).`,
    "",
    TECNICA,
    "",
    ...getEraLines(era),
    "",
    `TERRITORIO: ${getRegionCraft(region)}.`,
    `COMUNIDAD: ${getCommunityCraft(comunidad)}.`,
    "",
    ...directionLines,
    ...(modelo.layer === "ancla" && vista.magic_intensity === "absent" ? [] : buildNarrativeMagicLines(vista.magic_in_the_ordinary)),
    "",
    `MODELO: ${modeloId}`,
    `TIPO Y FUNCIÓN: ${MODELOS_V2[modelo.kind]}`,
    `CAPA: ${modelo.layer}.`,
    `DESCRIPCIÓN CANÓNICA: ${modelo.description}`,
    `INVARIANTES: ${(modelo.invariants || []).join("; ")}.`,
    `VARIACIONES PERMITIDAS: ${(modelo.allowed_variations || []).join("; ")}.`,
    `VARIACIONES PROHIBIDAS: ${(modelo.forbidden_variations || []).join("; ")}.`,
    "",
    `VISTA: ${vista.id}; estado ${vista.state}; proporción ${vista.aspect}; intensidad ${vista.magic_intensity}.`,
    `PROPÓSITO DE CONTINUIDAD: ${vista.purpose}`,
    "Escena de modelo:",
    vista.description,
    "",
    `Paleta: ${paleta}`,
    PROHIBICIONES,
  ].join("\n");
}
