import { buildTicunaEditorialMyth } from "./build-editorial-myth.mjs";
import { entradasPropias } from "./sources.mjs";

export function defineTicunaMyth({
  // Cada mito declara las obras que su reescritura usó, en orden de peso: las
  // tres primeras salen como fuentes clave. `primarySource` era un solo
  // interruptor que rellenaba el resto con un dossier fijo de siete, y por eso
  // las seis fichas citaban lo mismo.
  sourceKeys,
  seoTitle,
  seoDescription,
  focusKeywords,
  ...input
}) {
  if (!Array.isArray(sourceKeys) || sourceKeys.length === 0) {
    throw new Error(`${input.slug}: falta declarar sourceKeys.`);
  }
  const selectedSources = entradasPropias(...sourceKeys);
  // Antes exigía exactamente 7: el dossier fijo escrito como aserción. Lo que
  // importa es que haya fuentes suficientes.
  if (selectedSources.length < 5) {
    throw new Error(
      `${input.slug}: ${selectedSources.length} fuentes únicas, el mínimo son cinco.`,
    );
  }
  return buildTicunaEditorialMyth({
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
