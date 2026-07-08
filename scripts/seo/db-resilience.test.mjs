import assert from "node:assert/strict";
import test from "node:test";

import {
  isStaticDataBuild,
  isTransientDbError,
  withRetry,
} from "../../src/lib/db-resilience.js";

test("recognizes transient Neon and network database errors", () => {
  assert.equal(isTransientDbError(new Error("fetch failed")), true);
  assert.equal(isTransientDbError(new Error("socket hang up")), true);
  assert.equal(isTransientDbError({ code: "ECONNRESET" }), true);
  assert.equal(
    isTransientDbError({
      cause: { code: "UND_ERR_CONNECT_TIMEOUT", message: "Connect Timeout Error" },
    }),
    true
  );
  assert.equal(isTransientDbError(new Error("syntax error at or near SELECT")), false);
});

test("detects static build contexts without treating runtime production as build", () => {
  assert.equal(isStaticDataBuild({ NEXT_PHASE: "phase-production-build" }), true);
  assert.equal(isStaticDataBuild({ npm_lifecycle_event: "build" }), true);
  assert.equal(isStaticDataBuild({ NODE_ENV: "production" }), false);
});

test("retries transient failures and returns the eventual result", async () => {
  let attempts = 0;
  const result = await withRetry(
    async () => {
      attempts += 1;
      if (attempts < 3) {
        throw new Error("fetch failed");
      }
      return "ok";
    },
    { attempts: 3, baseDelayMs: 1 }
  );

  assert.equal(result, "ok");
  assert.equal(attempts, 3);
});
