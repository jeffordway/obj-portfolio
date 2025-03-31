'use client';

import Image from 'next/image';
import { Heading, Text } from '@/components/ui/typography';
import { clsx } from 'clsx';

interface ProjectImageProps {
  /**
   * Image source URL
   */
  imageSrc: string;
  
  /**
   * Alt text for the image
   */
  imageAlt: string;
  
  /**
   * Optional title to display on hover
   */
  title?: string;
  
  /**
   * Optional headline to display on hover
   */
  headline?: string;
  
  /**
   * Optional additional className for the container
   */
  className?: string;
}

/**
 * ProjectImage component
 * 
 * Displays a project image in 16:9 ratio with hover effect
 * Shows title and headline on hover if provided
 */
export function ProjectImage({
  imageSrc,
  imageAlt,
  title,
  headline,
  className = '',
}: ProjectImageProps) {
  // Check if we should show hover effect (only if title or headline exists)
  const hasHoverContent = Boolean(title || headline);
  
  return (
    <div 
      className={clsx(
        'relative overflow-hidden',
        hasHoverContent && 'group',
        className
      )}
    >
      {/* Background image with 16:9 aspect ratio */}
      <div className="relative aspect-[16/9] w-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          className={clsx(
            "object-cover",
            hasHoverContent && "transition-all duration-500 group-hover:scale-110"
          )}
        />
      </div>
      
      {/* Only show overlay and content if there's hover content */}
      {hasHoverContent && (
        <>
          {/* Overlay gradient */}
          <div
            className={clsx(
              "absolute inset-0",
              "bg-radial from-background/90 to-background/60",
              "opacity-0 group-hover:opacity-100",
              "transition-opacity duration-500",
              "z-10" // Above image, below content
            )}
          ></div>
          
          {/* Content container */}
          <div
            className={clsx(
              "absolute inset-0",
              "flex flex-col items-center justify-center",
              "p-4 md:p-6",
              "text-foreground opacity-0 group-hover:opacity-100",
              "transition-opacity duration-500",
              "z-20" // Above overlay
            )}
          >
            <div className="text-center max-w-[85%]">
              {title && (
                <Heading 
                  as="h3" 
                  size={headline ? "md" : "sm"} 
                  weight="semibold"
                  className="mb-1"
                >
                  {title}
                </Heading>
              )}
              {headline && (
                <Text 
                  size="sm" 
                  align="center"
                  leading="relaxed"
                  className="text-foreground/90"
                >
                  {headline}
                </Text>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
