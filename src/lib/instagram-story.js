import { STORY_VARIANTS, slideType, defaultVariant } from "./instagram-story-variants.js";
import { ABSTRACT_MOTIFS } from "./instagram-abstract-motifs.js";
// Sampled from the user's palette attachment on 2026-09-19 (sRGB).
// Neutral near-black is reserved for accessible text on medium-value blue/coral.
export const STORY_CANVAS = { width: 1080, height: 1350 };
export const STORY_BRAND_COLORS = { forest: "#273a2a", canopy: "#2e4b2d", blue: "#4c81dc", sky: "#bdd0f9", coral: "#df745c", yellow: "#f6cf5a", olive: "#b2aa7f" };
export const STORY_PALETTES = {
  paper: { label: "Amarillo", background: "#f6cf5a", foreground: "#273a2a", secondary: "#273a2a", accent: "#273a2a" },
  forest: { label: "Bosque", background: "#273a2a", foreground: "#f6cf5a", secondary: "#bdd0f9", accent: "#f6cf5a" },
  river: { label: "Azul", background: "#4c81dc", foreground: "#101710", secondary: "#101710", accent: "#101710" },
  sky: { label: "Cielo", background: "#bdd0f9", foreground: "#273a2a", secondary: "#273a2a", accent: "#273a2a" },
  coral: { label: "Coral", background: "#df745c", foreground: "#101710", secondary: "#101710", accent: "#101710" },
  olive: { label: "Oliva", background: "#b2aa7f", foreground: "#273a2a", secondary: "#273a2a", accent: "#273a2a" },
  canopy: { label: "Selva", background: "#2e4b2d", foreground: "#f6cf5a", secondary: "#bdd0f9", accent: "#f6cf5a" },
};
export const STORY_ROLES = { hook: "Entrada", origin: "El comienzo", development: "El camino", turn: "El giro", climax: "La transformación", consequence: "Lo que quedó", closing: "Cierre", invitation: "Invitación a leer" };
export const STORY_TEMPLATES = {
  ...STORY_VARIANTS,
  "cover-full": { label: "Imagen protagonista", description: "Imagen a sangre y gran título", kind: "cover", image: true },
  "cover": { label: "Portada editorial", description: "Título amplio e imagen completa", kind: "cover", image: true },
  "cover-type": { label: "Portada tipográfica", description: "Palabras y papel recortado", kind: "cover", image: false },
  "immersive": { label: "Escena inmersiva", description: "Imagen a sangre, relato al pie", kind: "scene", image: true },
  "portrait-left": { label: "Imagen a la izquierda", description: "Imagen a sangre y columna de lectura", kind: "scene", image: true },
  "portrait-right": { label: "Imagen a la derecha", description: "Lectura e imagen a sangre", kind: "scene", image: true },
  "landscape": { label: "Panorama", description: "Un lugar para entrar al relato", kind: "scene", image: true },
  "square": { label: "Pieza de colección", description: "Imagen completa sobre papel", kind: "scene", image: true },
  "pause": { label: "Pausa ilustrada", description: "Una frase y un símbolo con presencia", kind: "scene", image: false },
  "closing": { label: "El eco", description: "Pregunta, símbolo e invitación", kind: "closing", image: false },
};
export const STORY_LAYOUTS = Object.keys(STORY_TEMPLATES);
export const STORY_MOTIFS = {
  ...Object.fromEntries(Object.entries(ABSTRACT_MOTIFS).map(([id, motif]) => [id, motif.label])),
  laguna: "Laguna", rio: "Río", cordillera: "Cordillera", espiral: "Origen", remolino: "Remolino", serpiente: "Serpiente", fogon: "Fogón", refugio: "Refugio", circulo: "Comunidad", manos: "Manos", huella: "Huella", sol: "Sol", luna: "Luna", lluvia: "Lluvia", cascada: "Cascada", curvas: "Contornos", rana: "Rana", tortuga: "Tortuga", felino: "Felino",
  "div-agua": "Separador · agua", "div-camino": "Separador · camino", "div-eco": "Separador · eco", "div-horizonte": "Separador · horizonte", "div-lluvia": "Separador · lluvia", "div-montana": "Separador · montaña", "div-tejido": "Separador · tejido", "div-cosecha": "Separador · cosecha",
};
export const motifSrc = (id) => `/motifs/carousel/${Object.hasOwn(ABSTRACT_MOTIFS, id) ? "abstract-v4" : "v3"}/${id}.png`;
export function templateFits(layout, slide, asset, index = 0) {
  const variant = STORY_VARIANTS[layout];
  if (variant) return variant.kind === slideType(slide, index) && (variant.image === "optional" || Boolean(asset) === variant.image);
  const template = STORY_TEMPLATES[layout];
  if (!template || Boolean(asset) !== template.image) return false;
  if (asset && layout === "landscape" && asset.width / asset.height <= 1.22) return false;
  if (asset && layout === "square" && (asset.width / asset.height < 0.85 || asset.width / asset.height > 1.22)) return false;
  return template.kind === (slide.role === "hook" ? "cover" : slide.role === "closing" ? "closing" : "scene");
}
export function motifForScene(slide) { return slide.motif === undefined ? (slide.role === "hook" ? "abstract-nucleo" : slide.role === "closing" ? "abstract-eco" : !slide.asset_id ? "abstract-resonancia" : null) : slide.motif; }
export const wordCount = (text) => String(text || "").trim().split(/\s+/).filter(Boolean).length;

