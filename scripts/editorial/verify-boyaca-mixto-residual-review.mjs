import process from "node:process";

import { boyacaMixtoResidualMedia } from "../../editorial/boyaca-mixto-residual/media.mjs";
import records, {
  boyacaMixtoResidualMythsBySlug,
} from "../../editorial/boyaca-mixto-residual/records.mjs";
import {
  boyacaMixtoResidualTargetTaxonomyBySlug,
  canonicalBoyacaMixtoResidualSlugs,
  inheritedBoyacaMixtoResidualSlugs,
  reviewedBoyacaMixtoResidualSlugs,
} from "../../editorial/boyaca-mixto-residual/universe.mjs";
import { runCommunityEditorialVerifier } from "./lib/run-community-editorial-verifier.mjs";

runCommunityEditorialVerifier({
  communitySlug: "mixto",
  communityRegionSlug: "andina",
  skipCommunityProfile: true,
  allowPendingVisuals: true,
  provenancePath: "editorial/boyaca-mixto-residual/provenance.json",
  records,
  recordsBySlug: boyacaMixtoResidualMythsBySlug,
  media: boyacaMixtoResidualMedia,
  inheritedSlugs: inheritedBoyacaMixtoResidualSlugs,
  canonicalSlugs: canonicalBoyacaMixtoResidualSlugs,
  reviewedSlugs: reviewedBoyacaMixtoResidualSlugs,
  universeScopeSlugs: reviewedBoyacaMixtoResidualSlugs,
  targetTaxonomyBySlug: boyacaMixtoResidualTargetTaxonomyBySlug,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 del residual Boyacá Mixto como ilustración editorial digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
