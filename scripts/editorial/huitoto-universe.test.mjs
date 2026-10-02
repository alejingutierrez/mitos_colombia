import assert from "node:assert/strict";
import test from "node:test";

import {
  assertHuitotoUniverse,
  canonicalHuitotoSlugs,
  huitotoCategoryBySlug,
  huitotoEditorialDecisions,
  inheritedHuitotoSlugs,
} from "../../editorial/huitoto/universe.mjs";

test("conserva las veintidós rutas y declara un ciclo compartido", () => {
  assert.deepEqual(assertHuitotoUniverse(), {
    inherited: 22,
    canonical: 22,
    corrected: 22,
    added: 0,
    unpublished: 0,
    unifiedCycles: 1,
  });
  assert.equal(inheritedHuitotoSlugs.length, 22);
  assert.equal(canonicalHuitotoSlugs.length, 22);
  assert.deepEqual(
    new Set(inheritedHuitotoSlugs),
    new Set(canonicalHuitotoSlugs),
  );
  assert.equal(
    huitotoEditorialDecisions.yarokamena.action,
    "keep-two-routes-as-declared-windows-into-one-cycle",
  );
  assert.equal(huitotoEditorialDecisions.additions.action, "add-none");
  assert.equal(
    huitotoEditorialDecisions.media.action,
    "replace-all-twenty-two-pairs-with-approved-flat-2d-pairs",
  );
});

test("mantiene una taxonomía Huitoto visible y sin duplicados", () => {
  assert.equal(new Set(canonicalHuitotoSlugs).size, 22);
  assert.deepEqual(
    new Set(Object.values(huitotoCategoryBySlug)),
    new Set(["Amazonía > Caquetá y Putumayo > Huitoto / Murui-Muina"]),
  );
  assert.ok(
    inheritedHuitotoSlugs.every((slug) =>
      canonicalHuitotoSlugs.includes(slug),
    ),
  );
});
