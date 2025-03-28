import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { clsx } from 'clsx';

export interface ProjectCardProps {
  /**
   * Project title
   */
  title: string;
  
  /**
   * Project description
   */
  description?: string;
  
  /**
   * Project image URL
   */
  imageSrc: string;
  
  /**
   * Alt text for the image
   */
  imageAlt: string;
  
  /**
   * URL to navigate to when clicked
   */
  href: string;
  
  /**
   * Optional tags for the project
   */
  tags?: string[];
  
  /**
   * Whether the link should open in a new tab
   * @default false
   */
  external?: boolean;
  
  /**
   * Optional additional className for the container
   */
  className?: string;
  
  /**
   * Optional children to render inside the item
   */
  children?: React.ReactNode;
}

/**
 * Project card component with image, title, description, and tags
 * Features hover animation and link functionality
 */
export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  href,
  tags = [],
  external = false,
  className,
  children,
}) => {

  // External link props
  const externalProps = external ? {
    target: '_blank',
    rel: 'noopener noreferrer',
    'aria-label': `${title} (opens in new tab)`
  } : {};

  return (
    <Link 
      href={href}
      className={clsx(
        // Layout and positioning
        'relative overflow-hidden w-full',
        'aspect-square', // Force square aspect ratio
        
        // Interactive states
        'group cursor-pointer',
        
        // Additional classes
        className
      )}
      {...externalProps}
    >
      {/* Background image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className={clsx(
            'object-cover',
            'transition-all duration-500 group-hover:scale-110',
            'z-0' // Ensure image is behind content
          )}
          priority
        />
      </div>
      
      {/* Overlay gradient */}
      <div className={clsx(
        'absolute inset-0',
        'bg-gradient-to-t from-background/80 to-transparent',
        'opacity-0 group-hover:opacity-100',
        'transition-opacity duration-500',
        'z-10' // Above image, below content
      )}></div>
      
      {/* Content container */}
      <div className={clsx(
        'absolute inset-0',
        'flex flex-col items-center justify-center',
        'p-4 md:p-6',
        'text-foreground opacity-0 group-hover:opacity-100',
        'transition-opacity duration-500',
        'z-20' // Above overlay
      )}>
        <div className="text-center max-w-[85%]">
          <h3 className={clsx(
            description ? 'text-xl md:text-2xl' : 'text-lg md:text-xl',
            'font-bold mb-2'
          )}>{title}</h3>
          
          {description && (
            <p className="text-sm md:text-base mb-4">{description}</p>
          )}
            
          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 justify-center mt-2">
              {tags.map((tag, index) => (
                <span 
                  key={index}
                  className={clsx(
                    'px-2 py-1',
                    'text-xs font-medium',
                    'bg-foreground/10',
                    'rounded-full',
                    'text-foreground/80'
                  )}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* Optional children */}
      {children}
    </Link>
  );
};

