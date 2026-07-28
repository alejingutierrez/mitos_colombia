import assert from "node:assert/strict";
import test from "node:test";

import {
  assertChamiUniverse,
  canonicalChamiSlugs,
  chamiCategoryBySlug,
  chamiEditorialDecisions,
  rioFrioPrimarySlugs,
  sourceChamiSlugs,
} from "../../editorial/chami/universe.mjs";

test("el universo Chamí conserva exactamente sus 21 URL", () => {
  assert.deepEqual(assertChamiUniverse(), {
    source: 21,
    canonical: 21,
    rioFrio: 14,
    regionalOrCycles: 7,
  });
  assert.deepEqual(canonicalChamiSlugs, sourceChamiSlugs);
});

test("distingue catorce relatos primarios y siete expedientes regionales", () => {
  assert.equal(rioFrioPrimarySlugs.length, 14);
  assert.equal(chamiEditorialDecisions.jinopotabar.kind, "cycle");
  assert.equal(
    chamiEditorialDecisions["el-origen-del-agua"].relation,
    "hentsera-y-el-agua",
  );
  assert.equal(
    chamiEditorialDecisions["las-transformaciones"].kind,
    "thematic-cycle",
  );
});

test("localiza 15 páginas en Valle, 4 en Risaralda y 2 en Caldas", () => {
  const counts = Object.values(chamiCategoryBySlug).reduce(
    (result, category) => {
      result[category] = (result[category] || 0) + 1;
      return result;
    },
    {},
  );
  assert.deepEqual(counts, {
    "Andina > Valle del Cauca > Chamí": 15,
    "Andina > Caldas > Chamí": 2,
    "Andina > Risaralda > Chamí": 4,
  });
});
