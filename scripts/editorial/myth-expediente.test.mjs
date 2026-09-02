import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import {
  buildSourceGroups,
  formatReviewDate,
  normalizeSource,
  provenanceTrail,
} from "../../src/components/templates/myth-expediente.js";

const root = new URL("../../", import.meta.url);
const read = (path) => readFile(new URL(path, root), "utf8");

test("la procedencia se dice una vez: sin repetir región ni comunidad, sin comodines", () => {
  // Caso real de `bachue`: los tres campos se solapan y la línea anterior
  // salía "… de Muiscas, Andina · Andina > Varios > Muiscas.".
  assert.deepEqual(
    provenanceTrail({
      region: "Andina",
      community: "Muiscas",
      categoryPath: "Andina > Varios > Muiscas",
    }),
    ["Muiscas", "Andina"]
  );

  // Cuando el departamento sí aporta, entra entre la comunidad y la región.
  assert.deepEqual(
    provenanceTrail({
      region: "Caribe",
      community: "Wayúu",
      categoryPath: "Caribe > Guajira > Wayúu",
    }),
    ["Wayúu", "Guajira", "Caribe"]
  );

  // "Varios" es el marcador de "sin precisar" del archivo, no un lugar.
  assert.deepEqual(
    provenanceTrail({
      region: "Varios",
      community: "Mixto",
      categoryPath: "Varios > Varios > Mixto",
    }),
    ["Mixto"]
  );

  assert.deepEqual(provenanceTrail(), []);
  assert.deepEqual(provenanceTrail({ region: "  " }), []);
});

test("una fuente sin URL utilizable no entra en la bibliografía", () => {
  assert.equal(normalizeSource({ title: "Sin enlace" }), null);
  assert.equal(normalizeSource({ title: "Raro", url: "javascript:alert(1)" }), null);
  assert.equal(normalizeSource({ url: "https://example.org" }), null);

  const ok = normalizeSource({
    title: "Crónica",
    url: "https://www.archive.org/x?y=1",
    summary: "Nota",
  });
  assert.equal(ok.host, "archive.org");
  assert.equal(ok.summary, "Nota");
});

test("las dos listas se agrupan por función y no se repiten entre sí", () => {
  // 262 referencias del archivo están en las dos listas a la vez.
  const groups = buildSourceGroups({
    keySources: [
      { title: "Simón", url: "https://archive.org/a" },
      { title: "Zamora", url: "https://cervantesvirtual.com/b" },
    ],
    sources: [
      { title: "Simón (repetida)", url: "https://archive.org/a" },
      { title: "Parques Nacionales", url: "https://parquesnacionales.gov.co/c" },
      { title: "Sin enlace" },
    ],
  });

  assert.equal(groups.primary.length, 2);
  assert.equal(groups.secondary.length, 1);
  assert.equal(groups.total, 3);
  assert.equal(groups.secondary[0].title, "Parques Nacionales");
  assert.equal(buildSourceGroups().total, 0);
});

test("no se trunca la bibliografía larga", () => {
  // El corte anterior en 12 dejaba fuera referencias en 53 de los 378 mitos
  // con expediente; el mayor tiene 33.
  const many = Array.from({ length: 33 }, (_, i) => ({
    title: `Fuente ${i}`,
    url: `https://ejemplo.org/${i}`,
  }));
  assert.equal(buildSourceGroups({ sources: many }).total, 33);
});

test("la fecha de revisión se escribe en español de Colombia o no se escribe", () => {
  assert.equal(formatReviewDate("2026-08-19T12:00:00.000Z"), "19 de agosto de 2026");
  assert.equal(formatReviewDate("no es una fecha"), "");
  assert.equal(formatReviewDate(null), "");
});

test("la obra del relato toma la proporción real de cada pieza, no una caja 9/16", async () => {
  const template = await read("src/components/templates/MythDetailTemplate.js");

  // La caja dura dejaba franjas negras en el 65 % del archivo (388 de 596
  // verticales son 2:3, no 9:16).
  assert.doesNotMatch(template, /ratio="9 \/ 16"/);
  assert.doesNotMatch(template, /bg-\[rgb\(var\(--atlas-night\)\)\][^\n]*inline-scene/);
  assert.match(template, /getImageAspect/);
  assert.match(template, /FALLBACK_IMAGE_ASPECT/);
  assert.match(template, /aspectRatio: `\$\{aspect\.w\} \/ \$\{aspect\.h\}`/);

  // El techo se aplica al ANCHO para no romper la proporción al recortar alto.
  assert.match(template, /maxWidth: `calc\(\$\{ART_HEIGHT_CAP\} \* \$\{aspect\.w\} \/ \$\{aspect\.h\}\)`/);
  assert.match(template, /const ART_HEIGHT_CAP = "max\(20rem, 100svh - 11rem\)"/);

  // Una obra apaisada no se mete a la fuerza en la columna de retrato.
  assert.match(template, /const PORTRAIT_MAX_RATIO = 0\.95/);
  assert.match(template, /artIsPortrait\s*$/m);
});

test("la portada móvil mide la obra en vez de suponerla 2:3", async () => {
  const hero = await read("src/components/templates/MythHero.js");

  assert.match(hero, /function mobileArtHeight/);
  assert.match(hero, /"--art": mobileArtHeight\(myth\.verticalImageUrl\)/);
  // 150vw deja de ser el valor de todas las verticales y pasa a ser el respaldo.
  assert.match(hero, /PORTRAIT_ART = "150vw"/);
  assert.match(hero, /if \(aspect\.ratio >= 1\) return FALLBACK_ART;/);
});

test("el riel no promete una sección de fuentes que no existe", async () => {
  const template = await read("src/components/templates/MythDetailTemplate.js");

  // 218 de los 596 mitos no tienen ni una fuente publicada.
  assert.doesNotMatch(template, /label: "Fuentes", visible: true/);
  assert.match(template, /label: hasSources \? "Fuentes" : "Procedencia"/);
  assert.match(template, /const hasSources = sourceGroups\.total > 0;/);
});

test("procedencia y fuentes dejan de maquetarse como dos columnas iguales", async () => {
  const [template, sections] = await Promise.all([
    read("src/components/templates/MythDetailTemplate.js"),
    read("src/components/templates/MythSections.js"),
  ]);

  assert.doesNotMatch(template, /lg:grid-cols-2/);
  assert.doesNotMatch(sections, /export function ProcedenciaBlock/);
  assert.doesNotMatch(sections, /export function FuentesBlock/);
  assert.match(sections, /export function ExpedienteBlock/);
  // El rótulo cambia con lo que la sección realmente contiene.
  assert.match(sections, /hasSources \? "Fuentes" : "Procedencia"/);
});
