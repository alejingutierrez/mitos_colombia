import process from "node:process";

import records from "../../editorial/caribe-mestizo-final/records.mjs";
import {
  canonicalCaribeMestizoFinalSlugs,
  caribeMestizoFinalTargetTaxonomyBySlug,
  inheritedCaribeMestizoFinalSlugs,
  reviewedCaribeMestizoFinalSlugs,
} from "../../editorial/caribe-mestizo-final/universe.mjs";
import { runCommunityEditorialSync } from "./lib/run-community-editorial-sync.mjs";

const expectedSourceCountsBySlug = Object.fromEntries(
  records.map((record) => [record.slug, record.keySources.length + record.sources.length]),
);

runCommunityEditorialSync({
  communitySlug: "mestizo",
  communityRegionSlug: "caribe",
  skipCommunityProfile: true,
  confirmationPhrase: "sync-caribe-mestizo-final-seventy-reviewed-routes",
  provenancePath: "editorial/caribe-mestizo-final/provenance.json",
  expectedSourceCountsBySlug,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 del cierre Caribe Mestizo como full illustration digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
  records,
  inheritedSlugs: inheritedCaribeMestizoFinalSlugs,
  canonicalSlugs: canonicalCaribeMestizoFinalSlugs,
  reviewedSlugs: reviewedCaribeMestizoFinalSlugs,
  universeScopeSlugs: inheritedCaribeMestizoFinalSlugs,
  targetTaxonomyBySlug: caribeMestizoFinalTargetTaxonomyBySlug,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
