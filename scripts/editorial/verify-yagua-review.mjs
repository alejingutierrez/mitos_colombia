import process from "node:process";

import {
  yaguaCommunityImageUrl,
  yaguaCommunityPage,
  yaguaCommunitySeo,
} from "../../editorial/yagua/community.mjs";
import { yaguaMedia } from "../../editorial/yagua/media.mjs";
import records, {
  yaguaMythsBySlug,
} from "../../editorial/yagua/records.mjs";
import {
  canonicalYaguaSlugs,
  inheritedYaguaSlugs,
} from "../../editorial/yagua/universe.mjs";
import { runCommunityEditorialVerifier } from "./lib/run-community-editorial-verifier.mjs";

runCommunityEditorialVerifier({
  communitySlug: "yaguas",
  communityRegionSlug: "amazonas",
  provenancePath: "editorial/yagua/provenance.json",
  records,
  recordsBySlug: yaguaMythsBySlug,
  media: yaguaMedia,
  inheritedSlugs: inheritedYaguaSlugs,
  canonicalSlugs: canonicalYaguaSlugs,
  reviewedSlugs: canonicalYaguaSlugs,
  communityPage: yaguaCommunityPage,
  communityImageUrl: yaguaCommunityImageUrl,
  communitySeo: yaguaCommunitySeo,
  forbiddenPattern:
    /Petita|Sairango|Yuané|Asento|pureza racial|caníbales boras|guardián de todos los ríos/i,
  verticalBasePrompt:
    "Segunda escena vertical 9:16 del frente Yagua / Ñihamwo como ilustración editorial digital 2D full paper cut y paper quilling de acabado gráfico plano; sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
