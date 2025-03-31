'use client';

import Script from 'next/script';

/**
 * CookieYes Component
 * 
 * Implements CookieYes cookie consent management
 * Uses the beforeInteractive strategy as specified in the CookieYes documentation
 * for Next.js 13+ applications
 */
export default function CookieYes() {
  return (
    <Script
      id="cookieyes"
      src="https://cdn-cookieyes.com/client_data/404566c0cd9cf98a56d68f42/script.js"
      strategy="beforeInteractive"
    />
  );
}
