import process from "node:process";

import {
  yukpaCommunityImageUrl,
  yukpaCommunityPage,
  yukpaCommunitySeo,
} from "../../editorial/yukpa/community.mjs";
import { yukpaMedia } from "../../editorial/yukpa/media.mjs";
import records, {
  yukpaReviewedMythsBySlug,
} from "../../editorial/yukpa/records.mjs";
import {
  canonicalYukpaSlugs,
  inheritedYukpaSlugs,
} from "../../editorial/yukpa/universe.mjs";
import { runCommunityEditorialVerifier } from "./lib/run-community-editorial-verifier.mjs";

runCommunityEditorialVerifier({
  communitySlug: "yukpa",
  provenancePath: "editorial/yukpa/provenance.json",
  records,
  recordsBySlug: yukpaReviewedMythsBySlug,
  media: yukpaMedia,
  inheritedSlugs: inheritedYukpaSlugs,
  canonicalSlugs: canonicalYukpaSlugs,
  communityPage: yukpaCommunityPage,
  communityImageUrl: yukpaCommunityImageUrl,
  communitySeo: yukpaCommunitySeo,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 de un ciclo Yukpa como ilustración editorial digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
  forbiddenPattern:
    /abuelo narrador|piedra flotante empujada|pareja encerrada|venado gu[ií]a/i,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
