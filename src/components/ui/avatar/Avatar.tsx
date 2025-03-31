"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { clsx } from "clsx";

export interface AvatarProps {
  /**
   * Source URL for the avatar image
   */
  src: string;
  
  /**
   * Alt text for the avatar image
   */
  alt: string;
  
  /**
   * Size of the avatar in pixels
   * @default 120
   */
  size?: number;
  
  /**
   * Whether to show a border around the avatar
   * @default true
   */
  showBorder?: boolean;
  
  /**
   * Border color class (Tailwind)
   * @default 'border-foreground'
   */
  borderColor?: string;
  
  /**
   * Border width in pixels
   * @default 2
   */
  borderWidth?: number;
  
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Avatar Component
 * 
 * A flexible component for displaying user profile images with customizable size,
 * border, and styling options. Optimized for use with Next.js Image component.
 * 
 * Includes hydration safety measures to prevent client/server rendering mismatches.
 */
const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = 120,
  showBorder = true,
  borderColor = "border-foreground",
  borderWidth = 2,
  className,
}) => {
  // Use client-side only rendering to prevent hydration mismatches
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Render a placeholder during SSR to prevent hydration issues
  if (!isMounted) {
    return (
      <div
        className={clsx(
          "relative",
          "rounded-full overflow-hidden",
          showBorder && [
            "border",
            borderColor,
          ],
          className
        )}
        style={{
          width: size,
          height: size,
          borderWidth: showBorder ? borderWidth : 0,
        }}
      />
    );
  }
  
  return (
    <div
      className={clsx(
        "relative",
        "rounded-full overflow-hidden",
        showBorder && [
          "border",
          borderColor,
        ],
        className
      )}
      style={{
        width: size,
        height: size,
        borderWidth: showBorder ? borderWidth : 0,
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes={`${size}px`}
        className="object-cover"
      />
    </div>
  );
};

export default Avatar;
