import process from "node:process";

import yaguaRecords from "../../editorial/yagua/records.mjs";
import { runCommunityImageGeneration } from "./lib/run-community-image-generation.mjs";

runCommunityImageGeneration({
  communitySlug: "yagua",
  communityName: "Frente Yagua / Ñihamwo",
  regionName: "Trapecio Amazónico colombiano y territorio Yagua transfronterizo",
  confirmationPhrase: "generate-fourteen-yagua-openai-images",
  records: yaguaRecords,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
