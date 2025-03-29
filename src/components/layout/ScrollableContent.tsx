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
  const { isPastHero } = useScroll();
  
  return (
    <div 
      className={clsx(
        'relative w-full', // Positioning and width
        'z-20', // Higher z-index than hero by default
        className
      )}
      style={{ 
        paddingTop: `${initialTopPadding}vh`,
      }}
    >
      <div className={clsx(
        'relative', // Positioning
        'bg-background', // Background color
        'rounded-t-3xl', // Rounded top corners for a nice transition over hero
        'shadow-xl', // Shadow for depth
        'transition-all duration-300', // Smooth transitions between breakpoints
      )}>
        {/* Removed max-width constraint to allow child containers to control their own width */}
        {children}
      </div>
    </div>
  );
};

export default ScrollableContent;
