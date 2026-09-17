import process from "node:process";

import records from "../../editorial/pacifico-narino/records.mjs";
import {
  canonicalPacificoMixtoNarinoSlugs,
  inheritedPacificoNarinoSlugs,
  pacificoNarinoTargetTaxonomyBySlug,
  preservedExternalTransferSlugs,
  reviewedPacificoNarinoSlugs,
} from "../../editorial/pacifico-narino/universe.mjs";
import { runCommunityEditorialSync } from "./lib/run-community-editorial-sync.mjs";

const expectedSourceCountsBySlug = Object.fromEntries(
  records.map((record) => [
    record.slug,
    record.keySources.length + record.sources.length,
  ]),
);

runCommunityEditorialSync({
  communitySlug: "mixto",
  communityRegionSlug: "pacifico",
  skipCommunityProfile: true,
  confirmationPhrase: "sync-pacifico-narino-7-reviewed-routes",
  provenancePath: "editorial/pacifico-narino/provenance.json",
  expectedSourceCountsBySlug,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 del frente Pacífico Nariño como ilustración editorial digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
  records,
  inheritedSlugs: inheritedPacificoNarinoSlugs,
  canonicalSlugs: canonicalPacificoMixtoNarinoSlugs,
  preservedAdditionalSlugs: preservedExternalTransferSlugs,
  reviewedSlugs: reviewedPacificoNarinoSlugs,
  targetTaxonomyBySlug: pacificoNarinoTargetTaxonomyBySlug,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
