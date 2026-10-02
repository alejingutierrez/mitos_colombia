import process from "node:process";

import { piedecuestaClasicosFinalMedia } from "../../editorial/piedecuesta-clasicos-final/media.mjs";
import records, {
  piedecuestaClasicosFinalMythsBySlug,
} from "../../editorial/piedecuesta-clasicos-final/records.mjs";
import {
  canonicalPiedecuestaClasicosFinalSlugs,
  inheritedPiedecuestaClasicosFinalSlugs,
  piedecuestaClasicosFinalTargetTaxonomyBySlug,
  reviewedPiedecuestaClasicosFinalSlugs,
} from "../../editorial/piedecuesta-clasicos-final/universe.mjs";
import { runCommunityEditorialVerifier } from "./lib/run-community-editorial-verifier.mjs";

runCommunityEditorialVerifier({
  communitySlug: "mestizo",
  communityRegionSlug: "andina",
  skipCommunityProfile: true,
  allowPendingVisuals: true,
  provenancePath:
    "editorial/piedecuesta-clasicos-final/provenance.json",
  records,
  recordsBySlug: piedecuestaClasicosFinalMythsBySlug,
  media: piedecuestaClasicosFinalMedia,
  inheritedSlugs: inheritedPiedecuestaClasicosFinalSlugs,
  canonicalSlugs: canonicalPiedecuestaClasicosFinalSlugs,
  reviewedSlugs: reviewedPiedecuestaClasicosFinalSlugs,
  universeScopeSlugs: canonicalPiedecuestaClasicosFinalSlugs,
  targetTaxonomyBySlug: piedecuestaClasicosFinalTargetTaxonomyBySlug,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 del ciclo clásico final de Piedecuesta como ilustración editorial digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
