import process from "node:process";

import { variosMestizoFinalMedia } from "../../editorial/varios-mestizo-final/media.mjs";
import records, {
  variosMestizoFinalMythsBySlug,
} from "../../editorial/varios-mestizo-final/records.mjs";
import {
  canonicalVariosMestizoFinalSlugs,
  inheritedVariosMestizoFinalSlugs,
  reviewedVariosMestizoFinalSlugs,
  variosMestizoFinalTargetTaxonomyBySlug,
} from "../../editorial/varios-mestizo-final/universe.mjs";
import { runCommunityEditorialVerifier } from "./lib/run-community-editorial-verifier.mjs";

runCommunityEditorialVerifier({
  communitySlug: "mestizo",
  communityRegionSlug: "varios",
  skipCommunityProfile: true,
  allowPendingVisuals: true,
  provenancePath: "editorial/varios-mestizo-final/provenance.json",
  records,
  recordsBySlug: variosMestizoFinalMythsBySlug,
  media: variosMestizoFinalMedia,
  inheritedSlugs: inheritedVariosMestizoFinalSlugs,
  canonicalSlugs: canonicalVariosMestizoFinalSlugs,
  reviewedSlugs: reviewedVariosMestizoFinalSlugs,
  universeScopeSlugs: inheritedVariosMestizoFinalSlugs,
  targetTaxonomyBySlug: variosMestizoFinalTargetTaxonomyBySlug,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 del cierre Varios Mestizo como full illustration digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
