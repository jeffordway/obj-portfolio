"use client";

import React from "react";
import { Section } from "@/components/layout";
import { Heading, Text } from "@/components/ui/typography";
import { clsx } from "clsx";
import Image from "next/image";

export interface ProfileAboutSectionProps {
  /**
   * Section title
   */
  title: string;

  /**
   * Left column content (biography)
   */
  biography: string | React.ReactNode;

  /**
   * Right column content (skills, experience, etc.)
   */
  details?: React.ReactNode;

  /**
   * Optional profile image
   */
  imageSrc?: string;

  /**
   * Optional testimonial quote
   */
  testimonial?: {
    quote: string;
    author: string;
    role?: string;
    company?: string;
  };

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Profile-style about section with two columns
 */
const ProfileAboutSection: React.FC<ProfileAboutSectionProps> = ({
  title,
  biography,
  details,
  imageSrc,
  testimonial,
  className,
}) => {
  return (
    <Section id="about" className={className}>
      <div
        className={clsx(
          "flex flex-col", // Layout
          "gap-12" // Spacing between title and content
        )}
      >
        {/* Section title */}
        <Heading size="xl" weight="medium">
          {title}
        </Heading>

        {/* Two-column layout with asymmetric columns */}
        <div
          className={clsx(
            "grid grid-cols-1 lg:grid-cols-12", // 12-column grid for more precise control
            "gap-8 md:gap-16", // Spacing between columns
            "items-start" // Alignment
          )}
        >
          {/* Left column - Biography (larger) */}
          <div
            className={clsx(
              "flex flex-col", // Layout
              "gap-8", // Spacing between elements
              "lg:col-span-7" // Takes up 7 of 12 columns on large screens
            )}
          >
            {/* Optional small profile image */}
            {imageSrc && (
              <div
                className={clsx(
                  "relative", // For Image component
                  "w-24 h-24", // Fixed size
                  "overflow-hidden", // Hide overflow
                  "rounded-full", // Circular image
                  "mb-8", // Bottom margin
                  "border-2 border-primary" // Border
                )}
              >
                <Image
                  src={imageSrc}
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            {/* Biography text */}
            <div
              className={clsx(
                "prose prose-lg dark:prose-invert", // Typography styling
                "max-w-none" // Full width
              )}
            >
              {typeof biography === "string" ? (
                <Text size="lg" leading="relaxed">
                  {biography}
                </Text>
              ) : (
                biography
              )}
            </div>
          </div>

          {/* Right column - Details (smaller) */}
          <div
            className={clsx(
              "flex flex-col", // Layout
              "gap-10", // Spacing between sections
              "lg:col-span-5" // Takes up 5 of 12 columns on large screens
            )}
          >
            {/* Details content */}
            {details}

            {/* Testimonial (if provided) */}
            {testimonial && (
              <div
                className={clsx(
                  "flex flex-col", // Layout
                  "gap-6", // Increased spacing
                  "p-8", // Increased padding
                  "bg-muted/30", // Subtle background
                  "rounded-md", // Rounded corners
                  "border border-border/50" // Subtle border
                )}
              >
                <Text
                  size="xl"
                  leading="relaxed"
                  className="italic text-foreground/80"
                >
                  "{testimonial.quote}"
                </Text>
                <div
                  className={clsx(
                    "flex flex-col", // Layout
                    "gap-1" // Spacing
                  )}
                >
                  <Text size="base" weight="medium">
                    {testimonial.author}
                  </Text>
                  {(testimonial.role || testimonial.company) && (
                    <Text size="sm" className="text-foreground/60">
                      {testimonial.role}
                      {testimonial.role && testimonial.company && ", "}
                      {testimonial.company}
                    </Text>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ProfileAboutSection;
