import process from "node:process";

import { caribeMestizoFinalMedia } from "../../editorial/caribe-mestizo-final/media.mjs";
import records, { caribeMestizoFinalMythsBySlug } from "../../editorial/caribe-mestizo-final/records.mjs";
import {
  canonicalCaribeMestizoFinalSlugs,
  caribeMestizoFinalTargetTaxonomyBySlug,
  inheritedCaribeMestizoFinalSlugs,
  reviewedCaribeMestizoFinalSlugs,
} from "../../editorial/caribe-mestizo-final/universe.mjs";
import { runCommunityEditorialVerifier } from "./lib/run-community-editorial-verifier.mjs";

runCommunityEditorialVerifier({
  communitySlug: "mestizo",
  communityRegionSlug: "caribe",
  skipCommunityProfile: true,
  allowPendingVisuals: true,
  provenancePath: "editorial/caribe-mestizo-final/provenance.json",
  records,
  recordsBySlug: caribeMestizoFinalMythsBySlug,
  media: caribeMestizoFinalMedia,
  inheritedSlugs: inheritedCaribeMestizoFinalSlugs,
  canonicalSlugs: canonicalCaribeMestizoFinalSlugs,
  reviewedSlugs: reviewedCaribeMestizoFinalSlugs,
  universeScopeSlugs: inheritedCaribeMestizoFinalSlugs,
  targetTaxonomyBySlug: caribeMestizoFinalTargetTaxonomyBySlug,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 del cierre Caribe Mestizo como full illustration digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
