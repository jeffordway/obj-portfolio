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
   * Whether to use a gradient background transition
   * @default true
   */
  useGradientTransition?: boolean;
  
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
  useGradientTransition = true,
  className,
}) => {
  const { scrollY, isPastHero } = useScroll();
  
  return (
    <div 
      className={clsx(
        'relative min-h-screen w-full',
        'z-20', // Higher z-index than hero
        useGradientTransition && 'bg-gradient-to-b from-transparent to-background',
        className
      )}
      style={{ 
        paddingTop: `${initialTopPadding}vh`,
      }}
    >
      <div className={clsx(
        'relative',
        'bg-background',
        'rounded-t-xl sm:rounded-t-2xl md:rounded-t-3xl', // Responsive rounded top corners
        'px-4 sm:px-6 md:px-8 lg:px-12', // Enhanced responsive padding
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
