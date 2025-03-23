"use client";

import React from 'react';
import { Section, Container } from '@/components/layout';
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
  // Helper function to get padding class based on padding prop
  const getPaddingClass = (padding: 'none' | 'small' | 'default' | 'large') => {
    switch (padding) {
      case 'none':
        return 'py-0';
      case 'small':
        return 'py-6 sm:py-8';
      case 'default':
        return 'py-10 sm:py-12 md:py-16';
      case 'large':
        return 'py-16 sm:py-20 md:py-24';
      default:
        return 'py-10 sm:py-12 md:py-16';
    }
  };
  return (
    <Section id={id} className={clsx(
      getPaddingClass(padding),
      className
    )}>
      <Container
        width={width}
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
      </Container>
    </Section>
  );
};

export default ContentSection;
