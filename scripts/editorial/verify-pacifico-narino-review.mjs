import process from "node:process";

import { pacificoNarinoMedia } from "../../editorial/pacifico-narino/media.mjs";
import records, {
  pacificoNarinoMythsBySlug,
} from "../../editorial/pacifico-narino/records.mjs";
import {
  canonicalPacificoMixtoNarinoSlugs,
  inheritedPacificoNarinoSlugs,
  pacificoNarinoTargetTaxonomyBySlug,
  preservedExternalTransferSlugs,
  reviewedPacificoNarinoSlugs,
} from "../../editorial/pacifico-narino/universe.mjs";
import { runCommunityEditorialVerifier } from "./lib/run-community-editorial-verifier.mjs";

runCommunityEditorialVerifier({
  communitySlug: "mixto",
  communityRegionSlug: "pacifico",
  skipCommunityProfile: true,
  provenancePath: "editorial/pacifico-narino/provenance.json",
  records,
  recordsBySlug: pacificoNarinoMythsBySlug,
  media: pacificoNarinoMedia,
  inheritedSlugs: inheritedPacificoNarinoSlugs,
  canonicalSlugs: canonicalPacificoMixtoNarinoSlugs,
  preservedAdditionalSlugs: preservedExternalTransferSlugs,
  reviewedSlugs: reviewedPacificoNarinoSlugs,
  targetTaxonomyBySlug: pacificoNarinoTargetTaxonomyBySlug,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 del frente Pacífico Nariño como ilustración editorial digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
