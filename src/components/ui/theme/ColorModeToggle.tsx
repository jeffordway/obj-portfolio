'use client';

import React from 'react';
import { useThemeStore } from '@/store/themeStore';
import { clsx } from 'clsx';
import { RiSunLine, RiMoonLine } from 'react-icons/ri';

interface ColorModeToggleProps {
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * Size of the toggle button in pixels
   * @default 48
   */
  size?: number;
  
  /**
   * Position of the toggle button
   * @default 'bottom-right'
   */
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  
  /**
   * Margin from the edge of the screen in pixels
   * @default 24
   */
  margin?: number;
  
  /**
   * Z-index of the toggle button
   * @default 50
   */
  zIndex?: number;
}

/**
 * Color Mode Toggle Component
 * 
 * A floating action button (FAB) that toggles between light and dark mode.
 * Positioned in the corner of the screen with customizable placement.
 */
const ColorModeToggle: React.FC<ColorModeToggleProps> = ({
  className,
  size = 48,
  position = 'bottom-right',
  margin = 24,
  zIndex = 50,
}) => {
  const { colorMode, toggleColorMode } = useThemeStore();
  
  // Determine position classes based on the position prop
  const positionClasses = {
    'bottom-right': 'bottom-0 right-0',
    'bottom-left': 'bottom-0 left-0',
    'top-right': 'top-0 right-0',
    'top-left': 'top-0 left-0',
  }[position];
  
  return (
    <button
      aria-label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`}
      onClick={toggleColorMode}
      className={clsx(
        'fixed',
        positionClasses,
        'rounded-full',
        'flex items-center justify-center',
        'bg-background',
        'border border-foreground/10',
        'shadow-lg',
        'transition-all duration-400 ease-in-out',
        'hover:scale-110',
        'focus:outline-none focus:ring-2 focus:ring-accent',
        className
      )}
      style={{
        width: size,
        height: size,
        margin: margin,
        zIndex: zIndex,
      }}
    >
      {colorMode === 'light' ? (
        <RiMoonLine className="w-6 h-6 text-foreground" />
      ) : (
        <RiSunLine className="w-6 h-6 text-foreground" />
      )}
    </button>
  );
};

export default ColorModeToggle;
