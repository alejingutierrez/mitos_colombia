"use client";

import { useEffect, useId, useRef, useState } from "react";
import { cn } from "../../lib/utils";
import { Button } from "../../components/atoms/Button";
import { Divider } from "../../components/atoms/Divider";
import { Icon } from "../../components/atoms/Icon";
import { Input } from "../../components/atoms/Input";
import { Label } from "../../components/atoms/Label";
import { Select } from "../../components/atoms/Select";
import { Textarea } from "../../components/atoms/Textarea";
import {
  CONTACT_INTENTS,
  CONTACT_INTENT_LABELS,
  CONTACT_REGIONS,
  CONTACT_TOPICS,
  firstInvalidField,
  validateContactIntentSubmission,
} from "../../lib/contact-validation";

/**
 * Contacto · tres puertas.
 *
 * El formulario pregunta primero a qué viene la persona y después cambia de
 * campos: aportar un mito pide región y procedencia, corregir un dato pide cuál
 * mito y qué debería decir, una consulta pide sólo asunto y mensaje.
 *
 * Va a ancho completo bajo el título, NO dentro del `aside` de 320px de
 * `DocumentTemplate` — ahí el `md:grid-cols-2` miraba el ancho de la VENTANA y
 * partía 256px útiles en dos campos de 119px. Ver `feature` en la plantilla.
 *
 * Las tres puertas caen en el mismo endpoint y en las mismas cuatro columnas de
 * `contact_messages`: la intención viaja en `subject` y los campos extra se
 * serializan dentro de `message` (`src/lib/contact-validation.js`).
 */

/* ------------------------------------------------------------------ *
 * Copia de cada puerta
 * ------------------------------------------------------------------ */

const DOORS = {
  mito: {
    intro:
      "Nos sirve todo: una historia completa, una variante familiar o apenas una escena que recuerdas.",
    submit: "Enviar el relato",
    note: "Antes de publicar cualquier aporte te escribimos para confirmar cómo quieres aparecer.",
    namePlaceholder: "Como quieres que te citemos",
  },
  correccion: {
    intro: "Toda corrección se revisa contra la fuente antes de tocar el texto publicado.",
    submit: "Enviar la corrección",
    note: "Te contamos por correo qué se ajustó y qué quedó como estaba.",
    namePlaceholder: "Como quieres que te citemos",
  },
  consulta: {
    intro:
      "Prensa, permisos de uso, alianzas con bibliotecas o colectivos, propuestas de ilustración.",
    submit: "Enviar consulta",
    note: "Respondemos en 3 a 5 días hábiles.",
    namePlaceholder: "Nombre y organización",
  },
};

const EMPTY_FIELDS = {
  mito: { title: "", region: "", place: "", story: "", teller: "" },
  correccion: { myth: "", current: "", proposed: "", basis: "" },
  consulta: { topic: "", message: "" },
};

const NUMBER_WORDS = ["cero", "un", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];

function pendingLabel(count) {
  if (count === 1) return "Revisa el campo marcado para poder enviar.";
  const word = count < NUMBER_WORDS.length ? NUMBER_WORDS[count] : String(count);
  return `Revisa los ${word} campos marcados para poder enviar.`;
}

/* ------------------------------------------------------------------ *
 * Piezas de campo — etiqueta real, error anunciado, ayuda enlazada
 * ------------------------------------------------------------------ */

/** Glifo de aviso. El sistema de iconos no tiene uno, y el color no basta. */
function AlertGlyph() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className="mt-0.5 shrink-0"
    >
      <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.3" />
      <path d="M7 4v3.6M7 9.6v.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function FieldShell({ id, label, required, help, error, children }) {
  const helpId = help ? `${id}-ayuda` : null;
  const errorId = error ? `${id}-error` : null;
  return (
    <div>
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      {children({
        id,
        invalid: Boolean(error),
        "aria-describedby": [errorId, helpId].filter(Boolean).join(" ") || undefined,
        "aria-required": required || undefined,
      })}
      {error ? (
        <p id={errorId} className="mt-1.5 flex gap-1.5 font-body text-sm text-red-700">
          <AlertGlyph />
          <span>{error}</span>
        </p>
      ) : null}
      {help ? (
        <p id={helpId} className="mt-1.5 font-body text-sm leading-snug text-ink-500">
          {help}
        </p>
      ) : null}
    </div>
  );
}

