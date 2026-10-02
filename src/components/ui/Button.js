import Link from "next/link";
import { cn } from "../../lib/utils";

const base =
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full font-semibold uppercase tracking-[0.22em] leading-none transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember-400/40";

const variants = {
  primary:
    "bg-ink-900 text-[#f1ede3] hover:-translate-y-[1px] hover:shadow-[0_14px_32px_rgba(18,22,24,0.25)]",
  accent:
    "bg-[#d8aa62] text-[#0a0f0c] hover:-translate-y-[1px] hover:shadow-[0_14px_32px_rgba(189,134,66,0.35)]",
  outline:
    "border border-[rgba(18,22,24,0.14)] text-ink-900 bg-transparent hover:bg-[rgba(18,22,24,0.06)]",
  subtle:
    "border border-white/70 bg-white/70 text-ink-900 backdrop-blur-md hover:bg-white/90",
  ghost:
    "border border-[rgba(246,233,207,0.35)] text-[#f6e9cf] bg-transparent hover:bg-[rgba(246,233,207,0.08)]",
};

const sizes = {
  sm: "px-4 py-2.5 text-[10px]",
  md: "px-5 py-3 text-[11px]",
  lg: "px-6 py-3.5 text-[12px]",
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
