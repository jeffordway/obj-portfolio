"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { clsx } from 'clsx';

/**
 * Props for the NavLogo component
 * 
 * @example
 * <NavLogo size={120} className="my-custom-class" />
 */
export interface NavLogoProps {
  /**
   * URL the logo links to
   * @default "/"
   */
  href?: string;
  
  /**
   * Size of the logo in pixels
   * @default 160
   */
  size?: number;
  
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Navigation logo component with synchronized hover effects
 * Dynamically loads an SVG wordmark and applies interactive styling
 */
export const NavLogo = ({
  href = '/',
  size = 160,
  className,
}: NavLogoProps) => {
  const [svgContent, setSvgContent] = useState<string>('');

  useEffect(() => {
    // Fetch the SVG content
    fetch('/images/icons/ordway_jeff_wordmark.svg')
      .then(response => response.text())
      .then(data => {
        // Create a wrapper for the SVG that isolates its styles
        const processedSvg = data
          .replace('<svg', '<svg class="h-full w-auto logo-svg"');
        setSvgContent(processedSvg);
      })
      .catch(error => console.error('Error loading SVG:', error));
  }, []);

  return (
    <Link 
      href={href}
      className={clsx(
        'group block h-12',
        className
      )}
    >
      {/* Single container with all transitions applied */}
      <div 
        className={clsx(
          'h-full flex items-center',
          'text-foreground group-hover:text-accent',
          'group-hover:scale-110 transform',
          'transition-all duration-300 ease-in-out'
        )}
        style={{ width: size }}
        dangerouslySetInnerHTML={{ __html: svgContent }}
      />
    </Link>
  );
};
