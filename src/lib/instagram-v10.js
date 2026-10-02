/**
 * Sistema editorial v10 · acabado A+C (suizo moderno + firma de la casa)
 * Aprobado el 2026-08-28 sobre el lienzo "Generador de carruseles".
 *
 * Reglas del acabado:
 * - Paneles de tinta duros para texto sobre fotografía; cero degradados
 *   (única excepción: la reserva de 174 px bajo el folio cuando pisa foto).
 * - Space Grotesk 700 para frases y titulares; Asimovian sólo en nombres de
 *   mito y numerales; Noto Sans Display para cuerpo y etiquetas.
 * - Papel recortado (/motifs/carousel/v3) como sello, capitular y pausa.
 * - La foto manda: la mayoría de láminas sangra por 2-4 bordes; nada de
 *   imágenes pequeñas ni ventanas flotando a media altura.
 */

// ---------------------------------------------------------------------------
// Lienzo y retícula (px reales sobre 1080 × 1350)
// ---------------------------------------------------------------------------

export const CANVAS = Object.freeze({ width: 1080, height: 1350 });

export const GRID = Object.freeze({
  margin: 72,
  col: 136,
  gutter: 24,
  base: 24,
});

export const colX = (n) => GRID.margin + n * (GRID.col + GRID.gutter);
export const colW = (n) => GRID.col * n + GRID.gutter * (n - 1);

// Escala tipográfica fija (px reales)
export const TYPE = Object.freeze({
  d1: 144,
  d2: 108,
  d3: 81,
  d4: 60,
  b1: 42,
  b2: 36,
  b3: 30,
  lb: 21,
});

// ---------------------------------------------------------------------------
// Paletas (contraste verificado: texto ≥7:1 · secundario ≥4.5:1 · acento ≥3:1)
// ---------------------------------------------------------------------------

export const PALETTES_V10 = Object.freeze({
  laguna: { bg: "#0F2523", fg: "#F4EFE2", mu: "#B6C4BC", ac: "#CDAC63", paper: "#EBE4D4", dark: true },
  carbon: { bg: "#15160F", fg: "#F2ECDE", mu: "#B8BCAF", ac: "#CFAF67", paper: "#E4DECD", dark: true },
  noche: { bg: "#101A26", fg: "#F1EBDE", mu: "#AEBDC9", ac: "#C7A868", paper: "#DED6C4", dark: true },
  musgo: { bg: "#24352A", fg: "#F0E9D8", mu: "#B3C0AB", ac: "#C4A465", paper: "#DCD5C3", dark: true },
  arcilla: { bg: "#7F3623", fg: "#FFF4E2", mu: "#F7DCC6", ac: "#F0D49E", paper: "#E9C6A9", dark: true },
  hueso: { bg: "#E9E2D2", fg: "#161D1C", mu: "#4B534E", ac: "#9B4530", paper: "#F6F1E5", dark: false },
  paramo: { bg: "#D8CFBA", fg: "#141F1D", mu: "#3F4A45", ac: "#3A5145", paper: "#EFEADC", dark: false },
  oro: { bg: "#C9B078", fg: "#141A16", mu: "#3E3A28", ac: "#2A352B", paper: "#E6DBBC", dark: false },
});

// ---------------------------------------------------------------------------
// Registro de plantillas: 6 tipos de pantalla × 10 variaciones
// mode: A = Revista · B = Archivo · C = Cartel (proporción de feed 5/3/2)
// photo: cuántos bordes sangra la imagen (0 = sin imagen)
// motif: pieza de papel recortado que usa (rol documentado en el manifest v3)
// ---------------------------------------------------------------------------

const t = (id, screenType, variant, mode, palette, extra = {}) =>
  Object.freeze({
    id,
    screenType,
    variant,
    mode,
    palette,
    designRevision: "v10",
    productionReady: true,
    ...extra,
  });

