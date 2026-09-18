import { createHash } from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";

import sharp from "sharp";

const manifestPath = path.resolve(
  "artifacts",
  "generated-images",
  "ufaina",
  "provenance-manifest.json",
);
const provenancePath = path.resolve(
  "editorial",
  "ufaina",
  "provenance.json",
);
const expectedKeys = [
  "creacion-ufaina:horizontal",
  "creacion-ufaina:vertical",
];

const reviewNotes = {
  "creacion-ufaina:horizontal":
    "Aprobada en intento 1: cuatro hermanos adultos levantan la primera maloca bajo la palma de bombona mientras un mayor señala los soportes; la caja de hojas permanece cerrada y no hay ornamentos rituales inventados.",
  "creacion-ufaina:vertical":
    "Aprobada en intento 1: el árbol cae y se transforma visualmente en el río Apaporis mientras las astillas se vuelven peces; es una segunda escena distinta, sin ceremonia ni conocimiento restringido.",
};

function digest(value) {
  return createHash("sha256").update(value).digest("hex");
}

async function run() {
  const manifest = JSON.parse(await fs.readFile(manifestPath, "utf8"));
  const actualKeys = Object.keys(manifest.items).sort();
  if (JSON.stringify(actualKeys) !== JSON.stringify([...expectedKeys].sort())) {
    throw new Error("El manifiesto no contiene exactamente las dos imágenes.");
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
      "artifacts/generated-images/ufaina/contact-sheet-horizontal.jpg",
      "artifacts/generated-images/ufaina/contact-sheet-vertical.jpg",
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
