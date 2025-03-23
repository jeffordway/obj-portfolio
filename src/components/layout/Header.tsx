"use client";

import React from "react";
import { clsx } from "clsx";
import { useScroll } from "./MainLayout";
import { Navbar } from "@/components/ui/navbar";
import Section from "./Section";

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
  const { scrollY } = useScroll();

  // Determine if header should be transparent or solid
  const isTransparent =
    dynamicOpacity && transparent ? scrollY <= 1000 : transparent;

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0", // Positioning
        "z-30", // Higher z-index than hero and content
        "py-6 md:py-8", // Vertical spacing
        "transition-all duration-200 ease-in-out", // Animation
        className
      )}
      style={{
        backgroundColor: isTransparent ? "transparent" : "var(--background)",
      }}
    >
      <Section>
        <Navbar />
      </Section>
    </header>
  );
};

export default Header;
