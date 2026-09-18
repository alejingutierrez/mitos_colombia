import process from "node:process";

import afrocolombianRecords from "../../editorial/afrocolombianos/records.mjs";
import { runCommunityImageGeneration } from "./lib/run-community-image-generation.mjs";

runCommunityImageGeneration({
  communitySlug: "afrocolombianos",
  communityName: "Frente Afrocolombiano",
  regionName: "Pacífico colombiano",
  regionNameBySlug: {
    "tulavieja-tunda": "Tumaco, Nariño",
    "el-riviel-del-rosario": "Buenaventura, Valle del Cauca",
  },
  confirmationPhrase:
    "generate-twelve-afrocolombian-openai-images",
  records: afrocolombianRecords,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
