import { cn } from "../../lib/utils";
import { Avatar } from "../atoms/Avatar";

/**
 * Molécula · CommentItem
 * Un comentario: avatar + autor + fecha + cuerpo. Composición limpia sin caja.
 *
 * `dateTime` es la fecha en ISO para el atributo del `<time>`: `date` es lo que
 * se lee ("3 de septiembre de 2026") y `dateTime` lo que se puede máquinar. Sin
 * él, un `<time>` no aporta nada sobre un `<span>`.
 */
export function CommentItem({ author, date, dateTime, avatarSrc, children, className }) {
  return (
    <article className={cn("flex gap-3", className)}>
      <Avatar name={author} src={avatarSrc} size={40} className="shrink-0" />
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline gap-x-2">
          <p className="font-display text-sm font-bold text-ink-900">{author}</p>
          {date ? (
            <time className="text-xs text-ink-500" dateTime={dateTime || undefined}>
              {date}
            </time>
          ) : null}
        </div>
        <div className="mt-1 whitespace-pre-line font-body text-sm leading-relaxed text-ink-700">
          {children}
        </div>
      </div>
    </article>
  );
}
