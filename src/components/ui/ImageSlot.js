import { cn } from "../../lib/utils";

const sizes = {
  card: "h-40",
  compact: "h-32",
  wide: "h-48 md:h-56",
  hero: "h-60 md:h-72",
  large: "h-[27rem] md:h-[30rem]",
};

export function ImageSlot({
  src,
  alt = "",
  size = "card",
  label = "Imagen en proceso",
  className,
}) {
  return (
    <div
      role="img"
      aria-label={src ? alt : label}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/60",
        "bg-white/40 shadow-sm",
        sizes[size] || sizes.card,
        className
      )}
    >
      {src ? (
        <>
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover object-top"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/40 via-transparent to-transparent" />
        </>
      ) : (
        <>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, rgba(30, 120, 94, 0.35), transparent 60%), radial-gradient(circle at 80% 10%, rgba(35, 98, 158, 0.3), transparent 55%), linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(234, 240, 235, 0.55))",
            }}
          />
          <div className="absolute inset-0 border border-white/50" />
          <div className="relative flex h-full items-end justify-between px-4 pb-3 text-[10px] uppercase tracking-[0.3em] text-ink-500">
            <span>{label}</span>
            <span>AI</span>
          </div>
        </>
      )}
    </div>
  );
}
