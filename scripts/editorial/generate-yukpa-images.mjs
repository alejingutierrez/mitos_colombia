import process from "node:process";

import yukpaRecords from "../../editorial/yukpa/records.mjs";
import { runCommunityImageGeneration } from "./lib/run-community-image-generation.mjs";

runCommunityImageGeneration({
  communitySlug: "yukpa",
  communityName: "Yukpa",
  regionName: "Serranía del Perijá, Cesar",
  confirmationPhrase: "generate-ten-yukpa-openai-images",
  // El número de fuentes lo fija cada ficha desde que el reparto dejó de ser
  // uno solo para toda la comunidad.
  expectedSourceCountsBySlug: Object.fromEntries(
    yukpaRecords.map((record) => [
      record.slug,
      record.keySources.length + record.sources.length,
    ]),
  ),
  records: yukpaRecords,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
