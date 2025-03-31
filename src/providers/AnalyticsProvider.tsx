"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { initGA, pageview } from "@/utils/analytics";

export default function AnalyticsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Get current path and search parameters for analytics tracking
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Initialize Google Analytics with CookieYes consent integration
  useEffect(() => {
    // Initialize GA with default consent mode settings
    // CookieYes will update these settings based on user consent
    initGA();
  }, []);

  // Track page views when pathname or search params change
  useEffect(() => {
    if (pathname) {
      const url = searchParams?.size ? `${pathname}?${searchParams}` : pathname;
      pageview(url);
    }
  }, [pathname, searchParams]);

  return <>{children}</>;
}
