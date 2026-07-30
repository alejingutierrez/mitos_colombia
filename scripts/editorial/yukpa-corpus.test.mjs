import { createHash } from "node:crypto";
import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import {
  yukpaCommunityImageUrl,
  yukpaCommunityPage,
} from "../../editorial/yukpa/community.mjs";
import {
  assertYukpaEvidenceMatrix,
  yukpaEvidenceMatrix,
} from "../../editorial/yukpa/evidence.mjs";
import { yukpaMedia } from "../../editorial/yukpa/media.mjs";
import records from "../../editorial/yukpa/records.mjs";
import { canonicalYukpaSlugs } from "../../editorial/yukpa/universe.mjs";

const provenancePath = new URL(
  "../../editorial/yukpa/provenance.json",
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

test("los cinco expedientes Yukpa cumplen la metodología", () => {
  assert.equal(records.length, 5);
  assert.deepEqual(
    new Set(records.map(({ slug }) => slug)),
    new Set(canonicalYukpaSlugs),
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
  }
});

test("corrige explícitamente las dos expansiones inventadas heredadas", () => {
  const bySlug = new Map(records.map((record) => [record.slug, record]));
  const sky = bySlug.get("los-dos-caminos-del-cielo");
  const flood = bySlug.get("la-piedra-que-flota");
  assert.equal(sky.title, "Los dos Soles y el nacimiento de la noche");
  assert.match(sky.researchNotes, /FICCIÓN HEREDADA/i);
  assert.doesNotMatch(sky.mito, /abuelo junto al fuego/i);
  assert.equal(
    flood.title,
    "El gran diluvio y las montañas del Perijá",
  );
  assert.match(flood.researchNotes, /FICCIÓN HEREDADA/i);
  assert.match(flood.mito, /piedra flotante/i);
  assert.match(flood.mito, /no aparecen en las fuentes/i);
});

test("la matriz de evidencia cubre las cinco rutas", () => {
  assert.equal(assertYukpaEvidenceMatrix(), true);
  assert.deepEqual(
    new Set(Object.keys(yukpaEvidenceMatrix)),
    new Set(canonicalYukpaSlugs),
  );
});

test(
  "cada ruta tiene dos imágenes OpenAI propias y aprobadas",
  { skip: !fs.existsSync(provenancePath) },
  () => {
    const provenance = JSON.parse(fs.readFileSync(provenancePath, "utf8"));
    assert.equal(provenance.provider, "openai");
    assert.equal(provenance.model, "gpt-image-2");
    assert.equal(provenance.quality, "high");
    assert.equal(provenance.visualQa.status, "approved");
    assert.equal(provenance.visualQa.finalImages, 10);
    assert.equal(Object.keys(provenance.items).length, 10);
    const allUrls = new Set();
    for (const record of records) {
      const media = yukpaMedia[record.slug];
      assert.equal(media.provenanceStatus, "approved");
      assert.match(media.horizontal, /^https:\/\//);
      assert.match(media.vertical, /^https:\/\//);
      assert.notEqual(media.horizontal, media.vertical);
      assert.ok(!allUrls.has(media.horizontal));
      assert.ok(!allUrls.has(media.vertical));
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
      }
    }
    assert.equal(allUrls.size, 10);
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
  assert.match(yukpaCommunityPage.imagePrompt, /2D full paper cut/i);
  assert.equal(
    yukpaCommunityImageUrl,
    yukpaMedia["aponto-y-el-arbol-manurhacha"].horizontal,
  );
});

test("la ruta pública usa el perfil Yukpa revisado", () => {
  const route = fs.readFileSync(
    new URL("../../src/app/comunidades/[slug]/page.js", import.meta.url),
    "utf8",
  );
  const filters = fs.readFileSync(
    new URL("../../src/lib/communityFilters.js", import.meta.url),
    "utf8",
  );
  assert.match(route, /import \{ yukpaCommunityPage \}/);
  assert.match(route, /"yukpa": \{\s+\.\.\.yukpaCommunityPage,/);
  assert.match(filters, /"yukpa"/);
});
