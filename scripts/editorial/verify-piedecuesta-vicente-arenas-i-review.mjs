import process from "node:process";

import { piedecuestaVicenteArenasIMedia } from "../../editorial/piedecuesta-vicente-arenas-i/media.mjs";
import records, {
  piedecuestaVicenteArenasIMythsBySlug,
} from "../../editorial/piedecuesta-vicente-arenas-i/records.mjs";
import {
  canonicalPiedecuestaVicenteArenasISlugs,
  inheritedPiedecuestaVicenteArenasISlugs,
  piedecuestaVicenteArenasITargetTaxonomyBySlug,
  reviewedPiedecuestaVicenteArenasISlugs,
} from "../../editorial/piedecuesta-vicente-arenas-i/universe.mjs";
import { runCommunityEditorialVerifier } from "./lib/run-community-editorial-verifier.mjs";

runCommunityEditorialVerifier({
  communitySlug: "mestizo",
  communityRegionSlug: "andina",
  skipCommunityProfile: true,
  allowPendingVisuals: true,
  provenancePath:
    "editorial/piedecuesta-vicente-arenas-i/provenance.json",
  records,
  recordsBySlug: piedecuestaVicenteArenasIMythsBySlug,
  media: piedecuestaVicenteArenasIMedia,
  inheritedSlugs: inheritedPiedecuestaVicenteArenasISlugs,
  canonicalSlugs: canonicalPiedecuestaVicenteArenasISlugs,
  reviewedSlugs: reviewedPiedecuestaVicenteArenasISlugs,
  universeScopeSlugs: canonicalPiedecuestaVicenteArenasISlugs,
  targetTaxonomyBySlug: piedecuestaVicenteArenasITargetTaxonomyBySlug,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 del primer ciclo de Vicente Arenas en Piedecuesta como ilustración editorial digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
