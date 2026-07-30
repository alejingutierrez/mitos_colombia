export const INSTAGRAM_CANVAS = Object.freeze({
  width: 1080,
  height: 1350,
  aspectRatio: "4:5",
  safeZone: { top: 72, right: 72, bottom: 96, left: 72 },
});

export const PALETTES = Object.freeze({
  paramo: {
    background: "#E9E2D4",
    ink: "#192A28",
    accent: "#B68A35",
    secondary: "#697870",
    paper: "#F7F2E8",
  },
  laguna: {
    background: "#12313A",
    ink: "#F6EEDC",
    accent: "#D3A94F",
    secondary: "#7DA0A0",
    paper: "#E8E0D1",
  },
  tierra: {
    background: "#6C3F2E",
    ink: "#FFF4DD",
    accent: "#D7A83B",
    secondary: "#C78D6A",
    paper: "#EDE0CA",
  },
  noche: {
    background: "#151B2B",
    ink: "#F3E9D2",
    accent: "#D2A846",
    secondary: "#657596",
    paper: "#DDD2BE",
  },
  selva: {
    background: "#193B2D",
    ink: "#F4EBDD",
    accent: "#C99A42",
    secondary: "#7D9A72",
    paper: "#E8DDC9",
  },
  oro: {
    background: "#C89A3D",
    ink: "#172B2D",
    accent: "#F7EEDB",
    secondary: "#835F23",
    paper: "#F3E4C3",
  },
  arcilla: {
    background: "#A94F3C",
    ink: "#FFF2DA",
    accent: "#1A3433",
    secondary: "#D8916E",
    paper: "#EBCDB5",
  },
});

const PALETTE_SEQUENCES = Object.freeze({
  laguna: ["laguna", "paramo", "tierra", "oro", "selva", "paramo", "noche", "laguna", "arcilla", "oro", "paramo", "selva", "noche", "tierra"],
  paramo: ["paramo", "laguna", "oro", "selva", "tierra", "paramo", "noche", "arcilla", "laguna", "oro", "selva", "paramo", "tierra", "noche"],
  tierra: ["tierra", "paramo", "laguna", "oro", "selva", "arcilla", "noche", "paramo", "tierra", "oro", "laguna", "selva", "arcilla", "noche"],
  noche: ["noche", "oro", "paramo", "laguna", "arcilla", "selva", "tierra", "noche", "paramo", "oro", "laguna", "arcilla", "selva", "tierra"],
  selva: ["selva", "oro", "paramo", "laguna", "tierra", "noche", "arcilla", "selva", "paramo", "oro", "laguna", "tierra", "noche", "arcilla"],
});

const template = ({
  id,
  name,
  concept,
  palette,
  cover,
  imageLayouts,
  typeLayouts,
  locationLayout,
  closingLayout,
  motif,
  paletteSequence,
  minSlides = 8,
  maxSlides = 14,
}) =>
  Object.freeze({
    id,
    name,
    concept,
    palette,
    cover,
    imageLayouts,
    typeLayouts,
    locationLayout,
    closingLayout,
    motif,
    paletteSequence: paletteSequence || PALETTE_SEQUENCES[palette],
    minSlides,
    maxSlides,
  });

/**
 * Las plantillas son sistemas de secuencia, no diseños congelados.
 * Comparten tokens y firma editorial, pero cambian ritmo, encuadres, jerarquía
 * tipográfica y motivo. El planificador decide el contenido; el resolver asigna
 * una puesta en página coherente con la plantilla elegida.
 */
