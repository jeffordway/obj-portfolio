"use client";

import React from 'react';
import Link from 'next/link';
import { clsx } from 'clsx';

export interface NavSocialProps {
  /**
   * URL the link points to
   */
  href: string;
  
  /**
   * Name of the social platform
   */
  name: string;
  
  /**
   * Icon component to display
   */
  icon: React.ReactNode;
  
  /**
   * Optional click handler
   */
  onClick?: () => void;
  
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Social media navigation link component with icon
 */
export const NavSocial: React.FC<NavSocialProps> = ({
  href,
  name,
  icon,
  onClick,
  className,
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        'text-foreground/60 hover:text-foreground transition-colors',
        className
      )}
      aria-label={name}
      onClick={onClick}
    >
      {icon}
    </Link>
  );
};
