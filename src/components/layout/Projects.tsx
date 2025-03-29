"use client";

import React from 'react';
import { clsx } from 'clsx';
import { Card } from '@/components/ui/card';
import { Heading, Text } from '@/components/ui/typography';
import { SanityProject } from '@/sanity/lib/queries';
import { Container } from './Container';

export interface ProjectsProps {
  /**
   * Array of Sanity projects to display
   */
  projects: SanityProject[];
  
  /**
   * Optional title for the projects section
   */
  title?: string;

  /**
   * Optional description for the projects section
   */
  description?: string;

  /**
   * Optional additional className for the container
   */
  className?: string;
}

/**
 * Projects component for displaying project cards in a grid layout
 * Uses layout components instead of section components
 */
const Projects: React.FC<ProjectsProps> = ({
  projects,
  title,
  description,
  className,
}) => {
  return (
    <div className={clsx('w-full', className)}>
      <Container width="full">
        {(title || description) && (
          <div className="mb-8 text-center">
            {title && (
              <Heading 
                as="h2" 
                size="2xl" 
                weight="medium"
              >
                {title}
              </Heading>
            )}
            
            {description && (
              <Text 
                size="lg" 
                align="center"
                leading="relaxed"
              >
                {description}
              </Text>
            )}
          </div>
        )}

        <div className={clsx(
          'grid grid-cols-2 md:grid-cols-2', 
          'gap-4 sm:gap-6 md:gap-8',
          'w-full'
        )}>
          {projects.map((project) => (
            <Card
              key={project._id}
              project={project}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Projects;
