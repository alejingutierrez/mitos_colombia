import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import bachue from "../../editorial/myths/bachue.mjs";

const root = new URL("../../", import.meta.url);

async function read(relativePath) {
  return readFile(new URL(relativePath, root), "utf8");
}

test("el documento canónico cubre el flujo editorial completo", async () => {
  const document = await read("docs/metodologia-revision-mitos.md");
  const requiredSections = [
    "Metodología interna de revisión y enriquecimiento de mitos",
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
    "Aprendizajes del piloto y escala",
    "Checklist de cierre por mito",
    "Criterios para reabrir una ficha",
  ];

  for (const section of requiredSections) {
    assert.match(document, new RegExp(section, "i"));
  }

  assert.match(document, /al menos cinco fuentes consultables/i);
  assert.match(document, /no se crea una taxonomía nueva/i);
  assert.match(document, /transacción atómica/i);
  assert.match(document, /navegador real/i);
  assert.match(document, /no regenera imágenes por defecto/i);
  assert.match(document, /horizontal 16:9 es la portada/i);
  assert.match(document, /vertical\s+es una segunda escena\s+narrativa/i);
  assert.match(document, /una sola frase filosófica de 8 a\s+22 palabras/i);
  assert.match(document, /Universo canónico: 41 mitos/i);
});

/**
 * La página pública dejó de ser una fotocopia del estándar interno: las
 * especificaciones de imagen y de operación (16:9, vertical, regeneración,
 * prueba en navegador) viven en `docs/metodologia-revision-mitos.md` y las
 * asegura el caso de arriba —`no regenera imágenes por defecto`,
 * `horizontal 16:9 es la portada`, `vertical es una segunda escena narrativa`
 * y `navegador real`, además de la sección «Validación local y prueba en
 * producción»—. Aquí se pinta lo que la página le promete al LECTOR: qué puede
 * creerle a un relato y qué hacer si algo está mal.
 */
test("la página pública expone las reglas críticas", async () => {
  // La prosa vive dentro de JSX, así que el formateador la parte donde quiera:
  // una frase pinchada aquí puede quedar con un salto de línea en medio y hacer
  // fallar el test sin que nadie haya tocado el texto. Se compara contra el
  // fuente con los espacios colapsados; los regex siguen diciendo lo mismo.
  const page = (await read("src/app/metodologia/page.js")).replace(/\s+/g, " ");

  assert.match(page, /En Relato solo ocurre la historia/i);
  assert.match(page, /Un niño puede seguir la acción/i);
  assert.match(page, /no creamos taxonomías/i);
  assert.match(page, /Integridad del registro y posibilidad de corregir/i);
  assert.match(page, /una sola frase filosófica de 8 a\s+22 palabras/i);
  assert.match(page, /Cómo leemos las crónicas coloniales/i);
  assert.match(page, /Comparar sin borrar las diferencias/i);
  assert.match(page, /Correcciones, comunidad y derecho de respuesta/i);

  // Las promesas que sostienen la confianza del lector.
  assert.match(page, /su bibliografía está pendiente/i);
  assert.match(page, /no decide cuál nombre es más auténtico/i);
  assert.match(page, /hacen falta territorio, transmisión y fuentes/i);
  assert.match(
    page,
    /Una corrección documentada tiene prioridad sobre la consistencia del\s+archivo/i
  );
  assert.match(page, /adaptaciones editoriales para lectura digital/i);

  // La cobertura de fuentes se interpola desde la base, nunca se escribe a
  // mano: un número congelado convierte la sección más honesta de la página en
  // la más falsa.
  assert.match(page, /getSourceCoverageStats/);
  assert.doesNotMatch(page, /\d+ de las \d+ fichas/);

  assert.match(page, /updated="3 de septiembre de 2026"/i);
});

test("las páginas editoriales públicas no atribuyen el trabajo a IA", async () => {
  const publicPages = await Promise.all([
    read("src/app/metodologia/page.js"),
    read("src/app/privacidad/page.js"),
    read("src/app/sobre-el-proyecto/page.js"),
  ]);
  const forbidden = /\bIA\b|inteligencia artificial|OpenAI|asistencia digital/i;

  for (const page of publicPages) {
    assert.doesNotMatch(page, forbidden);
  }
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
