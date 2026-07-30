const PALETTES = Object.freeze({
  laguna: {
    background: "#102726",
    foreground: "#F3EDDE",
    accent: "#B8924B",
    muted: "#8CA19A",
    paper: "#E7DECB",
  },
  paramo: {
    background: "#D9D0BC",
    foreground: "#172321",
    accent: "#65796F",
    muted: "#8E8779",
    paper: "#F0EBDD",
  },
  arcilla: {
    background: "#9A4D39",
    foreground: "#FFF3DE",
    accent: "#202E2C",
    muted: "#DDA17B",
    paper: "#EAC8AE",
  },
  noche: {
    background: "#111A25",
    foreground: "#F3EBDD",
    accent: "#A98B55",
    muted: "#718095",
    paper: "#DAD0BD",
  },
  musgo: {
    background: "#28392D",
    foreground: "#F1E9D8",
    accent: "#B7985B",
    muted: "#8D9D82",
    paper: "#DDD6C5",
  },
  hueso: {
    background: "#E9E2D2",
    foreground: "#17201F",
    accent: "#A54E37",
    muted: "#77796E",
    paper: "#F7F1E5",
  },
  oro_palido: {
    background: "#CBB47D",
    foreground: "#192523",
    accent: "#F3EBD9",
    muted: "#695F4A",
    paper: "#E8DDBE",
  },
  agua: {
    background: "#24505A",
    foreground: "#F5EEDF",
    accent: "#D0B467",
    muted: "#8CB0B5",
    paper: "#DCE3DD",
  },
  carbon: {
    background: "#171816",
    foreground: "#F1EBDD",
    accent: "#C4A45E",
    muted: "#85877F",
    paper: "#D8D0C0",
  },
  niebla: {
    background: "#B9C2BB",
    foreground: "#152421",
    accent: "#8B4D39",
    muted: "#65716D",
    paper: "#E7E8E0",
  },
});

const TEMPLATE_QA_CONTRACT = Object.freeze({
  canvas: "1080x1350",
  aspectRatio: "4:5",
  safeArea: true,
  nativeReview: true,
  brandSystem: true,
  nativeMedia: true,
  realCartography: true,
  shadowDiscipline: true,
  sharedGrid: true,
  collisionSafe: true,
  bodyBaseline: true,
});

const BRAND_MODES = Object.freeze([
  "rail_left",
  "corner",
  "rail_right",
  "baseline",
  "register",
]);

function brandModeForTemplate(family, id) {
  const familyOffset = {
    cover: 0,
    typographic: 1,
    secondary: 2,
    tertiary: 3,
    map: 4,
  }[family] || 0;
  const numericId = Number(id.match(/(\d+)/)?.[1] || 1);
  return BRAND_MODES[(numericId - 1 + familyOffset) % BRAND_MODES.length];
}

function entry(family, id, name, layout, palette, role, extra = {}) {
  const brandMode = extra.brandMode || brandModeForTemplate(family, id);
  return Object.freeze({
    id,
    family,
    name,
    layout,
    palette,
    role,
    approval: "approved",
    designRevision: "v8",
    brandMode,
    qa: TEMPLATE_QA_CONTRACT,
    ...extra,
  });
}

export const COVER_TEMPLATES = Object.freeze([
  entry("cover", "cover-01-immersive", "Inmersiva", "cover_immersive", "laguna", "hook", { imageTreatment: "full_bleed" }),
  entry("cover", "cover-02-living-archive", "Archivo vivo", "cover_archive", "paramo", "hook", { imageTreatment: "contained" }),
  entry("cover", "cover-03-vertical-folio", "Folio vertical", "cover_folio_left", "hueso", "hook", { imageTreatment: "near_full", shortKicker: "Muisca", maxTitleChars: 18 }),
  entry("cover", "cover-04-right-spine", "Lomo derecho", "cover_folio_right", "carbon", "hook", { imageTreatment: "near_full", shortKicker: "Muisca", maxTitleChars: 18 }),
  entry("cover", "cover-05-lagoon-threshold", "Umbral de laguna", "cover_threshold", "agua", "hook", { imageTreatment: "full_bleed" }),
  entry("cover", "cover-06-museum-label", "Cartela de museo", "cover_museum", "hueso", "hook", { imageTreatment: "contained" }),
  entry("cover", "cover-07-high-horizon", "Horizonte alto", "cover_horizon", "noche", "hook", { imageTreatment: "full_bleed" }),
  entry("cover", "cover-08-bottom-folio", "Folio inferior", "cover_bottom_folio", "paramo", "hook", { imageTreatment: "near_full" }),
  entry("cover", "cover-09-offset-window", "Ventana desplazada", "cover_offset", "arcilla", "hook", { imageTreatment: "contained" }),
  entry("cover", "cover-10-quiet-monument", "Monumento silencioso", "cover_monument", "musgo", "hook", { imageTreatment: "full_bleed" }),
]);

