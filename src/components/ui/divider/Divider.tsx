import React from "react";
import { clsx } from "clsx";

/**
 * Props for the Divider component
 */
export interface DividerProps {
  /**
   * Additional CSS classes to apply to the divider
   */
  className?: string;
  
  /**
   * Orientation of the divider
   * @default "horizontal"
   */
  orientation?: "horizontal" | "vertical";
  
  /**
   * Color class for the divider (Tailwind border color)
   * @default "border-border"
   */
  color?: string;
}

/**
 * Divider Component
 * 
 * A simple, customizable divider component for visual separation between content sections.
 * Supports both horizontal and vertical orientations with customizable styling.
 * 
 * @example
 * <Divider orientation="horizontal" color="border-primary" className="my-8" />
 */
export function Divider({
  className,
  orientation = "horizontal",
  color = "border-border",
  ...props
}: DividerProps) {
  return (
    <hr
      className={clsx(
        orientation === "horizontal" ? "w-full border-t" : "h-full border-l",
        color,
        className
      )}
      {...props}
    />
  );
}

export default Divider;
