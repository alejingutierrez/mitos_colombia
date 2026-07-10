import assert from "node:assert/strict";
import test from "node:test";

import {
  archiveRobots,
  hasArchiveQuery,
} from "../../src/lib/archive-seo.js";

test("clean archive and pagination URLs remain indexable", () => {
  assert.equal(hasArchiveQuery({}), false);
  assert.equal(archiveRobots({}), undefined);
});

test("search, filters and result-size variants are noindex follow", () => {
  for (const params of [
    { q: "agua" },
    { region: "andina" },
    { community: "muiscas" },
    { tag: "creación" },
    { limit: "100" },
  ]) {
    assert.equal(hasArchiveQuery(params), true);
    assert.deepEqual(archiveRobots(params), { index: false, follow: true });
  }
});
