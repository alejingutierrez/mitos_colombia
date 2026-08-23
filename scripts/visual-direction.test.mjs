import assert from "node:assert/strict";
import test from "node:test";

import {
  COMPOSITION_KEYS,
  COMPOSITION_SCHEMAS,
  getCommunityCraft,
  getCompositionLines,
  getEraLines,
  hasCommunityCraft,
  inferEra,
} from "../src/lib/visual-direction.js";
import { buildCraftImagePrompt } from "../src/lib/image-generation.js";

test("el catálogo de composición no vuelve a centrar por defecto", () => {
  assert.ok(COMPOSITION_KEYS.length >= 9);

  // `simetria` es la única que centra: tiene que elegirse a propósito.
  const centran = COMPOSITION_KEYS.filter((key) =>
    /CENTRADA/.test(COMPOSITION_SCHEMAS[key].lines.join(" "))
  );
  assert.deepEqual(centran, ["simetria"]);

  // Y tiene que existir al menos una que mande la figura a la izquierda, que
  // era justo lo que nunca pasaba.
  assert.match(
    COMPOSITION_SCHEMAS.peso_contrario.lines.join(" "),
    /TERCIO IZQUIERDO/
  );
});

test("la época se deduce de la comunidad y separa los dos mundos", () => {
  assert.equal(inferEra("Muiscas"), "prehispanico");
  assert.equal(inferEra("Mestizo"), "colonial_rural");
  assert.equal(inferEra("Mixto"), "colonial_rural");
  assert.equal(inferEra(""), "indeterminado");
  // El mito puede forzar el registro cuando el relato ocurre en el contacto.
  assert.equal(inferEra("Muiscas", "colonial_rural"), "colonial_rural");

  // Cada registro prohíbe explícitamente el mundo material del otro.
  assert.match(getEraLines("prehispanico").join(" "), /cruz, iglesia|caballo/);
  assert.match(getEraLines("colonial_rural").join(" "), /malocas, tunjos/);
});

test("una comunidad sin entrada prohíbe inventar en vez de improvisar", () => {
  assert.equal(hasCommunityCraft("Muiscas"), true);
  assert.equal(hasCommunityCraft("Chamí"), true);
  assert.equal(hasCommunityCraft("Mestizo"), true);
  assert.equal(hasCommunityCraft("Panán"), false);

  const sinEntrada = getCommunityCraft("Panán");
  assert.match(sinEntrada, /NO inventar simbolos/);
  assert.match(sinEntrada, /geografia de la region/);
  assert.equal(getCommunityCraft(""), "");
});

test("el prompt del sitio incorpora composición y época", () => {
  const conEsquema = buildCraftImagePrompt({
    entity: { name: "La Llorona", region: "Andina", community: "Mestizo" },
    composition: "peso_contrario",
  });
  assert.match(conEsquema, /Esquema de composicion:/);
  assert.match(conEsquema, /TERCIO IZQUIERDO/);
  assert.match(conEsquema, /Epoca:/);
  assert.match(conEsquema, /bahareque/);
  assert.match(conEsquema, /NO convertirlo en escena precolombina/);

  // Sin esquema no se inventa un bloque de composición vacío.
  const sinEsquema = buildCraftImagePrompt({
    entity: { name: "Bachué", region: "Andina", community: "Muiscas" },
  });
  assert.doesNotMatch(sinEsquema, /Esquema de composicion:/);
  assert.match(sinEsquema, /mundo prehispánico/);
});

test("la frontalidad describe la técnica, no la posición de la cámara", () => {
  const prompt = buildCraftImagePrompt({
    entity: { name: "Bachué", region: "Andina", community: "Muiscas" },
    composition: "contrapicado",
  });

  // Ya no se exige una composición frontal y estable...
  assert.doesNotMatch(prompt, /composicion frontal y estable/);
  assert.doesNotMatch(prompt, /sin camara inclinada/);
  // ...pero se sigue exigiendo que sea una pieza física y no un render.
  assert.match(prompt, /sin verse como render 3D/);
  assert.match(prompt, /se fotografia una pieza fisica de papel, no un render/);
  assert.match(prompt, /cámara BAJA/);
});

test("cada esquema declara etiqueta, pista y al menos una línea de prompt", () => {
  for (const [key, schema] of Object.entries(COMPOSITION_SCHEMAS)) {
    assert.ok(schema.label, `${key} sin label`);
    assert.ok(schema.hint, `${key} sin hint`);
    assert.ok(schema.lines.length > 0, `${key} sin lines`);
    assert.deepEqual(getCompositionLines(key), schema.lines);
  }
  assert.deepEqual(getCompositionLines("no-existe"), []);
});
