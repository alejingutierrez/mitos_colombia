import { buildYaguaEditorialMyth } from "./build-editorial-myth.mjs";
import {
  pickChimbilacoSources,
  pickYaguaSources,
} from "./sources.mjs";

function defineWithSources(
  { seoTitle, seoDescription, focusKeywords, ...input },
  selectedSources,
) {
  if (
    selectedSources.length < 5 ||
    new Set(selectedSources.map(({ url }) => url)).size !==
      selectedSources.length
  ) {
    throw new Error(`${input.slug}: se esperaban al menos cinco fuentes únicas.`);
  }
  return buildYaguaEditorialMyth({
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

export function defineYaguaMyth(input) {
  return defineWithSources(input, pickYaguaSources(...(input.sourceKeys ?? [])));
}

export function defineChimbilacoMyth(input) {
  return defineWithSources(
    { ...input, scope: "contemporary" },
    pickChimbilacoSources(...(input.sourceKeys ?? [])),
  );
}
