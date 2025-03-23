"use client";

import React from 'react';
import { Section } from '@/components/layout';
import { Heading, Text } from '@/components/ui/typography';
import { clsx } from 'clsx';

export interface ProjectsSectionProps {
  /**
   * Section title
   */
  title: string;
  
  /**
   * Section description
   */
  description?: string;
  
  /**
   * Project items to display
   */
  projects?: React.ReactNode;
  
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Projects section component
 */
const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  title,
  description,
  projects,
  className,
}) => {
  return (
    <Section 
      id="projects" 
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
        
        {projects && (
          <div className={clsx(
            'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3', // Responsive grid
            'gap-6' // Grid spacing
          )}>
            {projects}
          </div>
        )}
      </div>
    </Section>
  );
};

export default ProjectsSection;
