/**
 * Global TypeScript declarations
 * 
 * This file contains type definitions that extend global interfaces
 * for use throughout the application.
 */

/**
 * Google Analytics gtag extension for the Window interface
 * Enables proper typing for Google Analytics tracking functions
 */
interface Window {
  gtag: (
    command: "consent" | "config" | "event" | "set",
    target: string,
    config?: {
      [key: string]: any;
    }
  ) => void;
}
