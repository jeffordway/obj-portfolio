/**
 * Analytics Utilities
 * 
 * This file contains utilities for Google Analytics integration,
 * including initialization, page view tracking, and event tracking.
 */

// Google Analytics Measurement ID from environment variables
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";

/**
 * Initialize Google Analytics
 * Sets up GA script and configures consent mode and privacy settings
 */
export const initGA = () => {
  if (typeof window === "undefined" || !GA_MEASUREMENT_ID) return;
  
  // Check if GA script is already loaded
  if (typeof window.gtag !== "function") {
    // Add the GA script
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.async = true;
    document.head.appendChild(script);
    
    // Initialize dataLayer and gtag function
    // Initialize dataLayer and gtag function
    window.dataLayer = window.dataLayer || [];
    window.gtag = function(...args: [string, string | Date, Record<string, unknown>?]) {
      // Use rest parameters instead of arguments object
      window.dataLayer.push(args);
    };
    
    // Set the initial timestamp
    // Set the initial timestamp
    window.gtag("js", new Date());
  }
  
  // Configure Google Consent Mode v2 with default settings
  // CookieYes will update these settings based on user consent
  // Configure consent mode
  window.gtag("consent", "default", {
    "analytics_storage": "denied",
    "ad_storage": "denied",
    "functionality_storage": "denied",
    "personalization_storage": "denied",
    "security_storage": "granted", // Always grant security storage
    "wait_for_update": 500 // Wait for CookieYes to update consent
  });
  
  // Configure GA4 with privacy settings
  // Configure Google Analytics
  window.gtag("config", GA_MEASUREMENT_ID, {
    anonymize_ip: true,
    send_page_view: false, // We'll handle page views manually for better control
  });
};

/**
 * Track page views in Google Analytics
 * @param url - The URL path to track
 */
export const pageview = (url: string) => {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  
  // Track page view
  window.gtag("event", "page_view", {
    page_path: url,
    send_to: GA_MEASUREMENT_ID,
  });
};

/**
 * Track custom events in Google Analytics
 * @param params - Event parameters including action, category, optional label and value
 */
export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  
  // Track custom event
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
    send_to: GA_MEASUREMENT_ID,
  });
};
