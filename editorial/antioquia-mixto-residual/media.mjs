const coordinates = {
  "el-patetarro": { latitude: 6.5, longitude: -75.5 },
  "el-mareco": { latitude: 6.25, longitude: -75.57 },
};

function pendingMedia(slug) {
  return {
    horizontal: `pending://antioquia-mixto-residual/${slug}/horizontal`,
    vertical: `pending://antioquia-mixto-residual/${slug}/vertical`,
    provenanceStatus: "pending",
    provider: "openai",
    model: "gpt-image-2",
    provenanceKeys: [`${slug}:horizontal`, `${slug}:vertical`],
    ...coordinates[slug],
  };
}

export const antioquiaMixtoResidualMedia = Object.fromEntries(
  Object.keys(coordinates).map((slug) => [slug, pendingMedia(slug)]),
);
