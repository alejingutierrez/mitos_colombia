const amazonasApproximate = {
  latitude: -1.18,
  longitude: -70.03,
};

const putumayoApproximate = {
  latitude: -1.15,
  longitude: -73.05,
};

function pendingMedia(slug, coordinates = amazonasApproximate) {
  return {
    horizontal: `pending://yucuna/${slug}/horizontal`,
    vertical: `pending://yucuna/${slug}/vertical`,
    provenanceStatus: "pending",
    provider: "openai",
    model: "gpt-image-2",
    provenanceKeys: [`${slug}:horizontal`, `${slug}:vertical`],
    ...coordinates,
  };
}

export const yucunaMedia = {
  kanuma: pendingMedia("kanuma"),
  "el-nacimiento-de-los-matapi": pendingMedia(
    "el-nacimiento-de-los-matapi",
  ),
  "karipu-lakena-y-la-primera-noche": pendingMedia(
    "karipu-lakena-y-la-primera-noche",
  ),
  "el-origen-de-las-frutas": pendingMedia(
    "el-origen-de-las-frutas",
    putumayoApproximate,
  ),
};
