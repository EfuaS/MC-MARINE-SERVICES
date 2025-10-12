import { forwardRef, type ButtonHTMLAttributes } from "react";
import { type LucideIcon } from "lucide-react";
import { cn } from "@sglara/cn";

// Button variants configuration
const buttonVariants = {
  base: "inline-flex gap-2 hover:cursor-pointer items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  variants: {
    variant: {
      primary: "text-white bg-primary hover:bg-primary/90",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      destructive:
        "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      outline:
        "border border-input hover:bg-accent hover:text-accent-foreground",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
      success: "bg-success text-success-foreground hover:bg-success/90",
      warning: "bg-warning text-warning-foreground hover:bg-warning/90",
      danger: "bg-error text-error-foreground hover:bg-error/90",
    },
    size: {
      xs: "h-8 rounded-md px-2 text-xs",
      sm: "h-9 rounded-md px-3",
      default: "h-10 px-4 py-2",
      lg: "h-11 rounded-md px-8",
      xl: "h-12 rounded-md px-10 text-base",
      icon: "h-10 w-10",
    },
  },
  defaultVariants: {
    variant: "primary" as const,
    size: "default" as const,
  },
};

type ButtonProps = {
  label?: string;
  children?: React.ReactNode;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  variant?: keyof typeof buttonVariants.variants.variant;
  size?: keyof typeof buttonVariants.variants.size;
  iconSize?: number;
  loading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      label,
      children,
      size = buttonVariants.defaultVariants.size,
      variant = buttonVariants.defaultVariants.variant,
      icon: Icon,
      iconPosition = "left",
      iconSize = 16,
      loading = false,
      disabled,
      className,
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={cn(
          buttonVariants.base,
          buttonVariants.variants.variant[variant],
          buttonVariants.variants.size[size],
          loading && "opacity-75 cursor-not-allowed",
          className,
        )}
        {...props}
      >
        {loading && (
          <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent" />
        )}
        {!loading && Icon && iconPosition === "left" && (
          <Icon size={iconSize} />
        )}
        {label || children}
        {!loading && Icon && iconPosition === "right" && (
          <Icon size={iconSize} />
        )}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
