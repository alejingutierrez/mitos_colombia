import assert from "node:assert/strict";
import path from "node:path";
import test from "node:test";
import { pathToFileURL } from "node:url";
import { muiscaLessons } from "../../editorial/muisca/lessons.mjs";
import { canonicalMuiscaSlugs } from "../../editorial/muisca/universe.mjs";

function words(value) {
  return String(value || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

function modulePath(slug) {
  return slug === "bachue"
    ? path.resolve("editorial", "myths", "bachue.mjs")
    : path.resolve("editorial", "muisca", "myths", `${slug}.mjs`);
}

test("las 41 enseñanzas muiscas son breves, filosóficas y están sincronizadas", async () => {
  assert.deepEqual(
    Object.keys(muiscaLessons).sort(),
    [...canonicalMuiscaSlugs].sort()
  );

  for (const slug of canonicalMuiscaSlugs) {
    const lesson = muiscaLessons[slug];
    const { default: myth } = await import(
      `${pathToFileURL(modulePath(slug)).href}?lesson-test=1`
    );

    assert.equal(myth.leccion, lesson, slug);
    assert.equal(lesson.includes("\n"), false, slug);
    assert.equal(words(lesson) >= 8 && words(lesson) <= 22, true, slug);
    assert.equal((lesson.match(/[.!?…]+/g) || []).length, 1, slug);
    assert.match(lesson, /[.!?…]$/, slug);
  }
});
