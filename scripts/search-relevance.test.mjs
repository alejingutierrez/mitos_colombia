import assert from "node:assert/strict";
import test from "node:test";

import {
  ACCENT_FOLD_FROM,
  ACCENT_FOLD_TO,
  MAX_SCORE_TERMS,
  SEARCH_SYNONYMS,
  SEARCH_WEIGHTS,
  buildSearchTerms,
  escapeLikePattern,
  foldedSql,
  likeContains,
  normalizeSearchText,
  pluralVariants,
  scoreSearchRow,
  tokenizeSearchText,
} from "../src/lib/search-terms.js";

/**
 * La relevancia de la búsqueda.
 *
 * Hasta ahora la página de resultados (`/mitos?q=…`) no tenía ninguna: un
 * `ILIKE '%q%'` sobre nueve columnas y `ORDER BY title ASC`. Medido contra la
 * base de producción, "llorona" devolvía siete relatos con "La llorona" en
 * QUINTO lugar y "bachue" sin tilde devolvía CERO.
 *
 * Estas pruebas cubren la pieza pura que ahora comparten los dos caminos de
 * búsqueda —el typeahead de `lib/search.js` y el SQL de `lib/myths.js`—, que es
 * donde viven las decisiones: qué se pliega, qué cuenta como plural, qué pesa
 * más y qué se escapa antes de llegar a la base.
 *
 * Lo que NO cubren: el SQL generado. `lib/myths.js` importa `server-only` y
 * `next/cache`, así que no se puede cargar desde `node --test`. La equivalencia
 * entre el orden en SQL y el orden en JavaScript la garantiza que los dos leen
 * `SEARCH_WEIGHTS` de aquí, no una prueba.
 */

/* ------------------------------------------------------------------ *
 * 1. Tildes y ñ — "bachue" tiene que encontrar "Bachué"
 * ------------------------------------------------------------------ */

test("las tildes se pliegan en los dos sentidos", () => {
  assert.equal(normalizeSearchText("Bachué"), "bachue");
  assert.equal(normalizeSearchText("bachue"), "bachue");
  assert.equal(normalizeSearchText("BACHUÉ"), "bachue");
  assert.equal(normalizeSearchText("Wayúu"), "wayuu");
  assert.equal(normalizeSearchText("Emberá"), "embera");
  assert.equal(normalizeSearchText("Pacífico"), "pacifico");
  assert.equal(normalizeSearchText("Héntserá"), "hentsera");
});

test("la ñ se pliega a n, y la Ñ también", () => {
  assert.equal(normalizeSearchText("niña"), "nina");
  assert.equal(normalizeSearchText("NIÑA"), "nina");
  assert.equal(normalizeSearchText("Ñandóu"), "nandou");
  // El caso que importa: la consulta sin ñ y el dato con ñ caen en lo mismo.
  assert.equal(normalizeSearchText("nina"), normalizeSearchText("niña"));
});

test("la diéresis y la ç también, y lo que no es letra se vuelve espacio", () => {
  assert.equal(normalizeSearchText("pingüino"), "pinguino");
  assert.equal(normalizeSearchText("façade"), "facade");
  assert.equal(normalizeSearchText("U’wa"), "u wa");
  assert.equal(normalizeSearchText("  El   Dorado  "), "el dorado");
  assert.equal(normalizeSearchText(""), "");
  assert.equal(normalizeSearchText(null), "");
  assert.equal(normalizeSearchText(undefined), "");
});

test("el mapa que genera el SQL está pareado carácter a carácter", () => {
  // `translate()` de Postgres exige que las dos cadenas midan lo mismo; si se
  // agrega una tilde y se olvida su pareja, el plegado se corre y deja de
  // funcionar EN SILENCIO.
  assert.equal([...ACCENT_FOLD_FROM].length, [...ACCENT_FOLD_TO].length);
  assert.ok([...ACCENT_FOLD_FROM].length >= 40);
  assert.equal(new Set([...ACCENT_FOLD_FROM]).size, [...ACCENT_FOLD_FROM].length);
  assert.ok(/^[a-z]+$/.test(ACCENT_FOLD_TO));
});

