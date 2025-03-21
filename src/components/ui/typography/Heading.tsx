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
  // Size styles mapping
  const sizeStyles = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
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

  // Letter spacing styles mapping
  const trackingStyles = {
    tighter: "tracking-tighter",
    tight: "tracking-tight",
    normal: "tracking-normal",
    wide: "tracking-wide",
    wider: "tracking-wider",
    widest: "tracking-widest",
  };

  // Gradient text effect
  const gradientStyles = gradient
    ? "bg-gradient-to-r from-accent to-foreground bg-clip-text text-transparent"
    : "";

  return (
    <Component
      className={clsx(
        sizeStyles[size],
        weightStyles[weight],
        trackingStyles[tracking],
        muted && getMutedTextClass(),
        truncate && "truncate",
        gradientStyles,
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Heading;
