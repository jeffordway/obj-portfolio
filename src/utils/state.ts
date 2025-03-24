import { observable } from '@legendapp/state';
import { persistObservable } from '@legendapp/state/persist';
import { ObservablePersistLocalStorage } from '@legendapp/state/persist-plugins/local-storage';

// Cookie consent state
export interface CookieConsentState {
  accepted: boolean;
  analytics: boolean;
  preferences: boolean;
  timestamp: string | null;
}

// Define the initial state
const initialCookieState: CookieConsentState = {
  accepted: false,
  analytics: false,
  preferences: false,
  timestamp: null,
};

// Create the observable state
export const cookieState = observable({
  consent: initialCookieState,
});

// Set up persistence using localStorage
persistObservable(cookieState, {
  local: 'portfolio-cookie-state',
  pluginLocal: ObservablePersistLocalStorage,
});

// Helper functions for cookie consent
export const getCookieConsent = () => {
  return cookieState.consent.get();
};

export const hasAnalyticsConsent = () => {
  const consent = getCookieConsent();
  return consent.accepted && consent.analytics;
};

export const hasPreferencesConsent = () => {
  const consent = getCookieConsent();
  return consent.accepted && consent.preferences;
};

export const resetCookieConsent = () => {
  cookieState.consent.set(initialCookieState);
};
