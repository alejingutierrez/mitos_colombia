import process from "node:process";

import records from "../../editorial/bogota-mestizo-memoria/records.mjs";
import {
  bogotaMestizoMemoryTargetTaxonomyBySlug,
  canonicalBogotaMestizoMemorySlugs,
  inheritedBogotaMestizoMemorySlugs,
  reviewedBogotaMestizoMemorySlugs,
} from "../../editorial/bogota-mestizo-memoria/universe.mjs";
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
  confirmationPhrase: "sync-bogota-mestizo-memory-8-reviewed-routes",
  provenancePath: "editorial/bogota-mestizo-memoria/provenance.json",
  expectedSourceCountsBySlug,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 del frente Bogotá mestizo memoria como ilustración editorial digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
  records,
  inheritedSlugs: inheritedBogotaMestizoMemorySlugs,
  canonicalSlugs: canonicalBogotaMestizoMemorySlugs,
  reviewedSlugs: reviewedBogotaMestizoMemorySlugs,
  universeScopeSlugs: inheritedBogotaMestizoMemorySlugs,
  targetTaxonomyBySlug: bogotaMestizoMemoryTargetTaxonomyBySlug,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
