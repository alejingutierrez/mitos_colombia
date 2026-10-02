import process from "node:process";

import { bogotaMestizoNightMedia } from "../../editorial/bogota-mestizo-nocturno/media.mjs";
import records, {
  bogotaMestizoNightMythsBySlug,
} from "../../editorial/bogota-mestizo-nocturno/records.mjs";
import {
  bogotaMestizoNightTargetTaxonomyBySlug,
  canonicalBogotaMestizoNightSlugs,
  inheritedBogotaMestizoNightSlugs,
  reviewedBogotaMestizoNightSlugs,
} from "../../editorial/bogota-mestizo-nocturno/universe.mjs";
import { runCommunityEditorialVerifier } from "./lib/run-community-editorial-verifier.mjs";

runCommunityEditorialVerifier({
  communitySlug: "mestizo",
  communityRegionSlug: "andina",
  skipCommunityProfile: true,
  allowPendingVisuals: true,
  provenancePath: "editorial/bogota-mestizo-nocturno/provenance.json",
  records,
  recordsBySlug: bogotaMestizoNightMythsBySlug,
  media: bogotaMestizoNightMedia,
  inheritedSlugs: inheritedBogotaMestizoNightSlugs,
  canonicalSlugs: canonicalBogotaMestizoNightSlugs,
  reviewedSlugs: reviewedBogotaMestizoNightSlugs,
  universeScopeSlugs: inheritedBogotaMestizoNightSlugs,
  targetTaxonomyBySlug: bogotaMestizoNightTargetTaxonomyBySlug,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 del frente Bogotá mestizo nocturno como ilustración editorial digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
