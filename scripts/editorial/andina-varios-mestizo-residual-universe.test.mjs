import assert from "node:assert/strict";
import test from "node:test";

import {
  andinaVariosMestizoResidualEditorialDecisions,
  assertAndinaVariosMestizoResidualUniverse,
} from "../../editorial/andina-varios-mestizo-residual/universe.mjs";

test("cierra las cinco rutas del residual Andina Varios Mestizo", () => {
  assert.deepEqual(assertAndinaVariosMestizoResidualUniverse(), {
    inherited: 5,
    canonical: 5,
    reviewedRoutes: 5,
    added: 0,
    unpublished: 0,
    distinctMotifsPreserved: 5,
    spreadsheetVariantsIntegrated: 3,
  });
  assert.equal(
    andinaVariosMestizoResidualEditorialDecisions.media.action,
    "prepare-ten-openai-images-with-provenance",
  );
  assert.match(
    andinaVariosMestizoResidualEditorialDecisions["los-meneses"].reason,
    /muchachos-espíritu/i,
  );
});
