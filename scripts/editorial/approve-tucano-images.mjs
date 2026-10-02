import { createHash } from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";

import sharp from "sharp";

import records from "../../editorial/tucano/records.mjs";

const manifestPath = path.resolve(
  "artifacts",
  "generated-images",
  "tucano",
  "provenance-manifest.json",
);
const provenancePath = path.resolve(
  "editorial",
  "tucano",
  "provenance.json",
);
const expectedKeys = records.flatMap(({ slug }) => [
  `${slug}:horizontal`,
  `${slug}:vertical`,
]);

const reviewNotes = {
  "cuando-la-danta-perdio-su-hegemonia:horizontal":
    "Aprobada en intento 1: Boraró y Boraró Numió se desdoblan en formas espirituales junto al arroyo; el cangrejo aporta el detalle distintivo y no hay violencia gráfica.",
  "cuando-la-danta-perdio-su-hegemonia:vertical":
    "Aprobada en intento 1: hamaca vacía, sendero nocturno y visitante que se transforma expresan el engaño onírico sin contenido sexual ni horror explícito.",
  "el-origen-del-hombre:horizontal":
    "Aprobada en intento 1: la canoa ancestral conecta varias casas de surgimiento y grupos diferenciados en una composición fluvial panorámica.",
  "el-origen-del-hombre:vertical":
    "Aprobada en intento 1: el ascenso frontal por el río hacia una casa luminosa constituye una segunda escena clara, sin mapa, armas ni banderas.",
  "la-aparicion-del-sol-del-viento-y-los-mares:horizontal":
    "Aprobada en intento 1: Sol, soplo, cuatro direcciones, tierra y ríos forman una sola cadena visual legible de borde a borde.",
  "la-aparicion-del-sol-del-viento-y-los-mares:vertical":
    "Aprobada en intento 1: el banco elevado por espirales de viento hacia el Sol no repite el paisaje de la horizontal.",
  "los-blancos-dominan-a-los-indios:horizontal":
    "Aprobada en intento 1: la memoria fluvial y los cuadernos aparecen como soportes distintos sin mostrar dominación, armas ni texto legible.",
  "los-blancos-dominan-a-los-indios:vertical":
    "Aprobada en intento 1: narradores, río de símbolos y libro abierto comunican convivencia de oralidad y escritura sin letras legibles.",
  "yepa-abandona-la-tierra:horizontal":
    "Aprobada en intento 1: dos viajeros cargan la caja y la noche escapa como firmamento de paper cut, sin objetos rituales restringidos.",
  "yepa-abandona-la-tierra:vertical":
    "Aprobada en intento 1: las semillas luminosas del sueño se reparten entre día y noche en una escena distinta y no operacional.",
  "yepa-castiaga-a-los-animales:horizontal":
    "Aprobada en intento 2: animales con colas variadas dominan la composición y Yepá es una silueta lisa secundaria sin marcas, pintura ni vestuario inventado.",
  "yepa-castiaga-a-los-animales:vertical":
    "Aprobada en intento 2: la danta y los dos silbatos son legibles; Yepá aparece adulto y sin joyas, marcas corporales ni iconografía inventada.",
  "la-semilla-de-la-yuca-tucano:horizontal":
    "Aprobada en intento 2: exactamente cuatro mujeres lisas distribuyen cuatro tallos en la huerta, sin figura masculina, marcas corporales ni tallos extra.",
  "la-semilla-de-la-yuca-tucano:vertical":
    "Aprobada en intento 1: la yuca aparece como figura-persona y el trabajo colectivo limpia la huerta sin convertir la escena en instrucción ritual.",
};

function digest(value) {
  return createHash("sha256").update(value).digest("hex");
}

async function run() {
  const manifest = JSON.parse(await fs.readFile(manifestPath, "utf8"));
  const actualKeys = Object.keys(manifest.items).sort();
  if (JSON.stringify(actualKeys) !== JSON.stringify([...expectedKeys].sort())) {
    throw new Error("El manifiesto no contiene exactamente las 14 imágenes.");
  }
  const reviewedAt = new Date().toISOString();
  for (const key of expectedKeys) {
    const item = manifest.items[key];
    const note = reviewNotes[key];
    if (!note) {
      throw new Error(`${key}: falta nota de inspección visual humana.`);
    }
    if (
      item.provider !== "openai" ||
      item.model !== "gpt-image-2" ||
      item.quality !== "high"
    ) {
      throw new Error(`${key}: proveedor, modelo o calidad no aprobados.`);
    }
    if (
      digest(item.editorialPrompt) !== item.editorialPromptSha256 ||
      digest(item.generationPrompt) !== item.generationPromptSha256
    ) {
      throw new Error(`${key}: huella del prompt inválida.`);
    }
    if (
      item.sourceUrls.length !== 7 ||
      new Set(item.sourceUrls).size !== item.sourceUrls.length
    ) {
      throw new Error(`${key}: expediente de fuentes incompleto.`);
    }
    const metadata = await sharp(path.resolve(item.localPath)).metadata();
    if (
      metadata.width !== item.outputDimensions.width ||
      metadata.height !== item.outputDimensions.height ||
      metadata.format !== "jpeg"
    ) {
      throw new Error(`${key}: archivo local no coincide con el manifiesto.`);
    }
    item.visualQa = "approved";
    item.visualReviewNote = note;
    item.reviewedAt = reviewedAt;
    item.reviewedBy = "Codex editorial visual QA";
  }
  const generationAttempts = Object.values(manifest.items).reduce(
    (total, item) => total + Number(item.attempt),
    0,
  );
  manifest.visualQa = {
    status: "approved",
    reviewedAt,
    contactSheets: [
      "artifacts/generated-images/tucano/contact-sheet-horizontal.jpg",
      "artifacts/generated-images/tucano/contact-sheet-vertical.jpg",
    ],
    finalImages: expectedKeys.length,
    generationAttempts,
    rejectedAttempts: generationAttempts - expectedKeys.length,
    estimatedOutputCostUsd: Number((generationAttempts * 0.165).toFixed(3)),
  };
  manifest.updatedAt = reviewedAt;
  await fs.writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
  const durable = structuredClone(manifest);
  for (const item of Object.values(durable.items)) delete item.localPath;
  await fs.writeFile(provenancePath, `${JSON.stringify(durable, null, 2)}\n`);
  console.log(
    JSON.stringify(
      {
        status: "approved",
        finalImages: expectedKeys.length,
        generationAttempts,
        rejectedAttempts: manifest.visualQa.rejectedAttempts,
        estimatedOutputCostUsd: manifest.visualQa.estimatedOutputCostUsd,
        provenancePath,
      },
      null,
      2,
    ),
  );
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
