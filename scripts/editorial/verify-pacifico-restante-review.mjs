import process from "node:process";

import { pacificoRestanteMedia } from "../../editorial/pacifico-restante/media.mjs";
import records, {
  pacificoRestanteMythsBySlug,
} from "../../editorial/pacifico-restante/records.mjs";
import {
  canonicalPacificoMestizoSlugs,
  inheritedPacificoMestizoSlugs,
  pacificoRestanteTargetTaxonomyBySlug,
  reviewedPacificoRestanteSlugs,
} from "../../editorial/pacifico-restante/universe.mjs";
import { runCommunityEditorialVerifier } from "./lib/run-community-editorial-verifier.mjs";

runCommunityEditorialVerifier({
  communitySlug: "mestizo",
  communityRegionSlug: "pacifico",
  skipCommunityProfile: true,
  provenancePath: "editorial/pacifico-restante/provenance.json",
  records,
  recordsBySlug: pacificoRestanteMythsBySlug,
  media: pacificoRestanteMedia,
  inheritedSlugs: inheritedPacificoMestizoSlugs,
  canonicalSlugs: canonicalPacificoMestizoSlugs,
  reviewedSlugs: reviewedPacificoRestanteSlugs,
  targetTaxonomyBySlug: pacificoRestanteTargetTaxonomyBySlug,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 del frente Pacífico restante como ilustración editorial digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
