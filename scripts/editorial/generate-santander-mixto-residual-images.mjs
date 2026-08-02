import process from "node:process";

import records from "../../editorial/santander-mixto-residual/records.mjs";
import { runCommunityImageGeneration } from "./lib/run-community-image-generation.mjs";

runCommunityImageGeneration({
  communitySlug: "santander-mixto-residual",
  communityName: "Santander Mixto, rutas residuales",
  regionName:
    "región Andina nororiental de Colombia, Santander y Norte de Santander",
  regionNameBySlug: {
    talabad:
      "Bucarica y valle del Río de Oro colonial como escenario literario, sin afirmar el palenque como lugar comprobado",
    "el-ermitano-iracundo":
      "montañas de Ocaña, Norte de Santander, con cueva sin nombre y sin invitación a explorar",
  },
  communityNameBySlug: {
    talabad:
      "tragedia literaria de Otero distinguida del archivo colonial de Bucarica",
    "el-ermitano-iracundo":
      "leyenda moral de Nicolás y recreación epistolar de Ana publicadas en 2004",
  },
  confirmationPhrase: "generate-four-santander-mixto-residual-openai-images",
  records,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
