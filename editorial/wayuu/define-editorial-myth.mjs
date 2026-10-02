import { buildWayuuEditorialMyth } from "./build-editorial-myth.mjs";
import { pickWayuuSources } from "./sources.mjs";

export function defineWayuuMyth({
  sourceKeys,
  seoTitle,
  seoDescription,
  ogTitle,
  ogDescription,
  focusKeywords,
  ...input
}) {
  const selectedSources = pickWayuuSources(...sourceKeys);

  return buildWayuuEditorialMyth({
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
      og_title: ogTitle || seoTitle,
      og_description: ogDescription || seoDescription,
      twitter_title: seoTitle,
      twitter_description: seoDescription,
      canonical_path: `/mitos/${input.slug}`,
    },
  });
}
