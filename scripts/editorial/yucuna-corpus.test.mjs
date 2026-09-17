import { createHash } from "node:crypto";
import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import {
  yucunaCommunityImageUrl,
  yucunaCommunityPage,
} from "../../editorial/yucuna/community.mjs";
import {
  assertYucunaEvidenceMatrix,
  yucunaEvidenceMatrix,
} from "../../editorial/yucuna/evidence.mjs";
import { yucunaMedia } from "../../editorial/yucuna/media.mjs";
import records, {
  yucunaCanonicalRecords,
  yucunaTransferredRecords,
} from "../../editorial/yucuna/records.mjs";
import {
  canonicalYucunaSlugs,
  reviewedYucunaWorklistSlugs,
} from "../../editorial/yucuna/universe.mjs";

const provenancePath = new URL(
  "../../editorial/yucuna/provenance.json",
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

test("los cuatro expedientes del frente Yucuna cumplen la metodología", () => {
  assert.equal(records.length, 4);
  assert.equal(yucunaCanonicalRecords.length, 3);
  assert.equal(yucunaTransferredRecords.length, 1);
  assert.deepEqual(
    new Set(records.map(({ slug }) => slug)),
    new Set(reviewedYucunaWorklistSlugs),
  );
  assert.deepEqual(
    new Set(yucunaCanonicalRecords.map(({ slug }) => slug)),
    new Set(canonicalYucunaSlugs),
  );

  for (const record of records) {
    assert.ok(
      words(record.mito) >= 300 && words(record.mito) <= 650,
      `${record.slug}: mito ${words(record.mito)}`,
    );
    assert.ok(
      words(record.historia) >= 220 && words(record.historia) <= 600,
      `${record.slug}: historia ${words(record.historia)}`,
    );
    assert.ok(
      words(record.versiones) >= 170 && words(record.versiones) <= 550,
      `${record.slug}: versiones ${words(record.versiones)}`,
    );
    assert.ok(
      words(record.leccion) >= 8 && words(record.leccion) <= 22,
      `${record.slug}: lección ${words(record.leccion)}`,
    );
    assert.equal((record.leccion.match(/[.!?]+/g) || []).length, 1);
    assert.ok(
      words(record.similitudes) >= 80 && words(record.similitudes) <= 450,
      `${record.slug}: similitudes ${words(record.similitudes)}`,
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
    assert.ok(
      record.seo_description.length >= 120 &&
        record.seo_description.length <= 165,
      `${record.slug}: SEO ${record.seo_description.length}`,
    );
    assert.equal(record.tags.length, 4);
    assert.equal(record.focus_keywords.length, 5);
    const sources = [...record.keySources, ...record.sources];
    assert.ok(sources.length >= 5);
    assert.equal(new Set(sources.map(({ url }) => url)).size, sources.length);
    assert.ok(sources.every(({ url }) => url.startsWith("https://")));
  }
});

test("reclasifica Moniya Amena sin despublicar y añade solo un ciclo Yucuna", () => {
  const bySlug = new Map(records.map((record) => [record.slug, record]));
  const transfer = bySlug.get("el-origen-de-las-frutas");

  assert.equal(
    transfer.title,
    "Moniya Amena, el árbol de la abundancia",
  );
  assert.equal(
    transfer.category_path,
    "Amazonía > Caquetá y Putumayo > Huitoto / Murui-Muina",
  );
  assert.match(transfer.researchNotes, /RECLASIFICACIÓN SIN DESPUBLICAR/i);
  assert.match(transfer.historia, /clasificó esa adaptación como Yucuna/i);
  assert.equal(
    bySlug.get("karipu-lakena-y-la-primera-noche").title,
    "Los Karipú Lakena y la primera noche",
  );
  assert.doesNotMatch(
    yucunaCanonicalRecords.map(({ title }) => title).join("\n"),
    /origen de las frutas/i,
  );
});

test("la matriz de evidencia cubre las cuatro rutas con tres apoyos por afirmación", () => {
  assert.equal(assertYucunaEvidenceMatrix(), true);
  assert.deepEqual(
    new Set(Object.keys(yucunaEvidenceMatrix)),
    new Set(reviewedYucunaWorklistSlugs),
  );
});

test(
  "cada ruta tiene pareja OpenAI propia y procedencia durable aprobada",
  { skip: !fs.existsSync(provenancePath) },
  () => {
    const provenance = JSON.parse(fs.readFileSync(provenancePath, "utf8"));
    assert.equal(provenance.provider, "openai");
    assert.equal(provenance.model, "gpt-image-2");
    assert.equal(provenance.quality, "high");
    assert.equal(provenance.visualQa.status, "approved");
    assert.equal(provenance.visualQa.finalImages, 8);
    assert.equal(Object.keys(provenance.items).length, 8);

    const allUrls = new Set();
    for (const record of records) {
      const media = yucunaMedia[record.slug];
      assert.equal(media.provenanceStatus, "approved");
      assert.equal(media.provider, "openai");
      assert.equal(media.model, "gpt-image-2");
      assert.match(media.horizontal, /^https:\/\//);
      assert.match(media.vertical, /^https:\/\//);
      assert.notEqual(media.horizontal, media.vertical);
      assert.ok(!allUrls.has(media.horizontal), `${record.slug}: H repetida`);
      assert.ok(!allUrls.has(media.vertical), `${record.slug}: V repetida`);
      allUrls.add(media.horizontal);
      allUrls.add(media.vertical);

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
        assert.ok(item.sourceUrls.length >= 5);
      }
    }
    assert.equal(allUrls.size, 8);
  },
);

test("los prompts exigen paper cut digital plano y escenas distintas", () => {
  for (const record of records) {
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
      assert.match(prompt, /formas mate|sin volumen físico/i);
      assert.match(prompt, /sin fotograf[ií]a/i);
      assert.match(prompt, /fibras reales/i);
      assert.match(prompt, /objeto físico/i);
      assert.match(prompt, /maqueta/i);
      assert.match(prompt, /diorama/i);
      assert.match(prompt, /CGI|render 3D/i);
    }
  }
  assert.match(yucunaCommunityPage.imagePrompt, /2D full paper cut/i);
  assert.equal(
    yucunaCommunityImageUrl,
    yucunaMedia["karipu-lakena-y-la-primera-noche"].horizontal,
  );
});

test("la ruta pública usa el perfil Yucuna revisado", () => {
  const route = fs.readFileSync(
    new URL("../../src/lib/community-info.js", import.meta.url),
    "utf8",
  );
  const filters = fs.readFileSync(
    new URL("../../src/lib/communityFilters.js", import.meta.url),
    "utf8",
  );

  assert.match(route, /import \{ yucunaCommunityPage \}/);
  assert.match(route, /"yucuna": \{\s+\.\.\.yucunaCommunityPage,/);
  assert.match(route, /"yukuna": \{\s+\.\.\.yucunaCommunityPage,/);
  assert.match(filters, /MIN_COMMUNITY_MYTHS = 1;/);
});
