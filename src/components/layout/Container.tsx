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
 * Container component that constrains content width
 * Use this inside Section when you want content that doesn't span the full width
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
