"use client";

import React from 'react';
import { clsx } from 'clsx';
import { Heading, Text } from '@/components/ui/typography';
import { Container } from './Container';

export interface SkillsProps {
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
   * Skills content to display
   */
  skills?: React.ReactNode;
  
  /**
   * Section padding size
   * @default 'default'
   */
  padding?: "none" | "small" | "default" | "large";

  /**
   * Section width
   * @default 'container'
   */
  width?: "full" | "container" | "narrow";
  
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Skills component for displaying skills in a responsive grid
 */
const Skills: React.FC<SkillsProps> = ({
  id = "skills",
  title,
  description,
  skills,
  padding = "default",
  width = "container",
  className,
}) => {
  // Padding mapping with responsive values
  const paddingClasses = {
    none: "py-0",
    small: "py-4 sm:py-6 md:py-8",
    default: "py-8 sm:py-12 md:py-16",
    large: "py-16 sm:py-20 md:py-24",
  };

  return (
    <div 
      id={id} 
      className={clsx(
        "w-full",
        paddingClasses[padding],
        className
      )}
    >
      <Container width={width}>
        <div className="space-y-8">
          <div className="space-y-4">
            <Heading as="h2" size="2xl" weight="medium">
              {title}
            </Heading>
            
            {description && (
              <Text 
                size="lg" 
                leading="relaxed"
                className="max-w-3xl"
              >
                {description}
              </Text>
            )}
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
      </Container>
    </div>
  );
};

export default Skills;
