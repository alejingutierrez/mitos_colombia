const narrativeBoundary = `Esta ficha parafrasea una versión publicada y localizada. No añade diálogos, vestuario, fórmulas, procedimientos ceremoniales ni lugares precisos ausentes de la fuente, y no presenta la voz de un relator como doctrina total del pueblo Huitoto / Murui-Muina.`;

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
    mito: `${mito}\n\n${narrativeBoundary}`,
    excerpt: summary,
    seoTitle: resolvedSeoTitle,
    seoDescription: summary,
    focusKeywords,
  };
}