export function contrastRatio(a, b) {
  const luminance = (hex) => {
    const channels = hex.replace("#", "").match(/.{2}/g).map((part) => {
      const n = parseInt(part, 16) / 255;
      return n <= 0.04045 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4;
    });
    return channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722;
  };
  const [light, dark] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (light + 0.05) / (dark + 0.05);
}

export function layoutForScene(slide, asset, index) {
  if (slide.layout && templateFits(slide.layout, slide, asset, index)) return slide.layout;
  return defaultVariant(slide, asset, index);
}

export function paletteForScene(slide) {
  const variant = STORY_VARIANTS[slide.layout];
  if (variant && !slide.asset_id) {
    const palettes = variant.kind === "invitacion" ? ["river", "paper", "canopy", "coral", "sky"]
      : variant.kind === "cierre" ? ["sky", "coral", "forest", "olive", "paper"]
      : ["forest", "sky", "paper", "olive", "coral"];
    return palettes[variant.version - 1];
  }
  if (slide.role === "climax" || slide.role === "consequence") return "river";
  if (slide.role === "invitation") return "paper";
  if (slide.role === "closing") return "sky";
  return "forest";
}

export function validateStory(story, catalog) {
  const errors = [];
  const warnings = [];
  if (!story || story.schema !== "carousel-story-v1") return { ok: false, errors: ["Esquema de relato inválido."], warnings };
  if (story.slug !== catalog.slug || story.community !== catalog.community) errors.push("El relato y el catálogo no pertenecen al mismo mito.");
  if (story.source?.acta_sha256 !== catalog.source.acta_sha256) errors.push("El acta cambió: revisa la reducción antes de componer.");
  const slides = Array.isArray(story.slides) ? story.slides : [];
  if (slides.length !== 10) errors.push("Todo carrusel debe tener exactamente 10 láminas.");
  if (slides[0]?.role !== "hook" || slides[8]?.role !== "closing" || slides[9]?.role !== "invitation") errors.push("La secuencia debe abrir con portada, cerrar el relato en la lámina 9 e invitar a leer en la 10.");
  if (slides.slice(1, 8).some(s => ["hook", "closing", "invitation"].includes(s.role))) errors.push("Las láminas 2 a 8 desarrollan el relato.");
  if (slides.slice(8).some(s => s.asset_id)) errors.push("Cierre e invitación tienen composiciones tipográficas independientes.");
  if (!story.title?.trim() || !story.thesis?.trim() || !story.caption?.trim()) errors.push("Faltan título, tesis o caption.");
  const climax = slides.findIndex((s) => s.role === "climax");
  if (climax < 1 || slides[climax + 1]?.role !== "consequence") errors.push("La acción del clímax y su consecuencia necesitan momentos consecutivos distintos.");
  const nodes = new Map(catalog.acta.nudos.map((n) => [n.id, n]));
  const covered = new Set();
  const omitted = new Set();
  for (const omission of story.omissions || []) {
    if (!nodes.has(omission.id) || !omission.reason?.trim()) errors.push("Descarte sin nudo o razón verificables.");
    if (omitted.has(omission.id)) errors.push(`Descarte repetido: ${omission.id}.`);
    omitted.add(omission.id);
  }
  const assets = new Map(catalog.assets.map((a) => [a.id, a]));
  const used = new Set();
  const headlines = new Set();
  slides.forEach((slide, index) => {
    const label = `Lámina ${index + 1}`;
    if (!STORY_ROLES[slide.role]) errors.push(`${label}: función narrativa inválida.`);
    if (!slide.headline?.trim() || wordCount(slide.headline) > 10 || slide.headline.length > 76) errors.push(`${label}: titular vacío o demasiado largo (10 palabras / 76 caracteres).`);
    if (!slide.body?.trim() || wordCount(slide.body) > 38 || slide.body.length > 245) errors.push(`${label}: cuerpo vacío o demasiado largo (38 palabras / 245 caracteres).`);
    const normalize = (s) => String(s || "").toLocaleLowerCase("es").replace(/[^\p{L}\p{N}]+/gu, " ").trim();
    for (const quote of `${slide.headline} ${slide.body}`.matchAll(/[«“]([^»”]+)[»”]/g)) {
      if (!catalog.acta.nudos.some((node) => normalize(node.evidencia).includes(normalize(quote[1])))) errors.push(`${label}: cita sin evidencia literal en el acta.`);
    }
    const headline = normalize(slide.headline);
    if (headline && normalize(slide.body).startsWith(headline)) errors.push(`${label}: el cuerpo repite el titular.`);
    if (headlines.has(headline)) errors.push(`${label}: titular repetido.`);
    headlines.add(headline);
    if (!Array.isArray(slide.covers) || !slide.covers.length) errors.push(`${label}: falta anclaje en el acta.`);
    for (const id of slide.covers || []) {
      if (!nodes.has(id)) errors.push(`${label}: nudo desconocido ${id}.`);
      if (omitted.has(id)) errors.push(`${label}: ${id} se declara cubierto y descartado.`);
      covered.add(id);
    }
    if (!slide.visual_reason?.trim()) errors.push(`${label}: falta la función de la imagen o de la pausa.`);
    if (!slide.alt?.trim()) errors.push(`${label}: falta texto alternativo.`);
    if (slide.asset_id) {
      const asset = assets.get(slide.asset_id);
      if (!asset) errors.push(`${label}: imagen fuera del catálogo de este mito.`);
      else if (asset.status === "excluded") errors.push(`${label}: imagen descartada: ${asset.review}`);
      if (used.has(slide.asset_id)) errors.push(`${label}: imagen repetida.`);
      used.add(slide.asset_id);
    }
    if (slide.slide_type && !["slide-1", "slide-2"].includes(slide.slide_type)) errors.push(`${label}: tipo visual inválido.`);
    if (slide.palette && !STORY_PALETTES[slide.palette]) errors.push(`${label}: paleta inválida.`);
    if (slide.layout && !templateFits(slide.layout, slide, assets.get(slide.asset_id), index)) errors.push(`${label}: composición incompatible con su función o imagen.`);
    if (slide.motif != null && !Object.hasOwn(STORY_MOTIFS, slide.motif)) errors.push(`${label}: adorno fuera de la colección.`);
    if (slide.image_fit && !["cover", "contain"].includes(slide.image_fit)) errors.push(`${label}: ajuste de imagen inválido.`);
    if (slide.motif_ink != null && typeof slide.motif_ink !== "boolean") errors.push(`${label}: tratamiento de adorno inválido.`);
    if (slide.focal && (!Array.isArray(slide.focal) || slide.focal.length !== 2 || slide.focal.some((n) => !Number.isFinite(n) || n < 0 || n > 100))) errors.push(`${label}: encuadre inválido.`);
  });
  for (const id of nodes.keys()) if (!covered.has(id) && !omitted.has(id)) errors.push(`Nudo sin resolver: ${id}.`);
  const imageCount = slides.filter((s) => s.asset_id).length;
  if (imageCount < Math.ceil(slides.length * 0.6)) errors.push("Al menos el 60 % de las láminas debe narrar con imágenes existentes.");
  if (slides.some((s, i) => i > 0 && i < 8 && !s.asset_id && !slides[i - 1].asset_id)) errors.push("Hay dos pausas sin imagen consecutivas.");
  warnings.push("La cobertura de nudos comprueba trazabilidad, no fidelidad semántica: revisar texto e imágenes juntos.");
  return { ok: errors.length === 0, errors, warnings, coverage: { covered: covered.size, omitted: omitted.size, total: nodes.size }, imageCount };
}
