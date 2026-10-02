const serraniaPerijaApproximate = {
  latitude: 9.83,
  longitude: -73.05,
};

function pendingMedia(slug) {
  return {
    horizontal: `pending://yukpa/${slug}/horizontal`,
    vertical: `pending://yukpa/${slug}/vertical`,
    provenanceStatus: "pending",
    provider: "openai",
    model: "gpt-image-2",
    provenanceKeys: [`${slug}:horizontal`, `${slug}:vertical`],
    ...serraniaPerijaApproximate,
  };
}

export const yukpaMedia = Object.fromEntries(
  [
    "la-piedra-que-flota",
    "los-dos-caminos-del-cielo",
    "aponto-y-el-arbol-manurhacha",
    "los-gemelos-yirhwach-y-las-constelaciones",
    "me-el-dueno-del-maiz",
  ].map((slug) => [slug, pendingMedia(slug)]),
);
