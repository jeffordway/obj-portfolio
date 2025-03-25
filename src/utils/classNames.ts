import { type ClassValue, clsx } from "clsx";

/**
 * Combines multiple class names
 * @param inputs - Class names to combine
 * @returns Combined class string
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
