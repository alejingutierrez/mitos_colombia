import { cn } from "../../lib/utils";
import { Icon } from "./Icon";

/**
 * Atom · Callout
 * Aviso en línea (procedencia de un mito, nota de metodología, dato del mapa).
 * Borde completo + fondo de tinte (coherente con las esquinas editoriales).
 */

const variants = {
  note: { box: "border-line-200 bg-mist-50", title: "text-ink-900", icon: "text-ink-500" },
  source: { box: "border-jungle-500/20 bg-jungle-tint", title: "text-jungle-700", icon: "text-jungle-600" },
  info: { box: "border-river-500/20 bg-river-tint", title: "text-river-700", icon: "text-river-600" },
};

export function Callout({ variant = "note", icon = "map-pin", title, className, children, ...props }) {
  const v = variants[variant] || variants.note;
  return (
    <div className={cn("flex gap-3 rounded border p-4", v.box, className)} {...props}>
      {icon ? <Icon name={icon} size={18} className={cn("mt-0.5 shrink-0", v.icon)} /> : null}
      <div className="min-w-0">
        {title ? (
          <p className={cn("mb-0.5 font-body text-sm font-semibold", v.title)}>{title}</p>
        ) : null}
        <div className="font-body text-sm leading-relaxed text-ink-700">{children}</div>
      </div>
    </div>
  );
}
