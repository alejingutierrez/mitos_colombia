const colombianAmazonApproximate = {
  latitude: -3.73,
  longitude: -70.22,
};

function pendingMedia(slug) {
  return {
    horizontal: `pending://yagua/${slug}/horizontal`,
    vertical: `pending://yagua/${slug}/vertical`,
    provenanceStatus: "pending",
    provider: "openai",
    model: "gpt-image-2",
    provenanceKeys: [`${slug}:horizontal`, `${slug}:vertical`],
    ...colombianAmazonApproximate,
  };
}

export const yaguaMedia = {
  yagua: pendingMedia("yagua"),
  "luna-y-sol-yagua": pendingMedia("luna-y-sol-yagua"),
  "tortuga-y-jaguar-yagua": pendingMedia("tortuga-y-jaguar-yagua"),
  "el-huerfano-yagua": pendingMedia("el-huerfano-yagua"),
  "el-calvito-yagua": pendingMedia("el-calvito-yagua"),
  "los-mellizos-de-avispa-yagua": pendingMedia(
    "los-mellizos-de-avispa-yagua",
  ),
  chimbilaco: pendingMedia("chimbilaco"),
};
