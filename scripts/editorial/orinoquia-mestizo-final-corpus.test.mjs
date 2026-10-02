import { createHash } from "node:crypto";
import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import {
  assertOrinoquiaMestizoFinalEvidenceMatrix,
  orinoquiaMestizoFinalEvidenceMatrix,
} from "../../editorial/orinoquia-mestizo-final/evidence.mjs";
import { orinoquiaMestizoFinalMedia } from "../../editorial/orinoquia-mestizo-final/media.mjs";
import records from "../../editorial/orinoquia-mestizo-final/records.mjs";
import { reviewedOrinoquiaMestizoFinalSlugs } from "../../editorial/orinoquia-mestizo-final/universe.mjs";

const provenancePath = new URL(
  "../../editorial/orinoquia-mestizo-final/provenance.json",
  import.meta.url,
);

function words(value) {
  return String(value || "").trim().split(/\s+/).filter(Boolean).length;
}

function digest(value) {
  return createHash("sha256").update(value).digest("hex");
}

test("los diecinueve expedientes cumplen la metodología editorial", () => {
  assert.equal(records.length, 19);
  assert.deepEqual(
    new Set(records.map(({ slug }) => slug)),
    new Set(reviewedOrinoquiaMestizoFinalSlugs),
  );
  for (const record of records) {
    assert.ok(words(record.mito) >= 300 && words(record.mito) <= 650, `${record.slug}: mito ${words(record.mito)}`);
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
    // Eran 8 exactas, el reparto en bloque. Tras la ronda del cierre cada ficha
    // tiene las suyas: piso de 8, o `fuentesAgotadas` declarado (el Domínguez).
    const sources = [...record.keySources, ...record.sources];
    assert.ok(sources.length >= (record.slug === "el-dominguez" ? 7 : 8), `${record.slug}: ${sources.length} fuentes`);
    assert.equal(new Set(sources.map(({ url }) => url)).size, sources.length);
    assert.ok(
      sources.every(
        ({ url, summary, limitation }) =>
          summary &&
          limitation &&
          (url.startsWith("https://") || (url.startsWith("http://") && /s[óo]lo publica por http/i.test(limitation))),
      ),
      `${record.slug}: fuente sin resumen, sin límite o en http sin declararlo`,
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
    assert.match(record.researchNotes, /editorial\/orinoquia-mestizo-final\/evidence\.mjs/);
    assert.match(record.researchNotes, /editorial\/orinoquia-mestizo-final\/provenance\.json/);
  }
});

test("atribuye los diecisiete cuentos firmados y corrige límites críticos", () => {
  const bySlug = new Map(records.map((record) => [record.slug, record]));
  for (const slug of reviewedOrinoquiaMestizoFinalSlugs) {
    const record = bySlug.get(slug);
    if (["el-tesoro-de-caribare", "la-bola-de-fuego"].includes(slug)) continue;
    assert.match(record.researchNotes, /LITERATURA FIRMADA/);
    // Antes se exigía que el Relato dijera «obra firmada» o «serie literaria»:
    // era el párrafo de marco pegado al mito, aparato dentro del Relato. La
    // autoría se declara ahora donde toca, en la historia, con nombre del autor.
    assert.match(record.historia, /Vargas Bar[oó]n|Baquero/);
    assert.doesNotMatch(record.mito, /obra firmada|serie literaria|la revisión conserva/i);
  }
  assert.match(bySlug.get("amanecer-llanero").researchNotes, /genealogía panindígena/i);
  assert.match(bySlug.get("los-delfines-dorados").researchNotes, /no se atribuyen a pueblos indígenas/i);
  assert.match(bySlug.get("el-brujo-de-la-costa-del-pauto").researchNotes, /No es consejo médico/i);
  // El narrador dice haber leído la fábula en Calila y Dimna.
  assert.match(bySlug.get("leal-hasta-la-muerte").mito, /Calila/i);
  // Los títulos con subtítulo («hacienda y ruina», «amor y metamorfosis») eran
  // del sitio, no del libro, y alguno afirmaba lo que el texto desmiente. El
  // visible sigue siendo el publicado hasta que el director decida (agenda).
  for (const record of records) assert.doesNotMatch(record.title, /:/, `${record.slug}: subtítulo sin fuente`);
  assert.match(bySlug.get("los-tres-luceros").researchNotes, /suicidio[\s\S]+no recompensa/i);
  assert.match(bySlug.get("madre-rio-o-mohana").researchNotes, /coerción[\s\S]+contra/i);
  assert.match(bySlug.get("el-domador-de-brujas").researchNotes, /Coerción sexual[\s\S]+pseudomedicina/i);
});

test("corrige Caribabare y preserva Bola de Fuego como variante llanera", () => {
  const bySlug = new Map(records.map((record) => [record.slug, record]));
  const treasure = bySlug.get("el-tesoro-de-caribare");
  // El slug dice Caribare, la grafía del inventario de 1768; el título es el publicado.
  assert.match(treasure.title, /Carib/);
  // La historia de la hacienda con fuentes altas; la leyenda, con su cadena.
  assert.match(treasure.historia, /1767/);
  assert.match(treasure.historia, /Rueda Enciso/);
  assert.match(treasure.historia, /Perea/);
  assert.match(treasure.researchNotes, /forma documentada es Caribabare/i);

  const fire = bySlug.get("la-bola-de-fuego");
  // La madre y el corazón en llamas vuelven con su registro (MEN 2012).
  assert.match(fire.mito, /coraz[oó]n/i);
  assert.match(fire.researchNotes, /David Gamboa[\s\S]+Hato Valbuena[\s\S]+sin fusionarse/i);
  // Las dos orillas enfrentadas, con el registro venezolano.
  assert.match(fire.versiones, /Portuguesa|Pérez Montero/);
});

test("la matriz cubre diecinueve rutas y explicita límites", () => {
  assert.equal(assertOrinoquiaMestizoFinalEvidenceMatrix(), true);
  assert.deepEqual(
    new Set(Object.keys(orinoquiaMestizoFinalEvidenceMatrix)),
    new Set(reviewedOrinoquiaMestizoFinalSlugs),
  );
  for (const claims of Object.values(orinoquiaMestizoFinalEvidenceMatrix)) {
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

test(
  "cada ficha tendrá dos imágenes OpenAI propias y aprobadas",
  { skip: !fs.existsSync(provenancePath) },
  () => {
    const provenance = JSON.parse(fs.readFileSync(provenancePath, "utf8"));
    assert.equal(provenance.provider, "openai");
    assert.equal(provenance.model, "gpt-image-2");
    assert.equal(provenance.quality, "high");
    assert.equal(provenance.visualQa.status, "approved");
    assert.equal(provenance.visualQa.finalImages, 38);
    assert.equal(Object.keys(provenance.items).length, 38);
    const urls = new Set();
    for (const record of records) {
      const media = orinoquiaMestizoFinalMedia[record.slug];
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
