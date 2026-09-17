import process from "node:process";

import records from "../../editorial/andina-varios-mixto-residual/records.mjs";
import { runCommunityImageGeneration } from "./lib/run-community-image-generation.mjs";

runCommunityImageGeneration({
  communitySlug: "andina-varios-mixto-residual",
  communityName: "Andina Varios Mixto, residual",
  regionName: "región Andina de Colombia",
  regionNameBySlug: {
    "la-mano-peluda":
      "La Candelaria y Tunja para la variante incorpórea, diferenciada del Viejo del Costal regional",
    "el-hojarasquin-del-monte":
      "bosques andinos de Colombia, con ancla editorial en Risaralda y sin afirmar un origen municipal único",
    "esperanza-en-el-oriente":
      "composición historiográfica comparativa, no representación de un mito oral panamericano",
  },
  communityNameBySlug: {
    "la-mano-peluda":
      "espanto regional en dos variantes documentadas y no una criatura con biografía única",
    "el-hojarasquin-del-monte":
      "guardián forestal campesino en variantes vegetales y animales documentadas",
    "esperanza-en-el-oriente":
      "hipótesis de Mariano Izquierdo Gallo de 1956 presentada con límites explícitos",
  },
  confirmationPhrase: "generate-six-andina-varios-mixto-residual-openai-images",
  records,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
