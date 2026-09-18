import process from "node:process";

import records from "../../editorial/piedecuesta-espantos-y-entierros/records.mjs";
import { runCommunityImageGeneration } from "./lib/run-community-image-generation.mjs";

runCommunityImageGeneration({
  communitySlug: "piedecuesta-espantos-y-entierros",
  communityName: "Espantos y entierros de Piedecuesta",
  regionName: "Piedecuesta y sus veredas, Santander",
  regionNameBySlug: {
    "la-hilandera": "Antiguos talleres de fique de Piedecuesta",
    "el-doctor-galeacer": "Loma Baja y caminos rurales de Piedecuesta",
    "el-carriazo-de-vereda-san-isidro":
      "Vereda San Isidro y cuenca del río Manco",
    "el-reventon-de-jacobo":
      "El Reventón y antigua salida hacia Curos",
    "la-cueva-de-la-pisca":
      "Blanquiscal, Tres Esquinas y Punta de la Mesa",
    "la-monedita-en-la-alcancia":
      "Centro histórico productivo de Piedecuesta",
    "la-diabla-castigadora":
      "Barrio Villanueva en su primera urbanización",
    "la-lampara-de-petroleo":
      "El Cáscaro, La Urgua y corredor del río Umpalá",
  },
  communityNameBySlug: {
    "la-hilandera": "Memoria obrera de fique y leyenda atribuida",
    "el-doctor-galeacer": "Leyenda oral ecoambiental de Loma Baja",
    "el-carriazo-de-vereda-san-isidro":
      "Leyenda compensatoria de tesoro y desafíos",
    "el-reventon-de-jacobo":
      "Leyenda compensatoria de entierro y riqueza",
    "la-cueva-de-la-pisca":
      "Leyenda de pava, polluelos y guaca",
    "la-monedita-en-la-alcancia":
      "Memoria familiar de saquería, sonidos y rumor",
    "la-diabla-castigadora":
      "Leyenda identitaria que revela una agresión humana",
    "la-lampara-de-petroleo":
      "Memoria rural atribuida a observadores de La Urgua",
  },
  confirmationPhrase:
    "generate-sixteen-piedecuesta-espantos-openai-images",
  records,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
