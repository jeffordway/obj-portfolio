"use client";

import React from 'react';
import { Section } from '@/components/layout';
import { Heading, Text } from '@/components/ui/typography';
import { clsx } from 'clsx';

export interface AboutSectionProps {
  /**
   * Section title
   */
  title: string;
  
  /**
   * Section content
   */
  content: string | React.ReactNode;
  
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * About section component
 */
const AboutSection: React.FC<AboutSectionProps> = ({
  title,
  content,
  className,
}) => {
  return (
    <Section 
      id="about" 
      padding="large" 
      className={className}
    >
      <div className={clsx(
        'flex flex-col', // Layout
        'gap-6' // Spacing
      )}>
        <Heading>{title}</Heading>
        {typeof content === 'string' ? (
          <Text>{content}</Text>
        ) : (
          content
        )}
      </div>
    </Section>
  );
};

export default AboutSection;
