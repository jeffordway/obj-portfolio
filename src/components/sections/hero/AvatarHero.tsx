"use client";

import React from "react";
import { Heading, Text } from "@/components/ui/typography";
import { clsx } from "clsx";
import Image from "next/image";

export interface AvatarHeroProps {
  /**
   * Main title displayed in the hero
   */
  title: string;

  /**
   * Subtitle or description text
   */
  subtitle: string;

  /**
   * Avatar image path (defaults to brandmark)
   * @default '/images/icons/ordway_jeff_brandmark.jpeg'
   */
  avatarSrc?: string;

  /**
   * Avatar size in pixels
   * @default 120
   */
  avatarSize?: number;

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Hero component with centered avatar, title and subtitle
 */
const AvatarHero: React.FC<AvatarHeroProps> = ({
  title,
  subtitle,
  avatarSrc = "/images/icons/ordway_jeff_brandmark.jpeg",
  avatarSize = 120,
  className,
}) => {
  return (
    <div
      className={clsx(
        "flex flex-col items-center", // Layout
        "text-center", // Text alignment
        "gap-6", // Spacing between elements
        className
      )}
    >
      {/* Avatar */}
      <div
        className={clsx(
          "relative", // For positioning the Image component
          "rounded-full overflow-hidden", // Circular shape
          "border-2 border-foreground", // Border with foreground color
          "mb-2" // Bottom margin
        )}
        style={{
          width: avatarSize,
          height: avatarSize,
        }}
      >
        <Image
          src={avatarSrc}
          alt="Jeff Ordway Brandmark"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Title */}
      <Heading as="h1" size="xl" weight="medium" className="mt-2">
        {title}
      </Heading>

      {/* Subtitle */}
      <Text
        size="3xl"
        align="center"
        fullWidth={false}
        className="text-foreground"
      >
        {subtitle}
      </Text>
    </div>
  );
};

export default AvatarHero;
