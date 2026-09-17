import process from "node:process";

import records from "../../editorial/santander-folclor-clasico/records.mjs";
import { runCommunityImageGeneration } from "./lib/run-community-image-generation.mjs";

runCommunityImageGeneration({
  communitySlug: "santander-folclor-clasico",
  communityName: "Folclor clásico de Santander",
  regionName: "Santander y el corredor andino de Sogamoso a Girón",
  regionNameBySlug: {
    "la-piedra-del-muerto":
      "río Mogoticos y quebrada del Bosque, entorno de Mogotes",
    "el-trapiche-ardiendo":
      "estancia El Volcán como lugar recordado e impreciso de Santander",
    "lagunas-encantadas":
      "Bucaramanga, Galán, Socorro, Girón, Bolívar, Mogotes, San Andrés y Los Santos",
    "lo-que-ensenan-las-cuevas":
      "San Gil, Bolívar, Buena Vista y Oiba como ciclo regional",
    "el-cacique-salomon":
      "Sogamoso e Iraca, Boyacá, y Dubigara-Barichara, Santander",
    "tal-para-cual":
      "San Juan de Girón y valle del río de Oro, Santander",
  },
  communityNameBySlug: {
    "la-piedra-del-muerto":
      "Leyenda de hospitalidad de Mogotes con cautela histórica",
    "el-trapiche-ardiendo":
      "Memoria infantil del trapiche de Nazario sin relatos fusionados",
    "lagunas-encantadas":
      "Ciclo de lagunas bravas con variantes municipales separadas",
    "lo-que-ensenan-las-cuevas":
      "Ciclo de cuevas y límites de protección arqueológica",
    "el-cacique-salomon":
      "Dos sátiras de Otero sobre Sugamuxi y Guatesique",
    "tal-para-cual":
      "Sátira del contrato entre Anselmo y Cirilo sin estigma corporal",
  },
  confirmationPhrase:
    "generate-twelve-santander-folclor-clasico-openai-images",
  records,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
