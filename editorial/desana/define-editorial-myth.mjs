import { buildDesanaEditorialMyth } from "./build-editorial-myth.mjs";
import { pickDesanaSources } from "./sources.mjs";

// Reparto por defecto. Un mito que declare su propio `sourceKeys` lo sustituye
// entero: antes las ocho fichas compartían esta lista.
const repartoPorDefecto = [
  "lanaLana1995",
  "diakuruKisibi1996",
  "galvao2004",
  "amazonianCosmos1971",
  "desanaTexts1989",
  "bruzzi1994",
  "ribeiro1994",
];

export function defineDesanaMyth({
  sourceKeys = repartoPorDefecto,
  seoTitle,
  seoDescription,
  focusKeywords,
  ...input
}) {
  const selectedSources = pickDesanaSources(...sourceKeys);
  // Antes exigía exactamente 7: el reparto en bloque escrito como
  // aserción. Lo que importa es que haya fuentes suficientes.
  if (selectedSources.length < 5) {
    throw new Error(
      `${input.slug}: ${selectedSources.length} fuentes únicas, el mínimo son cinco.`,
    );
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
