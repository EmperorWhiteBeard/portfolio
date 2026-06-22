import { ReactNode } from "react";
import clsx from "clsx";

export function Badge({
  children,
  variant = "default",
  className,
}: {
  children: ReactNode;
  variant?: "default" | "accent" | "status";
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-mono",
        variant === "default" &&
          "border-border bg-bg-elevated text-text-secondary",
        variant === "accent" &&
          "border-accent/30 bg-accent/10 text-accent",
        variant === "status" &&
          "border-status/30 bg-status/10 text-status",
        className
      )}
    >
      {children}
    </span>
  );
}
