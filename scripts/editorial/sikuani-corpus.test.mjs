import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import {
  sikuaniCommunityImageUrl,
  sikuaniCommunityPage,
} from "../../editorial/sikuani/community.mjs";
import { sikuaniMedia } from "../../editorial/sikuani/media.mjs";
import records from "../../editorial/sikuani/records.mjs";
import { canonicalSikuaniSlugs } from "../../editorial/sikuani/universe.mjs";

function words(value) {
  return String(value || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

test("los diez expedientes Sikuani cumplen la metodología editorial", () => {
  assert.equal(records.length, 10);
  assert.deepEqual(
    new Set(records.map(({ slug }) => slug)),
    new Set(canonicalSikuaniSlugs),
  );
  for (const record of records) {
    // Un mito puede declarar `relatoCorto` cuando su primario no da para el
    // mínimo sin inventar: la razón queda escrita en el módulo. En sikuani
    // son cuatro, y los cuatro porque el texto completo sólo existe en dos
    // libros que no están en digital.
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
    // Antes: `keySources + sources === 7`. Ese siete era el reparto en bloque
    // —una fuente narrativa más seis de contexto idénticas para las diez
    // fichas— escrito como aserción. La Fase B del 2026-09-19 dejó en cada
    // ficha las obras que su reescritura usó de verdad, que son entre seis y
    // nueve. Lo que se comprueba ahora es la sustancia.
    const fuentes = [...record.keySources, ...record.sources];
    const urls = fuentes.map(({ url }) => url);
    assert.ok(
      fuentes.length >= 5,
      `${record.slug}: ${fuentes.length} fuentes, el mínimo son cinco`,
    );
    assert.equal(record.keySources.length, 3);
    assert.equal(new Set(urls).size, urls.length);
    assert.ok(urls.every((url) => url.startsWith("https://")));
    assert.ok(
      new Set(urls.map((url) => new URL(url).hostname)).size >= 4,
      `${record.slug}: fuentes de menos de cuatro dominios`,
    );
    assert.ok(fuentes.every(({ summary, limitation }) => summary && limitation));
  }
});

test("ninguna ficha repite el reparto de otra, y las retiradas no vuelven", () => {
  const repartos = records.map((record) =>
    [...record.keySources, ...record.sources]
      .map(({ url }) => url)
      .sort()
      .join("|"),
  );
  assert.equal(
    new Set(repartos).size,
    records.length,
    "dos fichas citan exactamente las mismas obras",
  );

  const todas = records.flatMap((record) => [
    ...record.keySources,
    ...record.sources,
  ]);
  const urls = todas.map(({ url }) => url);
  // Las seis que la auditoría tumbó: la de la ONIC redirige a la portada; el
  // PDF del ICBF no responde; las dos de FLACSO devuelven 403; la de UCLA es
  // una página de venta sin una línea de relato; y el blogspot reproducía a
  // Baquero sin acreditarlo.
  for (const muerta of [
    "onic.org.co",
    "icbf.gov.co/sites/default/files/sikuanicompressed.pdf",
    "repositorio.flacsoandes.edu.ec",
    "international.ucla.edu",
    "armonicosdeconciencia.blogspot.com",
    "centrodememoriahistorica.gov.co",
  ]) {
    assert.ok(
      !urls.some((url) => url.includes(muerta)),
      `volvió una URL retirada: ${muerta}`,
    );
  }

  // Baquero se cita por el artículo del Boletín Museo del Oro 23, y las dos
  // piezas de la Audioteca —las únicas con narrador acreditado— se conservan.
  assert.ok(
    urls.some((url) =>
      url.startsWith(
        "https://publicaciones.banrepcultural.org/index.php/bmo/article/view/6964",
      ),
    ),
  );
  assert.ok(
    urls.some((url) =>
      url.startsWith("https://audiotecadigital.icbf.gov.co/adultos/articulo/332"),
    ),
  );
  assert.ok(
    urls.some((url) =>
      url.startsWith("https://audiotecadigital.icbf.gov.co/adultos/articulo/304"),
    ),
  );

  // La frontera guahibo queda escrita donde se lee: en el `limitation`.
  const porUrl = new Map(todas.map((fuente) => [fuente.url, fuente]));
  for (const [fragmento, marca] of [
    ["maguare/article/view/14222", /cuiba/i],
    ["ornitologi", /cuiba/i],
    ["rca/article/view/1731", /cuiba|guahibo/i],
  ]) {
    const fuente = [...porUrl.values()].find(({ url }) => url.includes(fragmento));
    assert.ok(fuente, `falta la fuente ${fragmento}`);
    assert.match(fuente.limitation, marca);
  }

  // El certificado caducado de la Audioteca se dice, no se esconde.
  for (const articulo of ["articulo/332", "articulo/304"]) {
    const fuente = [...porUrl.values()].find(({ url }) => url.includes(articulo));
    assert.match(fuente.limitation, /certificado SSL|certificado/i);
  }
});

test("corrige las dos páginas inventadas y separa los dos jaguares", () => {
  const bySlug = new Map(records.map((record) => [record.slug, record]));
  assert.equal(
    bySlug.get("el-creador-del-cosmos").title,
    "Kuwei, Kuemi y el comienzo del mundo",
  );
  assert.equal(
    bySlug.get("la-comida-para-los-muertos").title,
    "Tsamani y el camino de la luz",
  );
  assert.equal(
    bySlug.get("historia-de-un-tigre").title,
    "El jaguar y los dos hermanos",
  );
  assert.equal(
    bySlug.get("el-tigre").title,
    "El jaguar en la casa Tsorueto",
  );
  assert.doesNotMatch(
    records.map(({ mito }) => mito).join("\n"),
    /arca de No[eé]|Kano[aá].*niños muertos|alma hambrienta/i,
  );
});

test("cada ficha reutiliza una pareja horizontal y vertical distinta", () => {
  const horizontal = new Set();
  const vertical = new Set();
  for (const slug of canonicalSikuaniSlugs) {
    const media = sikuaniMedia[slug];
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
  assert.match(sikuaniCommunityPage.imagePrompt, /2D full paper cut/i);
  assert.match(sikuaniCommunityPage.imagePrompt, /capas planas/i);
  assert.match(sikuaniCommunityPage.imagePrompt, /sin fotografía/i);
  assert.match(sikuaniCommunityPage.imagePrompt, /objeto físico/i);
  assert.equal(
    sikuaniCommunityImageUrl,
    sikuaniMedia["kaliwirnae-el-arbol-de-los-alimentos"].horizontal,
  );
});

test("la ruta pública usa el perfil Sikuani revisado", () => {
  const route = fs.readFileSync(
    new URL("../../src/lib/community-info.js", import.meta.url),
    "utf8",
  );
  assert.match(route, /import \{ sikuaniCommunityPage \}/);
  assert.match(route, /"guahibo-sikuani": \{\s+\.\.\.sikuaniCommunityPage,/);
  assert.match(route, /"sikuani": \{\s+\.\.\.sikuaniCommunityPage,/);
});
