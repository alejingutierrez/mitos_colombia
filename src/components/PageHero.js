import Link from "next/link";

/**
 * PageHero — editorial hero V3 reutilizable para páginas de archivo.
 *
 * Props:
 * - num: número de sección (∘ 01)
 * - eyebrow: pequeño rótulo en mayúsculas
 * - title: string o JSX (puede contener <em> para acento ember)
 * - body: párrafo descriptivo
 * - meta: array de { label, value } pequeños metadatos en línea
 * - actions: array de { href, label, variant: "primary"|"ember"|"outline"|"subtle" }
 * - children: contenido extra debajo del bloque principal
 * - align: "left" | "center"
 */
export default function PageHero({
  num,
  eyebrow,
  title,
  body,
  meta,
  actions,
  children,
  align = "left",
}) {
  const alignCenter = align === "center";

  return (
    <section className="relative pt-24 pb-12 md:pt-28 md:pb-20">
      {num != null ? (
        <span
          className="page-num absolute left-4 top-12 md:left-10 md:top-16"
          aria-hidden="true"
        >
          ∘ {String(num).padStart(2, "0")}
        </span>
      ) : null}
      <div
        className={`mx-auto w-full max-w-[1280px] px-5 md:px-10 ${
          alignCenter ? "text-center" : ""
        }`}
      >
        <div
          className={`flex flex-col gap-6 md:gap-7 ${
            alignCenter ? "items-center" : "items-start"
          }`}
        >
          <span className="page-rule-accent" />
          {eyebrow ? (
            <span className="eyebrow">{eyebrow}</span>
          ) : null}
          {title ? <h1 className="page-display">{title}</h1> : null}
          {body ? (
            <p
              className={`max-w-[58ch] text-base leading-[1.7] text-ink-700 md:text-lg ${
                alignCenter ? "mx-auto" : ""
              }`}
            >
              {body}
            </p>
          ) : null}
          {meta && meta.length > 0 ? (
            <div
              className={`flex flex-wrap items-center gap-x-5 gap-y-3 text-[11px] uppercase tracking-[0.18em] text-ink-500 ${
                alignCenter ? "justify-center" : ""
              }`}
            >
              {meta.map((m, i) => (
                <span
                  key={`${m.label}-${i}`}
                  className="inline-flex items-center gap-2"
                >
                  <span>{m.label}</span>
                  {m.value ? (
                    <strong className="font-semibold text-ink-900">
                      {m.value}
                    </strong>
                  ) : null}
                </span>
              ))}
            </div>
          ) : null}
          {actions && actions.length > 0 ? (
            <div className="mt-2 flex flex-wrap gap-3">
              {actions.map((a, i) => (
                <Link
                  key={`${a.href}-${i}`}
                  href={a.href}
                  className={`v3-btn v3-btn-${a.variant || "primary"}`}
                >
                  {a.label}
                  {a.arrow !== false ? (
                    <span aria-hidden="true">→</span>
                  ) : null}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
        {children ? <div className="mt-10 md:mt-14">{children}</div> : null}
      </div>
    </section>
  );
}
