"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { clsx } from 'clsx';

export interface NavLogoProps {
  /**
   * URL the logo links to
   * @default "/"
   */
  href?: string;
  
  /**
   * Size of the logo
   * @default 160
   */
  size?: number;
  
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Navigation logo component with hover effect
 */
export const NavLogo: React.FC<NavLogoProps> = ({
  href = '/',
  size = 160,
  className,
}) => {
  const [svgContent, setSvgContent] = useState<string>('');

  useEffect(() => {
    // Fetch the SVG content
    fetch('/images/icons/ordway_jeff_wordmark.svg')
      .then(response => response.text())
      .then(data => {
        // Process the SVG to remove any fill attributes and add our classes
        const processedSvg = data
          .replace(/fill="[^"]*"/g, '')
          .replace('<svg', '<svg class="h-full w-auto transition-colors" fill="currentColor"');
        setSvgContent(processedSvg);
      })
      .catch(error => console.error('Error loading SVG:', error));
  }, []);

  return (
    <Link 
      href={href}
      className={clsx(
        'block h-12 text-foreground hover:text-accent transition-colors',
        className
      )}
    >
      <div 
        className="h-full flex items-center" 
        dangerouslySetInnerHTML={{ __html: svgContent }}
        style={{ width: size }}
      />
    </Link>
  );
};
