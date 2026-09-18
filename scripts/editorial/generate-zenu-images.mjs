import process from "node:process";

import zenuRecords from "../../editorial/zenu/records.mjs";
import { runCommunityImageGeneration } from "./lib/run-community-image-generation.mjs";

runCommunityImageGeneration({
  communitySlug: "zenu",
  communityName: "Frente Zenú",
  regionName: "Caribe, Córdoba y Sucre",
  communityNameBySlug: {
    "juan-lara-y-la-trenza-del-aire": "Caribe Mestizo",
  },
  regionNameBySlug: {
    "juan-lara-y-la-trenza-del-aire": "Córdoba, región Caribe",
  },
  confirmationPhrase: "generate-fourteen-zenu-openai-images",
  records: zenuRecords,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
