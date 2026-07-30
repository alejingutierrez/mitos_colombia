import process from "node:process";

import {
  afrocolombianCommunityImageUrl,
  afrocolombianCommunityPage,
  afrocolombianCommunitySeo,
  afrocolombianCommunitySeoPayload,
} from "../../editorial/afrocolombianos/community.mjs";
import records from "../../editorial/afrocolombianos/records.mjs";
import {
  canonicalAfrocolombianSlugs,
  inheritedAfrocolombianSlugs,
  reviewedAfrocolombianWorklistSlugs,
} from "../../editorial/afrocolombianos/universe.mjs";
import { runCommunityEditorialSync } from "./lib/run-community-editorial-sync.mjs";

const expectedSourceCountsBySlug = Object.fromEntries(
  records.map((record) => [
    record.slug,
    record.keySources.length + record.sources.length,
  ]),
);

runCommunityEditorialSync({
  communitySlug: "afrocolombianos",
  communityRegionSlug: "pacifico",
  confirmationPhrase: "sync-afrocolombianos-6-reviewed-routes",
  provenancePath: "editorial/afrocolombianos/provenance.json",
  expectedSourceCountsBySlug,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 del frente Afrocolombiano como ilustración editorial digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
  records,
  inheritedSlugs: inheritedAfrocolombianSlugs,
  canonicalSlugs: canonicalAfrocolombianSlugs,
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
  communitySeoPayload: afrocolombianCommunitySeoPayload,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
