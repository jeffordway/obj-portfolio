"use client";

import React from 'react';
import { MainLayout } from './MainLayout';
import Hero from './Hero';
import ScrollableContent from './ScrollableContent';
import Section from './Section';

export interface PageLayoutProps {
  /**
   * Page title (used for hero section if shown)
   */
  title?: string;
  
  /**
   * Page subtitle (used for hero section if shown)
   */
  subtitle?: string;
  
  /**
   * Custom hero content (overrides title/subtitle if provided)
   */
  heroContent?: React.ReactNode;
  
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
   * Whether to show background video in hero
   * @default false
   */
  showBackgroundVideo?: boolean;
  
  /**
   * Video opacity (0-100)
   * @default 50
   */
  videoOpacity?: number;
  
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
 */
const PageLayout: React.FC<PageLayoutProps> = ({
  title,
  subtitle,
  heroContent,
  children,
  showHero = true,
  showBackgroundVideo = false,
  videoOpacity = 90,
  showColoredOverlay = false,
  overlayColor = 'bg-background',
  overlayOpacity = 50,
  blurAmount = 8,
  noHeroPadding = 0,
}) => {
  return (
    <MainLayout showHero={showHero}>
      {showHero && (
        <Hero
          showBackgroundVideo={showBackgroundVideo}
          videoOpacity={videoOpacity}
          showColoredOverlay={showColoredOverlay}
          overlayColor={overlayColor}
          overlayOpacity={overlayOpacity}
          blurAmount={blurAmount}
        >
          {heroContent || (
            <div className="flex flex-col items-center justify-center h-full text-center px-4">
              {title && <h1 className="text-4xl font-bold mb-4">{title}</h1>}
              {subtitle && <p className="text-xl max-w-2xl mx-auto">{subtitle}</p>}
            </div>
          )}
        </Hero>
      )}
      
      <ScrollableContent 
        initialTopPadding={showHero ? 100 : noHeroPadding}
      >
        {children}
      </ScrollableContent>
    </MainLayout>
  );
};

export default PageLayout;
