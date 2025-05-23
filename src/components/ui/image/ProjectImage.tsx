"use client";

import Image from "next/image";
import { Heading, Text } from "@/components/ui/typography";
import { clsx } from "clsx";

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
 * ProjectImage Component
 * 
 * A specialized image component for displaying project images in a 16:9 aspect ratio.
 * Features a hover effect that reveals title and headline information when available.
 * Optimized for project showcases and portfolio displays with consistent styling.
 */
export function ProjectImage({
  imageSrc,
  imageAlt,
  title,
  headline,
  className = "",
}: ProjectImageProps) {
  // Check if we should show hover effect (only if title or headline exists)
  const hasHoverContent = Boolean(title || headline);
  
  return (
    <div 
      className={clsx(
        "relative overflow-hidden",
        hasHoverContent && "group",
        className
      )}
    >
      {/* Background image with 16:9 aspect ratio */}
      <div className="relative aspect-[16/9] w-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="eager"
          fetchPriority="high"
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
