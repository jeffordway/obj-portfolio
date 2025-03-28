import { forwardRef } from "react";
import { clsx } from "clsx";

// Button variants
export type ButtonVariant =
  | "primary"
  | "accent"
  | "outline"
  | "ghost"
  | "link"
  | "danger";

// Button sizes
export type ButtonSize = "sm" | "md" | "lg";

// Button rounded corners
export type ButtonRounded = "none" | "sm" | "md" | "lg" | "full";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The visual style variant of the button
   * @default 'primary'
   */
  variant?: ButtonVariant;

  /**
   * The size of the button
   * @default 'md'
   */
  size?: ButtonSize;

  /**
   * The border radius of the button
   * @default 'md'
   */
  rounded?: ButtonRounded;

  /**
   * Whether the button is in a loading state
   * @default false
   */
  isLoading?: boolean;

  /**
   * Icon to display before the button text
   */
  leftIcon?: React.ReactNode;

  /**
   * Icon to display after the button text
   */
  rightIcon?: React.ReactNode;

  /**
   * Whether to use the full width of the container
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Whether to enable the hover zoom effect
   * @default true
   */
  hoverEffect?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = "primary",
      size = "md",
      rounded = "none",
      isLoading = false,
      disabled = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      hoverEffect = true,
      type = "button",
      ...props
    },
    ref
  ) => {
    // Base styles grouped by purpose
    const baseStyles = clsx(
      'inline-flex items-center justify-center', // Layout
      'font-medium whitespace-nowrap', // Typography
      'transition-all duration-400 transform', // Animation
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent', // Focus styles
      'disabled:pointer-events-none disabled:opacity-50' // Disabled state
    );

    // Size-specific styles (height and padding) with responsive adjustments
    const sizeStyles = {
      sm: "h-8 px-3 sm:px-4 text-xs",
      md: "h-9 sm:h-10 px-4 sm:px-6 text-xs sm:text-sm",
      lg: "h-12 sm:h-14 md:h-16 px-6 sm:px-8 md:px-12 text-sm sm:text-base",
    };

    // Rounded corner styles
    const roundedStyles = {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-full",
    };

    // Variant-specific styles
    const variantStyles = {
      primary:
        "bg-foreground text-background hover:bg-foreground/90 active:bg-foreground/95",
      accent:
        "bg-accent text-foreground hover:bg-accent/90 active:bg-accent/95",
      outline:
        "border-2 border-foreground bg-transparent active:bg-foreground/5 text-foreground",
      ghost:
        "bg-transparent  active:bg-foreground/5 text-foreground",
      link: "bg-transparent underline-offset-4 text-accent p-0 h-auto",
      danger: "bg-error text-white hover:bg-error/90 active:bg-error/95",
    };

    // Loading indicator
    const LoadingSpinner = () => (
      <svg
        className="animate-spin -ml-1 mr-2 h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    );

    // Use a regular button with the motion animation applied through CSS
    return (
      <button
        ref={ref}
        type={type}
        className={clsx(
          baseStyles,
          sizeStyles[size], // Size-specific styles
          roundedStyles[rounded], // Border radius styles
          variantStyles[variant], // Variant-specific styles (colors, etc.)
          
          // Layout
          fullWidth ? "w-full" : "",
          "max-w-full", // Ensure button doesn't overflow container
          
          // Animation and interaction
          hoverEffect ? "hover:scale-110" : "",
          "transition-transform active:scale-[0.98] will-change-transform", // Apply the scale animation with CSS
          
          // Additional custom classes
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && <LoadingSpinner />}
        {!isLoading && leftIcon && <span className="mr-1 sm:mr-2">{leftIcon}</span>}
        <span className="truncate">{children}</span>
        {!isLoading && rightIcon && <span className="ml-1 sm:ml-2">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
