"use client";

import React from 'react';
import { clsx } from 'clsx';
import { useScroll } from './MainLayout';

export interface HeroProps {
  /**
   * Child components to render within the hero
   */
  children: React.ReactNode;
  
  /**
   * Whether to fade out the hero content on scroll
   * @default true
   */
  fadeOnScroll?: boolean;
  
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Hero component that stays fixed while content scrolls over it
 */
const Hero: React.FC<HeroProps> = ({
  children,
  fadeOnScroll = true,
  className,
}) => {
  const { scrollY, isPastHero } = useScroll();
  
  // Calculate opacity based on scroll position
  const opacity = fadeOnScroll 
    ? Math.max(1 - scrollY / (window.innerHeight * 0.5), 0)
    : 1;
  
  return (
    <div 
      className={clsx(
        'fixed inset-0 flex items-center justify-center',
        'z-10', // Lower z-index than scrollable content
        'px-4 sm:px-6 md:px-8', // Responsive padding
        'overflow-hidden', // Prevent content overflow
        className
      )}
      style={{ opacity }}
    >
      <div className="w-full mx-auto flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default Hero;
