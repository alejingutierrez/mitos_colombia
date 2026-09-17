import process from "node:process";

import { tolimaMixtoResidualMedia } from "../../editorial/tolima-mixto-residual/media.mjs";
import records, {
  tolimaMixtoResidualMythsBySlug,
} from "../../editorial/tolima-mixto-residual/records.mjs";
import {
  canonicalTolimaMixtoResidualSlugs,
  inheritedTolimaMixtoResidualSlugs,
  reviewedTolimaMixtoResidualSlugs,
  tolimaMixtoResidualTargetTaxonomyBySlug,
} from "../../editorial/tolima-mixto-residual/universe.mjs";
import { runCommunityEditorialVerifier } from "./lib/run-community-editorial-verifier.mjs";

runCommunityEditorialVerifier({
  communitySlug: "mixto",
  communityRegionSlug: "andina",
  skipCommunityProfile: true,
  allowPendingVisuals: true,
  provenancePath: "editorial/tolima-mixto-residual/provenance.json",
  records,
  recordsBySlug: tolimaMixtoResidualMythsBySlug,
  media: tolimaMixtoResidualMedia,
  inheritedSlugs: inheritedTolimaMixtoResidualSlugs,
  canonicalSlugs: canonicalTolimaMixtoResidualSlugs,
  reviewedSlugs: reviewedTolimaMixtoResidualSlugs,
  universeScopeSlugs: reviewedTolimaMixtoResidualSlugs,
  targetTaxonomyBySlug: tolimaMixtoResidualTargetTaxonomyBySlug,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 del residual Tolima Mixto como ilustración editorial digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
