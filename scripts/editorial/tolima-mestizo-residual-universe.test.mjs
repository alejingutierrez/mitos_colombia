import assert from "node:assert/strict";
import test from "node:test";

import {
  assertTolimaMestizoResidualUniverse,
  tolimaMestizoResidualEditorialDecisions,
} from "../../editorial/tolima-mestizo-residual/universe.mjs";

test("cierra tres rutas Mestizo y la Patasola cruzada de Tolima Mixto", () => {
  assert.deepEqual(assertTolimaMestizoResidualUniverse(), {
    inherited: 3,
    canonical: 3,
    reviewedRoutes: 4,
    crossCategoryRoutes: 1,
    added: 0,
    unpublished: 0,
    spreadsheetFragmentsIntegrated: 8,
    distinctPatasolaCorpora: 2,
  });
  assert.equal(
    tolimaMestizoResidualEditorialDecisions.media.action,
    "prepare-eight-openai-images-with-provenance",
  );
  assert.match(
    tolimaMestizoResidualEditorialDecisions["la-patasola-mixto"].reason,
    /cinco filas[^]+un solo relato/i,
  );
});
