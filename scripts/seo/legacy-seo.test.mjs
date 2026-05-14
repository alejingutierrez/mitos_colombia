import assert from "node:assert/strict";
import test from "node:test";

import {
  normalizeLegacySlug,
  resolveLegacyPostTarget,
  resolveLegacyTaxonomyTarget,
} from "../../src/lib/legacy-seo.js";

const taxonomy = {
  regions: [{ name: "Varios", slug: "varios", myth_count: 22 }],
  communities: [
    { name: "Embera", slug: "embera", myth_count: 18 },
    { name: "Andoque", slug: "andoque", myth_count: 14 },
  ],
  tags: [
    { name: "Castigos", slug: "castigos", myth_count: 8 },
    { name: "Engaño", slug: "engano", myth_count: 12 },
    { name: "Bolívar", slug: "bolivar", myth_count: 2 },
  ],
};

test("normalizes legacy slugs with accents and punctuation", () => {
  assert.equal(normalizeLegacySlug("engaño"), "engano");
  assert.equal(normalizeLegacySlug("  Origen de Enfermedades "), "origen-de-enfermedades");
});

test("resolves legacy Wix category paths only to indexable current taxonomy pages", () => {
  assert.equal(resolveLegacyTaxonomyTarget("castigos", taxonomy), "/categorias/castigos");
  assert.equal(resolveLegacyTaxonomyTarget("embera", taxonomy), "/comunidades/embera");
  assert.equal(resolveLegacyTaxonomyTarget("varias", taxonomy), "/regiones/varios");
  assert.equal(resolveLegacyTaxonomyTarget("bolívar", taxonomy), null);
});

test("resolves legacy blog posts only when the top search result is a confident myth match", () => {
  assert.equal(
    resolveLegacyPostTarget("grupos-juventud-los-líderes-y-la-conexión-con-la-naturaleza", [
      {
        type: "myth",
        title: "Los grupos de mi juventud",
        href: "/mitos/los-grupos-de-mi-juventud",
      },
    ]),
    "/mitos/los-grupos-de-mi-juventud"
  );

  assert.equal(
    resolveLegacyPostTarget("product-page-multicolor-triangled", [
      { type: "myth", title: "El Dorado", href: "/mitos/el-dorado" },
    ]),
    null
  );
});