export const INSTAGRAM_TEMPLATES = Object.freeze([
  template({
    id: "umbral_de_agua",
    name: "Umbral de agua",
    concept: "Entrada lenta desde el territorio hacia una aparición.",
    palette: "laguna",
    cover: "image_full",
    imageLayouts: ["image_horizon", "image_arch", "image_full"],
    typeLayouts: ["type_left", "type_center", "type_wave"],
    locationLayout: "location_atlas",
    closingLayout: "closing_question",
    motif: "ripples",
  }),
  template({
    id: "secuencia_serpentina",
    name: "Secuencia serpentina",
    concept: "Una narración que cambia de escala y regresa al origen.",
    palette: "laguna",
    paletteSequence: ["laguna", "paramo", "tierra", "oro", "selva", "paramo", "noche", "laguna", "arcilla"],
    cover: "cover_identity",
    imageLayouts: ["image_editorial_block", "image_climax_clean"],
    typeLayouts: ["identity_stack", "community_grid", "principles_triptych", "return_vertical"],
    locationLayout: "location_poster",
    closingLayout: "closing_keyword",
    motif: "cut_blocks",
    minSlides: 8,
  }),
  template({
    id: "archivo_fragmentado",
    name: "Archivo fragmentado",
    concept: "El mito como expediente de piezas, notas y hallazgos.",
    palette: "paramo",
    cover: "image_frame",
    imageLayouts: ["image_postcard", "image_strip", "image_frame"],
    typeLayouts: ["type_margin", "type_index", "type_split"],
    locationLayout: "location_fieldnote",
    closingLayout: "closing_signature",
    motif: "registration_marks",
  }),
  template({
    id: "mapa_de_ecos",
    name: "Mapa de ecos",
    concept: "El territorio ordena el relato y cada escena funciona como coordenada.",
    palette: "tierra",
    cover: "type_giant",
    imageLayouts: ["image_window", "image_horizon", "image_postcard"],
    typeLayouts: ["type_index", "type_left", "type_stair"],
    locationLayout: "location_atlas",
    closingLayout: "closing_question",
    motif: "contours",
  }),
  template({
    id: "testimonio_oral",
    name: "Testimonio oral",
    concept: "Frases breves, silencios amplios y cadencia de voz contada.",
    palette: "tierra",
    cover: "type_quote",
    imageLayouts: ["image_circle", "image_frame", "image_full"],
    typeLayouts: ["type_quote", "type_center", "type_left"],
    locationLayout: "location_fieldnote",
    closingLayout: "closing_signature",
    motif: "sound_lines",
  }),
  template({
    id: "ciclo_cosmico",
    name: "Ciclo cósmico",
    concept: "Ascenso, transformación y cierre circular.",
    palette: "noche",
    cover: "image_circle",
    imageLayouts: ["image_circle", "image_arch", "image_full"],
    typeLayouts: ["type_center", "type_giant", "type_wave"],
    locationLayout: "location_coordinates",
    closingLayout: "closing_manifesto",
    motif: "orbit",
  }),
  template({
    id: "expediente_del_territorio",
    name: "Expediente del territorio",
    concept: "Lugar, evidencia y mito conviven como capas editoriales.",
    palette: "paramo",
    cover: "image_postcard",
    imageLayouts: ["image_postcard", "image_split", "image_strip"],
    typeLayouts: ["type_margin", "type_split", "type_index"],
    locationLayout: "location_fieldnote",
    closingLayout: "closing_signature",
    motif: "field_grid",
  }),
  template({
    id: "doble_tiempo",
    name: "Doble tiempo",
    concept: "Alterna el tiempo del mito con una lectura contemporánea sobria.",
    palette: "paramo",
    cover: "image_split",
    imageLayouts: ["image_split", "image_window", "image_frame"],
    typeLayouts: ["type_split", "type_quote", "type_left"],
    locationLayout: "location_atlas",
    closingLayout: "closing_question",
    motif: "twin_columns",
  }),
  template({
    id: "anatomia_del_simbolo",
    name: "Anatomía del símbolo",
    concept: "El relato se abre a través de un símbolo central sin volverlo infografía.",
    palette: "laguna",
    cover: "type_giant",
    imageLayouts: ["image_circle", "image_strip", "image_arch"],
    typeLayouts: ["type_giant", "type_index", "type_margin"],
    locationLayout: "location_coordinates",
    closingLayout: "closing_manifesto",
    motif: "symbol",
  }),
  template({
    id: "camino_de_regreso",
    name: "Camino de regreso",
    concept: "Comienza por el desenlace y reconstruye el camino hacia él.",
    palette: "noche",
    cover: "image_horizon",
    imageLayouts: ["image_horizon", "image_frame", "image_full"],
    typeLayouts: ["type_stair", "type_left", "type_quote"],
    locationLayout: "location_atlas",
    closingLayout: "closing_signature",
    motif: "path",
    minSlides: 9,
  }),
  template({
    id: "coro_de_voces",
    name: "Coro de voces",
    concept: "Varias voces breves sostienen una única idea central.",
    palette: "selva",
    cover: "type_center",
    imageLayouts: ["image_frame", "image_circle", "image_postcard"],
    typeLayouts: ["type_quote", "type_split", "type_center"],
    locationLayout: "location_fieldnote",
    closingLayout: "closing_question",
    motif: "chorus",
  }),
  template({
    id: "noche_y_presagio",
    name: "Noche y presagio",
    concept: "Contraste alto, pausas oscuras y revelación tardía.",
    palette: "noche",
    cover: "image_full",
    imageLayouts: ["image_full", "image_window", "image_circle"],
    typeLayouts: ["type_giant", "type_center", "type_wave"],
    locationLayout: "location_coordinates",
    closingLayout: "closing_manifesto",
    motif: "moon",
  }),
  template({
    id: "objeto_sagrado",
    name: "Objeto sagrado",
    concept: "Un objeto o material organiza la memoria del relato.",
    palette: "tierra",
    cover: "image_circle",
    imageLayouts: ["image_circle", "image_postcard", "image_strip"],
    typeLayouts: ["type_margin", "type_quote", "type_index"],
    locationLayout: "location_fieldnote",
    closingLayout: "closing_signature",
    motif: "artifact",
  }),
  template({
    id: "retrato_en_capas",
    name: "Retrato en capas",
    concept: "El personaje se revela por gestos, entorno, acción y legado.",
    palette: "selva",
    cover: "image_arch",
    imageLayouts: ["image_arch", "image_split", "image_full"],
    typeLayouts: ["type_left", "type_split", "type_giant"],
    locationLayout: "location_atlas",
    closingLayout: "closing_question",
    motif: "layers",
  }),
  template({
    id: "cronica_de_lugar",
    name: "Crónica de lugar",
    concept: "El paisaje es protagonista y la narración entra después.",
    palette: "paramo",
    cover: "image_horizon",
    imageLayouts: ["image_horizon", "image_window", "image_postcard"],
    typeLayouts: ["type_left", "type_margin", "type_center"],
    locationLayout: "location_atlas",
    closingLayout: "closing_signature",
    motif: "horizon",
  }),
  template({
    id: "preguntas_al_mito",
    name: "Preguntas al mito",
    concept: "Cada giro responde una pregunta concreta sin volver escolar el tono.",
    palette: "laguna",
    cover: "type_giant",
    imageLayouts: ["image_frame", "image_full", "image_circle"],
    typeLayouts: ["type_giant", "type_split", "type_quote"],
    locationLayout: "location_coordinates",
    closingLayout: "closing_question",
    motif: "question_mark",
  }),
  template({
    id: "ritual_de_color",
    name: "Ritual de color",
    concept: "Bloques cromáticos marcan los cambios de energía del relato.",
    palette: "selva",
    cover: "type_center",
    imageLayouts: ["image_strip", "image_split", "image_full"],
    typeLayouts: ["type_center", "type_stair", "type_giant"],
    locationLayout: "location_fieldnote",
    closingLayout: "closing_manifesto",
    motif: "color_blocks",
  }),
  template({
    id: "margen_anotado",
    name: "Margen anotado",
    concept: "Una edición de lectura con apostillas, folios y observaciones laterales.",
    palette: "paramo",
    cover: "image_frame",
    imageLayouts: ["image_frame", "image_postcard", "image_window"],
    typeLayouts: ["type_margin", "type_index", "type_split"],
    locationLayout: "location_fieldnote",
    closingLayout: "closing_signature",
    motif: "marginalia",
  }),
  template({
    id: "paisaje_vertical",
    name: "Paisaje vertical",
    concept: "La profundidad del territorio se convierte en eje de toda la secuencia.",
    palette: "selva",
    cover: "image_full",
    imageLayouts: ["image_full", "image_horizon", "image_arch"],
    typeLayouts: ["type_stair", "type_left", "type_wave"],
    locationLayout: "location_atlas",
    closingLayout: "closing_question",
    motif: "vertical_path",
  }),
  template({
    id: "latido_y_silencio",
    name: "Latido y silencio",
    concept: "Alterna una frase de alto impacto con láminas de respiración amplia.",
    palette: "noche",
    cover: "type_quote",
    imageLayouts: ["image_window", "image_circle", "image_full"],
    typeLayouts: ["type_quote", "type_giant", "type_center"],
    locationLayout: "location_coordinates",
    closingLayout: "closing_manifesto",
    motif: "pulse",
  }),
]);

