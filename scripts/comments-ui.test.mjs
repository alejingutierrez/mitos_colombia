import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import {
  MAX_PENDING_PER_MYTH,
  PENDING_MAX_AGE_DAYS,
  PENDING_STORAGE_VERSION,
  REVIEW_WINDOW_BUSINESS_DAYS,
  addBusinessDays,
  civilDate,
  clearPending,
  createPendingEntry,
  formatCivilDate,
  formatLongDate,
  formatReceivedLabel,
  isExpiredEntry,
  matchesServerComment,
  normalizeForMatch,
  readPending,
  reconcilePending,
  reviewPromise,
  storageKey,
  writePending,
} from "../src/lib/comments-pending.js";

const root = new URL("../", import.meta.url);
const read = (path) => readFile(new URL(path, root), "utf8");

/**
 * Contexto: a este archivo llegaron dos comentarios y nadie los vio NUNCA, ni
 * siquiera quien los escribió. Se guardaban en `pending`, la página decía
 * "gracias" y el texto desaparecía. La "sala de espera" arregla eso enseñando
 * el estado; estas pruebas cubren las tres piezas que pueden hacerlo mal en
 * silencio:
 *
 *  1. la conciliación entre lo guardado en el navegador y lo que el servidor da
 *     por publicado (si falla, la persona ve su aporte DUPLICADO, o no lo ve);
 *  2. el plazo relativo, que sustituye a la fecha fija de la maqueta;
 *  3. los ayudantes de `localStorage` cuando el navegador se niega a guardar.
 */

/* ------------------------------------------------------------------ *
 * 1 · Conciliación
 * ------------------------------------------------------------------ */

const SUBMITTED = "2026-09-03T15:00:00.000Z";
const NOW = Date.parse("2026-09-03T18:00:00.000Z");

function entry(overrides = {}) {
  return createPendingEntry({
    content: "En Antioquia me la contaron distinta: aparecía en los cafetales.",
    authorName: "Ana Ruiz",
    submittedAt: SUBMITTED,
    ...overrides,
  });
}

function serverComment(overrides = {}) {
  return {
    id: 41,
    author_name: "Ana Ruiz",
    content: "En Antioquia me la contaron distinta: aparecía en los cafetales.",
    created_at: "2026-09-05T12:00:00.000Z",
    ...overrides,
  };
}

test("el id que devuelve la API es la llave fuerte: mismo id, mismo aporte", () => {
  const mine = entry({ serverId: 41 });
  // Aunque el texto se hubiera reescrito al moderar, el id sigue siendo el mío.
  const published = serverComment({ content: "Texto corregido por la redacción." });
  assert.equal(matchesServerComment(mine, published), true);
});

test("sin id, concilia por texto y nombre pese a espacios y mayúsculas", () => {
  const mine = entry({
    content: "  En Antioquia   me la contaron distinta:\n\naparecía  en los cafetales. ",
    authorName: "ANA   RUIZ",
  });
  assert.equal(mine.serverId, null);
  assert.equal(matchesServerComment(mine, serverComment()), true);
});

test("mismo texto y otro nombre NO es mi aporte", () => {
  const mine = entry({ authorName: "Ana Ruiz" });
  assert.equal(matchesServerComment(mine, serverComment({ author_name: "Otra persona" })), false);
});

test("un aporte vacío no se concilia con nada (evita adoptar comentarios ajenos)", () => {
  assert.equal(matchesServerComment({ content: "   ", authorName: "" }, serverComment()), false);
  assert.equal(matchesServerComment(null, serverComment()), false);
  assert.equal(matchesServerComment(entry(), null), false);
});

test("al publicarse, el bloque local desaparece en vez de duplicarse", () => {
  const mine = entry({ serverId: 41 });
  const result = reconcilePending([mine], [serverComment()], { now: NOW });

  assert.deepEqual(result.pending, []);
  assert.equal(result.published.length, 1);
  assert.equal(result.published[0].comment.id, 41);
  assert.equal(result.changed, true);
});

test("lo que todavía no salió se queda esperando", () => {
  const mine = entry();
  const otro = serverComment({ id: 99, author_name: "Otra", content: "Otra versión distinta." });
  const result = reconcilePending([mine], [otro], { now: NOW });

  assert.deepEqual(result.pending, [mine]);
  assert.equal(result.published.length, 0);
  assert.equal(result.changed, false);
});

