"use client";

import React from "react";
import Image from "next/image";
import { Heading, Text } from "@/components/ui/typography";
import {
  Button,
  ButtonVariant,
  type ButtonProps,
} from "@/components/ui/button";
import Link from "next/link";
import { Avatar } from "@/components/ui/avatar";
import { clsx } from "clsx";
import { FiChevronDown } from "react-icons/fi";

/**
 * Action button configuration for Hero component
 */
export interface HeroActionButton {
  /**
   * Text to display on the button
   */
  text: string;

  /**
   * URL the button links to
   */
  url: string;

  /**
   * Button variant (primary, accent, outline, ghost, link, danger)
   */
  variant: ButtonVariant;

  /**
   * Whether the link is external (opens in new tab)
   */
  isExternal?: boolean;

  /**
   * Icon to show before text
   */
  leftIcon?: React.ReactNode;

  /**
   * @deprecated Use leftIcon instead
   * Legacy icon property for backward compatibility
   */
  icon?: React.ReactNode;

  /**
   * Icon to show after text
   */
  rightIcon?: React.ReactNode;

  /**
   * Button size (sm, md, lg)
   * @default 'md'
   */
  size?: "sm" | "md" | "lg";

  /**
   * Button border radius (none, sm, md, lg, full)
   * @default 'md'
   */
  rounded?: "none" | "sm" | "md" | "lg" | "full";

  /**
   * Optional click handler for the button
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface HeroProps {
  /**
   * Hero title
   */
  title?: string;

  /**
   * Hero subtitle
   */
  subtitle?: string;

  /**
   * Action buttons to display
   */
  actionButtons?: HeroActionButton[];

  /**
   * Text alignment
   * @default 'center'
   */
  textAlign?: "left" | "center" | "right";

  /**
   * Content alignment
   * @default 'center'
   */
  contentAlign?: "start" | "center" | "end" | "between";

  /**
   * Direction of content flow
   * @default 'column'
   */
  direction?: "row" | "column" | "row-reverse" | "column-reverse";

  /**
   * Optional profile image URL
   */
  profileImageUrl?: string;

  /**
   * Profile image position (only applies when direction includes "row")
   * @default "right"
   */
  profileImagePosition?: "left" | "right";

  /**
   * Optional avatar configuration
   */
  avatar?: {
    /**
     * Avatar image source URL
     */
    src: string;

    /**
     * Avatar alt text
     * @default 'Profile Avatar'
     */
    alt?: string;

    /**
     * Avatar size in pixels
     * @default 120
     */
    size?: number;

    /**
     * Whether to show a border around the avatar
     * @default true
     */
    showBorder?: boolean;

    /**
     * Border color class (Tailwind)
     * @default 'border-foreground'
     */
    borderColor?: string;
  };

  /**
   * Optional highlight color for animated elements
   * @default 'text-primary'
   */
  highlightColor?: string;

  /**
   * @deprecated No longer used
   * Whether to animate the hero content
   * @default false
   */
  animated?: boolean;

  /**
   * Whether to make the hero full screen height
   * @default true
   */
  fullScreen?: boolean;

  /**
   * Whether to use fixed positioning (for scrolling content over hero)
   * @default false
   */
  fixed?: boolean;

  /**
   * Child components to render within the hero
   */
  children?: React.ReactNode;

  /**
   * Whether to show background media (video or image)
   * @default false
   */
  showBackgroundMedia?: boolean;

  /**
   * Type of background media to show
   * @default 'video'
   */
  mediaType?: "video" | "image";

  /**
   * Source path for the background media (video or image)
   * @default '/videos/background_video.mp4' for video, '/images/background.jpg' for image
   */
  mediaSrc?: string;

  /**
   * Media opacity (0-100)
   * @default 50
   */
  mediaOpacity?: number;

  /**
   * Whether to show a colored overlay with blur
   * @default false
   */
  showColoredOverlay?: boolean;

  /**
   * Overlay color
   * @default 'bg-primary'
   */
  overlayColor?: string;

  /**
   * Overlay opacity (0-100)
   * @default 50
   */
  overlayOpacity?: number;

  /**
   * Blur amount in pixels
   * @default 8
   */
  blurAmount?: number;

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Whether to show a scroll down indicator
   * @default true
   */
  showScrollIndicator?: boolean;
}

/**
 * Hero Component
 * 
 * A comprehensive, feature-rich hero section that can be configured in multiple ways:
 * - Supports fixed positioning where content scrolls over it
 * - Configurable with title, subtitle, and action buttons
 * - Optional background media (video or image) with customizable opacity
 * - Optional avatar or profile image display
 * - Flexible content alignment and direction options
 * - Scroll indicator for better user experience
 * 
 * This is a complete, self-contained component that handles all hero section needs
 * without requiring external dependencies beyond standard UI components.
 */
