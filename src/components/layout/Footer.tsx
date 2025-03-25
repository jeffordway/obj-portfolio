"use client";

import React from "react";
import { clsx } from "clsx";
import { NavFooter } from "@/components/ui/navigation";
import Section from "./Section";

export interface FooterProps {
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Footer layout component that handles positioning and background effects
 */
const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer
      className={clsx(
        "pt-8 pb-4 sm:pt-12 sm:pb-6 md:pt-20 md:pb-20",
        "bg-background",
        "transition-all duration-300",
        "relative z-30", // Add z-index higher than ScrollableContent
        className
      )}
    >
      <Section>
        {/* Navigation and social links */}
        <NavFooter />
      </Section>
    </footer>
  );
};

export default Footer;
