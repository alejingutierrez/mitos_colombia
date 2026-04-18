"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { filterAllowedCommunities } from "../lib/communityFilters";
import { formatCategoryName } from "../lib/formatters";

const navLinks = [
  { label: "Mitos", href: "/mitos", hasDropdown: false },
  { label: "Regiones", href: "/regiones", hasDropdown: true },
  { label: "Comunidades", href: "/comunidades", hasDropdown: true },
  { label: "Categorías", href: "/categorias", hasDropdown: true },
  { label: "Rutas", href: "/rutas", hasDropdown: false },
  { label: "Mapa", href: "/mapa", hasDropdown: false },
];

export default function HeaderClient({ initialTaxonomy }) {
  const [open, setOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [taxonomy, setTaxonomy] = useState(
    initialTaxonomy || { communities: [], tags: [], regions: [] }
  );
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (initialTaxonomy) setTaxonomy(initialTaxonomy);
  }, [initialTaxonomy]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const minCount = 6;

  const getCommunities = () =>
    filterAllowedCommunities(taxonomy.communities, minCount).sort(
      (a, b) => Number(b.myth_count) - Number(a.myth_count)
    );

  const getTopCommunities = () => getCommunities().slice(0, 10);

  const getTopTags = () => {
    const regionNames = taxonomy.regions.map((r) => r.name.toLowerCase());
    return taxonomy.tags
      .filter(
        (tag) =>
          Number(tag.myth_count || 0) >= minCount &&
          !regionNames.includes(tag.name.toLowerCase()) &&
          tag.name.toLowerCase() !== "ninguno"
      )
      .slice(0, 10);
  };

  const getRegions = () =>
    [...taxonomy.regions].sort((a, b) => a.name.localeCompare(b.name));

  const getDropdownContent = (label) => {
    if (label === "Comunidades") {
      const communities = getCommunities();
      return [
        {
          name: "Ver todas",
          href: "/comunidades",
          count: communities.length,
          isAll: true,
        },
        ...getTopCommunities().map((c) => ({
          name: c.name,
          href: `/comunidades/${c.slug}`,
          count: c.myth_count,
        })),
      ];
    }
    if (label === "Categorías") {
      const allTags = taxonomy.tags.filter((tag) => {
        const regionNames = taxonomy.regions.map((r) => r.name.toLowerCase());
        return (
          Number(tag.myth_count || 0) >= minCount &&
          !regionNames.includes(tag.name.toLowerCase()) &&
          tag.name.toLowerCase() !== "ninguno"
        );
      });
      return [
        {
          name: "Ver todas",
          href: "/categorias",
          count: allTags.length,
          isAll: true,
        },
        ...getTopTags().map((tag) => ({
          name: tag.name,
          href: `/categorias/${tag.slug}`,
          count: tag.myth_count,
        })),
      ];
    }
    if (label === "Regiones") {
      return getRegions().map((r) => ({
        name: r.name,
        href: `/regiones/${r.slug}`,
        count: r.myth_count,
      }));
    }
    return [];
  };

  const toggleMenu = () => {
    setOpen((prev) => {
      const next = !prev;
      if (!next) setMobileExpanded(null);
      return next;
    });
  };

  const headerBg = scrolled
    ? "bg-[rgba(241,237,227,0.85)] backdrop-blur-xl border-b border-[rgba(18,22,24,0.1)]"
    : "bg-transparent border-b border-transparent";

  return (
    <header
      className={`sticky top-0 z-[100] w-full transition-[background,border-color] duration-300 ${headerBg}`}
    >
      <div className="mx-auto flex w-full max-w-[1480px] items-center justify-between gap-4 px-4 py-3 md:px-10 md:py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo_mitos.png"
            alt="Mitos de Colombia"
            width={44}
            height={44}
            className="h-10 w-10 md:h-11 md:w-11"
            priority
          />
          <span className="hidden flex-col leading-tight md:flex">
            <span className="font-display text-[17px] font-semibold tracking-tight text-ink-900">
              Mitos de Colombia
            </span>
            <span className="mt-0.5 text-[10px] uppercase tracking-[0.3em] text-ink-500">
              Archivo vivo
            </span>
          </span>
          <span className="flex flex-col leading-tight md:hidden">
            <span className="font-display text-base font-semibold tracking-tight text-ink-900">
              Mitos de Colombia
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={link.href}
                className="text-[12px] uppercase tracking-[0.24em] text-ink-700 transition hover:text-ink-900"
              >
                {link.label}
              </Link>
              {link.hasDropdown && activeDropdown === link.label && (
                <div className="absolute left-1/2 top-full z-[110] w-64 -translate-x-1/2 pt-3">
                  <div className="rounded-2xl border border-white/70 bg-white/95 p-4 shadow-xl backdrop-blur-sm">
                    <div className="flex flex-col gap-1">
                      {getDropdownContent(link.label).map((item) => {
                        const displayName = item.isAll
                          ? item.name
                          : formatCategoryName(item.name);
                        return (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-ink-700 transition hover:bg-jungle-50 hover:text-jungle-900"
                          >
                            <span
                              className={
                                item.isAll ? "font-semibold" : "font-medium"
                              }
                            >
                              {displayName}
                            </span>
                            <span className="text-xs text-ink-500">
                              {item.count}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <Link
            href="/mitos"
            className="hidden items-center gap-2 rounded-full bg-ink-900 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f1ede3] transition hover:-translate-y-[1px] hover:shadow-lg lg:inline-flex"
          >
            Entrar al archivo <span aria-hidden="true">→</span>
          </Link>

          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="site-menu"
            className="relative flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-[rgba(18,22,24,0.12)] bg-white/90 text-ink-900 shadow-sm transition hover:bg-white lg:hidden"
            onClick={toggleMenu}
          >
            <span className="sr-only">Menú</span>
            <span
              className={`absolute block h-[2px] w-5 rounded-full bg-ink-900 transition duration-300 ${
                open ? "rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`absolute block h-[2px] w-5 rounded-full bg-ink-900 transition duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute block h-[2px] w-5 rounded-full bg-ink-900 transition duration-300 ${
                open ? "-rotate-45" : "translate-y-1.5"
              }`}
            />
          </button>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 top-[68px] z-[99] bg-[rgba(241,237,227,0.98)] backdrop-blur-xl lg:hidden"
          id="site-menu"
        >
          <div className="mx-auto flex h-full w-full max-w-[1480px] flex-col gap-6 overflow-y-auto px-5 py-8">
            {navLinks.map((link) => {
              const dropdownItems = link.hasDropdown
                ? getDropdownContent(link.label)
                : [];
              const [allItem, ...restItems] = dropdownItems;
              const limitedItems = allItem
                ? [allItem, ...restItems.slice(0, 6)]
                : restItems.slice(0, 6);
              const isExpanded = mobileExpanded === link.label;
              return (
                <div
                  key={link.label}
                  className="flex flex-col gap-3 border-b border-[rgba(18,22,24,0.08)] pb-5"
                >
                  <div className="flex items-center justify-between">
                    <Link
                      href={link.href}
                      className="font-display text-3xl text-ink-900"
                      onClick={() => {
                        setOpen(false);
                        setMobileExpanded(null);
                      }}
                    >
                      {link.label}
                    </Link>
                    {link.hasDropdown && (
                      <button
                        type="button"
                        aria-label={`Ver ${link.label}`}
                        aria-expanded={isExpanded}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(18,22,24,0.12)] bg-white/70 text-ink-700"
                        onClick={() =>
                          setMobileExpanded((prev) =>
                            prev === link.label ? null : link.label
                          )
                        }
                      >
                        <span
                          className={`transition ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        >
                          ▾
                        </span>
                      </button>
                    )}
                  </div>
                  {link.hasDropdown && isExpanded && limitedItems.length > 0 && (
                    <div className="ml-1 flex flex-col gap-2 rounded-2xl border border-white/60 bg-white/70 p-4 shadow-sm">
                      {limitedItems.map((item) => {
                        const displayName = item.isAll
                          ? item.name
                          : formatCategoryName(item.name);
                        return (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-center justify-between text-sm text-ink-700 hover:text-ink-900"
                            onClick={() => {
                              setOpen(false);
                              setMobileExpanded(null);
                            }}
                          >
                            <span
                              className={
                                item.isAll ? "font-semibold" : "font-medium"
                              }
                            >
                              {displayName}
                            </span>
                            <span className="text-xs text-ink-500">
                              {item.count}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}

            <Link
              href="/mitos"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-ink-900 px-6 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#f1ede3]"
              onClick={() => setOpen(false)}
            >
              Entrar al archivo <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
