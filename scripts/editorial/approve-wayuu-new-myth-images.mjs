import { createHash } from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";

import sharp from "sharp";

const manifestPath = path.resolve(
  "artifacts",
  "generated-images",
  "wayuu-new-myths",
  "provenance-manifest.json",
);
const expectedKeys = [
  "los-mellizos-transformadores:horizontal",
  "los-mellizos-transformadores:vertical",
  "waleker-el-origen-del-tejido:horizontal",
  "waleker-el-origen-del-tejido:vertical",
];
const reviewNotes = {
  "los-mellizos-transformadores:horizontal":
    "Aprobada en intento 2: muestra exactamente dos niños en formas sobrias; uno se transforma en nube; no añade poblado, bolsos, textiles inventados ni apariencia adulta.",
  "los-mellizos-transformadores:vertical":
    "Aprobada en intento 2: dos niños observan a Aáner; huellas y tres plumas sustituyen los símbolos geométricos rechazados; la escena difiere de la portada.",
  "waleker-el-origen-del-tejido:horizontal":
    "Aprobada en intento 1: Waleker teje de noche con hilos desde la boca y las manos; Irunúu permanece en el umbral y la araña acompaña el telar.",
  "waleker-el-origen-del-tejido:vertical":
    "Aprobada en intento 1: tres generaciones practican el tejido bajo la araña y la telaraña; la composición de transmisión es distinta de la portada nocturna.",
};

function digest(value) {
  return createHash("sha256").update(value).digest("hex");
}

async function run() {
  const manifest = JSON.parse(await fs.readFile(manifestPath, "utf8"));
  const actualKeys = Object.keys(manifest.items).sort();
  if (JSON.stringify(actualKeys) !== JSON.stringify([...expectedKeys].sort())) {
    throw new Error("El manifiesto no contiene exactamente las cuatro imágenes.");
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
    const localPath = path.resolve(item.localPath);
    const [buffer, metadata] = await Promise.all([
      fs.readFile(localPath),
      sharp(localPath).metadata(),
    ]);
    if (
      metadata.width !== item.outputDimensions.width ||
      metadata.height !== item.outputDimensions.height ||
      metadata.format !== "jpeg" ||
      digest(buffer) !== item.sha256
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
      "artifacts/generated-images/wayuu-new-myths/contact-sheet-horizontal.jpg",
      "artifacts/generated-images/wayuu-new-myths/contact-sheet-vertical.jpg",
    ],
    finalImages: expectedKeys.length,
    generationAttempts,
    rejectedAttempts: generationAttempts - expectedKeys.length,
    estimatedOutputCostUsd: Number((generationAttempts * 0.165).toFixed(3)),
  };
  manifest.updatedAt = reviewedAt;
  await fs.writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
  console.log(
    JSON.stringify(
      {
        status: "approved-awaiting-upload",
        finalImages: expectedKeys.length,
        generationAttempts,
        rejectedAttempts: manifest.visualQa.rejectedAttempts,
        estimatedOutputCostUsd: manifest.visualQa.estimatedOutputCostUsd,
        manifestPath,
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
