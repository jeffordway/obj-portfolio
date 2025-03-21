"use client";

import React from 'react';
import Link from 'next/link';
import { clsx } from 'clsx';

export interface NavLinkProps {
  /**
   * URL the link points to
   */
  href: string;
  
  /**
   * Whether this link is currently active
   */
  isActive: boolean;
  
  /**
   * Link content
   */
  children: React.ReactNode;
  
  /**
   * Optional click handler
   */
  onClick?: () => void;
  
  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Whether to disable the active styles
   * @default false
   */
  disableActiveStyles?: boolean;
}

/**
 * Navigation link component with active state styling
 */
export const NavLink: React.FC<NavLinkProps> = ({
  href,
  isActive,
  children,
  onClick,
  className,
  disableActiveStyles = false,
}) => {
  return (
    <Link
      href={href}
      className={clsx(
        'text-sm font-medium transition-all duration-200',
        isActive 
          ? disableActiveStyles
            ? 'text-foreground/60 hover:text-foreground hover:scale-110 transform' // Same as inactive but with hover effect
            : 'text-foreground font-semibold hover:scale-110 transform'
          : 'text-foreground/60 hover:text-foreground hover:scale-110 transform',
        className
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};
