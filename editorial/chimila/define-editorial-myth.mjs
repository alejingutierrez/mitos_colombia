import { buildChimilaEditorialMyth } from "./build-editorial-myth.mjs";
import { pickChimilaSources } from "./sources.mjs";

const corpusSourceKeys = [
  "reichel1945",
  "rocha2010",
  "mincultura2024",
  "buitRago2020",
  "onic2023",
  "nino2008",
  "uninorte2023",
];

const livingSourceKeys = [
  "mincultura2024",
  "nino2008",
  "buitRago2020",
  "onic2023",
  "uninorte2023",
  "rocha2010",
  "reichel1945",
];

export function defineChimilaMyth({
  seoTitle,
  seoDescription,
  focusKeywords,
  sourceKeys,
  ...input
}) {
  const fallbackKeys =
    input.sourceMode === "living" ? livingSourceKeys : corpusSourceKeys;
  const selectedSources = pickChimilaSources(
    ...(Array.isArray(sourceKeys) && sourceKeys.length
      ? sourceKeys
      : fallbackKeys),
  );
  return buildChimilaEditorialMyth({
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

