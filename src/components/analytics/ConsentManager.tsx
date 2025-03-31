"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useAnalyticsStore } from "@/store/analyticsStore";

interface ConsentManagerProps {
  /** Optional CSS class name for styling */
  className?: string;
}

/**
 * Analytics Consent Manager Component
 * 
 * Provides a user interface for managing Google Analytics tracking consent.
 * Users can enable or disable analytics tracking through this component.
 * The component uses the analyticsStore to persist user preferences.
 */
export function ConsentManager({ className }: ConsentManagerProps) {
  const { consent, setConsent } = useAnalyticsStore();
  const [mounted, setMounted] = useState(false);
  
  // Prevent hydration mismatch by only rendering client-side
  // This ensures the consent state from localStorage is properly loaded
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    return null;
  }
  
  return (
    <div className={`space-y-4 ${className || ""}`}>
      <div className="flex items-center justify-between p-4 bg-muted/20 rounded-md">
        <div>
          <p className="font-medium">Google Analytics</p>
          <p className="text-sm text-muted-foreground">
            {consent 
              ? "You've allowed us to collect anonymous usage data to improve our site." 
              : "We don't collect any analytics data without your consent."}
          </p>
        </div>
        <Button
          onClick={() => setConsent(!consent)}
          variant={consent ? "outline" : "primary"}
          type="button"
        >
          {consent ? "Disable" : "Enable"}
        </Button>
      </div>
    </div>
  );
}

export default ConsentManager;
