import process from "node:process";

import records from "../../editorial/piedecuesta-segundo-ciclo/records.mjs";
import {
  canonicalPiedecuestaSecondCycleSlugs,
  inheritedPiedecuestaSecondCycleSlugs,
  piedecuestaSecondCycleTargetTaxonomyBySlug,
  reviewedPiedecuestaSecondCycleSlugs,
} from "../../editorial/piedecuesta-segundo-ciclo/universe.mjs";
import { runCommunityEditorialSync } from "./lib/run-community-editorial-sync.mjs";

const expectedSourceCountsBySlug = Object.fromEntries(
  records.map((record) => [
    record.slug,
    record.keySources.length + record.sources.length,
  ]),
);

runCommunityEditorialSync({
  communitySlug: "mestizo",
  communityRegionSlug: "andina",
  skipCommunityProfile: true,
  confirmationPhrase: "sync-piedecuesta-second-cycle-8-reviewed-routes",
  provenancePath: "editorial/piedecuesta-segundo-ciclo/provenance.json",
  expectedSourceCountsBySlug,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 del segundo ciclo de Piedecuesta como ilustración editorial digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
  records,
  inheritedSlugs: inheritedPiedecuestaSecondCycleSlugs,
  canonicalSlugs: canonicalPiedecuestaSecondCycleSlugs,
  reviewedSlugs: reviewedPiedecuestaSecondCycleSlugs,
  universeScopeSlugs: canonicalPiedecuestaSecondCycleSlugs,
  targetTaxonomyBySlug: piedecuestaSecondCycleTargetTaxonomyBySlug,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
