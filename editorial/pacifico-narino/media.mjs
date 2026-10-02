const coordinates = {
  "el-padre-mera": { latitude: 2.5708, longitude: -77.8854 },
  "chiles-y-cumbal": { latitude: 0.903, longitude: -77.904 },
  "el-diablo-chivo-de-rumichaca": {
    latitude: 0.811,
    longitude: -77.66,
  },
  "guagua-rayo": { latitude: 1.25, longitude: -77.36 },
  "la-totuma-de-la-cocha": { latitude: 1.108, longitude: -77.15 },
  "la-sirena-del-arco": { latitude: 1.81, longitude: -78.76 },
  "taita-galeras": { latitude: 1.22, longitude: -77.37 },
};

function pendingMedia(slug) {
  return {
    horizontal: `pending://pacifico-narino/${slug}/horizontal`,
    vertical: `pending://pacifico-narino/${slug}/vertical`,
    provenanceStatus: "pending",
    provider: "openai",
    model: "gpt-image-2",
    provenanceKeys: [`${slug}:horizontal`, `${slug}:vertical`],
    ...coordinates[slug],
  };
}

export const pacificoNarinoMedia = Object.fromEntries(
  Object.keys(coordinates).map((slug) => [slug, pendingMedia(slug)]),
);
