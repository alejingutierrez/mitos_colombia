import process from "node:process";

import { bogotaMestizoMemoryMedia } from "../../editorial/bogota-mestizo-memoria/media.mjs";
import records, {
  bogotaMestizoMemoryMythsBySlug,
} from "../../editorial/bogota-mestizo-memoria/records.mjs";
import {
  bogotaMestizoMemoryTargetTaxonomyBySlug,
  canonicalBogotaMestizoMemorySlugs,
  inheritedBogotaMestizoMemorySlugs,
  reviewedBogotaMestizoMemorySlugs,
} from "../../editorial/bogota-mestizo-memoria/universe.mjs";
import { runCommunityEditorialVerifier } from "./lib/run-community-editorial-verifier.mjs";

runCommunityEditorialVerifier({
  communitySlug: "mestizo",
  communityRegionSlug: "andina",
  skipCommunityProfile: true,
  allowPendingVisuals: true,
  provenancePath: "editorial/bogota-mestizo-memoria/provenance.json",
  records,
  recordsBySlug: bogotaMestizoMemoryMythsBySlug,
  media: bogotaMestizoMemoryMedia,
  inheritedSlugs: inheritedBogotaMestizoMemorySlugs,
  canonicalSlugs: canonicalBogotaMestizoMemorySlugs,
  reviewedSlugs: reviewedBogotaMestizoMemorySlugs,
  universeScopeSlugs: inheritedBogotaMestizoMemorySlugs,
  targetTaxonomyBySlug: bogotaMestizoMemoryTargetTaxonomyBySlug,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 del frente Bogotá mestizo memoria como ilustración editorial digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
