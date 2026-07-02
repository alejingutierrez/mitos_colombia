import Link from "next/link";
import { cn } from "../../lib/utils";
import { Icon } from "./Icon";
import { RING_BUTTON, PRESS } from "./_shared";

/**
 * Atom · IconButton
 * Botón cuadrado solo-ícono (cerrar, menú, compartir, navegación).
 * `label` es obligatorio para accesibilidad (aria-label).
 * Alturas alineadas con Button (sm/md/lg).
 */

const base = cn(
  "inline-flex items-center justify-center rounded",
  PRESS,
  RING_BUTTON,
  "disabled:pointer-events-none disabled:opacity-50"
);

const variants = {
  ghost: "text-ink-700 hover:bg-mist-50 active:bg-mist-100",
  secondary: "border border-line-200 bg-white text-ink-900 hover:bg-mist-50 active:bg-mist-100",
  primary: "bg-jungle-500 text-white hover:bg-jungle-600 active:bg-jungle-700",
};

const sizes = { sm: "h-8 w-8", md: "h-9 w-9", lg: "h-11 w-11" };
const iconSizes = { sm: 16, md: 18, lg: 20 };

export function IconButton({
  icon,
  label,
  variant = "ghost",
  size = "md",
  href,
  className,
  type = "button",
  ...props
}) {
  const classes = cn(base, variants[variant], sizes[size], className);
  const glyph = <Icon name={icon} size={iconSizes[size]} title={label} />;
  if (href) {
    return (
      <Link href={href} aria-label={label} className={classes} {...props}>
        {glyph}
      </Link>
    );
  }
  return (
    <button type={type} aria-label={label} className={classes} {...props}>
      {glyph}
    </button>
  );
}
