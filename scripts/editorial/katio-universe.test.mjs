import assert from "node:assert/strict";
import test from "node:test";

import {
  addedKatioSlugs,
  assertKatioUniverse,
  canonicalKatioSlugs,
  katioBoundaryTransfers,
  katioCategoryBySlug,
  katioReviewedSlugs,
  sourceKatioSlugs,
} from "../../editorial/katio/universe.mjs";

test("el universo Katío parte de 21 registros y queda en 19 páginas canónicas", () => {
  assert.deepEqual(assertKatioUniverse(), {
    source: 21,
    canonical: 19,
    boundaryTransfers: 3,
    added: 1,
    reviewed: 21,
  });
  assert.equal(sourceKatioSlugs.length, 21);
  assert.equal(canonicalKatioSlugs.length, 19);
  assert.equal(katioReviewedSlugs.length, 21);
  assert.deepEqual(addedKatioSlugs, ["baha"]);
});

test("las tres transferencias conservan URL y declaran su frontera cultural", () => {
  assert.deepEqual(Object.keys(katioBoundaryTransfers).sort(), [
    "dobaida",
    "el-gusano-gigante",
    "el-tesoro-de-dabeiba",
  ]);
  assert.deepEqual(katioBoundaryTransfers["el-gusano-gigante"], {
    region: "Andina",
    community: "Chamí",
    categoryPath: "Andina > Caldas > Chamí",
    reason:
      "La fuente identifica expresamente el relato de Surranabe como Chamí del occidente de Caldas.",
  });
  for (const slug of ["dobaida", "el-tesoro-de-dabeiba"]) {
    assert.equal(katioBoundaryTransfers[slug].community, "Mixto");
    assert.equal(
      katioBoundaryTransfers[slug].categoryPath,
      "Andina > Antioquia > Mixto",
    );
  }
});

test("la taxonomía Katío usa solo rutas existentes", () => {
  const counts = Object.values(katioCategoryBySlug).reduce(
    (result, category) => {
      result[category] = (result[category] || 0) + 1;
      return result;
    },
    {},
  );
  assert.deepEqual(counts, {
    "Andina > Varios > Katíos": 17,
    "Andina > Chocó > Katíos": 2,
    "Andina > Antioquia > Mixto": 2,
  });
});
