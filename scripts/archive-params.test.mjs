import assert from "node:assert/strict";
import test from "node:test";

import {
  ARCHIVE_DEFAULT_LIMIT,
  ARCHIVE_MAX_LIMIT,
  ARCHIVE_MAX_PAGE,
  ARCHIVE_MIN_LIMIT,
  archiveFolio,
  archivePageHref,
  archiveQueryWith,
  archiveQueryWithout,
  archiveRange,
  buildArchiveQuery,
  pageFromOffset,
  paramValue,
  parseArchiveLimit,
  parseArchivePage,
  readArchiveParams,
  totalArchivePages,
} from "../src/lib/archive-params.js";

/**
 * Las tres averías que se arreglaron acá tenían la misma forma: dos partes de
 * la página interpretando la misma URL de dos maneras distintas. Estas pruebas
 * fijan la interpretación única.
 */

test("paramValue tolera arreglos, nulos y espacios", () => {
  assert.equal(paramValue(["andina", "caribe"]), "andina");
  assert.equal(paramValue(null), "");
  assert.equal(paramValue(undefined), "");
  assert.equal(paramValue("  agua  "), "agua");
  assert.equal(paramValue([]), "");
});

test("el límite siempre es un número utilizable", () => {
  assert.equal(parseArchiveLimit(undefined), ARCHIVE_DEFAULT_LIMIT);
  assert.equal(parseArchiveLimit(""), ARCHIVE_DEFAULT_LIMIT);
  // Antes `?limit=abc` daba NaN y arrastraba el offset y el total de páginas.
  assert.equal(parseArchiveLimit("abc"), ARCHIVE_DEFAULT_LIMIT);
  assert.equal(parseArchiveLimit("12"), 12);
  assert.equal(parseArchiveLimit("1"), ARCHIVE_MIN_LIMIT);
  assert.equal(parseArchiveLimit("-30"), ARCHIVE_MIN_LIMIT);
  assert.equal(parseArchiveLimit("5000"), ARCHIVE_MAX_LIMIT);
});

test("el segmento de página sólo acepta enteros dentro de rango", () => {
  assert.equal(parseArchivePage("2"), 2);
  assert.equal(parseArchivePage("007"), 7);
  assert.equal(parseArchivePage("0"), null);
  assert.equal(parseArchivePage("-3"), null);
  assert.equal(parseArchivePage("1.5"), null);
  assert.equal(parseArchivePage("abc"), null);
  assert.equal(parseArchivePage(""), null);
  assert.equal(parseArchivePage(String(ARCHIVE_MAX_PAGE + 1)), null);
});

test("?offset= de enlaces antiguos se traduce a página", () => {
  assert.equal(pageFromOffset(undefined, 24), 1);
  assert.equal(pageFromOffset("0", 24), 1);
  assert.equal(pageFromOffset("23", 24), 1);
  assert.equal(pageFromOffset("24", 24), 2);
  assert.equal(pageFromOffset("48", 24), 3);
  assert.equal(pageFromOffset("50", 24), 3);
  assert.equal(pageFromOffset("abc", 24), 1);
});

test("la query conserva búsqueda y filtros a la vez", () => {
  // El defecto original: dos formularios, cada uno enviando sólo sus campos.
  const query = buildArchiveQuery({
    q: "agua",
    region: "andina",
    community: "muiscas",
    tag: "transformación",
  });
  assert.match(query, /^\?/);
  const params = new URLSearchParams(query.slice(1));
  assert.equal(params.get("q"), "agua");
  assert.equal(params.get("region"), "andina");
  assert.equal(params.get("community"), "muiscas");
  assert.equal(params.get("tag"), "transformación");
});

test("la query omite lo vacío y el límite por defecto", () => {
  assert.equal(buildArchiveQuery({}), "");
  assert.equal(buildArchiveQuery({ q: "", region: "" }), "");
  assert.equal(
    buildArchiveQuery({ limit: ARCHIVE_DEFAULT_LIMIT }),
    "",
    "el límite por defecto no debe ensuciar la URL canónica"
  );
  assert.equal(buildArchiveQuery({ limit: 12 }), "?limit=12");
  assert.equal(buildArchiveQuery({ limit: 9999 }), `?limit=${ARCHIVE_MAX_LIMIT}`);
});

