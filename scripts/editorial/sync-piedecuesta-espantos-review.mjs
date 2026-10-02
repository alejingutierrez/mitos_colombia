import process from "node:process";

import records from "../../editorial/piedecuesta-espantos-y-entierros/records.mjs";
import {
  canonicalPiedecuestaEspantosSlugs,
  inheritedPiedecuestaEspantosSlugs,
  piedecuestaEspantosTargetTaxonomyBySlug,
  reviewedPiedecuestaEspantosSlugs,
} from "../../editorial/piedecuesta-espantos-y-entierros/universe.mjs";
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
  confirmationPhrase: "sync-piedecuesta-espantos-8-reviewed-routes",
  provenancePath:
    "editorial/piedecuesta-espantos-y-entierros/provenance.json",
  expectedSourceCountsBySlug,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 del frente Piedecuesta espantos y entierros como ilustración editorial digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
  records,
  inheritedSlugs: inheritedPiedecuestaEspantosSlugs,
  canonicalSlugs: canonicalPiedecuestaEspantosSlugs,
  reviewedSlugs: reviewedPiedecuestaEspantosSlugs,
  universeScopeSlugs: inheritedPiedecuestaEspantosSlugs,
  targetTaxonomyBySlug: piedecuestaEspantosTargetTaxonomyBySlug,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
