import process from "node:process";

import records from "../../editorial/pacifico-restante/records.mjs";
import {
  canonicalPacificoMestizoSlugs,
  inheritedPacificoMestizoSlugs,
  pacificoRestanteTargetTaxonomyBySlug,
  preservedExternalTransferSlugs,
  reviewedPacificoRestanteSlugs,
} from "../../editorial/pacifico-restante/universe.mjs";
import { runCommunityEditorialSync } from "./lib/run-community-editorial-sync.mjs";

const expectedSourceCountsBySlug = Object.fromEntries(
  records.map((record) => [
    record.slug,
    record.keySources.length + record.sources.length,
  ]),
);

runCommunityEditorialSync({
  communitySlug: "mestizo",
  communityRegionSlug: "pacifico",
  skipCommunityProfile: true,
  confirmationPhrase: "sync-pacifico-restante-8-reviewed-routes",
  provenancePath: "editorial/pacifico-restante/provenance.json",
  expectedSourceCountsBySlug,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 del frente Pacífico restante como ilustración editorial digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
  records,
  inheritedSlugs: inheritedPacificoMestizoSlugs,
  canonicalSlugs: canonicalPacificoMestizoSlugs,
  preservedAdditionalSlugs: preservedExternalTransferSlugs,
  reviewedSlugs: reviewedPacificoRestanteSlugs,
  targetTaxonomyBySlug: pacificoRestanteTargetTaxonomyBySlug,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
