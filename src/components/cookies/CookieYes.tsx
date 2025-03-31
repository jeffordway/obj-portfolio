"use client";

import Script from "next/script";

/**
 * CookieYes Consent Management Component
 * 
 * Implements CookieYes cookie consent management for GDPR and other privacy regulations compliance.
 * This component loads the CookieYes script using Next.js Script component with the afterInteractive
 * strategy for Next.js App Router compatibility.
 * 
 * The script adds a cookie banner and consent management interface to the website.
 */
export default function CookieYes() {
  return (
    <Script
      id="cookieyes"
      src="https://cdn-cookieyes.com/client_data/404566c0cd9cf98a56d68f42/script.js"
      strategy="afterInteractive"
    />
  );
}
