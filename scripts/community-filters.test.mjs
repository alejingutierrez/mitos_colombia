import assert from "node:assert/strict";
import test from "node:test";

import {
  filterAllowedCommunities,
  MIN_COMMUNITY_MYTHS,
} from "../src/lib/communityFilters.js";

test("conserva la landing Emberá revisada aunque el corpus genérico quede pequeño", () => {
  const allowed = filterAllowedCommunities([
    { name: "Embera", slug: "embera", myth_count: 1 },
    { name: "Vacía", slug: "vacia", myth_count: 0 },
    { name: "Pequeña", slug: "pequena", myth_count: MIN_COMMUNITY_MYTHS - 1 },
    { name: "Amplia", slug: "amplia", myth_count: MIN_COMMUNITY_MYTHS },
  ]);

  assert.deepEqual(
    allowed.map(({ slug }) => slug),
    ["embera", "amplia"],
  );
});

test("conserva la landing Wounaan revisada con sus cinco expedientes", () => {
  assert.deepEqual(
    filterAllowedCommunities([
      { slug: "wounaan", name: "Wounaan", myth_count: 5 },
      { slug: "sin-revisar", name: "Sin revisar", myth_count: 5 },
    ]),
    [{ slug: "wounaan", name: "Wounaan", myth_count: 5 }],
  );
});

test("conserva la landing Eperara revisada con sus dos expedientes", () => {
  assert.deepEqual(
    filterAllowedCommunities([
      {
        slug: "eperara-siapidara",
        name: "Eperara Siapidara",
        myth_count: 2,
      },
      { slug: "sin-revisar", name: "Sin revisar", myth_count: 2 },
    ]),
    [
      {
        slug: "eperara-siapidara",
        name: "Eperara Siapidara",
        myth_count: 2,
      },
    ],
  );
});

test("conserva la landing Awá revisada con sus dos expedientes", () => {
  assert.deepEqual(
    filterAllowedCommunities([
      { slug: "awa", name: "Awa", myth_count: 2 },
      { slug: "sin-revisar", name: "Sin revisar", myth_count: 2 },
    ]),
    [{ slug: "awa", name: "Awa", myth_count: 2 }],
  );
});

test("conserva la landing Ansermas revisada con sus dos expedientes", () => {
  assert.deepEqual(
    filterAllowedCommunities([
      { slug: "ansermas", name: "Ansermas", myth_count: 2 },
      { slug: "sin-revisar", name: "Sin revisar", myth_count: 2 },
    ]),
    [{ slug: "ansermas", name: "Ansermas", myth_count: 2 }],
  );
});

test("conserva la landing Cuycuyes revisada con sus dos expedientes", () => {
  assert.deepEqual(
    filterAllowedCommunities([
      { slug: "cuycuyes", name: "Cuycuyes", myth_count: 2 },
      { slug: "sin-revisar", name: "Sin revisar", myth_count: 2 },
    ]),
    [{ slug: "cuycuyes", name: "Cuycuyes", myth_count: 2 }],
  );
});

test("conserva la landing Pirsa revisada con su único expediente", () => {
  assert.deepEqual(
    filterAllowedCommunities([
      { slug: "pirsa", name: "Pirsa", myth_count: 1 },
      { slug: "sin-revisar", name: "Sin revisar", myth_count: 1 },
    ]),
    [{ slug: "pirsa", name: "Pirsa", myth_count: 1 }],
  );
});

test("conserva la landing Quimbaya revisada con sus tres expedientes", () => {
  assert.deepEqual(
    filterAllowedCommunities([
      { slug: "quimbaya", name: "Quimbaya", myth_count: 3 },
      { slug: "sin-revisar", name: "Sin revisar", myth_count: 3 },
    ]),
    [{ slug: "quimbaya", name: "Quimbaya", myth_count: 3 }],
  );
});

test("conserva la landing Umbra revisada con sus dos expedientes", () => {
  assert.deepEqual(
    filterAllowedCommunities([
      { slug: "umbra", name: "Umbra", myth_count: 2 },
      { slug: "sin-revisar", name: "Sin revisar", myth_count: 2 },
    ]),
    [{ slug: "umbra", name: "Umbra", myth_count: 2 }],
  );
});

test("conserva la landing Yucuna revisada con sus tres expedientes", () => {
  assert.deepEqual(
    filterAllowedCommunities([
      { slug: "yucuna", name: "Yucuna", myth_count: 3 },
      { slug: "sin-revisar", name: "Sin revisar", myth_count: 3 },
    ]),
    [{ slug: "yucuna", name: "Yucuna", myth_count: 3 }],
  );
});

test("conserva la landing Yukpa revisada con sus cinco expedientes", () => {
  assert.deepEqual(
    filterAllowedCommunities([
      { slug: "yukpa", name: "Yukpa", myth_count: 5 },
      { slug: "sin-revisar", name: "Sin revisar", myth_count: 5 },
    ]),
    [{ slug: "yukpa", name: "Yukpa", myth_count: 5 }],
  );
});

test("la excepción Emberá no permite una fila duplicada sin mitos", () => {
  const allowed = filterAllowedCommunities([
    { name: "Embera", slug: "embera", myth_count: 0 },
  ]);
  assert.deepEqual(allowed, []);
});
