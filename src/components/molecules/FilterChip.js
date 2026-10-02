import { cn } from "../../lib/utils";
import { Icon } from "../atoms/Icon";

/**
 * Molécula · FilterChip
 * Filtro activo removible. `onRemove` se dispara al pulsar la X.
 */
export function FilterChip({ label, value, onRemove, className, ...props }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-sm border border-jungle-500/20 bg-jungle-tint py-1 pl-2.5 pr-1 text-xs font-medium text-jungle-700",
        className
      )}
      {...props}
    >
      {label ? <span className="text-jungle-600/80">{label}:</span> : null}
      <span>{value}</span>
      {onRemove ? (
        <button
          type="button"
          onClick={onRemove}
          aria-label={`Quitar filtro ${value}`}
          className="inline-flex h-5 w-5 items-center justify-center rounded-sm text-jungle-600 transition-colors hover:bg-jungle-500/15"
        >
          <Icon name="x" size={13} />
        </button>
      ) : null}
    </span>
  );
}
