import { create } from "zustand";
import { persist } from "zustand/middleware";

// Analytics state interface
interface AnalyticsState {
  // Whether the user has consented to analytics
  consent: boolean;
  // Function to update consent status
  setConsent: (value: boolean) => void;
}

// Create analytics store with persistence
export const useAnalyticsStore = create<AnalyticsState>()(
  persist(
    (set) => ({
      consent: false,
      setConsent: (value) => set({ consent: value }),
    }),
    {
      name: "portfolio-analytics-storage",
    }
  )
);

// Helper functions for accessing analytics state outside of React components

/**
 * Check if user has given consent for analytics
 * @returns Current consent status
 */
export const hasAnalyticsConsent = (): boolean => useAnalyticsStore.getState().consent;

/**
 * Set analytics consent status
 * @param value New consent status
 */
export const setAnalyticsConsent = (value: boolean): void => useAnalyticsStore.getState().setConsent(value);
