import { buildSikuaniEditorialMyth } from "./build-editorial-myth.mjs";
import { pickSikuaniSources } from "./sources.mjs";

const defaultContextKeys = [
  "icbfEnsani",
  "cnmh",
  "ucla",
  "onic",
  "icbfBibliography",
  "baquero",
];

export function defineSikuaniMyth({
  narrativeSource,
  contextSources = defaultContextKeys,
  seoTitle,
  seoDescription,
  focusKeywords,
  ...input
}) {
  const selectedSources = pickSikuaniSources(
    narrativeSource,
    ...contextSources,
  );
  if (selectedSources.length !== 7) {
    throw new Error(`${input.slug}: se esperaban siete fuentes únicas.`);
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
