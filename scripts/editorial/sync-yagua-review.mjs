import process from "node:process";

import {
  yaguaCommunityImageUrl,
  yaguaCommunityPage,
  yaguaCommunitySeo,
  yaguaCommunitySeoPayload,
} from "../../editorial/yagua/community.mjs";
import records from "../../editorial/yagua/records.mjs";
import {
  canonicalYaguaSlugs,
  inheritedYaguaSlugs,
} from "../../editorial/yagua/universe.mjs";
import { runCommunityEditorialSync } from "./lib/run-community-editorial-sync.mjs";

const expectedSourceCountsBySlug = Object.fromEntries(
  records.map((record) => [
    record.slug,
    record.keySources.length + record.sources.length,
  ]),
);

runCommunityEditorialSync({
  communitySlug: "yaguas",
  communityRegionSlug: "amazonas",
  confirmationPhrase: "sync-yagua-7-reviewed-routes",
  provenancePath: "editorial/yagua/provenance.json",
  expectedSourceCountsBySlug,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 del frente Yagua / Ñihamwo como ilustración editorial digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
  records,
  inheritedSlugs: inheritedYaguaSlugs,
  canonicalSlugs: canonicalYaguaSlugs,
  reviewedSlugs: canonicalYaguaSlugs,
  communityPage: yaguaCommunityPage,
  communityImageUrl: yaguaCommunityImageUrl,
  communitySeo: yaguaCommunitySeo,
  communitySeoPayload: yaguaCommunitySeoPayload,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
