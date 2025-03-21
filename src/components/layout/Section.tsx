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
  // Width styles
  const widthStyles = {
    full: 'w-full',
    container: 'container mx-auto',
    narrow: 'container mx-auto max-w-3xl',
  };
  
  // Padding styles
  const paddingStyles = {
    none: 'py-0',
    small: 'py-8',
    default: 'py-16',
    large: 'py-24',
  };
  
  return (
    <section
      id={id}
      className={clsx(
        widthStyles[width],
        paddingStyles[padding],
        'px-4 md:px-6 lg:px-8',
        className
      )}
    >
      {children}
    </section>
  );
};

export default Section;