function TextField({ id, label, required, help, error, ...props }) {
  return (
    <FieldShell id={id} label={label} required={required} help={help} error={error}>
      {(shared) => <Input {...shared} {...props} />}
    </FieldShell>
  );
}

function AreaField({ id, label, required, help, error, className, ...props }) {
  return (
    <FieldShell id={id} label={label} required={required} help={help} error={error}>
      {(shared) => <Textarea {...shared} className={className} {...props} />}
    </FieldShell>
  );
}

function SelectField({ id, label, required, help, error, placeholder, options, ...props }) {
  return (
    <FieldShell id={id} label={label} required={required} help={help} error={error}>
      {(shared) => (
        <Select {...shared} {...props}>
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
      )}
    </FieldShell>
  );
}

/* ------------------------------------------------------------------ *
 * Formulario
 * ------------------------------------------------------------------ */

export default function ContactForm() {
  const uid = useId();
  const [intent, setIntent] = useState("mito");
  const [shared, setShared] = useState({ name: "", email: "" });
  const [fields, setFields] = useState(EMPTY_FIELDS);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle · sending · sent · error
  const [serverError, setServerError] = useState("");
  const [sentSubject, setSentSubject] = useState("");

  const tabRefs = useRef({});
  const doneRef = useRef(null);

  const door = DOORS[intent];
  const current = fields[intent];
  const tabId = (id) => `${uid}-tab-${id}`;
  const panelId = `${uid}-panel-${intent}`;
  const fieldId = (name) => `${uid}-${intent}-${name}`;
  const errorCount = Object.keys(errors).length;

  // Al confirmar el envío, el formulario desaparece: hay que llevar el foco al
  // acuse para que quien navega con teclado o lector no quede en el vacío.
  useEffect(() => {
    if (status === "sent") doneRef.current?.focus();
  }, [status]);

  function selectIntent(next) {
    if (next === intent) return;
    setIntent(next);
    setErrors({}); // los errores eran de la puerta anterior
    setServerError("");
    if (status === "error") setStatus("idle");
  }

  function handleTablistKeyDown(event) {
    const index = CONTACT_INTENTS.indexOf(intent);
    let nextIndex = null;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      nextIndex = (index + 1) % CONTACT_INTENTS.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      nextIndex = (index - 1 + CONTACT_INTENTS.length) % CONTACT_INTENTS.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = CONTACT_INTENTS.length - 1;
    }
    if (nextIndex === null) return;
    event.preventDefault();
    const next = CONTACT_INTENTS[nextIndex];
    selectIntent(next);
    tabRefs.current[next]?.focus();
  }

  function setField(name, value) {
    setFields((prev) => ({ ...prev, [intent]: { ...prev[intent], [name]: value } }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  }

  function setSharedField(name, value) {
    setShared((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  }

  function focusFirstInvalid(nextErrors) {
    const field = firstInvalidField(intent, nextErrors);
    if (field) document.getElementById(fieldId(field))?.focus();
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const payload = { intent, ...current, ...shared };

    // Cortesía: el servidor vuelve a validar y es el que manda.
    const check = validateContactIntentSubmission(payload);
    if (!check.ok) {
      setErrors(check.errors);
      setStatus("idle");
      setServerError("");
      focusFirstInvalid(check.errors);
      return;
    }

    setStatus("sending");
    setServerError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const body = await response.json().catch(() => ({}));

      if (!response.ok) {
        const fieldErrors = body?.errors && Object.keys(body.errors).length ? body.errors : null;
        if (fieldErrors) {
          setErrors(fieldErrors);
          setStatus("idle");
          focusFirstInvalid(fieldErrors);
          return;
        }
        setStatus("error");
        setServerError(body?.error || "No se pudo enviar el mensaje.");
        return;
      }

      setSentSubject(body?.subject || "");
      setFields((prev) => ({ ...prev, [intent]: EMPTY_FIELDS[intent] }));
      setErrors({});
      setStatus("sent");
    } catch {
      setStatus("error");
      setServerError("No pudimos conectar con el archivo. Revisa tu conexión e inténtalo de nuevo.");
    }
  }

  if (status === "sent") {
    return (
      <div
        ref={doneRef}
        tabIndex={-1}
        role="status"
        className="rounded border border-jungle-500/20 bg-jungle-tint p-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-jungle-500/40 md:p-8"
      >
        <div className="flex gap-3">
          <Icon name="check" size={20} className="mt-0.5 shrink-0 text-jungle-600" />
          <div className="min-w-0">
            <h2 className="atlas-title-md">Recibido. Gracias por escribirnos.</h2>
            <p className="mt-2 font-body text-sm leading-relaxed text-ink-700">
              {sentSubject ? (
                <>
                  Quedó archivado como <strong className="text-ink-900">{sentSubject}</strong>.{" "}
                </>
              ) : null}
              Lo lee la misma redacción que edita el archivo y respondemos en 3 a 5 días hábiles al
              correo que dejaste.
            </p>
            <Button
              variant="secondary"
              className="mt-5"
              onClick={() => {
                setStatus("idle");
                setSentSubject("");
              }}
            >
              Escribir otro mensaje
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div
        role="tablist"
        aria-label="Qué te trae al archivo"
        onKeyDown={handleTablistKeyDown}
        className="grid overflow-hidden rounded border border-line-200 sm:grid-cols-3"
      >
        {CONTACT_INTENTS.map((id) => {
          const selected = id === intent;
          return (
            <button
              key={id}
              id={tabId(id)}
              ref={(el) => {
                tabRefs.current[id] = el;
              }}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={selected ? panelId : undefined}
              tabIndex={selected ? 0 : -1}
              onClick={() => selectIntent(id)}
              className={cn(
                "flex min-h-11 items-center justify-center gap-2 px-3.5 py-2 text-center font-body text-sm font-medium leading-tight transition-colors duration-150",
                "border-b border-line-200 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-jungle-500/40",
                selected ? "bg-jungle-500 text-white" : "bg-white text-ink-700 hover:bg-mist-50"
              )}
            >
              {/* La marca hace que la puerta elegida no dependa sólo del color. */}
              <Icon name="check" size={14} className={selected ? undefined : "invisible"} />
              {CONTACT_INTENT_LABELS[id]}
            </button>
          );
        })}
      </div>

      <div id={panelId} role="tabpanel" aria-labelledby={tabId(intent)} className="mt-6">
        <p className="font-body text-sm leading-relaxed text-ink-500">{door.intro}</p>

        <form className="mt-5 grid gap-4" onSubmit={handleSubmit} noValidate>
          {intent === "mito" ? (
            <>
              <TextField
                id={fieldId("title")}
                label="¿Cómo se llama el relato?"
                help="Si no tiene nombre, descríbelo en pocas palabras."
                error={errors.title}
                value={current.title}
                onChange={(e) => setField("title", e.target.value)}
                placeholder="La Madremonte, el duende del molino, la novia del río..."
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <SelectField
                  id={fieldId("region")}
                  label="¿Dónde ocurre?"
                  required
                  error={errors.region}
                  placeholder="Elige una región"
                  options={CONTACT_REGIONS}
                  value={current.region}
                  onChange={(e) => setField("region", e.target.value)}
                />
                <TextField
                  id={fieldId("place")}
                  label="Municipio, vereda o río"
                  error={errors.place}
                  value={current.place}
                  onChange={(e) => setField("place", e.target.value)}
                  placeholder="Opcional, pero ayuda mucho"
                />
              </div>
              <AreaField
                id={fieldId("story")}
                label="La historia"
                required
                error={errors.story}
                className="min-h-[170px]"
                rows={7}
                value={current.story}
                onChange={(e) => setField("story", e.target.value)}
                placeholder="Cuéntala como la recuerdas. No importa el orden ni la redacción."
              />
              <TextField
                id={fieldId("teller")}
                label="¿Quién te la contó?"
                help="Si prefieres no dar nombres, basta con el parentesco y el lugar."
                error={errors.teller}
                value={current.teller}
                onChange={(e) => setField("teller", e.target.value)}
                placeholder="Mi abuela, en Salamina, hacia 1990"
              />
            </>
          ) : null}

          {intent === "correccion" ? (
            <>
              <TextField
                id={fieldId("myth")}
                label="¿En qué mito?"
                required
                help="Escríbelo como aparece en el archivo, o lo más parecido que recuerdes."
                error={errors.myth}
                value={current.myth}
                onChange={(e) => setField("myth", e.target.value)}
                placeholder="La Madremonte, El Mohán, La Patasola..."
              />
              <AreaField
                id={fieldId("current")}
                label="¿Qué dice hoy?"
                required
                error={errors.current}
                className="min-h-[76px]"
                rows={3}
                value={current.current}
                onChange={(e) => setField("current", e.target.value)}
                placeholder="Copia y pega el fragmento que hay que ajustar."
              />
              <AreaField
                id={fieldId("proposed")}
                label="¿Qué debería decir?"
                required
                error={errors.proposed}
                className="min-h-[76px]"
                rows={3}
                value={current.proposed}
                onChange={(e) => setField("proposed", e.target.value)}
                placeholder="Escríbelo como crees que es correcto."
              />
              <TextField
                id={fieldId("basis")}
                label="¿En qué te basas?"
                error={errors.basis}
                value={current.basis}
                onChange={(e) => setField("basis", e.target.value)}
                placeholder="Un libro, un documento, una persona de la comunidad"
              />
            </>
          ) : null}

          {intent === "consulta" ? (
            <>
              <SelectField
                id={fieldId("topic")}
                label="Asunto"
                required
                error={errors.topic}
                placeholder="Elige un asunto"
                options={CONTACT_TOPICS}
                value={current.topic}
                onChange={(e) => setField("topic", e.target.value)}
              />
              <AreaField
                id={fieldId("message")}
                label="Tu mensaje"
                required
                error={errors.message}
                className="min-h-[150px]"
                rows={6}
                value={current.message}
                onChange={(e) => setField("message", e.target.value)}
                placeholder="Cuéntanos el objetivo, el alcance y los tiempos que manejas."
              />
            </>
          ) : null}

          <Divider className="my-1" />

          <div className="grid gap-4 sm:grid-cols-2">
            <TextField
              id={fieldId("name")}
              label="Tu nombre"
              required
              error={errors.name}
              value={shared.name}
              onChange={(e) => setSharedField("name", e.target.value)}
              placeholder={door.namePlaceholder}
              autoComplete="name"
            />
            <TextField
              id={fieldId("email")}
              label="Tu correo"
              required
              type="email"
              error={errors.email}
              value={shared.email}
              onChange={(e) => setSharedField("email", e.target.value)}
              placeholder="para responderte"
              autoComplete="email"
            />
          </div>

          {status === "error" ? (
            <p
              role="alert"
              className="flex gap-2 rounded border border-red-400 bg-red-50 px-3.5 py-3 font-body text-sm text-red-700"
            >
              <AlertGlyph />
              <span>{serverError}</span>
            </p>
          ) : null}

          <div className="mt-1 flex flex-wrap items-center justify-between gap-3">
            <p
              role="status"
              className={cn(
                "max-w-[42ch] font-body text-sm leading-snug",
                errorCount ? "text-red-700" : "text-ink-500"
              )}
            >
              {errorCount ? pendingLabel(errorCount) : door.note}
            </p>
            <Button type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Enviando…" : door.submit}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
