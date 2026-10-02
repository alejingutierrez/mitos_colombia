import process from "node:process";

import { piedecuestaLegendaryAccountsMedia } from "../../editorial/piedecuesta-relatos-legendarios/media.mjs";
import records, {
  piedecuestaLegendaryAccountsMythsBySlug,
} from "../../editorial/piedecuesta-relatos-legendarios/records.mjs";
import {
  canonicalPiedecuestaLegendaryAccountsSlugs,
  inheritedPiedecuestaLegendaryAccountsSlugs,
  piedecuestaLegendaryAccountsTargetTaxonomyBySlug,
  reviewedPiedecuestaLegendaryAccountsSlugs,
} from "../../editorial/piedecuesta-relatos-legendarios/universe.mjs";
import { runCommunityEditorialVerifier } from "./lib/run-community-editorial-verifier.mjs";

runCommunityEditorialVerifier({
  communitySlug: "mestizo",
  communityRegionSlug: "andina",
  skipCommunityProfile: true,
  allowPendingVisuals: true,
  provenancePath:
    "editorial/piedecuesta-relatos-legendarios/provenance.json",
  records,
  recordsBySlug: piedecuestaLegendaryAccountsMythsBySlug,
  media: piedecuestaLegendaryAccountsMedia,
  inheritedSlugs: inheritedPiedecuestaLegendaryAccountsSlugs,
  canonicalSlugs: canonicalPiedecuestaLegendaryAccountsSlugs,
  reviewedSlugs: reviewedPiedecuestaLegendaryAccountsSlugs,
  universeScopeSlugs: canonicalPiedecuestaLegendaryAccountsSlugs,
  targetTaxonomyBySlug:
    piedecuestaLegendaryAccountsTargetTaxonomyBySlug,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 de los relatos legendarios de Piedecuesta como ilustración editorial digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
