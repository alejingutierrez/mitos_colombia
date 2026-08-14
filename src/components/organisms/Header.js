"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE_NAME } from "../../lib/brand";
import { cn } from "../../lib/utils";
import { Container, Icon, IconButton } from "../atoms";
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

export function Header({ active, commerce }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const current = active ?? pathname;

  function isActive(href) {
    return current === href || (current && current.startsWith(href + "/"));
  }

  return (
    // Fondo opaco: con `bg-paper/80 + blur(8px)` el contenido se veía cruzar
    // el header sobre las imágenes de alto contraste del archivo.
    <header className="sticky top-0 z-40 border-b border-line-100 bg-paper">
      <Container size="atlas">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            aria-label={`${SITE_NAME}, inicio`}
            className="inline-flex min-h-11 shrink-0 items-center rounded-sm font-display text-[1.2rem] font-normal leading-none tracking-[-0.02em] text-jungle-700 transition-colors hover:text-jungle-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jungle-500/40 lg:text-[1.35rem]"
          >
            {SITE_NAME}
          </Link>

          {/* Navegación desktop */}
          <nav
            aria-label="Navegación principal"
            className="hidden items-center gap-1 lg:flex"
          >
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                // h-11 (44px) para cumplir el objetivo táctil; el gap pasa de
                // 7 a 1 porque ahora el área clicable vive en el padding.
                className={cn(
                  "inline-flex h-11 items-center rounded-sm px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jungle-500/40",
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
            <div className="hidden lg:block">
              <IconButton icon="search" label="Buscar" href="/mitos" />
            </div>
            <div className="hidden lg:block">
              <IconButton icon="user" label="Mi cuenta" href="/cuenta" />
            </div>
            {commerce ? (
              commerce.onCart ? (
                <button
                  type="button"
                  onClick={commerce.onCart}
                  aria-label={`Abrir carrito, ${commerce.quantity || 0} ${commerce.quantity === 1 ? "producto" : "productos"}`}
                  className="inline-flex h-11 min-w-11 items-center justify-center gap-1 rounded-sm border border-line-200 bg-white px-2 text-ink-900 transition-colors hover:bg-mist-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jungle-500/40"
                >
                  <Icon name="cart" size={18} />
                  <span className="min-w-4 text-center text-xs font-semibold" aria-live="polite">
                    {commerce.quantity || 0}
                  </span>
                </button>
              ) : (
                <Link
                  href={commerce.cartHref || "/tarot/carrito"}
                  aria-label={`Ver carrito, ${commerce.quantity || 0} ${commerce.quantity === 1 ? "producto" : "productos"}`}
                  className="inline-flex h-11 min-w-11 items-center justify-center gap-1 rounded-sm border border-line-200 bg-white px-2 text-ink-900 transition-colors hover:bg-mist-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jungle-500/40"
                >
                  <Icon name="cart" size={18} />
                  <span className="min-w-4 text-center text-xs font-semibold" aria-live="polite">
                    {commerce.quantity || 0}
                  </span>
                </Link>
              )
            ) : null}
            <div className="lg:hidden">
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
          "overflow-hidden border-line-100 bg-paper transition-[max-height,opacity] duration-300 ease-editorial lg:hidden",
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
              <Link
                href="/cuenta"
                onClick={() => setOpen(false)}
                className="block border-b border-line-100 py-3 text-base font-medium text-ink-700 transition-colors hover:text-ink-900"
              >
                Mi cuenta y pedidos
              </Link>
            </nav>
          </div>
        </Container>
      </div>
    </header>
  );
}
