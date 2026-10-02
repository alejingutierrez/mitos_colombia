import process from "node:process";

import records from "../../editorial/andina-varios-mestizo-residual/records.mjs";
import {
  andinaVariosMestizoResidualTargetTaxonomyBySlug,
  canonicalAndinaVariosMestizoResidualSlugs,
  inheritedAndinaVariosMestizoResidualSlugs,
  reviewedAndinaVariosMestizoResidualSlugs,
} from "../../editorial/andina-varios-mestizo-residual/universe.mjs";
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
  confirmationPhrase: "sync-andina-varios-mestizo-residual-five-reviewed-routes",
  provenancePath: "editorial/andina-varios-mestizo-residual/provenance.json",
  expectedSourceCountsBySlug,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 del residual Andina Varios Mestizo como ilustración editorial digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
  records,
  inheritedSlugs: inheritedAndinaVariosMestizoResidualSlugs,
  canonicalSlugs: canonicalAndinaVariosMestizoResidualSlugs,
  reviewedSlugs: reviewedAndinaVariosMestizoResidualSlugs,
  universeScopeSlugs: reviewedAndinaVariosMestizoResidualSlugs,
  targetTaxonomyBySlug: andinaVariosMestizoResidualTargetTaxonomyBySlug,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