const TYPOGRAPHIC_DENSITY_IDS = Object.freeze({
  short: new Set([
    "type-02-syllabic-stack",
    "type-04-vertical-return",
    "type-06-principles-triptych",
    "type-08-staircase",
    "type-11-outline-word",
    "type-12-vocabulary-card",
    "type-13-oversized-initial",
    "type-24-three-beats",
    "type-27-word-field",
    "type-28-stepped-blocks",
  ]),
  medium: new Set([
    "type-01-monument",
    "type-03-oral-quote",
    "type-07-numbered-law",
    "type-09-centered-whisper",
    "type-16-cascade",
    "type-18-four-voices",
    "type-20-long-line",
    "type-25-parenthetical",
    "type-26-call-response",
    "type-30-closing-question",
  ]),
  narrative: new Set([
    "type-05-field-margin",
    "type-10-dark-manifesto",
    "type-14-double-column",
    "type-15-ledger",
    "type-17-floating-caption",
    "type-19-top-bottom",
    "type-21-index-grid",
    "type-22-underlined-thesis",
    "type-23-inverted-corner",
    "type-29-archive-note",
  ]),
});

const TYPOGRAPHIC_CAPACITY = Object.freeze({
  short: 32,
  medium: 54,
  narrative: 78,
});

function typographicCapacity(template) {
  const textDensity = Object.entries(TYPOGRAPHIC_DENSITY_IDS).find(
    ([, ids]) => ids.has(template.id)
  )?.[0];
  if (!textDensity) {
    throw new Error(`La plantilla ${template.id} no declara densidad editorial.`);
  }
  return Object.freeze({
    ...template,
    textDensity,
    maxWords: TYPOGRAPHIC_CAPACITY[textDensity],
  });
}

const RAW_TYPOGRAPHIC_TEMPLATES = [
  entry("typographic", "type-01-monument", "Palabra monumento", "type_monument", "hueso", "development"),
  entry("typographic", "type-02-syllabic-stack", "Apilado silábico", "type_syllabic", "oro_palido", "identity"),
  entry("typographic", "type-03-oral-quote", "Voz oral", "type_quote", "laguna", "testimony"),
  entry("typographic", "type-04-vertical-return", "Retorno vertical", "type_vertical", "noche", "turn", { maxTitleChars: 30 }),
  entry("typographic", "type-05-field-margin", "Margen de campo", "type_margin", "paramo", "context"),
  entry("typographic", "type-06-principles-triptych", "Tríptico de principios", "type_triptych", "hueso", "context"),
  entry("typographic", "type-07-numbered-law", "Ley numerada", "type_numbered", "musgo", "context"),
  entry("typographic", "type-08-staircase", "Escalera narrativa", "type_stair", "arcilla", "development"),
  entry("typographic", "type-09-centered-whisper", "Susurro central", "type_whisper", "niebla", "pause"),
  entry("typographic", "type-10-dark-manifesto", "Manifiesto nocturno", "type_manifesto", "carbon", "climax"),
  entry("typographic", "type-11-outline-word", "Palabra delineada", "type_outline", "agua", "symbol"),
  entry("typographic", "type-12-vocabulary-card", "Vocabulario", "type_vocabulary", "oro_palido", "identity"),
  entry("typographic", "type-13-oversized-initial", "Inicial dominante", "type_initial", "arcilla", "development"),
  entry("typographic", "type-14-double-column", "Doble columna", "type_columns", "paramo", "context"),
  entry("typographic", "type-15-ledger", "Registro", "type_ledger", "hueso", "context"),
  entry("typographic", "type-16-cascade", "Cascada verbal", "type_cascade", "laguna", "development"),
  entry("typographic", "type-17-floating-caption", "Nota flotante", "type_floating", "niebla", "pause"),
  entry("typographic", "type-18-four-voices", "Cuatro voces", "type_four_voices", "musgo", "testimony"),
  entry("typographic", "type-19-top-bottom", "Tensión vertical", "type_top_bottom", "noche", "turn"),
  entry("typographic", "type-20-long-line", "Línea extensa", "type_long_line", "hueso", "development"),
  entry("typographic", "type-21-index-grid", "Índice reticular", "type_index_grid", "agua", "context"),
  entry("typographic", "type-22-underlined-thesis", "Tesis subrayada", "type_thesis", "oro_palido", "context"),
  entry("typographic", "type-23-inverted-corner", "Esquina invertida", "type_corner", "arcilla", "turn"),
  entry("typographic", "type-24-three-beats", "Tres tiempos", "type_three_beats", "paramo", "sequence"),
  entry("typographic", "type-25-parenthetical", "Paréntesis", "type_parenthetical", "niebla", "pause"),
  entry("typographic", "type-26-call-response", "Llamado y respuesta", "type_call_response", "laguna", "testimony"),
  entry("typographic", "type-27-word-field", "Campo de palabras", "type_word_field", "noche", "symbol"),
  entry("typographic", "type-28-stepped-blocks", "Bloques escalonados", "type_blocks", "musgo", "development"),
  entry("typographic", "type-29-archive-note", "Nota de archivo", "type_archive_note", "hueso", "context"),
  entry("typographic", "type-30-closing-question", "Pregunta final", "type_question", "carbon", "closing"),
];

