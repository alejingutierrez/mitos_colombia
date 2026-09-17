import process from "node:process";

import records from "../../editorial/bogota-mestizo-nocturno/records.mjs";
import { runCommunityImageGeneration } from "./lib/run-community-image-generation.mjs";

runCommunityImageGeneration({
  communitySlug: "bogota-mestizo-nocturno",
  communityName: "Leyendas nocturnas mestizas de Bogotá",
  regionName: "Bogotá y sus cerros orientales",
  regionNameBySlug: {
    "el-hombre-del-farol":
      "Palacio de San Carlos y centro de Santafé en 1828",
    "el-toro-en-el-ascensor":
      "Centro de Bogotá y corredor de la carrera Octava",
    "el-venado-de-oro": "Cerro de Guadalupe y antigua Santafé",
    "la-bruja-del-tranvia":
      "Rutas históricas del tranvía en el centro de Bogotá",
    "la-monja-de-las-rosas":
      "Casa Museo Quinta de Bolívar y su jardín",
    "la-monja-vidente-y-el-taxista":
      "Avenidas nocturnas de Bogotá en los años noventa",
    "la-mula-herrada": "Barrio Las Nieves de la antigua Bogotá",
    "los-esqueletos-caminantes":
      "Escenario literario nocturno de Bogotá",
  },
  communityNameBySlug: {
    "el-hombre-del-farol":
      "Historia política y elaboración literaria de la Septembrina",
    "el-toro-en-el-ascensor":
      "Rumor urbano con núcleo periodístico localizado",
    "el-venado-de-oro": "Leyenda bogotana de guacas y tesoros",
    "la-bruja-del-tranvia":
      "Ficción documental sobre el tranvía bogotano",
    "la-monja-de-las-rosas":
      "Guion fantástico situado en patrimonio bogotano",
    "la-monja-vidente-y-el-taxista":
      "Leyenda viajera de taxistas y funerarias",
    "la-mula-herrada": "Memoria legendaria del barrio Las Nieves",
    "los-esqueletos-caminantes":
      "Alegoría literaria con tratamiento digno de la identidad",
  },
  confirmationPhrase:
    "generate-sixteen-bogota-mestizo-night-openai-images",
  records,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
