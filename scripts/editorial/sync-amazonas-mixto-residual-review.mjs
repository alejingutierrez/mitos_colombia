import process from "node:process";

import records from "../../editorial/amazonas-mixto-residual/records.mjs";
import {
  amazonasMixtoResidualTargetTaxonomyBySlug,
  canonicalAmazonasMixtoResidualSlugs,
  inheritedAmazonasMixtoResidualSlugs,
  reviewedAmazonasMixtoResidualSlugs,
} from "../../editorial/amazonas-mixto-residual/universe.mjs";
import { runCommunityEditorialSync } from "./lib/run-community-editorial-sync.mjs";

const expectedSourceCountsBySlug = Object.fromEntries(
  records.map((record) => [
    record.slug,
    record.keySources.length + record.sources.length,
  ]),
);

runCommunityEditorialSync({
  communitySlug: "mixto",
  communityRegionSlug: "amazonas",
  skipCommunityProfile: true,
  confirmationPhrase: "sync-amazonas-mixto-twelve-residual-routes",
  provenancePath: "editorial/amazonas-mixto-residual/provenance.json",
  expectedSourceCountsBySlug,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 del frente residual amazónico como ilustración editorial digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
  records,
  inheritedSlugs: inheritedAmazonasMixtoResidualSlugs,
  canonicalSlugs: canonicalAmazonasMixtoResidualSlugs,
  reviewedSlugs: reviewedAmazonasMixtoResidualSlugs,
  universeScopeSlugs: inheritedAmazonasMixtoResidualSlugs,
  targetTaxonomyBySlug: amazonasMixtoResidualTargetTaxonomyBySlug,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
