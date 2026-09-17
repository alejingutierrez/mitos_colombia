import assert from "node:assert/strict";
import test from "node:test";

import {
  BOGOTA_UTC_OFFSET_MINUTES,
  assignThemeChips,
  balancedPick,
  bogotaDayKey,
  bogotaDayNumber,
  buildMesaFilters,
  dailySeed,
  hashString,
  isImporterBucket,
  msUntilNextBogotaMidnight,
  mythMeta,
  mythReason,
  nextBogotaMidnight,
  partitionSections,
  pickSeeded,
  sectionSeed,
  shuffleSeeded,
  toMesaCard,
} from "../src/lib/home-rotation.js";

/**
 * El motor de rotación del home.
 *
 * Estas pruebas cubren las cuatro cosas que se rompieron en producción: el
 * reloj (la mesa cambiaba a las 7 de la tarde), el determinismo (dos visitas del
 * mismo día tenían que ver lo mismo), el tamaño del espacio de estados (había 23
 * portadas posibles) y el equilibrio (un territorio se comía la selección).
 */

/* ------------------------------------------------------------------ *
 * 1. El reloj: medianoche de Bogotá, no de UTC
 * ------------------------------------------------------------------ */

test("el día salta a la medianoche de Bogotá, no a la de UTC", () => {
  // 04:59:59Z = 23:59:59 del día anterior en Bogotá.
  const antes = new Date("2026-09-02T04:59:59.000Z");
  // 05:00:00Z = 00:00:00 en Bogotá.
  const despues = new Date("2026-09-02T05:00:00.000Z");

  assert.equal(bogotaDayKey(antes), "2026-09-01");
  assert.equal(bogotaDayKey(despues), "2026-09-02");
  assert.equal(bogotaDayNumber(despues) - bogotaDayNumber(antes), 1);
  assert.notEqual(dailySeed(antes), dailySeed(despues));
});

test("las 7 de la tarde de Bogotá NO cambian la mesa (el bug de las 19:00)", () => {
  /* El motor viejo calculaba el día del año con `new Date()` sobre un servidor en
     UTC, así que saltaba a las 00:00 UTC = 19:00 en Bogotá, mientras la página
     prometía medianoche. Estos tres instantes son el MISMO día colombiano. */
  const tarde = new Date("2026-09-01T23:59:00.000Z"); // 18:59 en Bogotá
  const medianocheUtc = new Date("2026-09-02T00:00:00.000Z"); // 19:00 en Bogotá
  const madrugadaUtc = new Date("2026-09-02T04:00:00.000Z"); // 23:00 en Bogotá

  assert.equal(bogotaDayKey(tarde), "2026-09-01");
  assert.equal(bogotaDayKey(medianocheUtc), "2026-09-01");
  assert.equal(bogotaDayKey(madrugadaUtc), "2026-09-01");

  const semilla = dailySeed(tarde);
  assert.equal(dailySeed(medianocheUtc), semilla);
  assert.equal(dailySeed(madrugadaUtc), semilla);
});

test("el desfase de Colombia es fijo −05:00 (no hay horario de verano)", () => {
  assert.equal(BOGOTA_UTC_OFFSET_MINUTES, -300);
  // Enero y julio: si hubiera horario de verano, uno de los dos se correría.
  assert.equal(bogotaDayKey(new Date("2026-01-15T05:00:00.000Z")), "2026-01-15");
  assert.equal(bogotaDayKey(new Date("2026-07-15T05:00:00.000Z")), "2026-07-15");
  assert.equal(bogotaDayKey(new Date("2026-01-15T04:59:59.000Z")), "2026-01-14");
  assert.equal(bogotaDayKey(new Date("2026-07-15T04:59:59.000Z")), "2026-07-14");
});

