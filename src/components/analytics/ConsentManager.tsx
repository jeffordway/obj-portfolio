'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useAnalyticsStore } from '@/store/analyticsStore';

interface ConsentManagerProps {
  className?: string;
}

/**
 * Analytics Consent Manager Component
 * 
 * Allows users to manage their consent for Google Analytics tracking
 */
export function ConsentManager({ className }: ConsentManagerProps) {
  const { consent, setConsent } = useAnalyticsStore();
  const [mounted, setMounted] = useState(false);
  
  // Handle hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    return null;
  }
  
  return (
    <div className={`space-y-4 ${className || ''}`}>
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
          variant={consent ? "outline" : "default"}
        >
          {consent ? "Disable" : "Enable"}
        </Button>
      </div>
    </div>
  );
}

export default ConsentManager;