export const V10_TEMPLATES = Object.freeze([
  // --- 01 · portada -------------------------------------------------------
  t("v10-portada-01-panel-bajo", "portada", "panel_bajo", "A", "laguna", { photo: 4, nameSize: TYPE.d1 }),
  t("v10-portada-02-panel-alto", "portada", "panel_alto", "A", "noche", { photo: 3 }),
  t("v10-portada-03-banda-baja", "portada", "banda_baja", "A", "arcilla", { photo: 3, accent: true }),
  t("v10-portada-04-placa", "portada", "placa", "B", "hueso", { photo: 4 }),
  t("v10-portada-05-ficha", "portada", "ficha", "B", "paramo", { photo: 3, dataCard: true }),
  t("v10-portada-06-media-pagina", "portada", "media_pagina", "B", "hueso", { photo: 3, motif: "div-agua" }),
  t("v10-portada-07-franja", "portada", "franja", "A", "laguna", { photo: 4 }),
  t("v10-portada-08-columna", "portada", "columna", "A", "musgo", { photo: 3 }),
  t("v10-portada-09-duotono", "portada", "duotono", "C", "carbon", { photo: 4, duotone: true }),
  t("v10-portada-10-ventana", "portada", "ventana", "C", "oro", { photo: 1, ghost: true }),

  // --- 02 · territorio ----------------------------------------------------
  t("v10-territorio-01-atlas", "territorio", "atlas", "A", "laguna", { photo: 4 }),
  t("v10-territorio-02-banda", "territorio", "banda", "A", "noche", { photo: 3 }),
  t("v10-territorio-03-franja", "territorio", "franja_media", "A", "musgo", { photo: 2, ghost: true }),
  t("v10-territorio-04-motivo", "territorio", "motivo", "A", "carbon", { photo: 4, motif: "curvas" }),
  t("v10-territorio-05-doble", "territorio", "doble_escala", "A", "paramo", { photo: 3, inset: true }),
  t("v10-territorio-06-lamina", "territorio", "lamina", "B", "hueso", { photo: 0, dataCard: true }),
  t("v10-territorio-07-margen", "territorio", "margen_campo", "B", "paramo", { photo: 3 }),
  t("v10-territorio-08-asiento", "territorio", "asiento", "B", "hueso", { photo: 4, motif: "div-montana", dataCard: true }),
  t("v10-territorio-09-bloque", "territorio", "bloque_ventana", "C", "arcilla", { photo: 1 }),
  t("v10-territorio-10-duotono", "territorio", "duotono", "C", "carbon", { photo: 4 }),

  // --- 03 · tipográfica ---------------------------------------------------
  t("v10-tipografica-01-monumento", "tipografica", "monumento", "A", "laguna", { cap: { t: 64, b: 180 }, accent: true, maxTitleWords: 9 }),
  t("v10-tipografica-02-lectura", "tipografica", "lectura", "A", "hueso", { cap: { t: 110, b: 340 }, maxBodyWords: 60 }),
  t("v10-tipografica-03-escalera", "tipografica", "escalera", "A", "arcilla", { cap: { t: 56, b: 180, words: 9 }, splitTitle: 3 }),
  t("v10-tipografica-04-capitular", "tipografica", "capitular", "C", "musgo", { cap: { t: 90, b: 210 }, motif: "espiral" }),
  t("v10-tipografica-05-contracolor", "tipografica", "contracolor", "A", "noche", { cap: { t: 78, b: 180 }, counterPalette: "oro" }),
  t("v10-tipografica-06-columnas", "tipografica", "columnas", "B", "paramo", { cap: { t: 80, b: 340 }, motif: "div-agua", twoColumns: true }),
  t("v10-tipografica-07-registro", "tipografica", "registro", "C", "hueso", { cap: { t: 90, b: 230 }, ghost: true }),
  t("v10-tipografica-08-voz", "tipografica", "voz", "B", "paramo", { cap: { t: 90, b: 260 }, motif: "div-tejido" }),
  t("v10-tipografica-09-lateral", "tipografica", "lateral", "C", "carbon", { cap: { t: 80, b: 210 }, motif: "manos" }),
  t("v10-tipografica-10-manifiesto", "tipografica", "manifiesto", "A", "noche", { cap: { t: 80, b: 210 }, pattern: "pattern-water", accent: true }),

  // --- 04 · secundaria (imagen horizontal de apoyo) -----------------------
  t("v10-secundaria-01-sangre", "secundaria", "sangre_total", "A", "laguna", { cap: { t: 70, b: 170 }, photo: 4 }),
  t("v10-secundaria-02-panel-alto", "secundaria", "panel_alto", "A", "noche", { cap: { t: 66, b: 150 }, photo: 3 }),
  t("v10-secundaria-03-banda-baja", "secundaria", "banda_baja", "A", "carbon", { cap: { t: 80, b: 200 }, photo: 3 }),
  t("v10-secundaria-04-banda-alta", "secundaria", "banda_alta", "A", "musgo", { cap: { t: 66, b: 150 }, photo: 3 }),
  t("v10-secundaria-05-franja", "secundaria", "franja_169", "A", "laguna", { cap: { t: 66, b: 160 }, photo: 2 }),
  t("v10-secundaria-06-lamina", "secundaria", "lamina_sangre", "B", "hueso", { cap: { t: 80, b: 210 }, photo: 2 }),
  t("v10-secundaria-07-media", "secundaria", "media_pagina", "B", "paramo", { cap: { t: 70, b: 230 }, photo: 3 }),
  t("v10-secundaria-08-detalle", "secundaria", "detalle", "A", "carbon", { cap: { t: 84, b: 0 }, photo: 4, zoom: 1.7 }),
  t("v10-secundaria-09-columna", "secundaria", "columna", "A", "musgo", { cap: { t: 60, b: 180 }, photo: 3 }),
  t("v10-secundaria-10-duotono", "secundaria", "duotono", "C", "arcilla", { cap: { t: 70, b: 170 }, photo: 4, duotone: true }),

  // --- 05 · clímax (imagen vertical generada) ------------------------------
  t("v10-climax-01-sangre", "climax", "sangre_total", "A", "laguna", { cap: { t: 70, b: 170 }, photo: 4 }),
  t("v10-climax-02-panel-alto", "climax", "panel_alto", "A", "noche", { cap: { t: 66, b: 150 }, photo: 3 }),
  t("v10-climax-03-banda-baja", "climax", "banda_baja", "A", "carbon", { cap: { t: 80, b: 200 }, photo: 3 }),
  t("v10-climax-04-banda-alta", "climax", "banda_alta", "A", "musgo", { cap: { t: 66, b: 150 }, photo: 3 }),
  t("v10-climax-05-franja", "climax", "franja_169", "A", "laguna", { cap: { t: 66, b: 160 }, photo: 2 }),
  t("v10-climax-06-lamina", "climax", "lamina_sangre", "B", "hueso", { cap: { t: 80, b: 210 }, photo: 2 }),
  t("v10-climax-07-media", "climax", "media_pagina", "B", "paramo", { cap: { t: 70, b: 230 }, photo: 3 }),
  t("v10-climax-08-detalle", "climax", "detalle", "A", "carbon", { cap: { t: 84, b: 0 }, photo: 4, zoom: 1.7 }),
  t("v10-climax-09-columna", "climax", "columna", "A", "musgo", { cap: { t: 60, b: 180 }, photo: 3 }),
  t("v10-climax-10-duotono", "climax", "duotono", "C", "arcilla", { cap: { t: 70, b: 170 }, photo: 4, duotone: true }),

  // --- 06 · cierre --------------------------------------------------------
  t("v10-cierre-01-monumento", "cierre", "monumento", "A", "laguna", { cap: { t: 110 }, accent: true, ctaBand: true }),
  t("v10-cierre-02-umbral", "cierre", "umbral", "A", "musgo", { cap: { t: 88 }, motif: "frame-3" }),
  t("v10-cierre-03-contracolor", "cierre", "contracolor", "A", "noche", { cap: { t: 105 }, counterPalette: "oro" }),
  t("v10-cierre-04-susurro", "cierre", "susurro", "A", "hueso", { cap: { t: 88 }, motif: "luna" }),
  t("v10-cierre-05-eco", "cierre", "eco", "A", "carbon", { cap: { t: 120 }, motif: "div-horizonte" }),
  t("v10-cierre-06-asiento", "cierre", "asiento", "B", "paramo", { cap: { t: 135 }, dataCard: true }),
  t("v10-cierre-07-registro", "cierre", "registro", "C", "hueso", { cap: { t: 110 }, ghost: true }),
  t("v10-cierre-08-sello", "cierre", "sello", "B", "hueso", { cap: { t: 88 }, motif: "circulo" }),
  t("v10-cierre-09-afiche", "cierre", "afiche", "C", "arcilla", { cap: { t: 105 }, motif: "huella", ctaBand: true }),
  t("v10-cierre-10-textura", "cierre", "textura", "C", "noche", { cap: { t: 110 }, pattern: "pattern-constellation" }),
]);

