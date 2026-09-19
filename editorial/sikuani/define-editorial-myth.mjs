import { buildSikuaniEditorialMyth } from "./build-editorial-myth.mjs";
import { pickSikuaniSources } from "./sources.mjs";

export function defineSikuaniMyth({
  // Cada mito declara las obras que su reescritura usó, en orden de peso: las
  // tres primeras salen como fuentes clave. Ya no hay reparto por defecto —el
  // par narrativeSource + contextSources era justamente el reparto en bloque
  // que hacía que las diez fichas citaran lo mismo.
  sourceKeys,
  seoTitle,
  seoDescription,
  focusKeywords,
  ...input
}) {
  if (!Array.isArray(sourceKeys) || sourceKeys.length === 0) {
    throw new Error(`${input.slug}: falta declarar sourceKeys.`);
  }
  const selectedSources = pickSikuaniSources(...sourceKeys);
  // Antes exigía exactamente 7: el reparto en bloque escrito como
  // aserción. Lo que importa es que haya fuentes suficientes.
  if (selectedSources.length < 5) {
    throw new Error(
      `${input.slug}: ${selectedSources.length} fuentes únicas, el mínimo son cinco.`,
    );
  }
  return buildSikuaniEditorialMyth({
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