test("la próxima medianoche de Bogotá cae siempre a las 05:00Z", () => {
  const ahora = new Date("2026-09-02T13:20:00.000Z"); // 08:20 en Bogotá
  const proxima = nextBogotaMidnight(ahora);
  assert.equal(proxima.toISOString(), "2026-09-03T05:00:00.000Z");
  assert.equal(msUntilNextBogotaMidnight(ahora), proxima - ahora);
  assert.equal(bogotaDayKey(proxima), "2026-09-03");
  // Justo antes del salto sigue siendo el día anterior.
  assert.equal(bogotaDayKey(new Date(proxima.getTime() - 1)), "2026-09-02");
});

test("un año entero de días de Bogotá da 365 claves y 365 semillas distintas", () => {
  const claves = new Set();
  const semillas = new Set();
  for (let i = 0; i < 365; i += 1) {
    const instante = new Date(Date.UTC(2026, 0, 1, 12) + i * 86400000);
    claves.add(bogotaDayKey(instante));
    semillas.add(dailySeed(instante));
  }
  assert.equal(claves.size, 365);
  assert.equal(semillas.size, 365);
});

/* ------------------------------------------------------------------ *
 * 2. Determinismo
 * ------------------------------------------------------------------ */

test("el mismo día siempre elige lo mismo, sin importar la hora de la visita", () => {
  const corpus = Array.from({ length: 200 }, (_, i) => ({
    slug: `mito-${i}`,
    region_slug: ["andina", "caribe", "amazonas", "pacifico", "orinoquia"][i % 5],
  }));

  const manana = new Date("2026-09-02T13:00:00.000Z"); // 08:00 en Bogotá
  const noche = new Date("2026-09-03T03:30:00.000Z"); // 22:30 del MISMO día

  const reparto = (fecha) =>
    partitionSections({
      items: corpus,
      daySeed: dailySeed(fecha),
      keyOf: (m) => m.slug,
      groupBy: (m) => m.region_slug,
      sections: [
        { key: "portada", count: 5 },
        { key: "mesa", count: 10 },
      ],
    });

  assert.deepEqual(reparto(manana), reparto(noche));
});

test("hashString y sectionSeed son deterministas y devuelven enteros de 32 bits", () => {
  for (const texto of ["portada", "mesa", "", "ñandú · 42"]) {
    const a = hashString(texto);
    assert.equal(a, hashString(texto));
    assert.ok(Number.isInteger(a) && a >= 0 && a <= 0xffffffff);
  }
  const dia = dailySeed(new Date("2026-09-02T12:00:00.000Z"));
  assert.equal(sectionSeed(dia, "mesa"), sectionSeed(dia, "mesa"));
  assert.notEqual(sectionSeed(dia, "mesa"), sectionSeed(dia, "portada"));
});

test("barajar es puro: no toca la lista original", () => {
  const original = [1, 2, 3, 4, 5, 6, 7, 8];
  const copia = original.slice();
  const barajado = shuffleSeeded(original, 1234);
  assert.deepEqual(original, copia);
  assert.equal(barajado.length, original.length);
  assert.deepEqual([...barajado].sort((a, b) => a - b), copia);
});

/* ------------------------------------------------------------------ *
 * 3. Tamaño del espacio de estados
 * ------------------------------------------------------------------ */

test("la portada tiene miles de estados, no 23", () => {
  /* El motor viejo ordenaba con `(id + semilla) % 23`: sumar antes de un módulo
     pequeño no reordena, sólo ROTA, así que había EXACTAMENTE 23 portadas
     posibles y el ciclo se cerraba cada 23 días. Medido contra producción: 23
     portadas distintas en 400 semillas, y sólo 115 de los 596 mitos llegaban
     jamás a portada. */
  const corpus = Array.from({ length: 596 }, (_, i) => ({
    slug: `mito-${i}`,
    region_slug: ["andina", "caribe", "amazonas", "pacifico", "orinoquia", "varios"][i % 6],
  }));

  const DIAS = 4000;
  const portadas = new Set();
  const alcanzados = new Set();

  for (let i = 0; i < DIAS; i += 1) {
    const fecha = new Date(Date.UTC(2026, 0, 1, 12) + i * 86400000);
    const portada = partitionSections({
      items: corpus,
      daySeed: dailySeed(fecha),
      keyOf: (m) => m.slug,
      groupBy: (m) => m.region_slug,
      sections: [{ key: "portada", count: 5 }],
    }).portada;
    portadas.add(portada.map((m) => m.slug).join("|"));
    portada.forEach((m) => alcanzados.add(m.slug));
  }

  assert.ok(portadas.size > 23, `esperaba mucho más de 23 estados, hubo ${portadas.size}`);
  assert.ok(
    portadas.size >= DIAS * 0.99,
    `esperaba casi un estado por día, hubo ${portadas.size} en ${DIAS} días`
  );
  // Y la rotación recorre el archivo ENTERO, no una piscina fija.
  assert.equal(alcanzados.size, corpus.length);
});