export const TYPOGRAPHIC_TEMPLATES = Object.freeze(
  RAW_TYPOGRAPHIC_TEMPLATES.map(typographicCapacity)
);

export const SECONDARY_IMAGE_TEMPLATES = Object.freeze([
  entry("secondary", "secondary-01-cinema", "Cinemascope", "secondary_cinema", "carbon", "inciting_event"),
  entry("secondary", "secondary-02-full-bleed", "Paisaje total", "secondary_full", "laguna", "inciting_event"),
  entry("secondary", "secondary-03-postcard", "Postal de archivo", "secondary_postcard", "hueso", "setting"),
  entry("secondary", "secondary-04-top-panorama", "Panorama superior", "secondary_top", "paramo", "setting"),
  entry("secondary", "secondary-05-bottom-panorama", "Panorama inferior", "secondary_bottom", "agua", "setting"),
  entry("secondary", "secondary-06-left-split", "Díptico izquierdo", "secondary_split_left", "arcilla", "development"),
  entry("secondary", "secondary-07-right-split", "Díptico derecho", "secondary_split_right", "musgo", "development"),
  entry("secondary", "secondary-08-vertical-caption", "Leyenda vertical", "secondary_vertical_caption", "noche", "development", { maxTitleChars: 30 }),
  entry("secondary", "secondary-09-three-strips", "Tres fragmentos", "secondary_strips", "hueso", "development"),
  entry("secondary", "secondary-10-caption-overlay", "Pie superpuesto", "secondary_overlay", "laguna", "inciting_event"),
  entry("secondary", "secondary-11-small-evidence", "Evidencia mínima", "secondary_evidence", "paramo", "context"),
  entry("secondary", "secondary-12-offset-frame", "Marco desplazado", "secondary_offset", "oro_palido", "development"),
  entry("secondary", "secondary-13-bleed-corner", "Esquina a sangre", "secondary_corner", "arcilla", "development"),
  entry("secondary", "secondary-14-detail-pair", "Vista y detalle", "secondary_detail_pair", "carbon", "development"),
  entry("secondary", "secondary-15-arched-window", "Ventana arqueada", "secondary_arch", "musgo", "setting"),
  entry("secondary", "secondary-16-title-band", "Franja titular", "secondary_title_band", "agua", "inciting_event"),
  entry("secondary", "secondary-17-lower-field", "Campo inferior", "secondary_lower_field", "hueso", "development"),
  entry("secondary", "secondary-18-diagonal-field", "Campo diagonal", "secondary_diagonal", "noche", "turn"),
  entry("secondary", "secondary-19-double-mat", "Doble paspartú", "secondary_double_mat", "paramo", "context"),
  entry("secondary", "secondary-20-contact-print", "Hoja de contacto", "secondary_contact", "carbon", "context"),
]);

