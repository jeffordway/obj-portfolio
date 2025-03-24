import { hasAnalyticsConsent } from './state';

// Google Analytics Measurement ID
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your actual GA ID

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window === 'undefined') return;
  
  // Check if GA script is already loaded
  if (!window.gtag) {
    // Add the GA script
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.async = true;
    document.head.appendChild(script);
    
    // Initialize gtag
    window.gtag = function() {
      // @ts-ignore
      window.dataLayer = window.dataLayer || [];
      // @ts-ignore
      window.dataLayer.push(arguments);
    };
    
    // Set the initial timestamp
    // @ts-ignore - 'js' is a valid gtag command but TypeScript doesn't recognize it
    window.gtag('js', new Date());
  }
  
  // Set default consent to 'denied' until user provides consent
  window.gtag('consent', 'default', {
    'analytics_storage': 'denied',
    'ad_storage': 'denied',
    'functionality_storage': 'denied',
    'personalization_storage': 'denied',
    'security_storage': 'granted', // Always grant security storage
  });
  
  // Check if user has already given consent
  if (hasAnalyticsConsent()) {
    window.gtag('consent', 'update', {
      'analytics_storage': 'granted',
      'functionality_storage': 'granted',
      'personalization_storage': 'granted',
    });
  }
  
  // Configure GA with anonymized IP
  window.gtag('config', GA_MEASUREMENT_ID, {
    anonymize_ip: true,
    send_page_view: false, // We'll handle page views manually
  });
};

// Track page views
export const pageview = (url: string) => {
  if (typeof window === 'undefined' || !hasAnalyticsConsent()) return;
  
  window.gtag('event', 'page_view', {
    page_path: url,
    send_to: GA_MEASUREMENT_ID,
  });
};

// Track events
export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window === 'undefined' || !hasAnalyticsConsent()) return;
  
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
    send_to: GA_MEASUREMENT_ID,
  });
};
