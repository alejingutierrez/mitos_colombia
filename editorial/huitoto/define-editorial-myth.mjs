import { buildHuitotoEditorialMyth } from "./build-editorial-myth.mjs";
import { pickHuitotoSources } from "./sources.mjs";

const contextualSources = [
  "preussOne",
  "preussTwo",
  "onic",
  "mythEthics",
];

export function defineHuitotoMyth({
  narrativeSource = "urbinaBook",
  contextSources = contextualSources,
  seoTitle,
  seoDescription,
  focusKeywords,
  sourceKeys,
  ...input
}) {
  // `sourceKeys` propias del mito sustituyen la lista compartida. Mientras un
  // mito no las declare sigue con la fuente narrativa más el contexto común.
  const selectedSources = pickHuitotoSources(
    ...(Array.isArray(sourceKeys) && sourceKeys.length
      ? sourceKeys
      : [narrativeSource, ...contextSources]),
  );
  if (selectedSources.length < 5) {
    throw new Error(`${input.slug}: ${selectedSources.length} fuentes, mínimo 5.`);
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
