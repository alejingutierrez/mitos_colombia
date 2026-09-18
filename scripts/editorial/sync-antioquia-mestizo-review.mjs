import process from "node:process";

import records from "../../editorial/antioquia-mestizo/records.mjs";
import {
  antioquiaMestizoTargetTaxonomyBySlug,
  canonicalAntioquiaMestizoSlugs,
  inheritedAntioquiaMestizoSlugs,
  reviewedAntioquiaMestizoSlugs,
} from "../../editorial/antioquia-mestizo/universe.mjs";
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
  confirmationPhrase: "sync-antioquia-mestizo-10-reviewed-routes",
  provenancePath: "editorial/antioquia-mestizo/provenance.json",
  expectedSourceCountsBySlug,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 del frente Antioquia mestizo como ilustración editorial digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
  records,
  inheritedSlugs: inheritedAntioquiaMestizoSlugs,
  canonicalSlugs: canonicalAntioquiaMestizoSlugs,
  reviewedSlugs: reviewedAntioquiaMestizoSlugs,
  universeScopeSlugs: inheritedAntioquiaMestizoSlugs,
  targetTaxonomyBySlug: antioquiaMestizoTargetTaxonomyBySlug,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
