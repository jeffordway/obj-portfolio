"use client";

import React from 'react';
import { Heading, Text } from '@/components/ui/typography';
import { clsx } from 'clsx';
import Image from 'next/image';

export interface ProfileHeroProps {
  /**
   * Main title displayed in the hero (usually name)
   */
  title: string;
  
  /**
   * Subtitle or description text
   */
  subtitle: string;
  
  /**
   * Optional profile image URL
   */
  imageUrl?: string;
  
  /**
   * Optional list of social links or call-to-action buttons
   */
  actions?: React.ReactNode;
  
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Profile-focused hero with image, name, subtitle, and optional actions
 */
const ProfileHero: React.FC<ProfileHeroProps> = ({
  title,
  subtitle,
  imageUrl,
  actions,
  className,
}) => {
  return (
    <div className={clsx(
      'flex flex-col md:flex-row items-center', // Layout with responsive changes
      'justify-center md:justify-between', // Alignment
      'gap-8 md:gap-12', // Spacing
      'w-full max-w-5xl mx-auto', // Width constraints
      className
    )}>
      {/* Left side: Text content */}
      <div className={clsx(
        'flex flex-col', // Layout
        'text-left', // Text alignment
        'gap-4', // Spacing
        'order-2 md:order-1', // Order changes on mobile/desktop
        'w-full md:w-3/5' // Width
      )}>
        <Heading as="h1" size="xl" weight="medium">
          {title}
        </Heading>
        <Text 
          size="2xl" 
          align="left" 
          fullWidth={false} 
          className='text-white'
        >
          {subtitle}
        </Text>
        
        {actions && (
          <div className={clsx(
            'flex flex-wrap', // Layout
            'gap-4', // Spacing
            'mt-6' // Margin
          )}>
            {actions}
          </div>
        )}
      </div>
      
      {/* Right side: Image */}
      {imageUrl && (
        <div className={clsx(
          'relative', // Positioning
          'order-1 md:order-2', // Order changes on mobile/desktop
          'w-48 h-48 md:w-64 md:h-64', // Size
          'rounded-full overflow-hidden', // Shape
          'border-4 border-white/10' // Border
        )}>
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}
    </div>
  );
};

export default ProfileHero;
