import process from "node:process";

import records from "../../editorial/piedecuesta-clasicos-final/records.mjs";
import { runCommunityImageGeneration } from "./lib/run-community-image-generation.mjs";

runCommunityImageGeneration({
  communitySlug: "piedecuesta-clasicos-final",
  communityName: "Ciclo clásico final de Piedecuesta",
  regionName: "Piedecuesta urbana y rural, Santander",
  regionNameBySlug: {
    "el-anima-coy":
      "Calles en pendiente del sector de San Antonio, Piedecuesta",
    "la-luz-del-limonal":
      "Hacienda El Limonal, río Hato y camino hacia Piedecuesta",
    "el-silbon":
      "Trapiche y cañaduzales del Valle de Guatiguará",
    "los-tunjos-de-la-cantera":
      "Loma de la Cantera y paisaje urbano de Piedecuesta",
    "duende-del-salto":
      "Vereda El Duende, quebrada La Honda y cascada estacional",
  },
  communityNameBySlug: {
    "el-anima-coy":
      "Romance ecoambiental de Benedicta, Rosario y petición de oraciones",
    "la-luz-del-limonal":
      "Adaptación ecoambiental de Luz, Baldomero y claridad errante",
    "el-silbon":
      "Leyenda negra de trapiche, distancia invertida y oración",
    "los-tunjos-de-la-cantera":
      "Leyenda compensatoria literaria con límite arqueológico",
    "duende-del-salto":
      "Composición híbrida moderna inspirada en un paisaje comunitario real",
  },
  confirmationPhrase:
    "generate-ten-piedecuesta-clasicos-final-openai-images",
  records,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
