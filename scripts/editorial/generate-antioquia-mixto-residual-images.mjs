import process from "node:process";

import records from "../../editorial/antioquia-mixto-residual/records.mjs";
import { runCommunityImageGeneration } from "./lib/run-community-image-generation.mjs";

runCommunityImageGeneration({
  communitySlug: "antioquia-mixto-residual",
  communityName: "Antioquia Mixto, rutas residuales",
  regionName: "región Andina de Colombia, departamento de Antioquia",
  regionNameBySlug: {
    "el-patetarro":
      "paisaje minero y agrícola antioqueño, sin señalar una mina concreta",
    "el-mareco":
      "ámbito doméstico antioqueño y adaptación editorial de 2004",
  },
  communityNameBySlug: {
    "el-patetarro":
      "núcleo de Carrasquilla con variantes mineras y agrícolas separadas",
    "el-mareco":
      "mito infantil de Ocampo distinguido de la historia literaria de Manuel",
  },
  confirmationPhrase: "generate-four-antioquia-mixto-residual-openai-images",
  records,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
