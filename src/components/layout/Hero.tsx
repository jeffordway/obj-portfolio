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
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Hero component that stays fixed while content scrolls over it
 */
const Hero: React.FC<HeroProps> = ({
  children,
  className,
}) => {
  const { isPastHero } = useScroll();
  
  return (
    <div 
      className={clsx(
        'fixed inset-0 flex items-center justify-center',
        'z-10', // Lower z-index than scrollable content
        'px-4 sm:px-6 md:px-8', // Responsive padding
        'overflow-hidden', // Prevent content overflow
        className
      )}

    >
      <div className="w-full mx-auto flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default Hero;
