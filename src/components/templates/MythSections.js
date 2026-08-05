import { cn } from "../../lib/utils";
import {
  Container,
  Motif,
  Eyebrow,
  Prose,
  Icon,
  TextLink,
  IndexNumber,
  StatusDot,
} from "../atoms";
import { VersionsDisclosure } from "../VersionsDisclosure";

/**
 * Bloques de sección editorial de un mito + chrome compartido (sala de museo).
 * Cada sección real (mito, historia, versiones, leccion, similitudes) tiene su
 * propio registro visual DISTINTO y se renderiza sólo si el campo existe.
 * `accent` = jungle|river.
 */

export function toParagraphs(text) {
  return String(text || "")
    .split(/\n{1,}/)
    .map((s) => s.trim())
    .filter(Boolean);
}

/* Encabezados de sección tal como los produce el import (con y sin acento). */
const SECTION_HEADERS = {
  Mito: "mito",
  Historia: "historia",
  Versiones: "versiones",
  Lección: "leccion",
  Leccion: "leccion",
  Similitudes: "similitudes",
};

export function parseContentSections(content = "") {
  const lines = String(content || "").split(/\r?\n/);
  const buf = {};
  let cur = null;
  let sawHeader = false;
  for (const raw of lines) {
    const line = raw.trim();
    if (Object.prototype.hasOwnProperty.call(SECTION_HEADERS, line)) {
      cur = SECTION_HEADERS[line];
      buf[cur] = buf[cur] || [];
      sawHeader = true;
      continue;
    }
    if (cur) buf[cur].push(raw);
    else (buf._pre = buf._pre || []).push(raw);
  }
  const result = {};
  for (const k of ["mito", "historia", "versiones", "leccion", "similitudes"]) {
    if (buf[k]) result[k] = buf[k].join("\n").trim();
  }
  const pre = (buf._pre || []).join("\n").trim();
  if (pre) result.mito = (pre + (result.mito ? `\n\n${result.mito}` : "")).trim();
  if (!sawHeader && !result.mito) result.mito = String(content || "").trim();
  return result;
}

export function deriveSections(myth = {}) {
  const keys = ["mito", "historia", "versiones", "leccion", "similitudes"];
  if (keys.some((k) => myth[k])) {
    return keys.reduce((acc, k) => ((acc[k] = myth[k]), acc), {});
  }
  return parseContentSections(myth.content);
}

const MOTIF_POOL = ["jaguar", "condor", "anaconda", "tucan", "delfin", "rana", "agua", "hoja", "montana", "sol", "luna"];

export function mythMotif(myth = {}) {
  if (myth.motif) return myth.motif;
  const s = String(myth.slug || myth.title || "");
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return MOTIF_POOL[Math.abs(h) % MOTIF_POOL.length];
}

/* ---------------- Chrome compartido (sala de museo) ---------------- */

export const GOLD = "#bd8642";
export const CREAM = "#f6e9cf";
export const NIGHT = "#0a0f0c";

export const ACCENT = {
  jungle: { bar: "bg-jungle-500", text: "text-jungle-600", tint: "bg-jungle-tint", dark: "#0e2018", tick: "rgba(28,92,63,0.5)" },
  river: { bar: "bg-river-500", text: "text-river-600", tint: "bg-river-tint", dark: "#0c1c29", tick: "rgba(31,95,139,0.5)" },
};
export const acc = (a) => ACCENT[a] || ACCENT.jungle;

/* Marcas de esquina tipo ficha de museo (para enmarcar la imagen-obra). */
export function CornerTicks({ accent = "jungle" }) {
  const c = acc(accent).tick;
  return (
    <>
      <span className="pointer-events-none absolute -right-2 -top-2 z-20 h-8 w-8 border-r border-t" style={{ borderColor: c }} aria-hidden="true" />
      <span className="pointer-events-none absolute -bottom-2 -left-2 z-20 h-8 w-8 border-b border-l" style={{ borderColor: c }} aria-hidden="true" />
    </>
  );
}

/* Cartela: kicker "REGIÓN · COMUNIDAD" + atribución en cursiva. */
export function CuratorialCaption({ region, community, title, tone = "light", className }) {
  const kicker = [region, community].filter(Boolean).join(" · ");
  return (
    <div className={className}>
      {kicker ? (
        <p className={cn("text-[0.7rem] uppercase tracking-[0.22em]", tone === "dark" ? "text-white/70" : "text-ink-500")}>
          {kicker}
        </p>
      ) : null}
      {title ? (
        <p className={cn("mt-1 font-display text-base font-bold italic", tone === "dark" ? "text-white" : "text-ink-900")}>
          {title}
        </p>
      ) : null}
    </div>
  );
}

