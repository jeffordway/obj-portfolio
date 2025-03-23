"use client";

import React from 'react';
import { Heading, Text } from '@/components/ui/typography';
import { clsx } from 'clsx';

export interface SimpleHeroProps {
  /**
   * Main title displayed in the hero
   */
  title: string;
  
  /**
   * Subtitle or description text
   */
  subtitle: string;
  
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Simple hero content with centered title and subtitle
 */
const SimpleHero: React.FC<SimpleHeroProps> = ({
  title,
  subtitle,
  className,
}) => {
  return (
    <div className={clsx(
      'flex flex-col items-center', // Layout
      'text-center', // Text alignment
      'gap-4', // Spacing
      className
    )}>
      <Heading as="h1" size="xl" weight="medium">
        {title}
      </Heading>
      <Text 
        size="3xl" 
        align="center" 
        fullWidth={false} 
        className='text-foreground'
      >
        {subtitle}
      </Text>
    </div>
  );
};

export default SimpleHero;
