import process from "node:process";

import { caldasMestizoMedia } from "../../editorial/caldas-mestizo/media.mjs";
import records, {
  caldasMestizoMythsBySlug,
} from "../../editorial/caldas-mestizo/records.mjs";
import {
  caldasMestizoTargetTaxonomyBySlug,
  canonicalCaldasMestizoSlugs,
  inheritedCaldasMestizoSlugs,
  reviewedCaldasMestizoSlugs,
} from "../../editorial/caldas-mestizo/universe.mjs";
import { runCommunityEditorialVerifier } from "./lib/run-community-editorial-verifier.mjs";

runCommunityEditorialVerifier({
  communitySlug: "mestizo",
  communityRegionSlug: "andina",
  skipCommunityProfile: true,
  allowPendingVisuals: true,
  provenancePath: "editorial/caldas-mestizo/provenance.json",
  records,
  recordsBySlug: caldasMestizoMythsBySlug,
  media: caldasMestizoMedia,
  inheritedSlugs: inheritedCaldasMestizoSlugs,
  canonicalSlugs: canonicalCaldasMestizoSlugs,
  reviewedSlugs: reviewedCaldasMestizoSlugs,
  universeScopeSlugs: inheritedCaldasMestizoSlugs,
  targetTaxonomyBySlug: caldasMestizoTargetTaxonomyBySlug,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 del frente Caldas mestizo como ilustración editorial digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
