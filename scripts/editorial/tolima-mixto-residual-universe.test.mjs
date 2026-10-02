import assert from "node:assert/strict";
import test from "node:test";

import {
  assertTolimaMixtoResidualUniverse,
  tolimaMixtoResidualEditorialDecisions,
} from "../../editorial/tolima-mixto-residual/universe.mjs";

test("cierra las once rutas existentes del residual Tolima Mixto", () => {
  assert.deepEqual(assertTolimaMixtoResidualUniverse(), {
    inherited: 11,
    canonical: 11,
    reviewedRoutes: 11,
    added: 0,
    unpublished: 0,
    literaryFramesReclassified: 5,
    sourceConflationsCorrected: 6,
  });
  assert.equal(
    tolimaMixtoResidualEditorialDecisions.media.action,
    "prepare-twenty-two-openai-images-with-provenance",
  );
  assert.match(
    tolimaMixtoResidualEditorialDecisions["dioses-lares"].reason,
    /comparación católica externa/i,
  );
});
