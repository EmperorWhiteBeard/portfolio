import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md";
  icon?: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

export function Button({
  children,
  href,
  onClick,
  variant = "secondary",
  size = "md",
  icon,
  className,
  target,
  rel,
  type = "button",
  disabled,
}: ButtonProps) {
  const classes = clsx(
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 whitespace-nowrap",
    size === "md" ? "px-4 py-2.5 text-sm" : "px-3 py-1.5 text-xs",
    variant === "primary" &&
      "bg-accent text-[#0a0e13] hover:bg-accent-dim shadow-[0_0_0_1px_rgba(255,153,0,0.3)]",
    variant === "secondary" &&
      "border border-border bg-panel text-text-primary hover:border-border-strong hover:bg-panel-hover",
    variant === "ghost" &&
      "text-text-secondary hover:text-accent",
    disabled && "opacity-50 cursor-not-allowed pointer-events-none",
    className
  );

  if (href) {
    return (
      <a href={href} className={classes} target={target} rel={rel}>
        {icon}
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {icon}
      {children}
    </button>
  );
}
