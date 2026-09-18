const coordinates = {
  "la-viudita": { latitude: 1.21456, longitude: -77.27846 },
  "el-judio-errante": { latitude: 5.5353, longitude: -73.3678 },
  "el-bus-fantasma": { latitude: 4.570868, longitude: -74.297333 },
};

function pendingMedia(slug) {
  return {
    horizontal: `pending://varios-mestizo-final/${slug}/horizontal`,
    vertical: `pending://varios-mestizo-final/${slug}/vertical`,
    provenanceStatus: "pending",
    provider: "openai",
    model: "gpt-image-2",
    provenanceKeys: [`${slug}:horizontal`, `${slug}:vertical`],
    ...coordinates[slug],
  };
}

export const variosMestizoFinalMedia = Object.fromEntries(
  Object.keys(coordinates).map((slug) => [slug, pendingMedia(slug)]),
);
