import { buildBarasanaEditorialMyth } from "./build-editorial-myth.mjs";
import { pickBarasanaSources } from "./sources.mjs";

export function defineBarasanaMyth({
  // Cada mito declara su propio reparto: las obras que usó, en orden de peso.
  // Ya no hay reparto compartido por defecto, que era lo que hacía que las
  // seis fichas citaran lo mismo dijeran lo que dijeran.
  sourceKeys,
  seoTitle,
  seoDescription,
  focusKeywords,
  ...input
}) {
  if (!Array.isArray(sourceKeys) || sourceKeys.length === 0) {
    throw new Error(`${input.slug}: falta declarar sourceKeys.`);
  }
  const selectedSources = pickBarasanaSources(...sourceKeys);
  // Antes exigía exactamente 7: el reparto en bloque escrito como
  // aserción. Lo que importa es que haya fuentes suficientes.
  if (selectedSources.length < 5) {
    throw new Error(
      `${input.slug}: ${selectedSources.length} fuentes únicas, el mínimo son cinco.`,
    );
  }
  return buildBarasanaEditorialMyth({
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
