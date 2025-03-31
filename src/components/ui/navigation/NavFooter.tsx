"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";

import { NavigationLink } from "./NavigationLink";
import { navItems, footerLinks, socialLinks } from "@/constants";

/**
 * Props for the NavFooter component
 * 
 * @example
 * <NavFooter className="my-custom-class" />
 */
export interface NavFooterProps {
  /** Additional CSS classes to apply to the footer navigation */
  className?: string;
}

/**
 * NavFooter Component
 * 
 * A comprehensive footer navigation component with site links, social media icons,
 * and copyright information. Provides a consistent navigation experience in the
 * footer area with proper accessibility attributes and responsive layout.
 */
export const NavFooter = ({ className }: NavFooterProps) => {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();
  
  return (
    <div 
      className={clsx(
        "w-full flex flex-col items-center gap-6",
        className
      )}
    >
      {/* Main navigation links */}
      <nav 
        aria-label="Footer Navigation" 
        className="flex flex-wrap justify-center gap-x-12 gap-y-3"
      >
        {navItems.map((item) => (
          <NavigationLink
            key={item.href}
            href={item.href}
          >
            {item.label}
          </NavigationLink>
        ))}
      </nav>
      
      {/* Social media links */}
      <div className="flex justify-center gap-x-8">
        {socialLinks.map((link) => {
          // Determine which icon to use based on iconName
          let icon;
          switch (link.iconName) {
            case "github":
              icon = <FaGithub size={20} />;
              break;
            case "linkedin":
              icon = <FaLinkedin size={20} />;
              break;
            case "twitter":
              icon = <FaXTwitter size={20} />;
              break;
            default:
              icon = null;
          }
          
          return (
            <NavigationLink
              key={link.name}
              href={link.href}
              ariaLabel={link.name}
              external
            >
              {icon}
            </NavigationLink>
          );
        })}
      </div>
      
      {/* Footer links */}
      <nav 
        aria-label="Footer Legal Links" 
        className="flex flex-wrap justify-center gap-x-6 gap-y-2"
      >
        {footerLinks.map((item) => (
          <NavigationLink
            key={item.href}
            href={item.href}
            className="text-sm text-foreground/70 hover:text-foreground/90"
          >
            {item.label}
          </NavigationLink>
        ))}
      </nav>
      
      {/* Copyright notice */}
      <p className="text-center text-sm text-foreground/60">
        &copy; {currentYear} Nielsen Ossowski Creative LLC. All rights reserved.
      </p>
    </div>
  );
};
