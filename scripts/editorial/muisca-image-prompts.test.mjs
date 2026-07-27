import assert from "node:assert/strict";
import path from "node:path";
import test from "node:test";
import { pathToFileURL } from "node:url";
import {
  MUISCA_IMAGE_DECISION_VALUES,
  muiscaImageDecisions,
} from "../../editorial/muisca/image-decisions.mjs";
import { muiscaVerticalImageScenes } from "../../editorial/muisca/image-prompts.mjs";
import { canonicalMuiscaSlugs } from "../../editorial/muisca/universe.mjs";

function modulePath(slug) {
  if (slug === "bachue") {
    return path.resolve("editorial", "myths", "bachue.mjs");
  }
  return path.resolve("editorial", "muisca", "myths", `${slug}.mjs`);
}

test("las decisiones visuales cubren exactamente los 41 mitos", () => {
  assert.deepEqual(
    Object.keys(muiscaImageDecisions).sort(),
    canonicalMuiscaSlugs,
  );
  assert.deepEqual(
    Object.keys(muiscaVerticalImageScenes).sort(),
    canonicalMuiscaSlugs,
  );

  const counts = Object.values(muiscaImageDecisions).reduce(
    (result, decision) => {
      assert.ok(
        MUISCA_IMAGE_DECISION_VALUES.includes(decision),
        `decisión desconocida: ${decision}`,
      );
      result[decision] = (result[decision] || 0) + 1;
      return result;
    },
    {},
  );

  assert.deepEqual(counts, {
    CONSERVAR: 20,
    PAREJA: 13,
    VERTICAL: 8,
  });
});

test("cada orientación tiene un prompt propio y la vertical es una segunda escena 9:16", async () => {
  const horizontalPrompts = new Set();
  const verticalPrompts = new Set();

  for (const slug of canonicalMuiscaSlugs) {
    const imported = await import(pathToFileURL(modulePath(slug)).href);
    const myth = imported.default;
    const horizontal = myth.image_prompt_horizontal;
    const vertical = myth.image_prompt_vertical;

    assert.equal(myth.slug, slug);
    assert.ok(horizontal, `${slug}: falta prompt horizontal`);
    assert.ok(vertical, `${slug}: falta prompt vertical`);
    assert.notEqual(horizontal, vertical, `${slug}: las escenas se repiten`);
    assert.match(
      horizontal,
      /horizontal(?: exacta)? 16:9/i,
      `${slug}: la principal no declara 16:9`,
    );
    assert.match(
      vertical,
      /vertical exacta 9:16/i,
      `${slug}: la segunda escena no declara 9:16`,
    );
    assert.match(
      vertical,
      /Segunda escena narrativa distinta de la principal/i,
      `${slug}: la vertical no declara su función narrativa`,
    );
    assert.match(
      vertical,
      /no un recorte ni una repetición/i,
      `${slug}: falta la protección contra recortes o duplicados`,
    );
    assert.doesNotMatch(
      vertical,
      /horizontal\s+16:9|vertical\s+(?:2:3|4:5)/i,
      `${slug}: la vertical conserva una orientación antigua`,
    );
    assert.ok(
      horizontal.length >= 280,
      `${slug}: prompt horizontal insuficiente`,
    );
    assert.ok(vertical.length >= 500, `${slug}: prompt vertical insuficiente`);

    horizontalPrompts.add(horizontal);
    verticalPrompts.add(vertical);
  }

  assert.equal(horizontalPrompts.size, canonicalMuiscaSlugs.length);
  assert.equal(verticalPrompts.size, canonicalMuiscaSlugs.length);
});
