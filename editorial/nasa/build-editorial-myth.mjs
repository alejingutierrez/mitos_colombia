import bachue from "../myths/bachue.mjs";
import { NASA_CATEGORY_PATH } from "./universe.mjs";
import { nasaMedia } from "./media.mjs";

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

export function buildNasaEditorialMyth(input) {
  const media = nasaMedia[input.slug];
  if (!media) {
    throw new Error(`Falta inventario de imagen y mapa para ${input.slug}.`);
  }

  const preservePrompt =
    "Conservar el par publicado durante esta revisión; no regenerar sin una decisión visual documentada.";
  const imagePromptHorizontal =
    input.imagePromptHorizontal || input.imagePrompt || preservePrompt;
  const imagePromptVertical =
    input.imagePromptVertical || input.imagePrompt || preservePrompt;

  return {
    slug: input.slug,
    title: input.title,
    category_path: NASA_CATEGORY_PATH,
    tags: input.tags,
    latitude: input.latitude ?? media.latitude,
    longitude: input.longitude ?? media.longitude,
    mito: input.mito,
    historia: input.historia,
    versiones: input.versiones,
    leccion: input.leccion,
    similitudes: input.similitudes,
    content: composeContent(input),
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
    image_url: media.horizontal || input.imageUrl || "",
    vertical_image_url: media.vertical || input.verticalImageUrl || "",
    keySources: input.keySources,
    sources: input.sources,
    researchNotes: input.researchNotes,
  };
}
