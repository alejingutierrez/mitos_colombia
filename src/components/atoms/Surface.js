import { cn } from "../../lib/utils";

/**
 * Atom · Surface
 * Panel base con borde hairline y esquina editorial. Primitiva para cards,
 * paneles y cajas de contenido.
 * - `hover`: realce sutil de borde.
 * - `interactive`: elevación premium al hover (lift + sombra de difusión),
 *   para cards clicables. Usa `group` para coordinar hijos (flechas, imágenes).
 */
export function Surface({
  as: Tag = "div",
  hover = false,
  interactive = false,
  className,
  children,
  ...props
}) {
  return (
    <Tag
      className={cn(
        "rounded border border-line-100 bg-white",
        hover && "transition-colors duration-150 hover:border-line-200",
        interactive &&
          "group transition duration-300 ease-editorial hover:-translate-y-0.5 hover:border-line-200 hover:shadow-float",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
