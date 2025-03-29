"use client";

import React from "react";
import { clsx } from "clsx";
import { Container } from "./Container";

export interface ContentProps {
  /**
   * Section ID for navigation
   */
  id?: string;

  /**
   * Main content
   */
  children: React.ReactNode;

  /**
   * Section padding size
   * @default 'default'
   */
  padding?: "none" | "small" | "default" | "large";

  /**
   * Section width
   * @default 'container'
   */
  width?: "full" | "container" | "narrow";

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Content component for layout sections
 * Provides consistent padding and width options
 */
const Content: React.FC<ContentProps> = ({
  id,
  children,
  padding = "default",
  width = "container",
  className,
}) => {
  // Padding mapping with responsive values
  const paddingClasses = {
    none: "py-0",
    small: "py-4 sm:py-6 md:py-8",
    default: "py-8 sm:py-12 md:py-16",
    large: "py-16 sm:py-20 md:py-24",
  };

  return (
    <div 
      id={id} 
      className={clsx(
        "w-full",
        paddingClasses[padding],
        className
      )}
    >
      <Container width={width}>
        {children}
      </Container>
    </div>
  );
};

export default Content;
