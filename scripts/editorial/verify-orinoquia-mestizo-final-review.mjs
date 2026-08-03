import process from "node:process";

import { orinoquiaMestizoFinalMedia } from "../../editorial/orinoquia-mestizo-final/media.mjs";
import records, {
  orinoquiaMestizoFinalMythsBySlug,
} from "../../editorial/orinoquia-mestizo-final/records.mjs";
import {
  canonicalOrinoquiaMestizoFinalSlugs,
  inheritedOrinoquiaMestizoFinalSlugs,
  orinoquiaMestizoFinalTargetTaxonomyBySlug,
  reviewedOrinoquiaMestizoFinalSlugs,
} from "../../editorial/orinoquia-mestizo-final/universe.mjs";
import { runCommunityEditorialVerifier } from "./lib/run-community-editorial-verifier.mjs";

runCommunityEditorialVerifier({
  communitySlug: "mestizo",
  communityRegionSlug: "orinoquia",
  skipCommunityProfile: true,
  allowPendingVisuals: true,
  provenancePath: "editorial/orinoquia-mestizo-final/provenance.json",
  records,
  recordsBySlug: orinoquiaMestizoFinalMythsBySlug,
  media: orinoquiaMestizoFinalMedia,
  inheritedSlugs: inheritedOrinoquiaMestizoFinalSlugs,
  canonicalSlugs: canonicalOrinoquiaMestizoFinalSlugs,
  reviewedSlugs: reviewedOrinoquiaMestizoFinalSlugs,
  universeScopeSlugs: inheritedOrinoquiaMestizoFinalSlugs,
  targetTaxonomyBySlug: orinoquiaMestizoFinalTargetTaxonomyBySlug,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 del cierre Orinoquía Mestizo como full illustration digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
