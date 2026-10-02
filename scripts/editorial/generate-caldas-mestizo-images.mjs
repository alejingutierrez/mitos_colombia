import process from "node:process";

import records from "../../editorial/caldas-mestizo/records.mjs";
import { runCommunityImageGeneration } from "./lib/run-community-image-generation.mjs";

runCommunityImageGeneration({
  communitySlug: "caldas-mestizo",
  communityName: "Mitos mestizos de Caldas",
  regionName: "Región Andina colombiana",
  regionNameBySlug: {
    "cuento-de-animas": "Rionegro y Girón, Santander",
    "de-frente-al-sol": "Chinchiná, Caldas",
    "el-aserrador": "Supía la Alta, Caldas",
    "el-cacique-cumanday": "Nevado del Ruiz, Caldas",
    "el-coco": "Riosucio, Caldas",
    "el-cole-cabuya": "San Lorenzo y Supía, Caldas",
    "el-viejo-del-costal": "Riosucio y occidente de Caldas",
    "in-illo-tempore": "Anserma, Caldas",
    "las-brujas": "Salamina y Pácora, Caldas",
  },
  communityNameBySlug: {
    "cuento-de-animas": "Literatura santandereana de Otero D’Costa",
    "de-frente-al-sol": "Ficción histórica de Otero D’Costa",
    "el-aserrador": "Leyenda regional del Uñón",
    "el-cacique-cumanday": "Leyenda literaria del Nevado del Ruiz",
    "el-coco": "Memoria infantil de Riosucio",
    "el-cole-cabuya": "Circulación regional de San Lorenzo y Supía",
    "el-viejo-del-costal": "Memoria infantil del occidente caldense",
    "in-illo-tempore": "Ficción histórica de Otero D’Costa",
    "las-brujas": "Relato literario de Rodrigo Jiménez Mejía",
  },
  confirmationPhrase:
    "generate-eighteen-caldas-mestizo-openai-images",
  records,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
