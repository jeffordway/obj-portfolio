"use client";

import React from "react";
import Link from "next/link";
import { Button, ButtonVariant } from "./Button";

export interface ActionButtonProps {
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
   * Optional icon to show before text
   */
  leftIcon?: React.ReactNode;
  
  /**
   * Optional icon to show after text
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

/**
 * ActionButton Component
 * 
 * A versatile button component that handles both internal and external links with proper
 * event handling for anchor links. Provides smooth scrolling for anchor links and
 * appropriate attributes for external links.
 * 
 * Built on top of the base Button component with added link functionality.
 */
const ActionButton: React.FC<ActionButtonProps> = ({
  text,
  url,
  variant,
  isExternal = false,
  leftIcon,
  rightIcon,
  size = "md",
  rounded = "md",
  onClick
}) => {
  // Handle anchor links (URLs starting with #)
  const isAnchorLink = !isExternal && url.startsWith("#");
  
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // If we have an onClick handler, call it
    if (onClick) {
      onClick(e);
      return;
    }
    
    // For anchor links, handle smooth scrolling manually
    if (isAnchorLink) {
      e.preventDefault();
      const targetId = url.substring(1); // Remove the # character
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  
  // Use a regular anchor tag for hash links to ensure proper functionality
  if (isAnchorLink) {
    return (
      <a
        href={url}
        className="inline-block"
        onClick={(e) => {
          e.preventDefault();
          const targetId = url.substring(1);
          const targetElement = document.getElementById(targetId);
          
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        <Button
          variant={variant}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          size={size}
          rounded={rounded}
          onClick={handleClick}
        >
          {text}
        </Button>
      </a>
    );
  }
  
  // Use Next.js Link for regular navigation
  return (
    <Link 
      href={url}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="inline-block"
    >
      <Button
        variant={variant}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        size={size}
        rounded={rounded}
        onClick={onClick}
      >
        {text}
      </Button>
    </Link>
  );
};

export default ActionButton;
