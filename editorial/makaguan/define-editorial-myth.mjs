import { buildMakaguanEditorialMyth } from "./build-editorial-myth.mjs";
import { pickMakaguanSources } from "./sources.mjs";

export function defineMakaguanMyth({
  // Cada mito declara las obras que su reescritura usó, en orden de peso: las
  // tres primeras salen como fuentes clave. Antes había un reparto por defecto
  // de siete y los tres mitos lo compartían entero, con la ficha del
  // Mininterior entre ellas, cuyo documento ya no existe.
  sourceKeys,
  seoTitle,
  seoDescription,
  focusKeywords,
  ...input
}) {
  if (!Array.isArray(sourceKeys) || sourceKeys.length === 0) {
    throw new Error(`${input.slug}: falta declarar sourceKeys.`);
  }
  const selectedSources = pickMakaguanSources(...sourceKeys);
  // El mínimo es cinco fuentes únicas, no un número exacto: el siete de antes
  // era el reparto en bloque escrito como condición.
  if (selectedSources.length < 5) {
    throw new Error(
      `${input.slug}: ${selectedSources.length} fuentes únicas, el mínimo son cinco.`,
    );
  }
  return buildMakaguanEditorialMyth({
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
