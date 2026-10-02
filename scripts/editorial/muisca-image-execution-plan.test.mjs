import assert from "node:assert/strict";
import test from "node:test";

import {
  buildMuiscaImageExecutionPlan,
  CONSERVED_VERTICAL_POLICIES,
} from "../../editorial/muisca/image-execution-plan.mjs";

test("el plan aprobado limita la generación a 34 imágenes y conserva 20 verticales 2:3", () => {
  const plan = buildMuiscaImageExecutionPlan();

  assert.deepEqual(plan.summary, {
    myths: 41,
    horizontalGenerations: 13,
    verticalGenerations: 21,
    totalGenerations: 34,
    adaptations: 0,
    keptAtTwoByThree: 20,
    unresolved: 0,
  });
  assert.equal(new Set(plan.horizontalGenerationSlugs).size, 13);
  assert.equal(new Set(plan.verticalGenerationSlugs).size, 21);
  assert.ok(
    plan.horizontalGenerationSlugs.every((slug) =>
      plan.verticalGenerationSlugs.includes(slug),
    ),
  );
});

test("la política de adaptación añade 20 recortes sin nuevas generaciones", () => {
  const plan = buildMuiscaImageExecutionPlan({
    conservedVerticalPolicy: CONSERVED_VERTICAL_POLICIES.ADAPT_9_16,
  });

  assert.equal(plan.summary.totalGenerations, 34);
  assert.equal(plan.summary.adaptations, 20);
  assert.equal(plan.summary.unresolved, 0);
  assert.equal(plan.conservedSlugs.length, 20);
});

test("mantener 2:3 requiere una política explícita y no altera la selección", () => {
  const plan = buildMuiscaImageExecutionPlan({
    conservedVerticalPolicy: CONSERVED_VERTICAL_POLICIES.KEEP_2_3,
  });

  assert.equal(plan.summary.totalGenerations, 34);
  assert.equal(plan.summary.keptAtTwoByThree, 20);
  assert.equal(plan.summary.unresolved, 0);
});

test("el plan rechaza políticas desconocidas", () => {
  assert.throws(
    () =>
      buildMuiscaImageExecutionPlan({
        conservedVerticalPolicy: "CROP_SIN_REVISAR",
      }),
    /Política de verticales conservadas desconocida/,
  );
});