export const TERTIARY_IMAGE_TEMPLATES = Object.freeze([
  entry("tertiary", "tertiary-01-clean-climax", "Clímax limpio", "tertiary_full", "laguna", "climax"),
  entry("tertiary", "tertiary-02-letterbox", "Caja vertical", "tertiary_letterbox", "carbon", "climax"),
  entry("tertiary", "tertiary-03-left-rail", "Riel izquierdo", "tertiary_left_rail", "hueso", "climax", { maxTitleChars: 22 }),
  entry("tertiary", "tertiary-04-right-rail", "Riel derecho", "tertiary_right_rail", "arcilla", "climax", { maxTitleChars: 22 }),
  entry("tertiary", "tertiary-05-top-label", "Cartela superior", "tertiary_top_label", "paramo", "climax"),
  entry("tertiary", "tertiary-06-bottom-label", "Cartela inferior", "tertiary_bottom_label", "agua", "climax"),
  entry("tertiary", "tertiary-07-gallery-inset", "Galería interior", "tertiary_inset", "hueso", "climax"),
  entry("tertiary", "tertiary-08-close-window", "Ventana de detalle", "tertiary_close", "noche", "climax"),
  entry("tertiary", "tertiary-09-horizontal-slice", "Corte horizontal", "tertiary_slice", "musgo", "turn"),
  entry("tertiary", "tertiary-10-detail-echo", "Eco de detalle", "tertiary_echo", "carbon", "climax"),
  entry("tertiary", "tertiary-11-margin-note", "Nota marginal", "tertiary_margin", "paramo", "climax"),
  entry("tertiary", "tertiary-12-overprint", "Titular sobreimpreso", "tertiary_overprint", "laguna", "climax"),
  entry("tertiary", "tertiary-13-single-word", "Una palabra", "tertiary_word", "noche", "climax"),
  entry("tertiary", "tertiary-14-lower-plaque", "Placa inferior", "tertiary_lower_plaque", "oro_palido", "climax"),
  entry("tertiary", "tertiary-15-upper-plaque", "Placa superior", "tertiary_upper_plaque", "arcilla", "climax"),
  entry("tertiary", "tertiary-16-edge-index", "Índice de borde", "tertiary_edge", "hueso", "climax", { maxTitleChars: 22 }),
  entry("tertiary", "tertiary-17-paper-border", "Borde de papel", "tertiary_paper", "paramo", "climax"),
  entry("tertiary", "tertiary-18-gallery-caption", "Galería comentada", "tertiary_caption", "musgo", "climax"),
  entry("tertiary", "tertiary-19-dark-frame", "Marco nocturno", "tertiary_dark_frame", "carbon", "climax"),
  entry("tertiary", "tertiary-20-quiet-return", "Retorno silencioso", "tertiary_quiet", "niebla", "closing"),
]);

export const MAP_TEMPLATES = Object.freeze([
  entry("map", "map-01-territorial-atlas", "Atlas territorial", "map_atlas", "hueso", "setting"),
  entry("map", "map-02-coordinates", "Coordenadas", "map_coordinates", "noche", "setting"),
  entry("map", "map-03-colombia-locator", "Colombia y detalle", "map_locator", "paramo", "setting"),
  entry("map", "map-04-route-to-origin", "Ruta al origen", "map_route", "arcilla", "setting"),
  entry("map", "map-05-topographic-window", "Ventana topográfica", "map_topographic", "agua", "setting"),
]);

export const INSTAGRAM_EDITORIAL_LIBRARY = Object.freeze({
  cover: COVER_TEMPLATES,
  typographic: TYPOGRAPHIC_TEMPLATES,
  secondary: SECONDARY_IMAGE_TEMPLATES,
  tertiary: TERTIARY_IMAGE_TEMPLATES,
  map: MAP_TEMPLATES,
});

export const INSTAGRAM_EDITORIAL_PALETTES = PALETTES;

export const INSTAGRAM_EDITORIAL_TEMPLATES = Object.freeze(
  Object.values(INSTAGRAM_EDITORIAL_LIBRARY).flat()
);

export function getEditorialTemplate(id) {
  return INSTAGRAM_EDITORIAL_TEMPLATES.find((template) => template.id === id);
}

export function getEditorialTemplatesByFamily(family) {
  return INSTAGRAM_EDITORIAL_LIBRARY[family] || [];
}
