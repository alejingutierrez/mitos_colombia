import process from "node:process";

import { andinaLegacyEditorialResidualMedia } from "../../editorial/andina-legacy-editorial-residual/media.mjs";
import records, {
  andinaLegacyEditorialResidualMythsBySlug,
} from "../../editorial/andina-legacy-editorial-residual/records.mjs";
import {
  andinaLegacyEditorialResidualTargetTaxonomyBySlug,
  canonicalAndinaLegacyEditorialResidualSlugs,
  inheritedAndinaLegacyEditorialResidualSlugs,
  reviewedAndinaLegacyEditorialResidualSlugs,
} from "../../editorial/andina-legacy-editorial-residual/universe.mjs";
import { runCommunityEditorialVerifier } from "./lib/run-community-editorial-verifier.mjs";

runCommunityEditorialVerifier({
  communitySlug: "mestizo",
  communityRegionSlug: "andina",
  skipCommunityProfile: true,
  allowPendingVisuals: true,
  provenancePath:
    "editorial/andina-legacy-editorial-residual/provenance.json",
  records,
  recordsBySlug: andinaLegacyEditorialResidualMythsBySlug,
  media: andinaLegacyEditorialResidualMedia,
  inheritedSlugs: inheritedAndinaLegacyEditorialResidualSlugs,
  canonicalSlugs: canonicalAndinaLegacyEditorialResidualSlugs,
  reviewedSlugs: reviewedAndinaLegacyEditorialResidualSlugs,
  universeScopeSlugs: inheritedAndinaLegacyEditorialResidualSlugs,
  targetTaxonomyBySlug:
    andinaLegacyEditorialResidualTargetTaxonomyBySlug,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 del residual legacy editorial andino como full illustration digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
