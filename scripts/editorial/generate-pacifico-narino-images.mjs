import process from "node:process";

import records from "../../editorial/pacifico-narino/records.mjs";
import { runCommunityImageGeneration } from "./lib/run-community-image-generation.mjs";

runCommunityImageGeneration({
  communitySlug: "pacifico-narino",
  communityName: "Pacífico Nariño, Tumaco y Guapi",
  regionName: "Pacífico sur colombiano",
  regionNameBySlug: {
    "el-padre-mera": "Guapi, Cauca",
    "chiles-y-cumbal": "Cordillera fronteriza de Nariño",
    "el-diablo-chivo-de-rumichaca": "Rumichaca, Nariño",
    "guagua-rayo": "Jenoy, Nariño",
    "la-totuma-de-la-cocha": "Laguna de La Cocha, Nariño",
    "la-sirena-del-arco": "Tumaco, Nariño",
    "taita-galeras": "Jenoy y Galeras, Nariño",
  },
  communityNameBySlug: {
    "el-padre-mera": "Afrocolombianos del Pacífico sur",
    "chiles-y-cumbal": "Pueblo Pasto y Muellamués",
    "el-diablo-chivo-de-rumichaca": "Circulación regional fronteriza",
    "guagua-rayo": "Quillacingas de Jenoy",
    "la-totuma-de-la-cocha": "Circulación Quillacinga de La Cocha",
    "la-sirena-del-arco": "Circulación regional de Tumaco",
    "taita-galeras": "Quillacingas de Jenoy",
  },
  confirmationPhrase:
    "generate-fourteen-pacifico-narino-openai-images",
  records,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
