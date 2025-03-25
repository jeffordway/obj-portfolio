"use client";

import React from "react";
import { Section, Container } from "@/components/layout";
import { Heading, Text } from "@/components/ui/typography";
import { clsx } from "clsx";

export interface ContentSectionProps {
  /**
   * Section ID for navigation
   */
  id?: string;

  /**
   * Section title
   */
  title?: string;

  /**
   * Section description
   */
  description?: string;

  /**
   * Main content
   */
  children: React.ReactNode;

  /**
   * Section padding size
   * @default 'default'
   */
  padding?: "none" | "small" | "default" | "large";

  /**
   * Section width
   * @default 'container'
   */
  width?: "full" | "container" | "narrow";

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Generic content section component that can be used for any section
 */
const ContentSection: React.FC<ContentSectionProps> = ({
  id,
  title,
  description,
  children,
  padding = "default",
  width = "container",
  className,
}) => {
  // Simplified padding mapping
  const paddingClasses = {
    none: "py-0",
    small: "py-4 sm:py-6",
    default: "py-8 sm:py-10",
    large: "py-12 sm:py-16",
  };
  return (
    <Section id={id} className={clsx(paddingClasses[padding], className)}>
      <Container width={width}>
        {/* Simplified structure with reduced spacing */}
        {children}
      </Container>
    </Section>
  );
};

export default ContentSection;
