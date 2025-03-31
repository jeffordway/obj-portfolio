import React from "react";
import { clsx } from "clsx";
import { getMutedTextClass } from "./constants";

export type TextElement = "p" | "span" | "div" | "label" | "figcaption";
export type TextSize = "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
export type TextWeight = "light" | "normal" | "medium" | "semibold" | "bold";
export type TextAlign = "left" | "center" | "right" | "justify";
export type TextLeading =
  | "none"
  | "tight"
  | "snug"
  | "normal"
  | "relaxed"
  | "loose";

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * The HTML element to render
   * @default 'p'
   */
  as?: TextElement;

  /**
   * The size of the text
   * @default 'base'
   */
  size?: TextSize;

  /**
   * The font weight of the text
   * @default 'normal'
   */
  weight?: TextWeight;

  /**
   * The text alignment
   * @default 'left'
   */
  align?: TextAlign;

  /**
   * The line height
   * @default 'normal'
   */
  leading?: TextLeading;

  /**
   * Whether to use full width instead of max-width constraints
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Whether to apply muted styling (reduced opacity)
   * @default false
   */
  muted?: boolean;

  /**
   * Whether to truncate text with ellipsis if it overflows
   * @default false
   */
  truncate?: boolean;

  /**
   * Additional CSS classes to apply
   */
  className?: string;

  /**
   * The content of the text element
   */
  children: React.ReactNode;
}

/**
 * Text Component
 * 
 * A versatile text component for paragraphs, spans, and other text elements with
 * extensive customization options for size, weight, alignment, and line height.
 * Automatically adjusts for responsive layouts and supports various text styling options.
 * 
 * @example
 * <Text size="lg" weight="medium" align="center" muted>
 *   This is a sample paragraph with custom styling
 * </Text>
 */
export const Text: React.FC<TextProps> = ({
  as: Component = "p",
  size = "base",
  weight = "normal",
  align = "left",
  leading = "relaxed",
  fullWidth = false,
  muted = false,
  truncate = false,
  className,
  children,
  ...props
}) => {
  // Size styles mapping with responsive breakpoints
  const sizeStyles = {
    xs: "text-xs sm:text-sm",
    sm: "text-xs sm:text-sm md:text-base",
    base: "text-sm sm:text-base md:text-base",
    lg: "text-base sm:text-lg md:text-lg",
    xl: "text-lg sm:text-xl md:text-xl",
    "2xl": "text-xl sm:text-2xl md:text-2xl",
    "3xl": "text-2xl sm:text-3xl md:text-3xl",
    "4xl": "text-3xl sm:text-4xl md:text-4xl lg:text-5xl",
  };

  // Font weight styles mapping
  const weightStyles = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  };

  // Text alignment styles mapping
  const alignStyles = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify",
  };

  // Line height styles mapping with responsive adjustments
  const leadingStyles = {
    none: "leading-none",
    tight: "leading-tight",
    snug: "leading-snug",
    normal: "leading-normal sm:leading-relaxed md:leading-normal",
    relaxed: "leading-normal sm:leading-relaxed",
    loose: "leading-relaxed sm:leading-loose",
  };

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
          alignStyles[align],
          leadingStyles[leading],
          muted && getMutedTextClass(),
          truncate && "truncate",
          "max-w-full", // Ensure text doesn't overflow container
          "break-words", // Allow long words to break
          !fullWidth && "md:max-w-full", // Better reading width on medium screens and up
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
        alignStyles[align],
        leadingStyles[leading],
        muted && getMutedTextClass(),
        truncate && "truncate",
        "max-w-full", // Ensure text doesn't overflow container
        "break-words", // Allow long words to break
        !fullWidth && "md:max-w-full", // Better reading width on medium screens and up
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Text;
