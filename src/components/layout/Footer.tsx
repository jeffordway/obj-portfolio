"use client";

import React from "react";
import { clsx } from "clsx";
import { NavFooter } from "@/components/ui/navigation";
import { Container } from "./Container";

export interface FooterProps {
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Footer Component
 * 
 * Renders the site footer with navigation links and social media icons.
 * Handles positioning and background effects with proper z-index to ensure
 * it appears above scrollable content.
 */
const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer
      className={clsx(
        "bg-background",
        "transition-all duration-300",
        "relative z-30", // Add z-index higher than ScrollableContent
        className
      )}
    >
      <Container width="full" className="pb-2">
        {/* Navigation and social links */}
        <NavFooter />
      </Container>
    </footer>
  );
};

export default Footer;