export const V10_SCREEN_TYPES = Object.freeze([
  "portada",
  "territorio",
  "tipografica",
  "secundaria",
  "climax",
  "cierre",
]);

const BY_ID = new Map(V10_TEMPLATES.map((template) => [template.id, template]));

export function getV10Template(id) {
  return BY_ID.get(id) || null;
}

export function getV10TemplatesByType(screenType) {
  return V10_TEMPLATES.filter((template) => template.screenType === screenType);
}

// Reparto de modos en el feed: 5 Revista · 3 Archivo · 2 Cartel,
// sin repetir modo dos veces seguidas (lo garantiza el orden de la rueda).
export const MODE_WHEEL = Object.freeze(["A", "B", "A", "C", "A", "B", "A", "C", "A", "B"]);

export function modeForFeedIndex(feedIndex) {
  return MODE_WHEEL[((feedIndex % MODE_WHEEL.length) + MODE_WHEEL.length) % MODE_WHEEL.length];
}

// Campo semántico → motivo protagonista de papel recortado (manifest v3).
export const SEMANTIC_MOTIFS = Object.freeze([
  { pattern: /serpiente|culebra|anaconda/i, motif: "serpiente" },
  { pattern: /jaguar|felino|tigre|puma/i, motif: "felino" },
  { pattern: /rana|sapo/i, motif: "rana" },
  { pattern: /tortuga/i, motif: "tortuga" },
  { pattern: /laguna|lago/i, motif: "laguna" },
  { pattern: /cascada|salto/i, motif: "cascada" },
  { pattern: /r[ií]o|corriente/i, motif: "rio" },
  { pattern: /remolino|torbellino/i, motif: "remolino" },
  { pattern: /monta[ñn]a|cerro|cordillera|p[áa]ramo/i, motif: "cordillera" },
  { pattern: /camino|huella|viaje|recorr/i, motif: "huella" },
  { pattern: /sol\b|amanecer/i, motif: "sol" },
  { pattern: /luna|noche/i, motif: "luna" },
  { pattern: /lluvia|aguacero/i, motif: "lluvia" },
  { pattern: /fuego|fog[óo]n|hoguera/i, motif: "fogon" },
  { pattern: /casa|refugio|hogar|boh[íi]o/i, motif: "refugio" },
  { pattern: /comunidad|pueblo|familia|gente/i, motif: "circulo" },
  { pattern: /tejido|manta|telar/i, motif: "div-tejido" },
  { pattern: /origen|principio|espiral/i, motif: "espiral" },
  { pattern: /manos|entrega|ofrenda|cuidado/i, motif: "manos" },
]);

export function semanticMotifFor(textContent) {
  const value = String(textContent || "");
  for (const entry of SEMANTIC_MOTIFS) {
    if (entry.pattern.test(value)) return entry.motif;
  }
  return "espiral";
}
