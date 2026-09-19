import { buildBarasanaEditorialMyth } from "./build-editorial-myth.mjs";
import { pickBarasanaSources } from "./sources.mjs";

const defaultContextKeys = [
  "palm",
  "milkRiver",
  "torres",
  "pleiades",
  "minCultura",
  "planVida",
];

export function defineBarasanaMyth({
  narrativeSource,
  // Fuentes propias del mito; sustituyen al reparto compartido cuando existen.
  sourceKeys,
  contextSources = defaultContextKeys,
  seoTitle,
  seoDescription,
  focusKeywords,
  ...input
}) {
  const selectedSources = sourceKeys
    ? pickBarasanaSources(...sourceKeys)
    : pickBarasanaSources(
    narrativeSource,
    ...contextSources,
  );
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
