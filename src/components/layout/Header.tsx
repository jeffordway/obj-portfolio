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
 * Header layout component that handles positioning and background effects
 */
const Header: React.FC<HeaderProps> = ({
  transparent = true,
  dynamicOpacity = true,
  className,
}: HeaderProps) => {
  // Get scroll context
  const { scrollY, isPastHero } = useScroll();

  // Determine if header should be transparent or solid
  // Only make the header solid when we've scrolled enough for content to reach it
  // For a typical header height of 80px, we use that as our threshold
  const headerHeight = 80; // Approximate header height in pixels
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
