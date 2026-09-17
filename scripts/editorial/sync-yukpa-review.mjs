import process from "node:process";

import {
  yukpaCommunityImageUrl,
  yukpaCommunityPage,
  yukpaCommunitySeo,
  yukpaCommunitySeoPayload,
} from "../../editorial/yukpa/community.mjs";
import records from "../../editorial/yukpa/records.mjs";
import {
  canonicalYukpaSlugs,
  inheritedYukpaSlugs,
} from "../../editorial/yukpa/universe.mjs";
import { runCommunityEditorialSync } from "./lib/run-community-editorial-sync.mjs";

runCommunityEditorialSync({
  communitySlug: "yukpa",
  confirmationPhrase: "sync-yukpa-5-editorial-myths",
  provenancePath: "editorial/yukpa/provenance.json",
  expectedSourceCount: 9,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 de un ciclo Yukpa como ilustración editorial digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
  records,
  inheritedSlugs: inheritedYukpaSlugs,
  canonicalSlugs: canonicalYukpaSlugs,
  communityPage: yukpaCommunityPage,
  communityImageUrl: yukpaCommunityImageUrl,
  communitySeo: yukpaCommunitySeo,
  communitySeoPayload: yukpaCommunitySeoPayload,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
