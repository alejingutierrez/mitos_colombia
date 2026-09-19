import { createHash } from "node:crypto";
import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import {
  tucanoCommunityImageUrl,
  tucanoCommunityPage,
} from "../../editorial/tucano/community.mjs";
import { tucanoMedia } from "../../editorial/tucano/media.mjs";
import records from "../../editorial/tucano/records.mjs";
import { canonicalTucanoSlugs } from "../../editorial/tucano/universe.mjs";

const provenancePath = new URL(
  "../../editorial/tucano/provenance.json",
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

test("los siete expedientes Tucano cumplen la metodología editorial", () => {
  assert.equal(records.length, 7);
  assert.deepEqual(
    new Set(records.map(({ slug }) => slug)),
    new Set(canonicalTucanoSlugs),
  );
  for (const record of records) {
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
  }
});

test("el título de cada página dice de qué trata su dirección", () => {
  const bySlug = new Map(records.map((record) => [record.slug, record]));
  // Esta dirección llevaba el título «Boraró y Boraró Numió» y contaba a Boraró,
  // aunque el slug nombra a la danta. La reescritura del 2026-09-19 devolvió a
  // Wejké y su pito a la dirección que los nombra; Boraró quedó resumido en
  // Versiones y, si se quiere publicar entero, necesita URL propia.
  const danta = bySlug.get("cuando-la-danta-perdio-su-hegemonia");
  assert.match(danta.title, /danta|Wejk[eé]/i);
  assert.match(danta.mito, /Wejk[eé]/);
  assert.doesNotMatch(danta.title, /Borar[oó]/i);

  // Yepá Uejkeó, con u: así la escribe Fulop. La ficha decía «Vejkeó».
  const yuca = bySlug.get("la-semilla-de-la-yuca-tucano");
  assert.match(yuca.title, /Yep[aá] Uejke[oó]/);

  assert.equal(
    bySlug.get("el-origen-del-hombre").title,
    "La Canoa de Transformación y el origen de los pueblos",
  );
  assert.equal(
    bySlug.get("los-blancos-dominan-a-los-indios").title,
    "La memoria y el papel en el ciclo de Yepá Huáke",
  );
  assert.equal(
    bySlug.get("yepa-castiaga-a-los-animales").title,
    "Yepá Huáke y la transformación de los animales",
  );
  assert.doesNotMatch(
    bySlug.get("la-aparicion-del-sol-del-viento-y-los-mares").mito,
    /\bPaola\b|\bBeatriz\b|\bZabul[oó]n\b/,
  );
});

test("las siete fichas nombran a quien narró el corpus", () => {
  // Fulop recogió todo de Marcos Sierra, en Guadalajara sobre el río Paca, con
  // su hermano Manuel de intérprete. Ninguna ficha lo decía.
  const conNarrador = records.filter((record) =>
    /Marcos Sierra/.test(`${record.historia}\n${record.versiones}`),
  );
  assert.ok(
    conNarrador.length >= 6,
    `sólo ${conNarrador.length} de ${records.length} nombran a Marcos Sierra`,
  );
});

test(
  "cada mito tiene pareja OpenAI propia y procedencia durable aprobada",
  { skip: !fs.existsSync(provenancePath) },
  () => {
    const provenance = JSON.parse(fs.readFileSync(provenancePath, "utf8"));
    assert.equal(provenance.provider, "openai");
    assert.equal(provenance.model, "gpt-image-2");
    assert.equal(provenance.quality, "high");
    assert.equal(provenance.visualQa.status, "approved");
    assert.equal(provenance.visualQa.finalImages, 14);
    assert.equal(Object.keys(provenance.items).length, 14);

    const allUrls = new Set();
    for (const record of records) {
      const media = tucanoMedia[record.slug];
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
        assert.equal(item.sourceUrls.length, 7);
      }
    }
    assert.equal(allUrls.size, 14);
  },
);

test("los prompts exigen paper cut 2D y escenas distintas", () => {
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
      assert.match(prompt, /sin fotograf[ií]a/i);
      assert.match(prompt, /objeto físico/i);
      assert.match(prompt, /maqueta/i);
      assert.match(prompt, /diorama/i);
      assert.match(prompt, /CGI|render 3D/i);
    }
  }
  assert.match(tucanoCommunityPage.imagePrompt, /2D full paper cut/i);
  assert.equal(
    tucanoCommunityImageUrl,
    tucanoMedia["el-origen-del-hombre"].horizontal,
  );
});
