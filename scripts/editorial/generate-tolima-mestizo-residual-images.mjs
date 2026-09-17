import process from "node:process";

import records from "../../editorial/tolima-mestizo-residual/records.mjs";
import { runCommunityImageGeneration } from "./lib/run-community-image-generation.mjs";

runCommunityImageGeneration({
  communitySlug: "tolima-mestizo-residual",
  communityName: "Tolima Mestizo, residual",
  regionName: "departamento del Tolima, Colombia",
  regionNameBySlug: {
    "la-patasola":
      "montañas tolimenses del corpus publicado por Misael Devia, con Ibagué como ancla editorial y sin afirmar un encuentro histórico",
    "la-patasola-mixto":
      "parcela campesina atribuida a Ñor Mica, con Ortega como ancla editorial y sin georreferenciar la quebrada de los Jabalcones como sitio comprobado",
    "el-poira":
      "ríos Magdalena y Saldaña, con Saldaña como ancla editorial y sin identificar una desaparición histórica",
    "el-sombreron":
      "caminos del Gran Tolima, con Lérida como ancla de la versión caminante y el altiplano como contexto atribuido de la variante ecuestre",
  },
  communityNameBySlug: {
    "la-patasola":
      "Patasola metamórfica de Misael Devia, separada del relato de Ñor Mica",
    "la-patasola-mixto":
      "relato atribuido a Ñor Mica y Ricardo Rocha G., con oración del monte",
    "el-poira":
      "nombre o faceta seductora del Mohán tolimense, con el rapto tratado como peligro y coerción",
    "el-sombreron":
      "caminante del Gran Tolima distinguido del jinete colombiano y del enamorador guatemalteco",
  },
  confirmationPhrase: "generate-eight-tolima-mestizo-residual-openai-images",
  records,
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
