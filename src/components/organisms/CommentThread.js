"use client";

import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { CommentItem } from "../molecules";
import {
  Avatar,
  Button,
  Callout,
  Count,
  Divider,
  Eyebrow,
  Heading,
  Input,
  Label,
  Spinner,
  Tag,
  Text,
  Textarea,
  TextLink,
  VisuallyHidden,
} from "../atoms";
import { COMMENT_LIMITS, validateCommentInput } from "../../lib/comments-validation";
import {
  createPendingEntry,
  formatLongDate,
  formatReceivedLabel,
  readPending,
  reconcilePending,
  reviewPromise,
  writePending,
  MAX_PENDING_PER_MYTH,
} from "../../lib/comments-pending";

/**
 * Organismo · CommentThread — "Sala de espera" (propuesta F, con el copy de D).
 *
 * El problema que resuelve no es estético. A este archivo llegaron dos
 * comentarios y NADIE los vio nunca: entraron como `pending`, la página dijo
 * "gracias" y el texto desapareció, ni siquiera para quien lo escribió. Aquí el
 * estado ES la interfaz:
 *
 *  · el encabezado dice cuántas versiones hay publicadas y cuántas en revisión;
 *  · al enviar, tu aporte aparece de inmediato marcado "En revisión", con una
 *    línea de tiempo (recibida → en lectura → publicada) y un plazo relativo;
 *  · sobrevive a recargar la página porque queda en `localStorage`, por mito;
 *  · cuando el servidor lo devuelve ya publicado, el bloque local se retira
 *    solo en vez de duplicarse.
 *
 * El plazo NO es una fecha escrita a mano: sale de `REVIEW_WINDOW_BUSINESS_DAYS`
 * en `lib/comments-pending.js`, y si algún día no hay ventana que sostener se
 * pone a `null` y el texto degrada a una frase sin fecha.
 *
 * Props:
 * - mythId?: number|string — sin él el organismo funciona en modo vista previa
 *   (sistema de diseño): no consulta la API ni escribe en el navegador.
 * - mythTitle?: string — el copy nombra el mito.
 * - initialComments?: [{ id, author_name, content, created_at }] — aprobados,
 *   ya renderizados en el servidor.
 * - comments?: — alias heredado; acepta también `{ author, body, date }`.
 * - headingAs?: "h2" | "h3" | … — nivel semántico del titular.
 */

/** Ejemplo de la maqueta: enseña qué forma tiene una versión publicada. */
const EXAMPLE_CONTRIBUTION = {
  author: "Ejemplo",
  body:
    "Mi abuela la contaba igual, pero en su versión el castigo no era la muerte: al cazador lo perdía tres días en el monte y lo devolvía sin memoria. Ella la oyó en Salamina, de su propia madre, hacia 1950.",
};

function normalizeComment(raw, index) {
  if (!raw || typeof raw !== "object") return null;
  const authorName = raw.author_name ?? raw.author ?? "";
  const content = raw.content ?? raw.body ?? "";
  if (!String(content).trim()) return null;
  return {
    id: raw.id ?? `c-${index}`,
    author_name: String(authorName),
    content: String(content),
    created_at: raw.created_at ?? null,
    dateLabel: raw.created_at ? formatLongDate(raw.created_at) : raw.date || "",
  };
}

function normalizeComments(list) {
  if (!Array.isArray(list)) return [];
  return list.map(normalizeComment).filter(Boolean);
}

/**
 * Línea de tiempo del aporte. El paso cumplido no se distingue sólo por el
 * color del punto: lleva su estado escrito para quien no ve el color.
 */
