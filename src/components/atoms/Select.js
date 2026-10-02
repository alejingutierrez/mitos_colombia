import { cn } from "../../lib/utils";
import { Icon } from "./Icon";
import { FIELD_BASE, FIELD_INVALID, RING_FIELD, CONTROL_HEIGHTS } from "./_shared";

/**
 * Atom · Select
 * Menú desplegable (filtros de región, comunidad, tema). Chevron custom,
 * misma base y altura que Input.
 */
export function Select({ className, invalid, children, ...props }) {
  return (
    <div className="relative">
      <select
        className={cn(
          FIELD_BASE,
          CONTROL_HEIGHTS.md,
          "cursor-pointer appearance-none pl-3 pr-9",
          RING_FIELD,
          invalid && FIELD_INVALID,
          className
        )}
        aria-invalid={invalid || undefined}
        {...props}
      >
        {children}
      </select>
      <Icon
        name="chevron-down"
        size={16}
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-ink-500"
      />
    </div>
  );
}
