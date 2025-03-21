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
        'rounded-t-3xl', // Rounded top corners
        'px-4 md:px-6 lg:px-8', // Responsive padding
      )}>
        {children}
      </div>
    </div>
  );
};

export default ScrollableContent;
