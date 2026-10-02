import process from "node:process";

import records from "../../editorial/boyaca-mixto-residual/records.mjs";
import { runCommunityImageGeneration } from "./lib/run-community-image-generation.mjs";

runCommunityImageGeneration({
  communitySlug: "boyaca-mixto-residual",
  communityName: "Boyacá Mixto, rutas residuales",
  regionName: "región Andina de Colombia, departamento de Boyacá",
  regionNameBySlug: {
    "los-mensajeros-de-los-dioses":
      "lago de Tota, Guáquira y transición hacia el piedemonte oriental",
    "el-cucacuy":
      "Valle de Tenza y provincia de Lengupá, conservando dos variantes regionales distintas",
    "la-sombra-creadora":
      "territorio muzo del occidente de Boyacá y ribera oriental del Magdalena",
    furatena:
      "peñones de Fura y Tena, río Minero y paisaje esmeraldero del territorio muzo",
  },
  communityNameBySlug: {
    "los-mensajeros-de-los-dioses":
      "versión de Mayavita atribuida a Lilia Montaña de Silva Celis",
    "el-cucacuy":
      "tradiciones boyacenses del Cucacuy sin fundir hombre y cerdo en una sola escena",
    "la-sombra-creadora": "episodio de creación atribuido al pueblo muzo",
    furatena: "ciclo territorial muzo de Fura, Tena, Zarbi y Are",
  },
  confirmationPhrase: "generate-eight-boyaca-mixto-residual-openai-images",
  records,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
