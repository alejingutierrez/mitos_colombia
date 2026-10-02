import process from "node:process";

import { piedecuestaEspantosMedia } from "../../editorial/piedecuesta-espantos-y-entierros/media.mjs";
import records, {
  piedecuestaEspantosMythsBySlug,
} from "../../editorial/piedecuesta-espantos-y-entierros/records.mjs";
import {
  canonicalPiedecuestaEspantosSlugs,
  inheritedPiedecuestaEspantosSlugs,
  piedecuestaEspantosTargetTaxonomyBySlug,
  reviewedPiedecuestaEspantosSlugs,
} from "../../editorial/piedecuesta-espantos-y-entierros/universe.mjs";
import { runCommunityEditorialVerifier } from "./lib/run-community-editorial-verifier.mjs";

runCommunityEditorialVerifier({
  communitySlug: "mestizo",
  communityRegionSlug: "andina",
  skipCommunityProfile: true,
  allowPendingVisuals: true,
  provenancePath:
    "editorial/piedecuesta-espantos-y-entierros/provenance.json",
  records,
  recordsBySlug: piedecuestaEspantosMythsBySlug,
  media: piedecuestaEspantosMedia,
  inheritedSlugs: inheritedPiedecuestaEspantosSlugs,
  canonicalSlugs: canonicalPiedecuestaEspantosSlugs,
  reviewedSlugs: reviewedPiedecuestaEspantosSlugs,
  universeScopeSlugs: inheritedPiedecuestaEspantosSlugs,
  targetTaxonomyBySlug: piedecuestaEspantosTargetTaxonomyBySlug,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 del frente Piedecuesta espantos y entierros como ilustración editorial digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
