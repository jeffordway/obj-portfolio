"use client";

import React from "react";
import { Button } from "@/components/ui/button";

interface CookieSettingsButtonProps {
  /** Optional CSS class name for styling */
  className?: string;
  /** Button visual style variant */
  variant?: "primary" | "accent" | "outline" | "ghost" | "link";
  /** Button size */
  size?: "sm" | "md" | "lg";
}

/**
 * Cookie Settings Button Component
 * 
 * A button that opens the CookieYes consent management dialog when clicked.
 * This is a client component to handle the onClick event and interact with the CookieYes API.
 */
export function CookieSettingsButton({ 
  className, 
  variant = "primary",
  size = "md"
}: CookieSettingsButtonProps) {
  /**
   * Opens the CookieYes consent management dialog
   * Uses the global revisitCkyConsent function injected by CookieYes script
   */
  const handleClick = () => {
    // Safely access the CookieYes function with type assertion
    const cookieYesWindow = window as typeof window & {
      revisitCkyConsent?: () => void;
    };
    
    // Only call the function if it exists
    if (cookieYesWindow.revisitCkyConsent) {
      cookieYesWindow.revisitCkyConsent();
    }
  };

  return (
    <Button 
      variant={variant}
      size={size}
      className={className}
      onClick={handleClick}
    >
      Cookie Settings
    </Button>
  );
}
