import Link from "next/link";
import { Container } from "../atoms";
import { SITE_NAME } from "../../lib/brand";
import { cn } from "../../lib/utils";

/**
 * Organism · Footer
 * Pie de página global del sitio (server component, presentacional).
 * Fondo oscuro elegante (ink-900) con contexto editorial, navegación y barra legal.
 *
 * Props:
 * - columns: grupos de enlaces [{ title, links: [{ label, href }] }].
 * - description: texto corto de marca bajo el wordmark.
 * - tagline: frase sutil a la derecha de la barra inferior.
 * - year: año del copyright.
 */

const DEFAULT_COLUMNS = [
  {
    title: "Archivo",
    links: [
      { label: "Todos los mitos", href: "/mitos" },
      { label: "Regiones", href: "/regiones" },
      { label: "Comunidades", href: "/comunidades" },
      { label: "Mapa", href: "/mapa" },
    ],
  },
  {
    title: "Narrativas",
    links: [
      { label: "Categorías", href: "/categorias" },
      { label: "Rutas", href: "/rutas" },
      { label: "Tarot", href: "/tarot" },
    ],
  },
  {
    title: "Proyecto",
    links: [
      { label: "Sobre el proyecto", href: "/sobre-el-proyecto" },
      { label: "Metodología", href: "/metodologia" },
      { label: "Contacto", href: "/contacto" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacidad", href: "/privacidad" },
      { label: "Términos", href: "/terminos" },
    ],
  },
];

export function Footer({
  columns = DEFAULT_COLUMNS,
  description = "Archivo digital de mitos y leyendas de la tradición oral colombiana. Historias por región, comunidad y territorio.",
  tagline = "Archivo vivo de la tradición oral colombiana",
  year = 2026,
  className,
}) {
  return (
    <footer className={cn("bg-ink-900 text-mist-100 py-14", className)}>
      <Container size="atlas">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,2fr)]">
          {/* Wordmark tipográfico y contexto editorial. */}
          <div className="max-w-sm">
            <Link
              href="/"
              aria-label={`${SITE_NAME}, inicio`}
              className="inline-flex flex-col rounded-sm font-display text-[2.4rem] font-normal leading-[0.9] tracking-[-0.025em] text-white transition-colors hover:text-mist-100/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mist-100/50 md:text-[2.75rem]"
            >
              <span aria-hidden="true">Mitos de</span>
              <span aria-hidden="true">Colombia</span>
            </Link>
            <p className="mt-5 max-w-xs font-body text-base leading-relaxed text-mist-100/80">
              {description}
            </p>
          </div>

          {/* Columnas de enlaces.
              Cada grupo es su propio landmark rotulado por su título. Antes los
              títulos eran <h2> de 12px, al mismo nivel del esquema que los
              encabezados de sección de la página. */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {columns.map((column) => {
              const headingId = `footer-${column.title
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/[^a-z0-9]+/g, "-")}`;
              return (
                <nav key={column.title} aria-labelledby={headingId}>
                  <p
                    id={headingId}
                    className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-mist-100/50"
                  >
                    {column.title}
                  </p>
                  <ul>
                    {column.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="inline-flex min-h-[2.25rem] items-center font-body text-sm text-mist-100/80 transition-colors duration-200 ease-editorial hover:text-white"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              );
            })}
          </div>
        </div>

        {/* Barra inferior */}
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-body text-sm text-mist-100/60">
            © {year} {SITE_NAME}
          </p>
          <p className="font-body text-sm text-mist-100/70">{tagline}</p>
        </div>
      </Container>
    </footer>
  );
}
