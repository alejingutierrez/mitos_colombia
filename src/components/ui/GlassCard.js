import { cn } from "../../lib/utils";

export function GlassCard({ className, children }) {
  return (
    <div className={cn("glass-card", className)}>
      {children}
    </div>
  );
}
