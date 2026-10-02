import { createHash } from "node:crypto";
import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import { caribeMestizoFinalCatalog } from "../../editorial/caribe-mestizo-final/catalog.mjs";
import {
  assertCaribeMestizoFinalEvidenceMatrix,
  caribeMestizoFinalEvidenceMatrix,
} from "../../editorial/caribe-mestizo-final/evidence.mjs";
import { caribeMestizoFinalMedia } from "../../editorial/caribe-mestizo-final/media.mjs";
import records from "../../editorial/caribe-mestizo-final/records.mjs";
import { reviewedCaribeMestizoFinalSlugs } from "../../editorial/caribe-mestizo-final/universe.mjs";

const provenancePath = new URL("../../editorial/caribe-mestizo-final/provenance.json", import.meta.url);
const words = (value) => String(value || "").trim().split(/\s+/).filter(Boolean).length;
const digest = (value) => createHash("sha256").update(value).digest("hex");

test("los setenta expedientes cumplen la metodología editorial", () => {
  assert.equal(records.length, 70);
  assert.deepEqual(new Set(records.map(({ slug }) => slug)), new Set(reviewedCaribeMestizoFinalSlugs));
  for (const record of records) {
    // El piso del Relato baja a 90 palabras cuando la ficha declara
    // `relatoCorto` con su razón: hay tres piezas en el ciclo que en la fuente
    // son cinco frases, y estirarlas hasta trescientas palabras obligaría a
    // inventar escenas. La excepción se declara en el módulo, no se supone.
    const pisoMito = record.relatoCorto ? 90 : 300;
    assert.ok(
      words(record.mito) >= pisoMito && words(record.mito) <= 650,
      `${record.slug}: mito ${words(record.mito)} (piso ${pisoMito})`,
    );
    if (record.relatoCorto) {
      assert.ok(words(record.relatoCorto) >= 15, `${record.slug}: relatoCorto sin razón escrita`);
    }
    assert.ok(words(record.historia) >= 220 && words(record.historia) <= 600, `${record.slug}: historia ${words(record.historia)}`);
    assert.ok(words(record.versiones) >= 170 && words(record.versiones) <= 550, `${record.slug}: versiones ${words(record.versiones)}`);
    assert.ok(words(record.leccion) >= 8 && words(record.leccion) <= 22, `${record.slug}: lección`);
    assert.equal((record.leccion.match(/[.!?]+/g) || []).length, 1);
    assert.ok(words(record.similitudes) >= 80 && words(record.similitudes) <= 450, `${record.slug}: similitudes`);
    assert.ok(record.excerpt.length <= 180);
    assert.ok(record.seo_title.length <= 60);
    assert.ok(record.seo_description.length >= 120 && record.seo_description.length <= 165, `${record.slug}: SEO ${record.seo_description.length}`);
    assert.equal(record.tags.length, 4);
    assert.equal(record.focus_keywords.length, 5);
    const sources = [...record.keySources, ...record.sources];
    // Ocho es el PISO, no una cuota: el bloque mestizo pide mínimo 8 y meta 12,
    // y tras la búsqueda por mito las fichas van de 8 a 13. La aserción vieja
    // exigía ocho exactas, que es lo que produce el reparto en bloque.
    assert.ok(sources.length >= 8, `${record.slug}: ${sources.length} fuentes, el piso es 8`);
    assert.equal(new Set(sources.map(({ url }) => url)).size, sources.length, `${record.slug}: URLs repetidas`);
    // `http` se admite cuando el servidor no ofrece `https` —SciELO Colombia y
    // algunos repositorios universitarios sólo sirven en claro— pero entonces
    // la limitación tiene que decirlo (spec §8).
    assert.ok(
      sources.every(({ url, summary, limitation }) =>
        summary && limitation &&
        (url.startsWith("https://") || (url.startsWith("http://") && /s[óo]lo publica por http/i.test(limitation)))),
      `${record.slug}: una fuente va sin resumen, sin límite, o en http sin declararlo`,
    );
    assert.equal(record.content, [
      `Mito\n${record.mito}`,
      `Historia\n${record.historia}`,
      `Versiones\n${record.versiones}`,
      `Lección\n${record.leccion}`,
      `Similitudes\n${record.similitudes}`,
    ].join("\n\n"));
    assert.match(record.researchNotes, /editorial\/caribe-mestizo-final\/evidence\.mjs/);
    assert.match(record.researchNotes, /editorial\/caribe-mestizo-final\/provenance\.json/);
  }
});

