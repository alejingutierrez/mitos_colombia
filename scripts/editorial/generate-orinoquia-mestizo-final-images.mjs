import process from "node:process";

import records from "../../editorial/orinoquia-mestizo-final/records.mjs";
import { runCommunityImageGeneration } from "./lib/run-community-image-generation.mjs";

const piedemonte = new Set([
  "el-tirapiedra",
  "los-monstruos-de-paratebueno",
  "el-dominguez",
  "madre-rio-o-mohana",
  "la-bruja-de-los-ojos-miel",
  "el-domador-de-brujas",
]);

runCommunityImageGeneration({
  communitySlug: "orinoquia-mestizo-final",
  communityName: "literatura y folclor mestizo de la Orinoquía",
  regionName: "sabanas, ríos y piedemonte de la Orinoquía colombiana",
  regionNameBySlug: Object.fromEntries(
    records.map(({ slug }) => [
      slug,
      piedemonte.has(slug)
        ? "piedemonte llanero de Meta y Cundinamarca"
        : "sabanas y ríos de Casanare y los Llanos colombianos",
    ]),
  ),
  communityNameBySlug: Object.fromEntries(
    records.map(({ slug }) => [
      slug,
      piedemonte.has(slug)
        ? "cuento literario mestizo de Alberto Baquero Nariño"
        : slug === "el-tesoro-de-caribare" || slug === "la-bola-de-fuego"
          ? "leyenda regional llanera con variantes documentadas"
          : "cuento literario mestizo de Getulio Vargas Barón",
    ]),
  ),
  confirmationPhrase: "generate-thirty-eight-orinoquia-mestizo-final-openai-images",
  records,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
