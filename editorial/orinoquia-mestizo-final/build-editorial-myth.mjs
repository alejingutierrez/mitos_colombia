import bachue from "../myths/bachue.mjs";
import { orinoquiaMestizoFinalMedia } from "./media.mjs";
import { orinoquiaMestizoFinalCategoryBySlug } from "./universe.mjs";

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
  return `Full illustration editorial panorámica digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; paisaje de la Orinoquía colombiana construido únicamente con capas digitales recortadas de bordes limpios, formas mate, color profundo y quilling dibujado selectivo; acción legible y tratamiento adulto respetuoso, sin volumen físico, texto ni letras, sin fotografía, objeto físico, fibras reales, pliegues reales, grosor de papel, sombras de objeto, maqueta, diorama, collage físico, CGI ni render 3D.`;
}

function verticalPrompt(scene) {
  return `Full illustration editorial vertical digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; segunda escena narrativa claramente distinta de la portada, construida únicamente con capas digitales recortadas, formas mate y quilling dibujado selectivo; perspectiva vertical y gesto narrativo claro, sin volumen físico, texto ni letras, sin fotografía, objeto físico, fibras reales, pliegues reales, grosor de papel, sombras de objeto, maqueta, diorama, collage físico, CGI ni render 3D.`;
}

export function buildOrinoquiaMestizoFinalMyth(input) {
  const media = orinoquiaMestizoFinalMedia[input.slug];
  if (!media) throw new Error(`${input.slug}: falta inventario visual.`);
  const categoryPath = orinoquiaMestizoFinalCategoryBySlug[input.slug];
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
FUENTES: respaldo, clase y límites en editorial/orinoquia-mestizo-final/evidence.mjs.
ATRIBUCIÓN: la ficha diferencia literatura firmada, circulación folclórica, dato histórico e interpretación editorial; Mestizo es una agrupación del sitio, no una identidad homogénea.
UBICACIÓN: coordenada municipal o regional de lectura; no marca una aparición comprobada, tumba, depósito, casa ni sitio ritual exacto.
IMÁGENES: pareja propia pendiente; OpenAI gpt-image-2, calidad alta, full illustration digital 2D full paper cut y paper quilling, nunca fotografía, objeto físico, maqueta, diorama, collage físico, CGI ni render 3D. Trazabilidad futura en editorial/orinoquia-mestizo-final/provenance.json.`,
  };
  return { ...record, content: composeContent(record) };
}
