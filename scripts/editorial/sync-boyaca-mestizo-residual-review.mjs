import process from "node:process";

import records from "../../editorial/boyaca-mestizo-residual/records.mjs";
import {
  boyacaMestizoResidualTargetTaxonomyBySlug,
  canonicalBoyacaMestizoResidualSlugs,
  inheritedBoyacaMestizoResidualSlugs,
  reviewedBoyacaMestizoResidualSlugs,
} from "../../editorial/boyaca-mestizo-residual/universe.mjs";
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
  confirmationPhrase: "sync-boyaca-mestizo-residual-one-reviewed-route",
  provenancePath: "editorial/boyaca-mestizo-residual/provenance.json",
  expectedSourceCountsBySlug,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 del residual Boyacá Mestizo como ilustración editorial digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
  records,
  inheritedSlugs: inheritedBoyacaMestizoResidualSlugs,
  canonicalSlugs: canonicalBoyacaMestizoResidualSlugs,
  reviewedSlugs: reviewedBoyacaMestizoResidualSlugs,
  universeScopeSlugs: reviewedBoyacaMestizoResidualSlugs,
  targetTaxonomyBySlug: boyacaMestizoResidualTargetTaxonomyBySlug,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
