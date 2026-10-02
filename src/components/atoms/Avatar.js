import Image from "next/image";
import { cn } from "../../lib/utils";

/**
 * Atom · Avatar
 * Foto o iniciales de una persona (autores de comentarios). Esquina sutil
 * (rounded-sm) coherente con el sistema editorial.
 */

function initials(name = "") {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function Avatar({ name = "", src, size = 36, className, ...props }) {
  if (src) {
    return (
      <Image
        src={src}
        alt={name}
        width={size}
        height={size}
        className={cn("rounded-sm object-cover", className)}
        {...props}
      />
    );
  }
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-sm bg-jungle-tint font-body font-medium text-jungle-700",
        className
      )}
      style={{ width: size, height: size, fontSize: Math.round(size * 0.4) }}
      aria-hidden={name ? undefined : true}
      {...props}
    >
      {initials(name)}
    </span>
  );
}
