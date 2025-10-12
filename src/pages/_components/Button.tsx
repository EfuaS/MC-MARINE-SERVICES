import { forwardRef, type ButtonHTMLAttributes } from "react";
import { type LucideIcon } from "lucide-react";
import { cn } from "@sglara/cn";

type ButtonProps = {
  label: string;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  variant?:
    | "primary"
    | "secondary"
    | "destructive"
    | "outline"
    | "ghost"
    | "link"
    | "success"
    | "warning"
    | "danger";
  size?: "sm" | "md" | "lg" | "default" | "icon" | "xs" | "xl";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      label,
      size = "default",
      variant = "primary",
      icon: Icon,
      iconPosition = "left",
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex gap-2 hover:cursor-pointer items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          className,
          size === "default" && "h-10 px-4 py-2",
          size === "sm" && "h-9 rounded-md px-3",
          size === "lg" && "h-11 rounded-md px-8",
          size === "icon" && "h-10 w-10",
          size === "xs" && "h-8 rounded-md px-2 text-xs",
          size === "xl" && "h-12 rounded-md px-10 text-base",
          variant === "primary" && "text-white bg-primary hover:bg-primary/90",
          variant === "secondary" &&
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          variant === "destructive" &&
            "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          variant === "outline" &&
            "border border-input hover:bg-accent hover:text-accent-foreground",
          variant === "ghost" && "hover:bg-accent hover:text-accent-foreground",
          variant === "link" &&
            "text-primary underline-offset-4 hover:underline",
          variant === "success" &&
            "bg-success text-success-foreground hover:bg-success/90",
          variant === "warning" &&
            "bg-warning text-warning-foreground hover:bg-warning/90",
          variant === "danger" &&
            "bg-error text-error-foreground hover:bg-error/90",
        )}
        {...props}
      >
        {Icon && iconPosition === "left" && <Icon size={16} />}
        {label}
        {Icon && iconPosition === "right" && <Icon size={16} />}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
