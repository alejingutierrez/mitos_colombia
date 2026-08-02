import process from "node:process";

import { cesarMestizoResidualMedia } from "../../editorial/cesar-mestizo-residual/media.mjs";
import records, {
  cesarMestizoResidualMythsBySlug,
} from "../../editorial/cesar-mestizo-residual/records.mjs";
import {
  cesarMestizoResidualTargetTaxonomyBySlug,
  canonicalCesarMestizoResidualSlugs,
  inheritedCesarMestizoResidualSlugs,
  reviewedCesarMestizoResidualSlugs,
} from "../../editorial/cesar-mestizo-residual/universe.mjs";
import { runCommunityEditorialVerifier } from "./lib/run-community-editorial-verifier.mjs";

runCommunityEditorialVerifier({
  communitySlug: "mestizo",
  communityRegionSlug: "caribe",
  skipCommunityProfile: true,
  allowPendingVisuals: true,
  provenancePath: "editorial/cesar-mestizo-residual/provenance.json",
  records,
  recordsBySlug: cesarMestizoResidualMythsBySlug,
  media: cesarMestizoResidualMedia,
  inheritedSlugs: inheritedCesarMestizoResidualSlugs,
  canonicalSlugs: canonicalCesarMestizoResidualSlugs,
  reviewedSlugs: reviewedCesarMestizoResidualSlugs,
  universeScopeSlugs: reviewedCesarMestizoResidualSlugs,
  targetTaxonomyBySlug: cesarMestizoResidualTargetTaxonomyBySlug,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 del residual Cesar Mestizo como ilustración editorial digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