function Timeline({ steps }) {
  return (
    <ol className="mt-3 grid gap-2">
      {steps.map((step) => (
        <li key={step.label} className="grid grid-cols-[auto_1fr] items-start gap-2.5">
          <span
            className={
              step.done
                ? "mt-1 h-2.5 w-2.5 rounded-full border border-jungle-500 bg-jungle-500"
                : "mt-1 h-2.5 w-2.5 rounded-full border border-line-300 bg-white"
            }
            aria-hidden="true"
          />
          <span className="font-body text-xs leading-normal text-ink-500">
            <VisuallyHidden>{step.done ? "Paso cumplido: " : "Paso pendiente: "}</VisuallyHidden>
            {step.label}
          </span>
        </li>
      ))}
    </ol>
  );
}

export function CommentThread({
  mythId = null,
  mythTitle = "",
  initialComments,
  comments,
  headingAs = "h2",
  className,
  onSubmit,
}) {
  const reduceMotion = useReducedMotion();
  const fieldId = useId();
  const previewMode = mythId === null || mythId === undefined || mythId === "";

  const serverSeed = useMemo(
    () => normalizeComments(initialComments ?? comments ?? []),
    [initialComments, comments]
  );

  const [published, setPublished] = useState(serverSeed);
  const [pending, setPending] = useState([]);
  const [storageWorks, setStorageWorks] = useState(true);
  const [justPublished, setJustPublished] = useState(0);
  const [loadError, setLoadError] = useState(null);

  const [form, setForm] = useState({ content: "", authorName: "", authorEmail: "", website: "" });
  const [fieldErrors, setFieldErrors] = useState({});
  const [formError, setFormError] = useState(null);
  const [status, setStatus] = useState("idle"); // idle | sending | sent
  const [lastSubmittedAt, setLastSubmittedAt] = useState(null);

  // Espejo de lo pendiente para poder conciliar sin meter efectos dentro de un
  // actualizador de estado (React puede ejecutarlos dos veces).
  const pendingRef = useRef([]);
  const publishedRef = useRef(serverSeed);
  const storageWorksRef = useRef(true);

  const title = String(mythTitle || "").trim();
  const named = title ? `«${title}»` : "Este relato";

  // El subtítulo va SIEMPRE un nivel por debajo del titular del hilo, para que
  // el orden de encabezados de la página no salte ni se aplane.
  const subHeadingAs = `h${Math.min(6, Number.parseInt(String(headingAs).slice(1), 10) + 1 || 3)}`;

  const bodyId = `${fieldId}-body`;
  const nameId = `${fieldId}-name`;
  const emailId = `${fieldId}-email`;
  const headingId = `${fieldId}-heading`;

  /* --------------------------------------------------------------- *
   * Lo pendiente: leer, guardar, conciliar
   * --------------------------------------------------------------- */

  const commitPending = useCallback(
    (entries, { persist = true } = {}) => {
      pendingRef.current = entries;
      setPending(entries);
      if (persist && !previewMode) {
        const saved = writePending(mythId, entries);
        storageWorksRef.current = saved;
        setStorageWorks(saved);
      }
    },
    [mythId, previewMode]
  );

  /**
   * Cruza lo guardado con lo que el servidor da por publicado. Es la parte que
   * evita el fallo más feo posible: ver tu propio aporte dos veces, una como
   * "en revisión" y otra ya publicado.
   */
  const reconcileAgainst = useCallback(
    (serverList) => {
      const result = reconcilePending(pendingRef.current, serverList);
      if (!result.changed) return;
      commitPending(result.pending, { persist: storageWorksRef.current });
      if (result.published.length > 0) {
        setJustPublished((count) => count + result.published.length);
      }
    },
    [commitPending]
  );

  // Al montar: lo que este navegador recuerda de este mito.
  useEffect(() => {
    if (previewMode) return;
    const stored = readPending(mythId);
    if (stored.length === 0) return;
    const result = reconcilePending(stored, publishedRef.current);
    pendingRef.current = result.pending;
    setPending(result.pending);
    if (result.changed) writePending(mythId, result.pending);
    if (result.published.length > 0) setJustPublished((count) => count + result.published.length);
  }, [mythId, previewMode]);

  // El HTML puede venir de un ISR de hasta una hora: esta consulta trae lo que
  // se aprobó hace un rato y es la que retira el bloque "en revisión" en cuanto
  // el aporte se publica de verdad.
  useEffect(() => {
    if (previewMode) return undefined;
    let active = true;

    fetch(`/api/comments?mythId=${encodeURIComponent(mythId)}`)
      .then((response) => {
        if (!response.ok) throw new Error("comments");
        return response.json();
      })
      .then((data) => {
        if (!active) return;
        const fresh = normalizeComments(data?.comments);
        publishedRef.current = fresh;
        setPublished(fresh);
        setLoadError(null);
        reconcileAgainst(fresh);
      })
      .catch(() => {
        if (!active) return;
        // Sin red nos quedamos con lo que ya pintó el servidor: vaciar la lista
        // se leería como "este mito no tiene versiones", que es justo la mentira
        // que hay que evitar.
        setLoadError(
          publishedRef.current.length === 0
            ? "No pudimos comprobar si hay versiones nuevas. Vuelve a cargar la página en un momento."
            : null
        );
      });

    return () => {
      active = false;
    };
  }, [mythId, previewMode, reconcileAgainst]);

  /* --------------------------------------------------------------- *
   * Formulario
   * --------------------------------------------------------------- */

  const updateField = (name) => (event) => {
    const { value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setFieldErrors((current) => (current[name] ? { ...current, [name]: null } : current));
  };

  const focusField = (field) => {
    const id = field === "authorName" ? nameId : field === "authorEmail" ? emailId : bodyId;
    if (typeof document === "undefined") return;
    const target = document.getElementById(id);
    if (target && typeof target.focus === "function") target.focus();
  };

  const remember = (entry) => {
    if (!entry) return;
    commitPending([...pendingRef.current, entry].slice(-MAX_PENDING_PER_MYTH));
  };

  async function handleSubmit(event) {
    event.preventDefault();
    if (status === "sending") return;

    setFormError(null);
    setFieldErrors({});

    // La MISMA validación que corre en el servidor, para que el mensaje que se
    // lee aquí sea palabra por palabra el que devolvería la API.
    const validation = validateCommentInput({
      mythId: previewMode ? 1 : mythId,
      authorName: form.authorName,
      authorEmail: form.authorEmail,
      content: form.content,
    });

    if (!validation.ok) {
      setFieldErrors({ [validation.field]: validation.error });
      focusField(validation.field);
      return;
    }

    const submittedAt = new Date().toISOString();

    // Vista previa del sistema de diseño: se enseña el estado, no se envía nada.
    if (previewMode) {
      remember(
        createPendingEntry({
          content: validation.value.content,
          authorName: validation.value.authorName,
          submittedAt,
        })
      );
      setForm({ content: "", authorName: "", authorEmail: "", website: "" });
      setLastSubmittedAt(submittedAt);
      setStatus("sent");
      if (onSubmit) onSubmit(validation.value.content);
      return;
    }

    setStatus("sending");

    let response;
    let data = null;
    try {
      response = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mythId,
          authorName: validation.value.authorName,
          authorEmail: validation.value.authorEmail,
          content: validation.value.content,
          website: form.website,
        }),
      });
      data = await response.json().catch(() => null);
    } catch {
      // Nada de vaciar el formulario: lo que la persona escribió sigue ahí.
      setStatus("idle");
      setFormError(
        "No pudimos enviar tu versión: parece que se cayó la conexión. Tu texto sigue aquí, inténtalo otra vez."
      );
      return;
    }

    if (!response.ok) {
      setStatus("idle");
      const message =
        data?.error || "No pudimos enviar tu versión. Inténtalo otra vez en un momento.";
      if (data?.field) {
        setFieldErrors({ [data.field]: message });
        focusField(data.field);
      } else {
        setFormError(message);
      }
      return;
    }

    remember(
      createPendingEntry({
        content: validation.value.content,
        authorName: validation.value.authorName,
        serverId: data?.id ?? null,
        submittedAt,
      })
    );
    setForm({ content: "", authorName: "", authorEmail: "", website: "" });
    setLastSubmittedAt(submittedAt);
    setStatus("sent");
    if (onSubmit) onSubmit(validation.value.content);
  }

  function hidePending(entryId) {
    commitPending(pendingRef.current.filter((entry) => entry.id !== entryId));
  }

  /* --------------------------------------------------------------- *
   * Render
   * --------------------------------------------------------------- */

  const promise = reviewPromise(lastSubmittedAt);
  const hasPublished = published.length > 0;
  const appear = reduceMotion ? "" : "animate-[fade-up_260ms_ease-out]";

  return (
    <section
      className={["mx-auto w-full max-w-2xl", className].filter(Boolean).join(" ")}
      aria-labelledby={headingId}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-xl">
          <Eyebrow withRule tone="jungle" className="mb-3">
            Conversación
          </Eyebrow>
          <Heading level={2} as={headingAs} id={headingId}>
            ¿Así te la contaron?
          </Heading>
        </div>
        <div className="flex shrink-0 flex-wrap gap-2">
          <Tag variant="jungle">
            <span className="tabular-nums">{published.length}</span>
            &nbsp;{published.length === 1 ? "publicada" : "publicadas"}
          </Tag>
          <Tag variant="river">
            <span className="tabular-nums">{pending.length}</span>
            &nbsp;en revisión
          </Tag>
        </div>
      </div>

      <Text size="base" tone="muted" className="mt-3">
        {named} no se cuenta igual en todas partes. Si en tu casa cambiaba el final, el castigo o
        el nombre, esa versión también es parte del archivo.
      </Text>

      {/* Región viva: avisa cuando un aporte propio ya salió publicado. */}
      <div aria-live="polite">
        {justPublished > 0 ? (
          <Callout
            variant="source"
            icon="check"
            title="Tu versión ya está publicada"
            className="mt-6"
          >
            {justPublished === 1
              ? "La que tenías en revisión aparece ahora entre las versiones de este mito. Gracias por dejarla."
              : "Las que tenías en revisión aparecen ahora entre las versiones de este mito. Gracias por dejarlas."}
          </Callout>
        ) : null}
        {loadError ? (
          <Text size="sm" tone="muted" className="mt-6">
            {loadError}
          </Text>
        ) : null}
      </div>

      {/* ---------------- Lo que enviaste y todavía espera ---------------- */}
      {pending.length > 0 ? (
        <div className={["mt-8", appear].filter(Boolean).join(" ")}>
          {status === "sent" ? (
            <Callout
              variant="info"
              icon="check"
              title="Tu versión quedó en revisión"
              className="mb-4"
            >
              {promise.sentence} Vuelve a esta página para verla publicada.
            </Callout>
          ) : null}

          <ul className="grid gap-3">
            {pending.map((entry) => {
              const entryPromise = reviewPromise(entry.submittedAt);
              const received = formatReceivedLabel(entry.submittedAt);
              return (
                <li
                  key={entry.id}
                  className="grid grid-cols-[auto_1fr] gap-3 rounded border border-dashed border-line-200 bg-mist-50 p-4"
                >
                  <Avatar name="Tú" size={40} className="shrink-0" />
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                      <p className="font-display text-sm font-bold text-ink-900">Tu versión</p>
                      <time className="text-xs text-ink-500" dateTime={entry.submittedAt}>
                        {received}
                      </time>
                      <Tag variant="river" className="ml-auto">
                        En revisión
                      </Tag>
                    </div>
                    <p className="mt-1.5 whitespace-pre-line font-body text-sm leading-relaxed text-ink-700">
                      {entry.content}
                    </p>
                    <Timeline
                      steps={[
                        { label: `Recibida · ${received}`, done: true },
                        { label: entryPromise.readingStep, done: false },
                        { label: "Publicada junto al mito, con tu nombre", done: false },
                      ]}
                    />
                    <div className="mt-3">
                      <Button variant="ghost" size="sm" onClick={() => hidePending(entry.id)}>
                        Ocultar de este navegador
                      </Button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <Text size="xs" tone="muted" className="mt-3">
            {storageWorks
              ? "Sólo tú ves este bloque: queda guardado en este navegador hasta que se publique. Si abres el mito en otro dispositivo, o borras los datos del sitio, no aparecerá."
              : "Este navegador no nos deja guardar nada, así que el bloque desaparecerá al recargar. Tu versión sí quedó en la cola de revisión."}{" "}
            Ocultarlo no la retira de la cola; si quieres corregirla o retirarla,{" "}
            <TextLink
              href="/contacto"
              className="rounded-sm focus-visible:ring-2 focus-visible:ring-jungle-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
            >
              escríbenos
            </TextLink>
            .
          </Text>
        </div>
      ) : null}

      <Divider className="my-8" />

      {/* ---------------- Versiones publicadas ---------------- */}
      <div className="flex items-baseline gap-2">
        <Heading level={4} as={subHeadingAs}>
          Versiones de este mito
        </Heading>
        <Count variant={hasPublished ? "jungle" : "neutral"}>{published.length}</Count>
      </div>

      {hasPublished ? (
        <ul className="mt-4 grid gap-3">
          {published.map((comment) => (
            <li key={comment.id} className="rounded border border-line-100 bg-white p-4">
              <CommentItem
                author={comment.author_name}
                date={comment.dateLabel}
                dateTime={comment.created_at || undefined}
              >
                {comment.content}
              </CommentItem>
            </li>
          ))}
        </ul>
      ) : (
        <>
          {/* La maqueta enseña un ejemplo marcado como tal en vez de un hueco. */}
          <div className="mt-4 grid grid-cols-[auto_1fr] gap-3 rounded border border-dashed border-line-200 bg-white p-4">
            <Avatar name={EXAMPLE_CONTRIBUTION.author} size={40} className="shrink-0" />
            <div className="min-w-0">
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <p className="font-display text-sm font-bold text-ink-900">
                  {EXAMPLE_CONTRIBUTION.author}
                </p>
                <Tag variant="neutral" className="ml-auto">
                  No es real
                </Tag>
              </div>
              <p className="mt-1.5 font-body text-sm leading-relaxed text-ink-700">
                {EXAMPLE_CONTRIBUTION.body}
              </p>
              <Text size="xs" tone="muted" className="mt-2">
                Así se ve una versión publicada. De {named} todavía no hay ninguna.
              </Text>
            </div>
          </div>

          <div className="mt-6 border-t border-line-100 pt-6">
            <Text size="base" className="max-w-[56ch]">
              Todavía nadie ha dejado la suya. {named} viaja de boca en boca y cambia en el camino,
              así que es muy probable que la que te contaron no se parezca a la que acabas de leer.
            </Text>
            <dl className="mt-4 grid gap-4 sm:grid-cols-3">
              {[
                {
                  term: "Qué cambió",
                  detail: "El final, el castigo, quién la ve, en qué mes aparece.",
                },
                {
                  term: "Dónde la oíste",
                  detail: "Un municipio, una vereda, un río. Aunque sea aproximado.",
                },
                {
                  term: "Quién la contaba",
                  detail: "Sin nombres si prefieres: basta el parentesco y el lugar.",
                },
              ].map((item) => (
                <div key={item.term} className="border-l-2 border-jungle-tint pl-3">
                  <dt className="font-body text-sm font-semibold text-ink-900">{item.term}</dt>
                  <dd className="mt-1 font-body text-[13px] leading-normal text-ink-500">
                    {item.detail}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </>
      )}

      <Divider className="my-8" />

      {/* ---------------- Formulario ---------------- */}
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-4 flex flex-nowrap items-center gap-3">
          <Avatar name="Tú" size={36} className="shrink-0" />
          <p className="font-body text-sm font-medium text-ink-900">
            {pending.length > 0 ? "Deja otra versión" : "Deja tu versión"}
          </p>
        </div>

        {formError ? (
          <div
            role="alert"
            className="mb-4 rounded border border-ember-500/40 bg-ember-500/10 p-3 font-body text-sm text-ink-900"
          >
            {formError}
          </div>
        ) : null}

        <div>
          <Label htmlFor={bodyId} required>
            Tu versión
          </Label>
          <Textarea
            id={bodyId}
            name="content"
            rows={5}
            value={form.content}
            onChange={updateField("content")}
            invalid={Boolean(fieldErrors.content)}
            aria-describedby={fieldErrors.content ? `${bodyId}-error` : `${bodyId}-hint`}
            placeholder="Escribe cómo te contaron a ti esta historia…"
            maxLength={COMMENT_LIMITS.contentMax}
          />
          {fieldErrors.content ? (
            <p
              id={`${bodyId}-error`}
              role="alert"
              className="mt-1.5 font-body text-xs text-ember-500"
            >
              {fieldErrors.content}
            </p>
          ) : (
            <p id={`${bodyId}-hint`} className="mt-1.5 font-body text-xs text-ink-500">
              Desde {COMMENT_LIMITS.contentMin} caracteres. Sin enlaces: los descartamos.
            </p>
          )}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor={nameId} required>
              Nombre
            </Label>
            <Input
              id={nameId}
              name="authorName"
              value={form.authorName}
              onChange={updateField("authorName")}
              invalid={Boolean(fieldErrors.authorName)}
              aria-describedby={fieldErrors.authorName ? `${nameId}-error` : undefined}
              placeholder="Como quieres firmar"
              autoComplete="name"
              maxLength={COMMENT_LIMITS.authorNameMax}
            />
            {fieldErrors.authorName ? (
              <p
                id={`${nameId}-error`}
                role="alert"
                className="mt-1.5 font-body text-xs text-ember-500"
              >
                {fieldErrors.authorName}
              </p>
            ) : null}
          </div>

          <div>
            <Label htmlFor={emailId}>Correo</Label>
            <Input
              id={emailId}
              type="email"
              name="authorEmail"
              value={form.authorEmail}
              onChange={updateField("authorEmail")}
              invalid={Boolean(fieldErrors.authorEmail)}
              aria-describedby={fieldErrors.authorEmail ? `${emailId}-error` : `${emailId}-hint`}
              placeholder="Opcional"
              autoComplete="email"
              maxLength={COMMENT_LIMITS.authorEmailMax}
            />
            {fieldErrors.authorEmail ? (
              <p
                id={`${emailId}-error`}
                role="alert"
                className="mt-1.5 font-body text-xs text-ember-500"
              >
                {fieldErrors.authorEmail}
              </p>
            ) : (
              <p id={`${emailId}-hint`} className="mt-1.5 font-body text-xs text-ink-500">
                No se publica. Sólo lo usamos si necesitamos preguntarte algo.
              </p>
            )}
          </div>
        </div>

        {/* Trampa para robots: la API ya la comprueba, faltaba pintarla. */}
        <div
          className="pointer-events-none absolute -left-[9999px] h-px w-px overflow-hidden"
          aria-hidden="true"
        >
          <label htmlFor={`${fieldId}-website`}>Sitio web</label>
          <input
            id={`${fieldId}-website`}
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={form.website}
            onChange={updateField("website")}
          />
        </div>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Text size="xs" tone="muted" className="max-w-[42ch]">
            Cada versión la lee una persona antes de publicarse. Verás la tuya aquí mismo mientras
            esperas.
          </Text>
          <Button
            type="submit"
            variant="primary"
            disabled={status === "sending"}
            aria-busy={status === "sending"}
          >
            {status === "sending" ? (
              <>
                <Spinner size={16} className="text-white" label="Enviando" />
                Enviando…
              </>
            ) : (
              "Enviar mi versión"
            )}
          </Button>
        </div>
      </form>
    </section>
  );
}
