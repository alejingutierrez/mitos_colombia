import process from "node:process";

import records from "../../editorial/caribe-mixto-final/records.mjs";
import {
  canonicalCaribeMixtoFinalSlugs,
  caribeMixtoFinalTargetTaxonomyBySlug,
  inheritedCaribeMixtoFinalSlugs,
  reviewedCaribeMixtoFinalSlugs,
} from "../../editorial/caribe-mixto-final/universe.mjs";
import { runCommunityEditorialSync } from "./lib/run-community-editorial-sync.mjs";

const expectedSourceCountsBySlug = Object.fromEntries(
  records.map((record) => [
    record.slug,
    record.keySources.length + record.sources.length,
  ]),
);

runCommunityEditorialSync({
  communitySlug: "mixto",
  communityRegionSlug: "caribe",
  skipCommunityProfile: true,
  confirmationPhrase: "sync-caribe-mixto-final-six-reviewed-routes",
  provenancePath: "editorial/caribe-mixto-final/provenance.json",
  expectedSourceCountsBySlug,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 del cierre Caribe Mixto como full illustration digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
  records,
  inheritedSlugs: inheritedCaribeMixtoFinalSlugs,
  canonicalSlugs: canonicalCaribeMixtoFinalSlugs,
  reviewedSlugs: reviewedCaribeMixtoFinalSlugs,
  universeScopeSlugs: inheritedCaribeMixtoFinalSlugs,
  targetTaxonomyBySlug: caribeMixtoFinalTargetTaxonomyBySlug,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
