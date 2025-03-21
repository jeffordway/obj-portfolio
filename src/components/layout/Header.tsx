"use client";

import React, { useState } from 'react';
import { clsx } from 'clsx';
import { useScroll } from './MainLayout';

export interface HeaderProps {
  /**
   * Whether to make the header transparent over the hero
   * @default true
   */
  transparent?: boolean;
  
  /**
   * Whether to change opacity on scroll
   * @default true
   */
  dynamicOpacity?: boolean;
  
  /**
   * Custom navigation items
   */
  navItems?: Array<{
    label: string;
    href: string;
  }>;
  
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Header component with navigation
 */
const Header: React.FC<HeaderProps> = ({
  transparent = true,
  dynamicOpacity = true,
  navItems = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  className,
}) => {
  const { scrollY, isPastHero } = useScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Calculate background opacity based on scroll position
  const bgOpacity = dynamicOpacity && transparent
    ? Math.min(scrollY / 200, 0.8)
    : transparent ? 0 : 1;
  
  return (
    <header 
      className={clsx(
        'fixed top-0 left-0 right-0',
        'z-30', // Higher z-index than hero and content
        'px-4 py-4 md:px-6 md:py-5',
        'transition-all duration-200 ease-in-out',
        'backdrop-blur-sm',
        className
      )}
      style={{ 
        backgroundColor: `rgba(var(--background-rgb), ${bgOpacity})`,
      }}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-foreground font-bold text-xl">Logo</div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className="text-foreground hover:text-accent transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background p-4">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-accent transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
