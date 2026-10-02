import process from "node:process";

import records from "../../editorial/tolima-mixto-residual/records.mjs";
import {
  canonicalTolimaMixtoResidualSlugs,
  inheritedTolimaMixtoResidualSlugs,
  reviewedTolimaMixtoResidualSlugs,
  tolimaMixtoResidualTargetTaxonomyBySlug,
} from "../../editorial/tolima-mixto-residual/universe.mjs";
import { runCommunityEditorialSync } from "./lib/run-community-editorial-sync.mjs";

const expectedSourceCountsBySlug = Object.fromEntries(
  records.map((record) => [
    record.slug,
    record.keySources.length + record.sources.length,
  ]),
);

runCommunityEditorialSync({
  communitySlug: "mixto",
  communityRegionSlug: "andina",
  skipCommunityProfile: true,
  confirmationPhrase: "sync-tolima-mixto-residual-eleven-reviewed-routes",
  provenancePath: "editorial/tolima-mixto-residual/provenance.json",
  expectedSourceCountsBySlug,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 del residual Tolima Mixto como ilustración editorial digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
  records,
  inheritedSlugs: inheritedTolimaMixtoResidualSlugs,
  canonicalSlugs: canonicalTolimaMixtoResidualSlugs,
  reviewedSlugs: reviewedTolimaMixtoResidualSlugs,
  universeScopeSlugs: reviewedTolimaMixtoResidualSlugs,
  targetTaxonomyBySlug: tolimaMixtoResidualTargetTaxonomyBySlug,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
