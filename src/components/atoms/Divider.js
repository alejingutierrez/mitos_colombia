import { cn } from "../../lib/utils";

/**
 * Atom · Divider
 * Línea divisoria de un pelo (hairline) para separar bloques editoriales.
 */
export function Divider({ className, ...props }) {
  return (
    <hr
      className={cn("border-0 border-t border-line-100", className)}
      {...props}
    />
  );
}
