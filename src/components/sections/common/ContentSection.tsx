"use client";

import React from 'react';
import { Section } from '@/components/layout';
import { Heading, Text } from '@/components/ui/typography';
import { clsx } from 'clsx';

export interface ContentSectionProps {
  /**
   * Section ID for navigation
   */
  id?: string;
  
  /**
   * Section title
   */
  title: string;
  
  /**
   * Section description
   */
  description?: string;
  
  /**
   * Main content
   */
  children: React.ReactNode;
  
  /**
   * Section padding size
   * @default 'default'
   */
  padding?: 'none' | 'small' | 'default' | 'large';
  
  /**
   * Section width
   * @default 'container'
   */
  width?: 'full' | 'container' | 'narrow';
  
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Generic content section component that can be used for any section
 */
const ContentSection: React.FC<ContentSectionProps> = ({
  id,
  title,
  description,
  children,
  padding = 'default',
  width = 'container',
  className,
}) => {
  return (
    <Section 
      id={id} 
      padding={padding}
      width={width}
      className={className}
    >
      <div className={clsx(
        'flex flex-col', // Layout
        'gap-10' // Spacing
      )}>
        <div className={clsx(
          'flex flex-col', // Layout
          'gap-4' // Spacing between title and description
        )}>
          <Heading>{title}</Heading>
          {description && <Text>{description}</Text>}
        </div>
        
        <div className={clsx(
          'flex flex-col', // Layout
          'gap-6' // Spacing between content items
        )}>
          {children}
        </div>
      </div>
    </Section>
  );
};

export default ContentSection;
