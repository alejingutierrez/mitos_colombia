import process from "node:process";

import { huitotoResidualMedia } from "../../editorial/huitoto-residual/media.mjs";
import records, {
  huitotoResidualMythsBySlug,
} from "../../editorial/huitoto-residual/records.mjs";
import {
  canonicalHuitotoAfterResidualSlugs,
  huitotoResidualTargetTaxonomyBySlug,
  inheritedHuitotoResidualUniverseSlugs,
  reviewedHuitotoResidualSlugs,
} from "../../editorial/huitoto-residual/universe.mjs";
import { runCommunityEditorialVerifier } from "./lib/run-community-editorial-verifier.mjs";

runCommunityEditorialVerifier({
  communitySlug: "huitotos",
  communityRegionSlug: "amazonas",
  skipCommunityProfile: true,
  allowPendingVisuals: true,
  provenancePath: "editorial/huitoto-residual/provenance.json",
  records,
  recordsBySlug: huitotoResidualMythsBySlug,
  media: huitotoResidualMedia,
  inheritedSlugs: inheritedHuitotoResidualUniverseSlugs,
  canonicalSlugs: canonicalHuitotoAfterResidualSlugs,
  reviewedSlugs: reviewedHuitotoResidualSlugs,
  universeScopeSlugs: canonicalHuitotoAfterResidualSlugs,
  targetTaxonomyBySlug: huitotoResidualTargetTaxonomyBySlug,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 de un relato Huitoto / Murui-Muina como ilustración editorial digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
