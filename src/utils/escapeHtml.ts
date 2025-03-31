/**
 * Utility function to escape HTML entities in text
 * Used to fix ESLint react/no-unescaped-entities warnings
 * 
 * @param text The text to escape
 * @returns The escaped text with proper HTML entities
 */
export function escapeHtml(text: string): string {
  return text
    .replace(/'/g, '&apos;')
    .replace(/"/g, '&quot;');
}
