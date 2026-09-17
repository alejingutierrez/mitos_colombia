import { buildKoguiEditorialMyth } from "./build-editorial-myth.mjs";
import { pickKoguiSources } from "./sources.mjs";

const corpusSourceKeys = [
  "reichel1951",
  "preuss1993",
  "reichel1987",
  "pes2017",
  "malezhi2025",
  "decreto2018",
  "loom1978",
];

const gauteovanSourceKeys = [
  "gauteovanCompilation",
  "music1967",
  "preuss1993",
  "reichel1987",
  "pes2017",
  "malezhi2025",
  "decreto2018",
];

export function defineKoguiMyth({
  seoTitle,
  seoDescription,
  focusKeywords,
  ...input
}) {
  const selectedSources = pickKoguiSources(
    ...(input.sourceMode === "gauteovan"
      ? gauteovanSourceKeys
      : corpusSourceKeys),
  );
  return buildKoguiEditorialMyth({
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
