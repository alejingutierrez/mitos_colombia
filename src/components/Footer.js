import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-32 w-full border-t border-ink-200/50 bg-gradient-to-b from-paper-100 to-ink-50/30">
      <div className="container-wide py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <Image 
                src="/logo_mitos.png" 
                alt="Mitos de Colombia" 
                width={48} 
                height={48}
                className="h-12 w-12"
              />
              <span className="block">
                <span className="eyebrow">Archivo vivo</span>
                <span className="block font-display text-lg text-ink-900">
                  Mitos de Colombia
                </span>
              </span>
            </div>
            <p className="mt-4 text-sm text-ink-600 leading-relaxed">
              Una coleccion digital de relatos ancestrales colombianos,
              preservando la memoria cultural de nuestros territorios.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.3em] text-ink-500">
              Explorar
            </h3>
            <nav className="mt-4 flex flex-col gap-3">
              <Link href="/mitos" className="text-sm text-ink-700 transition hover:text-jungle-600">
                Todos los mitos
              </Link>
              <Link href="/mapa" className="text-sm text-ink-700 transition hover:text-jungle-600">
                Mapa
              </Link>
              <Link href="/regiones" className="text-sm text-ink-700 transition hover:text-jungle-600">
                Regiones
              </Link>
              <Link href="/categorias" className="text-sm text-ink-700 transition hover:text-jungle-600">
                Categorias
              </Link>
              <Link href="/comunidades" className="text-sm text-ink-700 transition hover:text-jungle-600">
                Comunidades
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.3em] text-ink-500">
              Rutas tematicas
            </h3>
            <nav className="mt-4 flex flex-col gap-3">
              <Link href="/rutas/guardianes-del-agua" className="text-sm text-ink-700 transition hover:text-jungle-600">
                Guardianes del agua
              </Link>
              <Link href="/rutas/cartografia-selva" className="text-sm text-ink-700 transition hover:text-jungle-600">
                Cartografia de la selva
              </Link>
              <Link href="/rutas/bestiario-colombiano" className="text-sm text-ink-700 transition hover:text-jungle-600">
                Bestiario colombiano
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.3em] text-ink-500">
              Acerca de
            </h3>
            <nav className="mt-4 flex flex-col gap-3">
              <Link href="/sobre-el-proyecto" className="text-sm text-ink-700 transition hover:text-jungle-600">
                Sobre el proyecto
              </Link>
              <Link href="/metodologia" className="text-sm text-ink-700 transition hover:text-jungle-600">
                Metodologia
              </Link>
              <Link href="/contacto" className="text-sm text-ink-700 transition hover:text-jungle-600">
                Contacto
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink-200/50 pt-8 text-center md:flex-row md:text-left">
          <p className="text-sm text-ink-500">
            {currentYear} Mitos de Colombia. Preservando la memoria cultural.
          </p>
          <div className="flex gap-6">
            <Link href="/privacidad" className="text-sm text-ink-500 transition hover:text-ink-700">
              Privacidad
            </Link>
            <Link href="/terminos" className="text-sm text-ink-500 transition hover:text-ink-700">
              Terminos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
