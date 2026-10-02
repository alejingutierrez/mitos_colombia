import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import {
  CONTACT_FIELD_ORDER,
  CONTACT_INTENTS,
  CONTACT_LIMITS,
  CONTACT_REGIONS,
  CONTACT_TOPICS,
  buildContactMessage,
  buildContactSubject,
  emailError,
  firstInvalidField,
  isValidEmail,
  nameError,
  normalizeBlock,
  normalizeContactIntent,
  normalizeLine,
  resolveContactIntent,
  serializeContactSubmission,
  validateContactIntentSubmission,
  validateLegacyContact,
} from "../src/lib/contact-validation.js";

const root = new URL("../", import.meta.url);
const read = (path) => readFile(new URL(path, root), "utf8");

/**
 * Contexto: el formulario de contacto vivía dentro del `aside` de 320px de
 * `DocumentTemplate`, con un `md:grid-cols-2` que mide la VENTANA y no la
 * tarjeta; los campos quedaban en 119px. Se sacó del aside y se partió en tres
 * puertas (aporte de mito · corrección · consulta) que caen en la MISMA tabla
 * `contact_messages` sin migraciones: la intención viaja en `subject` y los
 * campos extra se serializan dentro de `message`.
 *
 * Estas pruebas clavan justo eso: qué asunto y qué cuerpo produce cada puerta,
 * qué se rechaza y por qué, y que una intención desconocida no rompa nada.
 */

/* ------------------------------------------------------------------ *
 * Intenciones
 * ------------------------------------------------------------------ */

test("las tres puertas son exactamente las del diseño aprobado", () => {
  assert.deepEqual(CONTACT_INTENTS, ["mito", "correccion", "consulta"]);
});

test("normalizeContactIntent acepta las tres y rechaza el resto", () => {
  assert.equal(normalizeContactIntent("mito"), "mito");
  assert.equal(normalizeContactIntent("  CORRECCION "), "correccion");
  assert.equal(normalizeContactIntent("consulta"), "consulta");
  assert.equal(normalizeContactIntent("otra-cosa"), null);
  assert.equal(normalizeContactIntent(""), null);
  assert.equal(normalizeContactIntent(undefined), null);
  assert.equal(normalizeContactIntent(null), null);
  assert.equal(normalizeContactIntent(42), null);
});

test("resolveContactIntent siempre devuelve una puerta usable", () => {
  assert.equal(resolveContactIntent("correccion"), "correccion");
  for (const basura of ["", null, undefined, "mit0", {}, [], 7]) {
    assert.equal(resolveContactIntent(basura), "consulta");
  }
});

/* ------------------------------------------------------------------ *
 * Serialización · puerta "mito"
 * ------------------------------------------------------------------ */

const aporte = {
  intent: "mito",
  title: "El duende del molino",
  region: "Andina",
  place: "Salamina, Caldas",
  story:
    "Dicen que al molino viejo llegaba un niño descalzo a medianoche y movía la piedra sin tocarla.",
  teller: "Mi abuelo materno, molinero de la vereda",
  name: "Ana Restrepo",
  email: "ana@correo.com",
};

test("aporte de mito · el asunto clasifica por región", () => {
  assert.equal(buildContactSubject("mito", aporte), "Aporte de mito · Andina");
});

test("aporte de mito · el cuerpo es texto plano rotulado y legible en /admin", () => {
  assert.equal(
    buildContactMessage("mito", aporte),
    [
      "Relato: El duende del molino",
      "Región: Andina",
      "Lugar: Salamina, Caldas",
      "Quién se lo contó: Mi abuelo materno, molinero de la vereda",
      "",
      "La historia:",
      "Dicen que al molino viejo llegaba un niño descalzo a medianoche y movía la piedra sin tocarla.",
    ].join("\n")
  );
});

