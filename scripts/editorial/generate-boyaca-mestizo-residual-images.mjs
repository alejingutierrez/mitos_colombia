import process from "node:process";

import records from "../../editorial/boyaca-mestizo-residual/records.mjs";
import { runCommunityImageGeneration } from "./lib/run-community-image-generation.mjs";

runCommunityImageGeneration({
  communitySlug: "boyaca-mestizo-residual",
  communityName: "Boyacá Mestizo, ruta residual",
  regionName: "región Andina de Colombia, departamento de Boyacá",
  regionNameBySlug: {
    "el-tesoro-de-buzaga":
      "Tunja y valle de Iza como trayecto literario, sin afirmar una ubicación arqueológica de Buzagá",
  },
  communityNameBySlug: {
    "el-tesoro-de-buzaga":
      "leyenda picaresca de Enrique Otero D’Costa y no testimonio colonial literal",
  },
  confirmationPhrase: "generate-two-boyaca-mestizo-residual-openai-images",
  records,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
