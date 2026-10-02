import process from "node:process";

import {
  afrocolombianCommunityImageUrl,
  afrocolombianCommunityPage,
  afrocolombianCommunitySeo,
} from "../../editorial/afrocolombianos/community.mjs";
import { afrocolombianMedia } from "../../editorial/afrocolombianos/media.mjs";
import records, {
  afrocolombianMythsBySlug,
} from "../../editorial/afrocolombianos/records.mjs";
import {
  canonicalAfrocolombianSlugs,
  inheritedAfrocolombianSlugs,
  reviewedAfrocolombianWorklistSlugs,
} from "../../editorial/afrocolombianos/universe.mjs";
import { runCommunityEditorialVerifier } from "./lib/run-community-editorial-verifier.mjs";

runCommunityEditorialVerifier({
  communitySlug: "afrocolombianos",
  communityRegionSlug: "pacifico",
  provenancePath: "editorial/afrocolombianos/provenance.json",
  records,
  recordsBySlug: afrocolombianMythsBySlug,
  media: afrocolombianMedia,
  inheritedSlugs: inheritedAfrocolombianSlugs,
  canonicalSlugs: canonicalAfrocolombianSlugs,
  preservedAdditionalSlugs: ["el-padre-mera"],
  reviewedSlugs: reviewedAfrocolombianWorklistSlugs,
  obsoleteCommunities: [
    {
      slug: "africano",
      regionSlug: "pacifico",
    },
  ],
  communityPage: afrocolombianCommunityPage,
  communityImageUrl: afrocolombianCommunityImageUrl,
  communitySeo: afrocolombianCommunitySeo,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 del frente Afrocolombiano como ilustración editorial digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
