import process from "node:process";

import { antioquiaMixtoResidualMedia } from "../../editorial/antioquia-mixto-residual/media.mjs";
import records, {
  antioquiaMixtoResidualMythsBySlug,
} from "../../editorial/antioquia-mixto-residual/records.mjs";
import {
  antioquiaMixtoResidualTargetTaxonomyBySlug,
  canonicalAntioquiaMixtoResidualSlugs,
  inheritedAntioquiaMixtoResidualSlugs,
  reviewedAntioquiaMixtoResidualSlugs,
} from "../../editorial/antioquia-mixto-residual/universe.mjs";
import { runCommunityEditorialVerifier } from "./lib/run-community-editorial-verifier.mjs";

runCommunityEditorialVerifier({
  communitySlug: "mixto",
  communityRegionSlug: "andina",
  skipCommunityProfile: true,
  allowPendingVisuals: true,
  provenancePath: "editorial/antioquia-mixto-residual/provenance.json",
  records,
  recordsBySlug: antioquiaMixtoResidualMythsBySlug,
  media: antioquiaMixtoResidualMedia,
  inheritedSlugs: inheritedAntioquiaMixtoResidualSlugs,
  canonicalSlugs: canonicalAntioquiaMixtoResidualSlugs,
  reviewedSlugs: reviewedAntioquiaMixtoResidualSlugs,
  universeScopeSlugs: reviewedAntioquiaMixtoResidualSlugs,
  targetTaxonomyBySlug: antioquiaMixtoResidualTargetTaxonomyBySlug,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 del residual Antioquia Mixto como ilustración editorial digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
