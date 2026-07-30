"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../../lib/utils";
import { BRAND_MARK, SITE_NAME } from "../../lib/brand";
import { Container } from "../atoms/Container";
import { IconButton } from "../atoms/IconButton";
import { SearchBox } from "../molecules/SearchBox";

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
      <Container size="atlas">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Wordmark */}
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="group inline-flex min-h-11 items-center gap-2.5 rounded-sm text-ink-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jungle-500/40"
          >
            <span
              aria-hidden="true"
              className="font-display text-[2rem] font-normal leading-none text-jungle-700 transition-transform duration-200 group-hover:scale-[1.03]"
            >
              {BRAND_MARK}
            </span>
            <span className="font-display text-[1.2rem] font-normal leading-none tracking-[-0.015em] md:text-[1.3rem]">
              {SITE_NAME}
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
                  "link-underline inline-flex min-h-11 items-center text-sm font-medium transition-colors",
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
        <Container size="atlas">
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