test("aporte de mito · los campos opcionales vacíos no dejan rótulos huérfanos", () => {
  const minimo = { ...aporte, title: "", place: "", teller: "" };
  assert.equal(
    buildContactMessage("mito", minimo),
    ["Región: Andina", "", "La historia:", minimo.story].join("\n")
  );
  assert.ok(!buildContactMessage("mito", minimo).includes("Relato:"));
  assert.ok(!buildContactMessage("mito", minimo).includes("Lugar:"));
});

test("aporte de mito · una región inventada no llega al asunto", () => {
  const colado = { ...aporte, region: "Mordor" };
  assert.equal(buildContactSubject("mito", colado), "Aporte de mito · No estoy seguro");
  assert.ok(buildContactMessage("mito", colado).includes("Región: No estoy seguro"));
});

/* ------------------------------------------------------------------ *
 * Serialización · puerta "correccion"
 * ------------------------------------------------------------------ */

const correccion = {
  intent: "correccion",
  myth: "La Madremonte",
  current: "La Madremonte castiga al cazador y lo mata en el monte.",
  proposed: "La Madremonte pierde al cazador tres días y lo devuelve sin memoria.",
  basis: "Versión de mi familia en Salamina",
  name: "Ana Restrepo",
  email: "ana@correo.com",
};

test("corrección · el asunto nombra el mito", () => {
  assert.equal(buildContactSubject("correccion", correccion), "Corrección · La Madremonte");
});

test("corrección · el cuerpo separa lo que dice de lo que debería decir", () => {
  assert.equal(
    buildContactMessage("correccion", correccion),
    [
      "Mito: La Madremonte",
      "En qué se basa: Versión de mi familia en Salamina",
      "",
      "Qué dice hoy:",
      correccion.current,
      "",
      "Qué debería decir:",
      correccion.proposed,
    ].join("\n")
  );
});

test("corrección · sin fuente el bloque de cabecera queda en una sola línea", () => {
  const body = buildContactMessage("correccion", { ...correccion, basis: "" });
  assert.ok(body.startsWith("Mito: La Madremonte\n\nQué dice hoy:"));
});

/* ------------------------------------------------------------------ *
 * Serialización · puerta "consulta"
 * ------------------------------------------------------------------ */

const consulta = {
  intent: "consulta",
  topic: "Prensa y entrevistas",
  message: "Escribo desde una revista universitaria y quisiéramos una entrevista en octubre.",
  name: "Ana Restrepo",
  email: "ana@correo.com",
};

test("consulta · el asunto lleva el tema elegido", () => {
  assert.equal(buildContactSubject("consulta", consulta), "Consulta · Prensa y entrevistas");
});

test("consulta · el cuerpo es el asunto y el mensaje", () => {
  assert.equal(
    buildContactMessage("consulta", consulta),
    ["Asunto: Prensa y entrevistas", "", consulta.message].join("\n")
  );
});

test("consulta · un asunto fuera del vocabulario cae en 'Otra cosa'", () => {
  const colado = { ...consulta, topic: "<script>alert(1)</script>" };
  assert.equal(buildContactSubject("consulta", colado), "Consulta · Otra cosa");
  assert.ok(buildContactMessage("consulta", colado).startsWith("Asunto: Otra cosa"));
});

/* ------------------------------------------------------------------ *
 * Una intención desconocida no rompe nada
 * ------------------------------------------------------------------ */

test("una intención desconocida se atiende como la puerta genérica", () => {
  const raro = { ...consulta, intent: "puerta-cuatro" };
  const caido = serializeContactSubmission(raro);
  const normal = serializeContactSubmission(consulta);

  assert.equal(caido.ok, true);
  assert.equal(caido.intent, "consulta");
  assert.deepEqual(caido.value, normal.value);
});

test("una intención desconocida con campos de otra puerta se rechaza, no revienta", () => {
  const result = serializeContactSubmission({ ...aporte, intent: "puerta-cuatro" });
  assert.equal(result.ok, false);
  assert.equal(result.intent, "consulta");
  assert.equal(result.field, "topic");
  assert.equal(result.errors.topic, "Elige un asunto.");
  assert.ok(result.errors.message);
});

