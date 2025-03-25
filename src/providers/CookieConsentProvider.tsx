'use client';

import React, { useEffect, useState } from 'react';
import Script from 'next/script';
import { useCookieStore } from '@/store/cookieStore';

/**
 * Props for the CookieConsentProvider component
 */
interface CookieConsentProviderProps {
  children?: React.ReactNode;
}

/**
 * CookieConsentProvider component that loads the CookieYes script
 * and handles cookie consent management
 */
export default function CookieConsentProvider({ children }: CookieConsentProviderProps) {
  const [mounted, setMounted] = useState(false);
  const consent = useCookieStore(state => state.consent);

  // Only render on client-side to prevent hydration issues
  useEffect(() => setMounted(true), []);

  if (!mounted) return <>{children}</>;

  return (
    <>
      {/* CookieYes script - handles cookie consent banner and compliance */}
      <Script
        id="cookieyes"
        src="https://cdn-cookieyes.com/client_data/404566c0cd9cf98a56d68f42/script.js"
        strategy="afterInteractive"
        onLoad={() => {
          console.log('CookieYes script loaded successfully');
          
          // Sync our consent state with CookieYes if needed
          if (consent.timestamp && window.CookieYes) {
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
