import process from "node:process";

import records from "../../editorial/santander-folclor-clasico/records.mjs";
import {
  canonicalSantanderClassicFolkloreSlugs,
  inheritedSantanderClassicFolkloreSlugs,
  reviewedSantanderClassicFolkloreSlugs,
  santanderClassicFolkloreTargetTaxonomyBySlug,
} from "../../editorial/santander-folclor-clasico/universe.mjs";
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
  confirmationPhrase:
    "sync-santander-folclor-clasico-6-reviewed-routes",
  provenancePath:
    "editorial/santander-folclor-clasico/provenance.json",
  expectedSourceCountsBySlug,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 del folclor clásico de Santander como ilustración editorial digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
  records,
  inheritedSlugs: inheritedSantanderClassicFolkloreSlugs,
  canonicalSlugs: canonicalSantanderClassicFolkloreSlugs,
  reviewedSlugs: reviewedSantanderClassicFolkloreSlugs,
  universeScopeSlugs: canonicalSantanderClassicFolkloreSlugs,
  targetTaxonomyBySlug: santanderClassicFolkloreTargetTaxonomyBySlug,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
