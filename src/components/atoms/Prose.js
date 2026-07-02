import { cn } from "../../lib/utils";

/**
 * Atom · Prose
 * Envoltura tipográfica para contenido largo (cuerpo de un mito, metodología).
 * Afina el plugin @tailwindcss/typography a los tokens del sistema editorial.
 */
export function Prose({ as: Tag = "div", className, children, ...props }) {
  return (
    <Tag
      className={cn(
        "prose prose-neutral max-w-none",
        "prose-headings:font-display prose-headings:text-ink-900 prose-headings:tracking-tight",
        "prose-p:font-body prose-p:text-ink-700 prose-p:leading-relaxed",
        "prose-li:text-ink-700 prose-strong:text-ink-900",
        "prose-a:font-medium prose-a:text-jungle-600 prose-a:no-underline hover:prose-a:underline",
        "prose-blockquote:border-l-2 prose-blockquote:border-jungle-500 prose-blockquote:not-italic prose-blockquote:font-display prose-blockquote:text-ink-900",
        "prose-img:rounded",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
