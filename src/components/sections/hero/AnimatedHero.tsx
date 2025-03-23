"use client";

import React from 'react';
import { Heading, Text } from '@/components/ui/typography';
import { clsx } from 'clsx';

export interface AnimatedHeroProps {
  /**
   * Main title displayed in the hero
   */
  title: string;
  
  /**
   * Subtitle or description text
   */
  subtitle: string;
  
  /**
   * Optional highlight color for animated elements
   * @default 'text-primary'
   */
  highlightColor?: string;
  
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Animated hero with text animations and highlights
 */
const AnimatedHero: React.FC<AnimatedHeroProps> = ({
  title,
  subtitle,
  highlightColor = 'text-primary',
  className,
}) => {
  return (
    <div className={clsx(
      'flex flex-col items-center', // Layout
      'text-center', // Text alignment
      'gap-6', // Spacing
      'w-full max-w-4xl mx-auto', // Width constraints
      className
    )}>
      <div className={clsx(
        'relative', // Positioning
        'overflow-hidden', // Hide overflow
        'animate-fadeIn' // Animation
      )}>
        <Heading 
          as="h1" 
          size="xl" 
          weight="bold"
          className={clsx(
            'animate-slideUp', // Animation
            'delay-300' // Delay
          )}
        >
          {title}
        </Heading>
      </div>
      
      <div className={clsx(
        'relative', // Positioning
        'overflow-hidden', // Hide overflow
        'animate-fadeIn', // Animation
        'delay-500' // Delay
      )}>
        <Text 
          size="2xl" 
          align="center" 
          fullWidth={false} 
          className={clsx(
            'text-white', // Text color
            'animate-slideUp', // Animation
            'delay-700' // Delay
          )}
        >
          {subtitle}
        </Text>
      </div>
      
      {/* Decorative element */}
      <div className={clsx(
        'w-24 h-1', // Size
        'mt-2', // Margin
        highlightColor, // Dynamic highlight color
        'animate-scaleIn', // Animation
        'delay-1000' // Delay
      )} />
    </div>
  );
};

export default AnimatedHero;
