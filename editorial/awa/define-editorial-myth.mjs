import { buildAwaEditorialMyth } from "./build-editorial-myth.mjs";
import { pickAwaSources } from "./sources.mjs";

export function defineAwaMyth({
  sourceKeys,
  seoTitle,
  seoDescription,
  focusKeywords,
  ...input
}) {
  const selectedSources = pickAwaSources(...sourceKeys);
  return buildAwaEditorialMyth({
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
