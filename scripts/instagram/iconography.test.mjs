import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import sharp from "sharp";
import {
  CAROUSEL_CORNERS,
  CAROUSEL_DIVIDERS,
  CAROUSEL_FRAMES,
  CAROUSEL_GLYPHS,
  CAROUSEL_ICONOGRAPHY,
  CAROUSEL_ORNAMENTS,
  CAROUSEL_PATTERNS,
  renderIconSvg,
} from "./lib/iconography-definitions-v2.mjs";
import {
  INSTAGRAM_GRAPHIC_COVERAGE_ROUTES,
  INSTAGRAM_ICONOGRAPHY,
  selectInstagramGraphicMotif,
  selectInstagramSupportDecoration,
} from "../../src/lib/instagram-iconography.js";

const runtimeSource = await fs.readFile(
  new URL("../../src/lib/instagram-iconography.js", import.meta.url),
  "utf8"
);

test("la biblioteca mantiene un inventario único y sincronizado", () => {
  assert.equal(CAROUSEL_GLYPHS.length, 48);
  assert.equal(CAROUSEL_DIVIDERS.length, 12);
  assert.equal(CAROUSEL_CORNERS.length, 12);
  assert.equal(CAROUSEL_FRAMES.length, 8);
  assert.equal(CAROUSEL_ORNAMENTS.length, 12);
  assert.equal(CAROUSEL_PATTERNS.length, 8);
  assert.equal(CAROUSEL_ICONOGRAPHY.length, 100);
  assert.equal(new Set(CAROUSEL_ICONOGRAPHY.map(({ id }) => id)).size, 100);
  assert.deepEqual(
    INSTAGRAM_ICONOGRAPHY.map(({ id }) => id).sort(),
    CAROUSEL_ICONOGRAPHY.map(({ id }) => id).sort()
  );
});

test("las cien piezas tienen una ruta automática real", () => {
  assert.equal(INSTAGRAM_GRAPHIC_COVERAGE_ROUTES.primary.length, 60);
  assert.equal(INSTAGRAM_GRAPHIC_COVERAGE_ROUTES.support.length, 40);
  assert.equal(
    new Set([
      ...INSTAGRAM_GRAPHIC_COVERAGE_ROUTES.primary,
      ...INSTAGRAM_GRAPHIC_COVERAGE_ROUTES.support,
    ]).size,
    100
  );

  const routeSource = runtimeSource.slice(
    runtimeSource.indexOf("const REGION_MOTIF"),
    runtimeSource.indexOf("export const INSTAGRAM_GRAPHIC_COVERAGE_ROUTES")
  );
  const unreachable = INSTAGRAM_ICONOGRAPHY.filter(
    ({ id }) => !routeSource.includes(`\"${id}\"`)
  );
  assert.deepEqual(unreachable, []);
});

test("los maestros comparten el contrato de línea abierta", () => {
  for (const asset of CAROUSEL_ICONOGRAPHY) {
    const svg = renderIconSvg(asset);
    assert.match(svg, /fill="none"/);
    assert.match(svg, /stroke-width="2\.6"/);
    assert.match(svg, /stroke-linecap="round"/);
    assert.doesNotMatch(asset.body, /fill=/);
  }
});

test("cada PNG de producción existe, conserva tamaño y transparencia", async () => {
  for (const asset of INSTAGRAM_ICONOGRAPHY) {
    const file = path.join(process.cwd(), "public", asset.src);
    await fs.access(file);
    const metadata = await sharp(file).metadata();
    assert.equal(metadata.format, "png", asset.id);
    assert.equal(metadata.hasAlpha, true, asset.id);
    if (asset.kind === "divider") {
      assert.deepEqual([metadata.width, metadata.height], [2160, 320], asset.id);
    } else if (asset.kind === "frame") {
      assert.deepEqual([metadata.width, metadata.height], [1080, 1350], asset.id);
    } else {
      assert.deepEqual([metadata.width, metadata.height], [1024, 1024], asset.id);
    }
  }
});

test("la capa decorativa responde al layout y no se repite", () => {
  const quote = selectInstagramSupportDecoration({
    slide: {
      template_family: "typographic",
      template_layout: "type_quote",
    },
    copy: { title: "La voz volvió como eco" },
  });
  assert.equal(quote.id, "ornament-echo-arcs");

  const alternate = selectInstagramSupportDecoration({
    slide: {
      template_family: "typographic",
      template_layout: "type_quote",
    },
    copy: { title: "La voz volvió como eco" },
    excludedIds: new Set(["ornament-echo-arcs"]),
  });
  assert.equal(alternate.id, "corner-constellation");

  assert.equal(
    selectInstagramSupportDecoration({
      slide: { template_family: "cover", template_layout: "cover_full" },
    }),
    null
  );
});

test("la selección semántica respeta rol, contenido y exclusión", () => {
  const typographic = { template_family: "typographic", narrative_role: "setting" };
  const setting = selectInstagramGraphicMotif({
    slide: typographic,
    copy: { title: "La laguna tenía orillas y caminos" },
  });
  assert.equal(setting.id, "divider-water");

  const alternate = selectInstagramGraphicMotif({
    slide: typographic,
    copy: { title: "La laguna tenía orillas y caminos" },
    excludedIds: new Set(["divider-water"]),
  });
  assert.equal(alternate.id, "journey-path");

  const closing = selectInstagramGraphicMotif({
    slide: { template_family: "typographic", narrative_role: "closing" },
    copy: { title: "¿Qué territorio cuidamos?" },
  });
  assert.equal(closing.id, "divider-horizon");

  assert.equal(
    selectInstagramGraphicMotif({
      slide: { template_family: "secondary" },
      copy: { title: "Agua" },
    }),
    null
  );
});

test("la rotación elige la pieza pertinente menos usada", () => {
  const slide = {
    template_family: "typographic",
    template_layout: "type_quote",
    narrative_role: "setting",
  };
  const primary = selectInstagramGraphicMotif({
    slide,
    copy: { title: "La laguna tenía agua y orillas" },
    usageById: { "divider-water": 5, "water-current": 0 },
  });
  assert.equal(primary.id, "water-current");

  const support = selectInstagramSupportDecoration({
    slide,
    copy: { title: "La voz regresó como eco" },
    usageById: {
      "ornament-echo-arcs": 4,
      "corner-constellation": 0,
    },
  });
  assert.equal(support.id, "corner-constellation");
});
