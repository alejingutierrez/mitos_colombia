import bachue from "../myths/bachue.mjs";
import { variosMixtoFinalMedia } from "./media.mjs";
import { variosMixtoFinalCategoryBySlug } from "./universe.mjs";

function composeContent({ mito, historia, versiones, leccion, similitudes }) {
  return [
    ["Mito", mito],
    ["Historia", historia],
    ["Versiones", versiones],
    ["Lección", leccion],
    ["Similitudes", similitudes],
  ]
    .map(([heading, body]) => `${heading}\n${body}`)
    .join("\n\n");
}

function horizontalPrompt(scene) {
  return `Full illustration editorial panorámica digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; paisaje colombiano construido únicamente con capas digitales recortadas de bordes limpios, formas mate, color profundo y quilling dibujado selectivo; acción legible y tratamiento adulto respetuoso, sin volumen físico, texto ni letras, sin fotografía, objeto físico, fibras reales, pliegues reales, grosor de papel, sombras de objeto, maqueta, diorama, collage físico, CGI ni render 3D.`;
}

function verticalPrompt(scene) {
  return `Full illustration editorial vertical digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; segunda escena narrativa claramente distinta de la portada, construida únicamente con capas digitales recortadas, formas mate y quilling dibujado selectivo; perspectiva vertical y gesto narrativo claro, sin volumen físico, texto ni letras, sin fotografía, objeto físico, fibras reales, pliegues reales, grosor de papel, sombras de objeto, maqueta, diorama, collage físico, CGI ni render 3D.`;
}

const boundaryBySlug = {
  "el-cura-sin-cabeza":
    "FRONTERA: la ruta organiza variantes colombianas de un espanto colonial; no presenta a Mariano Narváez ni a un sacerdote histórico identificable como hechos comprobados.",
  "el-jinete-negro":
    "FRONTERA: se documenta como variante ecuestre del Sombrerón colombiano; Don Roque, la hacienda y la deuda minera de la ficha anterior no tienen respaldo independiente.",
  "el-mandingas":
    "FRONTERA: Mandingas o Maldingas es un nombre popular del diablo con una historia semántica racializada; no se equipara al pueblo mandinga africano con una entidad maligna.",
  "el-mohan":
    "FRONTERA: Mohán y Poira se relacionan en el repertorio tolimense, pero las fuentes no autorizan una biografía prehispánica única ni convierten todo encuentro acuático en romance.",
  "la-llorona":
    "FRONTERA: las versiones colombianas cambian la pérdida, muerte y número de hijos; la revisión no culpa a una mujer histórica ni deriva toda la tradición de una sola diosa mesoamericana.",
  "la-madremonte":
    "FRONTERA: la Madremonte circula en tradiciones campesinas, indígenas y afrocolombianas distintas; no se declara una deidad nacional uniforme ni se funde con Dabeiba.",
  "los-duendes":
    "FRONTERA: la ficha describe un repertorio plural de duendes; no diagnostica lesiones, desapariciones o sonambulismo ni conserva el supuesto caso clínico de Claudia Patricia.",
};

export function buildVariosMixtoFinalMyth(input) {
  const media = variosMixtoFinalMedia[input.slug];
  if (!media) throw new Error(`${input.slug}: falta inventario visual.`);
  const categoryPath = variosMixtoFinalCategoryBySlug[input.slug];
  if (!categoryPath) throw new Error(`${input.slug}: falta taxonomía.`);
  const imagePromptHorizontal = horizontalPrompt(input.sceneHorizontal);
  const imagePromptVertical = verticalPrompt(input.sceneVertical);
  const record = {
    slug: input.slug,
    title: input.title,
    category_path: categoryPath,
    tags: input.tags,
    latitude: media.latitude,
    longitude: media.longitude,
    mito: input.mito,
    historia: input.historia,
    versiones: input.versiones,
    leccion: input.leccion,
    similitudes: input.similitudes,
    excerpt: input.excerpt,
    seo_title: input.seoTitle,
    seo_description: input.seoDescription,
    seo: input.seo,
    methodologySeo: bachue.methodologySeo,
    focus_keyword: input.focusKeywords[0],
    focus_keywords: input.focusKeywords,
    image_prompt: imagePromptHorizontal,
    image_prompt_horizontal: imagePromptHorizontal,
    image_prompt_vertical: imagePromptVertical,
    image_url: media.horizontal,
    vertical_image_url: media.vertical,
    keySources: input.keySources,
    sources: input.sources,
    researchNotes: `${input.researchNotes}
FUENTES: respaldo, clase y límites en editorial/varios-mixto-final/evidence.mjs.
${boundaryBySlug[input.slug]}
TAXONOMÍA: la ruta sale de Varios > Mixto y pasa a una agrupación regional Mestizo; la etiqueta editorial no afirma homogeneidad social ni reemplaza atribuciones locales.
UBICACIÓN: coordenada municipal o regional de lectura; no marca una aparición comprobada, domicilio, tumba ni sitio ritual exacto.
IMÁGENES: pareja propia pendiente; OpenAI gpt-image-2, calidad alta, full illustration digital 2D full paper cut y paper quilling, nunca fotografía, objeto físico, maqueta, diorama, collage físico, CGI ni render 3D. Trazabilidad futura en editorial/varios-mixto-final/provenance.json.`,
  };
  return { ...record, content: composeContent(record) };
}