test("varios aportes propios se concilian uno a uno", () => {
  const publicado = entry({ serverId: 41 });
  const esperando = entry({ content: "Otra que también dejé.", serverId: 42 });
  const result = reconcilePending([publicado, esperando], [serverComment({ id: 41 })], {
    now: NOW,
  });

  assert.equal(result.pending.length, 1);
  assert.equal(result.pending[0].serverId, 42);
  assert.equal(result.published.length, 1);
});

test("a los 30 días deja de decir 'en revisión': un rechazo no vuelve nunca", () => {
  const viejo = entry({ submittedAt: "2026-07-01T15:00:00.000Z" });
  assert.equal(isExpiredEntry(viejo, { now: NOW }), true);

  const result = reconcilePending([viejo], [], { now: NOW });
  assert.deepEqual(result.pending, []);
  assert.equal(result.expired.length, 1);
  assert.equal(result.published.length, 0);
  assert.equal(result.changed, true);
  assert.equal(PENDING_MAX_AGE_DAYS, 30);
});

test("justo antes de caducar sigue en pie", () => {
  const casi = entry({ submittedAt: new Date(NOW - 29 * 24 * 3600 * 1000).toISOString() });
  assert.equal(isExpiredEntry(casi, { now: NOW }), false);
});

test("la conciliación aguanta basura sin reventar", () => {
  const result = reconcilePending([null, 7, "x", entry()], null, { now: NOW });
  assert.equal(result.pending.length, 1);
  assert.deepEqual(reconcilePending(null, null).pending, []);
});

test("normalizeForMatch colapsa espacios, salto de línea y mayúsculas", () => {
  assert.equal(normalizeForMatch("  Hola\n\n  MUNDO "), "hola mundo");
  assert.equal(normalizeForMatch(null), "");
});

/* ------------------------------------------------------------------ *
 * 2 · El plazo, relativo y editable en un solo sitio
 * ------------------------------------------------------------------ */

test("la ventana de servicio es un número de días hábiles, no una fecha", () => {
  assert.ok(
    REVIEW_WINDOW_BUSINESS_DAYS === null || Number.isInteger(REVIEW_WINDOW_BUSINESS_DAYS),
    "REVIEW_WINDOW_BUSINESS_DAYS debe ser un entero de días hábiles, o null para no prometer fecha"
  );
});

test("los días hábiles saltan el fin de semana", () => {
  // Viernes 4 de septiembre de 2026 + 1 hábil = lunes 7.
  assert.deepEqual(addBusinessDays({ year: 2026, month: 9, day: 4 }, 1), {
    year: 2026,
    month: 9,
    day: 7,
  });
  // Jueves 3 + 3 hábiles = martes 8 (la fecha que enseñaba la maqueta).
  assert.deepEqual(addBusinessDays({ year: 2026, month: 9, day: 3 }, 3), {
    year: 2026,
    month: 9,
    day: 8,
  });
  assert.deepEqual(addBusinessDays({ year: 2026, month: 9, day: 3 }, 0), {
    year: 2026,
    month: 9,
    day: 3,
  });
});

test("el plazo se cuenta desde el envío de cada persona", () => {
  const promesa = reviewPromise(SUBMITTED, { now: NOW, businessDays: 3 });
  assert.equal(promesa.hasDate, true);
  assert.equal(promesa.deadlineLabel, "8 de septiembre");
  assert.equal(promesa.sentence, "La leemos antes del 8 de septiembre.");
  assert.equal(promesa.readingStep, "En lectura editorial · antes del 8 de septiembre");

  // Otra persona, otro día: la promesa se mueve con ella.
  const otra = reviewPromise("2026-09-10T15:00:00.000Z", {
    now: Date.parse("2026-09-10T15:00:00.000Z"),
    businessDays: 3,
  });
  assert.equal(otra.deadlineLabel, "15 de septiembre");
});

test("si no hay ventana que sostener, el texto degrada sin fecha y sin huecos", () => {
  const promesa = reviewPromise(SUBMITTED, { now: NOW, businessDays: null });
  assert.equal(promesa.hasDate, false);
  assert.equal(promesa.deadlineLabel, "");
  assert.equal(promesa.readingStep, "En lectura editorial");
  assert.equal(promesa.sentence, "La lee una persona del equipo antes de publicarla.");
  assert.ok(!/undefined|NaN|null/.test(promesa.sentence));
});

test("una fecha ilegible no imprime 'Invalid Date' en la página", () => {
  for (const malo of [null, undefined, "", "ayer", {}]) {
    const promesa = reviewPromise(malo, { now: NOW });
    assert.equal(promesa.hasDate, false);
    assert.ok(!/Invalid|NaN|undefined/.test(`${promesa.sentence} ${promesa.readingStep}`));
  }
});

