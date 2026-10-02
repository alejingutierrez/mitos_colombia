import process from "node:process";

import { santanderClassicFolkloreMedia } from "../../editorial/santander-folclor-clasico/media.mjs";
import records, {
  santanderClassicFolkloreMythsBySlug,
} from "../../editorial/santander-folclor-clasico/records.mjs";
import {
  canonicalSantanderClassicFolkloreSlugs,
  inheritedSantanderClassicFolkloreSlugs,
  reviewedSantanderClassicFolkloreSlugs,
  santanderClassicFolkloreTargetTaxonomyBySlug,
} from "../../editorial/santander-folclor-clasico/universe.mjs";
import { runCommunityEditorialVerifier } from "./lib/run-community-editorial-verifier.mjs";

runCommunityEditorialVerifier({
  communitySlug: "mestizo",
  communityRegionSlug: "andina",
  skipCommunityProfile: true,
  allowPendingVisuals: true,
  provenancePath:
    "editorial/santander-folclor-clasico/provenance.json",
  records,
  recordsBySlug: santanderClassicFolkloreMythsBySlug,
  media: santanderClassicFolkloreMedia,
  inheritedSlugs: inheritedSantanderClassicFolkloreSlugs,
  canonicalSlugs: canonicalSantanderClassicFolkloreSlugs,
  reviewedSlugs: reviewedSantanderClassicFolkloreSlugs,
  universeScopeSlugs: canonicalSantanderClassicFolkloreSlugs,
  targetTaxonomyBySlug: santanderClassicFolkloreTargetTaxonomyBySlug,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 del folclor clásico de Santander como ilustración editorial digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
