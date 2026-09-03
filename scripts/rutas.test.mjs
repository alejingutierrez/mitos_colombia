import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import { RUTAS } from "../content/rutas/index.mjs";
import {
  RUTA_ACCENTS,
  buildLabelIndex,
  isWellFormedSlug,
  normalizeRuta,
  normalizeRutas,
  toParagraphs,
  validateRutas,
} from "../content/rutas/model.mjs";

const root = new URL("../", import.meta.url);
const read = (path) => readFile(new URL(path, root), "utf8");

const rutas = normalizeRutas(RUTAS);

/**
 * El censo con el que las nueve rutas originales llegaron al modelo nuevo.
 *
 * Antes cada ruta nombraba sus mitos por TÍTULO y el código los buscaba con
 * coincidencia difusa. Estos slugs salen de resolver esos títulos UNA vez
 * contra la base de datos de producción: el slug de un mito se generó a partir
 * de su título original, así que sobrevive intacto a cualquier reescritura
 * editorial del título. Los 90 enlaces resolvieron; ninguno quedó huérfano.
 *
 * Esta tabla es el contrato de la migración: si un cambio futuro le quita un
 * mito a una de estas rutas, este test lo dice.
 */
const CENSO_MIGRADO = {
  "guardianes-del-agua": [
    "la-madre-agua",
    "hentsera-y-el-agua",
    "lagunas-encantadas",
    "zequiel",
    "el-tesoro-de-caribare",
    "kugi-y-nokuerai",
    "el-retorno-de-plumon-amarillo",
    "el-origen-del-agua",
    "el-carriazo-de-vereda-san-isidro",
    "el-reventon-de-jacobo",
  ],
  "cartografia-selva": [
    "los-muertos-en-el-monte",
    "la-sed-da-los-civilizados",
    "el-morrocoyo",
    "juma",
    "peleas-y-aventuras-entre-el-sobrino-conejo-y-el-tio-tigre",
    "diijoma",
    "kugi-y-nokuerai",
    "jobiya-jitoma",
    "yepa-castiaga-a-los-animales",
    "el-cazador",
  ],
  "bestiario-colombiano": [
    "el-hombre-que-sono-con-caiman",
    "los-brujos",
    "el-hombre-caiman",
    "el-hombre-tigre",
    "el-tigre",
    "la-nina-que-se-volvio-serpiente",
    "yepa-castiaga-a-los-animales",
    "aribamias",
    "tasime-el-incesto",
    "la-vieja-colmillona",
  ],
  "bosques-y-niebla": [
    "el-dominguez",
    "los-muertos-en-el-monte",
    "el-diablo-del-puente-del-comun",
    "el-doctor-galeacer",
    "historia-de-un-viejo",
    "coste",
    "el-dalo",
    "el-guatin-astuto",
    "tal-para-cual",
    "el-cazador",
  ],
  "criaturas-nocturnas": [
    "el-diablo-del-puente-del-comun",
    "los-fantasmas",
    "el-doctor-galeacer",
    "el-fantasma-de-el-horizonte",
    "no-hay-deuda-que-no-se-pague",
    "el-diablo",
    "el-guango",
    "el-bus-fantasma",
    "taik",
    "la-nina-de-la-carta",
  ],
  "ritos-del-mar": [
    "marineritis-sentimental",
    "madre-de-playa",
    "el-barco-fantasma",
    "el-padre-mera",
    "creacion",
    "el-heroe",
    "el-castellano-de-san-juan",
    "el-mal-del-mar",
    "en-el-sitio-de-morillo",
    "el-incesto",
  ],
  "fronteras-y-caminos": [
    "el-diablo-del-puente-del-comun",
    "kugi-y-nokuerai",
    "el-mundo-de-ultratumba",
    "el-viaje-al-cielo",
    "la-mina-de-oro-en-el-infierno",
    "el-tunjo",
    "la-vista-del-libertador",
    "el-hombre-flaco",
    "la-vieja-el-burro-y-los-huevos",
    "la-comida-para-los-muertos",
  ],
  "voces-urbanas": [
    "el-bobo-del-tranvia",
    "el-toro-en-el-ascensor",
    "anansi",
    "el-chenche",
    "la-confesion",
    "la-sombra",
    "en-el-sitio-de-morillo",
    "el-mono-de-la-pila",
    "el-fantasma-del-teatro-azul",
    "una-reunion-clandestina",
  ],
  "montanas-paramos": [
    "lagunas-encantadas",
    "la-laguna-de-maria-panana",
    "tradicion-del-cerro",
    "fu-el-dios-de-la-torpeza",
    "namaku",
    "el-tesoro-de-buzaga",
    "el-cerro-encantado",
    "la-visita-del-joven-desconocido",
    "el-incesto",
    "la-chama",
  ],
};

