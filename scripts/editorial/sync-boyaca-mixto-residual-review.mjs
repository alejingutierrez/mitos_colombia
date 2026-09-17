import process from "node:process";

import records from "../../editorial/boyaca-mixto-residual/records.mjs";
import {
  boyacaMixtoResidualTargetTaxonomyBySlug,
  canonicalBoyacaMixtoResidualSlugs,
  inheritedBoyacaMixtoResidualSlugs,
  reviewedBoyacaMixtoResidualSlugs,
} from "../../editorial/boyaca-mixto-residual/universe.mjs";
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
  confirmationPhrase: "sync-boyaca-mixto-residual-four-reviewed-routes",
  provenancePath: "editorial/boyaca-mixto-residual/provenance.json",
  expectedSourceCountsBySlug,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 del residual Boyacá Mixto como ilustración editorial digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
  records,
  inheritedSlugs: inheritedBoyacaMixtoResidualSlugs,
  canonicalSlugs: canonicalBoyacaMixtoResidualSlugs,
  reviewedSlugs: reviewedBoyacaMixtoResidualSlugs,
  universeScopeSlugs: reviewedBoyacaMixtoResidualSlugs,
  targetTaxonomyBySlug: boyacaMixtoResidualTargetTaxonomyBySlug,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
