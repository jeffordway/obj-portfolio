"use client";

import React from "react";
import { clsx } from "clsx";

export interface ContainerProps {
  /**
   * Child components to render within the container
   */
  children: React.ReactNode;

  /**
   * Container width: full, container, narrow
   * @default 'container'
   */
  width?: "full" | "container" | "narrow";

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Container Component
 * 
 * A responsive container that constrains content width based on the specified size.
 * Use this component inside sections when you want content that doesn't span the full width.
 * Provides consistent padding and responsive behavior across different screen sizes.
 */
export const Container: React.FC<ContainerProps> = ({
  children,
  width = "container",
  className,
}) => {
  // Container width styles with responsive adjustments
  const containerStyles = {
    full: "w-full px-8", // Full width with horizontal padding
    container: "w-full max-w-5xl mx-auto px-8 lg:px-0", // Mobile padding, none on larger screens
    narrow: "w-full max-w-2xl sm:max-w-3xl mx-auto px-8 lg:px-0", // Mobile padding, none on larger screens
  };

  return (
    <div
      className={clsx(
        containerStyles[width], // Width control
        "py-8", // Standard vertical padding for all containers
        "transition-all duration-300", // Smooth transitions between breakpoints
        className
      )}
    >
      {children}
    </div>
  );
};
