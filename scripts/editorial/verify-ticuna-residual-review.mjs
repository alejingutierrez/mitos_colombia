import process from "node:process";

import { ticunaResidualMedia } from "../../editorial/ticuna-residual/media.mjs";
import records, {
  ticunaResidualMythsBySlug,
} from "../../editorial/ticuna-residual/records.mjs";
import {
  canonicalTicunaAfterResidualSlugs,
  inheritedTicunaResidualUniverseSlugs,
  reviewedTicunaResidualSlugs,
  ticunaResidualTargetTaxonomyBySlug,
} from "../../editorial/ticuna-residual/universe.mjs";
import { runCommunityEditorialVerifier } from "./lib/run-community-editorial-verifier.mjs";

runCommunityEditorialVerifier({
  communitySlug: "ticuna",
  communityRegionSlug: "amazonas",
  skipCommunityProfile: true,
  allowPendingVisuals: true,
  provenancePath: "editorial/ticuna-residual/provenance.json",
  records,
  recordsBySlug: ticunaResidualMythsBySlug,
  media: ticunaResidualMedia,
  inheritedSlugs: inheritedTicunaResidualUniverseSlugs,
  canonicalSlugs: canonicalTicunaAfterResidualSlugs,
  reviewedSlugs: reviewedTicunaResidualSlugs,
  universeScopeSlugs: canonicalTicunaAfterResidualSlugs,
  targetTaxonomyBySlug: ticunaResidualTargetTaxonomyBySlug,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 de un relato Ticuna como ilustración editorial digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
