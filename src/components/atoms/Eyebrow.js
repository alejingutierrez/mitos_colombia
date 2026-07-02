import { cn } from "../../lib/utils";

/**
 * Atom · Eyebrow
 * Etiqueta breve en mayúsculas con tracking amplio (kicker editorial).
 * `withRule` antepone una regla corta para el look de encabezado de sección.
 */

const tones = {
  default: "text-ink-500",
  jungle: "text-jungle-600",
  river: "text-river-600",
};

const ruleTones = {
  default: "bg-line-300",
  jungle: "bg-jungle-500",
  river: "bg-river-500",
};

export function Eyebrow({
  as: Tag = "p",
  tone = "default",
  withRule = false,
  className,
  children,
  ...props
}) {
  return (
    <Tag
      className={cn(
        "flex items-center font-body text-[11px] font-semibold uppercase tracking-[0.2em]",
        tones[tone],
        className
      )}
      {...props}
    >
      {withRule ? (
        <span className={cn("mr-3 h-px w-6 shrink-0", ruleTones[tone])} aria-hidden="true" />
      ) : null}
      {children}
    </Tag>
  );
}
