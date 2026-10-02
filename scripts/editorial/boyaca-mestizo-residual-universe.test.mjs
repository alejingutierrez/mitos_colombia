import assert from "node:assert/strict";
import test from "node:test";

import {
  boyacaMestizoResidualEditorialDecisions,
  assertBoyacaMestizoResidualUniverse,
} from "../../editorial/boyaca-mestizo-residual/universe.mjs";

test("cierra la ruta residual de Boyacá Mestizo", () => {
  assert.deepEqual(assertBoyacaMestizoResidualUniverse(), {
    inherited: 1,
    canonical: 1,
    reviewedRoutes: 1,
    added: 0,
    unpublished: 0,
    unifiedSpreadsheetRows: 5,
  });
  assert.equal(
    boyacaMestizoResidualEditorialDecisions.media.action,
    "prepare-two-openai-images-with-provenance",
  );
  assert.match(boyacaMestizoResidualEditorialDecisions.place.reason, /sitio arqueológico/);
});
