import process from "node:process";

import records from "../../editorial/antioquia-mestizo/records.mjs";
import { runCommunityImageGeneration } from "./lib/run-community-image-generation.mjs";

runCommunityImageGeneration({
  communitySlug: "antioquia-mestizo",
  communityName: "Mitos mestizos de Antioquia",
  regionName: "Región Andina colombiana",
  regionNameBySlug: {
    "el-paton": "Montañas de Antioquia",
    "el-perro-negro": "Ruta histórica entre Andes, Jardín y Caramanta",
    "la-cabellona": "Liborina y occidente antioqueño",
    "la-dama-verde": "Andes, Antioquia",
    "la-rodillona": "Caminos y barrancos de Antioquia",
    "las-ilusiones": "Cocinas y caminos rurales de Antioquia",
    "los-rescoldos": "Rutas de arriería antioqueñas",
    "maria-centeno": "Occidente y norte de Antioquia",
    "maria-la-larga": "Andes, Antioquia",
    "no-hay-deuda-que-no-se-pague": "Villa de Arma, actual Caldas",
  },
  communityNameBySlug: {
    "el-paton": "Cadena de antología pedagógica colombiana",
    "el-perro-negro": "Repertorio caminero antioqueño",
    "la-cabellona": "Repertorio vespertino del occidente antioqueño",
    "la-dama-verde": "Repertorio urbano y memoria de Andes",
    "la-rodillona": "Espanto burlón de caminos",
    "las-ilusiones": "Relatos rurales de fogón y miedo",
    "los-rescoldos": "Repertorio de arrieros",
    "maria-centeno": "Adaptación literaria y memoria mestiza antioqueña",
    "maria-la-larga": "Memoria municipal de Andes",
    "no-hay-deuda-que-no-se-pague":
      "Leyenda literaria de Enrique Otero D’Costa",
  },
  confirmationPhrase:
    "generate-twenty-antioquia-mestizo-openai-images",
  records,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
