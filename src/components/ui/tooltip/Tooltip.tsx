"use client";

import React, { useState } from "react";
import { clsx } from "clsx";

/**
 * Props for the Tooltip component
 */
export interface TooltipProps {
  /**
   * Content to display in the tooltip
   */
  content: React.ReactNode;
  /**
   * Element that triggers the tooltip on hover
   */
  children: React.ReactElement;
  /**
   * Position of the tooltip relative to the trigger element
   * @default "top"
   */
  position?: "top" | "bottom" | "left" | "right";
  /**
   * Additional CSS classes to apply to the tooltip
   */
  className?: string;
}

/**
 * Tooltip Component
 * 
 * A lightweight tooltip component that displays additional information on hover.
 * Supports multiple positions and custom styling.
 */
export const Tooltip: React.FC<TooltipProps> = ({ 
  content, 
  children, 
  position = "top", 
  className 
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  return (
    <div 
      className="relative inline-block" 
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div
          className={clsx(
            // Use theme colors: bg-foreground and text-background for auto light/dark mode
            "absolute z-50 px-3 py-2 text-sm font-medium text-background bg-foreground rounded-lg shadow-sm",
            "whitespace-nowrap", // Prevent wrapping
            positionClasses[position],
            className
          )}
        >
          {content}
          {/* Optional arrow - can be complex, omitting for simplicity for now */}
        </div>
      )}
    </div>
  );
};
