import assert from "node:assert/strict";
import test from "node:test";

import {
  assertKuivaUniverse,
  canonicalKuivaSlugs,
  inheritedKuivaSlugs,
  kuivaCategoryBySlug,
  kuivaEditorialDecisions,
} from "../../editorial/kuiva/universe.mjs";

test("corrige la ficha heredada y añade solo la inundación documentada", () => {
  assert.deepEqual(assertKuivaUniverse(), {
    inherited: 1,
    canonical: 2,
    corrected: 1,
    added: 1,
    unified: 1,
  });
  assert.deepEqual(inheritedKuivaSlugs, ["creacion-kuibas"]);
  assert.deepEqual(
    new Set(canonicalKuivaSlugs),
    new Set(["creacion-kuibas", "namon-y-la-inundacion"]),
  );
  assert.equal(
    kuivaEditorialDecisions.withheld.action,
    "do-not-create-from-titles-only",
  );
});

test("usa una taxonomía visible común y conserva la ruta histórica", () => {
  assert.deepEqual(
    new Set(Object.values(kuivaCategoryBySlug)),
    new Set(["Orinoquía > Casanare > Kuiva (Wamonae)"]),
  );
  assert.ok(inheritedKuivaSlugs.every((slug) => canonicalKuivaSlugs.includes(slug)));
});