test("el plegado en SQL sale en los dos dialectos y no inventa comillas", () => {
  const pg = foldedSql("myths.title");
  assert.match(pg, /^translate\(lower\(myths\.title\), '/);
  assert.equal(pg.includes("ñ"), true);

  const lite = foldedSql("myths.title", "sqlite");
  assert.match(lite, /^replace\(/);
  assert.ok(lite.includes("lower(myths.title)"));
  // Una comilla suelta en el mapa rompería el SQL: los pares tienen que ser
  // siempre 'x','y' y nada más.
  assert.equal((lite.match(/'/g) || []).length % 2, 0);
});

/* ------------------------------------------------------------------ *
 * 2. Plurales — "muisca" y "muiscas" son la misma consulta
 * ------------------------------------------------------------------ */

test("singular y plural se alcanzan en los dos sentidos", () => {
  assert.ok(pluralVariants("muiscas").includes("muisca"));
  assert.ok(pluralVariants("muisca").includes("muiscas"));
  assert.ok(pluralVariants("serpientes").includes("serpiente"));
  assert.ok(pluralVariants("mujer").includes("mujeres"));
});

test("el plural en -ces cae en su singular en -z", () => {
  assert.ok(pluralVariants("luces").includes("luz"));
  assert.ok(pluralVariants("voces").includes("voz"));
});

test("las palabras cortas no se despluralizan: 'los' no es 'lo'", () => {
  assert.deepEqual(pluralVariants("los"), ["los"]);
  assert.deepEqual(pluralVariants("mas"), ["mas"]);
  assert.deepEqual(pluralVariants("a"), ["a"]);
  assert.deepEqual(pluralVariants(""), []);
});

test("una consulta en plural encuentra el mito en singular", () => {
  const terms = buildSearchTerms("muiscas");
  const enSingular = { title: "la creacion muisca", meta: "", place: "andina muiscas" };
  assert.ok(scoreSearchRow(enSingular, terms) > 0);

  const alReves = buildSearchTerms("muisca");
  const enPlural = { title: "los muiscas", meta: "", place: "" };
  assert.ok(scoreSearchRow(enPlural, alReves) > 0);
});

/* ------------------------------------------------------------------ *
 * 3. La jerarquía: el título gana al cuerpo
 * ------------------------------------------------------------------ */

test("el título le gana al cuerpo del relato", () => {
  const terms = buildSearchTerms("llorona");
  // El caso real: "La llorona" salía QUINTA, detrás de cuatro relatos que sólo
  // la mencionaban de pasada, porque el orden era alfabético.
  const porTitulo = scoreSearchRow(
    { title: "la llorona", meta: "", place: "", hasBody: false },
    terms
  );
  const porCuerpo = scoreSearchRow(
    { title: "el hada de los canaverales", meta: "", place: "", hasBody: true },
    terms
  );
  assert.ok(porTitulo > porCuerpo);
  assert.ok(porTitulo > porCuerpo * 10, "el cuerpo tiene que ser un empujón, no un rival");
});

test("el orden completo es título > metadatos > territorio y pueblo > cuerpo", () => {
  const terms = buildSearchTerms("agua");
  const vacio = { title: "x", meta: "", place: "", hasBody: false };
  const titulo = scoreSearchRow({ ...vacio, title: "la madre agua" }, terms);
  const meta = scoreSearchRow({ ...vacio, meta: "un relato de agua" }, terms);
  const lugar = scoreSearchRow({ ...vacio, place: "agua de dios" }, terms);
  const cuerpo = scoreSearchRow({ ...vacio, hasBody: true }, terms);
  assert.ok(titulo > meta, `título ${titulo} debería ganar a metadatos ${meta}`);
  assert.ok(meta > lugar, `metadatos ${meta} debería ganar a lugar ${lugar}`);
  assert.ok(lugar > cuerpo, `lugar ${lugar} debería ganar a cuerpo ${cuerpo}`);
  assert.ok(cuerpo > 0, "un acierto sólo en el cuerpo tiene que seguir contando");
});

test("el pueblo y el territorio cuentan aunque el título no diga nada", () => {
  const terms = buildSearchTerms("muisca");
  const soloPorPueblo = scoreSearchRow(
    { title: "el dorado", meta: "", place: "andina muiscas" },
    terms
  );
  assert.ok(soloPorPueblo > 0);
});

test("la frase exacta le gana a los términos dispersos", () => {
  const terms = buildSearchTerms("la llorona");
  const frase = scoreSearchRow({ title: "la llorona", meta: "", place: "" }, terms);
  const dispersos = scoreSearchRow(
    { title: "la vieja, la viuda y el anima", meta: "cuenta la llorona? no: llorona aparte", place: "" },
    terms
  );
  assert.ok(frase > dispersos);
});

test("el acierto al principio de palabra gana al que cae dentro de otra", () => {
  // "Yagua" contiene "agua" pero no habla de agua: salía primero por subcadena.
  const terms = buildSearchTerms("agua");
  const enPalabra = scoreSearchRow({ title: "la madre agua", meta: "", place: "" }, terms);
  const dentroDeOtra = scoreSearchRow({ title: "yagua", meta: "", place: "" }, terms);
  assert.ok(enPalabra > dentroDeOtra);
});

test("el título idéntico corona", () => {
  const terms = buildSearchTerms("bachue");
  const exacto = scoreSearchRow({ title: "bachue", meta: "", place: "" }, terms);
  const contiene = scoreSearchRow({ title: "la madre bachue de todos", meta: "", place: "" }, terms);
  assert.ok(exacto > contiene);
  assert.ok(exacto >= SEARCH_WEIGHTS.titleExact);
});

/* ------------------------------------------------------------------ *
 * 4. Sinónimos — reordenan, no amplían
 * ------------------------------------------------------------------ */

test("un sinónimo suma, pero menos que la palabra escrita", () => {
  const terms = buildSearchTerms("agua");
  assert.ok(SEARCH_SYNONYMS.agua.includes("laguna"));
  const conSinonimo = scoreSearchRow({ title: "la laguna encantada", meta: "", place: "" }, terms);
  const conLaPalabra = scoreSearchRow({ title: "la madre agua", meta: "", place: "" }, terms);
  assert.ok(conSinonimo > 0, "el sinónimo tiene que contar para el orden");
  assert.ok(conLaPalabra > conSinonimo, "pero nunca por encima de la palabra escrita");
});

test("los sinónimos NO entran al filtro, sólo a la puntuación", () => {
  // Si entraran, "agua" —que ya devuelve 416 de 596 relatos— arrastraría además
  // todo lo que diga "río" o "laguna" y la búsqueda sería el archivo entero.
  const { groups, scoreTerms } = buildSearchTerms("agua");
  const enElFiltro = groups.flatMap((g) => g.variants);
  assert.equal(enElFiltro.includes("laguna"), false);
  assert.equal(enElFiltro.includes("rio"), false);
  assert.ok(scoreTerms.some((t) => t.term === "laguna"));
});

test("el filtro exige todos los tokens, y cada uno acepta sus variantes", () => {
  const { groups } = buildSearchTerms("mujeres serpiente");
  assert.equal(groups.length, 2);
  assert.ok(groups[0].variants.includes("mujer"));
  assert.ok(groups[1].variants.includes("serpientes"));
});

/* ------------------------------------------------------------------ *
 * 5. Consulta vacía
 * ------------------------------------------------------------------ */

test("la consulta vacía no busca nada y no puntúa nada", () => {
  for (const vacia of ["", "   ", null, undefined]) {
    const terms = buildSearchTerms(vacia);
    assert.equal(terms.phrase, "");
    assert.deepEqual(terms.tokens, []);
    assert.deepEqual(terms.groups, []);
    assert.deepEqual(terms.scoreTerms, []);
    assert.equal(scoreSearchRow({ title: "la llorona", meta: "", place: "" }, terms), 0);
  }
  assert.equal(buildSearchTerms("").isEmpty, true);
});

test("una consulta de pura puntuación se queda sin frase y no ordena", () => {
  const terms = buildSearchTerms("··· !!! ???");
  assert.equal(terms.phrase, "");
  // `raw` sobrevive: la rama de paridad con el ILIKE de hoy todavía la usa.
  assert.equal(terms.raw, "··· !!! ???");
  assert.equal(scoreSearchRow({ title: "x", meta: "", place: "" }, terms), 0);
});

test("el número de términos que llegan al SQL está acotado", () => {
  const larga = buildSearchTerms(
    "agua rio mar selva bosque jungla espiritu fantasma monstruo bestia criatura costa"
  );
  assert.ok(larga.tokens.length <= 8);
  assert.ok(larga.scoreTerms.length <= MAX_SCORE_TERMS);
});

/* ------------------------------------------------------------------ *
 * 6. Metacaracteres de SQL
 * ------------------------------------------------------------------ */

test("los comodines de LIKE se escapan: '%' deja de barrer el archivo", () => {
  // Antes, `%${q}%` sin escapar convertía una consulta de un solo '%' en
  // "devuélvemelo todo", y '_' en "cualquier carácter".
  assert.equal(escapeLikePattern("100%"), "100\\%");
  assert.equal(escapeLikePattern("wayuu_"), "wayuu\\_");
  assert.equal(escapeLikePattern("a\\b"), "a\\\\b");
  assert.equal(likeContains("100%"), "%100\\%%");
});

test("una consulta con comillas y punto y coma no deja SQL suelto", () => {
  const inyeccion = "'; DROP TABLE myths; --";
  const terms = buildSearchTerms(inyeccion);
  // Normalizada, es texto inofensivo: la puntuación se volvió espacio.
  assert.equal(terms.phrase, "drop table myths");
  assert.equal(terms.phrase.includes("'"), false);
  assert.equal(terms.phrase.includes(";"), false);
  // Y todo lo que va a la base viaja como parámetro, nunca interpolado.
  terms.groups
    .flatMap((g) => g.variants)
    .forEach((variant) => assert.equal(/['";\\]/.test(variant), false));
});

test("los comodines dentro de la consulta no se cuelan al patrón normalizado", () => {
  const terms = buildSearchTerms("%muisca%");
  assert.equal(terms.phrase, "muisca");
  assert.equal(likeContains(terms.raw), "%\\%muisca\\%%");
});

/* ------------------------------------------------------------------ *
 * 7. Bordes de la normalización
 * ------------------------------------------------------------------ */

test("tokenizar respeta lo que normaliza", () => {
  assert.deepEqual(tokenizeSearchText("El Salto del Tequendama"), [
    "el",
    "salto",
    "del",
    "tequendama",
  ]);
  assert.deepEqual(tokenizeSearchText("   "), []);
  assert.deepEqual(tokenizeSearchText("¡¿?!"), []);
});

test("los números sobreviven a la normalización", () => {
  assert.equal(normalizeSearchText("Mito 1492"), "mito 1492");
});

test("puntuar es determinista y no depende del orden de los términos", () => {
  const fila = { title: "la madre agua", meta: "laguna", place: "andina" };
  const a = scoreSearchRow(fila, buildSearchTerms("agua"));
  const b = scoreSearchRow(fila, buildSearchTerms("AGUA"));
  const c = scoreSearchRow(fila, buildSearchTerms("  agua  "));
  assert.equal(a, b);
  assert.equal(a, c);
});
