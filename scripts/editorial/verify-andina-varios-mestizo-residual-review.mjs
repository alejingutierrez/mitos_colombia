import process from "node:process";

import { andinaVariosMestizoResidualMedia } from "../../editorial/andina-varios-mestizo-residual/media.mjs";
import records, {
  andinaVariosMestizoResidualMythsBySlug,
} from "../../editorial/andina-varios-mestizo-residual/records.mjs";
import {
  andinaVariosMestizoResidualTargetTaxonomyBySlug,
  canonicalAndinaVariosMestizoResidualSlugs,
  inheritedAndinaVariosMestizoResidualSlugs,
  reviewedAndinaVariosMestizoResidualSlugs,
} from "../../editorial/andina-varios-mestizo-residual/universe.mjs";
import { runCommunityEditorialVerifier } from "./lib/run-community-editorial-verifier.mjs";

runCommunityEditorialVerifier({
  communitySlug: "mestizo",
  communityRegionSlug: "andina",
  skipCommunityProfile: true,
  allowPendingVisuals: true,
  provenancePath: "editorial/andina-varios-mestizo-residual/provenance.json",
  records,
  recordsBySlug: andinaVariosMestizoResidualMythsBySlug,
  media: andinaVariosMestizoResidualMedia,
  inheritedSlugs: inheritedAndinaVariosMestizoResidualSlugs,
  canonicalSlugs: canonicalAndinaVariosMestizoResidualSlugs,
  reviewedSlugs: reviewedAndinaVariosMestizoResidualSlugs,
  universeScopeSlugs: reviewedAndinaVariosMestizoResidualSlugs,
  targetTaxonomyBySlug: andinaVariosMestizoResidualTargetTaxonomyBySlug,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 del residual Andina Varios Mestizo como ilustración editorial digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
