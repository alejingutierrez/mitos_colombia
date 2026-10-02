import { buildQuimbayaEditorialMyth } from "./build-editorial-myth.mjs";
import { pickQuimbayaSources } from "./sources.mjs";

export function defineQuimbayaMyth({
  sourceKeys,
  seoTitle,
  seoDescription,
  focusKeywords,
  ...input
}) {
  const selectedSources = pickQuimbayaSources(...sourceKeys);
  return buildQuimbayaEditorialMyth({
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
