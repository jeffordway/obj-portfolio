/**
 * Typography constants for consistent styling across components
 */

export const TYPOGRAPHY = {
  /**
   * Opacity values for text variants
   */
  opacity: {
    /**
     * Opacity value for muted text (70%)
     */
    muted: "70",
  },
  
  /**
   * Helper function to get Tailwind opacity class for text
   * @param color The base color class
   * @param opacity The opacity value (e.g., "70")
   * @returns Tailwind class with opacity
   */
  getOpacityClass: (color: string, opacity: string) => `${color}/${opacity}`,
};

/**
 * Get the muted text class with the specified color
 * @param color The base color class (default: "text-foreground")
 * @returns Tailwind class with muted opacity
 */
export const getMutedTextClass = (color = "text-foreground") => 
  TYPOGRAPHY.getOpacityClass(color, TYPOGRAPHY.opacity.muted);
