import { cn } from "../../lib/utils";

/**
 * Atom · Container
 * Envoltura de ancho máximo + padding horizontal consistente para todo el sitio.
 */

const widths = {
  narrow: "max-w-3xl",
  default: "max-w-5xl",
  wide: "max-w-6xl",
  atlas: "max-w-[1460px]",
  full: "max-w-none",
};

export function Container({ as: Tag = "div", size = "default", className, children, ...props }) {
  return (
    <Tag
      // `atlas-gutter` usa --gutter (20 → 56px fluido). Los 32px fijos que
      // había antes dejaban un canal de solo 2,2% en un contenedor de 1460px.
      className={cn("atlas-gutter mx-auto w-full", widths[size], className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