/* Medallón de crema con anillo dorado (ilustración en superficies oscuras). */
export function CreamMedallion({ motif = "luna", size = 44, className }) {
  return (
    <span
      className={cn("inline-flex items-center justify-center rounded-full", className)}
      style={{ width: size + 32, height: size + 32, background: CREAM, boxShadow: `0 0 0 1px ${GOLD}, 0 0 0 6px rgba(189,134,66,0.14)` }}
      aria-hidden="true"
    >
      <Motif name={motif} size={size} />
    </span>
  );
}

/* Encabezado de sección con numeral editorial (columna vertebral). */
export function SectionSpine({ index, eyebrow, accent = "jungle", className }) {
  return (
    <div className={cn("mb-5 flex items-baseline gap-3", className)}>
      {index != null ? <IndexNumber value={index} size="lg" /> : null}
      <Eyebrow tone={accent} withRule>
        {eyebrow}
      </Eyebrow>
    </div>
  );
}

/* ---------------- 1 · El relato (mito) ---------------- */
export function RelatoBlock({ text, accent = "jungle", motif = "jaguar" }) {
  const ps = toParagraphs(text);
  if (ps.length === 0) return null;

  const dropTone = accent === "river" ? "first-letter:text-river-600" : "first-letter:text-jungle-600";
  const first = ps[0];
  const words = first.split(/\s+/);
  const leadCount = Math.min(4, Math.max(2, Math.round(words.length / 8)));
  const lead = words.slice(0, leadCount).join(" ");
  const rest = words.slice(leadCount).join(" ");

  return (
    <div className="relative">
      <Motif
        name={motif}
        size={480}
        className="pointer-events-none absolute -right-28 -top-12 -z-10 hidden opacity-[0.05] lg:block"
        aria-hidden="true"
      />
      <div className="mb-8 md:mb-10">
        <h2 className="atlas-section-heading">El relato</h2>
        <span className={cn("atlas-rule", accent === "river" && "bg-river-500")} aria-hidden="true" />
      </div>
      <Prose className="prose-p:text-[1.14rem] prose-p:leading-[1.72] prose-p:text-pretty md:prose-p:text-[1.2rem] [&_p+p]:mt-[1.3em]">
        <p
          className={cn(
            "first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-display first-letter:text-[4.4rem] first-letter:font-extrabold first-letter:leading-[0.7]",
            dropTone
          )}
        >
          <span className="font-display text-[0.9em] font-semibold uppercase tracking-[0.04em] text-ink-900">
            {lead}{" "}
          </span>
          {rest}
        </p>
        {ps.slice(1).map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Prose>
    </div>
  );
}

/* ---------------- 2 · Contexto histórico — aside con riel de acento ---------------- */
export function HistoriaBlock({ text, accent = "jungle", index, motif = "montana" }) {
  const ps = toParagraphs(text);
  if (ps.length === 0) return null;
  return (
    <div>
      <div className="mb-7">
        <h2 className="atlas-section-heading">Contexto histórico</h2>
        <span className={cn("atlas-rule", accent === "river" && "bg-river-500")} aria-hidden="true" />
      </div>
      <div className={cn("relative overflow-hidden border-l-2 pl-5 sm:pl-7", accent === "river" ? "border-river-500/40" : "border-jungle-500/40")}>
        <Motif name={motif} size={150} className="pointer-events-none absolute -right-6 -top-4 opacity-[0.06]" aria-hidden="true" />
        <Prose className="relative prose-p:text-[1.03rem] prose-p:leading-[1.78]">
          {ps.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Prose>
      </div>
    </div>
  );
}

/* ---------------- 3 · Versiones — variantes numeradas ---------------- */
export function VersionesBlock({ text, accent = "jungle", index }) {
  const ps = toParagraphs(text);
  if (ps.length === 0) return null;
  return (
    <div>
      <div className="mb-6">
        <h2 className="atlas-section-heading">Otras versiones y matices</h2>
        <span className={cn("atlas-rule", accent === "river" && "bg-river-500")} aria-hidden="true" />
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-500">
          Variaciones, precisiones y límites documentales para quien quiera profundizar.
        </p>
      </div>
      <VersionsDisclosure paragraphs={ps} />
    </div>
  );
}

/* ---------------- 4 · La enseñanza — banda ceremonial oscura (pico) ---------------- */
/* Renderiza su propia sección a sangre completa; colócala FUERA de la medida angosta. */
export function LeccionBlock({ text, accent = "jungle", motif = "luna" }) {
  const clean = String(text || "").trim();
  if (!clean) return null;
  const dark = acc(accent).dark;
  return (
    <section className="relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${NIGHT} 0%, ${dark} 55%, ${NIGHT} 100%)` }}>
      <Motif name={motif} size={360} className="pointer-events-none absolute -right-16 -top-10 opacity-[0.06]" aria-hidden="true" />
      <Container size="atlas" className="relative py-16 text-center md:py-20">
        <CreamMedallion motif={motif} size={38} className="mx-auto mb-6" />
        <h2 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: GOLD }}>
          La enseñanza
        </h2>
        <blockquote className="mx-auto max-w-2xl text-balance font-display text-2xl font-bold leading-snug tracking-tight md:text-[2rem]" style={{ color: CREAM }}>
          <span style={{ color: GOLD }}>“</span>
          {clean}
          <span style={{ color: GOLD }}>”</span>
        </blockquote>
      </Container>
    </section>
  );
}

