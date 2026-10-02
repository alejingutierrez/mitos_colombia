import process from "node:process";

import records from "../../editorial/varios-mestizo-final/records.mjs";
import { runCommunityImageGeneration } from "./lib/run-community-image-generation.mjs";

runCommunityImageGeneration({
  communitySlug: "varios-mestizo-final",
  communityName: "Cierre editorial Varios Mestizo",
  regionName:
    "Pasto, Tunja, carreteras colombianas y Bogotá, con procedencias diferenciadas",
  regionNameBySlug: {
    "la-viudita":
      "Pasto y el altiplano nariñense, con arquitectura andina y cementerio urbano general no identificable",
    "el-judio-errante":
      "iglesia y claustro de Santo Domingo en Tunja como patrimonio procesional, con representación no caricaturesca",
    "el-bus-fantasma":
      "carretera montañosa colombiana para la portada y estación Avenida Jiménez de Bogotá para la segunda escena",
  },
  communityNameBySlug: {
    "la-viudita":
      "repertorio mestizo nariñense, sin fusionar Viudita, Viuda Alegre, Dama Verde ni la versión de Nuquí",
    "el-judio-errante":
      "recepción tunjana de una leyenda cristiana antijudía, sin caricatura, demonización ni símbolos judíos usados como amenaza",
    "el-bus-fantasma":
      "dos ciclos mestizos atribuidos, carretera publicada y creepypasta G66, sin apropiarse del bus wayuu hacia Jepira",
  },
  confirmationPhrase: "generate-six-varios-mestizo-final-openai-images",
  records,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
