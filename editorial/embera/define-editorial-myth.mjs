import { buildEmberaEditorialMyth } from "./build-editorial-myth.mjs";
import {
  defaultEmberaSourceKeys,
  pickEmberaSources,
} from "./sources.mjs";

export function defineEmberaMyth({
  sourceKeys = defaultEmberaSourceKeys,
  seoTitle,
  seoDescription,
  ogTitle,
  ogDescription,
  focusKeywords,
  ...input
}) {
  const selectedSources = pickEmberaSources(...sourceKeys);

  return buildEmberaEditorialMyth({
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
