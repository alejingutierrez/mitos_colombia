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
const canvasV9Styles = await fs.readFile(
  new URL(
    "../../src/components/instagram/InstagramTemplateCanvasV9.module.css",
    import.meta.url
  ),
  "utf8"
);
const motifSource = await fs.readFile(
  new URL("../../src/components/atoms/Motif.js", import.meta.url),
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

test("la capa v9 estandariza tipografía, retícula y cuatro arquetipos", () => {
  assert.match(canvasSource, /InstagramTemplateCanvasV9\.module\.css/);
  assert.match(canvasV9Styles, /--ig-safe-x: 6\.67cqw/);
  assert.match(
    canvasV9Styles,
    /font-family: var\(--font-display\), ui-sans-serif, sans-serif/
  );
  assert.match(
    canvasV9Styles,
    /font-family: var\(--font-body\), ui-sans-serif, sans-serif/
  );
  assert.match(canvasV9Styles, /data-family="typographic"/);
  assert.match(canvasV9Styles, /data-family="secondary"/);
  assert.match(canvasV9Styles, /data-family="tertiary"/);
  assert.match(canvasV9Styles, /data-family="map"/);
  assert.match(canvasSource, /data-editorial-slot="media-primary"/);
  assert.match(canvasSource, /data-editorial-slot="chrome-publication"/);
});

test("la capa v9 integra iconografía PNG como máscara semántica", () => {
  assert.match(canvasSource, /<MotifMask/);
  assert.match(canvasSource, /data-editorial-slot="graphic-motif"/);
  assert.match(canvasSource, /data-motif-id=\{graphicMotif\.id\}/);
  assert.match(
    canvasSource,
    /data-decoration-id=\{graphicDecoration\.id\}/
  );
  assert.match(canvasSource, /data-editorial-slot="graphic-decoration"/);
  assert.match(canvasSource, /graphicDecoration\s*&&\s*!graphicMotif/);
  assert.match(canvasSource, /usesFocusedV9Map \? 13 : 5/);
  assert.match(motifSource, /maskImage: `url\("\$\{src\}"\)`/);
  assert.match(motifSource, /backgroundColor: "currentColor"/);
  assert.match(canvasV9Styles, /\.graphicMotif\s*\{/);
  assert.match(canvasV9Styles, /\.graphicDecoration\s*\{/);
  assert.match(canvasV9Styles, /color: var\(--ig-accent\)/);
  assert.match(
    canvasV9Styles,
    /data-family="secondary"[\s\S]*right: 0;[\s\S]*left: 0;[\s\S]*height: 56\.25cqw/
  );
});

test("la última ficha reserva un cierre editorial para mitosdecolombia.com", () => {
  assert.match(canvasSource, /data-editorial-slot="closing-cta"/);
  assert.match(canvasSource, /data-has-cta=\{copy\.cta \? "true" : "false"\}/);
  assert.match(canvasV9Styles, /\.closingCta\s*\{/);
  assert.match(canvasV9Styles, /grid-template-areas:[\s\S]*"eyebrow domain"/);
  assert.match(
    canvasV9Styles,
    /data-has-cta="true"[\s\S]*content-body[\s\S]*bottom: 34cqw !important/
  );
});
