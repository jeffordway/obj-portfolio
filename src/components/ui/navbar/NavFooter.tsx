"use client";

import React from 'react';
import { usePathname } from "next/navigation";
import { clsx } from 'clsx';
import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";

import { NavLink } from './NavLink';
import { NavSocial } from './NavSocial';
import { navItems, footerLinks, socialLinks } from '../../../constants';

export interface NavFooterProps {
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Footer navigation component with links and social media icons
 */
export const NavFooter: React.FC<NavFooterProps> = ({ className }) => {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();
  
  return (
    <div className={clsx("w-full flex flex-col items-center gap-6", className)}>
      {/* Main navigation links */}
      <nav 
        aria-label="Footer Navigation" 
        className="flex flex-wrap justify-center gap-x-12 gap-y-3"
      >
        {navItems.map((item) => (
          <NavLink
            key={item.href}
            href={item.href}
            isActive={pathname === item.href}
            disableActiveStyles={true}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      
      {/* Social media links */}
      <div className="flex justify-center gap-x-8">
        {socialLinks.map((link) => {
          // Determine which icon to use based on iconName
          let icon;
          switch (link.iconName) {
            case 'github':
              icon = <FaGithub size={20} />;
              break;
            case 'linkedin':
              icon = <FaLinkedin size={20} />;
              break;
            case 'twitter':
              icon = <FaXTwitter size={20} />;
              break;
            default:
              icon = null;
          }
          
          return (
            <NavSocial
              key={link.name}
              href={link.href}
              name={link.name}
              icon={icon}
            />
          );
        })}
      </div>
      
      {/* Footer links */}
      <nav 
        aria-label="Footer Legal Links" 
        className="flex flex-wrap justify-center gap-x-6 gap-y-2"
      >
        {footerLinks.map((item) => (
          <NavLink
            key={item.href}
            href={item.href}
            isActive={pathname === item.href}
            disableActiveStyles={true}
            className="text-sm text-foreground/70 hover:text-foreground/90 transition-colors"
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      
      {/* Copyright notice */}
      <p className="text-center text-sm text-foreground/60">
        &copy; {currentYear} Jeff Ordway. All rights reserved.
      </p>
    </div>
  );
};
