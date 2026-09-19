import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import { ansermasCommunityPage } from "../../editorial/ansermas/community.mjs";
import { ansermasMedia } from "../../editorial/ansermas/media.mjs";
import records from "../../editorial/ansermas/records.mjs";
import {
  ansermasEditorialDecisions,
  canonicalAnsermasSlugs,
} from "../../editorial/ansermas/universe.mjs";

function words(value) {
  return String(value || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

test("los dos expedientes Ansermas cumplen la metodología editorial", () => {
  assert.equal(records.length, 2);
  assert.deepEqual(
    new Set(records.map(({ slug }) => slug)),
    new Set(canonicalAnsermasSlugs),
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

test("la revisión unifica un duplicado y recupera el relato de los Tamaracas", () => {
  assert.equal(
    ansermasEditorialDecisions["los-pasos-de-xixaraca"].action,
    "unify",
  );
  assert.equal(
    ansermasEditorialDecisions["las-huellas-de-mapura"].action,
    "reassign-duplicate-url",
  );
  const footsteps = records.find(
    ({ slug }) => slug === "los-pasos-de-xixaraca",
  );
  const tamaracas = records.find(
    ({ slug }) => slug === "las-huellas-de-mapura",
  );
  assert.match(footsteps.title, /huellas de Xixaraca/i);
  // Las aserciones que exigían que el Relato explicara la investigación
  // —«No había una princesa», «leyenda literaria publicada en 1932», «no
  // registra un nombre propio»— eran el aparato editorial escrito como prueba.
  // Ese aparato salió del Relato y vive ahora en Historia, Versiones y el
  // dossier. Lo que se comprueba es lo mismo, dicho donde corresponde.
  // «Lágrimas de Michua» sólo se sostiene en blogs y en este mismo sitio: se
  // retiró del Relato y la constancia quedó en el dossier. Michua sigue,
  // porque sí está documentada como diosa del valor y de la guerra.
  assert.doesNotMatch(footsteps.mito, /Lágrimas de Michua/i);
  assert.match(footsteps.mito, /Michua/);
  assert.match(footsteps.mito, /Xixaraca/);
  assert.match(footsteps.mito, /Karambá/);
  assert.match(footsteps.historia, /Guacuma/);
  assert.match(tamaracas.title, /Tamaracas/i);
  // El «cerro Opiramá» no resiste: Opiramá es un río en la UTP y un cacique de
  // 1557 en Zuluaga, nunca el cerro donde se encierra a los Tamaracas. Queda
  // en Versiones, como problema, y fuera del Relato.
  assert.doesNotMatch(tamaracas.mito, /Opiramá/i);
  assert.match(tamaracas.versiones, /Opiramá/i);
  assert.match(tamaracas.mito, /langosta/i);
  assert.match(tamaracas.mito, /Tamaraca/);
  // Y lo que Cieza documenta: tamaraca es la palabra con que esa gente nombró
  // a los invasores, no un pueblo indígena.
  assert.match(tamaracas.historia, /Cieza/);
  assert.match(tamaracas.versiones, /Tamaraca/);
  assert.doesNotMatch(
    tamaracas.mito,
    /Noanamá|Tatamá|Chocó.*(?:mal|demon|enemig)/i,
  );
});

test("cada página exige una horizontal y una vertical públicas y distintas", () => {
  for (const slug of canonicalAnsermasSlugs) {
    const media = ansermasMedia[slug];
    assert.match(media.horizontal, /^https:\/\//);
    assert.match(media.vertical, /^https:\/\//);
    assert.notEqual(media.horizontal, media.vertical);
    assert.doesNotMatch(media.horizontal + media.vertical, /pending\.invalid/);
  }
});

test("la dirección visual es ilustración 2D full paper cut, nunca maqueta", () => {
  for (const record of records) {
    for (const prompt of [
      record.image_prompt_horizontal,
      record.image_prompt_vertical,
    ]) {
      assert.match(prompt, /2D full paper cut/i);
      assert.match(prompt, /paper quilling/i);
      assert.match(prompt, /acabado gr[aá]fico plano/i);
      assert.match(prompt, /sin fotograf[ií]a/i);
      assert.match(prompt, /objeto f[ií]sico/i);
      assert.match(prompt, /maqueta/i);
      assert.match(prompt, /diorama/i);
      assert.match(prompt, /CGI|render 3D/i);
    }
  }
  assert.match(ansermasCommunityPage.imagePrompt, /2D full paper cut/i);
  assert.match(ansermasCommunityPage.imagePrompt, /capas planas/i);
  assert.match(ansermasCommunityPage.imagePrompt, /sin fotograf[ií]a/i);
  assert.match(ansermasCommunityPage.imagePrompt, /objeto f[ií]sico/i);
});

test("la ruta pública usa Ansermas y conserva un solo perfil U’wa", () => {
  const route = fs.readFileSync(
    new URL("../../src/lib/community-info.js", import.meta.url),
    "utf8",
  );
  assert.match(route, /import \{ ansermasCommunityPage \}/);
  assert.match(route, /"ansermas": \{\s+\.\.\.ansermasCommunityPage,/);
  assert.equal((route.match(/"u-wa":\s*\{/g) || []).length, 1);
  assert.equal((route.match(/\.\.\.uwaCommunityPage/g) || []).length, 1);
  assert.doesNotMatch(route, /sangre de la tierra/i);
});
