import React from "react";
import { clsx } from "clsx";

export interface ScrollableContentProps {
  /**
   * Child components to render within the scrollable content
   */
  children: React.ReactNode;
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * Amount of content to peek above the fold in viewport height units (vh)
   * @default 15
   */
  peekHeight?: number;
}

/**
 * ScrollableContent component following Spencer Peppiatt's implementation pattern.
 * 
 * This component creates a section that sits at the bottom of the viewport initially,
 * with a configurable amount showing (peeking), and then scrolls up over the hero
 * when the user scrolls down.
 */
const ScrollableContent: React.FC<ScrollableContentProps> = ({
  children,
  className,
  // Completely hidden with just the edge visible
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  peekHeight = 0
}) => {
  return (
    <div
      className={clsx(
        "scrollable-content", // Global CSS class for positioning
        "relative", // Standard positioning in document flow
        "w-full",
        "bg-background",
        "rounded-t-3xl",
        "shadow-xl",
        "z-10", // Above hero
        className
      )}
      data-testid="scrollable-content"
    >
      <div className="w-full px-4 md:px-6 py-8">
        {children}
      </div>
    </div>
  );
};

export default ScrollableContent;
