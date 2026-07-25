import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import bachue from "../../editorial/myths/bachue.mjs";

const root = new URL("../../", import.meta.url);

async function read(relativePath) {
  return readFile(new URL(relativePath, root), "utf8");
}

test("el documento canónico cubre el flujo editorial completo", async () => {
  const document = await read("docs/metodologia-editorial.md");
  const requiredSections = [
    "Definir el universo antes de investigar",
    "Dossier y mínimo documental",
    "Matriz de evidencia",
    "Lectura antropológica y filosófica",
    "Contrato de la reescritura literaria",
    "Las cuatro capas editoriales",
    "Clasificación y etiquetas",
    "Ubicación geográfica",
    "Imagen y sistema visual",
    "SEO profesional",
    "Escritura segura en la base de datos",
    "Validación local y prueba en producción",
    "Rúbrica y bloqueos",
    "Aprobación y escala",
  ];

  for (const section of requiredSections) {
    assert.match(document, new RegExp(section, "i"));
  }

  assert.match(document, /al menos cinco fuentes consultables/i);
  assert.match(document, /no se crea una taxonomía nueva/i);
  assert.match(document, /transacción atómica/i);
  assert.match(document, /navegador real/i);
});

test("la página pública expone las reglas críticas", async () => {
  const page = await read("src/app/metodologia/page.js");

  assert.match(page, /En Relato solo ocurre la historia/i);
  assert.match(page, /Un niño puede seguir la acción/i);
  assert.match(page, /no creamos taxonomías/i);
  assert.match(page, /Respaldo y escritura atómica/i);
  assert.match(page, /verdad de producción/i);
  assert.match(page, /updated="25 de julio de 2026"/i);
});

test("el SEO metodológico describe el estándar completo", () => {
  const seo = bachue.methodologySeo;

  assert.equal(seo.meta_title, "Metodología editorial");
  assert.ok(seo.meta_description.length >= 120);
  assert.ok(seo.meta_description.length <= 160);
  assert.equal(seo.canonical_path, "/metodologia");
  assert.match(seo.meta_keywords, /reescritura literaria/i);
  assert.match(seo.meta_keywords, /SEO/);
});
