import { Inter } from "next/font/google";

/**
 * Primary font configuration for the application
 * - Using variable font support for better performance
 * - Preloading for faster rendering
 * - Display swap to prevent FOIT (Flash of Invisible Text)
 */
export const primaryFont = Inter({
  variable: "--font-main",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});
