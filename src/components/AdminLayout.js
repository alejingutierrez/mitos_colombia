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
    label: "Formatear Contenido",
    href: "/admin/format-content",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
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
      <div className="container-wide mt-8">
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
