"use client";

import React from 'react';
import { clsx } from 'clsx';

export interface SectionProps {
  /**
   * Child components to render within the section
   */
  children: React.ReactNode;
  
  /**
   * Section ID for navigation
   */
  id?: string;
  
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Section component for consistent content sections
 * Provides a full-width section with horizontal padding
 */
const Section: React.FC<SectionProps> = ({
  children,
  id,
  className,
}) => {
  return (
    <section
      id={id}
      className={clsx(
        'w-full', // Full width section
        'px-4 sm:px-6 md:px-8 lg:px-12', // Responsive horizontal padding
        'transition-all duration-300', // Smooth transitions between breakpoints
        className
      )}
    >
      {children}
    </section>
  );
};

export default Section;
