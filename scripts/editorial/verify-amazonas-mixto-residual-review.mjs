import process from "node:process";

import { amazonasMixtoResidualMedia } from "../../editorial/amazonas-mixto-residual/media.mjs";
import records, {
  amazonasMixtoResidualMythsBySlug,
} from "../../editorial/amazonas-mixto-residual/records.mjs";
import {
  amazonasMixtoResidualTargetTaxonomyBySlug,
  canonicalAmazonasMixtoResidualSlugs,
  inheritedAmazonasMixtoResidualSlugs,
  reviewedAmazonasMixtoResidualSlugs,
} from "../../editorial/amazonas-mixto-residual/universe.mjs";
import { runCommunityEditorialVerifier } from "./lib/run-community-editorial-verifier.mjs";

runCommunityEditorialVerifier({
  communitySlug: "mixto",
  communityRegionSlug: "amazonas",
  skipCommunityProfile: true,
  allowPendingVisuals: true,
  provenancePath: "editorial/amazonas-mixto-residual/provenance.json",
  records,
  recordsBySlug: amazonasMixtoResidualMythsBySlug,
  media: amazonasMixtoResidualMedia,
  inheritedSlugs: inheritedAmazonasMixtoResidualSlugs,
  canonicalSlugs: canonicalAmazonasMixtoResidualSlugs,
  reviewedSlugs: reviewedAmazonasMixtoResidualSlugs,
  universeScopeSlugs: inheritedAmazonasMixtoResidualSlugs,
  targetTaxonomyBySlug: amazonasMixtoResidualTargetTaxonomyBySlug,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 del frente residual amazónico como ilustración editorial digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
