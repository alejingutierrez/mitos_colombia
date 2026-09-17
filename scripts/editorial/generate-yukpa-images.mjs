import process from "node:process";

import yukpaRecords from "../../editorial/yukpa/records.mjs";
import { runCommunityImageGeneration } from "./lib/run-community-image-generation.mjs";

runCommunityImageGeneration({
  communitySlug: "yukpa",
  communityName: "Yukpa",
  regionName: "Serranía del Perijá, Cesar",
  confirmationPhrase: "generate-ten-yukpa-openai-images",
  expectedSourceCount: 9,
  records: yukpaRecords,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
