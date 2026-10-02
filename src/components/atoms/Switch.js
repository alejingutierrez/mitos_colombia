"use client";

import { cn } from "../../lib/utils";

/**
 * Atom · Switch
 * Interruptor on/off controlado. El estado lo maneja el componente padre
 * (pásale `checked` y `onChange`). Es la única pieza con esquina redonda
 * total, por ser un control tipo interruptor.
 */
export function Switch({ checked = false, onChange, disabled, className, label, id, ...props }) {
  const control = (
    <button
      type="button"
      role="switch"
      id={id}
      aria-checked={checked}
      disabled={disabled}
      onClick={() => onChange?.(!checked)}
      className={cn(
        "relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jungle-500/40 focus-visible:ring-offset-2 disabled:opacity-50",
        checked ? "bg-jungle-500" : "bg-line-200",
        !label && className
      )}
      {...props}
    >
      <span
        className={cn(
          "inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform",
          checked ? "translate-x-4" : "translate-x-0.5"
        )}
      />
    </button>
  );
  if (!label) return control;
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      {control}
      <span className="font-body text-sm text-ink-900">{label}</span>
    </span>
  );
}