test("dos días seguidos no comparten casi nada", () => {
  const corpus = Array.from({ length: 596 }, (_, i) => ({
    slug: `mito-${i}`,
    region_slug: ["andina", "caribe", "amazonas", "pacifico", "orinoquia", "varios"][i % 6],
  }));
  const mesa = (fecha) =>
    new Set(
      partitionSections({
        items: corpus,
        daySeed: dailySeed(fecha),
        keyOf: (m) => m.slug,
        groupBy: (m) => m.region_slug,
        sections: [{ key: "mesa", count: 10 }],
      }).mesa.map((m) => m.slug)
    );

  let solapeTotal = 0;
  for (let i = 0; i < 60; i += 1) {
    const hoy = mesa(new Date(Date.UTC(2026, 0, 1, 12) + i * 86400000));
    const manana = mesa(new Date(Date.UTC(2026, 0, 1, 12) + (i + 1) * 86400000));
    solapeTotal += [...hoy].filter((slug) => manana.has(slug)).length;
  }
  // Con 10 de 596 el solape esperado por azar es ~0,17 al día.
  assert.ok(solapeTotal / 60 < 1, `solape medio demasiado alto: ${solapeTotal / 60}`);
});

/* ------------------------------------------------------------------ *
 * 4. Equilibrio
 * ------------------------------------------------------------------ */

test("el reparto no deja que un territorio domine, aunque tenga el triple de mitos", () => {
  /* El archivo real está muy desnivelado: Andina 223, Caribe 157, Amazonas 92,
     Pacífico 79, Orinoquía 34, Varios 11. Sin equilibrar, la Andina se llevaría
     el 37 % de cada selección. */
  const tamanos = { andina: 223, caribe: 157, amazonas: 92, pacifico: 79, orinoquia: 34, varios: 11 };
  const corpus = [];
  for (const [region, total] of Object.entries(tamanos)) {
    for (let i = 0; i < total; i += 1) corpus.push({ slug: `${region}-${i}`, region });
  }

  for (let dia = 0; dia < 120; dia += 1) {
    const elegidos = balancedPick({
      items: corpus,
      count: 12,
      seed: dailySeed(new Date(Date.UTC(2026, 0, 1, 12) + dia * 86400000)),
      groupBy: (m) => m.region,
      keyOf: (m) => m.slug,
    });
    assert.equal(elegidos.length, 12);
    const cuenta = {};
    elegidos.forEach((m) => {
      cuenta[m.region] = (cuenta[m.region] || 0) + 1;
    });
    // Seis regiones y doce cupos: dos por región, y nunca más de dos.
    assert.equal(Object.keys(cuenta).length, 6);
    const valores = Object.values(cuenta);
    assert.ok(
      Math.max(...valores) - Math.min(...valores) <= 1,
      `reparto desequilibrado el día ${dia}: ${JSON.stringify(cuenta)}`
    );
  }
});

test("cuando un grupo se agota, los turnos siguen entre los demás", () => {
  const corpus = [
    { slug: "a1", g: "a" },
    { slug: "b1", g: "b" },
    { slug: "b2", g: "b" },
    { slug: "b3", g: "b" },
    { slug: "b4", g: "b" },
  ];
  const elegidos = balancedPick({
    items: corpus,
    count: 5,
    seed: 7,
    groupBy: (m) => m.g,
    keyOf: (m) => m.slug,
  });
  assert.equal(elegidos.length, 5, "no se pierde cupo cuando un grupo se queda sin existencias");
});

