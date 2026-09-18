import { buildDesanaEditorialMyth } from "./build-editorial-myth.mjs";
import { pickDesanaSources } from "./sources.mjs";

const allContextKeys = [
  "dantes",
  "isaPeople",
  "museu",
  "wariBook",
  "googleBook",
  "terminology",
];

export function defineDesanaMyth({
  narrativeSource = "primaryBook",
  contextSources = allContextKeys,
  seoTitle,
  seoDescription,
  focusKeywords,
  ...input
}) {
  const selectedSources = pickDesanaSources(
    narrativeSource,
    ...contextSources,
  );
  if (selectedSources.length !== 7) {
    throw new Error(`${input.slug}: se esperaban siete fuentes únicas.`);
  }
  return buildDesanaEditorialMyth({
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
