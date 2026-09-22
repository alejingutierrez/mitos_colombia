import { buildAmazonasMixtoResidualEditorialMyth } from "./build-editorial-myth.mjs";
import { pickAmazonasMixtoResidualSources } from "./sources.mjs";

export function defineAmazonasMixtoResidualMyth(input) {
  // Las fuentes son las que la ficha declara en `sourceKeys`; sin ellas cae
  // en el reparto heredado por slug, con la comprobación de siempre.
  const selectedSources = pickAmazonasMixtoResidualSources(input.sourceKeys || input.slug);
  if (input.sourceKeys) {
    // Piso del bloque mestizo y mixto: 8, salvo `fuentesAgotadas` declarado.
    const minimo = input.fuentesAgotadas ? 1 : 8;
    if (selectedSources.length < minimo) {
      throw new Error(`${input.slug}: ${selectedSources.length} fuentes, y el piso es ${minimo}.`);
    }
    if (new Set(selectedSources.map(({ url }) => url)).size !== selectedSources.length) {
      throw new Error(`${input.slug}: hay URLs repetidas entre sus fuentes.`);
    }
  } else if (selectedSources.length < 7 || new Set(selectedSources.map(({ url }) => url)).size !== selectedSources.length) {
    throw new Error(`${input.slug}: se esperaban al menos siete fuentes únicas.`);
  }
  return buildAmazonasMixtoResidualEditorialMyth({
    ...input,
    keySources: selectedSources.slice(0, 3),
    sources: selectedSources.slice(3),
    seo: {
      meta_title: input.seoTitle,
      meta_description: input.seoDescription,
      meta_keywords: input.focusKeywords.join(", "),
      og_title: input.seoTitle,
      og_description: input.seoDescription,
      twitter_title: input.seoTitle,
      twitter_description: input.seoDescription,
      canonical_path: `/mitos/${input.slug}`,
    },
  });
}
