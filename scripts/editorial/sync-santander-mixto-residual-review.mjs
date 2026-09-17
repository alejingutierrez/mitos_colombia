import process from "node:process";

import records from "../../editorial/santander-mixto-residual/records.mjs";
import {
  santanderMixtoResidualTargetTaxonomyBySlug,
  canonicalSantanderMixtoResidualSlugs,
  inheritedSantanderMixtoResidualSlugs,
  reviewedSantanderMixtoResidualSlugs,
} from "../../editorial/santander-mixto-residual/universe.mjs";
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
  confirmationPhrase: "sync-santander-mixto-residual-two-reviewed-routes",
  provenancePath: "editorial/santander-mixto-residual/provenance.json",
  expectedSourceCountsBySlug,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 del residual Santander Mixto como ilustración editorial digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
  records,
  inheritedSlugs: inheritedSantanderMixtoResidualSlugs,
  canonicalSlugs: canonicalSantanderMixtoResidualSlugs,
  reviewedSlugs: reviewedSantanderMixtoResidualSlugs,
  universeScopeSlugs: reviewedSantanderMixtoResidualSlugs,
  targetTaxonomyBySlug: santanderMixtoResidualTargetTaxonomyBySlug,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
