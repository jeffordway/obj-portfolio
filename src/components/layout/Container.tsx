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
    full: "w-full",
    container: "w-full max-w-7xl mx-auto",
    narrow: "w-full max-w-2xl sm:max-w-3xl mx-auto",
  };



  return (
    <div
      className={clsx(
        containerStyles[width], // Width control
        "transition-all duration-300", // Smooth transitions between breakpoints
        className
      )}
    >
      {children}
    </div>
  );
};
