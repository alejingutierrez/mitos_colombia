import assert from "node:assert/strict";
import test from "node:test";
import {
  COVER_TEMPLATES,
  INSTAGRAM_EDITORIAL_TEMPLATES,
  MAP_TEMPLATES,
  SECONDARY_IMAGE_TEMPLATES,
  TERTIARY_IMAGE_TEMPLATES,
  TYPOGRAPHIC_TEMPLATES,
} from "../../src/lib/instagram-editorial-library.js";

test("la biblioteca editorial contiene exactamente 85 plantillas", () => {
  assert.equal(INSTAGRAM_EDITORIAL_TEMPLATES.length, 85);
  assert.equal(new Set(INSTAGRAM_EDITORIAL_TEMPLATES.map(({ id }) => id)).size, 85);
});

test("cada familia cumple el universo acordado", () => {
  assert.equal(COVER_TEMPLATES.length, 10);
  assert.equal(TYPOGRAPHIC_TEMPLATES.length, 30);
  assert.equal(SECONDARY_IMAGE_TEMPLATES.length, 20);
  assert.equal(TERTIARY_IMAGE_TEMPLATES.length, 20);
  assert.equal(MAP_TEMPLATES.length, 5);
});

test("cada plantilla declara composición, paleta, función y aprobación final", () => {
  for (const template of INSTAGRAM_EDITORIAL_TEMPLATES) {
    assert.ok(template.id);
    assert.ok(template.name);
    assert.ok(template.layout);
    assert.ok(template.palette);
    assert.ok(template.role);
    assert.equal(template.approval, "approved");
    assert.equal(template.designRevision, "v8");
    assert.ok(
      ["rail_left", "corner", "rail_right", "baseline", "register"].includes(
        template.brandMode
      )
    );
    assert.deepEqual(template.qa, {
      canvas: "1080x1350",
      aspectRatio: "4:5",
      safeArea: true,
      nativeReview: true,
      brandSystem: true,
      nativeMedia: true,
      realCartography: true,
      shadowDiscipline: true,
      sharedGrid: true,
      collisionSafe: true,
      bodyBaseline: true,
    });
  }
});

test("los tratamientos de marca se distribuyen por toda la biblioteca", () => {
  const counts = INSTAGRAM_EDITORIAL_TEMPLATES.reduce(
    (result, template) => ({
      ...result,
      [template.brandMode]: (result[template.brandMode] || 0) + 1,
    }),
    {}
  );

  assert.equal(Object.keys(counts).length, 5);
  assert.ok(Object.values(counts).every((count) => count >= 15));
});

test("las fichas tipográficas se reparten entre tres capacidades editoriales", () => {
  const counts = TYPOGRAPHIC_TEMPLATES.reduce(
    (result, template) => ({
      ...result,
      [template.textDensity]: (result[template.textDensity] || 0) + 1,
    }),
    {}
  );

  assert.equal(counts.short, 10);
  assert.equal(counts.medium, 10);
  assert.equal(counts.narrative, 10);
  assert.ok(
    TYPOGRAPHIC_TEMPLATES.every(
      (template) => Number.isInteger(template.maxWords) && template.maxWords > 0
    )
  );
  assert.deepEqual(
    Object.fromEntries(
      TYPOGRAPHIC_TEMPLATES.map((template) => [
        template.textDensity,
        template.maxWords,
      ])
    ),
    { short: 32, medium: 54, narrative: 78 }
  );
});
