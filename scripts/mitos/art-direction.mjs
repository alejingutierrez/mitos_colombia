/**
 * Bloques compartidos de dirección de arte para el tríptico de cada mito.
 *
 * El preámbulo se copia LITERAL del `manifest.json` de la biblia muisca para no
 * mover el estilo `studioPaperMaquette` un milímetro entre tandas: la
 * continuidad del canal depende de que esta cabecera no se reescriba.
 * Lo que sí cambia por escena viene de `visual-direction.js` (composición,
 * época, territorio), que ya comparten el generador del sitio y el de video.
 */

import {
  getCompositionLines,
  getEraLines,
  inferEra,
  getRegionCraft,
  getCommunityCraft,
} from "../../src/lib/visual-direction.js";

/** Técnica: idéntica a la de la biblia, menos la línea de "ficha de personaje". */
export const TECNICA = `Técnica central:
- Fotografía frontal de una maqueta física real de papel artesanal, no ilustración digital.
- Tratamiento de taller: maqueta artesanal fotografiada sobre fondo mate, con cortes visibles, pegante sutil, bordes imperfectos y capas de papel reconocibles.
- Menos epica, menos pintura, menos fantasia; mas objeto fisico, mesa de trabajo, relieve bajo, sombras reales y factura humana.
- La escena debe parecer fotografiada despues de construirla con cartulinas, fibras, papeles texturados y pequenas piezas recortadas, no render ni ilustracion pulida.
- Personajes como recortes o volumenes de papel integrados al diorama, con gesto sobrio; evitar drama facial hiperrealista, mascaras sobredimensionadas, violencia explicita y fantasia teatral.
- Profundidad construida en capas escalonadas de papel recortado, con aire real entre ellas.`;

export const PROHIBICIONES = `Evitar SIEMPRE: texto, letras, logos, marcas de agua, marcos o bordes; CGI, render 3D o ilustracion digital pulida; coronas, tronos o templos europeos; piramides, penachos o iconografia mesoamericana; simbolos espirituales inventados; joyeria inventada u oro en el cuerpo salvo que el relato lo pida; desnudez, sexualizacion o dramatismo excesivo; flores en el pelo, maquillaje, pose de modelo, sonrisa amplia.`;

/** Lo que distingue a cada acto del tríptico. Es la doctrina "entrada-acto-huella". */
export const ACTOS = {
  entrada: {
    aspect_ratio: "16:9",
    etiqueta: "la entrada del personaje",
    lines: [
      "ESTE ES EL ACTO 1 — LA ENTRADA DEL PERSONAJE: plano general de presentación donde la figura protagonista es legible dentro del paisaje.",
      "NUNCA un paisaje vacío: la figura manda y el paisaje la rodea.",
      "Diorama denso y habitado, nunca minimalista; acción en curso, jamás una pose estática.",
      "Ninguna figura de espaldas a la cámara.",
      "El personaje se lleva la ÚNICA luz distinta del cuadro, para que no se pierda entre iguales.",
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
    etiqueta: "lo que quedó después",
    lines: [
      "ESTE ES EL ACTO 3 — LA HUELLA: lo que queda en el mundo cuando el mito ya ocurrió.",
      "Emblema legible a tamaño pequeño, con un solo motivo dominante y el resto en silencio.",
      "Normalmente sin personas, salvo que la huella del relato SEA una persona.",
    ],
  },
};

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
    linea: "- Ficha de personaje para una biblia visual: UNA figura (o grupo indicado) de cuerpo entero, frontal, centrada, sobre fondo mate liso color crema claro, sin escenario ni utilería extra. La figura es un recorte y volumen de papel con capas, bordes y fibras visibles.",
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
