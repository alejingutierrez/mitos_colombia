import { createHash } from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";

import sharp from "sharp";

const manifestPath = path.resolve(
  "artifacts",
  "generated-images",
  "ticuna",
  "provenance-manifest.json",
);
const provenancePath = path.resolve(
  "editorial",
  "ticuna",
  "provenance.json",
);
const expectedKeys = [
  "creacion:horizontal",
  "creacion:vertical",
  "el-combate-del-sueno-y-la-palabra:horizontal",
  "el-combate-del-sueno-y-la-palabra:vertical",
  "origen-del-sol-tikuna:horizontal",
  "origen-del-sol-tikuna:vertical",
  "origen-de-la-luna-tikuna:horizontal",
  "origen-de-la-luna-tikuna:vertical",
  "origen-del-friaje-tikuna:horizontal",
  "origen-del-friaje-tikuna:vertical",
  "la-canoa-de-moe:horizontal",
  "la-canoa-de-moe:vertical",
];

const reviewNotes = {
  "creacion:horizontal":
    "Aprobada en intento 3: Ngutapa es una silueta masculina abstracta sin ornamentos inventados; cuatro figuras se relacionan con las dos rodillas; composición horizontal legible.",
  "creacion:vertical":
    "Aprobada en intento 2: Kuãyaré-avispa ocupa el centro y Ngutapa aparece como silueta neutra; no repite el nacimiento ni usa iconografía inventada.",
  "el-combate-del-sueno-y-la-palabra:horizontal":
    "Aprobada en intento 1: Wone organiza visualmente el paso del árbol a la red fluvial; sin texto, diorama ni objeto físico.",
  "el-combate-del-sueno-y-la-palabra:vertical":
    "Aprobada en intento 1: la pesca de los humanos en Eware constituye una segunda escena clara y distinta.",
  "origen-del-sol-tikuna:horizontal":
    "Aprobada en intento 1: el achiote, la vasija y el ascenso solar articulan la portada en full paper cut.",
  "origen-del-sol-tikuna:vertical":
    "Aprobada en intento 1: algodón y chambira construyen la segunda escena sin repetir el ascenso.",
  "origen-de-la-luna-tikuna:horizontal":
    "Aprobada en intento 1: representa la revelación mediante el huito sin visualizar el abuso ni incluir texto.",
  "origen-de-la-luna-tikuna:vertical":
    "Aprobada en intento 1: el ascenso por el árbol hacia la Luna se diferencia de la escena horizontal.",
  "origen-del-friaje-tikuna:horizontal":
    "Aprobada en intento 1: bandada, viento y hombre-grulla comunican el cambio estacional con lectura panorámica.",
  "origen-del-friaje-tikuna:vertical":
    "Aprobada en intento 1: el envoltorio que llena la casa de peces es una segunda escena legible.",
  "la-canoa-de-moe:horizontal":
    "Aprobada en intento 1: Moe talla la canoa y las astillas se convierten en peces; composición narrativa clara.",
  "la-canoa-de-moe:vertical":
    "Aprobada en intento 1: la canoa-boa y el viaje fluvial forman una segunda escena distinta, sin texto ni diorama.",
};

function digest(value) {
  return createHash("sha256").update(value).digest("hex");
}

async function run() {
  const manifest = JSON.parse(await fs.readFile(manifestPath, "utf8"));
  const actualKeys = Object.keys(manifest.items).sort();
  if (JSON.stringify(actualKeys) !== JSON.stringify([...expectedKeys].sort())) {
    throw new Error("El manifiesto no contiene exactamente las doce imágenes.");
  }
  const reviewedAt = new Date().toISOString();
  for (const key of expectedKeys) {
    const item = manifest.items[key];
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
    item.visualReviewNote = reviewNotes[key];
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
      "artifacts/generated-images/ticuna/contact-sheet-horizontal.jpg",
      "artifacts/generated-images/ticuna/contact-sheet-vertical.jpg",
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