test("las tres procedencias del ciclo, y ninguna ficha declara carencia", () => {
  // Este test sustituye a «restaura corpus y hace visible la brecha de trece
  // rutas», que afirmaba lo contrario de lo que resultó ser verdad. Aquel daba
  // por buenas trece fichas «sin fuente primaria localizada», exigía que su
  // `researchNotes` dijera BRECHA DOCUMENTAL EXPLÍCITA y que su `historia`
  // dijera «no apareció». Las trece salen del libro de Zapata Olivella, que
  // está en abierto, y declarar carencia en la página está prohibido por el
  // spec §5.4. No se borra la comprobación: se afirma sobre lo que hay.
  const bySlug = new Map(records.map((record) => [record.slug, record]));

  // El subciclo que el módulo llama `martinez` son en realidad tres obras, de
  // tres autores y tres décadas, y cada una permite afirmar cosas distintas.
  const martinez = caribeMestizoFinalCatalog.filter(({ group }) => group === "martinez");
  assert.equal(martinez.length, 33);
  const procedencias = martinez.map((entry) => {
    const h = bySlug.get(entry.slug).historia;
    if (/Porto de González/i.test(h)) return "porto";
    if (/Otero D.?Costa/i.test(h)) return "otero";
    if (/Martínez Fajardo/i.test(h)) return "martinez";
    return "sin declarar";
  });
  const cuenta = procedencias.reduce((acc, k) => ({ ...acc, [k]: (acc[k] || 0) + 1 }), {});
  assert.equal(cuenta["sin declarar"] ?? 0, 0, "toda ficha declara de qué obra sale");
  assert.ok(cuenta.porto >= 13, `Porto de González sostiene 13 fichas, declaradas: ${cuenta.porto}`);
  assert.ok(cuenta.otero >= 3, `Otero D'Costa sostiene 3 de este subciclo, declaradas: ${cuenta.otero}`);

  // Ninguna ficha declara carencia en un campo publicable: eso vive en `dudas`.
  for (const record of records) {
    for (const campo of ["mito", "historia", "versiones", "similitudes", "leccion"]) {
      assert.doesNotMatch(
        record[campo],
        // La carencia prohibida es la de la investigación, no la del relato:
        // «el fantasma no se apareció a nadie» es narración y debe pasar.
        // Por eso el patrón exige un sustantivo documental detrás.
        /no (?:se )?(?:ha(?:n)? )?(?:apareci[óo]|localiz[óo]|encontr[óo]|conserva|conoce)\w*\s+(?:ning[uú]n[a]?\s+)?(?:fuente|registro|testimonio|documento|edici[óo]n|versi[óo]n escrita|dato|estudio|transcripci[óo]n|expediente)/i,
        `${record.slug}: «${campo}» declara carencia y eso va en dudas`,
      );
      assert.doesNotMatch(record[campo], /BRECHA DOCUMENTAL/i, `${record.slug}: «${campo}»`);
    }
  }

  // Las dos cifras del cuento de Tía Tigra se conservan, cada una con su
  // fuente: Zapata dice cinco y List siete, y las dos son correctas.
  const tigra = bySlug.get("conejo-y-los-hijos-de-tia-tigra");
  assert.match(tigra.mito, /cinco/i, "el relato sigue a Zapata, que dice cinco");
  assert.match(tigra.versiones, /siete/i, "la cifra de List se conserva en versiones");

  // Tío Conejo zapatero cambió de procedencia: su primario es cordobés y la
  // localización está dentro del propio relato.
  const zapatero = bySlug.get("tio-conejo-zapatero");
  assert.match(zapatero.mito, /Cotorra/i);
  assert.match(zapatero.historia, /Zapata Olivella/i);
});

test("la matriz cubre las setenta rutas y explicita límites", () => {
  assert.equal(assertCaribeMestizoFinalEvidenceMatrix(), true);
  assert.deepEqual(new Set(Object.keys(caribeMestizoFinalEvidenceMatrix)), new Set(reviewedCaribeMestizoFinalSlugs));
  for (const claims of Object.values(caribeMestizoFinalEvidenceMatrix)) {
    assert.ok(claims.length >= 5);
    assert.ok(claims.some(({ evidenceClass }) => evidenceClass === "límite documental"));
    assert.ok(claims.some(({ evidenceClass }) => evidenceClass === "descarte editorial"));
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

test("cada ficha tendrá dos imágenes OpenAI propias y aprobadas", { skip: !fs.existsSync(provenancePath) }, () => {
  const provenance = JSON.parse(fs.readFileSync(provenancePath, "utf8"));
  assert.equal(provenance.provider, "openai");
  assert.equal(provenance.model, "gpt-image-2");
  assert.equal(provenance.quality, "high");
  assert.equal(provenance.visualQa.status, "approved");
  assert.equal(provenance.visualQa.finalImages, 140);
  assert.equal(Object.keys(provenance.items).length, 140);
  const urls = new Set();
  for (const record of records) {
    const media = caribeMestizoFinalMedia[record.slug];
    assert.equal(media.provenanceStatus, "approved");
    for (const orientation of ["horizontal", "vertical"]) {
      const url = media[orientation];
      assert.match(url, /^https:\/\//);
      assert.ok(!urls.has(url));
      urls.add(url);
      const item = provenance.items[`${record.slug}:${orientation}`];
      const prompt = orientation === "horizontal" ? record.image_prompt_horizontal : record.image_prompt_vertical;
      assert.equal(item.provider, "openai");
      assert.equal(item.model, "gpt-image-2");
      assert.equal(item.quality, "high");
      assert.equal(item.promptSha256, digest(prompt));
      assert.equal(item.imageUrl, url);
      assert.equal(item.visualQa.status, "approved");
    }
  }
});
