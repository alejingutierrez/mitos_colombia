import { createHash } from "node:crypto";
import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import {
  assertCaribeMixtoFinalEvidenceMatrix,
  caribeMixtoFinalEvidenceMatrix,
} from "../../editorial/caribe-mixto-final/evidence.mjs";
import { caribeMixtoFinalMedia } from "../../editorial/caribe-mixto-final/media.mjs";
import records from "../../editorial/caribe-mixto-final/records.mjs";
import { reviewedCaribeMixtoFinalSlugs } from "../../editorial/caribe-mixto-final/universe.mjs";

const provenancePath = new URL(
  "../../editorial/caribe-mixto-final/provenance.json",
  import.meta.url,
);

function words(value) {
  return String(value || "").trim().split(/\s+/).filter(Boolean).length;
}

function digest(value) {
  return createHash("sha256").update(value).digest("hex");
}

test("los seis expedientes cumplen la metodología editorial", () => {
  assert.equal(records.length, 6);
  assert.deepEqual(
    new Set(records.map(({ slug }) => slug)),
    new Set(reviewedCaribeMixtoFinalSlugs),
  );
  for (const record of records) {
    assert.ok((record.relatoCorto ? words(record.mito) >= 70 : words(record.mito) >= 300) && words(record.mito) <= 650, `${record.slug}: mito ${words(record.mito)}`);
    assert.ok(words(record.historia) >= 220 && words(record.historia) <= 600, `${record.slug}: historia ${words(record.historia)}`);
    assert.ok(words(record.versiones) >= 170 && words(record.versiones) <= 550, `${record.slug}: versiones ${words(record.versiones)}`);
    assert.ok(words(record.leccion) >= 8 && words(record.leccion) <= 22, `${record.slug}: lección ${words(record.leccion)}`);
    assert.equal((record.leccion.match(/[.!?]+/g) || []).length, 1);
    assert.ok(words(record.similitudes) >= 80 && words(record.similitudes) <= 450, `${record.slug}: similitudes ${words(record.similitudes)}`);
    assert.ok(record.excerpt.length <= 180);
    assert.ok(record.seo_title.length <= 60);
    assert.ok(record.seo_description.length >= 120 && record.seo_description.length <= 165, `${record.slug}: SEO ${record.seo_description.length}`);
    assert.equal(record.tags.length, 4);
    assert.equal(record.focus_keywords.length, 5);
    const sources = [...record.keySources, ...record.sources];
    assert.ok(sources.length >= 8, `${record.slug}: ${sources.length} fuentes`);
    assert.equal(new Set(sources.map(({ url }) => url)).size, sources.length);
    assert.ok(sources.every(({ url, summary, limitation }) => summary && limitation && (url.startsWith("https://") || (url.startsWith("http://") && /s[óo]lo publica por http/i.test(limitation)))));
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
    assert.match(record.researchNotes, /editorial\/caribe-mixto-final\/evidence\.mjs/);
    assert.match(record.researchNotes, /editorial\/caribe-mixto-final\/provenance\.json/);
  }
});

