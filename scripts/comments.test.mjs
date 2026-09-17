import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import {
  COMMENT_LIMITS,
  COMMENT_STATUSES,
  canTransitionComment,
  countLinks,
  createRateLimiter,
  detectSpam,
  groupCommentsByMythId,
  isValidEmail,
  normalizeCommentStatus,
  normalizeMythId,
  serializeAdminComment,
  serializePublicComment,
  toIsoDate,
  validateCommentInput,
} from "../src/lib/comments-validation.js";

const root = new URL("../", import.meta.url);
const read = (path) => readFile(new URL(path, root), "utf8");

/**
 * Contexto: durante meses el circuito de comentarios estuvo abierto por un solo
 * extremo. El formulario insertaba filas en `pending` y NO existía ninguna ruta,
 * script ni pantalla capaz de moverlas a `approved`, así que los dos
 * comentarios que llegaron a producción no se publicaron nunca. Estas pruebas
 * cubren la lógica pura del circuito y dejan clavados los extremos que faltaban.
 */

/* ------------------------------------------------------------------ *
 * Validación del formulario público
 * ------------------------------------------------------------------ */

const valid = {
  mythId: 322,
  authorName: "Salomé",
  authorEmail: "Salome@Example.com",
  content: "Mi abuela contaba esta misma historia en Santander.",
};

test("un comentario bien formado pasa y sale normalizado", () => {
  const result = validateCommentInput(valid);
  assert.equal(result.ok, true);
  assert.deepEqual(result.value, {
    mythId: 322,
    authorName: "Salomé",
    authorEmail: "salome@example.com",
    content: "Mi abuela contaba esta misma historia en Santander.",
  });
});

test("el mito tiene que ser un id entero y positivo", () => {
  assert.equal(normalizeMythId("322"), 322);
  assert.equal(normalizeMythId(0), null);
  assert.equal(normalizeMythId(-5), null);
  assert.equal(normalizeMythId("abc"), null);
  assert.equal(normalizeMythId(undefined), null);

  const result = validateCommentInput({ ...valid, mythId: "no-soy-un-id" });
  assert.equal(result.ok, false);
  assert.equal(result.code, "myth-id");
  assert.equal(result.field, "mythId");
});

test("el nombre respeta mínimo y máximo", () => {
  const corto = validateCommentInput({ ...valid, authorName: "A" });
  assert.equal(corto.ok, false);
  assert.equal(corto.code, "name-too-short");

  const largo = validateCommentInput({
    ...valid,
    authorName: "n".repeat(COMMENT_LIMITS.authorNameMax + 1),
  });
  assert.equal(largo.ok, false);
  assert.equal(largo.code, "name-too-long");
});

test("el comentario respeta mínimo y máximo", () => {
  const corto = validateCommentInput({ ...valid, content: "corto" });
  assert.equal(corto.ok, false);
  assert.equal(corto.code, "content-too-short");

  const largo = validateCommentInput({
    ...valid,
    content: "a".repeat(COMMENT_LIMITS.contentMax + 1),
  });
  assert.equal(largo.ok, false);
  assert.equal(largo.code, "content-too-long");
});

/**
 * En producción `comments.author_email` acepta NULL y el correo no se muestra
 * en ninguna parte. Exigirlo era fricción sin contrapartida; lo que sí se exige
 * es que, cuando venga, sea un correo de verdad.
 */
test("el correo es opcional pero se valida cuando viene", () => {
  const sinCorreo = validateCommentInput({ ...valid, authorEmail: "" });
  assert.equal(sinCorreo.ok, true);
  assert.equal(sinCorreo.value.authorEmail, "");

  const ausente = validateCommentInput({ ...valid, authorEmail: undefined });
  assert.equal(ausente.ok, true);

  const malo = validateCommentInput({ ...valid, authorEmail: "no-es-correo" });
  assert.equal(malo.ok, false);
  assert.equal(malo.code, "email-invalid");
  assert.equal(malo.field, "authorEmail");

  assert.equal(isValidEmail("hola@mitosdecolombia.com"), true);
  assert.equal(isValidEmail("hola@sin-punto"), false);
  assert.equal(isValidEmail("con espacio@ejemplo.com"), false);
});

test("los espacios y los saltos de línea de más se colapsan", () => {
  const result = validateCommentInput({
    ...valid,
    authorName: "   David    Malte  ",
    content: "  Cuidemos   el territorio.\n\n\n\nQue el taita nos proteja.  ",
  });
  assert.equal(result.ok, true);
  assert.equal(result.value.authorName, "David Malte");
  assert.equal(
    result.value.content,
    "Cuidemos el territorio.\n\nQue el taita nos proteja."
  );
});

