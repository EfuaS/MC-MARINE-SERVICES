import { forwardRef, type ButtonHTMLAttributes } from "react";
import { type LucideIcon } from "lucide-react";

type ButtonProps = {
  label: string;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ label, icon: Icon, iconPosition = "left", className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${className}`}
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
