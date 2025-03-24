"use client";

import React, { useEffect } from 'react';
import Script from 'next/script';

/**
 * CookieYes script integration component
 * This component loads the CookieYes script for cookie consent management
 * while keeping our custom implementation for design consistency
 */
export default function CookieYesScript() {
  useEffect(() => {
    // Clean up function to remove the script when component unmounts
    return () => {
      const script = document.getElementById('cookieyes');
      if (script) {
        script.remove();
      }
    };
  }, []);

  return (
    <>
      <Script
        id="cookieyes"
        src="https://cdn-cookieyes.com/client_data/404566c0cd9cf98a56d68f42/script.js"
        strategy="afterInteractive"
        onLoad={() => {
          console.log('CookieYes script loaded successfully');
        }}
      />
    </>
  );
}
