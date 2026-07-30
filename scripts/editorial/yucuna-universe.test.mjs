import assert from "node:assert/strict";
import test from "node:test";

import {
  addedYucunaSlugs,
  assertYucunaUniverse,
  canonicalYucunaSlugs,
  inheritedYucunaSlugs,
  reviewedYucunaWorklistSlugs,
  transferredYucunaSlugs,
  yucunaCategoryBySlug,
  yucunaContextOnlyNarratives,
  yucunaEditorialDecisions,
} from "../../editorial/yucuna/universe.mjs";

test("corrige el universo Yucuna sin despublicar la ruta mal atribuida", () => {
  assert.deepEqual(assertYucunaUniverse(), {
    inherited: 3,
    canonicalYucuna: 3,
    correctedYucuna: 2,
    addedYucuna: 1,
    transferredToHuitoto: 1,
    unpublished: 0,
    contextualized: 4,
    reviewedRoutes: 4,
  });
  assert.deepEqual(inheritedYucunaSlugs, [
    "el-nacimiento-de-los-matapi",
    "el-origen-de-las-frutas",
    "kanuma",
  ]);
  assert.deepEqual(addedYucunaSlugs, [
    "karipu-lakena-y-la-primera-noche",
  ]);
  assert.deepEqual(transferredYucunaSlugs, ["el-origen-de-las-frutas"]);
  assert.equal(canonicalYucunaSlugs.length, 3);
  assert.equal(reviewedYucunaWorklistSlugs.length, 4);
  assert.equal(yucunaContextOnlyNarratives.length, 4);
  assert.equal(
    yucunaEditorialDecisions.media.action,
    "generate-eight-new-openai-images-with-provenance",
  );
});

test("mantiene taxonomías existentes y separa la transferencia", () => {
  assert.equal(new Set(reviewedYucunaWorklistSlugs).size, 4);
  assert.deepEqual(
    new Set(
      canonicalYucunaSlugs.map((slug) => yucunaCategoryBySlug[slug]),
    ),
    new Set(["Amazonía > Amazonas > Yucuna"]),
  );
  assert.equal(
    yucunaCategoryBySlug["el-origen-de-las-frutas"],
    "Amazonía > Caquetá y Putumayo > Huitoto / Murui-Muina",
  );
});
