"use client";

import React from 'react';
import { clsx } from 'clsx';
import { useScroll } from './MainLayout';

export interface ScrollableContentProps {
  /**
   * Child components to render within the scrollable content
   */
  children: React.ReactNode;
  
  /**
   * Initial top padding in viewport height units
   * @default 100
   */
  initialTopPadding?: number;
  
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * ScrollableContent component that scrolls over the hero
 */
const ScrollableContent: React.FC<ScrollableContentProps> = ({
  children,
  initialTopPadding = 100,
  className,
}) => {
  // We only need isPastHero for potential future functionality
  const { isPastHero } = useScroll();
  
  return (
    <div 
      className={clsx(
        'relative w-full', // Positioning and width
        'z-20', // Higher z-index than hero
        className
      )}
      style={{ 
        paddingTop: `${initialTopPadding}vh`,
      }}
    >
      <div className={clsx(
        'relative', // Positioning
        'bg-background', // Background color
        'px-4 sm:px-5 md:px-6 lg:px-8', // Responsive horizontal padding
        initialTopPadding > 0 ? 'p-0' : 'p-20', // Conditional padding based on hero
        'transition-all duration-300', // Smooth transitions between breakpoints
      )}>
        <div className="w-full max-w-7xl mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ScrollableContent;
