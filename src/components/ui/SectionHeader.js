import { cn } from "../../lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}) {
  const alignClass = align === "center" ? "items-center text-center" : "";

  return (
    <div className={cn("flex flex-col gap-3", alignClass, className)}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      {title ? <h2 className="section-title">{title}</h2> : null}
      {description ? <p className="section-body max-w-2xl">{description}</p> : null}
    </div>
  );
}
