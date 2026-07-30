import process from "node:process";

import {
  zenuCommunityImageUrl,
  zenuCommunityPage,
  zenuCommunitySeo,
  zenuCommunitySeoPayload,
} from "../../editorial/zenu/community.mjs";
import records from "../../editorial/zenu/records.mjs";
import {
  canonicalZenuSlugs,
  inheritedZenuSlugs,
  reviewedZenuWorklistSlugs,
} from "../../editorial/zenu/universe.mjs";
import { runCommunityEditorialSync } from "./lib/run-community-editorial-sync.mjs";

const expectedSourceCountsBySlug = Object.fromEntries(
  records.map((record) => [
    record.slug,
    record.slug === "juan-lara-y-la-trenza-del-aire" ? 6 : 12,
  ]),
);

runCommunityEditorialSync({
  communitySlug: "zenu",
  communityRegionSlug: "caribe",
  confirmationPhrase: "sync-zenu-7-reviewed-routes",
  provenancePath: "editorial/zenu/provenance.json",
  expectedSourceCountsBySlug,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 del frente Zenú como ilustración editorial digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
  records,
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
  communitySeoPayload: zenuCommunitySeoPayload,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
