"use client";

import React from 'react';
import { Section } from '@/components/layout';
import { Heading, Text } from '@/components/ui/typography';
import { clsx } from 'clsx';

export interface SkillsSectionProps {
  /**
   * Section title
   */
  title: string;
  
  /**
   * Section description
   */
  description?: string;
  
  /**
   * Skills content to display
   */
  skills?: React.ReactNode;
  
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Skills section component
 */
const SkillsSection: React.FC<SkillsSectionProps> = ({
  title,
  description,
  skills,
  className,
}) => {
  return (
    <Section 
      id="skills" 
      padding="large" 
      className={className}
    >
      <div className={clsx(
        'flex flex-col', // Layout
        'gap-8' // Spacing
      )}>
        <div className={clsx(
          'flex flex-col', // Layout
          'gap-4' // Spacing between title and description
        )}>
          <Heading>{title}</Heading>
          {description && <Text>{description}</Text>}
        </div>
        
        {skills && (
          <div className={clsx(
            'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4', // Responsive grid
            'gap-6' // Grid spacing
          )}>
            {skills}
          </div>
        )}
      </div>
    </Section>
  );
};

export default SkillsSection;
