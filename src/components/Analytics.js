"use client";

import { Suspense, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { GA_MEASUREMENT_ID, pageview, trackEvent } from "../lib/analytics";

function isAdminPath(pathname) {
  return pathname?.startsWith("/admin");
}

function AnalyticsInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!GA_MEASUREMENT_ID || isAdminPath(pathname)) {
      return;
    }
    const query = searchParams?.toString();
    const url = query ? `${pathname}?${query}` : pathname;
    pageview(url);
  }, [pathname, searchParams]);

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

export default function Analytics() {
  return (
    <Suspense fallback={null}>
      <AnalyticsInner />
    </Suspense>
  );
}
