import process from "node:process";

import records from "../../editorial/andina-legacy-editorial-residual/records.mjs";
import { runCommunityImageGeneration } from "./lib/run-community-image-generation.mjs";

runCommunityImageGeneration({
  communitySlug: "andina-legacy-editorial-residual",
  communityName: "Residual legacy editorial andino",
  regionName:
    "Popayán, Valle del Cauca y occidente antioqueño en la región Andina de Colombia",
  regionNameBySlug: {
    "catalina-la-napanga":
      "Popayán colonial y archivo judicial de 1591, con separación visual entre expediente y recreación literaria contemporánea",
    "el-hada-de-los-canaverales":
      "paisaje cañero, acequias y humedales del Valle del Cauca como fábula editorial contemporánea explícita",
    "el-silbo-de-quinunchu":
      "provincia histórica de Guacá y serranía de Abibe en el occidente antioqueño, no valle de Aburrá",
  },
  communityNameBySlug: {
    "catalina-la-napanga":
      "caso histórico de Catalina de Belalcázar y recepción literaria payanesa, sin representar adulterio ni asesinato",
    "el-hada-de-los-canaverales":
      "fábula contemporánea creada por el sitio, sin atribución a corteros ni comunidad tradicional",
    "el-silbo-de-quinunchu":
      "memoria histórica Guaca registrada por fuentes coloniales y posteriores leídas críticamente, sin indumentaria panindígena inventada",
  },
  confirmationPhrase:
    "generate-six-andina-legacy-editorial-residual-openai-images",
  records,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
