import { cn } from "../../lib/utils";

/**
 * Atom · Text
 * Texto de cuerpo en Inter (font-body). `size` y `tone` controlan escala y color.
 */

const sizes = {
  lg: "text-lg leading-relaxed",
  base: "text-base leading-relaxed",
  sm: "text-sm leading-relaxed",
  xs: "text-xs leading-normal",
};

const tones = {
  default: "text-ink-700",
  strong: "text-ink-900",
  muted: "text-ink-500",
};

export function Text({
  as: Tag = "p",
  size = "base",
  tone = "default",
  className,
  children,
  ...props
}) {
  return (
    <Tag
      className={cn("font-body", sizes[size], tones[tone], className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
