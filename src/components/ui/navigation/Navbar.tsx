"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";
import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";
import { createPortal } from "react-dom";

import { NavigationLink } from "./NavigationLink";
import { NavLogo } from "./NavLogo";
import { navItems, socialLinks } from "@/constants";

/**
 * Props for the Navbar component
 * 
 * @example
 * <Navbar className="my-custom-class" />
 */
export interface NavbarProps {
  /** Additional CSS classes to apply to the navbar */
  className?: string;
}

/**
 * Main navigation bar component that displays navigation links, logo, and social links
 * Includes responsive mobile menu with full-screen overlay
 */
export const Navbar = ({ className }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // Handle client-side only rendering for the portal
  useEffect(() => {
    setMounted(true);
    
    // Lock body scroll when menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Mobile menu component
  const MobileMenu = () => (
    <div className="fixed inset-0 top-0 left-0 w-screen h-screen z-[9999] bg-background flex flex-col">
      {/* Close button positioned at the top right */}
      <div className="flex justify-end p-6">
        <button
          className="p-2 text-foreground/60 hover:text-foreground transition-colors"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <IoCloseSharp size={24} />
        </button>
      </div>
      
      {/* Centered navigation links */}
      <nav className="flex-1 flex flex-col items-center justify-center gap-8">
        {navItems.map((item) => (
          <NavigationLink
            key={item.href}
            href={item.href}
            isActive={pathname === item.href}
            onClick={() => setMobileMenuOpen(false)}
            className="text-xl"
          >
            {item.label}
          </NavigationLink>
        ))}
      </nav>

      {/* Social links at the bottom */}
      <div className="flex justify-center items-center space-x-8 p-8">
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
            <NavigationLink
              key={link.name}
              href={link.href}
              ariaLabel={link.name}
              onClick={() => setMobileMenuOpen(false)}
              external
            >
              {icon}
            </NavigationLink>
          );
        })}
      </div>
    </div>
  );

  return (
    <div 
      className={clsx(
        "relative",
        className
      )}
    >
      <div className="relative flex items-center justify-between h-12">
        {/* Left Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <NavigationLink
              key={item.href}
              href={item.href}
              isActive={pathname === item.href}
            >
              {item.label}
            </NavigationLink>
          ))}
        </nav>

        {/* Center Logo */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-12 flex items-center"
        >
          <NavLogo size={160} />
        </div>

        {/* Right Social Icons */}
        <div className="hidden md:flex items-center space-x-8">
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

        {/* Mobile Menu Button - Right aligned */}
        <button
          className="md:hidden p-2 ml-auto text-foreground/60 hover:text-foreground transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <IoCloseSharp size={24} />
          ) : (
            <IoMenuSharp size={24} />
          )}
        </button>
      </div>

      {/* Mobile Navigation - Full Screen Portal */}
      {mounted && mobileMenuOpen && createPortal(<MobileMenu />, document.body)}
    </div>
  );
};
