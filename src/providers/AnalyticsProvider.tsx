'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { getCookie } from 'cookies-next';

// Google Analytics Measurement ID
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your actual GA ID

// Type definitions for gtag
type GTagCommand = 'consent' | 'config' | 'event' | 'set' | 'js';
type GTagParams = Record<string, any>;

// Initialize Google Analytics
const initGA = () => {
  if (typeof window === 'undefined') return;
  
  // Check if GA script is already loaded
  if (!(window as any).gtag) {
    // Add the GA script
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.async = true;
    document.head.appendChild(script);
    
    // Initialize gtag
    (window as any).gtag = function(...args: any[]) {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push(arguments);
    };
    
    // Set the initial timestamp
    (window as any).gtag('js', new Date());
  }
  
  // Set default consent to 'denied' until user provides consent
  (window as any).gtag('consent', 'default', {
    'analytics_storage': 'denied',
    'ad_storage': 'denied',
    'functionality_storage': 'denied',
    'personalization_storage': 'denied',
    'security_storage': 'granted', // Always grant security storage
  });
  
  // Check if user has already given consent
  const consentCookie = getCookie('portfolio-cookie-consent');
  if (consentCookie) {
    try {
      const parsedCookie = JSON.parse(consentCookie as string);
      if (parsedCookie.analytics) {
        (window as any).gtag('consent', 'update', {
          'analytics_storage': 'granted',
          'functionality_storage': 'granted',
          'personalization_storage': 'granted',
        });
      }
    } catch (e) {
      console.error('Error parsing consent cookie:', e);
    }
  }
  
  // Configure GA with anonymized IP
  (window as any).gtag('config', GA_MEASUREMENT_ID, {
    anonymize_ip: true,
    send_page_view: false, // We'll handle page views manually
  });
};

// Track page views
const pageview = (url: string) => {
  if (typeof window === 'undefined') return;
  
  const consentCookie = getCookie('portfolio-cookie-consent');
  if (!consentCookie) return;
  
  try {
    const parsedCookie = JSON.parse(consentCookie as string);
    if (!parsedCookie.analytics) return;
    
    (window as any).gtag('event', 'page_view', {
      page_path: url,
      send_to: GA_MEASUREMENT_ID,
    });
  } catch (e) {
    console.error('Error parsing consent cookie:', e);
  }
};

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

export default function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const initialized = useRef(false);

  useEffect(() => {
    // Initialize GA only once
    if (!initialized.current) {
      initGA();
      initialized.current = true;
    }
  }, []);

  useEffect(() => {
    // Track page views when the route changes
    if (initialized.current) {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
      pageview(url);
    }
  }, [pathname, searchParams]);

  return <>{children}</>;
};

// End of component
