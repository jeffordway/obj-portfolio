"use client";

import React from 'react';
import { MainLayout } from './MainLayout';
import Hero from './Hero';
import ScrollableContent from './ScrollableContent';
import Footer from './Footer';
import { clsx } from 'clsx';

export interface PageLayoutProps {
  /**
   * Custom hero content (overrides title/subtitle if provided)
   */
  heroContent?: React.ReactNode;
  
  /**
   * Page title (used for hero section if shown)
   */
  title?: string;
  
  /**
   * Page subtitle (used for hero section if shown)
   */
  subtitle?: string;
  
  /**
   * Main page content
   */
  children: React.ReactNode;
  
  /**
   * Whether to show a hero section
   * @default true
   */
  showHero?: boolean;
  
  /**
   * Whether to show background media in hero (video or image)
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
   * Initial padding for content when no hero is shown (in viewport height units)
   * @default 0
   */
  noHeroPadding?: number;
}

/**
 * PageLayout component that provides a consistent page structure with optional hero section
 * and optional content section. Handles all combinations of showing/hiding hero and content.
 */
const PageLayout: React.FC<PageLayoutProps> = ({
  title,
  subtitle,
  heroContent,
  children,
  showHero = true,
  showBackgroundMedia = false,
  mediaType = 'video',
  mediaSrc,
  mediaOpacity = 90,
  showColoredOverlay = false,
  overlayColor = 'bg-background',
  overlayOpacity = 50,
  blurAmount = 8,
  noHeroPadding = 0,
}) => {
  // Determine if we have content to display
  const hasContent = React.Children.count(children) > 0;
  
  // Determine if we should render the hero section
  const renderHero = showHero;
  
  // Determine if we should render the content section
  const renderContent = hasContent;
  
  return (
    <MainLayout showHero={renderHero}>
      {/* Hero Section - Only rendered if showHero is true */}
      {renderHero && (
        <div className={clsx(
          "w-full", // Full width
          "h-screen", // Force full viewport height
          "overflow-hidden", // Prevent content overflow
          "fixed", // Fix in place 
          "inset-0", // Position at top left
          "z-10", // Lower z-index than scrollable content
          "pointer-events-auto" // Ensure hero elements are clickable
        )}>
          {/* If custom hero content is provided, use it; otherwise use the default Hero component */}
          {heroContent ? (
            // Custom Hero Content with background media handling
            <div className="relative w-full h-screen flex items-center justify-center pointer-events-auto">
              {/* Background media and overlay - Only rendered if showBackgroundMedia is true */}
              {showBackgroundMedia && (
                <div className="fixed inset-0 w-full h-full overflow-hidden z-0">
                  {/* Background media - Video or Image based on mediaType */}
                  {mediaType === 'video' ? (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="fixed inset-0 w-full h-full object-cover z-0"
                    >
                      <source src={mediaSrc || '/videos/background_video.mp4'} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <div 
                      className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
                      style={{ backgroundImage: `url(${mediaSrc || '/images/background.jpg'})` }}
                    />
                  )}
                  
                  {/* Media opacity overlay */}
                  <div 
                    className="fixed inset-0 bg-background/80 z-10"
                    style={{ opacity: (100 - mediaOpacity) / 100 }}
                  />
                  
                  {/* Colored overlay with blur - Only rendered if showColoredOverlay is true */}
                  {showColoredOverlay && (
                    <div 
                      className={`fixed inset-0 w-full h-full z-15 ${overlayColor}`}
                      style={{ 
                        opacity: overlayOpacity / 100,
                        backdropFilter: `blur(${blurAmount}px)`,
                        WebkitBackdropFilter: `blur(${blurAmount}px)` 
                      }}
                    />
                  )}
                </div>
              )}
              
              {/* Custom hero content wrapper */}
              <div className="relative z-30 w-full h-full flex items-center justify-center">
                <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-center">
                  {heroContent}
                </div>
              </div>
            </div>
          ) : (
            /* Default Hero Component with all props passed through */
            <Hero
              title={title || ""}
              subtitle={subtitle || ""}
              textAlign="center"
              contentAlign="center"
              direction="column"
              fullScreen={true}
              fixed={true} // Always keep fixed positioning for background media
              showBackgroundMedia={showBackgroundMedia}
              mediaType={mediaType}
              mediaSrc={mediaSrc}
              mediaOpacity={mediaOpacity}
              showColoredOverlay={showColoredOverlay}
              overlayColor={overlayColor}
              overlayOpacity={overlayOpacity}
              blurAmount={blurAmount}
            />
          )}
        </div>
      )}
      
      {/* Content Section - Only rendered if there is content to display */}
      {renderContent && (
        <div className="relative w-full">
          <ScrollableContent>
            {children}
            <Footer />
          </ScrollableContent>
        </div>
      )}
    </MainLayout>
  );
};

export default PageLayout;
