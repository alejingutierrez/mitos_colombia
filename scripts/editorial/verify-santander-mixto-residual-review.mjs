import process from "node:process";

import { santanderMixtoResidualMedia } from "../../editorial/santander-mixto-residual/media.mjs";
import records, {
  santanderMixtoResidualMythsBySlug,
} from "../../editorial/santander-mixto-residual/records.mjs";
import {
  santanderMixtoResidualTargetTaxonomyBySlug,
  canonicalSantanderMixtoResidualSlugs,
  inheritedSantanderMixtoResidualSlugs,
  reviewedSantanderMixtoResidualSlugs,
} from "../../editorial/santander-mixto-residual/universe.mjs";
import { runCommunityEditorialVerifier } from "./lib/run-community-editorial-verifier.mjs";

runCommunityEditorialVerifier({
  communitySlug: "mixto",
  communityRegionSlug: "andina",
  skipCommunityProfile: true,
  allowPendingVisuals: true,
  provenancePath: "editorial/santander-mixto-residual/provenance.json",
  records,
  recordsBySlug: santanderMixtoResidualMythsBySlug,
  media: santanderMixtoResidualMedia,
  inheritedSlugs: inheritedSantanderMixtoResidualSlugs,
  canonicalSlugs: canonicalSantanderMixtoResidualSlugs,
  reviewedSlugs: reviewedSantanderMixtoResidualSlugs,
  universeScopeSlugs: reviewedSantanderMixtoResidualSlugs,
  targetTaxonomyBySlug: santanderMixtoResidualTargetTaxonomyBySlug,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 del residual Santander Mixto como ilustración editorial digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
