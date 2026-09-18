import process from "node:process";

import records from "../../editorial/tolima-mestizo-residual/records.mjs";
import {
  canonicalTolimaMestizoResidualSlugs,
  inheritedTolimaMestizoResidualSlugs,
  reviewedTolimaMestizoResidualSlugs,
  tolimaMestizoResidualTargetTaxonomyBySlug,
} from "../../editorial/tolima-mestizo-residual/universe.mjs";
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
  confirmationPhrase: "sync-tolima-mestizo-residual-four-reviewed-routes",
  provenancePath: "editorial/tolima-mestizo-residual/provenance.json",
  expectedSourceCountsBySlug,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 del residual Tolima Mestizo como ilustración editorial digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
  records,
  inheritedSlugs: inheritedTolimaMestizoResidualSlugs,
  canonicalSlugs: canonicalTolimaMestizoResidualSlugs,
  reviewedSlugs: reviewedTolimaMestizoResidualSlugs,
  universeScopeSlugs: reviewedTolimaMestizoResidualSlugs,
  targetTaxonomyBySlug: tolimaMestizoResidualTargetTaxonomyBySlug,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
