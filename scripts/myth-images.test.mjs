import assert from "node:assert/strict";
import test from "node:test";
import {
  getMythImage,
  getMythImageVariants,
  hasMythImageRoles,
  isMythImageVariantCurrent,
  withMythImageVariants,
} from "../src/lib/myth-images.js";

const myth = {
  image_url: "https://example.com/landscape.jpg",
  vertical_image_url: "https://example.com/portrait.jpg",
  editorial_image_url: "https://example.com/editorial.jpg",
};

test("selects myth images by the role of the slot", () => {
  assert.equal(getMythImage(myth, "landscape"), myth.image_url);
  assert.equal(getMythImage(myth, "portrait"), myth.vertical_image_url);
  assert.equal(getMythImage(myth, "square"), myth.vertical_image_url);
  assert.equal(getMythImage(myth, "editorial"), myth.editorial_image_url);
});

test("deduplicates the editorial image sequence", () => {
  const variants = getMythImageVariants({
    ...myth,
    editorial_image_url: myth.image_url,
  });

  assert.deepEqual(variants.all, [myth.image_url, myth.vertical_image_url]);
});

test("keeps landscape imageUrl compatibility while exposing both variants", () => {
  const normalized = withMythImageVariants(myth);

  assert.equal(normalized.imageUrl, myth.image_url);
  assert.equal(normalized.landscapeImageUrl, myth.image_url);
  assert.equal(normalized.portraitImageUrl, myth.vertical_image_url);
  assert.equal(normalized.editorialImageUrl, myth.editorial_image_url);
});

test("rejects image variants older than the canonical myth image", () => {
  assert.equal(
    isMythImageVariantCurrent({
      variantUpdatedAt: "2026-01-09T15:54:48.907Z",
      sourceUpdatedAt: "2026-07-22T23:43:59.501Z",
    }),
    false
  );
  assert.equal(
    isMythImageVariantCurrent({
      variantUpdatedAt: "2026-07-23T09:31:33.731Z",
      sourceUpdatedAt: "2026-07-22T23:43:59.501Z",
    }),
    true
  );
});

test("keeps strict portrait slots from falling back to landscape imagery", () => {
  const landscapeOnly = {
    image_url: "https://example.com/current-landscape.jpg",
  };

  assert.equal(
    getMythImage(landscapeOnly, "portrait", { fallback: false }),
    null
  );
  assert.equal(
    hasMythImageRoles(landscapeOnly, ["landscape", "portrait"]),
    false
  );
  assert.equal(hasMythImageRoles(myth, ["landscape", "portrait"]), true);
});
