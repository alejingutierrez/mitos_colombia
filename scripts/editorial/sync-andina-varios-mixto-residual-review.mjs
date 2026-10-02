import process from "node:process";

import records from "../../editorial/andina-varios-mixto-residual/records.mjs";
import {
  andinaVariosMixtoResidualTargetTaxonomyBySlug,
  canonicalAndinaVariosMixtoResidualSlugs,
  inheritedAndinaVariosMixtoResidualSlugs,
  reviewedAndinaVariosMixtoResidualSlugs,
} from "../../editorial/andina-varios-mixto-residual/universe.mjs";
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
  confirmationPhrase: "sync-andina-varios-mixto-residual-three-reviewed-routes",
  provenancePath: "editorial/andina-varios-mixto-residual/provenance.json",
  expectedSourceCountsBySlug,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 del residual Andina Varios Mixto como ilustración editorial digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
  records,
  inheritedSlugs: inheritedAndinaVariosMixtoResidualSlugs,
  canonicalSlugs: canonicalAndinaVariosMixtoResidualSlugs,
  reviewedSlugs: reviewedAndinaVariosMixtoResidualSlugs,
  universeScopeSlugs: reviewedAndinaVariosMixtoResidualSlugs,
  targetTaxonomyBySlug: andinaVariosMixtoResidualTargetTaxonomyBySlug,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