/* ------------------------------------------------------------------ *
 * Estados y transiciones
 * ------------------------------------------------------------------ */

test("sólo existen tres estados y se normalizan", () => {
  assert.deepEqual(COMMENT_STATUSES, ["pending", "approved", "rejected"]);
  assert.equal(normalizeCommentStatus("  APPROVED "), "approved");
  assert.equal(normalizeCommentStatus("Rejected"), "rejected");
  assert.equal(normalizeCommentStatus("publicado"), null);
  assert.equal(normalizeCommentStatus(""), null);
  assert.equal(normalizeCommentStatus(null), null);
});

test("la moderación es reversible en las dos direcciones", () => {
  assert.equal(canTransitionComment("pending", "approved"), true);
  assert.equal(canTransitionComment("pending", "rejected"), true);
  // Publicado por error: se puede despublicar.
  assert.equal(canTransitionComment("approved", "rejected"), true);
  // Rechazado por error: se puede rescatar.
  assert.equal(canTransitionComment("rejected", "approved"), true);
  // Y se puede devolver a la cola de revisión.
  assert.equal(canTransitionComment("approved", "pending"), true);
});

test("quedarse en el mismo estado no es una transición, y un estado inventado tampoco", () => {
  assert.equal(canTransitionComment("pending", "pending"), false);
  assert.equal(canTransitionComment("approved", "approved"), false);
  assert.equal(canTransitionComment("pending", "publicado"), false);
  assert.equal(canTransitionComment("pending", ""), false);
});

/* ------------------------------------------------------------------ *
 * Spam
 * ------------------------------------------------------------------ */

test("un comentario normal no se marca como spam", () => {
  const result = detectSpam({
    authorName: "Andrés Mosquera",
    content: "En el Pacífico conocemos una variante muy parecida junto al río.",
  });
  assert.equal(result.spam, false);
  assert.equal(result.code, null);
});

test("el campo trampa marca spam y se responde en silencio", () => {
  const result = detectSpam({
    authorName: "Bot",
    content: "Un comentario cualquiera con suficientes letras.",
    honeypot: "http://sitio-de-spam.example",
  });
  assert.equal(result.spam, true);
  assert.equal(result.code, "honeypot");
  // Decirle al bot que lo pillamos sólo le enseña a esquivar la trampa.
  assert.equal(result.silent, true);
});

test("los enlaces no pasan", () => {
  assert.equal(countLinks("mira https://a.example y www.b.example"), 2);
  assert.equal(countLinks("sin enlaces"), 0);

  const result = detectSpam({
    authorName: "Ana",
    content: "Buen relato, más info en https://sitio-raro.example ahora mismo.",
  });
  assert.equal(result.spam, true);
  assert.equal(result.code, "links");
  assert.equal(result.silent, false);
  assert.match(result.reason, /enlaces/);
});

test("el marcado de enlaces disfrazado tampoco pasa", () => {
  const bbcode = detectSpam({
    authorName: "Ana",
    content: "Muy bueno el relato [url=algo]mira esto[/url] de verdad.",
  });
  assert.equal(bbcode.spam, true);
  assert.equal(bbcode.code, "markup");

  const html = detectSpam({
    authorName: "Ana",
    content: 'Excelente relato <a href="algo">aqui</a> para leer despues.',
  });
  assert.equal(html.spam, true);
  assert.equal(html.code, "markup");
});

test("un comentario sin palabras no pasa", () => {
  const result = detectSpam({ authorName: "Ana", content: "1234567890 !!! ???" });
  assert.equal(result.spam, true);
  assert.equal(result.code, "no-prose");
});

test("la lista de bloqueo atrapa el spam clásico sin tocar el español normal", () => {
  const spam = detectSpam({
    authorName: "Ana",
    content: "Gana en el casino en línea desde tu casa hoy mismo.",
  });
  assert.equal(spam.spam, true);
  assert.equal(spam.code, "blocklist");

  // Falsos positivos que un sitio editorial colombiano no puede permitirse.
  for (const content of [
    "La Madremonte castiga a quien tala los árboles sin permiso.",
    "El sexo de la serpiente no se menciona en la versión wayuu.",
    "Mi tía trabaja en Casanare y conoce otra versión del relato.",
  ]) {
    assert.equal(detectSpam({ authorName: "Ana", content }).spam, false, content);
  }
});

/* ------------------------------------------------------------------ *
 * Límite de frecuencia
 * ------------------------------------------------------------------ */

