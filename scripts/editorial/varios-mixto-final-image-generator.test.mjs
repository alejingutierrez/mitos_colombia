import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";

test("el generador prepara catorce imágenes OpenAI", () => {
  const result = spawnSync(process.execPath, ["scripts/editorial/generate-varios-mixto-final-images.mjs"], { cwd: process.cwd(), encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr);
  const output = JSON.parse(result.stdout);
  assert.equal(output.mode, "dry-run");
  assert.equal(output.provider, "openai");
  assert.equal(output.model, "gpt-image-2");
  assert.equal(output.quality, "high");
  assert.equal(output.images, 14);
  assert.equal(output.estimatedOutputCostUsd, 2.31);
  assert.equal(new Set(output.keys).size, 14);
});
