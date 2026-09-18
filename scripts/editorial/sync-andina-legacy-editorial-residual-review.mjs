import process from "node:process";

import records from "../../editorial/andina-legacy-editorial-residual/records.mjs";
import {
  andinaLegacyEditorialResidualTargetTaxonomyBySlug,
  canonicalAndinaLegacyEditorialResidualSlugs,
  inheritedAndinaLegacyEditorialResidualSlugs,
  reviewedAndinaLegacyEditorialResidualSlugs,
} from "../../editorial/andina-legacy-editorial-residual/universe.mjs";
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
    "sync-andina-legacy-editorial-residual-three-reviewed-routes",
  provenancePath:
    "editorial/andina-legacy-editorial-residual/provenance.json",
  expectedSourceCountsBySlug,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 del residual legacy editorial andino como full illustration digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
  records,
  inheritedSlugs: inheritedAndinaLegacyEditorialResidualSlugs,
  canonicalSlugs: canonicalAndinaLegacyEditorialResidualSlugs,
  reviewedSlugs: reviewedAndinaLegacyEditorialResidualSlugs,
  universeScopeSlugs: inheritedAndinaLegacyEditorialResidualSlugs,
  targetTaxonomyBySlug:
    andinaLegacyEditorialResidualTargetTaxonomyBySlug,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
