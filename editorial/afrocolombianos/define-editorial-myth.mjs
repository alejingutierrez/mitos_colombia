import { buildAfrocolombianEditorialMyth } from "./build-editorial-myth.mjs";
import { pickAfroSources } from "./sources.mjs";

export function defineAfrocolombianMyth(input) {
  const selectedSources = pickAfroSources(input.slug);
  if (
    selectedSources.length < 5 ||
    new Set(selectedSources.map(({ url }) => url)).size !==
      selectedSources.length
  ) {
    throw new Error(`${input.slug}: se esperaban al menos cinco fuentes únicas.`);
  }
  return buildAfrocolombianEditorialMyth({
    ...input,
    keySources: selectedSources.slice(0, 3),
    sources: selectedSources.slice(3),
    seo: {
      meta_title: input.seoTitle,
      meta_description: input.seoDescription,
      meta_keywords: input.focusKeywords.join(", "),
      og_title: input.seoTitle,
      og_description: input.seoDescription,
      twitter_title: input.seoTitle,
      twitter_description: input.seoDescription,
      canonical_path: `/mitos/${input.slug}`,
    },
  });
}
