import { cn } from "../../lib/utils";

/**
 * Atom · Marquee
 * Banda kinética infinita (nombres de motivos, lema, taxonomía). Pausa al hover.
 * Duplica el contenido para un bucle sin costuras. CSS puro (sin JS).
 */
export function Marquee({ children, speed = 32, className, itemClassName, ...props }) {
  const content = (
    <span className={cn("inline-flex items-center", itemClassName)} aria-hidden="true">
      {children}
    </span>
  );
  return (
    <div className={cn("mc-marquee w-full", className)} {...props}>
      <div className="mc-marquee-track" style={{ "--mc-marquee-dur": `${speed}s` }}>
        {content}
        {content}
      </div>
    </div>
  );
}
