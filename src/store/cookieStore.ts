/**
 * Cookie consent management using Zustand
 */
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { setCookie, getCookie, deleteCookie } from 'cookies-next';

/**
 * Cookie consent state interface
 */
export interface CookieConsentState {
  accepted: boolean;
  analytics: boolean;
  preferences: boolean;
  timestamp: string | null;
}

/**
 * Cookie name constant
 */
export const COOKIE_NAME = 'portfolio-cookie-consent';

/**
 * Cookie expiry in days
 */
export const COOKIE_EXPIRY_DAYS = 365;

/**
 * Initial cookie consent state
 */
export const initialCookieState: CookieConsentState = {
  accepted: false,
  analytics: false,
  preferences: false,
  timestamp: null,
};

/**
 * Interface for the cookie consent store
 */
interface CookieConsentStore {
  consent: CookieConsentState;
  updateConsent: (newConsent: Partial<CookieConsentState>) => void;
  resetConsent: () => void;
  hasAnalyticsConsent: () => boolean;
  hasPreferencesConsent: () => boolean;
}

/**
 * Zustand store for cookie consent
 */
export const useCookieStore = create<CookieConsentStore>()(
  persist(
    (set, get) => ({
      consent: initialCookieState,
      
      updateConsent: (newConsent: Partial<CookieConsentState>) => {
        const updatedConsent = {
          ...get().consent,
          ...newConsent,
          timestamp: new Date().toISOString(),
        };
        
        // Update the store
        set({ consent: updatedConsent });
        
        // Update the cookie for non-JS clients and SSR
        setCookie(COOKIE_NAME, JSON.stringify(updatedConsent), { 
          expires: new Date(Date.now() + COOKIE_EXPIRY_DAYS * 24 * 60 * 60 * 1000),
          sameSite: 'strict'
        });
        
        // Update Google Analytics consent if available
        if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
          // Use type assertion to avoid TypeScript errors
          const gtag = window.gtag as (command: string, action: string, params: Record<string, any>) => void;
          gtag('consent', 'update', {
            analytics_storage: updatedConsent.analytics ? 'granted' : 'denied',
            functionality_storage: updatedConsent.preferences ? 'granted' : 'denied',
            personalization_storage: updatedConsent.preferences ? 'granted' : 'denied',
          });
        }
      },
      
      resetConsent: () => {
        // Reset to initial state
        set({ consent: initialCookieState });
        
        // Remove the cookie
        deleteCookie(COOKIE_NAME);
        
        // Disable all cookies in Google Analytics
        if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
          // Use type assertion to avoid TypeScript errors
          const gtag = window.gtag as (command: string, action: string, params: Record<string, any>) => void;
          gtag('consent', 'update', {
            analytics_storage: 'denied',
            functionality_storage: 'denied',
            personalization_storage: 'denied',
          });
        }
      },
      
      hasAnalyticsConsent: () => {
        const { consent } = get();
        return consent.accepted && consent.analytics;
      },
      
      hasPreferencesConsent: () => {
        const { consent } = get();
        return consent.accepted && consent.preferences;
      },
    }),
    {
      name: 'cookie-consent-storage',
      storage: createJSONStorage(() => localStorage),
      // Initialize from existing cookie if available
      onRehydrateStorage: () => {
        return (state) => {
          if (!state) return;
          
          // Check for existing cookie and use it if available
          if (typeof window !== 'undefined') {
            const storedConsent = getCookie(COOKIE_NAME);
            if (storedConsent) {
              try {
                const parsedConsent = JSON.parse(storedConsent as string);
                state.consent = parsedConsent;
              } catch (e) {
                // Invalid JSON, ignore
              }
            }
          }
        };
      },
    }
  )
);