test("el limitador deja pasar hasta el tope y luego frena", () => {
  let clock = 0;
  const limiter = createRateLimiter({
    limit: 2,
    windowMs: 1000,
    now: () => clock,
  });

  assert.equal(limiter.check("1.2.3.4").allowed, true);
  assert.equal(limiter.check("1.2.3.4").allowed, true);

  const bloqueado = limiter.check("1.2.3.4");
  assert.equal(bloqueado.allowed, false);
  assert.equal(bloqueado.remaining, 0);
  assert.ok(bloqueado.retryAfterMs > 0);
});

test("el limitador cuenta por clave: una IP no frena a otra", () => {
  let clock = 0;
  const limiter = createRateLimiter({ limit: 1, windowMs: 1000, now: () => clock });

  assert.equal(limiter.check("1.1.1.1").allowed, true);
  assert.equal(limiter.check("1.1.1.1").allowed, false);
  assert.equal(limiter.check("2.2.2.2").allowed, true);
});

test("la ventana es deslizante: al pasar el tiempo se vuelve a poder", () => {
  let clock = 0;
  const limiter = createRateLimiter({ limit: 1, windowMs: 1000, now: () => clock });

  assert.equal(limiter.check("1.2.3.4").allowed, true);
  clock = 999;
  assert.equal(limiter.check("1.2.3.4").allowed, false);
  clock = 1001;
  assert.equal(limiter.check("1.2.3.4").allowed, true);
});

/**
 * El cupo se mira antes de validar y se gasta sólo cuando el comentario entra
 * de verdad. Si contara cada intento, tres erratas seguidas dejarían a una
 * persona diez minutos sin poder comentar.
 */
test("consultar el cupo sin gastarlo no cuenta como intento", () => {
  let clock = 0;
  const limiter = createRateLimiter({ limit: 1, windowMs: 1000, now: () => clock });

  assert.equal(limiter.check("1.2.3.4", { consume: false }).allowed, true);
  assert.equal(limiter.check("1.2.3.4", { consume: false }).allowed, true);
  assert.equal(limiter.check("1.2.3.4", { consume: false }).allowed, true);

  // Recién al gastarlo se llena.
  assert.equal(limiter.check("1.2.3.4").allowed, true);
  assert.equal(limiter.check("1.2.3.4", { consume: false }).allowed, false);
});

test("la ruta pública mira el cupo antes de validar y lo gasta al insertar", async () => {
  const route = await read("src/app/api/comments/route.js");

  assert.match(route, /rateLimiter\.check\(visitor, \{ consume: false \}\)/);
  const peek = route.indexOf("consume: false");
  const spend = route.indexOf("rateLimiter.check(visitor);");
  const insert = route.indexOf("addComment(");
  assert.ok(peek < spend, "el cupo se gasta antes de mirarlo");
  assert.ok(spend < insert, "el cupo se gasta después de insertar");
});

/* ------------------------------------------------------------------ *
 * Serialización
 * ------------------------------------------------------------------ */

/**
 * SQLite guarda `'YYYY-MM-DD HH:MM:SS'` en UTC y `new Date()` lo lee como hora
 * LOCAL: sin normalizar, el mismo comentario se fecha cinco horas antes en
 * Bogotá.
 */
test("las fechas salen en ISO vengan de Postgres o de SQLite", () => {
  assert.equal(
    toIsoDate(new Date("2026-03-02T02:57:22.672Z")),
    "2026-03-02T02:57:22.672Z"
  );
  assert.equal(toIsoDate("2026-03-02 02:57:22"), "2026-03-02T02:57:22.000Z");
  assert.equal(toIsoDate("2026-03-02T02:57:22.672Z"), "2026-03-02T02:57:22.672Z");
  assert.equal(toIsoDate(null), null);
  assert.equal(toIsoDate(""), null);
});

test("la forma pública NUNCA lleva el correo de quien comenta", () => {
  const row = {
    id: 1,
    myth_id: 322,
    author_name: "Salomé",
    author_email: "tj2737347@gmail.com",
    content: "Buena historia",
    status: "approved",
    created_at: new Date("2026-03-02T02:57:22.672Z"),
  };

  const publico = serializePublicComment(row);
  assert.deepEqual(Object.keys(publico).sort(), [
    "author_name",
    "content",
    "created_at",
    "id",
  ]);
  assert.equal("author_email" in publico, false);

  // En el panel sí, porque quien modera necesita poder responder.
  const admin = serializeAdminComment(row);
  assert.equal(admin.author_email, "tj2737347@gmail.com");
  assert.equal(admin.status, "approved");
});

