import assert from "node:assert/strict";
import test from "node:test";

import {
  addedEperaraSlugs,
  canonicalEperaraSlugs,
  eperaraCategoryBySlug,
  replacedSyntheticEperaraSlugs,
} from "../../editorial/eperara/universe.mjs";

test("conserva la URL heredada y añade únicamente la Ley de Origen", () => {
  assert.deepEqual(canonicalEperaraSlugs, [
    "tachi-akhore-y-la-palabra-de-mangle",
    "origen-del-pueblo-eperara",
  ]);
  assert.deepEqual(addedEperaraSlugs, ["origen-del-pueblo-eperara"]);
  assert.deepEqual(replacedSyntheticEperaraSlugs, [
    "tachi-akhore-y-la-palabra-de-mangle",
  ]);
});

test("usa solamente la categoría Eperara ya existente", () => {
  assert.deepEqual(
    new Set(Object.values(eperaraCategoryBySlug)),
    new Set(["Pacífico > Nariño > Eperara Siapidara"]),
  );
});
