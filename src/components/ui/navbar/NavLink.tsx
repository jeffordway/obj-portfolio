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
}) => {
  return (
    <Link
      href={href}
      className={clsx(
        'text-sm font-medium transition-colors',
        isActive 
          ? 'text-foreground' 
          : 'text-foreground/60 hover:text-foreground',
        className
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};
