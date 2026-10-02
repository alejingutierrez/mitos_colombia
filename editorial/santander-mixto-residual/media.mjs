const coordinates = {
  talabad: { latitude: 7.06, longitude: -73.1 },
  "el-ermitano-iracundo": { latitude: 8.24, longitude: -73.36 },
};

function pendingMedia(slug) {
  return {
    horizontal: `pending://santander-mixto-residual/${slug}/horizontal`,
    vertical: `pending://santander-mixto-residual/${slug}/vertical`,
    provenanceStatus: "pending",
    provider: "openai",
    model: "gpt-image-2",
    provenanceKeys: [`${slug}:horizontal`, `${slug}:vertical`],
    ...coordinates[slug],
  };
}

export const santanderMixtoResidualMedia = Object.fromEntries(
  Object.keys(coordinates).map((slug) => [slug, pendingMedia(slug)]),
);
