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
   * Section width: full, container, narrow
   * @default 'container'
   */
  width?: 'full' | 'container' | 'narrow';
  
  /**
   * Section padding size
   * @default 'default'
   */
  padding?: 'none' | 'small' | 'default' | 'large';
  
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Section component for consistent content sections
 */
const Section: React.FC<SectionProps> = ({
  children,
  id,
  width = 'container',
  padding = 'default',
  className,
}) => {
  // Width styles with responsive adjustments
  const widthStyles = {
    full: 'w-full',
    container: 'w-full max-w-7xl mx-auto',
    narrow: 'w-full max-w-2xl sm:max-w-3xl mx-auto',
  };
  
  // Padding styles with responsive adjustments
  const paddingStyles = {
    none: 'py-0',
    small: 'py-6 sm:py-8',
    default: 'py-10 sm:py-12 md:py-16',
    large: 'py-16 sm:py-20 md:py-24',
  };
  
  return (
    <section
      id={id}
      className={clsx(
        widthStyles[width],
        paddingStyles[padding],
        'px-4 sm:px-6 md:px-8 lg:px-12',
        'transition-all duration-300', // Smooth transitions between breakpoints
        className
      )}
    >
      <div className="w-full h-full">
        {children}
      </div>
    </section>
  );
};

export default Section;
