"use client";

import React from 'react';
import Link from 'next/link';
import { clsx } from 'clsx';

/**
 * Props for the NavSocial component
 * 
 * @example
 * <NavSocial 
 *   href="https://github.com/username"
 *   name="GitHub"
 *   icon={<FaGithub size={20} />}
 * />
 */
export interface NavSocialProps {
  /** URL the link points to */
  href: string;
  
  /** Name of the social platform (for accessibility) */
  name: string;
  
  /** Icon component to display */
  icon: React.ReactNode;
  
  /** Optional click handler */
  onClick?: () => void;
  
  /** Additional CSS classes */
  className?: string;
}

/**
 * Social media navigation link component with icon
 * Provides consistent styling and accessibility for social media links
 */
export const NavSocial = ({
  href,
  name,
  icon,
  onClick,
  className,
}: NavSocialProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        'text-foreground/60 hover:text-foreground transition-colors duration-200',
        'hover:scale-110 transform',
        className
      )}
      aria-label={name}
      onClick={onClick}
    >
      {icon}
    </Link>
  );
};
