import process from "node:process";

import records from "../../editorial/huitoto-residual/records.mjs";
import { runCommunityImageGeneration } from "./lib/run-community-image-generation.mjs";

runCommunityImageGeneration({
  communitySlug: "huitoto-residual",
  communityName: "Huitoto / Murui-Muina, rutas residuales",
  regionName: "Amazonía colombiana, Caquetá y Putumayo",
  regionNameBySlug: {
    taife:
      "ámbito Huitoto del Igaraparaná, con cueva no localizada",
    taik:
      "El Encanto y río Caraparaná como lugar de registro del ciclo",
    nonuetoma:
      "ámbito Huitoto del Caquetá medio, con procedencia puntual no identificada",
    "el-diluvio-guinadoma":
      "memoria Huitoto grabada en Leticia; cerro Anequi no localizado",
  },
  communityNameBySlug: {
    taife:
      "La vieja del bastón según Preuss, separada del Taife del origen",
    taik:
      "Ventana de Rikoño dentro del ciclo Kugï y Nokuerai de Pablo Bigïdïma",
    nonuetoma:
      "Ciclo de Nonuetoma transmitido por la cadena de Amazonía Peruana y Tagliani",
    "el-diluvio-guinadoma":
      "Relato de los hermanos Soto Flórez recopilado por Rodríguez de Montes",
  },
  confirmationPhrase: "generate-eight-huitoto-residual-openai-images",
  records,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
