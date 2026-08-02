import process from "node:process";

import records from "../../editorial/cesar-mestizo-residual/records.mjs";
import { runCommunityImageGeneration } from "./lib/run-community-image-generation.mjs";

runCommunityImageGeneration({
  communitySlug: "cesar-mestizo-residual",
  communityName: "Cesar Mestizo, rutas residuales",
  regionName: "Valle de Upar y río Guatapurí en el Cesar, Caribe colombiano",
  regionNameBySlug: {
    "la-bruja-del-trinche":
      "Los Venados y Valencia de Jesús en el Valle de Upar, sin presentar el desenlace legendario como lugar comprobado",
    "la-sirena-de-hurtado":
      "Pozo de Hurtado y río Guatapurí en Valledupar, sin confundir la narración con la escultura turística",
  },
  communityNameBySlug: {
    "la-bruja-del-trinche":
      "leyenda vallenata atribuida a Andrés Montúfar y Dolores Escalona, separada de Quín Vásquez",
    "la-sirena-de-hurtado":
      "leyenda de Rosario Arciniegas y su transformación en Jueves Santo",
  },
  confirmationPhrase: "generate-four-cesar-mestizo-residual-openai-images",
  records,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
