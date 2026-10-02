import process from "node:process";

import records from "../../editorial/caldas-mestizo/records.mjs";
import {
  caldasMestizoTargetTaxonomyBySlug,
  canonicalCaldasMestizoSlugs,
  inheritedCaldasMestizoSlugs,
  reviewedCaldasMestizoSlugs,
} from "../../editorial/caldas-mestizo/universe.mjs";
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
  confirmationPhrase: "sync-caldas-mestizo-9-reviewed-routes",
  provenancePath: "editorial/caldas-mestizo/provenance.json",
  expectedSourceCountsBySlug,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 del frente Caldas mestizo como ilustración editorial digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
  records,
  inheritedSlugs: inheritedCaldasMestizoSlugs,
  canonicalSlugs: canonicalCaldasMestizoSlugs,
  reviewedSlugs: reviewedCaldasMestizoSlugs,
  universeScopeSlugs: inheritedCaldasMestizoSlugs,
  targetTaxonomyBySlug: caldasMestizoTargetTaxonomyBySlug,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
