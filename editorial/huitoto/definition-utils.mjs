export function huitotoDefinition({
  title,
  summary,
  tags,
  mito,
  seoTitle,
  ...definition
}) {
  const resolvedSeoTitle = seoTitle || `${title} | Huitoto`;
  const focusKeywords = [title, "mitos Huitoto", ...tags.slice(0, 3)];
  return {
    ...definition,
    title,
    summary,
    tags,
    mito,
    excerpt: summary,
    seoTitle: resolvedSeoTitle,
    seoDescription: summary,
    focusKeywords,
  };
}
