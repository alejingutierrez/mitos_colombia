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
  // Fuentes propias del mito, en el orden en que deben leerse: las tres
  // primeras quedan como claves y el resto como apoyo. Cuando un mito la
  // declara, sustituye por completo al par narrativeSource + contextSources,
  // que era el reparto igual para las catorce fichas.
  sourceKeys,
  seoTitle,
  seoDescription,
  focusKeywords,
  ...input
}) {
  const selectedSources = sourceKeys
    ? pickAndoqueSources(...sourceKeys)
    : pickAndoqueSources(narrativeSource, ...contextSources);
  if (selectedSources.length < 5) {
    throw new Error(
      `${input.slug}: ${selectedSources.length} fuentes únicas, el mínimo son cinco.`,
    );
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