test("restaura el corpus raizal y separa al Hombre Caimán", () => {
  const bySlug = new Map(records.map((record) => [record.slug, record]));
  for (const slug of reviewedCaribeMixtoFinalSlugs.filter((slug) => slug !== "el-hombre-caiman")) {
    assert.equal(bySlug.get(slug).category_path, "Caribe > San Andrés > Mixto");
    assert.match(
      bySlug.get(slug).researchNotes,
      /oraliteratura raizal[\s\S]+procedencia/i,
    );
  }
  const molino = bySlug.get("beda-nansi-beda-monkey-y-el-molino");
  assert.match(molino.mito, /molino[\s\S]+barra de hierro[\s\S]+lo mató/i);
  assert.doesNotMatch(molino.mito, /destinos|estrellas|ceremonias/i);
  const mico = bySlug.get("mico-y-nansi");
  assert.match(mico.mito, /cabeza seca de perro[\s\S]+puerco/i);
  assert.doesNotMatch(mico.mito, /hilo de sol|palabras ancestrales/i);
  const baile = bySlug.get("tiger-y-el-baile-de-perros");
  assert.match(baile.mito, /Tiger[\s\S]+bunda[\s\S]+perros/i);
  assert.doesNotMatch(
    baile.mito,
    /Gran Baile de Gala|plegaria y un hechizo|profecía de renacimiento/i,
  );
  const tigre = bySlug.get("tigre-y-nansi");
  assert.match(tigre.versiones, /La primera[\s\S]+La segunda[\s\S]+Friedemann/);
  assert.doesNotMatch(tigre.mito, /Oída Nansi/i);
  const perro = bySlug.get("un-perro-una-cabra-y-beda-tiger");
  assert.match(perro.mito, /cabra[\s\S]+Tigre se quedó en su orilla/i);
  assert.doesNotMatch(perro.mito, /zorro de ojos zafiros|luna.*disfrazada/i);
  const caiman = bySlug.get("el-hombre-caiman");
  assert.equal(caiman.category_path, "Caribe > Magdalena > Mestizo");
  assert.match(caiman.historia, /Virgilio Di Filippo[\s\S]+El Heraldo[\s\S]+1940/);
});

test("la matriz cubre seis rutas y explicita límites", () => {
  assert.equal(assertCaribeMixtoFinalEvidenceMatrix(), true);
  assert.deepEqual(
    new Set(Object.keys(caribeMixtoFinalEvidenceMatrix)),
    new Set(reviewedCaribeMixtoFinalSlugs),
  );
  for (const claims of Object.values(caribeMixtoFinalEvidenceMatrix)) {
    assert.ok(claims.length >= 5);
    assert.ok(claims.some(({ evidenceClass }) => ["descarte editorial", "límite documental", "frontera narrativa documentada"].includes(evidenceClass)));
  }
});

test("los prompts son full illustration digital paper cut y escenas distintas", () => {
  for (const record of records) {
    assert.notEqual(record.image_prompt_horizontal, record.image_prompt_vertical);
    for (const prompt of [record.image_prompt_horizontal, record.image_prompt_vertical]) {
      assert.match(prompt, /full illustration/i);
      assert.match(prompt, /2D full paper cut/i);
      assert.match(prompt, /paper quilling/i);
      assert.match(prompt, /acabado gr[aá]fico plano/i);
      assert.match(prompt, /sin volumen físico/i);
      assert.match(prompt, /sin fotograf[ií]a/i);
      assert.match(prompt, /fibras reales/i);
      assert.match(prompt, /objeto físico/i);
      assert.match(prompt, /maqueta/i);
      assert.match(prompt, /diorama/i);
      assert.match(prompt, /CGI|render 3D/i);
    }
  }
});

test(
  "cada ficha tendrá dos imágenes OpenAI propias y aprobadas",
  { skip: !fs.existsSync(provenancePath) },
  () => {
    const provenance = JSON.parse(fs.readFileSync(provenancePath, "utf8"));
    assert.equal(provenance.provider, "openai");
    assert.equal(provenance.model, "gpt-image-2");
    assert.equal(provenance.quality, "high");
    assert.equal(provenance.visualQa.status, "approved");
    assert.equal(provenance.visualQa.finalImages, 12);
    assert.equal(Object.keys(provenance.items).length, 12);
    const urls = new Set();
    for (const record of records) {
      const media = caribeMixtoFinalMedia[record.slug];
      assert.equal(media.provenanceStatus, "approved");
      for (const orientation of ["horizontal", "vertical"]) {
        assert.match(media[orientation], /^https:\/\//);
        assert.ok(!urls.has(media[orientation]));
        urls.add(media[orientation]);
        const item = provenance.items[`${record.slug}:${orientation}`];
        const prompt = orientation === "horizontal" ? record.image_prompt_horizontal : record.image_prompt_vertical;
        assert.equal(item.provider, "openai");
        assert.equal(item.model, "gpt-image-2");
        assert.equal(item.quality, "high");
        assert.equal(item.promptSha256, digest(prompt));
        assert.equal(item.imageUrl, media[orientation]);
        assert.equal(item.visualQa.status, "approved");
      }
    }
  },
);
