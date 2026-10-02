import process from "node:process";

import records from "../../editorial/andina-varios-mestizo-residual/records.mjs";
import { runCommunityImageGeneration } from "./lib/run-community-image-generation.mjs";

runCommunityImageGeneration({
  communitySlug: "andina-varios-mestizo-residual",
  communityName: "Andina Varios Mestizo, residual",
  regionName: "región Andina de Colombia",
  regionNameBySlug: {
    "el-anima-sola":
      "Marquetalia, Caldas, para la nota literaria, sin reducir la devoción colombiana a un solo municipio",
    "la-vieja-colmillona":
      "Aguadas y paisaje cafetero para la escena del fogón, sin afirmar un diario histórico",
    "la-nina-de-la-carta":
      "carreteras de Antioquia y el Eje Cafetero, con Itagüí como escenario literario atribuido",
    "la-barbacoa-del-muerto":
      "caminos rurales andinos de circulación del Guando y la barbacoa, sin una muerte histórica única",
    "los-meneses":
      "caminos de Anserma y el antiguo Gran Caldas para la nota de 2004, dentro de una circulación regional más amplia",
  },
  communityNameBySlug: {
    "el-anima-sola":
      "devoción popular mestiza distinguida de la nota literaria del animero",
    "la-vieja-colmillona":
      "visitante de fogones separada de la Muelona y de la Cabellona",
    "la-nina-de-la-carta":
      "aparición vial y variantes de carta diferenciadas por soporte",
    "la-barbacoa-del-muerto":
      "procesión funeraria mestiza en tres explicaciones regionales atribuidas",
    "los-meneses":
      "grupo de muchachos-espíritu que pide monedas y recompensa la generosidad",
  },
  confirmationPhrase: "generate-ten-andina-varios-mestizo-residual-openai-images",
  records,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
