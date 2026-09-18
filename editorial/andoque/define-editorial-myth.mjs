import { buildAndoqueEditorialMyth } from "./build-editorial-myth.mjs";
import { pickAndoqueSources } from "./sources.mjs";

const defaultContextKeys = [
  "tradicionesOpenLibrary",
  "diluvioPdf",
  "diluvioRecord",
  "minCultura",
  "puebloAndoke",
  "igac",
];

export function defineAndoqueMyth({
  narrativeSource,
  contextSources = defaultContextKeys,
  seoTitle,
  seoDescription,
  focusKeywords,
  ...input
}) {
  const selectedSources = pickAndoqueSources(
    narrativeSource,
    ...contextSources,
  );
  if (selectedSources.length !== 7) {
    throw new Error(`${input.slug}: se esperaban siete fuentes únicas.`);
  }
  return buildAndoqueEditorialMyth({
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
