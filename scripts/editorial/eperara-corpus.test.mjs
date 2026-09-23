import assert from "node:assert/strict";
import test from "node:test";

import { eperaraCommunityPage } from "../../editorial/eperara/community.mjs";
import { eperaraMedia } from "../../editorial/eperara/media.mjs";
import records from "../../editorial/eperara/records.mjs";
import {
  addedEperaraSlugs,
  canonicalEperaraSlugs,
} from "../../editorial/eperara/universe.mjs";

function words(value) {
  return String(value || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

test("los dos expedientes cumplen la metodología editorial", () => {
  assert.equal(records.length, 2);
  assert.deepEqual(
    records.map(({ slug }) => slug),
    canonicalEperaraSlugs,
  );
  for (const record of records) {
    assert.ok(words(record.mito) >= 300 && words(record.mito) <= 650);
    assert.ok(words(record.historia) >= 220 && words(record.historia) <= 600);
    assert.ok(
      words(record.versiones) >= 170 && words(record.versiones) <= 550,
    );
    assert.ok(words(record.leccion) >= 8 && words(record.leccion) <= 22);
    assert.ok(
      words(record.similitudes) >= 150 && words(record.similitudes) <= 450,
    );
    assert.equal(record.tags.length, 4);
    assert.equal(record.focus_keywords.length, 5);
    // Antes esta prueba exigía exactamente seis fuentes en las dos fichas. Ese
    // número era el reparto en bloque escrito como aserción. Lo que hay que
    // sostener es el mínimo, que no haya URLs repetidas dentro de una ficha y
    // que el relato apoye en dominios distintos.
    const fuentes = [...record.keySources, ...record.sources];
    assert.ok(fuentes.length >= 5, `${record.slug}: ${fuentes.length} fuentes`);
    assert.equal(new Set(fuentes.map(({ url }) => url)).size, fuentes.length);
    const dominios = new Set(fuentes.map(({ url }) => new URL(url).host));
    assert.ok(dominios.size >= 3, `${record.slug}: ${dominios.size} dominios`);
    for (const { url } of fuentes) {
      assert.doesNotMatch(
        url,
        /books\.google\.|openlibrary\.org|worldcat\.org|\.blogspot\.|scribd\.com|academia\.edu|wikipedia\.org/i,
        `${record.slug}: fuente de catálogo ${url}`,
      );
    }
    assert.match(record.historia, /\b(19|20)\d\d\b/, `${record.slug}: su historia no fecha el registro`);
    // Y el aparato de investigación se queda fuera del Relato.
    assert.doesNotMatch(
      record.mito,
      /\b(la fuente|las fuentes|la investigación|esta ficha|la página|según el registro)\b/i,
      `${record.slug}: su Relato habla de la investigación`,
    );
  }
});

test("cada página tiene horizontal y vertical públicas y distintas", () => {
  for (const slug of canonicalEperaraSlugs) {
    const media = eperaraMedia[slug];
    assert.match(media.horizontal, /^https:\/\//);
    assert.match(media.vertical, /^https:\/\//);
    assert.notEqual(media.horizontal, media.vertical);
  }
  const origin = eperaraMedia[addedEperaraSlugs[0]];
  assert.match(origin.horizontal, /\/mitos\/origen-del-pueblo-eperara-/);
  assert.match(origin.vertical, /\/vertical\/myth\/origen-del-pueblo-eperara-/);
});

test("la dirección visual exige ilustración full paper cut 2D", () => {
  for (const record of records) {
    for (const prompt of [
      record.image_prompt_horizontal,
      record.image_prompt_vertical,
    ]) {
      assert.match(prompt, /full paper cut/i);
      assert.match(prompt, /paper quilling/i);
      assert.match(prompt, /sin fotograf[ií]a/i);
      assert.match(prompt, /maqueta/i);
      assert.match(prompt, /diorama/i);
      assert.match(prompt, /CGI|render 3D/i);
    }
  }
  assert.match(eperaraCommunityPage.imagePrompt, /full paper cut/i);
  assert.match(eperaraCommunityPage.imagePrompt, /capas planas/i);
});

test("la antigua Palabra de Mangle queda reemplazada, no reescrita", () => {
  const tree = records.find(
    ({ slug }) => slug === "tachi-akhore-y-la-palabra-de-mangle",
  );
  assert.equal(tree.title, "Pania Pak’uru: el árbol del agua");
  // Antes se comprobaba que la Historia se declarara a sí misma «trama
  // inventada». Esa constancia ya no va en el texto publicado: vive en el
  // dossier. Lo que la página sí tiene que hacer es decir dónde se publicó el
  // relato y con qué nombre, que es lo que sostiene el reemplazo.
  assert.match(tree.historia, /ACIESNA|Plan de Vida/i);
  assert.match(tree.historia, /Pania Pak['’]uru/);
  assert.match(tree.historia, /\b2005\b/);
  // Y el Relato no arrastra los episodios que ninguna fuente sostenía.
  assert.doesNotMatch(tree.mito, /palabra es como el agua/i);
  assert.doesNotMatch(tree.mito, /joven ambicioso/i);
});

test("la landing declara el corpus, el reemplazo y la incorporación", () => {
  assert.match(
    eperaraCommunityPage.longDescription,
    /dos núcleos documentados/i,
  );
  assert.match(eperaraCommunityPage.longDescription, /conserva su URL/i);
  assert.match(eperaraCommunityPage.longDescription, /página nueva/i);
});
