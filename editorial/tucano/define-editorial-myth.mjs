import { buildTucanoEditorialMyth } from "./build-editorial-myth.mjs";
import { pickTucanoSources } from "./sources.mjs";

export function defineTucanoMyth({
  primarySource,
  seoTitle,
  seoDescription,
  focusKeywords,
  ...input
}) {
  const selectedSources = pickTucanoSources(primarySource);
  // Antes exigía exactamente 7: el reparto en bloque escrito como
  // aserción. Lo que importa es que haya fuentes suficientes.
  if (selectedSources.length < 5) {
    throw new Error(
      `${input.slug}: ${selectedSources.length} fuentes únicas, el mínimo son cinco.`,
    );
  }
  return buildTucanoEditorialMyth({
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
