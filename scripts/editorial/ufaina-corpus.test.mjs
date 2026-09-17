import { createHash } from "node:crypto";
import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import {
  ufainaCommunityImageUrl,
  ufainaCommunityPage,
} from "../../editorial/ufaina/community.mjs";
import { ufainaMedia } from "../../editorial/ufaina/media.mjs";
import records from "../../editorial/ufaina/records.mjs";
import { canonicalUfainaSlugs } from "../../editorial/ufaina/universe.mjs";

const routePath = new URL(
  "../../src/lib/community-info.js",
  import.meta.url,
);
const filtersPath = new URL(
  "../../src/lib/communityFilters.js",
  import.meta.url,
);

const provenancePath = new URL(
  "../../editorial/ufaina/provenance.json",
  import.meta.url,
);

function words(value) {
  return String(value || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

function digest(value) {
  return createHash("sha256").update(value).digest("hex");
}

test("el expediente Ufaina cumple la metodología editorial", () => {
  assert.equal(records.length, 1);
  assert.deepEqual(
    new Set(records.map(({ slug }) => slug)),
    new Set(canonicalUfainaSlugs),
  );
  const record = records[0];
  assert.ok(words(record.mito) >= 300 && words(record.mito) <= 650);
  assert.ok(words(record.historia) >= 220 && words(record.historia) <= 600);
  assert.ok(
    words(record.versiones) >= 170 && words(record.versiones) <= 550,
  );
  assert.ok(words(record.leccion) >= 8 && words(record.leccion) <= 22);
  assert.equal((record.leccion.match(/[.!?]+/g) || []).length, 1);
  assert.ok(
    words(record.similitudes) >= 150 && words(record.similitudes) <= 450,
  );
  assert.equal(
    record.content,
    [
      `Mito\n${record.mito}`,
      `Historia\n${record.historia}`,
      `Versiones\n${record.versiones}`,
      `Lección\n${record.leccion}`,
      `Similitudes\n${record.similitudes}`,
    ].join("\n\n"),
  );
  assert.ok(record.excerpt.length <= 180);
  assert.ok(record.seo_title.length <= 60);
  assert.ok(record.seo_description.length <= 165);
  assert.equal(record.tags.length, 4);
  assert.equal(record.focus_keywords.length, 5);
  assert.equal(record.keySources.length + record.sources.length, 7);
  const urls = [...record.keySources, ...record.sources].map(({ url }) => url);
  assert.equal(new Set(urls).size, 7);
  assert.match(record.historia, /Guaraná Tanimuka/);
  assert.match(record.versiones, /cuarenta y cuatro capítulos/);
  assert.doesNotMatch(record.mito, /Pandora|voz de anciano|escopeta/);
});

test("los prompts exigen paper cut 2D y escenas distintas", () => {
  const record = records[0];
  assert.notEqual(
    record.image_prompt_horizontal,
    record.image_prompt_vertical,
  );
  for (const prompt of [
    record.image_prompt_horizontal,
    record.image_prompt_vertical,
  ]) {
    assert.match(prompt, /2D full paper cut/i);
    assert.match(prompt, /paper quilling/i);
    assert.match(prompt, /acabado gr[aá]fico plano/i);
    assert.match(prompt, /sin fotograf[ií]a/i);
    assert.match(prompt, /objeto físico/i);
    assert.match(prompt, /maqueta/i);
    assert.match(prompt, /diorama/i);
    assert.match(prompt, /CGI|render 3D/i);
  }
  assert.match(ufainaCommunityPage.imagePrompt, /2D full paper cut/i);
  assert.equal(
    ufainaCommunityImageUrl,
    ufainaMedia["creacion-ufaina"].horizontal,
  );
});

test("la landing pública incluye el perfil Ufaina aunque tenga un solo mito", () => {
  const route = fs.readFileSync(routePath, "utf8");
  const filters = fs.readFileSync(filtersPath, "utf8");
  assert.match(route, /import \{ ufainaCommunityPage \}/);
  assert.match(route, /"ufaina": \{\s+\.\.\.ufainaCommunityPage,/);
  assert.match(filters, /MIN_COMMUNITY_MYTHS = 1;/);
});

test(
  "la pareja Ufaina tiene procedencia OpenAI durable y aprobada",
  { skip: !fs.existsSync(provenancePath) },
  () => {
    const provenance = JSON.parse(fs.readFileSync(provenancePath, "utf8"));
    const record = records[0];
    const media = ufainaMedia[record.slug];
    assert.equal(provenance.provider, "openai");
    assert.equal(provenance.model, "gpt-image-2");
    assert.equal(provenance.quality, "high");
    assert.equal(provenance.visualQa.status, "approved");
    assert.equal(provenance.visualQa.finalImages, 2);
    assert.equal(media.provenanceStatus, "approved");
    assert.notEqual(media.horizontal, media.vertical);
    for (const orientation of ["horizontal", "vertical"]) {
      const item = provenance.items[`${record.slug}:${orientation}`];
      const editorialPrompt =
        orientation === "horizontal"
          ? record.image_prompt_horizontal
          : record.image_prompt_vertical;
      assert.equal(item.provider, "openai");
      assert.equal(item.model, "gpt-image-2");
      assert.equal(item.quality, "high");
      assert.equal(item.visualQa, "approved");
      assert.ok(item.visualReviewNote);
      assert.equal(item.editorialPrompt, editorialPrompt);
      assert.equal(digest(editorialPrompt), item.editorialPromptSha256);
      assert.equal(digest(item.generationPrompt), item.generationPromptSha256);
      assert.equal(item.url, media[orientation]);
      assert.equal(item.sourceUrls.length, 7);
    }
  },
);
