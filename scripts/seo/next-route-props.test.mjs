import assert from "node:assert/strict";
import test from "node:test";

import { resolveRouteParams, resolveSearchParams } from "../../src/lib/next-route-props.js";

test("resolves Next route params whether they arrive as an object or a Promise", async () => {
  assert.deepEqual(await resolveRouteParams({ slug: "guardianes-del-agua" }), {
    slug: "guardianes-del-agua",
  });
  assert.deepEqual(await resolveRouteParams(Promise.resolve({ page: "2" })), {
    page: "2",
  });
});

test("resolves Next search params whether they arrive as an object or a Promise", async () => {
  assert.deepEqual(await resolveSearchParams({ q: "agua" }), { q: "agua" });
  assert.deepEqual(await resolveSearchParams(Promise.resolve({ region: "amazonas" })), {
    region: "amazonas",
  });
});
