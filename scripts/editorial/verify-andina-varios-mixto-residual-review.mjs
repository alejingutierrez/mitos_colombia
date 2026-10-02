import process from "node:process";

import { andinaVariosMixtoResidualMedia } from "../../editorial/andina-varios-mixto-residual/media.mjs";
import records, {
  andinaVariosMixtoResidualMythsBySlug,
} from "../../editorial/andina-varios-mixto-residual/records.mjs";
import {
  andinaVariosMixtoResidualTargetTaxonomyBySlug,
  canonicalAndinaVariosMixtoResidualSlugs,
  inheritedAndinaVariosMixtoResidualSlugs,
  reviewedAndinaVariosMixtoResidualSlugs,
} from "../../editorial/andina-varios-mixto-residual/universe.mjs";
import { runCommunityEditorialVerifier } from "./lib/run-community-editorial-verifier.mjs";

runCommunityEditorialVerifier({
  communitySlug: "mixto",
  communityRegionSlug: "andina",
  skipCommunityProfile: true,
  allowPendingVisuals: true,
  provenancePath: "editorial/andina-varios-mixto-residual/provenance.json",
  records,
  recordsBySlug: andinaVariosMixtoResidualMythsBySlug,
  media: andinaVariosMixtoResidualMedia,
  inheritedSlugs: inheritedAndinaVariosMixtoResidualSlugs,
  canonicalSlugs: canonicalAndinaVariosMixtoResidualSlugs,
  reviewedSlugs: reviewedAndinaVariosMixtoResidualSlugs,
  universeScopeSlugs: reviewedAndinaVariosMixtoResidualSlugs,
  targetTaxonomyBySlug: andinaVariosMixtoResidualTargetTaxonomyBySlug,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 del residual Andina Varios Mixto como ilustración editorial digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
