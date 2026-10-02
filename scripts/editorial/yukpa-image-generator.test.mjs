import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";

test("el generador Yukpa prepara diez imágenes OpenAI de alta calidad", () => {
  const result = spawnSync(
    process.execPath,
    ["scripts/editorial/generate-yukpa-images.mjs"],
    {
      cwd: process.cwd(),
      encoding: "utf8",
    },
  );
  assert.equal(result.status, 0, result.stderr);
  const output = JSON.parse(result.stdout);
  assert.equal(output.mode, "dry-run");
  assert.equal(output.provider, "openai");
  assert.equal(output.model, "gpt-image-2");
  assert.equal(output.quality, "high");
  assert.equal(output.community, "Yukpa");
  assert.equal(output.images, 10);
  assert.equal(output.estimatedOutputCostUsd, 1.65);
  assert.equal(new Set(output.keys).size, 10);
  assert.ok(
    output.keys.every(
      (key) => key.endsWith(":horizontal") || key.endsWith(":vertical"),
    ),
  );
});
