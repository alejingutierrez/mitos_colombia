const coordinates = {
  "la-bruja-del-trinche": { latitude: 10.33, longitude: -73.25 },
  "la-sirena-de-hurtado": { latitude: 10.50145, longitude: -73.27089 },
};

function pendingMedia(slug) {
  return {
    horizontal: `pending://cesar-mestizo-residual/${slug}/horizontal`,
    vertical: `pending://cesar-mestizo-residual/${slug}/vertical`,
    provenanceStatus: "pending",
    provider: "openai",
    model: "gpt-image-2",
    provenanceKeys: [`${slug}:horizontal`, `${slug}:vertical`],
    ...coordinates[slug],
  };
}

export const cesarMestizoResidualMedia = Object.fromEntries(
  Object.keys(coordinates).map((slug) => [slug, pendingMedia(slug)]),
);
