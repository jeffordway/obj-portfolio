import React from 'react';
import { clsx } from 'clsx';
import { Project } from '@/constants/projects';
import { ProjectCard } from './ProjectCard';
import { Heading, Text } from '@/components/ui/typography';

export interface ProjectGridProps {
  /**
   * Array of projects to display
   */
  projects: Project[];
  
  /**
   * Optional title for the grid section
   */
  title?: string;
  
  /**
   * Optional description for the grid section
   */
  description?: string;
  
  /**
   * Number of columns on medium screens and above
   * @default 2
   */
  columns?: number;
  
  /**
   * Optional additional className for the container
   */
  className?: string;
}

/**
 * A grid component for displaying project cards
 */
export const ProjectGrid: React.FC<ProjectGridProps> = ({
  projects,
  title,
  description,
  columns = 2,
  className,
}) => {
  // Generate the grid columns class based on the columns prop
  const getGridColumnsClass = () => {
    switch(columns) {
      case 1: return 'md:grid-cols-1';
      case 2: return 'md:grid-cols-2';
      case 3: return 'md:grid-cols-3';
      case 4: return 'md:grid-cols-4';
      default: return 'md:grid-cols-2';
    }
  };

  return (
    <section className={clsx(
      'w-full',
      className
    )}>
      <div className="w-full px-4 md:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Section header - only shown if title is provided */}
          {(title || description) && (
            <div className="space-y-4">
              {title && (
                <Heading size="2xl" className="text-center md:text-left">
                  {title}
                </Heading>
              )}
              
              {description && (
                <Text className="text-foreground/70 max-w-3xl text-center md:text-left">
                  {description}
                </Text>
              )}
            </div>
          )}
          
          {/* Projects grid */}
          <div className={clsx(
            'grid grid-cols-2', // Always show 2 columns
            'gap-8', // Match the gap from the about page bento grid
            'max-w-full' // Ensure grid doesn't exceed container width
          )}>
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imageSrc={project.imageSrc}
                imageAlt={project.imageAlt}
                href={project.href}
                tags={project.tags}
                external={project.external}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
