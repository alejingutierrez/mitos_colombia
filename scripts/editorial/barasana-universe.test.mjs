import assert from "node:assert/strict";
import test from "node:test";

import {
  addedBarasanaSlugs,
  assertBarasanaUniverse,
  canonicalBarasanaSlugs,
  inheritedBarasanaSlugs,
  barasanaCategoryBySlug,
  barasanaEditorialDecisions,
} from "../../editorial/barasana/universe.mjs";

test("corrige la ficha heredada y añade cinco ciclos documentados", () => {
  assert.deepEqual(assertBarasanaUniverse(), {
    inherited: 1,
    canonical: 6,
    corrected: 1,
    added: 5,
    unified: 0,
  });
  assert.deepEqual(inheritedBarasanaSlugs, ["la-luna"]);
  assert.deepEqual(addedBarasanaSlugs, [
    "sol-luna-dia-y-noche",
    "kahe-sawari-kata-yai-y-el-surgimiento-barasano",
    "la-cuerda-de-leche-y-la-anaconda-yeba",
    "los-cerros-estantillos-y-la-cera-de-abejas",
    "el-origen-de-la-gente-de-los-frutales-silvestres",
  ]);
  assert.equal(canonicalBarasanaSlugs.length, 6);
  assert.equal(
    barasanaEditorialDecisions.sacredKnowledge.action,
    "do-not-exhaust-or-operationalize-sacred-ritual-material",
  );
});

test("mantiene una taxonomía Barasana visible y sin duplicados", () => {
  assert.equal(new Set(canonicalBarasanaSlugs).size, 6);
  assert.deepEqual(
    new Set(Object.values(barasanaCategoryBySlug)),
    new Set(["Amazonía > Vaupés > Barasana"]),
  );
  assert.ok(
    inheritedBarasanaSlugs.every((slug) =>
      canonicalBarasanaSlugs.includes(slug),
    ),
  );
});
