import process from "node:process";

import records from "../../editorial/amazonas-mixto-residual/records.mjs";
import { runCommunityImageGeneration } from "./lib/run-community-image-generation.mjs";

runCommunityImageGeneration({
  communitySlug: "amazonas-mixto-residual",
  communityName: "Relatos residuales mixtos y transferidos del Amazonas",
  regionName: "Amazonía colombiana y frontera transfronteriza",
  regionNameBySlug: {
    "el-bufeo": "Leticia y río Amazonas",
    "el-cotomachaco": "Leticia y cananguchales fronterizos",
    "el-chuy-achaque": "Leticia, Amazonas",
    "madre-de-playa": "Playas fluviales de Leticia",
    "la-cobra-grande": "Ríos de Leticia y frontera amazónica",
    petapeta: "Puerto Nariño y territorio ATICOYA",
    "la-curupira": "Frontera amazónica colombo-brasileña",
    "ngutapa-y-chimuiyae": "Trapecio Amazónico y Solimões",
    yacuruna: "Iquitos y Amazonía peruana",
    "chuya-chaqui": "Ahuanari y selva amazónica literaria",
    "el-hijo-de-tuhixana": "Cuenca del Vaupés",
    "el-descubrimiento-del-agua-y-los-peces":
      "Territorio Ufaina / Tanimuka",
  },
  communityNameBySlug: {
    "el-bufeo": "Corpus plural de Leticia",
    "el-cotomachaco": "Testimonios de Leticia de 1975",
    "el-chuy-achaque": "Circulación mixta de Leticia",
    "madre-de-playa": "Corpus mixto de Leticia",
    "la-cobra-grande": "Versión leticiana de Pedro Roque",
    petapeta: "Relato Ticuna de Milton Jesús Pinto Linares",
    "la-curupira": "Recepción fronteriza del Curupira brasileño",
    "ngutapa-y-chimuiyae": "Relato Ticuna de Chimuya-e",
    yacuruna: "Versión transfronteriza de Iquitos",
    "chuya-chaqui": "Reescritura literaria de Hugo Niño",
    "el-hijo-de-tuhixana": "Reescritura Vaupés de Fernando Solarte",
    "el-descubrimiento-del-agua-y-los-peces":
      "Reescritura Tanimuka de Fernando Solarte",
  },
  confirmationPhrase:
    "generate-twenty-four-amazonas-mixto-residual-openai-images",
  records,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
