"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// Departamentos y ciudades a excluir (no son comunidades indígenas)
const EXCLUDED_COMMUNITIES = [
  "Antioquia", "Bogota", "Boyacá", "Caldas", "Cartagena", "Casanare",
  "Córdoba", "Huila", "Leticia", "Llanos orientales", "Magdalena",
  "Nariño", "San Andrés", "Santander", "Tolima", "Tumaco",
  "Andino", "Caribe", "Orinoquía", "Pacifico", "Varios"
];

const navLinks = [
  { label: "Mitos", href: "/mitos", hasDropdown: true },
  { label: "Categorias", href: "/categorias", hasDropdown: true },
  { label: "Regiones", href: "/regiones", hasDropdown: true },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [taxonomy, setTaxonomy] = useState({ communities: [], tags: [], regions: [] });
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    fetch('/api/taxonomy')
      .then(res => res.json())
      .then(data => setTaxonomy(data))
      .catch(err => console.error('Error fetching taxonomy:', err));
  }, []);

  // Obtener top 10 comunidades indígenas con más mitos
  const getTopCommunities = () => {
    return taxonomy.communities
      .filter(c => !EXCLUDED_COMMUNITIES.includes(c.name))
      .sort((a, b) => b.myth_count - a.myth_count)
      .slice(0, 10);
  };

  // Obtener top 10 tags con más mitos (excluyendo nombres de regiones y "ninguno")
  const getTopTags = () => {
    const regionNames = taxonomy.regions.map(r => r.name.toLowerCase());
    return taxonomy.tags
      .filter(tag => !regionNames.includes(tag.name.toLowerCase()) && tag.name.toLowerCase() !== 'ninguno')
      .slice(0, 10);
  };

  // Obtener todas las regiones alfabéticamente
  const getRegions = () => {
    return [...taxonomy.regions].sort((a, b) => a.name.localeCompare(b.name));
  };

  const getDropdownContent = (label) => {
    if (label === "Mitos") {
      return getTopCommunities().map(community => ({
        name: community.name,
        href: `/comunidades/${community.slug}`,
        count: community.myth_count
      }));
    } else if (label === "Categorias") {
      return getTopTags().map(tag => ({
        name: tag.name,
        href: `/categorias/${tag.slug}`,
        count: tag.myth_count
      }));
    } else if (label === "Regiones") {
      return getRegions().map(region => ({
        name: region.name,
        href: `/regiones/${region.slug}`,
        count: region.myth_count
      }));
    }
    return [];
  };

  return (
    <header className="container-wide pt-8 relative z-[100]">
      <div className="glass-panel flex w-full flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between md:gap-10 md:flex-nowrap">
        <div className="flex items-center justify-between gap-3 md:justify-start">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-jungle-600 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow">
              MC
            </span>
            <span className="block">
              <span className="eyebrow">Archivo vivo</span>
              <span className="block font-display text-lg text-ink-900">
                Mitos de Colombia
              </span>
            </span>
          </Link>

          <button
            type="button"
            aria-label="Abrir menu"
            aria-expanded={open}
            aria-controls="site-menu"
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/70 shadow-sm transition hover:bg-white md:hidden"
            onClick={() => setOpen((prev) => !prev)}
          >
            <span className="sr-only">Menu</span>
            <span
              className={`absolute h-[2px] w-5 rounded-full bg-ink-700 transition duration-300 ${
                open ? "rotate-45" : "-translate-y-2"
              }`}
            />
            <span
              className={`absolute h-[2px] w-5 rounded-full bg-ink-700 transition duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-[2px] w-5 rounded-full bg-ink-700 transition duration-300 ${
                open ? "-rotate-45" : "translate-y-2"
              }`}
            />
          </button>
        </div>

        <nav className="hidden flex-1 items-center justify-center gap-8 md:flex">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link href={link.href} className="nav-link">
                {link.label}
              </Link>

              {link.hasDropdown && activeDropdown === link.label && (
                <div className="absolute left-1/2 top-full z-[110] pt-2 w-64 -translate-x-1/2">
                  <div className="rounded-2xl border border-white/70 bg-white/95 p-4 shadow-xl backdrop-blur-sm">
                    <div className="flex flex-col gap-2">
                      {getDropdownContent(link.label).map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-ink-700 transition hover:bg-jungle-50 hover:text-jungle-900"
                        >
                          <span className="font-medium">{item.name}</span>
                          <span className="text-xs text-ink-500">{item.count}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="glass-panel mt-3 flex flex-col gap-5 px-6 py-5">
          <nav id="site-menu" className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="nav-link text-sm tracking-[0.25em]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