test("buildContactSubject / buildContactMessage nunca lanzan con basura", () => {
  for (const intent of ["mito", "correccion", "consulta", "nada", null, undefined, 3]) {
    assert.equal(typeof buildContactSubject(intent), "string");
    assert.equal(typeof buildContactMessage(intent), "string");
    assert.equal(typeof buildContactSubject(intent, {}), "string");
    assert.equal(typeof buildContactMessage(intent, {}), "string");
  }
});

/* ------------------------------------------------------------------ *
 * Asunto: se recorta, porque el título del relato es texto libre
 * ------------------------------------------------------------------ */

test("el asunto se recorta al límite de la columna", () => {
  const largo = buildContactSubject("correccion", { myth: "M".repeat(500) });
  assert.equal(largo.length, CONTACT_LIMITS.subjectMax);
  assert.ok(largo.endsWith("…"));
  assert.ok(largo.startsWith("Corrección · "));
});

/* ------------------------------------------------------------------ *
 * Normalización
 * ------------------------------------------------------------------ */

test("normalizeLine aplana cualquier espacio, saltos incluidos", () => {
  assert.equal(normalizeLine("  La   Madre\n monte  "), "La Madre monte");
  assert.equal(normalizeLine(null), "");
  assert.equal(normalizeLine(undefined), "");
});

test("normalizeBlock conserva los párrafos y descarta el resto", () => {
  assert.equal(
    normalizeBlock("Primero\r\n\r\n\r\n   Segundo   \n\n\n\nTercero  "),
    "Primero\n\nSegundo\n\nTercero"
  );
});

/* ------------------------------------------------------------------ *
 * Reglas de validación · campos compartidos
 * ------------------------------------------------------------------ */

test("el nombre exige dos caracteres y tope de ochenta", () => {
  assert.equal(nameError("A"), "Escribe al menos dos caracteres.");
  assert.equal(nameError("   "), "Escribe al menos dos caracteres.");
  assert.equal(nameError(""), "Escribe al menos dos caracteres.");
  assert.equal(nameError("Ana"), null);
  assert.ok(nameError("A".repeat(CONTACT_LIMITS.nameMax + 1)));
  assert.equal(nameError("A".repeat(CONTACT_LIMITS.nameMax)), null);
});

test("el correo explica qué le falta en vez de decir 'inválido'", () => {
  assert.equal(emailError(""), "Escribe un correo para poder responderte.");
  assert.equal(emailError("ana@correo"), "Falta el dominio: ana@correo.com.");
  assert.equal(emailError("  ANA@Correo  "), "Falta el dominio: ana@correo.com.");
  assert.equal(emailError("ana"), "Ese correo no parece completo. Revísalo.");
  assert.equal(emailError("ana@"), "Ese correo no parece completo. Revísalo.");
  assert.equal(emailError("ana@correo.com"), null);
});

test("isValidEmail acompaña a emailError", () => {
  assert.equal(isValidEmail("ana@correo.com"), true);
  assert.equal(isValidEmail("ana@correo"), false);
  assert.equal(isValidEmail(`${"a".repeat(200)}@correo.com`), false);
});

/* ------------------------------------------------------------------ *
 * Reglas de validación · por puerta
 * ------------------------------------------------------------------ */

test("aporte de mito · región e historia son obligatorias, el resto no", () => {
  const { ok, errors } = validateContactIntentSubmission({
    intent: "mito",
    name: "Ana",
    email: "ana@correo.com",
  });
  assert.equal(ok, false);
  assert.equal(errors.region, "Elige una región.");
  assert.equal(errors.story, "Cuéntanos la historia, aunque sea a pedazos.");
  assert.equal(errors.title, undefined);
  assert.equal(errors.place, undefined);
  assert.equal(errors.teller, undefined);
});

test("aporte de mito · la historia pide más que una frase suelta", () => {
  const { errors } = validateContactIntentSubmission({ ...aporte, story: "Vi un duende." });
  assert.equal(errors.story, `Escribe al menos ${CONTACT_LIMITS.storyMin} caracteres.`);
});

