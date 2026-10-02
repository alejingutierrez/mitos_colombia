import process from "node:process";

import { caribeMixtoFinalMedia } from "../../editorial/caribe-mixto-final/media.mjs";
import records, {
  caribeMixtoFinalMythsBySlug,
} from "../../editorial/caribe-mixto-final/records.mjs";
import {
  canonicalCaribeMixtoFinalSlugs,
  caribeMixtoFinalTargetTaxonomyBySlug,
  inheritedCaribeMixtoFinalSlugs,
  reviewedCaribeMixtoFinalSlugs,
} from "../../editorial/caribe-mixto-final/universe.mjs";
import { runCommunityEditorialVerifier } from "./lib/run-community-editorial-verifier.mjs";

runCommunityEditorialVerifier({
  communitySlug: "mixto",
  communityRegionSlug: "caribe",
  skipCommunityProfile: true,
  allowPendingVisuals: true,
  provenancePath: "editorial/caribe-mixto-final/provenance.json",
  records,
  recordsBySlug: caribeMixtoFinalMythsBySlug,
  media: caribeMixtoFinalMedia,
  inheritedSlugs: inheritedCaribeMixtoFinalSlugs,
  canonicalSlugs: canonicalCaribeMixtoFinalSlugs,
  reviewedSlugs: reviewedCaribeMixtoFinalSlugs,
  universeScopeSlugs: inheritedCaribeMixtoFinalSlugs,
  targetTaxonomyBySlug: caribeMixtoFinalTargetTaxonomyBySlug,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 del cierre Caribe Mixto como full illustration digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
