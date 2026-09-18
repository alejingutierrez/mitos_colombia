import process from "node:process";

import records from "../../editorial/varios-mestizo-final/records.mjs";
import {
  canonicalVariosMestizoFinalSlugs,
  inheritedVariosMestizoFinalSlugs,
  reviewedVariosMestizoFinalSlugs,
  variosMestizoFinalTargetTaxonomyBySlug,
} from "../../editorial/varios-mestizo-final/universe.mjs";
import { runCommunityEditorialSync } from "./lib/run-community-editorial-sync.mjs";

const expectedSourceCountsBySlug = Object.fromEntries(
  records.map((record) => [
    record.slug,
    record.keySources.length + record.sources.length,
  ]),
);

runCommunityEditorialSync({
  communitySlug: "mestizo",
  communityRegionSlug: "varios",
  skipCommunityProfile: true,
  confirmationPhrase: "sync-varios-mestizo-final-three-reviewed-routes",
  provenancePath: "editorial/varios-mestizo-final/provenance.json",
  expectedSourceCountsBySlug,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 del cierre Varios Mestizo como full illustration digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
  records,
  inheritedSlugs: inheritedVariosMestizoFinalSlugs,
  canonicalSlugs: canonicalVariosMestizoFinalSlugs,
  reviewedSlugs: reviewedVariosMestizoFinalSlugs,
  universeScopeSlugs: inheritedVariosMestizoFinalSlugs,
  targetTaxonomyBySlug: variosMestizoFinalTargetTaxonomyBySlug,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
