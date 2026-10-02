const coordinates = {
  "catalina-la-napanga": { latitude: 2.4448, longitude: -76.6147 },
  "el-hada-de-los-canaverales": { latitude: 3.4516, longitude: -76.532 },
  "el-silbo-de-quinunchu": { latitude: 6.781, longitude: -76.142 },
};

function pendingMedia(slug) {
  return {
    horizontal: `pending://andina-legacy-editorial-residual/${slug}/horizontal`,
    vertical: `pending://andina-legacy-editorial-residual/${slug}/vertical`,
    provenanceStatus: "pending",
    provider: "openai",
    model: "gpt-image-2",
    provenanceKeys: [`${slug}:horizontal`, `${slug}:vertical`],
    ...coordinates[slug],
  };
}

export const andinaLegacyEditorialResidualMedia = Object.fromEntries(
  Object.keys(coordinates).map((slug) => [slug, pendingMedia(slug)]),
);