test("cuando se nos pasa el plazo, lo dice en vez de fingir", () => {
  const promesa = reviewPromise(SUBMITTED, {
    now: Date.parse("2026-09-30T15:00:00.000Z"),
    businessDays: 3,
  });
  assert.equal(promesa.overdue, true);
  assert.match(promesa.sentence, /plazo/);
  assert.ok(!promesa.sentence.includes("La leemos antes del"));
});

test("el plazo cruza el año arrastrando el año en la etiqueta", () => {
  const promesa = reviewPromise("2026-12-30T15:00:00.000Z", {
    now: Date.parse("2026-12-30T15:00:00.000Z"),
    businessDays: 5,
  });
  assert.equal(promesa.deadlineLabel, "6 de enero de 2027");
});

test("el día se cuenta en hora de Colombia, no en UTC", () => {
  // 04:00 UTC del 4 de septiembre son todavía las 23:00 del 3 en Bogotá.
  assert.deepEqual(civilDate("2026-09-04T02:00:00.000Z"), { year: 2026, month: 9, day: 3 });
  assert.deepEqual(civilDate("2026-09-04T12:00:00.000Z"), { year: 2026, month: 9, day: 4 });
  assert.equal(civilDate("no es una fecha"), null);
});

test("'hoy' sólo se dice el mismo día", () => {
  assert.equal(formatReceivedLabel(SUBMITTED, { now: NOW }), "hoy, 3 de septiembre");
  assert.equal(
    formatReceivedLabel(SUBMITTED, { now: Date.parse("2026-09-05T18:00:00.000Z") }),
    "3 de septiembre"
  );
  assert.equal(formatReceivedLabel("qué", { now: NOW }), "");
});

test("los comentarios publicados llevan fecha larga con año", () => {
  assert.equal(formatLongDate("2026-09-05T12:00:00.000Z"), "5 de septiembre de 2026");
  assert.equal(formatLongDate(null), "");
  assert.equal(formatCivilDate(null), "");
});

/* ------------------------------------------------------------------ *
 * 3 · Persistencia: el navegador puede negarse, y la página tiene que
 *     seguir viéndose bien
 * ------------------------------------------------------------------ */

function fakeStorage(initial = {}) {
  const data = new Map(Object.entries(initial));
  return {
    data,
    getItem: (key) => (data.has(key) ? data.get(key) : null),
    setItem: (key, value) => data.set(key, String(value)),
    removeItem: (key) => data.delete(key),
  };
}

const throwingStorage = {
  getItem() {
    throw new DOMException("denied");
  },
  setItem() {
    throw new DOMException("quota");
  },
  removeItem() {
    throw new DOMException("denied");
  },
};

test("ida y vuelta: lo guardado se recupera igual", () => {
  const storage = fakeStorage();
  const mine = entry({ serverId: 41 });

  assert.equal(writePending(322, [mine], storage), true);
  const back = readPending(322, storage);

  assert.equal(back.length, 1);
  assert.equal(back[0].content, mine.content);
  assert.equal(back[0].authorName, "Ana Ruiz");
  assert.equal(back[0].serverId, 41);
  assert.equal(back[0].submittedAt, SUBMITTED);
});

test("cada mito guarda lo suyo", () => {
  const storage = fakeStorage();
  writePending(322, [entry()], storage);
  assert.equal(readPending(323, storage).length, 0);
  assert.notEqual(storageKey(322), storageKey(323));
});

test("el correo NUNCA llega al disco del navegador", () => {
  const storage = fakeStorage();
  const mine = createPendingEntry({
    content: "Una versión que me contaron en Salamina.",
    authorName: "Ana",
    // Aunque a alguien se le ocurra pasarlo, no hay campo donde caiga.
    authorEmail: "ana@example.com",
    submittedAt: SUBMITTED,
  });
  writePending(322, [mine], storage);

  const raw = storage.getItem(storageKey(322));
  assert.ok(!raw.includes("ana@example.com"));
  assert.ok(!Object.keys(mine).includes("authorEmail"));
});

test("un almacenamiento que lanza al leer devuelve lista vacía, no una excepción", () => {
  assert.deepEqual(readPending(322, throwingStorage), []);
});

test("un almacenamiento que lanza al escribir lo dice con false (no finge)", () => {
  assert.equal(writePending(322, [entry()], throwingStorage), false);
  assert.equal(clearPending(322, throwingStorage), false);
});

