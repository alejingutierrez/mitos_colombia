import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { TAROT_LANDING_VARIANTS } from "../../src/lib/tarot-commerce.js";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const variants = Object.values(TAROT_LANDING_VARIANTS);

function pngDimensions(filePath) {
  const buffer = readFileSync(filePath);
  assert.equal(buffer.toString("ascii", 1, 4), "PNG", `${filePath} no es PNG`);
  return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
}

assert.equal(variants.length, 6, "Deben existir seis landings oficiales");
assert.equal(
  new Set(variants.map((variant) => variant.eyebrow)).size,
  6,
  "Cada intención debe declarar una señal de relevancia distinta en el hero"
);
assert.equal(
  new Set(variants.map((variant) => variant.diagnosticEvent)).size,
  6,
  "Cada intención debe conservar un evento diagnóstico propio"
);
assert.equal(
  TAROT_LANDING_VARIANTS.autoconocimiento.secondaryAction,
  "signature",
  "El CTA de reflexión debe llevar al ejemplo de lectura"
);

const visualSources = variants.map((variant) => {
  assert.ok(variant.heroVisual, `${variant.path} debe declarar heroVisual`);
  assert.equal(variant.heroVisual.status, "provisional", `${variant.path} debe seguir marcada como provisional`);
  assert.match(variant.heroVisual.alt, /provisional/i, `${variant.path} debe explicitar el estado provisional en su alt`);
  assert.ok(variant.heroVisual.replacementNote?.length > 60, `${variant.path} necesita criterio de reemplazo`);

  const filePath = path.join(projectRoot, "public", variant.heroVisual.src.replace(/^\//, ""));
  assert.ok(existsSync(filePath), `Falta el visual de ${variant.path}: ${filePath}`);
  const { width, height } = pngDimensions(filePath);
  assert.ok(width >= 1536 && height >= 1024, `${variant.path} debe conservar al menos 1536x1024`);
  assert.equal(width / height, 1.5, `${variant.path} debe conservar proporción 3:2`);
  return variant.heroVisual.src;
});

assert.equal(new Set(visualSources).size, 6, "Cada intención debe tener un visual distinto");

console.log("Visuales de intención: 6/6 únicos, provisionales, documentados y con resolución válida.");
