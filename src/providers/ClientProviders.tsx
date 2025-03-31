"use client";

import React from "react";
import dynamic from "next/dynamic";

// Dynamically import providers to avoid SSR issues
const AnalyticsProvider = dynamic(() => import("./AnalyticsProvider"), {
  ssr: false,
});

const CookieYes = dynamic(() => import("@/components/cookies/CookieYes"), {
  ssr: false,
});

interface ClientProvidersProps {
  children: React.ReactNode;
}

export default function ClientProviders({ children }: ClientProvidersProps) {
  // Track component mounting state to prevent hydration issues
  const [mounted, setMounted] = React.useState(false);

  // Suppress hydration warnings caused by browser extensions
  React.useEffect(() => {
    // Suppress warnings from browser extensions that modify the DOM
    const originalConsoleError = console.error;
    console.error = (...args: any[]) => {
      if (
        typeof args[0] === "string" &&
        args[0].includes("Warning: Prop `%s` did not match") &&
        args[0].includes("data-extension-installed")
      ) {
        return;
      }
      originalConsoleError(...args);
    };

    // Set mounted state after initial render
    setMounted(true);

    // Restore original console.error when component unmounts
    return () => {
      console.error = originalConsoleError;
    };
  }, []);

  // During SSR and initial client render, render only children
  if (!mounted) {
    return <>{children}</>;
  }

  // After mounting, render with all client-side providers
  return (
    <>
      <CookieYes />
      <AnalyticsProvider>{children}</AnalyticsProvider>
    </>
  );
}