test("agrupar por mito devuelve comentarios públicos por id", () => {
  const grouped = groupCommentsByMythId([
    { id: 1, myth_id: 322, author_name: "A", content: "uno", created_at: null },
    { id: 2, myth_id: 322, author_name: "B", content: "dos", created_at: null },
    { id: 3, myth_id: 510, author_name: "C", content: "tres", created_at: null },
  ]);

  assert.equal(grouped["322"].length, 2);
  assert.equal(grouped["510"].length, 1);
  assert.equal(grouped["999"], undefined);
  assert.equal("author_email" in grouped["322"][0], false);
});

/* ------------------------------------------------------------------ *
 * El circuito completo, clavado en el código
 * ------------------------------------------------------------------ */

test("la ruta de moderación existe y exige Basic auth en los tres verbos", async () => {
  const route = await read("src/app/api/admin/comments/route.js");

  for (const method of ["GET", "PATCH", "DELETE"]) {
    assert.match(
      route,
      new RegExp(`export async function ${method}\\(request\\) \\{\\s*if \\(!checkAuth`),
      `${method} sin comprobar la autenticación`
    );
  }
  assert.match(route, /status: 401/);
});

/**
 * Aprobar y no purgar es igual de invisible que no aprobar: la interna del mito
 * está prerenderizada con ISR de una hora. Hay que tumbar la etiqueta de datos
 * Y la ruta, igual que en `/api/admin/revalidate`.
 */
test("moderar purga la etiqueta de datos y el HTML prerenderizado del mito", async () => {
  const route = await read("src/app/api/admin/comments/route.js");

  assert.match(route, /import \{ revalidatePath, revalidateTag \} from "next\/cache"/);
  assert.match(route, /revalidateTag\(COMMENTS_CACHE_TAG\)/);
  assert.match(route, /revalidatePath\(`\/mitos\/\$\{slug\}`\)/);
  // Las dos mutaciones purgan.
  assert.equal((route.match(/purgeCaches\(/g) || []).length, 3);
});

test("el módulo de comentarios no toca el esquema de producción", async () => {
  const lib = await read("src/lib/comments.js");

  assert.doesNotMatch(lib, /CREATE TABLE/i);
  assert.doesNotMatch(lib, /ALTER TABLE/i);
  assert.doesNotMatch(lib, /CREATE INDEX/i);
});

test("todo comentario nuevo entra como pendiente, nunca aprobado", async () => {
  const lib = await read("src/lib/comments.js");

  // El INSERT no puede escribir 'approved' literal en ningún camino.
  const inserts = lib.match(/INSERT INTO comments[\s\S]*?RETURNING id/g) || [];
  assert.equal(inserts.length, 2, "faltan los caminos Postgres y SQLite");
  for (const insert of inserts) {
    assert.doesNotMatch(insert, /approved/);
  }
  assert.match(lib, /DEFAULT_COMMENT_STATUS/);
});

test("la ruta pública valida, limita la frecuencia y filtra spam antes de insertar", async () => {
  const route = await read("src/app/api/comments/route.js");

  assert.match(route, /createRateLimiter\(/);
  assert.match(route, /status: 429/);
  assert.match(route, /validateCommentInput\(/);
  assert.match(route, /detectSpam\(/);
  // El orden importa: primero se valida y se filtra, y sólo al final se inserta.
  assert.ok(route.indexOf("validateCommentInput(") < route.indexOf("addComment("));
  assert.ok(route.indexOf("detectSpam(") < route.indexOf("addComment("));
});

/**
 * `getComments` degradaba a `[]` ante cualquier error, así que una base caída se
 * leía exactamente igual que "este mito no tiene comentarios". La ruta ahora
 * pide el error para poder responder 500.
 */
test("un fallo de base al leer se reporta, no se disfraza de lista vacía", async () => {
  const route = await read("src/app/api/comments/route.js");
  assert.match(route, /getComments\(mythId, \{ throwOnError: true \}\)/);
  assert.match(route, /status: 500/);
});

test("la página del mito trae los comentarios aprobados desde el servidor", async () => {
  const page = await read("src/app/mitos/[slug]/page.js");

  assert.match(page, /getApprovedCommentsForMyth/);
  assert.match(page, /initialComments=\{approvedComments\}/);
});

test("el panel de administración enlaza la pantalla de moderación", async () => {
  const layout = await read("src/components/AdminLayout.js");
  assert.match(layout, /href: "\/admin\/comentarios"/);

  const page = await read("src/app/admin/comentarios/page.js");
  assert.match(page, /\/api\/admin\/comments/);
  // Aprobar, rechazar, devolver y borrar: el circuito entero.
  assert.match(page, /"approved"/);
  assert.match(page, /"rejected"/);
  assert.match(page, /"pending"/);
  assert.match(page, /method: "DELETE"/);
});
