import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import test from "node:test";
const require = createRequire(import.meta.url);
const { getImageProps } = require("next/image");
const read = (p) => readFileSync(new URL("../" + p, import.meta.url), "utf8");
test("horizontal original retains URL without optimized srcset", () => {
  const src = "https://c5htob7za0dl3b5x.public.blob.vercel-storage.com/mitos/example.jpg";
  const { props } = getImageProps({ src, alt: "Obra", width: 1536, height: 864, unoptimized: true });
  assert.equal(props.src, src);
  assert.equal(props.srcSet, undefined);
});
test("ImageFrame keeps opt-out explicit and mobile optimization independent", () => {
  const source = read("src/components/atoms/ImageFrame.js");
  assert.match(source, /unoptimized = false/);
  assert.match(source, /mobileUnoptimized = false/);
  assert.match(source, /unoptimized: mobileUnoptimized/);
  assert.match(source, /unoptimized=\{unoptimized\}/);
});
test("myth hero serves horizontal original without changing mobile source", () => {
  const source = read("src/components/templates/MythHero.js");
  assert.match(source, /unoptimized=\{Boolean\(myth.imageUrl\)\}/);
  assert.match(source, /mobileSrc=\{mobileSrc\}/);
});
test("mobile horizontal inside the story also preserves original", () => {
  const source = read("src/components/templates/MythDetailTemplate.js");
  assert.match(source, /src=\{myth.imageUrl\}\s+unoptimized/);
  assert.doesNotMatch(source, /src=\{myth.verticalImageUrl\}\s+unoptimized/);
});