test("aporte de mito · un aporte completo pasa", () => {
  const { ok, errors, fields } = validateContactIntentSubmission(aporte);
  assert.equal(ok, true);
  assert.deepEqual(errors, {});
  assert.equal(fields.region, "Andina");
  assert.equal(fields.email, "ana@correo.com");
});

test("corrección · pide mito, texto de hoy y texto propuesto", () => {
  const { ok, errors } = validateContactIntentSubmission({
    intent: "correccion",
    name: "Ana",
    email: "ana@correo.com",
  });
  assert.equal(ok, false);
  assert.equal(errors.myth, "Dinos en qué mito, aunque sea el nombre aproximado.");
  assert.equal(errors.current, "Copia el fragmento que hay que ajustar.");
  assert.equal(errors.proposed, "Escríbelo como crees que es correcto.");
  assert.equal(errors.basis, undefined);
});

test("corrección · los campos largos respetan el mínimo heredado de la ruta", () => {
  const { errors } = validateContactIntentSubmission({ ...correccion, current: "corto" });
  assert.equal(errors.current, `Escribe al menos ${CONTACT_LIMITS.textMin} caracteres.`);
});

test("consulta · pide asunto y mensaje", () => {
  const { ok, errors } = validateContactIntentSubmission({
    intent: "consulta",
    name: "Ana",
    email: "ana@correo.com",
  });
  assert.equal(ok, false);
  assert.equal(errors.topic, "Elige un asunto.");
  assert.equal(errors.message, "Escribe tu mensaje.");
});

test("el correo mal escrito aparece como error de campo en cualquier puerta", () => {
  for (const base of [aporte, correccion, consulta]) {
    const { ok, errors } = validateContactIntentSubmission({ ...base, email: "ana@correo" });
    assert.equal(ok, false, `puerta ${base.intent}`);
    assert.equal(errors.email, "Falta el dominio: ana@correo.com.");
  }
});

/* ------------------------------------------------------------------ *
 * Foco: el primer error en orden VISUAL, no en orden de descubrimiento
 * ------------------------------------------------------------------ */

test("firstInvalidField sigue el orden en que se pintan los campos", () => {
  assert.equal(firstInvalidField("mito", { email: "x", region: "y" }), "region");
  assert.equal(firstInvalidField("mito", { name: "x", email: "y" }), "name");
  assert.equal(firstInvalidField("correccion", { proposed: "x", myth: "y" }), "myth");
  assert.equal(firstInvalidField("consulta", { message: "x", topic: "y" }), "topic");
  assert.equal(firstInvalidField("consulta", {}), null);
  assert.equal(firstInvalidField("puerta-cuatro", { topic: "x" }), "topic");
});

test("cada puerta declara su orden y termina en nombre y correo", () => {
  for (const intent of CONTACT_INTENTS) {
    const order = CONTACT_FIELD_ORDER[intent];
    assert.ok(Array.isArray(order) && order.length > 2, intent);
    assert.deepEqual(order.slice(-2), ["name", "email"], intent);
    assert.equal(new Set(order).size, order.length, `${intent} sin campos repetidos`);
  }
});

/* ------------------------------------------------------------------ *
 * El contrato heredado sigue vivo
 * ------------------------------------------------------------------ */

test("sin intención se usa el camino heredado { name, email, subject, message }", () => {
  const result = serializeContactSubmission({
    name: "Ana",
    email: "ana@correo.com",
    subject: "Colaboración",
    message: "Quisiera proponer una alianza con la biblioteca del municipio.",
  });
  assert.equal(result.ok, true);
  assert.equal(result.intent, null);
  assert.deepEqual(Object.keys(result.value).sort(), ["email", "message", "name", "subject"]);
  assert.equal(result.value.subject, "Colaboración");
});

