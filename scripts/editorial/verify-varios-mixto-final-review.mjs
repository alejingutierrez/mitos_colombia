import process from "node:process";

import { variosMixtoFinalMedia } from "../../editorial/varios-mixto-final/media.mjs";
import records, {
  variosMixtoFinalMythsBySlug,
} from "../../editorial/varios-mixto-final/records.mjs";
import {
  canonicalVariosMixtoFinalSlugs,
  inheritedVariosMixtoFinalSlugs,
  reviewedVariosMixtoFinalSlugs,
  variosMixtoFinalTargetTaxonomyBySlug,
} from "../../editorial/varios-mixto-final/universe.mjs";
import { runCommunityEditorialVerifier } from "./lib/run-community-editorial-verifier.mjs";

runCommunityEditorialVerifier({
  communitySlug: "mixto",
  communityRegionSlug: "varios",
  skipCommunityProfile: true,
  allowPendingVisuals: true,
  provenancePath: "editorial/varios-mixto-final/provenance.json",
  records,
  recordsBySlug: variosMixtoFinalMythsBySlug,
  media: variosMixtoFinalMedia,
  inheritedSlugs: inheritedVariosMixtoFinalSlugs,
  canonicalSlugs: canonicalVariosMixtoFinalSlugs,
  reviewedSlugs: reviewedVariosMixtoFinalSlugs,
  universeScopeSlugs: inheritedVariosMixtoFinalSlugs,
  targetTaxonomyBySlug: variosMixtoFinalTargetTaxonomyBySlug,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 del cierre Varios Mixto como full illustration digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
