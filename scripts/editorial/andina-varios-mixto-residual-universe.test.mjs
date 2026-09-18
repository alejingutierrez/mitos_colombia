import assert from "node:assert/strict";
import test from "node:test";

import {
  andinaVariosMixtoResidualEditorialDecisions,
  assertAndinaVariosMixtoResidualUniverse,
} from "../../editorial/andina-varios-mixto-residual/universe.mjs";

test("cierra las tres rutas del residual Andina Varios Mixto", () => {
  assert.deepEqual(assertAndinaVariosMixtoResidualUniverse(), {
    inherited: 3,
    canonical: 3,
    reviewedRoutes: 3,
    added: 0,
    unpublished: 0,
    unifiedSpreadsheetRows: 2,
  });
  assert.equal(
    andinaVariosMixtoResidualEditorialDecisions.media.action,
    "prepare-six-openai-images-with-provenance",
  );
  assert.match(
    andinaVariosMixtoResidualEditorialDecisions["esperanza-en-el-oriente"].reason,
    /hipótesis comparativa/i,
  );
});
