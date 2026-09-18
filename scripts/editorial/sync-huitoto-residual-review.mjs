import process from "node:process";

import records from "../../editorial/huitoto-residual/records.mjs";
import {
  canonicalHuitotoAfterResidualSlugs,
  huitotoResidualTargetTaxonomyBySlug,
  inheritedHuitotoResidualUniverseSlugs,
  reviewedHuitotoResidualSlugs,
} from "../../editorial/huitoto-residual/universe.mjs";
import { runCommunityEditorialSync } from "./lib/run-community-editorial-sync.mjs";

const expectedSourceCountsBySlug = Object.fromEntries(
  records.map((record) => [
    record.slug,
    record.keySources.length + record.sources.length,
  ]),
);

runCommunityEditorialSync({
  communitySlug: "huitotos",
  communityRegionSlug: "amazonas",
  skipCommunityProfile: true,
  confirmationPhrase: "sync-huitoto-four-residual-reviewed-routes",
  provenancePath: "editorial/huitoto-residual/provenance.json",
  expectedSourceCountsBySlug,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 de un relato Huitoto / Murui-Muina como ilustración editorial digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
  records,
  inheritedSlugs: inheritedHuitotoResidualUniverseSlugs,
  canonicalSlugs: canonicalHuitotoAfterResidualSlugs,
  reviewedSlugs: reviewedHuitotoResidualSlugs,
  universeScopeSlugs: canonicalHuitotoAfterResidualSlugs,
  targetTaxonomyBySlug: huitotoResidualTargetTaxonomyBySlug,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
