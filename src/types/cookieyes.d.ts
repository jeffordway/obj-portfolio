/**
 * Type declarations for CookieYes global object
 */
interface CookieYesInterface {
  /**
   * Accept all cookie categories
   */
  acceptAll: () => void;
  
  /**
   * Reject all cookie categories
   */
  rejectAll: () => void;
  
  /**
   * Accept a specific cookie category
   * @param category The cookie category to accept ('necessary', 'functional', 'analytics', etc.)
   */
  acceptCategory: (category: string) => void;
  
  /**
   * Reject a specific cookie category
   * @param category The cookie category to reject ('necessary', 'functional', 'analytics', etc.)
   */
  rejectCategory: (category: string) => void;
  
  /**
   * Show the cookie consent banner
   */
  show: () => void;
  
  /**
   * Hide the cookie consent banner
   */
  hide: () => void;
}

/**
 * Extend the Window interface to include CookieYes
 */
interface Window {
  CookieYes?: CookieYesInterface;
}
