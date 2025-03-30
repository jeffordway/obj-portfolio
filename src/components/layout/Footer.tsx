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
 * Footer layout component that handles positioning and background effects
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
