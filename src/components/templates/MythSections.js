import { cn } from "../../lib/utils";
import {
  Container,
  Motif,
  Eyebrow,
  Prose,
  Icon,
  TagLink,
  TextLink,
  IndexNumber,
  StatusDot,
} from "../atoms";

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
      <SectionSpine index={index} eyebrow="Contexto histórico" accent={accent} />
      <div className={cn("relative overflow-hidden border-l-2 pl-6", accent === "river" ? "border-river-500/40" : "border-jungle-500/40")}>
        <Motif name={motif} size={150} className="pointer-events-none absolute -right-6 -top-4 opacity-[0.06]" aria-hidden="true" />
        <Prose className="relative">
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
      <SectionSpine index={index} eyebrow="Otras versiones del relato" accent={accent} />
      <ol className="divide-y divide-line-100 border-y border-line-100">
        {ps.map((p, i) => (
          <li key={i} className="flex gap-5 py-5">
            <span className="shrink-0 font-display text-2xl font-bold tabular-nums text-line-300">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="font-body text-[1rem] leading-[1.7] text-ink-700">{p}</p>
          </li>
        ))}
      </ol>
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
      <Container size="wide" className="relative py-16 text-center md:py-20">
        <CreamMedallion motif={motif} size={38} className="mx-auto mb-6" />
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: GOLD }}>
          La enseñanza
        </p>
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
    <div className="relative overflow-hidden rounded border border-line-100">
      <div className={cn("flex items-center gap-3 border-b border-line-100 px-6 py-3", acc(accent).tint)}>
        {index != null ? <IndexNumber value={index} size="sm" /> : null}
        <Icon name="arrow-right" size={16} className={acc(accent).text} />
        <Eyebrow tone={accent}>Resonancias con otros mitos</Eyebrow>
      </div>
      <Motif name={motif} size={220} className="pointer-events-none absolute -bottom-6 -right-8 opacity-[0.05]" aria-hidden="true" />
      <div className="relative px-6 py-5">
        <Prose>
          {ps.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Prose>
      </div>
    </div>
  );
}

/* ---------------- Procedencia — sello de credibilidad ---------------- */
export function ProcedenciaBlock({ region, community, categoryPath }) {
  const origin = [community, region].filter(Boolean).join(", ");
  return (
    <div className="relative overflow-hidden rounded border border-line-100 bg-white p-6">
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }} aria-hidden="true" />
      <span className="pointer-events-none absolute inset-1.5 rounded-sm" style={{ border: "1px solid rgba(189,134,66,0.28)" }} aria-hidden="true" />
      <div className="relative flex items-start gap-3.5">
        <Icon name="map-pin" size={20} className="mt-0.5 shrink-0" style={{ color: GOLD }} />
        <div>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-ink-500">Procedencia</p>
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

/* ---------------- Territorio — figura de mapa con cartela ---------------- */
export function TerritorioBlock({ latitude, longitude, region, community, accent = "jungle", motif = "montana", children }) {
  const approx = latitude == null || longitude == null;
  const caption = [region, community].filter(Boolean).join(" · ") || "Colombia";
  return (
    <div>
      <div className="mb-4 flex items-center gap-2.5">
        <Motif name={motif} size={26} />
        <Eyebrow withRule tone={accent}>
          Territorio
        </Eyebrow>
      </div>
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
    </div>
  );
}

/* ---------------- Palabras clave — coda editorial ---------------- */
export function PalabrasClaveBlock({ keywords = [] }) {
  if (!keywords.length) return null;
  return (
    <div className="border-t border-line-100 pt-6">
      <div className="mb-3 flex items-center gap-2.5">
        <Motif name="hoja" size={22} />
        <Eyebrow>Palabras clave</Eyebrow>
      </div>
      <div className="flex flex-wrap gap-2">
        {keywords.slice(0, 20).map((k, i) => (
          <TagLink key={`${k}-${i}`} href={`/mitos?q=${encodeURIComponent(k)}`} variant="neutral">
            {k}
          </TagLink>
        ))}
      </div>
    </div>
  );
}
