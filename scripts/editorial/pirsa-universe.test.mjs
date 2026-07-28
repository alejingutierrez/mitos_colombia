import assert from "node:assert/strict";
import test from "node:test";

import {
  assertPirsaUniverse,
  canonicalPirsaSlugs,
  inheritedPirsaSlugs,
  pirsaCategoryBySlug,
  pirsaContextOnlyNarratives,
} from "../../editorial/pirsa/universe.mjs";

test("conserva la URL heredada y corrige su clasificación narrativa", () => {
  assert.deepEqual(assertPirsaUniverse(), {
    inherited: 1,
    canonical: 1,
    correctedColonialStories: 1,
    added: 0,
    contextualized: 2,
  });
  assert.deepEqual(canonicalPirsaSlugs, inheritedPirsaSlugs);
  assert.equal(new Set(canonicalPirsaSlugs).size, 1);
});

test("mantiene como contexto los motivos sin trama autónoma suficiente", () => {
  assert.equal(pirsaContextOnlyNarratives.length, 2);
  assert.ok(
    pirsaContextOnlyNarratives.some(({ title }) => /cerro Picará/i.test(title)),
  );
  assert.ok(
    pirsaContextOnlyNarratives.some(({ title }) =>
      /Piedra Herrada/i.test(title),
    ),
  );
});

test("mantiene la taxonomía Pirsa en Caldas", () => {
  assert.deepEqual(
    new Set(Object.values(pirsaCategoryBySlug)),
    new Set(["Andina > Caldas > Pirsa"]),
  );
});
