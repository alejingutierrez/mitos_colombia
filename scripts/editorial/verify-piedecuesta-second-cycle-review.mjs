import process from "node:process";

import { piedecuestaSecondCycleMedia } from "../../editorial/piedecuesta-segundo-ciclo/media.mjs";
import records, {
  piedecuestaSecondCycleMythsBySlug,
} from "../../editorial/piedecuesta-segundo-ciclo/records.mjs";
import {
  canonicalPiedecuestaSecondCycleSlugs,
  inheritedPiedecuestaSecondCycleSlugs,
  piedecuestaSecondCycleTargetTaxonomyBySlug,
  reviewedPiedecuestaSecondCycleSlugs,
} from "../../editorial/piedecuesta-segundo-ciclo/universe.mjs";
import { runCommunityEditorialVerifier } from "./lib/run-community-editorial-verifier.mjs";

runCommunityEditorialVerifier({
  communitySlug: "mestizo",
  communityRegionSlug: "andina",
  skipCommunityProfile: true,
  allowPendingVisuals: true,
  provenancePath: "editorial/piedecuesta-segundo-ciclo/provenance.json",
  records,
  recordsBySlug: piedecuestaSecondCycleMythsBySlug,
  media: piedecuestaSecondCycleMedia,
  inheritedSlugs: inheritedPiedecuestaSecondCycleSlugs,
  canonicalSlugs: canonicalPiedecuestaSecondCycleSlugs,
  reviewedSlugs: reviewedPiedecuestaSecondCycleSlugs,
  universeScopeSlugs: canonicalPiedecuestaSecondCycleSlugs,
  targetTaxonomyBySlug: piedecuestaSecondCycleTargetTaxonomyBySlug,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 del segundo ciclo de Piedecuesta como ilustración editorial digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
