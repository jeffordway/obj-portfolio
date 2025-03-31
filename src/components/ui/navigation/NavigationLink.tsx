import React from "react";
import Link from "next/link";
import { clsx } from "clsx";

export interface NavigationLinkProps {
  /**
   * The URL the link points to.
   */
  href: string;
  /**
   * Content to display inside the link (text or icon).
   */
  children: React.ReactNode;
  /**
   * Whether the link represents the currently active page.
   * @default false
   */
  isActive?: boolean;
  /**
   * Whether the link should open in a new tab.
   * Automatically true if href starts with 'http'.
   * @default false
   */
  external?: boolean;
  /**
   * Optional click handler.
   */
  onClick?: () => void;
  /**
   * Optional additional CSS classes.
   */
  className?: string;
  /**
   * Optional ARIA label, especially for icon-only links.
   */
  ariaLabel?: string;
}

/**
 * NavigationLink Component
 * 
 * A versatile link component for navigation, supporting both internal
 * active states and external links (like social icons).
 * Features automatic external link detection, accessibility enhancements,
 * and consistent hover animations.
 */
export const NavigationLink = ({
  href,
  children,
  isActive = false,
  external = false,
  onClick,
  className,
  ariaLabel,
}: NavigationLinkProps) => {
  // Treat links starting with 'http' as external automatically
  const isExternal = external || href.startsWith("http");

  const linkProps = isExternal
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
    
  const defaultAriaLabel = isExternal ? `${ariaLabel || "External Link"} (opens in new tab)` : ariaLabel;

  return (
    <Link
      href={href}
      className={clsx(
        "text-sm font-medium transition-all duration-400", // Base styles + user-defined duration
        "transform hover:scale-110", // Hover scale effect
        // Conditional styling based on active/external state
        isActive && !isExternal
          ? "text-foreground font-semibold" // Active internal link
          : "text-foreground/60 hover:text-foreground", // Inactive internal or any external link
        className // Allow overriding/extending styles
      )}
      onClick={onClick}
      aria-label={defaultAriaLabel}
      {...linkProps}
    >
      {children}
    </Link>
  );
};
