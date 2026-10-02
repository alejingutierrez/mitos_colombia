import process from "node:process";

import records from "../../editorial/tolima-mixto-residual/records.mjs";
import { runCommunityImageGeneration } from "./lib/run-community-image-generation.mjs";

runCommunityImageGeneration({
  communitySlug: "tolima-mixto-residual",
  communityName: "Tolima Mixto, residual",
  regionName: "departamento del Tolima, Colombia",
  regionNameBySlug: Object.fromEntries(
    records.map(({ slug }) => [
      slug,
      "paisaje tolimense documentado en el expediente, con ubicación aproximada y sin inventar un sitio de aparición histórico",
    ]),
  ),
  communityNameBySlug: {
    "la-madre-agua": "Madre de Agua de Devia, niña de pies invertidos",
    "la-candileja": "Candileja de tres hachones rojizos",
    "la-muelona": "Muelona de enorme dentadura, separada de Colmillona",
    "el-cazador": "Cazador invisible reconocido por grito y perro",
    "el-tunjo": "niño folclórico que se convierte en figura de oro",
    "el-guango": "cortejo rural del Guango o Guando",
    "el-silbador": "pájaro invisible de tres silbidos del sur del Tolima",
    "brujas-y-duendes": "dos repertorios diferenciados de Devia",
    "la-tarasca": "bestia literaria del bosque, sin falso archivo histórico",
    "el-chenche": "cuento fluvial de 2004, relacionado con el Mohán con cautela",
    "dioses-lares": "revisión crítica de una analogía romana de 1956",
  },
  confirmationPhrase: "generate-twenty-two-tolima-mixto-residual-openai-images",
  records,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