test("pedir más de lo que hay devuelve todo lo que hay, sin huecos ni repetidos", () => {
  const corpus = [
    { slug: "x", g: "a" },
    { slug: "y", g: "b" },
  ];
  const elegidos = balancedPick({ items: corpus, count: 10, seed: 3, groupBy: (m) => m.g, keyOf: (m) => m.slug });
  assert.equal(elegidos.length, 2);
  assert.equal(new Set(elegidos.map((m) => m.slug)).size, 2);
});

/* ------------------------------------------------------------------ *
 * 5. Secciones independientes (el cursor que mataba de hambre)
 * ------------------------------------------------------------------ */

test("las secciones no se repiten entre sí pero ninguna es «el resto»", () => {
  const corpus = Array.from({ length: 111 }, (_, i) => ({
    slug: `mito-${i}`,
    region: ["andina", "caribe", "amazonas", "pacifico", "orinoquia", "varios"][i % 6],
  }));

  const reparto = partitionSections({
    items: corpus,
    daySeed: dailySeed(new Date("2026-09-02T12:00:00.000Z")),
    keyOf: (m) => m.slug,
    groupBy: (m) => m.region,
    sections: [
      { key: "portada", count: 5 },
      { key: "mesa", count: 10 },
      { key: "mapa", count: 1 },
    ],
  });

  const todos = [...reparto.portada, ...reparto.mesa, ...reparto.mapa].map((m) => m.slug);
  assert.equal(todos.length, 16);
  assert.equal(new Set(todos).size, 16, "ninguna tarjeta se repite en pantalla");

  /* La prueba del hambre: la ÚLTIMA sección tiene que elegir de verdad, no
     quedarse con lo que sobró en el orden del pozo. Con un cursor compartido, el
     mapa sería siempre el elemento 16 del pozo. */
  const mapaPorDia = new Set();
  for (let i = 0; i < 200; i += 1) {
    const dia = dailySeed(new Date(Date.UTC(2026, 0, 1, 12) + i * 86400000));
    const r = partitionSections({
      items: corpus,
      daySeed: dia,
      keyOf: (m) => m.slug,
      groupBy: (m) => m.region,
      sections: [
        { key: "portada", count: 5 },
        { key: "mesa", count: 10 },
        { key: "mapa", count: 1 },
      ],
    });
    mapaPorDia.add(r.mapa[0].slug);
  }
  assert.ok(mapaPorDia.size > 50, `el mapa sólo alcanzó ${mapaPorDia.size} mitos distintos en 200 días`);
});

test("cambiar la clave de una sección cambia su selección, no la de las otras", () => {
  const corpus = Array.from({ length: 60 }, (_, i) => ({ slug: `m-${i}`, g: String(i % 4) }));
  const dia = dailySeed(new Date("2026-09-02T12:00:00.000Z"));
  const comun = { items: corpus, daySeed: dia, keyOf: (m) => m.slug, groupBy: (m) => m.g };

  const a = partitionSections({ ...comun, sections: [{ key: "portada", count: 5 }] });
  const b = partitionSections({ ...comun, sections: [{ key: "rutas", count: 5 }] });
  assert.notDeepEqual(
    a.portada.map((m) => m.slug),
    b.rutas.map((m) => m.slug)
  );
});

test("pickSeeded respeta el tamaño pedido y es estable", () => {
  const lista = Array.from({ length: 40 }, (_, i) => i);
  assert.deepEqual(pickSeeded(lista, 6, 99), pickSeeded(lista, 6, 99));
  assert.equal(pickSeeded(lista, 6, 99).length, 6);
  assert.equal(pickSeeded(lista, 0, 99).length, 0);
  assert.equal(pickSeeded([], 6, 99).length, 0);
});

