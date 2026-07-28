import { buildMakaguanEditorialMyth } from "./build-editorial-myth.mjs";
import { pickMakaguanSources } from "./sources.mjs";

const sourceKeys = [
  "mattar2024",
  "unal2024",
  "icbf2021",
  "mininterior",
  "apoyar2014",
  "radioNacional2022",
  "jangwapana2026",
];

export function defineMakaguanMyth({
  seoTitle,
  seoDescription,
  focusKeywords,
  ...input
}) {
  const selectedSources = pickMakaguanSources(...sourceKeys);
  return buildMakaguanEditorialMyth({
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
