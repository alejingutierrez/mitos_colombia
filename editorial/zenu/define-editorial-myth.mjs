import { buildZenuEditorialMyth } from "./build-editorial-myth.mjs";
import { pickZenuSources } from "./sources.mjs";

function defineWithSources(input, selectedSources) {
  if (
    selectedSources.length < 5 ||
    new Set(selectedSources.map(({ url }) => url)).size !==
      selectedSources.length
  ) {
    throw new Error(`${input.slug}: se esperaban al menos cinco fuentes únicas.`);
  }
  return buildZenuEditorialMyth({
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

export function defineZenuMyth(input) {
  return defineWithSources(input, pickZenuSources(...(input.sourceKeys ?? [])));
}

// Juan Lara tenía su propio dossier de seis obras —blogs, prensa y un portal
// de turismo— que la ficha recibía entera sin elegir nada. Al abrir el reparto
// se quedó sin sentido: ahora declara sus claves contra el mismo pool zenú que
// el resto, y Drexler lo documenta entre los encantos del monte del resguardo,
// que es justo lo que se negaba para reclasificarlo.
export function defineJuanLaraTransfer(input) {
  return defineWithSources(
    { ...input, scope: "mestizo" },
    pickZenuSources(...(input.sourceKeys ?? [])),
  );
}
