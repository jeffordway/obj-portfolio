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
        'py-12 px-4 md:px-6 lg:px-8',
        'border-t border-foreground/10',
        className
      )}
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="text-foreground/70 mb-4 md:mb-0">
            {copyrightText}
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-accent transition-colors"
              >
                {link.platform}
              </a>
            ))}
          </div>
        </div>
        
        {/* Back to Top Button */}
        {showBackToTop && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={handleBackToTop}
              className="text-foreground hover:text-accent transition-colors"
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
