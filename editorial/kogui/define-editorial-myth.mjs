import { buildKoguiEditorialMyth } from "./build-editorial-myth.mjs";
import { pickKoguiSources } from "./sources.mjs";

const corpusSourceKeys = [
  "chaves1947",
  "reichel1950",
  "preuss1993",
  "reichel1987",
  "pes2017",
  "malezhi2025",
  "decreto2018",
  "loom1978",
];

const gauteovanSourceKeys = [
  "gauteovanCompilation",
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
  sourceKeys,
  ...input
}) {
  // `sourceKeys` propias del mito sustituyen la lista compartida.
  if (Array.isArray(sourceKeys) && sourceKeys.length) {
    const propias = pickKoguiSources(...sourceKeys);
    if (propias.length < 5) {
      throw new Error(`${input.slug}: ${propias.length} fuentes, mínimo 5.`);
    }
    return buildKoguiEditorialMyth({
      ...input,
      seoTitle,
      seoDescription,
      focusKeywords,
      keySources: propias.slice(0, 3),
      sources: propias.slice(3),
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