const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  actionButtons,
  textAlign = "center",
  contentAlign = "center",
  direction = "column",
  profileImageUrl,
  profileImagePosition = "right",
  avatar,
  highlightColor = "text-primary",
  animated = false,
  fullScreen = true,
  fixed = true,
  children,
  showBackgroundMedia = false,
  mediaType = "video",
  mediaSrc,
  mediaOpacity = 50,
  showColoredOverlay = false,
  overlayColor = "bg-primary",
  overlayOpacity = 50,
  blurAmount = 8,
  className,
  showScrollIndicator = true,
}) => {
  // Determine text alignment classes
  const textAlignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  // Determine content alignment classes
  const contentAlignClasses = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
  }[contentAlign];

  // Determine flex direction classes
  const flexDirectionClasses = {
    row: "flex-row",
    column: "flex-col",
    "row-reverse": "flex-row-reverse",
    "column-reverse": "flex-col-reverse",
  }[direction];

  // Wrapper classes for the entire hero section
  const wrapperClasses = clsx(
    className,
    textAlignClasses[textAlign],
    "w-full",
    "mx-auto",
    "px-4 sm:px-6 md:px-8",
    "max-w-5xl"
  );

  // Render background media (video or image)
  const renderBackgroundMedia = () => {
    if (!showBackgroundMedia) return null;

    return (
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        {/* Background media */}
        {mediaType === "video" ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source
              src={mediaSrc || "/videos/background_video.mp4"}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
            style={{
              backgroundImage: `url(${mediaSrc || "/images/background.jpg"})`,
            }}
          />
        )}

        {/* Media opacity overlay */}
        <div
          className="absolute inset-0 bg-background/80 z-10"
          style={{ opacity: (100 - mediaOpacity) / 100 }}
        />
      </div>
    );
  };

  // Render colored overlay with blur
  const renderColoredOverlay = () => {
    if (!showColoredOverlay) return null;

    return (
      <div
        className={`absolute inset-0 w-full h-full z-15 ${overlayColor}`}
        style={{
          opacity: overlayOpacity / 100,
          backdropFilter: `blur(${blurAmount}px)`,
          WebkitBackdropFilter: `blur(${blurAmount}px)`,
        }}
      />
    );
  };

  /**
   * Renders the hero title if provided
   */
  const renderTitle = () => {
    if (!title) return null;

    return (
      <Heading
        key="title"
        as="h1"
        size="xl"
        weight="medium"
        className={clsx(highlightColor)}
      >
        {title}
      </Heading>
    );
  };

  /**
   * Renders the hero subtitle if provided
   */
  const renderSubtitle = () => {
    if (!subtitle) return null;

    return (
      <Text
        key="subtitle"
        size="3xl"
        align={textAlign}
        leading="relaxed"
        className="max-w-3xl mx-auto"
      >
        {subtitle}
      </Text>
    );
  };

  /**
   * Renders a single action button based on its configuration
   */
  const renderActionButton = (button: HeroActionButton, index: number) => {
    // For internal links with hash/anchor, handle scrolling behavior
    const isAnchorLink = !button.isExternal && button.url.startsWith("#");

    // Common button component to reuse
    const buttonElement = (
      <Button
        variant={button.variant}
        leftIcon={button.leftIcon || button.icon}
        rightIcon={button.rightIcon}
        size={button.size || "lg"}
        rounded={button.rounded || "none"}
        onClick={isAnchorLink ? undefined : button.onClick}
      >
        {button.text}
      </Button>
    );

    // Use a regular anchor tag for hash links to ensure proper functionality
    if (isAnchorLink) {
      return (
        <div key={`button-${index}`} className="inline-block">
          <a
            href={button.url}
            className="inline-block"
            onClick={(e) => {
              e.preventDefault();
              const targetId = button.url.substring(1);
              const targetElement = document.getElementById(targetId);

              if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
              }

              if (button.onClick) {
                button.onClick(e as any);
              }
            }}
          >
            {buttonElement}
          </a>
        </div>
      );
    }

    // Use Next.js Link for regular navigation
    return (
      <div key={`button-${index}`} className="inline-block">
        <Link
          href={button.url}
          target={button.isExternal ? "_blank" : undefined}
          rel={button.isExternal ? "noopener noreferrer" : undefined}
          className="inline-block"
        >
          {buttonElement}
        </Link>
      </div>
    );
  };

  /**
   * Renders the action buttons container if provided
   */
  const renderActionButtons = () => {
    if (!actionButtons?.length) return null;

    return (
      <div
        key="actions"
        className={clsx(
          "flex flex-wrap gap-4",
          textAlign === "center" ? "justify-center" : "",
          textAlign === "right" ? "justify-end" : "",
          "mt-2",
          "z-50 relative pointer-events-auto" // Ensure buttons can be clicked
        )}
      >
        {actionButtons.map(renderActionButton)}
      </div>
    );
  };

  /**
   * Renders the main content of the hero
   */
  const renderContent = () => {
    return (
      <div className={clsx("flex flex-col", "items-center", "gap-4", "w-full")}>
        {renderAvatarAndProfile()}
        {renderTitle()}
        {renderSubtitle()}
        {renderActionButtons()}
        {children && <div key="children">{children}</div>}
      </div>
    );
  };

  /**
   * Renders the avatar and profile image components
   */
  const renderAvatarAndProfile = () => {
    const elements: React.ReactNode[] = [];

    // Add avatar if provided
    if (avatar?.src) {
      const avatarElement = (
        <Avatar
          key="avatar"
          src={avatar.src}
          alt={avatar.alt || "Profile Avatar"}
          size={avatar.size || 120}
          showBorder={
            avatar.showBorder !== undefined ? avatar.showBorder : true
          }
          borderColor={avatar.borderColor || "border-foreground"}
        />
      );
      elements.push(avatarElement);
    }

    // Add profile image if provided
    if (profileImageUrl) {
      const profileImageElement = (
        <div
          key="profile-image"
          className={clsx(
            "relative",
            "rounded-md overflow-hidden",
            "w-full max-w-xs",
            "aspect-square",
            direction.includes("row") ? "flex-shrink-0" : "mx-auto"
          )}
        >
          <Image
            src={profileImageUrl}
            alt="Profile"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            className="object-cover"
          />
        </div>
      );
      elements.push(profileImageElement);
    }

    // Return null if no elements to render
    if (elements.length === 0) return null;

    // Position elements based on direction and position
    if (direction.includes("column") || profileImagePosition === "right") {
      return <>{elements}</>;
    } else {
      // For row layout with left positioning, reverse the elements
      return <>{[...elements].reverse()}</>;
    }
  };

  // Standard rendering for non-fixed positioning
  const renderStandardLayout = () => {
    return (
      <div
        className={clsx(
          wrapperClasses,
          "flex", // Base flex layout
          flexDirectionClasses, // Direction from props
          contentAlignClasses, // Alignment from props
          "gap-4 md:gap-6", // Spacing
          "w-full h-full mx-auto", // Width and height constraints
          "relative z-20", // Positioning above background elements
          "items-center justify-center" // Ensure content is centered
        )}
      >
        {renderContent()}
      </div>
    );
  };

  // If using fixed positioning, we need a different wrapper structure
  if (fixed) {
    return (
      <div
        className={clsx(
          "fixed inset-0", // Fixed positioning that covers the entire viewport
          "z-10", // Lower z-index than scrollable content
          "flex items-center justify-center", // Center content both vertically and horizontally
          "px-4 sm:px-6 md:px-8", // Responsive padding
          "overflow-hidden", // Prevent content overflow
          "pointer-events-none" // Don't capture pointer events at this container level
        )}
      >
        {renderBackgroundMedia()}
        {renderColoredOverlay()}
        <div className="w-full max-w-5xl mx-auto flex items-center justify-center relative z-20 pointer-events-auto">
          {renderContent()}
        </div>

        {/* Scroll indicator arrow with graceful animation */}
        {showScrollIndicator && (
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-40 pointer-events-auto">
            <button
              onClick={() => {
                // Scroll to reveal the scrollable content
                window.scrollTo({
                  top: window.innerHeight - 100, // Scroll just enough to reveal content
                  behavior: "smooth",
                });
              }}
              aria-label="Scroll to content"
              className="text-foreground/60 hover:text-foreground p-2 scroll-button scroll-indicator"
            >
              <FiChevronDown size={60} />
            </button>
          </div>
        )}
      </div>
    );
  }

  // Standard positioning (not fixed)
  return (
    <div
      className={clsx(
        "relative", // Relative positioning
        fullScreen ? "h-screen" : "min-h-[50vh]", // Full screen height or minimum height
        "w-full", // Full width
        "flex items-center justify-center", // Center content vertically and horizontally
        "px-4 sm:px-6 md:px-8", // Responsive padding
        "overflow-hidden", // Prevent content overflow
        "pointer-events-none" // Don't capture pointer events at this container level
      )}
    >
      {renderBackgroundMedia()}
      {renderColoredOverlay()}
      <div className="relative z-20 w-full h-full flex items-center justify-center pointer-events-auto">
        {renderStandardLayout()}
      </div>
    </div>
  );
};

export default Hero;
