"use client";

import { useEffect, useState } from "react";
import HeaderClient from "./HeaderClient";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../lib/utils";

const adminMenuItems = [
  {
    label: "Generar Imágenes",
    href: "/admin",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Imágenes Verticales",
    href: "/admin/vertical-images",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        <rect x="9" y="2" width="6" height="20" rx="1" stroke="currentColor" strokeWidth={2} fill="none"/>
      </svg>
    ),
  },
  {
    label: "Curación de imágenes",
    href: "/admin/curacion-imagenes",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h10" />
      </svg>
    ),
  },
  {
    label: "Tarot",
    href: "/admin/tarot",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="4" y="3" width="16" height="18" rx="2" strokeWidth={2} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 8h8M8 12h6M8 16h4" />
      </svg>
    ),
  },
  {
    label: "Tarot Lecturas",
    href: "/admin/tarot-descriptions",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h10M4 18h8" />
      </svg>
    ),
  },
  {
    label: "Banners Home",
    href: "/admin/home-banners",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth={2} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 9h10M7 13h6" />
      </svg>
    ),
  },
  {
    label: "Geo Ubicaciones",
    href: "/admin/geo-locations",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21s6-5.686 6-10a6 6 0 10-12 0c0 4.314 6 10 6 10z" />
        <circle cx="12" cy="11" r="2.5" stroke="currentColor" strokeWidth={2} />
      </svg>
    ),
  },
  {
    label: "Editor de mitos",
    href: "/admin/myths",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5h12a3 3 0 013 3v10a3 3 0 01-3 3H4V5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h12M4 11h12M4 15h8" />
      </svg>
    ),
  },
  {
    label: "Mitos editoriales",
    href: "/admin/editorial-myths",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5h12a3 3 0 013 3v10a3 3 0 01-3 3H4V5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h12M4 11h12M4 15h8" />
      </svg>
    ),
  },
  {
    label: "Libro editorial",
    href: "/admin/editorial-book",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h12a3 3 0 013 3v13a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 6h7M7 10h7M7 14h4" />
      </svg>
    ),
  },
  {
    label: "Formatear Contenido",
    href: "/admin/format-content",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
      </svg>
    ),
  },
  {
    label: "Descripciones de categorías",
    href: "/admin/category-descriptions",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5h16M4 9h10M4 13h16M4 17h12" />
      </svg>
    ),
  },
  {
    label: "SEO de páginas",
    href: "/admin/seo-pages",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h18M3 12h11M3 19h7M16 16l5-4-5-4" />
      </svg>
    ),
  },
  {
    label: "Mensajes de Contacto",
    href: "/admin/contacto",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 7l9 6 9-6M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7" />
      </svg>
    ),
  },
];

export default function AdminLayout({ children, onLogout }) {
  const pathname = usePathname();
  const [taxonomy, setTaxonomy] = useState({
    communities: [],
    tags: [],
    regions: [],
  });

  useEffect(() => {
    let active = true;

    const loadTaxonomy = async () => {
      try {
        const response = await fetch("/api/taxonomy");
        if (!response.ok) return;
        const data = await response.json();
        if (active && data) {
          setTaxonomy(data);
        }
      } catch (error) {
        console.error("Error loading taxonomy in admin:", error);
      }
    };

    loadTaxonomy();

    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="min-h-screen">
      <HeaderClient initialTaxonomy={taxonomy} />
      <div className="w-full mt-8 pl-[15px] pr-4 lg:pr-6">
        <div className="flex flex-col lg:flex-row gap-6 pb-12">
          {/* Sidebar */}
          <aside className="w-full lg:w-64 shrink-0">
            <div className="glass-card p-6 sticky top-28">
              <div className="mb-6">
                <p className="eyebrow text-jungle-600">Panel de Administración</p>
                <h2 className="mt-2 font-display text-xl text-ink-900">Admin</h2>
              </div>

              <nav className="space-y-2">
                {adminMenuItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-xl transition text-sm font-medium",
                        isActive
                          ? "bg-jungle-600 text-white shadow"
                          : "text-ink-700 hover:bg-jungle-50 hover:text-jungle-900"
                      )}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </nav>

              {onLogout && (
                <div className="mt-8 pt-6 border-t border-ink-500/10">
                  <button
                    onClick={onLogout}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl transition text-sm font-medium text-ember-500 hover:bg-ember-50 hover:text-ember-600 w-full"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    <span>Cerrar Sesión</span>
                  </button>
                </div>
              )}
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1 min-w-0">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
