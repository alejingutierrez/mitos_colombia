import process from "node:process";

import records from "../../editorial/piedecuesta-vicente-arenas-i/records.mjs";
import { runCommunityImageGeneration } from "./lib/run-community-image-generation.mjs";

runCommunityImageGeneration({
  communitySlug: "piedecuesta-vicente-arenas-i",
  communityName: "Primer ciclo clásico de Vicente Arenas en Piedecuesta",
  regionName: "Piedecuesta histórica y sus sectores urbanos, Santander",
  regionNameBySlug: {
    "la-mula-del-diablo":
      "Antigua bocatoma y fragua de la Piedecuesta histórica",
    "la-mula-maneada":
      "Calles empedradas del centro y sector de San Antonio",
    "la-llorona-del-molino":
      "Antiguo molino, huertas y canal alimentado por el río de Oro",
    "la-mechuda":
      "Puente de Plata, arroyo y caminos hacia Villanueva",
    "el-fantasma-de-el-horizonte":
      "Calle El Horizonte, asociada con la actual carrera 13",
    "la-puerta-del-perdon":
      "Parroquia San Francisco Javier y plaza central de Piedecuesta",
    "la-sayona-del-cementerio":
      "Calles centrales y corredor general hacia el cementerio",
    "el-pollo-de-las-animas":
      "Sector general de La Ladera en Piedecuesta",
  },
  communityNameBySlug: {
    "la-mula-del-diablo":
      "Adaptación literaria de fragua, ambición y tragedia atribuida",
    "la-mula-maneada":
      "Romance identitario sobre rumor, mula nocturna y Petra Agudelo",
    "la-llorona-del-molino":
      "Leyenda ecoambiental del canal, el duelo y el llanto cuaresmal",
    "la-mechuda":
      "Romance ecoambiental de alaridos y aparición ambigua",
    "el-fantasma-de-el-horizonte":
      "Leyenda negra con explicaciones animal y humana internas",
    "la-puerta-del-perdon":
      "Leyenda identitaria de patrimonio, reconciliación y milagros atribuidos",
    "la-sayona-del-cementerio":
      "Leyenda histórica y romántica de Carlos, Elvira y el cementerio",
    "el-pollo-de-las-animas":
      "Leyenda identitaria sobre engaño, trabajo y dignidad",
  },
  confirmationPhrase:
    "generate-sixteen-piedecuesta-vicente-arenas-i-openai-images",
  records,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
