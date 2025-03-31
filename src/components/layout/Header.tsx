"use client";

import React from "react";
import { clsx } from "clsx";
import { useScroll } from "./MainLayout";
import { Navbar } from "@/components/ui/navigation";
import { Container } from "./Container";

export interface HeaderProps {
  /**
   * Whether to make the header transparent over the hero
   * @default true
   */
  transparent?: boolean;

  /**
   * Whether to change opacity on scroll
   * @default true
   */
  dynamicOpacity?: boolean;

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Header Component
 * 
 * Renders the site header with navigation menu and handles dynamic transparency effects.
 * The header can be configured to change opacity based on scroll position,
 * creating a smooth transition from transparent to solid background as the user scrolls.
 */
const Header: React.FC<HeaderProps> = ({
  transparent = true,
  dynamicOpacity = true,
  className,
}: HeaderProps) => {
  // Get scroll context
  const { scrollY } = useScroll();

  // Determine if header should be transparent or solid
  // Only make the header solid when we've scrolled past a certain threshold
  // This creates a smooth transition as the user scrolls down the page
  const headerHeight = 900; // Threshold for transparency transition in pixels
  const isTransparent = 
    dynamicOpacity && transparent ? scrollY < headerHeight : transparent;

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0", // Positioning
        "z-50", // Highest z-index to always stay on top
        "transition-all duration-200 ease-in-out", // Animation
        className
      )}
      style={{
        backgroundColor: isTransparent ? "transparent" : "var(--background)",
      }}
    >
      <Container width="full">
        <Navbar />
      </Container>
    </header>
  );
};

export default Header;
