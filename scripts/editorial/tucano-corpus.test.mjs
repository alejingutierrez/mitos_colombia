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
    // Antes: `keySources + sources === 7` y `new Set(urls).size === 7`. Ese
    // siete era el dossier fijo que `pickTucanoSources` armaba con un solo
    // interruptor, escrito como aserción; las siete fichas citaban las mismas
    // ocho URLs heredadas y ninguna era la obra que la ficha había usado. La
    // Fase B del 2026-09-19 dejó las cinco obras del corpus, pero ordenadas
    // por ficha: primero las que esa página usó. Lo que se comprueba ahora es
    // la sustancia, y el orden lo comprueba el test siguiente.
    const fuentes = [...record.keySources, ...record.sources];
    const urls = fuentes.map(({ url }) => url);
    assert.ok(
      fuentes.length >= 5,
      `${record.slug}: ${fuentes.length} fuentes, el mínimo son cinco`,
    );
    assert.equal(record.keySources.length, 3);
    assert.equal(new Set(urls).size, urls.length);
    assert.ok(urls.every((url) => url.startsWith("https://")));
    assert.ok(fuentes.every(({ summary, limitation }) => summary && limitation));
  }
});

test("las fuentes son las cinco obras leídas, y la vecindad va escrita", () => {
  const todas = records.flatMap((record) => [
    ...record.keySources,
    ...record.sources,
  ]);
  const porUrl = new Map(todas.map((fuente) => [fuente.url, fuente]));
  const urls = [...porUrl.keys()].sort();
  // Eran exactamente las cinco obras de la ronda de septiembre. La Fase B del
  // cierre (2026-09-22) sumó fuentes nuevas por ficha; las cinco siguen todas.
  for (const base of [
    "https://acervo.socioambiental.org/acervo/livros/antes-o-mundo-nao-existia-mitologia-dos-antigos-desana-kehiripora-2a-ed-rev-ampl",
    "https://revistas.icanh.gov.co/index.php/rca/article/view/1801",
    "https://revistas.icanh.gov.co/index.php/rca/article/view/1865",
    "https://revistas.unal.edu.co/index.php/imanimundo/article/view/74221",
    "https://revistas.unal.edu.co/index.php/maguare/article/view/29-51",
  ]) {
    assert.ok(urls.includes(base), `falta una de las cinco obras leídas: ${base}`);
  }

  // Las ocho heredadas no vuelven: no eran las obras que la ficha usó, y la de
  // Icesi además no respondía.
  for (const muerta of [
    "repository.icesi.edu.co",
    "acervo.socioambiental.org/acervo/livros/povo-tukano",
    "pesquisa.museudoindio.gov.br",
    "gov.br/funai",
    "povosindigenas.org.br",
    "sag-ssa.ch",
    "cambridge.org",
  ]) {
    assert.ok(
      !urls.some((url) => url.includes(muerta)),
      `volvió una URL retirada: ${muerta}`,
    );
  }

  // Fulop es la fuente madre: ninguna ficha se sostiene sin él.
  for (const record of records) {
    assert.ok(
      [...record.keySources, ...record.sources].some(({ url }) =>
        url.includes("revistas.icanh.gov.co"),
      ),
      `${record.slug} no cita a Fulop`,
    );
  }

  // Y la reserva que el propio Fulop escribió, y la doble vecindad de las dos
  // obras brasileñas, quedan en el `limitation`, que no se pinta en la página.
  assert.match(
    porUrl.get("https://revistas.icanh.gov.co/index.php/rca/article/view/1865")
      .limitation,
    /un solo informante/i,
  );
  assert.match(
    porUrl.get("https://revistas.unal.edu.co/index.php/imanimundo/article/view/74221")
      .limitation,
    /brasile/i,
  );
  const desana = porUrl.get(
    "https://acervo.socioambiental.org/acervo/livros/antes-o-mundo-nao-existia-mitologia-dos-antigos-desana-kehiripora-2a-ed-rev-ampl",
  );
  assert.match(desana.limitation, /desana, no tucano/i);
  assert.match(desana.limitation, /brasile/i);

  // Y el orden ya no es uno solo para las siete: cambia por ficha, y con él
  // cambian las tres fuentes clave, que son las que esa página usó.
  const claves = records.map((record) =>
    record.keySources.map(({ url }) => url).join("|"),
  );
  assert.ok(
    new Set(claves).size >= 4,
    "las siete fichas destacan las mismas tres fuentes clave",
  );

  // Las obras que una ficha no usó lo dicen en su propia entrada; las que sí,
  // no arrastran esa frase.
  for (const record of records) {
    for (const fuente of record.keySources) {
      assert.doesNotMatch(
        fuente.limitation,
        /No se usó para escribir esta ficha/,
        `${record.slug}: una fuente clave se declara no usada`,
      );
    }
  }
  const marcadas = records.flatMap((record) =>
    record.sources.filter(({ limitation }) =>
      /No se usó para escribir esta ficha/.test(limitation),
    ),
  );
  assert.ok(
    marcadas.length >= 7,
    "ninguna ficha declara qué obra del corpus no la alimentó",
  );
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
        // `sourceUrls` es el acta de lo que se citaba el día en que se generó
        // la imagen: siete URLs, el dossier fijo de entonces. Se comprueba tal
        // cual porque describe el pasado; el reparto vivo lo comprueban los
        // dos primeros tests.
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
