const chocoApproximate = {
  latitude: 5.6947,
  longitude: -76.6611,
};

const tumacoApproximate = {
  latitude: 1.81,
  longitude: -78.76,
};

const beteApproximate = {
  latitude: 5.995,
  longitude: -76.782,
};

const buenaventuraApproximate = {
  latitude: 3.88,
  longitude: -77.02,
};

function pendingMedia(slug, coordinates = chocoApproximate) {
  return {
    horizontal: `pending://afrocolombianos/${slug}/horizontal`,
    vertical: `pending://afrocolombianos/${slug}/vertical`,
    provenanceStatus: "pending",
    provider: "openai",
    model: "gpt-image-2",
    provenanceKeys: [`${slug}:horizontal`, `${slug}:vertical`],
    ...coordinates,
  };
}

export const afrocolombianMedia = {
  anansi: pendingMedia("anansi"),
  "tulavieja-tunda": pendingMedia(
    "tulavieja-tunda",
    tumacoApproximate,
  ),
  "kijimba-de-las-animas": pendingMedia("kijimba-de-las-animas"),
  "la-sierpe-de-bete": pendingMedia(
    "la-sierpe-de-bete",
    beteApproximate,
  ),
  "el-riviel-del-rosario": pendingMedia(
    "el-riviel-del-rosario",
    buenaventuraApproximate,
  ),
  "como-aparecio-la-muerte-en-el-choco": pendingMedia(
    "como-aparecio-la-muerte-en-el-choco",
  ),
};
