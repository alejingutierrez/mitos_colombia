import { cn } from "../../lib/utils";

/**
 * Atom · Heading
 * Titulares en Manrope (font-display). `level` controla tamaño/peso; nivel 0
 * es el registro hero (grande, apretado). `accent` añade un subrayado corto
 * de acento bajo el título.
 */

const levels = {
  0: "text-[2.6rem] leading-[1.02] md:text-[4rem] font-extrabold tracking-[-0.03em]",
  1: "text-[2rem] leading-[1.08] md:text-[2.75rem] font-extrabold tracking-[-0.02em]",
  2: "text-2xl leading-tight font-bold tracking-[-0.015em]",
  3: "text-lg leading-snug font-bold tracking-[-0.01em]",
  4: "text-base leading-snug font-semibold tracking-[-0.005em]",
};

const accentTones = {
  jungle: "bg-jungle-500",
  river: "bg-river-500",
};

export function Heading({ level = 2, as, accent, className, children, ...props }) {
  const Tag = as || (level === 0 ? "h1" : `h${level}`);
  return (
    <Tag
      className={cn("font-display text-balance text-ink-900", levels[level], className)}
      {...props}
    >
      {children}
      {accent ? (
        <span
          className={cn("mt-3 block h-[3px] w-12", accentTones[accent] || accentTones.jungle)}
          aria-hidden="true"
        />
      ) : null}
    </Tag>
  );
}
