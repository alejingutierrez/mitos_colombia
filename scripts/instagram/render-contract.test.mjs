import assert from "node:assert/strict";
import fs from "node:fs/promises";
import test from "node:test";

const canvasSource = await fs.readFile(
  new URL(
    "../../src/components/instagram/InstagramTemplateCanvas.js",
    import.meta.url
  ),
  "utf8"
);
const canvasStyles = await fs.readFile(
  new URL(
    "../../src/components/instagram/InstagramTemplateCanvas.module.css",
    import.meta.url
  ),
  "utf8"
);

test("las imágenes editoriales se sirven desde el archivo nativo", () => {
  const imageComponents = canvasSource.match(/<Image\b/g) || [];
  const nativeFlags = canvasSource.match(/\bunoptimized\b/g) || [];
  const nativeSizes = canvasSource.match(/sizes="1080px"/g) || [];

  assert.equal(imageComponents.length, 4);
  assert.equal(nativeFlags.length, imageComponents.length);
  assert.equal(nativeSizes.length, imageComponents.length);
  assert.match(canvasSource, /data-source-quality="native"/);
});

test("la cartografía conserva teselas reales de 256 px y atribución", () => {
  assert.match(canvasSource, /const MAP_TILE_SIZE_CQW = \(256 \/ 1080\) \* 100/);
  assert.match(canvasSource, /tile\.openstreetmap\.org/);
  assert.match(canvasSource, /tile\.opentopomap\.org/);
  assert.match(canvasSource, /© OpenStreetMap/);
  assert.match(canvasStyles, /background-size: 100% 100%/);
  assert.match(canvasStyles, /\.map \.mapMain \.mapTiles \{\s*filter: none;/);
});

test("la capa v7 elimina velos y sombras internas de las escenas", () => {
  const revisionStart = canvasStyles.lastIndexOf("Sistema editorial v7");
  const revision = canvasStyles.slice(revisionStart);

  assert.ok(revisionStart >= 0);
  assert.match(revision, /\.storyShade \{\s*display: none;/);
  assert.match(revision, /\.canvas \.storyMedia,[\s\S]*box-shadow: none;/);
  assert.match(revision, /\.cover_horizon \.coverShade \{\s*display: none;/);
});

test("la capa v8 declara una retícula compartida y slots auditables", () => {
  const revisionStart = canvasStyles.lastIndexOf("Sistema editorial v8");
  const revision = canvasStyles.slice(revisionStart);
  const slots = canvasSource.match(/data-editorial-slot=/g) || [];

  assert.ok(revisionStart >= 0);
  assert.ok(slots.length >= 20);
  assert.match(revision, /--ig-grid-bottom: 11\.5cqw/);
  assert.match(
    revision,
    /\.typographic \.typeBody \{\s*bottom: var\(--ig-grid-bottom\)/
  );
  assert.match(revision, /\.secondary \.storyBody \{\s*bottom: 11\.5cqw/);
  assert.match(
    revision,
    /\.tertiary_full \.storyTitle,[\s\S]*\.tertiary_dark_frame \.storyTitle \{\s*bottom: 10\.5cqw/
  );
  assert.match(
    revision,
    /\.map_locator \.mapTitle \{[\s\S]*font-size: 6\.8cqw/
  );
  assert.match(
    revision,
    /\.secondary_bottom \.storyBody \{\s*top: 41\.5cqw;[\s\S]*bottom: auto;/
  );
  assert.match(
    revision,
    /\.tertiary_close \.storyMedia \{\s*inset: 7cqw 8cqw 46cqw;/
  );
  assert.match(
    revision,
    /\.tertiary_close \.storyTitle \{\s*top: 81cqw;/
  );
});
