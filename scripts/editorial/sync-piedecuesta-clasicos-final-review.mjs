import process from "node:process";

import records from "../../editorial/piedecuesta-clasicos-final/records.mjs";
import {
  canonicalPiedecuestaClasicosFinalSlugs,
  inheritedPiedecuestaClasicosFinalSlugs,
  piedecuestaClasicosFinalTargetTaxonomyBySlug,
  reviewedPiedecuestaClasicosFinalSlugs,
} from "../../editorial/piedecuesta-clasicos-final/universe.mjs";
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
  confirmationPhrase:
    "sync-piedecuesta-clasicos-final-5-reviewed-routes",
  provenancePath:
    "editorial/piedecuesta-clasicos-final/provenance.json",
  expectedSourceCountsBySlug,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 del ciclo clásico final de Piedecuesta como ilustración editorial digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
  records,
  inheritedSlugs: inheritedPiedecuestaClasicosFinalSlugs,
  canonicalSlugs: canonicalPiedecuestaClasicosFinalSlugs,
  reviewedSlugs: reviewedPiedecuestaClasicosFinalSlugs,
  universeScopeSlugs: canonicalPiedecuestaClasicosFinalSlugs,
  targetTaxonomyBySlug: piedecuestaClasicosFinalTargetTaxonomyBySlug,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
