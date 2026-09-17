import process from "node:process";

import records from "../../editorial/cesar-mestizo-residual/records.mjs";
import {
  cesarMestizoResidualTargetTaxonomyBySlug,
  canonicalCesarMestizoResidualSlugs,
  inheritedCesarMestizoResidualSlugs,
  reviewedCesarMestizoResidualSlugs,
} from "../../editorial/cesar-mestizo-residual/universe.mjs";
import { runCommunityEditorialSync } from "./lib/run-community-editorial-sync.mjs";

const expectedSourceCountsBySlug = Object.fromEntries(
  records.map((record) => [
    record.slug,
    record.keySources.length + record.sources.length,
  ]),
);

runCommunityEditorialSync({
  communitySlug: "mestizo",
  communityRegionSlug: "caribe",
  skipCommunityProfile: true,
  confirmationPhrase: "sync-cesar-mestizo-residual-two-reviewed-routes",
  provenancePath: "editorial/cesar-mestizo-residual/provenance.json",
  expectedSourceCountsBySlug,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 del residual Cesar Mestizo como ilustración editorial digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
  records,
  inheritedSlugs: inheritedCesarMestizoResidualSlugs,
  canonicalSlugs: canonicalCesarMestizoResidualSlugs,
  reviewedSlugs: reviewedCesarMestizoResidualSlugs,
  universeScopeSlugs: reviewedCesarMestizoResidualSlugs,
  targetTaxonomyBySlug: cesarMestizoResidualTargetTaxonomyBySlug,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
