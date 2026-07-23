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
      className={cn("mx-auto w-full px-5 sm:px-6 lg:px-8", widths[size], className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
