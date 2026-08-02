import process from "node:process";

import { tolimaMestizoResidualMedia } from "../../editorial/tolima-mestizo-residual/media.mjs";
import records, {
  tolimaMestizoResidualMythsBySlug,
} from "../../editorial/tolima-mestizo-residual/records.mjs";
import {
  canonicalTolimaMestizoResidualSlugs,
  inheritedTolimaMestizoResidualSlugs,
  reviewedTolimaMestizoResidualSlugs,
  tolimaMestizoResidualTargetTaxonomyBySlug,
} from "../../editorial/tolima-mestizo-residual/universe.mjs";
import { runCommunityEditorialVerifier } from "./lib/run-community-editorial-verifier.mjs";

runCommunityEditorialVerifier({
  communitySlug: "mestizo",
  communityRegionSlug: "andina",
  skipCommunityProfile: true,
  allowPendingVisuals: true,
  provenancePath: "editorial/tolima-mestizo-residual/provenance.json",
  records,
  recordsBySlug: tolimaMestizoResidualMythsBySlug,
  media: tolimaMestizoResidualMedia,
  inheritedSlugs: inheritedTolimaMestizoResidualSlugs,
  canonicalSlugs: canonicalTolimaMestizoResidualSlugs,
  reviewedSlugs: reviewedTolimaMestizoResidualSlugs,
  universeScopeSlugs: reviewedTolimaMestizoResidualSlugs,
  targetTaxonomyBySlug: tolimaMestizoResidualTargetTaxonomyBySlug,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 del residual Tolima Mestizo como ilustración editorial digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