export function getTemplate(templateId) {
  return INSTAGRAM_TEMPLATES.find((item) => item.id === templateId) || null;
}

export function eligibleTemplates(history = [], { minSlides = 8, maxSlides = 14 } = {}) {
  const recentTemplateIds = new Set(
    history
      .slice(-20)
      .map((entry) => entry?.template_id)
      .filter(Boolean)
  );
  const recentMotifs = new Set(
    history
      .slice(-3)
      .map((entry) => entry?.motif)
      .filter(Boolean)
  );
  const strict = INSTAGRAM_TEMPLATES.filter(
    (item) =>
      !recentTemplateIds.has(item.id) &&
      !recentMotifs.has(item.motif) &&
      item.minSlides <= maxSlides &&
      item.maxSlides >= minSlides
  );
  if (strict.length) return strict;

  return INSTAGRAM_TEMPLATES.filter(
    (item) =>
      !recentTemplateIds.has(item.id) &&
      item.minSlides <= maxSlides &&
      item.maxSlides >= minSlides
  );
}

export function resolveSlideLayout(templateId, slide, counters = {}) {
  const selected = getTemplate(templateId) || INSTAGRAM_TEMPLATES[0];
  if (slide.sequence === 1) return selected.cover;
  if (slide.kind === "location") return selected.locationLayout;
  if (slide.kind === "closing") return selected.closingLayout;

  const hasImage = slide.asset_id && slide.asset_id !== "none";
  const key = hasImage ? "image" : "type";
  const index = counters[key] || 0;
  counters[key] = index + 1;
  const layouts = hasImage ? selected.imageLayouts : selected.typeLayouts;
  return layouts[index % layouts.length];
}
