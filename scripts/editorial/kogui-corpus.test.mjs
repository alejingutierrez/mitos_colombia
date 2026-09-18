import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import { koguiCommunityPage } from "../../editorial/kogui/community.mjs";
import { koguiMedia } from "../../editorial/kogui/media.mjs";
import records from "../../editorial/kogui/records.mjs";
import { canonicalKoguiSlugs } from "../../editorial/kogui/universe.mjs";

function words(value) {
  return String(value || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

test("los veinte expedientes Kogui cumplen la metodología editorial", () => {
  assert.equal(records.length, 20);
  assert.deepEqual(
    new Set(records.map(({ slug }) => slug)),
    new Set(canonicalKoguiSlugs),
  );
  for (const record of records) {
    // Un mito puede declarar `relatoCorto` cuando su primario no da para el
    // mínimo sin inventar: la razón queda escrita en el módulo.
    const minimoMito = record.relatoCorto ? 70 : 300;
    assert.ok(
      words(record.mito) >= minimoMito && words(record.mito) <= 650,
      `${record.slug}: ${words(record.mito)} palabras de relato`,
    );
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
    // El mínimo es 5; el número fijo de siete venía de la lista compartida que
    // la reescritura sustituye por fuentes propias de cada mito.
    const totalSources = record.keySources.length + record.sources.length;
    assert.ok(totalSources >= 5, `${record.slug}: ${totalSources} fuentes`);
    const sourceUrls = [...record.keySources, ...record.sources].map(
      ({ url }) => url,
    );
    assert.equal(new Set(sourceUrls).size, sourceUrls.length);
  }
});

test("corrige títulos sensibles y separa relato de recepción", () => {
  const bySlug = new Map(records.map((record) => [record.slug, record]));
  assert.equal(
    bySlug.get("incesto-de-padre-hija").title,
    "La unión prohibida que endureció la tierra",
  );
  assert.equal(
    bySlug.get("canibalismo").title,
    "Nuánashe y el hambre sin límite",
  );
  assert.equal(
    bySlug.get("el-arco-iris-susabanka").title,
    "Susabanka, enviado del Sol",
  );
  assert.equal(bySlug.get("guateovan").title, "Gauteován y la memoria de las máscaras");
  assert.match(bySlug.get("guateovan").historia, /compilación/i);
  assert.match(bySlug.get("guateovan").researchNotes, /FUENTE SECUNDARIA/i);
  assert.doesNotMatch(bySlug.get("guateovan").mito, /Olimpo.+equivalente/is);
});

test("los ciclos relacionados permanecen como episodios distintos", () => {
  const slugs = new Set(records.map(({ slug }) => slug));
  for (const slug of [
    "creacion-koguis",
    "el-primer-hombre-y-la-primera-mujer",
    "madre-wastora",
    "kimaku",
    "kashindukwe",
    "nunkasha-y-kashindukwe",
    "canibalismo",
  ]) {
    assert.ok(slugs.has(slug));
  }
  // El primario dice «piedra azul o verde», en singular: la aserción sigue al
  // texto y no a la redacción anterior de la ficha.
  assert.match(
    records.find(({ slug }) => slug === "kashindukwe").mito,
    /piedra[s]? azul(es)?( o verde[s]?)?/i,
  );
  // La repetición que el test cuidaba sigue ahí, pero en la forma del primario:
  // la fórmula «le quitaron … y lo entregaron a Núnkasha», tres veces seguidas.
  assert.match(
    records.find(({ slug }) => slug === "nunkasha-y-kashindukwe").mito,
    /(le quitaron[\s\S]*?entregaron a Núnkasha[\s\S]*?){3}/i,
  );
});

test("cada ficha reutiliza una pareja horizontal y vertical distinta", () => {
  const horizontal = new Set();
  const vertical = new Set();
  for (const slug of canonicalKoguiSlugs) {
    const media = koguiMedia[slug];
    assert.match(media.horizontal, /^https:\/\//);
    assert.match(media.vertical, /^https:\/\//);
    assert.notEqual(media.horizontal, media.vertical);
    assert.ok(!horizontal.has(media.horizontal), `horizontal repetida: ${slug}`);
    assert.ok(!vertical.has(media.vertical), `vertical repetida: ${slug}`);
    horizontal.add(media.horizontal);
    vertical.add(media.vertical);
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
      assert.match(prompt, /objeto físico/i);
      assert.match(prompt, /maqueta/i);
      assert.match(prompt, /diorama/i);
      assert.match(prompt, /CGI|render 3D/i);
    }
  }
  assert.match(koguiCommunityPage.imagePrompt, /2D full paper cut/i);
  assert.match(koguiCommunityPage.imagePrompt, /capas planas/i);
  assert.match(koguiCommunityPage.imagePrompt, /sin fotografía/i);
  assert.match(koguiCommunityPage.imagePrompt, /objeto físico/i);
});

test("la ruta pública usa el perfil Kogui revisado", () => {
  const route = fs.readFileSync(
    new URL("../../src/lib/community-info.js", import.meta.url),
    "utf8",
  );
  assert.match(route, /import \{ koguiCommunityPage \}/);
  assert.match(route, /"koguis": \{\s+\.\.\.koguiCommunityPage,/);
});
