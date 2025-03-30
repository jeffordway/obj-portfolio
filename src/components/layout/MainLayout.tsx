"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { clsx } from "clsx";

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
 * MainLayout component that provides scroll context and coordinates layout elements
 */
export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  heroHeight = 100,
  showHero = true,
  showHeader = true,
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

  // Effect to handle scroll events
  useEffect(() => {
    let lastScrollY = window.scrollY;
    // Set a very small threshold to match Spencer's site behavior
    // We want the header to become visible almost immediately on scroll
    const heroThreshold = 5; 

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction =
        currentScrollY > lastScrollY
          ? 1
          : currentScrollY < lastScrollY
            ? -1
            : 0;
      const isPastHero = showHero ? currentScrollY > heroThreshold : true;

      // Calculate scroll progress (0-1)
      const documentHeight =
        Math.max(
          document.body.scrollHeight,
          document.body.offsetHeight,
          document.documentElement.clientHeight,
          document.documentElement.scrollHeight,
          document.documentElement.offsetHeight
        ) - window.innerHeight;

      const scrollProgress = Math.min(
        Math.max(currentScrollY / documentHeight, 0),
        1
      );

      setScrollState({
        scrollY: currentScrollY,
        scrollDirection: direction,
        isPastHero,
        scrollProgress,
      });

      lastScrollY = currentScrollY;
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial call to set correct initial state
    handleScroll();

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [heroHeight, showHero]);

  // Filter children to separate hero and content components
  // This allows for more precise control over their rendering
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
      </div>
    </ScrollContext.Provider>
  );
};

export default MainLayout;
