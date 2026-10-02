import assert from "node:assert/strict";
import test from "node:test";

import {
  addedUwaSlugs,
  assertUwaUniverse,
  uwaCategoryBySlug,
  uwaContextOnlyNarratives,
  canonicalUwaSlugs,
  inheritedUwaSlugs,
} from "../../editorial/uwa/universe.mjs";

test("define un universo U’wa acotado de once páginas", () => {
  assert.deepEqual(assertUwaUniverse(), {
    inherited: 1,
    added: 10,
    canonical: 11,
    contextualized: 3,
  });
  assert.equal(inheritedUwaSlugs.length, 1);
  assert.equal(addedUwaSlugs.length, 10);
  assert.equal(new Set(canonicalUwaSlugs).size, 11);
});

test("contextualiza los ciclos cantados sin inflarlos como cuentos aislados", () => {
  assert.equal(uwaContextOnlyNarratives.length, 3);
  assert.ok(
    uwaContextOnlyNarratives.some(
      ({ title, destination }) =>
        title === "Reowa y Aya" && destination === "creacion-u-wa",
    ),
  );
  assert.ok(
    uwaContextOnlyNarratives.some(
      ({ title, destination }) =>
        title === "El zorro y la zarigüeya y la soplada de los animales" &&
        destination === "las-hijas-del-sol-y-la-miel",
    ),
  );
  assert.ok(
    uwaContextOnlyNarratives.some(
      ({ title, destination }) =>
        title === "Las siete parejas sembradas en las lagunas" &&
        destination === "creacion-u-wa",
    ),
  );
});

test("conserva la taxonomía histórica sin crear una nueva categoría", () => {
  assert.deepEqual(
    new Set(Object.values(uwaCategoryBySlug)),
    new Set(["Andina > Boyacá > U'wa"]),
  );
});
