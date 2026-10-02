import { cn } from "../../lib/utils";

export function Badge({ className, children }) {
  return <span className={cn("badge", className)}>{children}</span>;
}
