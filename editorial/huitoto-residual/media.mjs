import { reviewedHuitotoResidualSlugs } from "./universe.mjs";

const predioPutumayoApproximate = {
  latitude: -1.24,
  longitude: -72.82,
};

function pendingMedia(slug) {
  return {
    horizontal: `pending://huitoto-residual/${slug}/horizontal`,
    vertical: `pending://huitoto-residual/${slug}/vertical`,
    provenanceStatus: "pending",
    provider: "openai",
    model: "gpt-image-2",
    provenanceKeys: [`${slug}:horizontal`, `${slug}:vertical`],
    ...predioPutumayoApproximate,
  };
}

export const huitotoResidualMedia = Object.fromEntries(
  reviewedHuitotoResidualSlugs.map((slug) => [slug, pendingMedia(slug)]),
);
