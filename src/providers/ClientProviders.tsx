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

  // Only show the providers after component has mounted to avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
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
