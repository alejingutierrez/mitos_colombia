import process from "node:process";

import {
  zenuCommunityImageUrl,
  zenuCommunityPage,
  zenuCommunitySeo,
} from "../../editorial/zenu/community.mjs";
import { zenuMedia } from "../../editorial/zenu/media.mjs";
import records, {
  zenuReviewedMythsBySlug,
} from "../../editorial/zenu/records.mjs";
import {
  canonicalZenuSlugs,
  inheritedZenuSlugs,
  reviewedZenuWorklistSlugs,
} from "../../editorial/zenu/universe.mjs";
import { runCommunityEditorialVerifier } from "./lib/run-community-editorial-verifier.mjs";

runCommunityEditorialVerifier({
  communitySlug: "zenu",
  communityRegionSlug: "caribe",
  provenancePath: "editorial/zenu/provenance.json",
  records,
  recordsBySlug: zenuReviewedMythsBySlug,
  media: zenuMedia,
  inheritedSlugs: inheritedZenuSlugs,
  canonicalSlugs: canonicalZenuSlugs,
  reviewedSlugs: reviewedZenuWorklistSlugs,
  targetTaxonomyBySlug: {
    "juan-lara-y-la-trenza-del-aire": {
      regionSlug: "caribe",
      communitySlug: "mestizo",
    },
  },
  communityPage: zenuCommunityPage,
  communityImageUrl: zenuCommunityImageUrl,
  communitySeo: zenuCommunitySeo,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 del frente Zenú como ilustración editorial digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
