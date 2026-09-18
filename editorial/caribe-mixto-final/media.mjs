const coordinates = {
  "beda-nansi-beda-monkey-y-el-molino": { latitude: 12.5535, longitude: -81.7176 },
  "mico-y-nansi": { latitude: 12.5535, longitude: -81.7176 },
  "tiger-y-el-baile-de-perros": { latitude: 12.5169, longitude: -81.7114 },
  "tigre-y-nansi": { latitude: 12.5535, longitude: -81.7176 },
  "un-perro-una-cabra-y-beda-tiger": { latitude: 12.5169, longitude: -81.7114 },
  "el-hombre-caiman": { latitude: 9.7903, longitude: -74.7824 },
};

function pendingMedia(slug) {
  return {
    horizontal: `pending://caribe-mixto-final/${slug}/horizontal`,
    vertical: `pending://caribe-mixto-final/${slug}/vertical`,
    provenanceStatus: "pending",
    provider: "openai",
    model: "gpt-image-2",
    provenanceKeys: [`${slug}:horizontal`, `${slug}:vertical`],
    ...coordinates[slug],
  };
}

export const caribeMixtoFinalMedia = Object.fromEntries(
  Object.keys(coordinates).map((slug) => [slug, pendingMedia(slug)]),
);
