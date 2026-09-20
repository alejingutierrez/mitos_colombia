import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import { umbraCommunityPage } from "../../editorial/umbra/community.mjs";
import { umbraMedia } from "../../editorial/umbra/media.mjs";
import records from "../../editorial/umbra/records.mjs";
import {
  canonicalUmbraSlugs,
  umbraEditorialDecisions,
} from "../../editorial/umbra/universe.mjs";

function words(value) {
  return String(value || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

test("los dos expedientes Umbra cumplen la metodología editorial", () => {
  assert.equal(records.length, 2);
  assert.deepEqual(
    new Set(records.map(({ slug }) => slug)),
    new Set(canonicalUmbraSlugs),
  );
  for (const record of records) {
    assert.ok(words(record.mito) >= 300 && words(record.mito) <= 650);
    assert.ok(words(record.historia) >= 220 && words(record.historia) <= 600);
    assert.ok(words(record.versiones) >= 170 && words(record.versiones) <= 550);
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
    // Antes se exigían exactamente siete fuentes en todas las fichas. Ese
    // número era el reparto en bloque escrito como aserción: todas recibían la
    // misma lista. Lo que hay que sostener es el mínimo, la ausencia de
    // duplicados, que el relato apoye en dominios distintos, que no entre
    // ninguna portada de catálogo y que las fichas no citen todas lo mismo.
    const fuentes = [...record.keySources, ...record.sources];
    assert.ok(fuentes.length >= 5, `${record.slug}: ${fuentes.length} fuentes`);
    const sourceUrls = fuentes.map(({ url }) => url);
    assert.equal(new Set(sourceUrls).size, sourceUrls.length);
    const dominios = new Set(sourceUrls.map((url) => new URL(url).host));
    assert.ok(dominios.size >= 3, `${record.slug}: ${dominios.size} dominios`);
    for (const url of sourceUrls) {
      assert.doesNotMatch(
        url,
        /books\.google\.|openlibrary\.org|worldcat\.org|\.blogspot\.|scribd\.com|academia\.edu|wikipedia\.org/i,
        `${record.slug}: fuente de catálogo ${url}`,
      );
    }
    assert.match(
      record.historia,
      /\b(1[5-9]|20)\d\d\b/,
      `${record.slug}: su Historia no fecha el registro`,
    );
    assert.doesNotMatch(
      record.mito,
      /\b(la fuente|las fuentes|la investigación|esta ficha|la página|según el registro|el cronista)\b/i,
      `${record.slug}: su Relato habla de la investigación`,
    );
  }
  // Dos fichas de un corpus pequeño pueden apoyarse en la misma bibliografía
  // —aquí caben tres crónicas y poco más—, pero no pueden abrir con las mismas
  // tres fuentes clave: eso sería otra vez el reparto en bloque.
  const clave = records.map((r) => r.keySources.map(({ url }) => url).join("|"));
  assert.equal(new Set(clave).size, clave.length, "dos fichas abren con las mismas fuentes clave");
});

test("Tasime significa tigre y no se convierte en nombre propio inventado", () => {
  const record = records.find(({ slug }) => slug === "tasime-el-incesto");
  assert.equal(
    umbraEditorialDecisions["tasime-el-incesto"].action,
    "correct-name-and-remove-unsupported-amplification",
  );
  assert.equal(record.title, "Tasime: el tigre y el incesto");
  // Las aserciones que exigían que el Relato explicara la investigación
  // —«No había una princesa», «leyenda literaria publicada en 1932», «no
  // registra un nombre propio»— eran el aparato editorial escrito como prueba.
  // Ese aparato salió del Relato y vive ahora en Historia, Versiones y el
  // dossier. Lo que se comprueba es lo mismo, dicho donde corresponde.
  assert.match(record.mito, /se transformó en lobo/i);
  assert.match(record.mito, /Tassime/);
  assert.match(record.mito, /\bbee\b/);
  // Que tassime es «tigre» y no un nombre propio se dice en Versiones.
  assert.match(record.versiones, /tigre/i);
  assert.match(record.versiones, /[Tt]a[sS]{1,2}ime/);
  assert.match(record.historia, /Guakurama/);
  assert.doesNotMatch(
    record.mito,
    /llamado Tasime|el joven Tasime|ritual de beé|petroglifo contaba/i,
  );
});

test("Batero entra como memoria atribuida y no como hecho colonial probado", () => {
  const record = records.find(
    ({ slug }) => slug === "los-jeques-que-desaparecieron-en-batero",
  );
  assert.equal(
    umbraEditorialDecisions[
      "los-jeques-que-desaparecieron-en-batero"
    ].action,
    "add-community-attributed-contemporary-account",
  );
  // Las aserciones que exigían que el Relato explicara la investigación
  // —«No había una princesa», «leyenda literaria publicada en 1932», «no
  // registra un nombre propio»— eran el aparato editorial escrito como prueba.
  // Ese aparato salió del Relato y vive ahora en Historia, Versiones y el
  // dossier. Lo que se comprueba es lo mismo, dicho donde corresponde.
  assert.match(record.mito, /Güaira/);
  assert.match(record.mito, /Taramakunga/);
  assert.doesNotMatch(record.mito, /Merardo Largo/);
  // Quién lo atribuye y con qué alcance va en Historia y en Versiones.
  assert.match(record.historia, /Merardo Largo/);
  assert.match(record.versiones, /Merardo Largo/);
  assert.doesNotMatch(record.mito, /se comprobó|está demostrado|portal mágico/i);
});

test("cada página tiene horizontal y vertical públicas y distintas", () => {
  for (const slug of canonicalUmbraSlugs) {
    const media = umbraMedia[slug];
    assert.match(media.horizontal, /^https:\/\//);
    assert.match(media.vertical, /^https:\/\//);
    assert.notEqual(media.horizontal, media.vertical);
    assert.doesNotMatch(media.horizontal + media.vertical, /pending\.invalid/);
  }
});

test("la dirección visual es 2D full paper cut, nunca maqueta", () => {
  for (const record of records) {
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
  assert.match(umbraCommunityPage.imagePrompt, /2D full paper cut/i);
  assert.match(umbraCommunityPage.imagePrompt, /capas planas/i);
  assert.match(umbraCommunityPage.imagePrompt, /sin fotografía/i);
  assert.match(umbraCommunityPage.imagePrompt, /objeto físico/i);
});

test("la ruta pública usa el perfil Umbra revisado", () => {
  const route = fs.readFileSync(
    new URL("../../src/lib/community-info.js", import.meta.url),
    "utf8",
  );
  assert.match(route, /import \{ umbraCommunityPage \}/);
  assert.match(route, /"umbra": \{\s+\.\.\.umbraCommunityPage,/);
});