test("sin localStorage (ventana privada, datos bloqueados) nada revienta", () => {
  assert.deepEqual(readPending(322, null), []);
  assert.equal(writePending(322, [entry()], null), false);
  assert.equal(clearPending(322, null), false);
});

test("sin mito no se toca el almacenamiento", () => {
  const storage = fakeStorage();
  assert.deepEqual(readPending(null, storage), []);
  assert.equal(writePending(undefined, [entry()], storage), false);
  assert.equal(storage.data.size, 0);
});

test("JSON corrupto o de otra versión se descarta en silencio", () => {
  assert.deepEqual(readPending(322, fakeStorage({ [storageKey(322)]: "{no es json" })), []);
  assert.deepEqual(
    readPending(322, fakeStorage({ [storageKey(322)]: JSON.stringify({ v: 0, entries: [] }) })),
    []
  );
  assert.deepEqual(
    readPending(
      322,
      fakeStorage({ [storageKey(322)]: JSON.stringify({ v: PENDING_STORAGE_VERSION }) })
    ),
    []
  );
  assert.deepEqual(readPending(322, fakeStorage({})), []);
});

test("entradas a medias dentro de un JSON válido se filtran", () => {
  const storage = fakeStorage({
    [storageKey(322)]: JSON.stringify({
      v: PENDING_STORAGE_VERSION,
      entries: [
        { content: "", authorName: "Ana", submittedAt: SUBMITTED },
        { content: "Sin fecha", authorName: "Ana" },
        { content: "Buena", authorName: "Ana", submittedAt: SUBMITTED },
        null,
      ],
    }),
  });
  const back = readPending(322, storage);
  assert.equal(back.length, 1);
  assert.equal(back[0].content, "Buena");
});

test("guardar lista vacía borra la clave en vez de dejar un cascarón", () => {
  const storage = fakeStorage();
  writePending(322, [entry()], storage);
  assert.equal(storage.data.size, 1);
  assert.equal(writePending(322, [], storage), true);
  assert.equal(storage.data.size, 0);
});

test("se guarda un tope de aportes por mito y se conservan los últimos", () => {
  const storage = fakeStorage();
  const muchos = Array.from({ length: MAX_PENDING_PER_MYTH + 2 }, (_, index) =>
    entry({ content: `Versión número ${index} que dejé en este mito.` })
  );
  writePending(322, muchos, storage);

  const back = readPending(322, storage);
  assert.equal(back.length, MAX_PENDING_PER_MYTH);
  assert.match(back[back.length - 1].content, /número 4/);
});

/* ------------------------------------------------------------------ *
 * 4 · Lo que no puede volver a aparecer en el código
 * ------------------------------------------------------------------ */

test("ni la lógica ni el componente traen una fecha escrita a mano", async () => {
  const meses =
    /\b\d{1,2} de (enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)\b/;

  // Los comentarios sí pueden citar la fecha de la maqueta; lo que no puede es
  // acabar en pantalla, así que se miran sólo las líneas de código.
  const soloCodigo = (source) =>
    source.replace(/\/\*[\s\S]*?\*\//g, "").replace(/^\s*\/\/.*$/gm, "");

  const componente = soloCodigo(await read("src/components/organisms/CommentThread.js"));
  assert.ok(
    !meses.test(componente),
    "el componente no debe imprimir una fecha fija: el plazo se calcula desde el envío"
  );

  const logica = soloCodigo(await read("src/lib/comments-pending.js"));
  assert.ok(!meses.test(logica));
});

test("el hilo de comentarios ya no usa el tema de vidrio retirado", async () => {
  const componente = await read("src/components/organisms/CommentThread.js");
  assert.ok(!componente.includes("GlassCard"));
  assert.ok(!componente.includes("input-glass"));

  const pagina = await read("src/app/mitos/[slug]/page.js");
  assert.ok(pagina.includes("CommentThread"));
  assert.ok(!pagina.includes("components/Comments"));

  await assert.rejects(read("src/components/Comments.js"), /ENOENT/);
});

test("el formulario pinta la trampa que la API ya comprobaba", async () => {
  const componente = await read("src/components/organisms/CommentThread.js");
  assert.ok(componente.includes('name="website"'));
  assert.ok(componente.includes("tabIndex={-1}"));
});

test("no se promete un aviso por correo: el proyecto no envía correo", async () => {
  const componente = await read("src/components/organisms/CommentThread.js");
  assert.ok(!/te avisamos al correo/i.test(componente));
});
