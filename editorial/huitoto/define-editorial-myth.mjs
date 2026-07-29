import { buildHuitotoEditorialMyth } from "./build-editorial-myth.mjs";
import { pickHuitotoSources } from "./sources.mjs";

const contextualSources = [
  "cervantesUrbina",
  "preussOne",
  "preussTwo",
  "onic",
  "unalRecord",
  "mythEthics",
];

export function defineHuitotoMyth({
  narrativeSource = "urbinaBook",
  contextSources = contextualSources,
  seoTitle,
  seoDescription,
  focusKeywords,
  ...input
}) {
  const selectedSources = pickHuitotoSources(
    narrativeSource,
    ...contextSources,
  );
  if (selectedSources.length !== 7) {
    throw new Error(`${input.slug}: se esperaban siete fuentes únicas.`);
  }
  return buildHuitotoEditorialMyth({
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
