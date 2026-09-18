import process from "node:process";

import records from "../../editorial/ticuna-residual/records.mjs";
import { runCommunityImageGeneration } from "./lib/run-community-image-generation.mjs";

runCommunityImageGeneration({
  communitySlug: "ticuna-residual",
  communityName: "Ticuna, rutas residuales de Leticia y el Trapecio",
  regionName: "Trapecio Amazónico colombiano y memoria Ticuna transfronteriza",
  regionNameBySlug: {
    "origen-del-sol":
      "versión de la recopilación de Leticia; lugar de narración no identificado",
    "origen-de-la-luna":
      "versión de la recopilación de Leticia; lugar de narración no identificado",
    "origen-del-agua":
      "Trapecio Amazónico y variantes Ticuna del gran árbol, sin punto único",
    "origen-de-los-vegetales-cultivaldos":
      "recopilación de Leticia; chagra y narrador no identificados",
    "origen-del-gavilan":
      "recopilación de Leticia; campamento, árbol y comunidad no identificados",
    "origen-de-los-micos-boquiblancos":
      "recopilación de Leticia; casa, bosque y especie no identificados",
    "moe-e-ipi":
      "ciclo transfronterizo de Yoí e Ípi, con testimonios de Yahuma y Bufeococha",
  },
  communityNameBySlug: {
    "origen-del-sol":
      "variante leticiana del Sol, separada del testimonio de Dolores Noé",
    "origen-de-la-luna":
      "variante leticiana de la Luna, separada de Augusto Coello y Julia del Águila",
    "origen-del-agua":
      "ventana del ciclo de Wone centrada en ardillas, perezoso y caída del árbol",
    "origen-de-los-vegetales-cultivaldos":
      "mujer de la canasta y aparición de material de siembra",
    "origen-del-gavilan":
      "relato recompuesto de dos fragmentos consecutivos sobre la pierna y el gavilán",
    "origen-de-los-micos-boquiblancos":
      "relato de tres huérfanos, harina en los labios y transformación",
    "moe-e-ipi":
      "ventana de Techi, Yoí e Ípi, distinta de la canoa de Moe",
  },
  confirmationPhrase: "generate-fourteen-ticuna-residual-openai-images",
  records,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
