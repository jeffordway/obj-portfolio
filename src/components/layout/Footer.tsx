"use client";

import React from 'react';
import { clsx } from 'clsx';

export interface FooterProps {
  /**
   * Whether to show a back-to-top button
   * @default true
   */
  showBackToTop?: boolean;
  
  /**
   * Social media links to display
   */
  socialLinks?: Array<{
    platform: 'twitter' | 'linkedin' | 'github' | 'instagram';
    url: string;
  }>;
  
  /**
   * Copyright text
   * @default `© ${currentYear} Your Name`
   */
  copyrightText?: string;
  
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Footer component
 */
const Footer: React.FC<FooterProps> = ({
  showBackToTop = true,
  socialLinks = [
    { platform: 'twitter', url: 'https://twitter.com' },
    { platform: 'github', url: 'https://github.com' },
    { platform: 'linkedin', url: 'https://linkedin.com' },
  ],
  copyrightText = `© ${new Date().getFullYear()} Your Name`,
  className,
}) => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer 
      className={clsx(
        'py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 lg:px-12',
        'border-t border-foreground/10',
        'transition-all duration-300', // Smooth transitions between breakpoints
        className
      )}
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-foreground/70 text-sm sm:text-base text-center md:text-left">
            {copyrightText}
          </div>
          
          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-accent transition-colors text-sm sm:text-base px-2 py-1 rounded hover:bg-foreground/5"
                aria-label={`Visit ${link.platform}`}
              >
                {link.platform}
              </a>
            ))}
          </div>
        </div>
        
        {/* Back to Top Button */}
        {showBackToTop && (
          <div className="mt-6 sm:mt-8 flex justify-center">
            <button
              onClick={handleBackToTop}
              className="text-foreground hover:text-accent transition-colors px-4 py-2 rounded-full hover:bg-foreground/5 text-sm sm:text-base"
              aria-label="Back to top"
            >
              Back to Top ↑
            </button>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
