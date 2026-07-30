import { buildYaguaEditorialMyth } from "./build-editorial-myth.mjs";
import { pickYaguaSources } from "./sources.mjs";

export function defineYaguaMyth({
  seoTitle,
  seoDescription,
  focusKeywords,
  ...input
}) {
  const selectedSources = pickYaguaSources();
  if (
    selectedSources.length !== 9 ||
    new Set(selectedSources.map(({ url }) => url)).size !== 9
  ) {
    throw new Error(`${input.slug}: se esperaban nueve fuentes únicas.`);
  }
  return buildYaguaEditorialMyth({
    ...input,
    seoTitle,
    seoDescription,
    focusKeywords,
    keySources: selectedSources.slice(0, 3),
    sources: selectedSources.slice(3),
    seo: {
      meta_title: seoTitle,
      meta_description: seoDescription,
      meta_keywords: focusKeywords.join(", "),
      og_title: seoTitle,
      og_description: seoDescription,
      twitter_title: seoTitle,
      twitter_description: seoDescription,
      canonical_path: `/mitos/${input.slug}`,
    },
  });
}
