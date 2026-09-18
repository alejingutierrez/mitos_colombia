import bachue from "../myths/bachue.mjs";
import { katioMedia } from "./media.mjs";
import { katioCategoryBySlug } from "./universe.mjs";

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

export function buildKatioEditorialMyth(input) {
  const media = katioMedia[input.slug];
  if (!media) throw new Error(`Falta inventario visual para ${input.slug}.`);
  const categoryPath = katioCategoryBySlug[input.slug];
  if (!categoryPath) throw new Error(`Falta taxonomía para ${input.slug}.`);

  const preservePrompt =
    "Conservar el par publicado: ilustración full paper cut y paper quilling, sin fotografía, maqueta física, diorama ni render 3D.";
  const imagePromptHorizontal =
    input.imagePromptHorizontal || input.imagePrompt || preservePrompt;
  const imagePromptVertical =
    input.imagePromptVertical || input.imagePrompt || preservePrompt;

  return {
    slug: input.slug,
    title: input.title,
    category_path: categoryPath,
    tags: input.tags,
    latitude: input.latitude ?? media.latitude,
    longitude: input.longitude ?? media.longitude,
    mito: input.mito,
    ...(input.relatoCorto ? { relatoCorto: input.relatoCorto } : {}),
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
    image_url: media.horizontal,
    vertical_image_url: media.vertical,
    keySources: input.keySources,
    sources: input.sources,
    researchNotes: input.researchNotes,
  };
}
