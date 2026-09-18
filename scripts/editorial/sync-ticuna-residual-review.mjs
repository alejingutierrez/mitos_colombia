import process from "node:process";

import records from "../../editorial/ticuna-residual/records.mjs";
import {
  canonicalTicunaAfterResidualSlugs,
  inheritedTicunaResidualUniverseSlugs,
  reviewedTicunaResidualSlugs,
  ticunaResidualTargetTaxonomyBySlug,
} from "../../editorial/ticuna-residual/universe.mjs";
import { runCommunityEditorialSync } from "./lib/run-community-editorial-sync.mjs";

const expectedSourceCountsBySlug = Object.fromEntries(
  records.map((record) => [
    record.slug,
    record.keySources.length + record.sources.length,
  ]),
);

runCommunityEditorialSync({
  communitySlug: "ticuna",
  communityRegionSlug: "amazonas",
  skipCommunityProfile: true,
  confirmationPhrase: "sync-ticuna-seven-residual-reviewed-routes",
  provenancePath: "editorial/ticuna-residual/provenance.json",
  expectedSourceCountsBySlug,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 de un relato Ticuna como ilustración editorial digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
  records,
  inheritedSlugs: inheritedTicunaResidualUniverseSlugs,
  canonicalSlugs: canonicalTicunaAfterResidualSlugs,
  reviewedSlugs: reviewedTicunaResidualSlugs,
  universeScopeSlugs: canonicalTicunaAfterResidualSlugs,
  targetTaxonomyBySlug: ticunaResidualTargetTaxonomyBySlug,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
