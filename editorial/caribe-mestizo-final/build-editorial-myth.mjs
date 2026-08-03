import bachue from "../myths/bachue.mjs";
import { caribeMestizoFinalMedia } from "./media.mjs";
import { caribeMestizoFinalCategoryBySlug } from "./universe.mjs";

function composeContent({ mito, historia, versiones, leccion, similitudes }) {
  return [["Mito", mito], ["Historia", historia], ["Versiones", versiones], ["Lección", leccion], ["Similitudes", similitudes]]
    .map(([heading, body]) => `${heading}\n${body}`)
    .join("\n\n");
}

function horizontalPrompt(scene) {
  return `Full illustration editorial panorámica digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; Caribe colombiano construido únicamente con capas digitales recortadas de bordes limpios, formas mate, color profundo y quilling dibujado selectivo; tratamiento adulto respetuoso, sin texto ni letras, sin volumen físico, sin fotografía, sin objeto físico, sin fibras reales, sin pliegues reales, sin grosor de papel, sin sombras de objeto, sin maqueta, sin diorama, sin collage físico, sin CGI ni render 3D.`;
}

function verticalPrompt(scene) {
  return `Full illustration editorial vertical digital 2D full paper cut y paper quilling, acabado gráfico plano y composición a página completa: ${scene}; segunda escena narrativa claramente distinta de la portada, construida únicamente con capas digitales recortadas, formas mate y quilling dibujado selectivo; perspectiva vertical y gesto claro, sin texto ni letras, sin volumen físico, sin fotografía, sin objeto físico, sin fibras reales, sin pliegues reales, sin grosor de papel, sin sombras de objeto, sin maqueta, sin diorama, sin collage físico, sin CGI ni render 3D.`;
}

export function buildCaribeMestizoFinalMyth(input) {
  const media = caribeMestizoFinalMedia[input.slug];
  if (!media) throw new Error(`${input.slug}: falta inventario visual.`);
  const categoryPath = caribeMestizoFinalCategoryBySlug[input.slug];
  if (!categoryPath) throw new Error(`${input.slug}: falta taxonomía.`);
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
    image_prompt: horizontalPrompt(input.sceneHorizontal),
    image_prompt_horizontal: horizontalPrompt(input.sceneHorizontal),
    image_prompt_vertical: verticalPrompt(input.sceneVertical),
    image_url: media.horizontal,
    vertical_image_url: media.vertical,
    keySources: input.keySources,
    sources: input.sources,
    researchNotes: `${input.researchNotes}
FUENTES: matriz de respaldo, clase y límites en editorial/caribe-mestizo-final/evidence.mjs.
ATRIBUCIÓN: Mestizo es una agrupación técnica del sitio; no borra autoría, mediación, portadores afrocaribeños, memoria raizal ni otras identidades.
UBICACIÓN: coordenada municipal o regional aproximada; no marca una aparición comprobada, tesoro, tumba, casa privada o sitio ritual.
IMÁGENES: pareja propia pendiente; OpenAI gpt-image-2, calidad alta, full illustration digital 2D full paper cut y paper quilling, nunca fotografía, objeto físico, maqueta, diorama, collage físico, CGI ni render 3D. Trazabilidad futura en editorial/caribe-mestizo-final/provenance.json.`,
  };
  return { ...record, content: composeContent(record) };
}
