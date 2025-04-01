"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { clsx } from "clsx";
import { ColorModeToggle } from "@/components/ui/theme";

// Define the scroll context type
export interface ScrollContextType {
  /**
   * Current scroll position in pixels
   */
  scrollY: number;

  /**
   * Scroll direction: 1 for down, -1 for up, 0 for initial/no scroll
   */
  scrollDirection: -1 | 0 | 1;

  /**
   * Whether the user has scrolled past the hero section
   */
  isPastHero: boolean;

  /**
   * Percentage of scroll progress through the page (0-1)
   */
  scrollProgress: number;
}

// Create the scroll context with default values
const ScrollContext = createContext<ScrollContextType>({
  scrollY: 0,
  scrollDirection: 0,
  isPastHero: false,
  scrollProgress: 0,
});

/**
 * Hook to access the scroll context
 */
export const useScroll = () => useContext(ScrollContext);

// Define props for the MainLayout component
export interface MainLayoutProps {
  /**
   * Child components to render within the layout
   */
  children: React.ReactNode;

  /**
   * Height of the hero section in viewport height units
   * @default 100
   */
  heroHeight?: number;

  /**
   * Whether to show the hero section
   * @default true
   */
  showHero?: boolean;

  /**
   * Whether to show the header
   * @default true
   */
  showHeader?: boolean;

  /**
   * Whether to show the footer
   * @default true
   */
  showFooter?: boolean;

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * MainLayout Component
 * 
 * A core layout component that provides scroll context and coordinates all layout elements.
 * This component manages scroll state and behavior throughout the application, including:
 * - Tracking scroll position and direction
 * - Determining when content has scrolled past the hero section
 * - Calculating overall scroll progress through the page
 * - Providing context to child components via ScrollContext
 * 
 * Use this component as the top-level layout wrapper for pages that need scroll-aware behavior.
 */
export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  heroHeight = 100,
  showHero = true,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  showHeader = true,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  showFooter = true,
  className,
}) => {
  // State to track scroll position and direction
  const [scrollState, setScrollState] = useState<ScrollContextType>({
    scrollY: 0,
    scrollDirection: 0,
    isPastHero: !showHero, // If no hero, consider already past hero
    scrollProgress: 0,
  });

  // Effect to handle scroll events with debounce for performance
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;
    // Set a threshold for header visibility
    const heroThreshold = 5;
    
    // Use requestAnimationFrame for better performance
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const direction =
            currentScrollY > lastScrollY
              ? 1
              : currentScrollY < lastScrollY
                ? -1
                : 0;
          const isPastHero = showHero ? currentScrollY > heroThreshold : true;

          // Calculate scroll progress (0-1) more efficiently
          const documentHeight =
            document.documentElement.scrollHeight - window.innerHeight;

          const scrollProgress = documentHeight <= 0 
            ? 0 
            : Math.min(Math.max(currentScrollY / documentHeight, 0), 1);

          // Only update state if values have changed significantly
          // This reduces unnecessary re-renders
          const shouldUpdate = 
            Math.abs(scrollState.scrollY - currentScrollY) > 5 ||
            scrollState.scrollDirection !== direction ||
            scrollState.isPastHero !== isPastHero ||
            Math.abs(scrollState.scrollProgress - scrollProgress) > 0.01;
            
          if (shouldUpdate) {
            setScrollState({
              scrollY: currentScrollY,
              scrollDirection: direction,
              isPastHero,
              scrollProgress,
            });
          }

          lastScrollY = currentScrollY;
          ticking = false;
        });
        
        ticking = true;
      }
    };

    // Add scroll event listener with passive flag for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Add resize listener to recalculate dimensions when window size changes
    window.addEventListener("resize", handleScroll, { passive: true });

    // Initial call to set correct initial state
    handleScroll();

    // Clean up event listeners on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [heroHeight, showHero, scrollState]);

  // Filter children to separate hero and content components
  // This allows for more precise control over their rendering
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const childrenArray = React.Children.toArray(children);

  return (
    <ScrollContext.Provider value={scrollState}>
      <div
        className={clsx(
          "w-full", // Full width container
          "overflow-x-hidden", // Prevent horizontal scrolling
          showHero ? "with-hero" : "no-hero-page", // Class to control scrollable content margin
          className
        )}
        style={{
          // Only add extra height for pages with hero sections
          // For pages without hero, let the content determine the height
          ...(showHero ? { minHeight: "200vh" } : {})
        }}
      >
        {children}
        
        {/* Color Mode Toggle FAB */}
        <ColorModeToggle position="bottom-right" />
      </div>
    </ScrollContext.Provider>
  );
};

export default MainLayout;
