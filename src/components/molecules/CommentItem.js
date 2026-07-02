import { cn } from "../../lib/utils";
import { Avatar } from "../atoms/Avatar";

/**
 * Molécula · CommentItem
 * Un comentario: avatar + autor + fecha + cuerpo. Composición limpia sin caja.
 */
export function CommentItem({ author, date, avatarSrc, children, className }) {
  return (
    <article className={cn("flex gap-3", className)}>
      <Avatar name={author} src={avatarSrc} size={40} className="shrink-0" />
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline gap-x-2">
          <p className="font-display text-sm font-bold text-ink-900">{author}</p>
          {date ? <time className="text-xs text-ink-500">{date}</time> : null}
        </div>
        <div className="mt-1 font-body text-sm leading-relaxed text-ink-700">{children}</div>
      </div>
    </article>
  );
}
