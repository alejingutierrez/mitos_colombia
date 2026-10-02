import process from "node:process";

import records from "../../editorial/bogota-mestizo-memoria/records.mjs";
import { runCommunityImageGeneration } from "./lib/run-community-image-generation.mjs";

runCommunityImageGeneration({
  communitySlug: "bogota-mestizo-memoria",
  communityName: "Memorias mestizas de Bogotá",
  regionName: "Bogotá y sabana de Cundinamarca",
  regionNameBySlug: {
    "el-bobo-del-tranvia": "Centro histórico y rutas del tranvía de Bogotá",
    "el-loco-arias": "Calles y comercios de la antigua Bogotá",
    "el-mono-de-la-pila": "Plaza Mayor y San Diego, Bogotá",
    "la-loca-margarita": "Plaza de Bolívar y centro de Bogotá",
    "el-enigmatico-abogado": "La Candelaria y plaza pública de Bogotá",
    "los-fantasmas-de-la-candelaria": "Barrio La Candelaria, Bogotá",
    "la-leyenda-del-santuario-de-monserrate":
      "Cerro y santuario de Monserrate, Bogotá",
    "el-diablo-del-puente-del-comun":
      "Puente del Común sobre el río Bogotá, Chía",
  },
  communityNameBySlug: {
    "el-bobo-del-tranvia": "Memoria urbana de Antonín",
    "el-loco-arias": "Memoria urbana de Eduardo Arias Jiménez",
    "el-mono-de-la-pila": "Patrimonio del agua y tradición proverbial",
    "la-loca-margarita": "Memoria pública de Margarita Villaquirá",
    "el-enigmatico-abogado":
      "Historia judicial y reelaboración espectral de Russi",
    "los-fantasmas-de-la-candelaria":
      "Repertorio plural de memoria oral urbana",
    "la-leyenda-del-santuario-de-monserrate":
      "Devoción católica y leyendas del Señor Caído",
    "el-diablo-del-puente-del-comun":
      "Leyenda cundinamarquesa de pacto y construcción",
  },
  confirmationPhrase:
    "generate-sixteen-bogota-mestizo-memory-openai-images",
  records,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
