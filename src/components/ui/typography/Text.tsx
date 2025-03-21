import React from "react";
import { clsx } from "clsx";
import { getMutedTextClass } from "./constants";

export type TextElement = "p" | "span" | "div" | "label" | "figcaption";
export type TextSize = "xs" | "sm" | "base" | "lg" | "xl";
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

export const Text: React.FC<TextProps> = ({
  as: Component = "p",
  size = "base",
  weight = "normal",
  align = "left",
  leading = "normal",
  muted = false,
  truncate = false,
  className,
  children,
  ...props
}) => {
  // Size styles mapping
  const sizeStyles = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
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

  // Line height styles mapping
  const leadingStyles = {
    none: "leading-none",
    tight: "leading-tight",
    snug: "leading-snug",
    normal: "leading-normal",
    relaxed: "leading-relaxed",
    loose: "leading-loose",
  };

  return (
    <Component
      className={clsx(
        sizeStyles[size],
        weightStyles[weight],

        alignStyles[align],
        leadingStyles[leading],
        muted && getMutedTextClass(),
        truncate && "truncate",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Text;
