import { reviewedTicunaResidualSlugs } from "./universe.mjs";

const trapecioAmazonicoApproximate = {
  latitude: -3.76,
  longitude: -70.27,
};

function pendingMedia(slug) {
  return {
    horizontal: `pending://ticuna-residual/${slug}/horizontal`,
    vertical: `pending://ticuna-residual/${slug}/vertical`,
    provenanceStatus: "pending",
    provider: "openai",
    model: "gpt-image-2",
    provenanceKeys: [`${slug}:horizontal`, `${slug}:vertical`],
    ...trapecioAmazonicoApproximate,
  };
}

export const ticunaResidualMedia = Object.fromEntries(
  reviewedTicunaResidualSlugs.map((slug) => [slug, pendingMedia(slug)]),
);
