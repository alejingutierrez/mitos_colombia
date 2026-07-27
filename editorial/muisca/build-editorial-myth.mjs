import bachue from "../myths/bachue.mjs";

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

export function buildMuiscaEditorialMyth(input) {
  const {
    slug,
    title,
    mito,
    historia,
    versiones,
    leccion,
    similitudes,
    excerpt,
    seoTitle,
    seoDescription,
    seo,
    focusKeyword,
    focusKeywords,
    tags,
    latitude,
    longitude,
    imagePrompt,
    imagePromptHorizontal,
    imagePromptVertical,
    imageUrl,
    keySources,
    sources,
    researchNotes,
    categoryPath = "Andina > Varios > Muiscas",
  } = input;

  return {
    slug,
    title,
    category_path: categoryPath,
    tags,
    latitude,
    longitude,
    mito,
    historia,
    versiones,
    leccion,
    similitudes,
    content: composeContent({
      mito,
      historia,
      versiones,
      leccion,
      similitudes,
    }),
    excerpt,
    seo_title: seoTitle,
    seo_description: seoDescription,
    seo: {
      ...seo,
      canonical_path: seo.canonical_path || `/mitos/${slug}`,
    },
    methodologySeo: bachue.methodologySeo,
    focus_keyword: focusKeyword,
    focus_keywords: focusKeywords,
    image_prompt: imagePrompt,
    image_prompt_horizontal: imagePromptHorizontal || imagePrompt,
    image_prompt_vertical: imagePromptVertical || imagePrompt,
    image_url: imageUrl || null,
    keySources,
    sources,
    researchNotes,
  };
}
