import { cn } from "../../lib/utils";

/**
 * Atom · Heading
 * Titulares en Asimovian (font-display). `level` controla tamaño; nivel 0
 * es el registro hero (grande, apretado). `accent` añade un subrayado corto
 * de acento bajo el título.
 */

const levels = {
  0: "text-[2.5rem] leading-[1.02] md:text-[4.5rem] tracking-[-0.018em]",
  1: "text-[2rem] leading-[1.06] md:text-[2.75rem] tracking-[-0.014em]",
  2: "text-2xl leading-[1.1] tracking-[-0.01em]",
  3: "text-lg leading-[1.14] tracking-[-0.008em]",
  4: "text-base leading-[1.18] tracking-[-0.005em]",
};

const accentTones = {
  jungle: "bg-jungle-500",
  river: "bg-river-500",
};

export function Heading({ level = 2, as, accent, className, children, ...props }) {
  const Tag = as || (level === 0 ? "h1" : `h${level}`);
  return (
    <Tag
      className={cn("font-display text-balance text-jungle-700", levels[level], className)}
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
