'use client';

import React from 'react';
import { Button } from '@/components/ui/button';

interface CookieSettingsButtonProps {
  className?: string;
  variant?: 'primary' | 'accent' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Client component for the cookie settings button
 * This needs to be a client component to handle the onClick event
 */
export function CookieSettingsButton({ 
  className, 
  variant = 'primary',
  size = 'md'
}: CookieSettingsButtonProps) {
  const handleClick = () => {
    // Safely access the CookieYes function
    const cookieYesWindow = window as typeof window & {
      revisitCkyConsent?: () => void;
    };
    
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
