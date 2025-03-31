import { type ClassValue, clsx } from "clsx";

/**
 * Utility for combining CSS class names
 * 
 * This is a wrapper around clsx for combining class names conditionally.
 * It's particularly useful with Tailwind CSS for conditional styling.
 * 
 * @param inputs - Class names or conditional class objects to combine
 * @returns Combined class string ready to use in className prop
 * 
 * @example
 * // Basic usage
 * <div className={cn("base-class", isActive && "active-class")} />
 * 
 * // With conditional object
 * <div className={cn("base-class", { "active-class": isActive })} />
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
