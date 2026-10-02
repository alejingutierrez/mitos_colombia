import process from "node:process";

import records from "../../editorial/caribe-mestizo-final/records.mjs";
import { caribeMestizoFinalCatalogBySlug } from "../../editorial/caribe-mestizo-final/catalog.mjs";
import { runCommunityImageGeneration } from "./lib/run-community-image-generation.mjs";

const regionNameByGroup = {
  martinez: "Cartagena de Indias y su memoria urbana caribeña",
  zapata: "Córdoba y las sabanas del Sinú",
  list: "costa Caribe rural afrocolombiana",
  unresolved: "Caribe colombiano, con procedencia exacta todavía pendiente",
  buenaventura: "circuitos teatrales y orales del Pacífico y el Caribe colombiano",
  otero: "Santa Marta y el Magdalena Grande",
  morgan: "archipiélago de San Andrés, Providencia y Santa Catalina",
  francisco: "Magdalena Grande y caminos de La Guajira",
};

runCommunityImageGeneration({
  communitySlug: "caribe-mestizo-final",
  communityName: "literatura, cuento popular y leyenda del Caribe colombiano",
  regionName: "costa Caribe colombiana",
  regionNameBySlug: Object.fromEntries(
    records.map(({ slug }) => [slug, regionNameByGroup[caribeMestizoFinalCatalogBySlug[slug].group]]),
  ),
  communityNameBySlug: Object.fromEntries(
    records.map(({ slug }) => [
      slug,
      caribeMestizoFinalCatalogBySlug[slug].group === "unresolved"
        ? "versión heredada conservada con brecha documental explícita"
        : caribeMestizoFinalCatalogBySlug[slug].group === "list"
          ? "cuento oral afrocaribeño registrado por George List"
          : caribeMestizoFinalCatalogBySlug[slug].group === "zapata"
            ? "cuento popular mediado por Manuel Zapata Olivella"
            : "leyenda o recreación caribeña con atribución documentada",
    ]),
  ),
  confirmationPhrase: "generate-one-hundred-forty-caribe-mestizo-final-openai-images",
  records,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