/* ------------------------------------------------------------------ *
 * 6. Bolsas del importador y forma de la tarjeta
 * ------------------------------------------------------------------ */

test("las bolsas del importador se reconocen pero no se nombran como pueblo", () => {
  ["Mestizo", "  mixto ", "Varios", "MESTIZA", "Sin comunidad"].forEach((nombre) => {
    assert.equal(isImporterBucket(nombre), true, nombre);
  });
  ["Muiscas", "Wayúu", "Kogui (Kággaba)", "", null].forEach((nombre) => {
    assert.equal(isImporterBucket(nombre), false, String(nombre));
  });

  // Un mito de bolsa muestra su territorio, nunca «Por comunidad · mestizo».
  const deBolsa = { region: "Andina", community: "Mestizo" };
  assert.equal(mythMeta(deBolsa), "Andina");
  assert.equal(mythReason(deBolsa, null), "Por territorio · andina");

  const dePueblo = { region: "Andina", community: "Muiscas" };
  assert.equal(mythMeta(dePueblo), "Andina · Muiscas");
  assert.equal(mythReason(dePueblo, null), "Por comunidad · muiscas");
  assert.equal(mythReason(dePueblo, { name: "Agua", slug: "agua" }), "Por tema · agua");
});

test("los chips de tema se reparten y se cuentan DESPUÉS de repartir", () => {
  /* El bug original: contando etiquetas sueltas, un chip anunciaba «2» y al
     pulsarlo aparecía una sola tarjeta, porque cada mito cae en UN solo chip. */
  const items = [
    { slug: "a", tags: [{ name: "Agua", slug: "agua" }, { name: "Muerte", slug: "muerte" }] },
    { slug: "b", tags: [{ name: "Agua", slug: "agua" }] },
    { slug: "c", tags: [{ name: "Agua", slug: "agua" }, { name: "Muerte", slug: "muerte" }] },
    { slug: "d", tags: [{ name: "Muerte", slug: "muerte" }] },
    { slug: "e", tags: [{ name: "Rareza", slug: "rareza" }] },
  ];
  const { chips, themeOf } = assignThemeChips({ items, tagsOf: (m) => m.tags });

  // «rareza» sólo tendría una tarjeta: se cae.
  assert.ok(!chips.some((chip) => chip.slug === "rareza"));

  const cards = items.map((m) => toMesaCard({ slug: m.slug, title: m.slug }, {
    tags: m.tags,
    theme: themeOf.get(m.slug),
  }));
  const filtros = buildMesaFilters(cards, chips);

  assert.equal(filtros[0].key, "todos");
  assert.equal(filtros[0].count, 5);
  filtros.slice(1).forEach((filtro) => {
    const reales = cards.filter((card) => card.theme === filtro.key).length;
    assert.equal(filtro.count, reales, `el chip ${filtro.key} anuncia ${filtro.count} y hay ${reales}`);
    assert.ok(filtro.count >= 2, `el chip ${filtro.key} se quedó con menos de dos tarjetas`);
  });
});

test("la tarjeta de la mesa tiene siempre la misma forma", () => {
  const card = toMesaCard(
    {
      slug: "bachue",
      title: "Bachué",
      excerpt: "La madre del agua.",
      image_url: "https://cdn/x.webp",
      region: "Andina",
      community: "Muiscas",
    },
    { tags: [{ name: "Agua", slug: "agua" }], theme: "agua", motif: "agua" }
  );

  assert.deepEqual(Object.keys(card).sort(), [
    "excerpt",
    "imageUrl",
    "meta",
    "motif",
    "slug",
    "theme",
    "title",
    "why",
  ]);
  assert.equal(card.imageUrl, "https://cdn/x.webp");
  assert.equal(card.meta, "Andina · Muiscas");
  assert.equal(card.why, "Por tema · agua");

  // Y acepta tanto la fila cruda (`image_url`) como una ya normalizada.
  assert.equal(toMesaCard({ slug: "x", imageUrl: "y" }).imageUrl, "y");
});
