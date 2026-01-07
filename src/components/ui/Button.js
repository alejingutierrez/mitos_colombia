import Link from "next/link";
import { cn } from "../../lib/utils";

const base =
  "inline-flex items-center justify-center rounded-full text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember-400/40";

const variants = {
  primary: "bg-jungle-600 text-white shadow hover:bg-jungle-500",
  accent: "bg-ember-500 text-white shadow hover:bg-ember-400",
  outline:
    "border border-ink-500/25 text-ink-700 hover:border-ink-500/50 hover:text-ink-900",
  subtle:
    "border border-white/70 bg-white/70 text-ink-700 hover:bg-white/90",
};

const sizes = {
  sm: "px-4 py-2 text-xs",
  md: "px-5 py-2.5",
  lg: "px-6 py-3",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  type = "button",
  ...props
}) {
  return (
    <button
      type={type}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  ...props
}) {
  return (
    <Link
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}
