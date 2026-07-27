import bachue from "../myths/bachue.mjs";
import { WAYUU_CATEGORY_PATH } from "./universe.mjs";
import { wayuuMedia } from "./media.mjs";

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
export function buildWayuuEditorialMyth(input) {
  const media = wayuuMedia[input.slug];
  if (!media) {
    throw new Error(`Falta inventario de imagen y mapa para ${input.slug}.`);
  }
  const [imageUrl, defaultLatitude, defaultLongitude] = media;
  const defaultImagePrompt =
    input.imagePrompt ||
    `No regenerar en esta revisión. Preservar la imagen publicada de ${input.title} hasta una auditoría visual autorizada.`;
  const imagePromptHorizontal =
    input.imagePromptHorizontal || defaultImagePrompt;
  const imagePromptVertical =
    input.imagePromptVertical || defaultImagePrompt;

  return {
    slug: input.slug,
    title: input.title,
    category_path: WAYUU_CATEGORY_PATH,
    tags: input.tags,
    latitude: input.latitude ?? defaultLatitude,
    longitude: input.longitude ?? defaultLongitude,
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
    image_url: imageUrl,
    keySources: input.keySources,
    sources: input.sources,
    researchNotes: input.researchNotes,
  };
}
