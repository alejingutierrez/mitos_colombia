import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import {
  nukakCommunityImageUrl,
  nukakCommunityPage,
} from "../../editorial/nukak/community.mjs";
import { nukakMedia } from "../../editorial/nukak/media.mjs";
import records from "../../editorial/nukak/records.mjs";
import { canonicalNukakSlugs } from "../../editorial/nukak/universe.mjs";

function words(value) {
  return String(value || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

test("el expediente Nukak cumple la metodología editorial", () => {
  assert.equal(records.length, 1);
  assert.deepEqual(
    new Set(records.map(({ slug }) => slug)),
    new Set(canonicalNukakSlugs),
  );
  const record = records[0];
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
  // Antes eran exactamente siete: la lista que el define aplicaba a todas por
  // igual. Ahora la ficha declara las suyas, y lo que se exige es el mínimo.
  assert.ok(record.keySources.length + record.sources.length >= 5);
  const urls = [...record.keySources, ...record.sources].map(({ url }) => url);
  assert.equal(new Set(urls).size, urls.length);
});

test("retira la conflación Kakua del relato Nukak", () => {
  const record = records[0];
  assert.equal(record.title, "Machoroko y el nacimiento Nɨkak");
  assert.match(record.mito, /Machoroko/);
  assert.match(record.mito, /Aukurɨbo/);
  assert.match(record.mito, /\bbak\b/);
  assert.doesNotMatch(record.mito, /Idn Kamni|Río de Leche|saliva/i);
  // La ficha escribe los etnónimos en minúscula —nɨkak, kakua—, así que la
  // comprobación no puede depender de la mayúscula.
  assert.match(record.historia, /kakua/i);
  // Y lo que importa es que la Historia separe los dos orígenes en vez de
  // fundirlos, que era la conflación que se retiró del Relato.
  assert.match(record.historia, /Idn Kamni/);
  assert.match(record.similitudes, /kakua/i);
  assert.match(record.researchNotes, /CORRECCIÓN INTEGRAL/);
});

test("reemplaza las dos imágenes por una pareja 2D aprobada", () => {
  const media = nukakMedia["creacion-nukak-maku"];
  assert.match(media.horizontal, /^https:\/\//);
  assert.match(media.vertical, /^https:\/\//);
  assert.notEqual(media.horizontal, media.vertical);
  assert.equal(media.reusedFrom, "chimila/yunari-y-las-cinco-tierras");
  for (const prompt of [
    records[0].image_prompt_horizontal,
    records[0].image_prompt_vertical,
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
  assert.match(nukakCommunityPage.imagePrompt, /2D full paper cut/i);
  assert.match(nukakCommunityPage.imagePrompt, /capas planas/i);
  assert.match(nukakCommunityPage.imagePrompt, /sin fotografía/i);
  assert.match(nukakCommunityPage.imagePrompt, /objeto físico/i);
  assert.equal(nukakCommunityImageUrl, media.horizontal);
});

test("la ruta pública usa el perfil Nɨkak revisado", () => {
  const route = fs.readFileSync(
    new URL("../../src/lib/community-info.js", import.meta.url),
    "utf8",
  );
  assert.match(route, /import \{ nukakCommunityPage \}/);
  assert.match(route, /"nukak-maku": \{\s+\.\.\.nukakCommunityPage,/);
  const filters = fs.readFileSync(
    new URL("../../src/lib/communityFilters.js", import.meta.url),
    "utf8",
  );
  assert.match(filters, /MIN_COMMUNITY_MYTHS = 1;/);
});
