import process from "node:process";

import records from "../../editorial/piedecuesta-relatos-legendarios/records.mjs";
import { runCommunityImageGeneration } from "./lib/run-community-image-generation.mjs";

runCommunityImageGeneration({
  communitySlug: "piedecuesta-relatos-legendarios",
  communityName: "Relatos legendarios de Piedecuesta",
  regionName: "Piedecuesta y entorno de Ruitoque, Santander",
  regionNameBySlug: {
    "el-cerro-encantado":
      "Cerro de la Cantera, El Molino y alto de Sevilla, Piedecuesta",
    "el-quijote-piedecuestano":
      "Macaregua, Santa Ángela y Ruitoque como geografía literaria",
    "la-vista-del-libertador":
      "Pedregosa vieja, centro de Piedecuesta y Capilla de los Dolores",
    "un-libertador-piedecuestano":
      "Piedecuesta y caminos republicanos de la Nueva Granada",
  },
  communityNameBySlug: {
    "el-cerro-encantado":
      "Romance local de Cantera con límites históricos y raciales explícitos",
    "el-quijote-piedecuestano":
      "Ficción histórica de Guarguatí y Celedonio sin falsa etnografía Guane",
    "la-vista-del-libertador":
      "Romance cívico sobre Bolívar separado del itinerario documental",
    "un-libertador-piedecuestano":
      "Memoria biográfica documentada de José María Mantilla",
  },
  confirmationPhrase:
    "generate-eight-piedecuesta-relatos-legendarios-openai-images",
  records,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
