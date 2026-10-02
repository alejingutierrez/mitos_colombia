import process from "node:process";

import records from "../../editorial/varios-mixto-final/records.mjs";
import { runCommunityImageGeneration } from "./lib/run-community-image-generation.mjs";

runCommunityImageGeneration({
  communitySlug: "varios-mixto-final",
  communityName: "Cierre editorial de siete leyendas regionales mestizas",
  regionName:
    "Pasto, altiplano cundiboyacense, Caribe y Tolima con atribuciones diferenciadas",
  regionNameBySlug: {
    "el-cura-sin-cabeza": "Pasto y sus calles coloniales",
    "el-jinete-negro": "caminos del altiplano cundiboyacense",
    "el-mandingas": "Caribe colombiano y memoria afrocolombiana",
    "el-mohan": "ríos Magdalena y Saldaña en Tolima",
    "la-llorona": "Purificación y paisaje fluvial del Tolima",
    "la-madremonte": "bosques y nacimientos de agua del Tolima",
    "los-duendes": "casas y caminos del Tolima Grande",
  },
  communityNameBySlug: {
    "el-cura-sin-cabeza": "leyenda mestiza nariñense",
    "el-jinete-negro": "variante mestiza del Sombrerón colombiano",
    "el-mandingas": "folclor mestizo con memoria lexical afrocolombiana",
    "el-mohan": "folclor ribereño mestizo del Tolima",
    "la-llorona": "leyenda mestiza del Tolima Grande",
    "la-madremonte": "tradiciones campesinas regionales diferenciadas",
    "los-duendes": "repertorio campesino mestizo del Tolima",
  },
  confirmationPhrase: "generate-fourteen-varios-mixto-final-openai-images",
  records,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
