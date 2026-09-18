import process from "node:process";

import records from "../../editorial/pacifico-restante/records.mjs";
import { runCommunityImageGeneration } from "./lib/run-community-image-generation.mjs";

runCommunityImageGeneration({
  communitySlug: "pacifico-restante",
  communityName: "Mitos mestizos y regionales del Pacífico",
  regionName: "Pacífico colombiano",
  regionNameBySlug: {
    buziraco: "Cali, Valle del Cauca",
    "el-barco-fantasma": "Litoral Pacífico colombiano",
    "el-caballo-del-morro": "Popayán, Cauca",
    "el-duende-peluquero": "Dagua, Valle del Cauca",
    "el-roble-del-caballero": "Popayán, Cauca",
    "la-casa-de-la-tradicion": "San Antonio, Cali",
    "la-piramide-del-chontaduro": "Palmira, Valle del Cauca",
    "la-yesca": "Chocó",
  },
  communityNameBySlug: {
    buziraco: "Circulación urbana caleña",
    "el-barco-fantasma": "Circulación regional del Pacífico",
    "el-caballo-del-morro": "Literatura contemporánea de Popayán",
    "el-duende-peluquero": "Creencia contemporánea de Dagua",
    "el-roble-del-caballero": "Literatura contemporánea de Popayán",
    "la-casa-de-la-tradicion": "Leyenda urbana de San Antonio",
    "la-piramide-del-chontaduro": "Rumor contemporáneo de Palmira",
    "la-yesca": "Repertorio regional chocoano",
  },
  confirmationPhrase:
    "generate-sixteen-pacifico-restante-openai-images",
  records,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
