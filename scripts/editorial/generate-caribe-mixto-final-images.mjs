import process from "node:process";

import records from "../../editorial/caribe-mixto-final/records.mjs";
import { runCommunityImageGeneration } from "./lib/run-community-image-generation.mjs";

runCommunityImageGeneration({
  communitySlug: "caribe-mixto-final",
  communityName: "Cierre editorial Caribe Mixto y Hombre Caimán",
  regionName:
    "San Andrés raizal y Plato en el río Magdalena, con procedencias diferenciadas",
  regionNameBySlug: {
    "beda-nansi-beda-monkey-y-el-molino": "monte tropical de San Andrés",
    "mico-y-nansi": "valles y monte de San Andrés",
    "tiger-y-el-baile-de-perros": "Sound Bay, San Andrés",
    "tigre-y-nansi": "patios y monte de San Andrés",
    "un-perro-una-cabra-y-beda-tiger": "Sound Bay y paisaje fluvial isleño",
    "el-hombre-caiman": "Plato y el río Magdalena",
  },
  communityNameBySlug: {
    "beda-nansi-beda-monkey-y-el-molino": "oraliteratura raizal de Anancy",
    "mico-y-nansi": "oraliteratura raizal de Anancy",
    "tiger-y-el-baile-de-perros": "cuento humorístico raizal",
    "tigre-y-nansi": "ciclo raizal de Anancy y Beda Tiger",
    "un-perro-una-cabra-y-beda-tiger": "cuento animal raizal en creole",
    "el-hombre-caiman": "leyenda mestiza ribereña de Plato",
  },
  confirmationPhrase: "generate-twelve-caribe-mixto-final-openai-images",
  records,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
