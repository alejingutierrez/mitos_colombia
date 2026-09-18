import process from "node:process";

import { antioquiaMestizoMedia } from "../../editorial/antioquia-mestizo/media.mjs";
import records, {
  antioquiaMestizoMythsBySlug,
} from "../../editorial/antioquia-mestizo/records.mjs";
import {
  antioquiaMestizoTargetTaxonomyBySlug,
  canonicalAntioquiaMestizoSlugs,
  inheritedAntioquiaMestizoSlugs,
  reviewedAntioquiaMestizoSlugs,
} from "../../editorial/antioquia-mestizo/universe.mjs";
import { runCommunityEditorialVerifier } from "./lib/run-community-editorial-verifier.mjs";

runCommunityEditorialVerifier({
  communitySlug: "mestizo",
  communityRegionSlug: "andina",
  skipCommunityProfile: true,
  allowPendingVisuals: true,
  provenancePath: "editorial/antioquia-mestizo/provenance.json",
  records,
  recordsBySlug: antioquiaMestizoMythsBySlug,
  media: antioquiaMestizoMedia,
  inheritedSlugs: inheritedAntioquiaMestizoSlugs,
  canonicalSlugs: canonicalAntioquiaMestizoSlugs,
  reviewedSlugs: reviewedAntioquiaMestizoSlugs,
  universeScopeSlugs: inheritedAntioquiaMestizoSlugs,
  targetTaxonomyBySlug: antioquiaMestizoTargetTaxonomyBySlug,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 del frente Antioquia mestizo como ilustración editorial digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
