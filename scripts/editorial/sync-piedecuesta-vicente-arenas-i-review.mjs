import process from "node:process";

import records from "../../editorial/piedecuesta-vicente-arenas-i/records.mjs";
import {
  canonicalPiedecuestaVicenteArenasISlugs,
  inheritedPiedecuestaVicenteArenasISlugs,
  piedecuestaVicenteArenasITargetTaxonomyBySlug,
  reviewedPiedecuestaVicenteArenasISlugs,
} from "../../editorial/piedecuesta-vicente-arenas-i/universe.mjs";
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
    "sync-piedecuesta-vicente-arenas-i-8-reviewed-routes",
  provenancePath:
    "editorial/piedecuesta-vicente-arenas-i/provenance.json",
  expectedSourceCountsBySlug,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 del primer ciclo de Vicente Arenas en Piedecuesta como ilustración editorial digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
  records,
  inheritedSlugs: inheritedPiedecuestaVicenteArenasISlugs,
  canonicalSlugs: canonicalPiedecuestaVicenteArenasISlugs,
  reviewedSlugs: reviewedPiedecuestaVicenteArenasISlugs,
  universeScopeSlugs: canonicalPiedecuestaVicenteArenasISlugs,
  targetTaxonomyBySlug: piedecuestaVicenteArenasITargetTaxonomyBySlug,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
