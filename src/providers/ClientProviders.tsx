'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import providers to avoid SSR issues
const AnalyticsProvider = dynamic(
  () => import('./AnalyticsProvider'),
  { ssr: false }
);

interface ClientProvidersProps {
  children: React.ReactNode;
}

/**
 * ClientProviders component that wraps all client-side providers
 * This pattern helps avoid hydration issues in Next.js
 */
export default function ClientProviders({ children }: ClientProvidersProps) {
  const [mounted, setMounted] = React.useState(false);

  // Suppress hydration warnings caused by browser extensions
  React.useEffect(() => {
    // This suppresses the hydration warning caused by browser extensions
    // that modify the DOM before React can hydrate it
    const originalConsoleError = console.error;
    console.error = (...args: any[]) => {
      if (
        typeof args[0] === 'string' && 
        args[0].includes('Warning: Prop `%s` did not match') && 
        args[0].includes('data-extension-installed')
      ) {
        return;
      }
      originalConsoleError(...args);
    };

    // Set mounted state and restore console.error when component unmounts
    setMounted(true);
    
    return () => {
      console.error = originalConsoleError;
    };
  }, []);

  // During SSR and initial client render, render only children
  if (!mounted) {
    return <>{children}</>;
  }

  // After mounting, render with all providers
  return (
    <AnalyticsProvider>
      {children}
    </AnalyticsProvider>
  );
}
