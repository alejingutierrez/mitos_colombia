const coordinates = {
  "los-mensajeros-de-los-dioses": { latitude: 5.54, longitude: -72.89 },
  "el-cucacuy": { latitude: 5.02, longitude: -73.45 },
  "la-sombra-creadora": { latitude: 5.54, longitude: -74.11 },
  furatena: { latitude: 5.68, longitude: -74.02 },
};

function pendingMedia(slug) {
  return {
    horizontal: `pending://boyaca-mixto-residual/${slug}/horizontal`,
    vertical: `pending://boyaca-mixto-residual/${slug}/vertical`,
    provenanceStatus: "pending",
    provider: "openai",
    model: "gpt-image-2",
    provenanceKeys: [`${slug}:horizontal`, `${slug}:vertical`],
    ...coordinates[slug],
  };
}

export const boyacaMixtoResidualMedia = Object.fromEntries(
  Object.keys(coordinates).map((slug) => [slug, pendingMedia(slug)]),
);
