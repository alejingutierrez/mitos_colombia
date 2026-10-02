import assert from "node:assert/strict";
import test from "node:test";

import {
  addedWounaanSlugs,
  assertWounaanUniverse,
  canonicalWounaanSlugs,
  sourceWounaanSlugs,
  wounaanCategoryBySlug,
  wounaanRelatedCycle,
} from "../../editorial/wounaan/universe.mjs";

test("el universo Wounaan conserva 4 URL y añade únicamente Madre Ñame", () => {
  assert.deepEqual(assertWounaanUniverse(), {
    source: 4,
    canonical: 5,
    added: 1,
    relatedCyclePages: 2,
  });
  assert.deepEqual(addedWounaanSlugs, ["madre-name"]);
  assert.equal(sourceWounaanSlugs.length, 4);
  assert.equal(canonicalWounaanSlugs.length, 5);
});

test("barca y sueño forman un ciclo relacionado sin borrar sus URL", () => {
  assert.deepEqual(wounaanRelatedCycle, {
    primary: "la-barca-de-dos-tintas",
    companion: "el-baston-de-sueno",
    reason:
      "Las dos URL conservadas documentan aspectos relacionados de la rogativa: la barca ritual y los sueños que comunican sus motivos.",
  });
  assert.ok(canonicalWounaanSlugs.includes(wounaanRelatedCycle.primary));
  assert.ok(canonicalWounaanSlugs.includes(wounaanRelatedCycle.companion));
});

test("la revisión usa únicamente la ruta Wounaan ya existente", () => {
  assert.deepEqual(
    [...new Set(Object.values(wounaanCategoryBySlug))],
    ["Pacífico > Chocó > Wounaan"],
  );
});
