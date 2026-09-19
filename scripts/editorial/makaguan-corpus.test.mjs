import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import {
  makaguanCommunityPage,
} from "../../editorial/makaguan/community.mjs";
import { makaguanMedia } from "../../editorial/makaguan/media.mjs";
import records from "../../editorial/makaguan/records.mjs";
import {
  canonicalMakaguanSlugs,
} from "../../editorial/makaguan/universe.mjs";

function words(value) {
  return String(value || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

test("los tres expedientes Makaguán cumplen la metodología editorial", () => {
  assert.equal(records.length, 3);
  assert.deepEqual(
    new Set(records.map(({ slug }) => slug)),
    new Set(canonicalMakaguanSlugs),
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
    assert.equal(record.keySources.length + record.sources.length, 7);
    const sourceUrls = [...record.keySources, ...record.sources].map(
      ({ url }) => url,
    );
    assert.equal(new Set(sourceUrls).size, sourceUrls.length);
  }
});

test("los relatos cuentan, y las correcciones viven donde deben", () => {
  const bySlug = new Map(records.map((record) => [record.slug, record]));
  assert.equal(bySlug.get("creacion-makawanes").title, "Los hijos del venado");
  assert.equal(
    bySlug.get("la-gran-inundacion").title,
    "La gran inundación y Wiri",
  );
  assert.equal(
    bySlug.get("el-alma").title,
    "Wuachirajua, la leyenda de El Alma",
  );

  // La corrección la hizo la comunidad: donde el texto escolar decía paloma, un
  // narrador aclaró que los abuelos contaban un samuro, el que se comió la
  // podredumbre que dejó el diluvio. El Relato cuenta el samuro; la
  // discrepancia vive en Versiones, que es su sitio.
  const inundacion = bySlug.get("la-gran-inundacion");
  assert.match(inundacion.mito, /samuro/i);
  assert.doesNotMatch(inundacion.mito, /paloma/i);
  assert.match(inundacion.versiones, /paloma/i);

  // Antes el Relato llevaba dentro la clasificación editorial y las cautelas
  // sobre jerarquías. Eso es aparato: va fuera del mito.
  for (const record of records) {
    assert.doesNotMatch(
      record.mito,
      /clasifica|esta p[aá]gina|la fuente|la investigaci[oó]n|jerarqu[ií]a verdadera/i,
      record.slug,
    );
    assert.doesNotMatch(record.mito, /y[oō]kai|mitolog[ií]a n[oó]rdica|viaje del h[eé]roe/i);
  }

  // Y los tres nombran ahora a quien narró: Mattar recogió los tres relatos de
  // los sabedores de El Vigía, con nombre y fecha.
  const narradores = /Gregorio Fl[oó]rez|David Emiro Gonz[aá]lez|Manuel S[aá]nchez|Ar[ií]stides Tocaria|Jos[eé] Dar[ií]o Cuenza/;
  const conNarrador = records.filter((r) => narradores.test(`${r.historia}\n${r.versiones}`));
  assert.equal(conNarrador.length, records.length);
});

test("cada ficha reutiliza una pareja horizontal y vertical distinta", () => {
  const horizontal = new Set();
  const vertical = new Set();
  for (const slug of canonicalMakaguanSlugs) {
    const media = makaguanMedia[slug];
    assert.match(media.horizontal, /^https:\/\//);
    assert.match(media.vertical, /^https:\/\//);
    assert.notEqual(media.horizontal, media.vertical);
    assert.ok(!horizontal.has(media.horizontal), `horizontal repetida: ${slug}`);
    assert.ok(!vertical.has(media.vertical), `vertical repetida: ${slug}`);
    assert.ok(media.reusedFrom);
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
  assert.match(makaguanCommunityPage.imagePrompt, /2D full paper cut/i);
  assert.match(makaguanCommunityPage.imagePrompt, /capas planas/i);
  assert.match(makaguanCommunityPage.imagePrompt, /sin fotografía/i);
  assert.match(makaguanCommunityPage.imagePrompt, /objeto físico/i);
});

test("la ruta pública usa el perfil Makaguán revisado", () => {
  const route = fs.readFileSync(
    new URL("../../src/lib/community-info.js", import.meta.url),
    "utf8",
  );
  const filters = fs.readFileSync(
    new URL("../../src/lib/communityFilters.js", import.meta.url),
    "utf8",
  );
  assert.match(route, /import \{ makaguanCommunityPage \}/);
  assert.match(route, /"makawanes": \{\s+\.\.\.makaguanCommunityPage,/);
  assert.match(filters, /MIN_COMMUNITY_MYTHS = 1;/);
});