test("quitar un filtro deja intactos los demás", () => {
  const values = { q: "agua", region: "andina", tag: "muerte" };
  const withoutRegion = new URLSearchParams(
    archiveQueryWithout(values, "region").slice(1)
  );
  assert.equal(withoutRegion.get("region"), null);
  assert.equal(withoutRegion.get("q"), "agua");
  assert.equal(withoutRegion.get("tag"), "muerte");

  const swapped = new URLSearchParams(
    archiveQueryWith(values, "region", "caribe").slice(1)
  );
  assert.equal(swapped.get("region"), "caribe");
  assert.equal(swapped.get("q"), "agua");
});

test("la paginación arrastra los filtros en ambos sentidos", () => {
  const params = readArchiveParams(
    { q: "agua", region: "andina", limit: "12" },
    3
  );
  const query = buildArchiveQuery(params);

  assert.equal(archivePageHref(1, query), `/mitos${query}`);
  assert.equal(archivePageHref(4, query), `/mitos/pagina/4${query}`);
  // Ida y vuelta: la página siguiente y la anterior conservan todo.
  for (const href of [archivePageHref(2, query), archivePageHref(4, query)]) {
    const carried = new URLSearchParams(href.split("?")[1]);
    assert.equal(carried.get("q"), "agua");
    assert.equal(carried.get("region"), "andina");
    assert.equal(
      carried.get("limit"),
      "12",
      "sin el límite, la página siguiente muestra otro tramo del archivo"
    );
  }
});

test("ruta y contenido calculan el mismo total de páginas", () => {
  assert.equal(totalArchivePages(596, 24), 25);
  assert.equal(totalArchivePages(596, 12), 50);
  assert.equal(totalArchivePages(24, 24), 1);
  assert.equal(totalArchivePages(0, 24), 1);
  assert.equal(totalArchivePages(Number.NaN, 24), 1);
  assert.equal(totalArchivePages(596, Number.NaN), 25);
});

test("readArchiveParams alinea página, límite y desplazamiento", () => {
  const first = readArchiveParams({}, 1);
  assert.equal(first.page, 1);
  assert.equal(first.limit, ARCHIVE_DEFAULT_LIMIT);
  assert.equal(first.offset, 0);
  assert.equal(first.hasAnyFilter, false);

  const third = readArchiveParams({ limit: "12" }, 3);
  assert.equal(third.limit, 12);
  assert.equal(third.offset, 24);

  const legacy = readArchiveParams({ offset: "48" }, 1);
  assert.equal(legacy.page, 3);
  assert.equal(legacy.offset, 48);

  // El offset sólo manda cuando la ruta no trae página propia.
  const routeWins = readArchiveParams({ offset: "48" }, 5);
  assert.equal(routeWins.page, 5);
  assert.equal(routeWins.offset, 96);

  const filtered = readArchiveParams({ region: "andina" }, 1);
  assert.equal(filtered.hasFilters, true);
  assert.equal(filtered.hasQuery, false);
  assert.equal(filtered.hasAnyFilter, true);

  const searched = readArchiveParams({ q: "agua" }, 1);
  assert.equal(searched.hasFilters, false);
  assert.equal(searched.hasQuery, true);
  assert.equal(searched.hasAnyFilter, true);
});

test("el folio es la posición real y no se reinicia por página", () => {
  // Página 1: 1…24. Página 2: 25…48. Antes empezaba en 01 en cada página, y
  // encima corrido cuatro puestos por las tarjetas destacadas.
  assert.equal(archiveFolio(0, 0), 1);
  assert.equal(archiveFolio(0, 23), 24);
  assert.equal(archiveFolio(24, 0), 25);
  assert.equal(archiveFolio(24, 23), 48);
  assert.equal(archiveFolio(576, 19), 596);
  assert.equal(archiveFolio(Number.NaN, 0), 1);
});

test("el rango mostrado corresponde a la página", () => {
  assert.deepEqual(archiveRange({ offset: 24, count: 24, total: 596 }), {
    from: 25,
    to: 48,
    total: 596,
  });
  assert.deepEqual(archiveRange({ offset: 576, count: 20, total: 596 }), {
    from: 577,
    to: 596,
    total: 596,
  });
  assert.deepEqual(archiveRange({ offset: 0, count: 0, total: 0 }), {
    from: 0,
    to: 0,
    total: 0,
  });
});