/* ------------------------------------------------------------------------ *
 * Integridad del censo
 * ------------------------------------------------------------------------ */

test("el censo completo pasa la validación del modelo", () => {
  const problems = validateRutas(rutas);
  assert.deepEqual(problems, [], `problemas encontrados:\n  ${problems.join("\n  ")}`);
});

test("cada ruta tiene un slug único y bien formado", () => {
  const seen = new Set();
  for (const ruta of rutas) {
    assert.ok(
      isWellFormedSlug(ruta.slug),
      `slug de ruta mal formado: «${ruta.slug}»`
    );
    assert.ok(!seen.has(ruta.slug), `slug de ruta repetido: «${ruta.slug}»`);
    seen.add(ruta.slug);
  }
  assert.ok(rutas.length >= 9, "el censo perdió rutas");
});

test("todo mito se declara por slug bien formado, nunca por título", () => {
  for (const ruta of rutas) {
    assert.ok(ruta.myths.length > 0, `${ruta.slug} no declara mitos`);
    for (const myth of ruta.myths) {
      assert.ok(
        isWellFormedSlug(myth.slug),
        `${ruta.slug}: slug de mito mal formado «${myth.slug}»`
      );
      // Un título llevaría mayúsculas, tildes o espacios: el slug, jamás.
      assert.equal(myth.slug, myth.slug.toLowerCase());
      assert.ok(!/\s/.test(myth.slug));
    }
  }
});

test("ninguna ruta repite un mito", () => {
  for (const ruta of rutas) {
    const seen = new Set();
    for (const slug of ruta.mythSlugs) {
      assert.ok(!seen.has(slug), `${ruta.slug}: «${slug}» aparece dos veces`);
      seen.add(slug);
    }
    assert.equal(seen.size, ruta.myths.length);
  }
});

test("la portada de cada ruta es uno de sus mitos", () => {
  for (const ruta of rutas) {
    assert.ok(ruta.cover, `${ruta.slug} no tiene portada`);
    assert.ok(
      ruta.mythSlugs.includes(ruta.cover),
      `${ruta.slug}: la portada «${ruta.cover}» no está en el censo`
    );
  }
});

test("cada ruta trae acento válido, título y descripción", () => {
  for (const ruta of rutas) {
    assert.ok(RUTA_ACCENTS.includes(ruta.accent), `${ruta.slug}: acento inválido`);
    assert.ok(ruta.title.length > 0, `${ruta.slug}: sin título`);
    assert.ok(ruta.description.length > 0, `${ruta.slug}: sin descripción`);
    assert.ok(ruta.introParagraphs.length > 0, `${ruta.slug}: sin prosa de entrada`);
  }
});

/* ------------------------------------------------------------------------ *
 * Momentos
 * ------------------------------------------------------------------------ */

test("los momentos sólo citan mitos que su ruta declara", () => {
  for (const ruta of rutas) {
    const declarados = new Set(ruta.mythSlugs);
    for (const momento of ruta.momentos) {
      for (const slug of momento.myths) {
        assert.ok(
          declarados.has(slug),
          `${ruta.slug}/${momento.slug}: cita «${slug}», ajeno al censo`
        );
      }
    }
  }
});

test("un mito no puede estar en dos momentos de la misma ruta", () => {
  for (const ruta of rutas) {
    const visto = new Map();
    for (const momento of ruta.momentos) {
      for (const slug of momento.myths) {
        assert.ok(
          !visto.has(slug),
          `${ruta.slug}: «${slug}» está en «${visto.get(slug)}» y en «${momento.slug}»`
        );
        visto.set(slug, momento.slug);
      }
    }
  }
});