/* ---------------- 5 · Resonancias — tarjeta de comparación ---------------- */
export function SimilitudesBlock({ text, accent = "jungle", index, motif = "anaconda" }) {
  const ps = toParagraphs(text);
  if (ps.length === 0) return null;
  return (
    <aside className="relative overflow-hidden border-y border-line-100 py-8 md:py-10">
      <div className="mb-6 flex items-center gap-3">
        <Icon name="arrow-right" size={18} className={acc(accent).text} />
        <h2 className="atlas-section-heading">Resonancias con otros mitos</h2>
      </div>
      <Motif name={motif} size={220} className="pointer-events-none absolute -bottom-6 -right-8 opacity-[0.05]" aria-hidden="true" />
      <div className="relative">
        <Prose className="prose-p:text-[1rem] prose-p:leading-[1.75]">
          {ps.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Prose>
      </div>
    </aside>
  );
}

/* ---------------- Procedencia — sello de credibilidad ---------------- */
export function ProcedenciaBlock({ region, community, categoryPath }) {
  const origin = [community, region].filter(Boolean).join(", ");
  return (
    <div className="border-t border-line-200 pt-6 lg:border-t-0 lg:pt-0">
      <div className="flex items-start gap-3.5">
        <Icon name="map-pin" size={20} className="mt-0.5 shrink-0" style={{ color: GOLD }} />
        <div>
          <h3 className="font-display text-xl text-jungle-700">Procedencia</h3>
          <p className="mt-1.5 font-display text-sm tracking-wide text-ink-900">
            Recopilado de la tradición oral{origin ? ` de ${origin}` : ""}
            {categoryPath ? ` · ${categoryPath}` : ""}.
          </p>
          <TextLink href="/metodologia" className="mt-2.5 inline-flex text-sm">
            Cómo documentamos cada relato
          </TextLink>
        </div>
      </div>
    </div>
  );
}

function normalizeSource(source) {
  const title = String(source?.title || "").trim();
  const summary = String(source?.summary || "").trim();
  let url = "";
  try {
    const parsed = new URL(String(source?.url || ""));
    if (parsed.protocol === "https:" || parsed.protocol === "http:") {
      url = parsed.toString();
    }
  } catch {
    url = "";
  }
  return title && url ? { title, summary, url } : null;
}

function formatReviewDate(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("es-CO", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "America/Bogota",
  }).format(date);
}

