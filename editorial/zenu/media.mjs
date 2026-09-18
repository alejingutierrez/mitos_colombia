const sanAndresSotaventoApproximate = {
  latitude: 9.145,
  longitude: -75.509,
};

const laSierpeApproximate = {
  latitude: 8.89,
  longitude: -75.22,
};

const cordobaFolkloreApproximate = {
  latitude: 8.75,
  longitude: -75.88,
};

function pendingMedia(slug, coordinates = sanAndresSotaventoApproximate) {
  return {
    horizontal: `pending://zenu/${slug}/horizontal`,
    vertical: `pending://zenu/${slug}/vertical`,
    provenanceStatus: "pending",
    provider: "openai",
    model: "gpt-image-2",
    provenanceKeys: [`${slug}:horizontal`, `${slug}:vertical`],
    ...coordinates,
  };
}

export const zenuMedia = {
  "mexion-y-manexca": pendingMedia("mexion-y-manexca"),
  "la-noche-mas-larga": pendingMedia("la-noche-mas-larga"),
  "el-caiman-de-oro": pendingMedia("el-caiman-de-oro"),
  "trono-corcovao": pendingMedia("trono-corcovao"),
  "el-ojo-de-la-canoa": pendingMedia(
    "el-ojo-de-la-canoa",
    laSierpeApproximate,
  ),
  "el-totumo-de-oro": pendingMedia("el-totumo-de-oro"),
  "juan-lara-y-la-trenza-del-aire": pendingMedia(
    "juan-lara-y-la-trenza-del-aire",
    cordobaFolkloreApproximate,
  ),
};
