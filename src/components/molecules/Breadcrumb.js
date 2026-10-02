import Link from "next/link";
import { cn } from "../../lib/utils";
import { Icon } from "../atoms/Icon";

/**
 * Molécula · Breadcrumb
 * Ruta de navegación. `items`: [{ label, href }]. El último es la página actual.
 */
export function Breadcrumb({ items = [], className }) {
  return (
    <nav aria-label="Ruta de navegación" className={cn("flex flex-wrap items-center gap-1.5 text-sm", className)}>
      {items.map((item, i) => {
        const last = i === items.length - 1;
        return (
          <span key={`${item.label}-${i}`} className="inline-flex items-center gap-1.5">
            {last || !item.href ? (
              <span className="font-medium text-ink-700" aria-current={last ? "page" : undefined}>
                {item.label}
              </span>
            ) : (
              <Link href={item.href} className="text-ink-500 transition-colors hover:text-ink-900">
                {item.label}
              </Link>
            )}
            {!last ? <Icon name="chevron-right" size={14} className="text-line-300" /> : null}
          </span>
        );
      })}
    </nav>
  );
}
