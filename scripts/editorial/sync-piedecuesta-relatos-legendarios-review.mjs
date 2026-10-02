import process from "node:process";

import records from "../../editorial/piedecuesta-relatos-legendarios/records.mjs";
import {
  canonicalPiedecuestaLegendaryAccountsSlugs,
  inheritedPiedecuestaLegendaryAccountsSlugs,
  piedecuestaLegendaryAccountsTargetTaxonomyBySlug,
  reviewedPiedecuestaLegendaryAccountsSlugs,
} from "../../editorial/piedecuesta-relatos-legendarios/universe.mjs";
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
    "sync-piedecuesta-relatos-legendarios-4-reviewed-routes",
  provenancePath:
    "editorial/piedecuesta-relatos-legendarios/provenance.json",
  expectedSourceCountsBySlug,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 de los relatos legendarios de Piedecuesta como ilustración editorial digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
  records,
  inheritedSlugs: inheritedPiedecuestaLegendaryAccountsSlugs,
  canonicalSlugs: canonicalPiedecuestaLegendaryAccountsSlugs,
  reviewedSlugs: reviewedPiedecuestaLegendaryAccountsSlugs,
  universeScopeSlugs: canonicalPiedecuestaLegendaryAccountsSlugs,
  targetTaxonomyBySlug:
    piedecuestaLegendaryAccountsTargetTaxonomyBySlug,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
