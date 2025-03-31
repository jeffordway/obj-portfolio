import React from "react";
import { clsx } from "clsx";
import { getMutedTextClass } from "./constants";

export type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type HeadingSize =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl";
export type HeadingWeight =
  | "normal"
  | "medium"
  | "semibold"
  | "bold"
  | "extrabold";
export type HeadingTracking =
  | "tighter"
  | "tight"
  | "normal"
  | "wide"
  | "wider"
  | "widest";

export interface HeadingProps {
  /**
   * The heading level to render (h1-h6)
   * @default 'h2'
   */
  as?: HeadingLevel;

  /**
   * The size of the heading
   * @default 'lg'
   */
  size?: HeadingSize;

  /**
   * The font weight of the heading
   * @default 'bold'
   */
  weight?: HeadingWeight;

  /**
   * The letter spacing of the heading
   * @default 'normal'
   */
  tracking?: HeadingTracking;

  /**
   * Whether to apply muted styling (reduced opacity)
   * @default true
   */
  muted?: boolean;

  /**
   * Whether to truncate text with ellipsis if it overflows
   * @default false
   */
  truncate?: boolean;

  /**
   * Whether to apply a gradient effect to the text
   * @default false
   */
  gradient?: boolean;

  /**
   * Additional CSS classes to apply
   */
  className?: string;

  /**
   * The content of the heading
   */
  children: React.ReactNode;
}

/**
 * Heading Component
 * 
 * A versatile heading component with extensive customization options for size,
 * weight, tracking, and special effects. Automatically adjusts for responsive layouts
 * and supports gradient text effects.
 * 
 * @example
 * <Heading as="h1" size="2xl" weight="bold" gradient>
 *   Welcome to My Portfolio
 * </Heading>
 */
export const Heading: React.FC<HeadingProps> = ({
  as: Component = "h2",
  size = "lg",
  weight = "medium",
  tracking = "widest",
  muted = true,
  truncate = false,
  gradient = false,
  className,
  children,
  ...props
}) => {
  // Size styles mapping with responsive breakpoints
  const sizeStyles = {
    xs: "text-xs sm:text-sm",
    sm: "text-xs sm:text-sm md:text-base",
    md: "text-sm sm:text-base md:text-lg",
    lg: "text-base sm:text-lg md:text-xl",
    xl: "text-lg sm:text-xl md:text-2xl",
    "2xl": "text-xl sm:text-2xl md:text-3xl",
    "3xl": "text-2xl sm:text-3xl md:text-4xl",
    "4xl": "text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
  };

  // Font weight styles mapping
  const weightStyles = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
  };

  // Letter spacing styles mapping with responsive adjustments
  const trackingStyles = {
    tighter: "tracking-tighter",
    tight: "tracking-tight",
    normal: "tracking-normal",
    wide: "tracking-wide md:tracking-wider",
    wider: "tracking-wide sm:tracking-wider md:tracking-widest",
    widest: "tracking-wider sm:tracking-widest",
  };

  // Gradient text effect
  const gradientStyles = gradient
    ? "bg-gradient-to-r from-accent to-foreground bg-clip-text text-transparent"
    : "";

  // Process children to escape special characters if it's a string
  const processContent = () => {
    if (typeof children === 'string') {
      // Replace apostrophes and quotes with their HTML entity equivalents
      const processedText = children
        .replace(/'/g, '&#39;')
        .replace(/"/g, '&#34;');
      
      return processedText;
    }
    
    return children;
  };

  // If children is a string, use dangerouslySetInnerHTML to render the escaped content
  if (typeof children === 'string') {
    return (
      <Component
        className={clsx(
          sizeStyles[size],
          weightStyles[weight],
          trackingStyles[tracking],
          muted && getMutedTextClass(),
          truncate && "truncate",
          gradientStyles,
          "max-w-full", // Ensure text doesn't overflow container
          "break-words", // Allow long words to break
          className
        )}
        dangerouslySetInnerHTML={{ __html: processContent() as string }}
        {...props}
      />
    );
  }
  
  // If children is not a string (e.g., a React element), render normally
  return (
    <Component
      className={clsx(
        sizeStyles[size],
        weightStyles[weight],
        trackingStyles[tracking],
        muted && getMutedTextClass(),
        truncate && "truncate",
        gradientStyles,
        "max-w-full", // Ensure text doesn't overflow container
        "break-words", // Allow long words to break
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Heading;