test("el camino heredado sin asunto sigue guardando 'Sin asunto'", () => {
  const { fields } = validateLegacyContact({
    name: "Ana",
    email: "ana@correo.com",
    message: "Un mensaje suficientemente largo.",
  });
  assert.equal(fields.subject, "Sin asunto");
});

test("el camino heredado conserva los mínimos de siempre", () => {
  const corto = validateLegacyContact({ name: "Ana", email: "ana@correo.com", message: "hola" });
  assert.equal(corto.ok, false);
  assert.equal(corto.errors.message, `Escribe al menos ${CONTACT_LIMITS.textMin} caracteres.`);

  const sinNombre = validateLegacyContact({ email: "ana@correo.com", message: "Mensaje largo." });
  assert.equal(sinNombre.errors.name, "Escribe al menos dos caracteres.");
});

test("serializeContactSubmission siempre reporta un primer error legible", () => {
  const result = serializeContactSubmission({ name: "", email: "", message: "" });
  assert.equal(result.ok, false);
  assert.equal(result.field, "name");
  assert.equal(result.error, "Escribe al menos dos caracteres.");
  assert.ok(result.errors.email);
  assert.ok(result.errors.message);
});

test("las cuatro columnas que salen son exactamente las que acepta la tabla", () => {
  for (const entrada of [aporte, correccion, consulta]) {
    const { ok, value } = serializeContactSubmission(entrada);
    assert.equal(ok, true, entrada.intent);
    assert.deepEqual(Object.keys(value).sort(), ["email", "message", "name", "subject"]);
    for (const columna of Object.values(value)) {
      assert.equal(typeof columna, "string");
      assert.ok(columna.length > 0);
    }
  }
});

/* ------------------------------------------------------------------ *
 * Vocabularios
 * ------------------------------------------------------------------ */

test("los vocabularios cerrados terminan en su valor de reserva", () => {
  assert.equal(CONTACT_REGIONS.at(-1), "No estoy seguro");
  assert.equal(CONTACT_TOPICS.at(-1), "Otra cosa");
});

/* ------------------------------------------------------------------ *
 * Guardarraíles de la página (lo que motivó todo esto)
 * ------------------------------------------------------------------ */

test("el formulario ya no vive en el aside de 320px", async () => {
  const page = await read("src/app/contacto/page.js");
  assert.ok(page.includes("feature={<ContactForm />}"), "el formulario va en la ranura feature");
  assert.ok(!/aside=/.test(page), "no debe quedar aside en /contacto");
});

test("la ranura feature de DocumentTemplate es aditiva", async () => {
  const template = await read("src/components/templates/DocumentTemplate.js");
  assert.ok(template.includes("feature,"), "acepta la prop");
  assert.ok(template.includes("{feature ?"), "sólo pinta el bloque cuando llega");
  assert.ok(template.includes("aside ?"), "el aside sigue existiendo para las demás páginas");
});

test("/contacto no usa el tema de vidrio retirado", async () => {
  const form = await read("src/app/contacto/ContactForm.js");
  assert.ok(!form.includes("GlassCard"), "sin GlassCard");
  assert.ok(!form.includes("input-glass"), "sin .input-glass");
  assert.ok(!form.includes("rounded-3xl"), "sin esquinas de píldora");
  assert.ok(form.includes('from "../../components/atoms/Input"'), "usa el atom Input");
  assert.ok(form.includes('from "../../components/atoms/Button"'), "usa el atom Button");
});

test("el control segmentado es navegable con teclado", async () => {
  const form = await read("src/app/contacto/ContactForm.js");
  assert.ok(form.includes('role="tablist"'));
  assert.ok(form.includes('role="tab"'));
  assert.ok(form.includes('role="tabpanel"'));
  for (const key of ["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp", "Home", "End"]) {
    assert.ok(form.includes(`"${key}"`), `falta ${key}`);
  }
});

test("la ruta de API delega toda la validación en el módulo puro", async () => {
  const route = await read("src/app/api/contact/route.js");
  assert.ok(route.includes("serializeContactSubmission"));
  assert.ok(route.includes("addContactMessage(result.value)"));
});