test("los momentos tienen slug propio, único dentro de la ruta, y título", () => {
  for (const ruta of rutas) {
    const seen = new Set();
    for (const momento of ruta.momentos) {
      assert.ok(
        isWellFormedSlug(momento.slug),
        `${ruta.slug}: slug de momento mal formado «${momento.slug}»`
      );
      assert.ok(!seen.has(momento.slug), `${ruta.slug}: momento repetido`);
      seen.add(momento.slug);
      assert.ok(momento.title.length > 0, `${ruta.slug}/${momento.slug}: sin título`);
    }
  }
});

/* ------------------------------------------------------------------------ *
 * La migración de las nueve rutas originales
 * ------------------------------------------------------------------------ */

test("las nueve rutas originales conservan slug, título y orden", () => {
  const originales = Object.keys(CENSO_MIGRADO);
  const presentes = rutas.map((ruta) => ruta.slug);
  for (const slug of originales) {
    assert.ok(presentes.includes(slug), `desapareció la ruta «${slug}»`);
  }
  // El orden de publicación de las nueve primeras no cambió: /rutas las numera
  // por posición y la home reutiliza ese número.
  assert.deepEqual(presentes.slice(0, 9), originales);
});

test("las nueve rutas originales conservan exactamente sus mitos", () => {
  for (const [slug, esperados] of Object.entries(CENSO_MIGRADO)) {
    const ruta = rutas.find((item) => item.slug === slug);
    assert.ok(ruta, `falta la ruta «${slug}»`);
    assert.deepEqual(
      [...ruta.mythSlugs],
      esperados,
      `la ruta «${slug}» cambió de mitos`
    );
  }
});

test("las nueve rutas originales destacan tres mitos y abren por el primero", () => {
  for (const slug of Object.keys(CENSO_MIGRADO)) {
    const ruta = rutas.find((item) => item.slug === slug);
    assert.equal(
      ruta.curated.heroSlugs.length,
      3,
      `${slug}: se esperaban tres mitos destacados`
    );
    assert.equal(ruta.cover, ruta.mythSlugs[0], `${slug}: la portada se movió`);
  }
});

/* ------------------------------------------------------------------------ *
 * Compatibilidad con las páginas que ya existen
 * ------------------------------------------------------------------------ */

test("la vista heredada `curated` sigue completa y cuadra con el censo", () => {
  for (const ruta of rutas) {
    const { curated } = ruta;
    assert.equal(
      curated.heroSlugs.length + curated.gallerySlugs.length,
      ruta.mythSlugs.length
    );
    assert.equal(curated.heroTitles.length, curated.heroSlugs.length);
    assert.equal(curated.galleryTitles.length, curated.gallerySlugs.length);
    assert.equal(curated.coverSlug, ruta.cover);
    assert.ok(curated.coverTitle.length > 0, `${ruta.slug}: portada sin nombre`);
  }
});

test("`highlights` sale de los momentos, para «El itinerario»", () => {
  for (const ruta of rutas) {
    assert.equal(ruta.highlights.length, ruta.momentos.length);
    ruta.highlights.forEach((highlight, index) => {
      assert.equal(highlight.title, ruta.momentos[index].title);
      assert.equal(highlight.description, ruta.momentos[index].summary);
    });
  }
});

test("las etiquetas de curaduría son inequívocas en todo el censo", () => {
  const { ambiguous, index } = buildLabelIndex(rutas);
  assert.deepEqual(
    [...ambiguous],
    [],
    "una etiqueta nombra a dos mitos distintos; hay que desempatarla"
  );
  // Toda etiqueta declarada tiene que poder traducirse a su slug: es lo que
  // permite que las páginas heredadas dejen de adivinar.
  for (const ruta of rutas) {
    for (const myth of ruta.myths) {
      if (!myth.label) continue;
      const key = myth.label
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, " ")
        .trim();
      assert.equal(index.get(key), myth.slug, `etiqueta suelta: «${myth.label}»`);
    }
  }
});

/* ------------------------------------------------------------------------ *
 * Normalización
 * ------------------------------------------------------------------------ */

