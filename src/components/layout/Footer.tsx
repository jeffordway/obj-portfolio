"use client";

import React from "react";
import { clsx } from "clsx";
import { Container } from "./Container";
import { NavFooter } from "@/components/ui/navbar/NavFooter";

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
        "py-4 sm:py-6 md:py-8",
        "bg-background",
        "transition-all duration-300",
        "relative z-30", // Add z-index higher than ScrollableContent
        className
      )}
    >
      <Container>
        <div className="w-full mx-auto">
          {/* Navigation and social links */}
          <NavFooter />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
