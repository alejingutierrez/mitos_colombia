import process from "node:process";

import { boyacaMestizoResidualMedia } from "../../editorial/boyaca-mestizo-residual/media.mjs";
import records, {
  boyacaMestizoResidualMythsBySlug,
} from "../../editorial/boyaca-mestizo-residual/records.mjs";
import {
  boyacaMestizoResidualTargetTaxonomyBySlug,
  canonicalBoyacaMestizoResidualSlugs,
  inheritedBoyacaMestizoResidualSlugs,
  reviewedBoyacaMestizoResidualSlugs,
} from "../../editorial/boyaca-mestizo-residual/universe.mjs";
import { runCommunityEditorialVerifier } from "./lib/run-community-editorial-verifier.mjs";

runCommunityEditorialVerifier({
  communitySlug: "mestizo",
  communityRegionSlug: "andina",
  skipCommunityProfile: true,
  allowPendingVisuals: true,
  provenancePath: "editorial/boyaca-mestizo-residual/provenance.json",
  records,
  recordsBySlug: boyacaMestizoResidualMythsBySlug,
  media: boyacaMestizoResidualMedia,
  inheritedSlugs: inheritedBoyacaMestizoResidualSlugs,
  canonicalSlugs: canonicalBoyacaMestizoResidualSlugs,
  reviewedSlugs: reviewedBoyacaMestizoResidualSlugs,
  universeScopeSlugs: reviewedBoyacaMestizoResidualSlugs,
  targetTaxonomyBySlug: boyacaMestizoResidualTargetTaxonomyBySlug,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 del residual Boyacá Mestizo como ilustración editorial digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
