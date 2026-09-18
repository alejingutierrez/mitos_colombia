import process from "node:process";

import records from "../../editorial/bogota-mestizo-nocturno/records.mjs";
import {
  bogotaMestizoNightTargetTaxonomyBySlug,
  canonicalBogotaMestizoNightSlugs,
  inheritedBogotaMestizoNightSlugs,
  reviewedBogotaMestizoNightSlugs,
} from "../../editorial/bogota-mestizo-nocturno/universe.mjs";
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
  confirmationPhrase: "sync-bogota-mestizo-night-8-reviewed-routes",
  provenancePath: "editorial/bogota-mestizo-nocturno/provenance.json",
  expectedSourceCountsBySlug,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 del frente Bogotá mestizo nocturno como ilustración editorial digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
  records,
  inheritedSlugs: inheritedBogotaMestizoNightSlugs,
  canonicalSlugs: canonicalBogotaMestizoNightSlugs,
  reviewedSlugs: reviewedBogotaMestizoNightSlugs,
  universeScopeSlugs: inheritedBogotaMestizoNightSlugs,
  targetTaxonomyBySlug: bogotaMestizoNightTargetTaxonomyBySlug,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
