import Image from "next/image";
import Link from "next/link";

const columns = [
  {
    title: "Archivo",
    items: [
      { label: "Todos los mitos", href: "/mitos" },
      { label: "Atlas territorial", href: "/regiones" },
      { label: "Rutas temáticas", href: "/rutas" },
      { label: "Mapa", href: "/mapa" },
    ],
  },
  {
    title: "Narrativas",
    items: [
      { label: "Tarot mitológico", href: "/tarot" },
      { label: "Categorías", href: "/categorias" },
      { label: "Comunidades", href: "/comunidades" },
      { label: "Guardianes del agua", href: "/rutas/guardianes-del-agua" },
    ],
  },
  {
    title: "Proyecto",
    items: [
      { label: "Sobre el proyecto", href: "/sobre-el-proyecto" },
      { label: "Metodología", href: "/metodologia" },
      { label: "Contacto", href: "/contacto" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Privacidad", href: "/privacidad" },
      { label: "Términos", href: "/terminos" },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0a0f0c] text-[#f6e9cf]">
      <div className="mx-auto w-full max-w-[1480px] px-5 py-16 md:px-10 md:py-20">
        <div className="grid gap-10 border-b border-[rgba(246,233,207,0.14)] pb-12 md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] md:gap-10">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/logo_mitos.png"
                alt="Mitos de Colombia"
                width={48}
                height={48}
                className="h-12 w-12 brightness-110"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[rgba(246,233,207,0.55)]">
                  Archivo vivo
                </span>
                <span className="font-display text-lg text-[#f6e9cf]">
                  Mitos de Colombia
                </span>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[rgba(246,233,207,0.72)]">
              Un archivo vivo de la tradición oral colombiana. Relatos de
              territorio, memoria y voz ancestral, curados por región y
              comunidad.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#d8aa62]">
                {col.title}
              </h3>
              <ul className="mt-5 flex flex-col gap-3">
                {col.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-[rgba(246,233,207,0.8)] transition hover:text-[#f6e9cf]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-4 pt-8 text-xs text-[rgba(246,233,207,0.5)] md:flex-row md:items-center">
          <span>
            © {currentYear} Mitos de Colombia · Archivo vivo de la tradición
            oral.
          </span>
          <span className="font-display italic text-[rgba(246,233,207,0.55)]">
            Hecho con memoria en Colombia.
          </span>
        </div>
      </div>
    </footer>
  );
}
