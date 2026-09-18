import assert from "node:assert/strict";
import test from "node:test";

import {
  filterAllowedCommunities,
  MIN_COMMUNITY_MYTHS,
} from "../src/lib/communityFilters.js";

test("conserva la landing Emberá revisada aunque el corpus genérico quede pequeño", () => {
  const allowed = filterAllowedCommunities([
    { name: "Embera", slug: "embera", myth_count: 1 },
    { name: "Vacía", slug: "vacia", myth_count: 0 },
    { name: "Pequeña", slug: "pequena", myth_count: MIN_COMMUNITY_MYTHS - 1 },
    { name: "Amplia", slug: "amplia", myth_count: MIN_COMMUNITY_MYTHS },
  ]);

  assert.deepEqual(
    allowed.map(({ slug }) => slug),
    ["embera", "amplia"],
  );
});

/**
 * Las landings revisadas sobreviven al listón, y la bolsa del importador no.
 *
 * Estas pruebas nacieron en rojo y nunca pasaron. Afirmaban que una fila
 * `sin-revisar` quedaba fuera del índice, pero ningún código lo ha hecho nunca
 * —el filtro sólo aparta las bolsas `mestizo`/`mixto`— y en `communities` no
 * existe ninguna fila así: el fixture era ficticio. Además comparaban el objeto
 * entero con `deepEqual`, así que cualquier campo nuevo las rompía, y así se
 * rompieron cuando el plegado por slug empezó a devolver `image_url` y
 * `territories`.
 *
 * Lo que sí tenían de valioso se conserva y ahora se comprueba de verdad: que
 * un pueblo revisado con MENOS DE SEIS relatos conserva su página. Ése era el
 * viejo listón, y bajarlo a uno fue una decisión deliberada —un pueblo con tres
 * relatos sigue siendo un pueblo—; si alguien lo vuelve a subir, estas diez
 * pruebas se caen y dicen por qué.
 *
 * La bolsa ficticia se sustituye por una real (`mestizo`), que es la que el
 * filtro sí aparta, y se afirma sobre slug y recuento en vez de sobre la forma
 * completa del objeto.
 */
const LANDINGS_REVISADAS = [
  { slug: "wounaan", name: "Wounaan", mythCount: 5, expedientes: "cinco expedientes" },
  { slug: "eperara-siapidara", name: "Eperara Siapidara", mythCount: 2, expedientes: "dos expedientes" },
  { slug: "awa", name: "Awa", mythCount: 2, expedientes: "dos expedientes" },
  { slug: "ansermas", name: "Ansermas", mythCount: 2, expedientes: "dos expedientes" },
  { slug: "cuycuyes", name: "Cuycuyes", mythCount: 2, expedientes: "dos expedientes" },
  { slug: "pirsa", name: "Pirsa", mythCount: 1, expedientes: "su único expediente" },
  { slug: "quimbaya", name: "Quimbaya", mythCount: 3, expedientes: "tres expedientes" },
  { slug: "umbra", name: "Umbra", mythCount: 2, expedientes: "dos expedientes" },
  { slug: "yucuna", name: "Yucuna", mythCount: 3, expedientes: "tres expedientes" },
  { slug: "yukpa", name: "Yukpa", mythCount: 5, expedientes: "cinco expedientes" },
];

LANDINGS_REVISADAS.forEach(({ slug, name, mythCount, expedientes }) => {
  test(`conserva la landing ${name} revisada con ${expedientes}`, () => {
    const allowed = filterAllowedCommunities([
      { slug, name, myth_count: mythCount },
      { slug: "mestizo", name: "Mestizo", myth_count: mythCount },
    ]);

    assert.equal(allowed.length, 1, "la bolsa del importador no tiene página");
    assert.equal(allowed[0].slug, slug);
    assert.equal(allowed[0].name, name);
    assert.equal(allowed[0].myth_count, mythCount);
    assert.ok(
      mythCount < 6,
      "el caso pierde sentido si el recuento llega al viejo listón de seis",
    );
  });
});

test("la excepción Emberá no permite una fila duplicada sin mitos", () => {
  const allowed = filterAllowedCommunities([
    { name: "Embera", slug: "embera", myth_count: 0 },
  ]);
  assert.deepEqual(allowed, []);
});
