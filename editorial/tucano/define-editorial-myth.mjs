import { buildTucanoEditorialMyth } from "./build-editorial-myth.mjs";
import { entradasPropias } from "./sources.mjs";

export function defineTucanoMyth({
  // Cada mito declara las obras que su reescritura usó, en orden de peso: las
  // tres primeras salen como fuentes clave. `primarySource` era un solo
  // interruptor que rellenaba el resto con un dossier fijo de siete, y por eso
  // las siete fichas citaban lo mismo.
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
  // Antes exigía exactamente 7: el dossier fijo escrito como aserción. El
  // corpus tucano se apoya en cinco obras y son cinco las que cada ficha
  // declara, pero ya no en el mismo orden: primero las que esa página usó
  // —que son las que salen como fuentes clave— y después las del corpus que
  // no la alimentaron, cada una diciendo en su entrada qué hace ahí.
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