test("la prosa admite string o array y siempre sale como párrafos", () => {
  assert.deepEqual(toParagraphs("uno\n\ndos"), ["uno", "dos"]);
  assert.deepEqual(toParagraphs(["uno", "  ", "dos"]), ["uno", "dos"]);
  assert.deepEqual(toParagraphs(""), []);
  assert.deepEqual(toParagraphs(null), []);

  const ruta = normalizeRuta({
    slug: "prueba",
    title: "Prueba",
    myths: ["uno"],
    intro: ["Primero.", "Segundo."],
  });
  assert.deepEqual([...ruta.introParagraphs], ["Primero.", "Segundo."]);
  assert.equal(ruta.intro, "Primero.\n\nSegundo.");
});

test("la normalización descarta duplicados y referencias inventadas", () => {
  const ruta = normalizeRuta({
    slug: "prueba",
    title: "Prueba",
    accent: "inventado",
    cover: "no-existe",
    myths: [
      { slug: "uno", label: "Uno" },
      { slug: "uno", label: "Uno otra vez" },
      "dos",
    ],
    momentos: [
      { slug: "etapa", title: "Etapa", myths: ["dos", "fantasma"] },
    ],
  });

  assert.deepEqual([...ruta.mythSlugs], ["uno", "dos"]);
  assert.equal(ruta.accent, "river", "un acento desconocido cae al de por defecto");
  assert.equal(ruta.cover, "uno", "una portada ajena al censo cae al primer mito");
  assert.deepEqual([...ruta.momentos[0].myths], ["dos"]);
  assert.deepEqual([...ruta.looseMythSlugs], ["uno"]);
});

test("una ruta con momentos inventados no pasa la validación", () => {
  const problems = validateRutas([
    normalizeRuta({ slug: "Mala Ruta", title: "", myths: [] }),
  ]);
  assert.ok(problems.length >= 3, `se esperaban varios problemas: ${problems}`);
  assert.ok(problems.some((item) => item.includes("slug de la ruta no es válido")));
  assert.ok(problems.some((item) => item.includes("no declara ningún mito")));
});

/* ------------------------------------------------------------------------ *
 * El modelo viejo no puede volver
 * ------------------------------------------------------------------------ */

test("src/lib/routes.js ya no lleva el censo dentro ni resuelve por título", async () => {
  const source = await read("src/lib/routes.js");

  assert.match(
    source,
    /from "\.\.\/\.\.\/content\/rutas\/index\.mjs"/,
    "las rutas tienen que venir de content/rutas"
  );
  assert.doesNotMatch(
    source,
    /heroTitles: \[/,
    "el censo volvió a estar escrito dentro de la librería"
  );
  // La búsqueda difusa sigue existiendo como último recurso, pero ya no puede
  // ser el camino por defecto: primero hay que traducir etiqueta -> slug.
  assert.match(source, /export function resolveRouteMythSlug/);
  assert.match(source, /export async function getRouteWithMyths/);
  assert.match(source, /export async function getRoutesWithMyths/);
});

test("el resolutor pide los mitos de todas las rutas en una sola consulta", async () => {
  const source = await read("src/lib/routes.js");
  const resolver = source.slice(
    source.indexOf("export async function getRoutesWithMyths"),
    source.indexOf("export async function getRouteWithMyths")
  );
  assert.ok(resolver.length > 0);
  assert.equal(
    (resolver.match(/await getMythsBySlugs\(/g) || []).length,
    1,
    "el resolutor no puede consultar una vez por ruta"
  );
  assert.doesNotMatch(resolver, /Promise\.all/, "no hay que abanicar consultas");
});

test("cada ruta declarada tiene su archivo y está en el índice", async () => {
  const index = await read("content/rutas/index.mjs");
  for (const ruta of rutas) {
    assert.match(
      index,
      new RegExp(`\\./${ruta.slug}\\.mjs`),
      `«${ruta.slug}» no está importada en content/rutas/index.mjs`
    );
    const file = await read(`content/rutas/${ruta.slug}.mjs`);
    assert.match(file, new RegExp(`slug: "${ruta.slug}"`));
  }
});
