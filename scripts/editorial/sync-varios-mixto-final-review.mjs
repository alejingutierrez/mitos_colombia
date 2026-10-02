import process from "node:process";

import records from "../../editorial/varios-mixto-final/records.mjs";
import {
  canonicalVariosMixtoFinalSlugs,
  inheritedVariosMixtoFinalSlugs,
  reviewedVariosMixtoFinalSlugs,
  variosMixtoFinalTargetTaxonomyBySlug,
} from "../../editorial/varios-mixto-final/universe.mjs";
import { runCommunityEditorialSync } from "./lib/run-community-editorial-sync.mjs";

const expectedSourceCountsBySlug = Object.fromEntries(
  records.map((record) => [
    record.slug,
    record.keySources.length + record.sources.length,
  ]),
);

runCommunityEditorialSync({
  communitySlug: "mixto",
  communityRegionSlug: "varios",
  skipCommunityProfile: true,
  confirmationPhrase: "sync-varios-mixto-final-seven-reviewed-routes",
  provenancePath: "editorial/varios-mixto-final/provenance.json",
  expectedSourceCountsBySlug,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 del cierre Varios Mixto como full illustration digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
  records,
  inheritedSlugs: inheritedVariosMixtoFinalSlugs,
  canonicalSlugs: canonicalVariosMixtoFinalSlugs,
  reviewedSlugs: reviewedVariosMixtoFinalSlugs,
  universeScopeSlugs: inheritedVariosMixtoFinalSlugs,
  targetTaxonomyBySlug: variosMixtoFinalTargetTaxonomyBySlug,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
