import { buildMuiscaEditorialMyth } from "./build-editorial-myth.mjs";
import { pickSources } from "./sources.mjs";

export function defineMuiscaMyth({
  sourceKeys,
  seoTitle,
  seoDescription,
  ogTitle,
  ogDescription,
  focusKeywords,
  ...input
}) {
  const selectedSources = pickSources(...sourceKeys);

  return buildMuiscaEditorialMyth({
    ...input,
    seoTitle,
    seoDescription,
    focusKeyword: focusKeywords[0],
    focusKeywords,
    keySources: selectedSources.slice(0, 3),
    sources: selectedSources.slice(3),
    seo: {
      meta_title: seoTitle,
      meta_description: seoDescription,
      meta_keywords: focusKeywords.join(", "),
      og_title: ogTitle || seoTitle,
      og_description: ogDescription || seoDescription,
      twitter_title: seoTitle,
      twitter_description: seoDescription,
      canonical_path: `/mitos/${input.slug}`,
    },
  });
}
