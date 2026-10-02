import process from "node:process";

import records from "../../editorial/piedecuesta-segundo-ciclo/records.mjs";
import { runCommunityImageGeneration } from "./lib/run-community-image-generation.mjs";

runCommunityImageGeneration({
  communitySlug: "piedecuesta-segundo-ciclo",
  communityName: "Segundo ciclo de leyendas de Piedecuesta",
  regionName: "Piedecuesta, Umpalá y sus corredores rurales, Santander",
  regionNameBySlug: {
    "la-bruja-silbona":
      "Calles y aleros de la Piedecuesta urbana de los años cincuenta",
    "la-mancarita": "Vereda San Francisco y su paisaje de peñas y robles",
    "cuento-fantastico":
      "Centro de Piedecuesta, antigua bocatoma y río de Oro",
    "la-campana-del-diablo":
      "Camino rural, caracolí y antiguo sector del Bochinche",
    "el-diablo-de-umpala":
      "Calles empedradas y laderas del antiguo Umpalá",
    "la-cueva-del-diablo":
      "Pescadero, Alto de Arenas y corredor hacia Los Santos",
    "nueva-version-de-la-luz-del-limonal":
      "Río Hato y caminos del Limonal",
    "el-griton":
      "Pescadero, El Cáscaro, La Urgua y quebrada de Los Falsos",
  },
  communityNameBySlug: {
    "la-bruja-silbona":
      "Leyenda urbana de ave, silbido y advertencia familiar",
    "la-mancarita":
      "Leyenda ecoambiental de la Máncara de San Francisco",
    "cuento-fantastico":
      "Cuento literario moderno de persecución y río fantástico",
    "la-campana-del-diablo":
      "Leyenda negra de objeto sonoro y riesgo del camino",
    "el-diablo-de-umpala":
      "Leyenda histórica con explicación humana y humor local",
    "la-cueva-del-diablo":
      "Leyenda ecoambiental de arriería y paisaje reversible",
    "nueva-version-de-la-luz-del-limonal":
      "Variante familiar y religiosa de una luz errante",
    "el-griton":
      "Leyenda ecoambiental construida únicamente por sonido",
  },
  confirmationPhrase:
    "generate-sixteen-piedecuesta-second-cycle-openai-images",
  records,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