export function FuentesBlock({ sources = [], updatedAt }) {
  // Deduplicar por URL: varias fichas traen la misma referencia repetida y se
  // listaba dos veces (además de romper las keys de React).
  const normalized = Array.from(
    new Map(
      sources
        .map(normalizeSource)
        .filter(Boolean)
        .map((source) => [source.url, source])
    ).values()
  ).slice(0, 12);
  const reviewDate = formatReviewDate(updatedAt);

  return (
    <div className="border-t border-line-200 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
      <div className="flex items-start gap-3.5">
        <Icon name="link" size={20} className="mt-0.5 shrink-0 text-river-600" />
        <div className="min-w-0 flex-1">
          <h3 className="font-display text-xl text-jungle-700">
            Fuentes y revisión editorial
          </h3>
          {normalized.length ? (
            <>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">
                Esta ficha cuenta con referencias de contraste publicadas. La adaptación
                narrativa del sitio no sustituye la consulta de las fuentes originales.
              </p>
              <ul className="mt-4 space-y-3">
                {normalized.map((source) => (
                  <li key={source.url} className="border-l-2 border-river-500/35 pl-4">
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display text-sm font-semibold text-river-700 underline decoration-river-500/35 underline-offset-4 hover:decoration-river-600"
                    >
                      {source.title}
                    </a>
                    {source.summary ? (
                      <p className="mt-1 text-xs leading-relaxed text-ink-600">
                        {source.summary}
                      </p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p className="mt-2 text-sm leading-relaxed text-ink-700">
              La procedencia cultural está clasificada, pero la referencia bibliográfica
              primaria aún está pendiente de publicación en esta ficha. No presentamos
              esa clasificación como si fuera una cita documental.
            </p>
          )}
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-ink-700">
            {reviewDate ? <span>Última revisión: {reviewDate}</span> : null}
            <TextLink href="/contacto">Aportar o corregir una fuente</TextLink>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Territorio — figura de mapa con cartela ---------------- */
export function TerritorioBlock({ latitude, longitude, region, community, accent = "jungle", motif = "montana", children }) {
  const approx = latitude == null || longitude == null;
  const caption = [region, community].filter(Boolean).join(" · ") || "Colombia";
  return (
    <div>
      <div className="mb-7 md:mb-9">
        <h2 className="atlas-section-heading">Territorio</h2>
        <span className={cn("atlas-rule", accent === "river" && "bg-river-500")} aria-hidden="true" />
      </div>
      <div className="grid gap-7 lg:grid-cols-[minmax(0,1.45fr)_minmax(18rem,0.55fr)] lg:items-stretch">
        <figure className="overflow-hidden rounded border border-line-100">
          {children ? (
            children
          ) : (
            <div className="relative flex aspect-[16/9] flex-col items-center justify-center gap-2 bg-mist-50 text-ink-500">
              <Motif name={motif} size={180} className="pointer-events-none absolute opacity-[0.06]" aria-hidden="true" />
              <Icon name="map-pin" size={26} className={`relative ${acc(accent).text}`} />
              <p className="relative font-body text-sm">Territorio aproximado{region ? ` · ${region}` : ""}</p>
            </div>
          )}
          <figcaption className="flex items-center justify-between gap-3 border-t border-line-100 bg-white px-4 py-2.5 text-xs text-ink-500">
            <span className="uppercase tracking-[0.12em]">{caption}</span>
            {approx ? (
              <span className="inline-flex items-center gap-1.5">
                <StatusDot tone={accent} size={6} /> Ubicación aproximada
              </span>
            ) : null}
          </figcaption>
        </figure>
        <div className="flex flex-col justify-between border-t border-line-200 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          <div>
            <p className="font-display text-2xl leading-tight text-jungle-700">{caption}</p>
            <p className="mt-4 max-w-sm text-base leading-relaxed text-ink-700">
              El territorio sitúa la memoria del relato y permite leerla en relación con su comunidad de origen.
            </p>
          </div>
          <dl className="mt-8 divide-y divide-line-100 border-y border-line-100 text-sm">
            {region ? (
              <div className="flex items-baseline justify-between gap-5 py-3">
                <dt className="text-ink-500">Región</dt>
                <dd className="text-right font-medium text-ink-900">{region}</dd>
              </div>
            ) : null}
            {community ? (
              <div className="flex items-baseline justify-between gap-5 py-3">
                <dt className="text-ink-500">Comunidad</dt>
                <dd className="text-right font-medium text-ink-900">{community}</dd>
              </div>
            ) : null}
            {!approx ? (
              <div className="flex items-baseline justify-between gap-5 py-3">
                <dt className="text-ink-500">Referencia</dt>
                <dd className="text-right font-medium text-ink-900">{latitude}° · {longitude}°</dd>
              </div>
            ) : null}
          </dl>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Palabras clave — coda editorial ---------------- */
export function PalabrasClaveBlock({ keywords = [] }) {
  if (!keywords.length) return null;
  return (
    <div>
      <div className="mb-3 flex items-center gap-2.5">
        <Motif name="hoja" size={22} />
        <h3 className="font-display text-xl text-jungle-700">Palabras clave</h3>
      </div>
      <div className="flex flex-wrap gap-x-5 gap-y-2">
        {keywords.slice(0, 20).map((k, i) => (
          <TextLink key={`${k}-${i}`} href={`/mitos?q=${encodeURIComponent(k)}`} className="text-sm">
            {k}
          </TextLink>
        ))}
      </div>
    </div>
  );
}
