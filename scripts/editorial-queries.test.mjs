import assert from "node:assert/strict";
import test from "node:test";

import {
  buildEditorialQueries,
  buildGeoQueries,
} from "../src/lib/editorial-queries.js";

test("sin título no hay consultas: el buscador no se llama en balde", () => {
  assert.deepEqual(buildGeoQueries({ region: "Andina" }), []);
  assert.deepEqual(buildEditorialQueries({ community: "Muisca" }), []);
});

test("las consultas geográficas anclan en topónimo, comunidad y región", () => {
  const queries = buildGeoQueries({
    title: "La laguna de Iguaque",
    region: "Andina",
    community: "Muisca",
  });
  assert.equal(queries.length, 3);
  assert.equal(queries[0], "La laguna de Iguaque Andina Colombia ubicación");
  assert.equal(queries[1], "La laguna de Iguaque Muisca territorio Colombia");
  assert.match(queries[2], /coordenadas/);
});

test("sin comunidad se cae la consulta que la necesitaba, no se deja hueco", () => {
  const queries = buildGeoQueries({ title: "El Mohán", region: "Andina" });
  assert.equal(queries.length, 2);
  assert.ok(queries.every((q) => q.includes("El Mohán")));
});

test("las consultas editoriales cubren relato, origen, oralidad y academia", () => {
  const queries = buildEditorialQueries({
    title: "Bachué",
    region: "Andina",
    community: "Muisca",
    focusKeyword: "madre de los muiscas",
  });
  assert.equal(queries.length, 5);
  assert.equal(queries[0], "Bachué mito Muisca Colombia");
  assert.equal(queries[2], "Bachué Muisca tradición oral");
  assert.equal(queries[3], "madre de los muiscas Colombia");
  assert.match(queries[4], /etnografía OR antropología/);
});

test("un foco que repite el título no genera una consulta duplicada", () => {
  const queries = buildEditorialQueries({
    title: "Bachué",
    region: "Andina",
    community: "Muisca",
    focusKeyword: "bachué",
  });
  assert.equal(queries.length, 4);
  assert.ok(!queries.includes("bachué Colombia"));
});

test("los espacios de más no ensucian la consulta", () => {
  const [primera] = buildEditorialQueries({
    title: "  El   Dorado  ",
    community: " Muisca ",
  });
  assert.equal(primera, "El Dorado mito Muisca Colombia");
});
