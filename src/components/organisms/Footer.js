import Link from "next/link";
import { Container, Motif } from "../atoms";
import { cn } from "../../lib/utils";

/**
 * Organism · Footer
 * Pie de página global del sitio (server component, presentacional).
 * Fondo oscuro elegante (ink-900) con la marca, columnas de navegación y barra legal.
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
      <Container size="wide">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,2fr)]">
          {/* Bloque de marca */}
          <div className="max-w-sm">
            <Link
              href="/"
              className="inline-flex items-center gap-3 transition-opacity duration-200 ease-editorial hover:opacity-90"
            >
              <span className="inline-flex items-center justify-center rounded bg-white/90 p-1.5">
                <Motif name="jaguar" size={32} />
              </span>
              <span className="font-display text-lg font-bold tracking-tight text-mist-50">
                Mitos de Colombia
              </span>
            </Link>
            <p className="mt-4 font-body text-sm leading-relaxed text-mist-100/70">
              {description}
            </p>
          </div>

          {/* Columnas de enlaces */}
          <nav aria-label="Pie de página" className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {columns.map((column) => (
              <div key={column.title}>
                <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-mist-100/50">
                  {column.title}
                </h2>
                <ul className="space-y-2">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="font-body text-sm text-mist-100/80 transition-colors duration-200 ease-editorial hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Barra inferior */}
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-body text-sm text-mist-100/60">
            © {year} Mitos de Colombia
          </p>
          <p className="font-body text-sm text-mist-100/40">{tagline}</p>
        </div>
      </Container>
    </footer>
  );
}
