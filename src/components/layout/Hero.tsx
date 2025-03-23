"use client";

import React from 'react';
import { clsx } from 'clsx';
import { useScroll } from './MainLayout';

export interface HeroProps {
  /**
   * Child components to render within the hero
   */
  children: React.ReactNode;
  
  /**
   * Whether to show background media (video or image)
   * @default false
   */
  showBackgroundMedia?: boolean;
  
  /**
   * Type of background media to show
   * @default 'video'
   */
  mediaType?: 'video' | 'image';
  
  /**
   * Source path for the background media (video or image)
   * @default '/videos/background_video.mp4' for video, '/images/background.jpg' for image
   */
  mediaSrc?: string;
  
  /**
   * Media opacity (0-100)
   * @default 50
   */
  mediaOpacity?: number;
  
  /**
   * Whether to show a colored overlay with blur
   * @default false
   */
  showColoredOverlay?: boolean;
  
  /**
   * Overlay color
   * @default 'bg-primary'
   */
  overlayColor?: string;
  
  /**
   * Overlay opacity (0-100)
   * @default 50
   */
  overlayOpacity?: number;
  
  /**
   * Blur amount in pixels
   * @default 8
   */
  blurAmount?: number;
  
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Hero component that stays fixed while content scrolls over it
 */
const Hero: React.FC<HeroProps> = ({
  children,
  showBackgroundMedia = false,
  mediaType = 'video',
  mediaSrc,
  mediaOpacity = 50,
  showColoredOverlay = false,
  overlayColor = 'bg-primary',
  overlayOpacity = 50,
  blurAmount = 8,
  className,
}) => {
  const { isPastHero } = useScroll();
  
  return (
    <div 
      className={clsx(
        'fixed inset-0 flex items-center justify-center', // Positioning and layout
        'z-10', // Lower z-index than scrollable content
        'px-4 sm:px-6 md:px-8', // Responsive padding
        'overflow-hidden', // Prevent content overflow
        className
      )}
    >
      {showBackgroundMedia && (
        <div className={clsx(
          'absolute inset-0', // Positioning
          'w-full h-full', // Dimensions
          'overflow-hidden' // Overflow handling
        )}>
          <div 
            className={clsx(
              'absolute inset-0', // Positioning
              'bg-background/80', // Background with opacity
              'z-10' // z-index for layering
            )}
            style={{ opacity: (100 - mediaOpacity) / 100 }}
          />
          
          {mediaType === 'video' && (
            <video
              autoPlay
              muted
              loop
              playsInline
              className={clsx(
                'absolute inset-0', // Positioning
                'w-full h-full', // Dimensions
                'object-cover', // Image handling
                'z-0' // Base layer
              )}
            >
              <source src={mediaSrc || '/videos/background_video.mp4'} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          
          {mediaType === 'image' && (
            <div 
              className={clsx(
                'absolute inset-0', // Positioning
                'w-full h-full', // Dimensions
                'bg-cover bg-center bg-no-repeat', // Image handling
                'z-0' // Base layer
              )}
              style={{ backgroundImage: `url(${mediaSrc || '/images/background.jpg'})` }}
            />
          )}
        </div>
      )}
      
      {/* Colored overlay with blur - this is where you can adjust the styling */}
      {showColoredOverlay && (
        <div 
          className={clsx(
            'absolute inset-0 w-full h-full z-15', // z-15 places it between video overlay and content
            overlayColor
          )}
          style={{ 
            opacity: overlayOpacity / 100,
            backdropFilter: `blur(${blurAmount}px)`,
            WebkitBackdropFilter: `blur(${blurAmount}px)` // For Safari support
          }}
        />
      )}
      <div className={clsx(
        'w-full mx-auto', // Width and centering
        'flex items-center justify-center', // Flexbox layout
        'relative', // Positioning
        'z-20' // Above other elements
      )}>
        {children}
      </div>
    </div>
  );
};

export default Hero;
