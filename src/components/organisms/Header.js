"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../../lib/utils";
import { Container, IconButton } from "../atoms";
import { SearchBox } from "../molecules";

/**
 * Organismo · Header
 * Encabezado global del sitio. Sticky, fondo translúcido con backdrop-blur y
 * borde inferior sutil. En desktop muestra la navegación principal + búsqueda;
 * en móvil colapsa a un panel desplegable con enlaces grandes y un SearchBox.
 *
 * Presentacional y props-driven: no hace fetching. La ruta activa se pasa por
 * `active` (href) para resaltar el enlace correspondiente.
 */

const NAV_LINKS = [
  { href: "/mitos", label: "Mitos" },
  { href: "/regiones", label: "Regiones" },
  { href: "/comunidades", label: "Comunidades" },
  { href: "/categorias", label: "Categorías" },
  { href: "/rutas", label: "Rutas" },
  { href: "/mapa", label: "Mapa" },
];

export function Header({ active }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const current = active ?? pathname;

  function isActive(href) {
    return current === href || (current && current.startsWith(href + "/"));
  }

  return (
    <header className="sticky top-0 z-40 border-b border-line-100 bg-paper/90 backdrop-blur supports-[backdrop-filter]:bg-paper/80">
      <Container size="wide">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Wordmark */}
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="group inline-flex items-center gap-2.5 rounded-sm text-ink-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jungle-500/40"
          >
            <Image
              src="/logo_mitos.png"
              alt=""
              width={36}
              height={36}
              className="h-8 w-8 rounded-sm object-contain transition-transform duration-200 group-hover:scale-[1.03] md:h-9 md:w-9"
              priority
            />
            <span className="font-display text-[17px] font-extrabold tracking-tight leading-none">
              Mitos de Colombia
            </span>
          </Link>

          {/* Navegación desktop */}
          <nav
            aria-label="Navegación principal"
            className="hidden items-center gap-7 md:flex"
          >
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "link-underline text-sm font-medium transition-colors",
                  isActive(item.href)
                    ? "text-jungle-700"
                    : "text-ink-700 hover:text-ink-900"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Acciones derecha */}
          <div className="flex items-center gap-1">
            <div className="hidden md:block">
              <IconButton icon="search" label="Buscar" href="/mitos" />
            </div>
            <div className="md:hidden">
              <IconButton
                icon={open ? "x" : "menu"}
                label={open ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={open}
                aria-controls="mobile-menu"
                onClick={() => setOpen((v) => !v)}
              />
            </div>
          </div>
        </div>
      </Container>

      {/* Panel móvil desplegable */}
      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden border-line-100 bg-paper transition-[max-height,opacity] duration-300 ease-editorial md:hidden",
          open ? "max-h-[520px] border-b opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <Container size="wide">
          <div className="py-4">
            <SearchBox
              size="md"
              placeholder="Buscar un mito, región o tema…"
            />
            <nav aria-label="Navegación móvil" className="mt-2">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "block border-b border-line-100 py-3 text-base font-medium transition-colors last:border-b-0",
                    isActive(item.href)
                      ? "text-jungle-700"
                      : "text-ink-700 hover:text-ink-900"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </Container>
      </div>
    </header>
  );
}
