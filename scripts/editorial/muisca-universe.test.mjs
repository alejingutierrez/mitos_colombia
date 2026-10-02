import assert from "node:assert/strict";
import test from "node:test";
import {
  boundaryExclusions,
  boundaryInclusions,
  canonicalMuiscaSlugs,
  classifiedMuiscaSlugs,
  textualOnlyExclusions,
} from "../../editorial/muisca/universe.mjs";

test("el universo muisca queda fijado en 41 páginas canónicas", () => {
  assert.equal(classifiedMuiscaSlugs.length, 45);
  assert.equal(boundaryExclusions.length, 7);
  assert.equal(boundaryInclusions.length, 3);
  assert.equal(canonicalMuiscaSlugs.length, 41);
  assert.equal(new Set(canonicalMuiscaSlugs).size, 41);
});

test("las inclusiones y exclusiones no se contradicen", () => {
  const canonical = new Set(canonicalMuiscaSlugs);
  for (const { slug } of boundaryExclusions) {
    assert.equal(canonical.has(slug), false, slug);
  }
  for (const { slug } of boundaryInclusions) {
    assert.equal(canonical.has(slug), true, slug);
  }
});

test("las coincidencias solo textuales no entran en el universo", () => {
  const canonical = new Set(canonicalMuiscaSlugs);
  for (const slug of textualOnlyExclusions) {
    assert.equal(canonical.has(slug), false, slug);
  }
});

