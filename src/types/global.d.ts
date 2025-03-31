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
  /**
   * Google Analytics data layer array
   */
  dataLayer: unknown[];

  /**
   * Google Analytics gtag function
   */
  gtag: {
    // Function overloads to handle different command types
    (command: "js", timestamp: Date): void;
    (command: "consent" | "config" | "event" | "set", 
     target: string,
     config?: {
       [key: string]: string | number | boolean | null | undefined | Record<string, unknown>;
     }
    ): void;
  };
}
