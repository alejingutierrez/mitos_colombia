import { buildNukakEditorialMyth } from "./build-editorial-myth.mjs";
import { pickNukakSources } from "./sources.mjs";

const sourceKeys = [
  "mahecha2024",
  "franky2011",
  "gutierrez2016",
  "upperRioNegro",
  "overview2011",
  "minCultura",
  "resolution2013",
];

export function defineNukakMyth({
  seoTitle,
  seoDescription,
  focusKeywords,
  ...input
}) {
  const selectedSources = pickNukakSources(...sourceKeys);
  if (selectedSources.length !== 7) {
    throw new Error(`${input.slug}: se esperaban siete fuentes únicas.`);
  }
  return buildNukakEditorialMyth({
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
