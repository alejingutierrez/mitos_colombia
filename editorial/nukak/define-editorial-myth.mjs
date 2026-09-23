import { buildNukakEditorialMyth } from "./build-editorial-myth.mjs";
import { pickNukakSources } from "./sources.mjs";

// Reparto por defecto, para cuando una ficha no declara el suyo. Era la lista
// que recibían todas por igual, con `sourceKeys` declarado en el módulo y el
// define ignorándolo: la constante de arriba tapaba lo que traía la ficha.
const repartoPorDefecto = [
  "mahecha2024",
  "franky2011",
  "gutierrez2016",
  "upperRioNegro",
  "overview2011",
  "minCultura",
  "resolution2013",
];

export function defineNukakMyth({
  seoTitle,
  seoDescription,
  focusKeywords,
  ...input
}) {
  const selectedSources = pickNukakSources(
    ...(input.sourceKeys?.length ? input.sourceKeys : repartoPorDefecto),
  );
  // Antes exigía exactamente 7: el reparto en bloque escrito como
  // aserción. Lo que importa es que haya fuentes suficientes.
  if (selectedSources.length < 5) {
    throw new Error(
      `${input.slug}: ${selectedSources.length} fuentes únicas, el mínimo son cinco.`,
    );
  }
  return buildNukakEditorialMyth({
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
