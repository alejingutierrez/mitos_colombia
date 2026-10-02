import NextLink from "next/link";
import { cn } from "../../lib/utils";

/**
 * Atom · TextLink
 * Enlace de texto con subrayado que se dibuja de izquierda a derecha al hover.
 * `external` renderiza <a> con target/rel; interno usa next/link.
 */

const base =
  "link-underline font-medium text-jungle-600 transition-colors hover:text-jungle-700 focus-visible:outline-none";

export function TextLink({ href, external = false, className, children, ...props }) {
  const classes = cn(base, className);
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...props}>
        {children}
      </a>
    );
  }
  return (
    <NextLink href={href} className={classes} {...props}>
      {children}
    </NextLink>
  );
}
