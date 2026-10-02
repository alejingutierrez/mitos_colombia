import assert from "node:assert/strict";
import test from "node:test";

import {
  IMAGE_QUALITY_POLICY,
  qualityForTriptychAct,
  qualityForVisualAsset,
} from "../src/lib/image-quality-policy.js";

test("sólo la entrada horizontal del tríptico usa high", () => {
  assert.deepEqual(IMAGE_QUALITY_POLICY.triptych, {
    entrada: "high",
    acto: "medium",
    huella: "medium",
  });
  assert.equal(qualityForTriptychAct("entrada"), "high");
  assert.equal(qualityForTriptychAct("acto"), "medium");
  assert.equal(qualityForTriptychAct("huella"), "medium");
});

test("Biblia, keyframes y las demás imágenes usan medium", () => {
  assert.equal(qualityForVisualAsset({ family: "bible" }), "medium");
  assert.equal(qualityForVisualAsset({ family: "keyframe" }), "medium");
  assert.equal(qualityForVisualAsset({ family: "other" }), "medium");
});

test("un rol de tríptico desconocido falla en vez de caer silenciosamente en high", () => {
  assert.throws(() => qualityForTriptychAct("portada"), /desconocido/);
});
