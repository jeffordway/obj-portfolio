'use client';

import React, { useEffect } from 'react';
import { useThemeStore } from '@/store/themeStore';

interface ThemeProviderProps {
  children: React.ReactNode;
}

/**
 * Theme Provider Component
 * 
 * Applies the current theme from the theme store to the document
 * and handles theme changes.
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const { colorMode } = useThemeStore();
  
  // Apply theme to document element when it changes
  useEffect(() => {
    // Remove both classes first to ensure clean state
    document.documentElement.classList.remove('light-mode');
    document.documentElement.classList.remove('dark-mode');
    
    // Add the current mode class
    document.documentElement.classList.add(`${colorMode}-mode`);
    
    // Update color-scheme for browser UI elements
    document.documentElement.style.colorScheme = colorMode;
  }, [colorMode]);
  
  return <>{children}</>;
};

export default ThemeProvider;
