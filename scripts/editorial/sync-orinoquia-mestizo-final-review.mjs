import process from "node:process";

import records from "../../editorial/orinoquia-mestizo-final/records.mjs";
import {
  canonicalOrinoquiaMestizoFinalSlugs,
  inheritedOrinoquiaMestizoFinalSlugs,
  orinoquiaMestizoFinalTargetTaxonomyBySlug,
  reviewedOrinoquiaMestizoFinalSlugs,
} from "../../editorial/orinoquia-mestizo-final/universe.mjs";
import { runCommunityEditorialSync } from "./lib/run-community-editorial-sync.mjs";

const expectedSourceCountsBySlug = Object.fromEntries(
  records.map((record) => [
    record.slug,
    record.keySources.length + record.sources.length,
  ]),
);

runCommunityEditorialSync({
  communitySlug: "mestizo",
  communityRegionSlug: "orinoquia",
  skipCommunityProfile: true,
  confirmationPhrase: "sync-orinoquia-mestizo-final-nineteen-reviewed-routes",
  provenancePath: "editorial/orinoquia-mestizo-final/provenance.json",
  expectedSourceCountsBySlug,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 del cierre Orinoquía Mestizo como full illustration digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
  records,
  inheritedSlugs: inheritedOrinoquiaMestizoFinalSlugs,
  canonicalSlugs: canonicalOrinoquiaMestizoFinalSlugs,
  reviewedSlugs: reviewedOrinoquiaMestizoFinalSlugs,
  universeScopeSlugs: inheritedOrinoquiaMestizoFinalSlugs,
  targetTaxonomyBySlug: orinoquiaMestizoFinalTargetTaxonomyBySlug,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
