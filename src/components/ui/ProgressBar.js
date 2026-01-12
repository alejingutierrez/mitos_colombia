import { cn } from "../../lib/utils";

export function ProgressBar({
  current = 0,
  total = 0,
  label,
  className,
  barClassName,
  showPercent = true,
  indeterminate = false,
}) {
  if (!indeterminate && (!total || total <= 0)) {
    return null;
  }

  const percent = indeterminate
    ? 66
    : Math.min(100, Math.round((Number(current) / Number(total)) * 100));

  return (
    <div className={cn("space-y-2", className)}>
      {label ? (
        <p className="text-xs uppercase tracking-[0.3em] text-ink-500">{label}</p>
      ) : null}
      <div className="h-2 w-full overflow-hidden rounded-full bg-ink-200/70">
        <div
          className={cn(
            "h-full rounded-full bg-jungle-600 transition-all duration-500",
            indeterminate ? "animate-pulse" : "",
            barClassName
          )}
          style={{ width: `${percent}%` }}
        />
      </div>
      {showPercent && !indeterminate && total > 0 ? (
        <p className="text-xs text-ink-600">
          {percent}% ({current}/{total})
        </p>
      ) : null}
    </div>
  );
}
