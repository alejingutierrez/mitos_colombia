const coordinates = {
  "el-cura-sin-cabeza": { latitude: 1.2136, longitude: -77.2811 },
  "el-jinete-negro": { latitude: 5.5446, longitude: -73.3576 },
  "el-mandingas": { latitude: 10.391, longitude: -75.4794 },
  "el-mohan": { latitude: 5.2086, longitude: -74.7358 },
  "la-llorona": { latitude: 3.8587, longitude: -74.9313 },
  "la-madremonte": { latitude: 4.4389, longitude: -75.2322 },
  "los-duendes": { latitude: 4.7841, longitude: -74.7627 },
};

function pendingMedia(slug) {
  return {
    horizontal: `pending://varios-mixto-final/${slug}/horizontal`,
    vertical: `pending://varios-mixto-final/${slug}/vertical`,
    provenanceStatus: "pending",
    provider: "openai",
    model: "gpt-image-2",
    provenanceKeys: [`${slug}:horizontal`, `${slug}:vertical`],
    ...coordinates[slug],
  };
}

export const variosMixtoFinalMedia = Object.fromEntries(
  Object.keys(coordinates).map((slug) => [slug, pendingMedia(slug)]),
);
