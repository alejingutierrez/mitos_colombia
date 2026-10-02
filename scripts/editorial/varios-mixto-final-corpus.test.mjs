import { createHash } from "node:crypto";
import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import {
  assertVariosMixtoFinalEvidenceMatrix,
  variosMixtoFinalEvidenceMatrix,
} from "../../editorial/varios-mixto-final/evidence.mjs";
import { variosMixtoFinalMedia } from "../../editorial/varios-mixto-final/media.mjs";
import records from "../../editorial/varios-mixto-final/records.mjs";
import { reviewedVariosMixtoFinalSlugs } from "../../editorial/varios-mixto-final/universe.mjs";

const provenancePath = new URL(
  "../../editorial/varios-mixto-final/provenance.json",
  import.meta.url,
);

function words(value) {
  return String(value || "").trim().split(/\s+/).filter(Boolean).length;
}

function digest(value) {
  return createHash("sha256").update(value).digest("hex");
}

test("los siete expedientes cumplen la metodología editorial", () => {
  assert.equal(records.length, 7);
  assert.deepEqual(
    new Set(records.map(({ slug }) => slug)),
    new Set(reviewedVariosMixtoFinalSlugs),
  );
  for (const record of records) {
    assert.ok(words(record.mito) >= (record.relatoCorto ? 70 : 300) && words(record.mito) <= 650, `${record.slug}: mito ${words(record.mito)}`);
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
    assert.ok(sources.length >= (record.fuentesAgotadas ? 3 : 5), `${record.slug}: ${sources.length} fuentes`);
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
    assert.match(record.researchNotes, /editorial\/varios-mixto-final\/evidence\.mjs/);
    assert.match(record.researchNotes, /editorial\/varios-mixto-final\/provenance\.json/);
  }
});

test("corrige fusiones, nombres sin respaldo y relaciones entre leyendas", () => {
  const bySlug = new Map(records.map((record) => [record.slug, record]));
  const cura = bySlug.get("el-cura-sin-cabeza");
  assert.equal(cura.category_path, "Andina > Nariño > Mestizo");
  assert.match(cura.mito, /Túquerres[\s\S]+misas[\s\S]+San Felipe[\s\S]+templo de Santiago/i);
  assert.match(cura.researchNotes, /Mariano Narváez[\s\S]+no presenta/i);

  const jinete = bySlug.get("el-jinete-negro");
  assert.match(jinete.title, /jinete negro/i);
  assert.match(jinete.mito, /Ocaña[\s\S]+Santa Rita[\s\S]+potro de fuego/i);
  assert.match(jinete.researchNotes, /Don Roque[\s\S]+no tienen respaldo/i);

  const mandingas = bySlug.get("el-mandingas");
  assert.equal(mandingas.category_path, "Caribe > Bolívar y Atlántico > Mestizo");
  // heredada: reescribir tras el cotejo
  assert.match(mandingas.mito, /Pamba Ahumé[\s\S]+tambora/i);
  assert.match(mandingas.researchNotes, /ANTIRRACISTA[\s\S]+Pamba Ahumé/i);

  const mohan = bySlug.get("el-mohan");
  assert.match(mohan.mito, /Ambalema[\s\S]+Coyaima[\s\S]+Jueves Santo[\s\S]+atarraya/i);
  assert.match(mohan.researchNotes, /Poira conserva su expediente diferenciado/i);

  const llorona = bySlug.get("la-llorona");
  assert.match(llorona.mito, /guerra[\s\S]+Magdalena[\s\S]+Tamalameque/i);
  assert.match(llorona.researchNotes, /madre despojada[\s\S]+filicidas/i);

  const madremonte = bySlug.get("la-madremonte");
  assert.match(madremonte.mito, /linderos[\s\S]+San Isidro Labrador[\s\S]+Corpus/i);
  assert.match(madremonte.researchNotes, /Dabeiba automática[\s\S]+creación angelical/i);

  const duendes = bySlug.get("los-duendes");
  assert.match(duendes.mito, /Pantoja[\s\S]+tiple[\s\S]+arpa/i);
  assert.match(duendes.researchNotes, /PROTECCIÓN DE PERSONA[\s\S]+afirmación clínica/i);
});

test("la matriz cubre siete rutas y explicita límites", () => {
  assert.equal(assertVariosMixtoFinalEvidenceMatrix(), true);
  assert.deepEqual(
    new Set(Object.keys(variosMixtoFinalEvidenceMatrix)),
    new Set(reviewedVariosMixtoFinalSlugs),
  );
  for (const claims of Object.values(variosMixtoFinalEvidenceMatrix)) {
    assert.ok(claims.length >= 5);
    assert.ok(
      claims.some(({ evidenceClass }) =>
        [
          "descarte editorial",
          "límite documental",
          "frontera narrativa documentada",
          "límite de unificación",
        ].includes(evidenceClass),
      ),
    );
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
    assert.equal(provenance.visualQa.finalImages, 14);
    assert.equal(Object.keys(provenance.items).length, 14);
    const urls = new Set();
    for (const record of records) {
      const media = variosMixtoFinalMedia[record.slug];
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
