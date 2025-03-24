'use client';

import React, { useEffect, useState } from 'react';
import Script from 'next/script';
import { useCookieStore } from '@/store/cookieStore';
import { CookieConsentBanner } from '@/components/ui/CookieConsentBanner';

/**
 * Props for the CookieConsentProvider component
 */
interface CookieConsentProviderProps {
  children?: React.ReactNode;
}

export default function CookieConsentProvider({ children }: CookieConsentProviderProps) {
  const [mounted, setMounted] = useState(false);
  const consent = useCookieStore(state => state.consent);
  const updateConsent = useCookieStore(state => state.updateConsent);

  // Only render on client-side to prevent hydration issues
  useEffect(() => setMounted(true), []);

  if (!mounted) return <>{children}</>;

  const handleAccept = () => {
    updateConsent({
      accepted: true,
      analytics: true,
      preferences: true,
    });
  };

  const handleDecline = () => {
    updateConsent({
      accepted: false,
      analytics: false,
      preferences: false,
    });
  };

  const handlePreferencesOnly = () => {
    updateConsent({
      accepted: true,
      analytics: false,
      preferences: true,
    });
  };

  // If user has already made a choice, don't show the banner
  if (consent.timestamp) {
    return (
      <>
        {/* CookieYes script - loaded regardless of consent status for compliance */}
        <Script
          id="cookieyes"
          src="https://cdn-cookieyes.com/client_data/404566c0cd9cf98a56d68f42/script.js"
          strategy="afterInteractive"
          onLoad={() => {
            console.log('CookieYes script loaded successfully');
            
            // During development, we're using the CookieYes banner
            // In production, we'll sync our consent state with CookieYes
            if (process.env.NODE_ENV === 'production' && window.CookieYes) {
              // Sync our consent state with CookieYes
              if (consent.analytics) {
                window.CookieYes.acceptCategory('analytics');
              }
              if (consent.preferences) {
                window.CookieYes.acceptCategory('functional');
              }
            }
          }}
        />
        {children}
      </>
    );
  }

  // Temporarily using only the CookieYes script for development
  // Our custom banner code is preserved but commented out for future use
  return (
    <>
      {/* CookieYes script - loaded for compliance */}
      <Script
        id="cookieyes"
        src="https://cdn-cookieyes.com/client_data/404566c0cd9cf98a56d68f42/script.js"
        strategy="afterInteractive"
        onLoad={() => {
          console.log('CookieYes script loaded successfully');
          
          // Allow the default CookieYes banner to show during development
          // We'll re-enable our custom banner later
          
          // Automatically accept all cookies for development purposes
          // Remove this in production
          if (window.CookieYes && process.env.NODE_ENV === 'development') {
            // For development only - auto-accept after 3 seconds to avoid disruption
            setTimeout(() => {
              // Uncomment this to auto-accept during development
              // window.CookieYes.acceptAll();
            }, 3000);
          }
        }}
      />
      
      {children}
      
      {/* Our custom banner is temporarily hidden for development */}
      {/* Uncomment this section to restore our custom banner
      <CookieConsentBanner
        onAccept={() => {
          handleAccept();
          // Also notify CookieYes of the consent
          if (window.CookieYes) {
            window.CookieYes.acceptAll();
          }
        }}
        onDecline={() => {
          handleDecline();
          // Also notify CookieYes of the decline
          if (window.CookieYes) {
            window.CookieYes.rejectAll();
          }
        }}
        onPreferencesOnly={() => {
          handlePreferencesOnly();
          // Also notify CookieYes of the partial consent
          if (window.CookieYes) {
            window.CookieYes.acceptCategory('necessary');
            window.CookieYes.rejectCategory('analytics');
            window.CookieYes.acceptCategory('functional');
          }
        }}
      />
      */}
    </>
  );
};


