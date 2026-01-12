"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { GA_MEASUREMENT_ID, pageview, trackEvent } from "../lib/analytics";

function isAdminPath(pathname) {
  return pathname?.startsWith("/admin");
}

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (!GA_MEASUREMENT_ID || isAdminPath(pathname)) {
      return;
    }
    const query = typeof window !== "undefined" ? window.location.search : "";
    const url = query ? `${pathname}${query}` : pathname;
    pageview(url);
  }, [pathname]);

  useEffect(() => {
    const handleClick = (event) => {
      if (isAdminPath(window.location.pathname)) {
        return;
      }
      const target = event.target.closest("[data-analytics-event]");
      if (!target) return;

      const {
        analyticsEvent,
        analyticsCategory,
        analyticsLabel,
        analyticsValue,
      } = target.dataset;

      if (!analyticsEvent) return;

      trackEvent({
        action: analyticsEvent,
        category: analyticsCategory,
        label: analyticsLabel,
        value: analyticsValue ? Number(analyticsValue) : undefined,
      });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
