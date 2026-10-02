const coordinates = {
  "el-bufeo": { latitude: -4.215, longitude: -69.941 },
  "el-cotomachaco": { latitude: -4.215, longitude: -69.941 },
  "el-chuy-achaque": { latitude: -4.215, longitude: -69.941 },
  "madre-de-playa": { latitude: -4.215, longitude: -69.941 },
  "la-cobra-grande": { latitude: -4.215, longitude: -69.941 },
  petapeta: { latitude: -3.77, longitude: -70.383 },
  "la-curupira": { latitude: -4.15, longitude: -69.95 },
  "ngutapa-y-chimuiyae": { latitude: -3.76, longitude: -70.27 },
  yacuruna: { latitude: -3.744, longitude: -73.252 },
  "chuya-chaqui": { latitude: -4.215, longitude: -69.941 },
  "el-hijo-de-tuhixana": { latitude: 1.253, longitude: -70.234 },
  "el-descubrimiento-del-agua-y-los-peces": {
    latitude: -0.75,
    longitude: -70.7,
  },
};

function pendingMedia(slug) {
  return {
    horizontal: `pending://amazonas-mixto-residual/${slug}/horizontal`,
    vertical: `pending://amazonas-mixto-residual/${slug}/vertical`,
    provenanceStatus: "pending",
    provider: "openai",
    model: "gpt-image-2",
    provenanceKeys: [`${slug}:horizontal`, `${slug}:vertical`],
    ...coordinates[slug],
  };
}

export const amazonasMixtoResidualMedia = Object.fromEntries(
  Object.keys(coordinates).map((slug) => [slug, pendingMedia(slug)]),
);
