'use client';

import React, { useEffect, useState } from 'react';
import { PageLayout } from '@/components/layout';
import { Section, Container } from '@/components/layout';
import { Heading } from '@/components/ui/typography/Heading';
import { Text } from '@/components/ui/typography/Text';
import Checkbox from '@/components/ui/forms/Checkbox';
import { useCookieStore } from '@/store/cookieStore';

export default function CookieSettingsPage() {
  const [mounted, setMounted] = useState(false);
  
  // Use Zustand store
  const consent = useCookieStore(state => state.consent);
  const updateConsent = useCookieStore(state => state.updateConsent);
  const resetConsent = useCookieStore(state => state.resetConsent);
  
  // Local state for form controls with proper typing
  const [preferences, setPreferences] = useState<{
    analytics: boolean;
    preferences: boolean;
  }>({
    analytics: false,
    preferences: false,
  });

  // Initialize state and handle client-side rendering
  useEffect(() => {
    setMounted(true);
    
    // Sync local state with store
    setPreferences({
      analytics: consent.analytics,
      preferences: consent.preferences,
    });
  }, [consent.analytics, consent.preferences]);

  if (!mounted) return null;

  const handleSavePreferences = () => {
    // Record the timestamp when consent was given (important for GDPR compliance)
    const now = new Date();
    
    updateConsent({
      accepted: true,
      analytics: preferences.analytics,
      preferences: preferences.preferences,
      timestamp: now.toISOString(),
    });

    // Show confirmation message
    // TODO: Replace with a more user-friendly notification component
    alert('Your cookie preferences have been saved.');
  };

  const handleResetPreferences = () => {
    resetConsent();
    setPreferences({
      analytics: false,
      preferences: false,
    });
    
    // Show confirmation message
    // TODO: Replace with a more user-friendly notification component
    alert('Your cookie preferences have been reset.');
  };

  return (
    <PageLayout showHero={false}>
      <Section className="py-16">
        <Container width="narrow">
          <Heading as="h1" className="mb-8">Cookie Settings</Heading>
          
          <div className="space-y-8">
            <Text>
              You can customize your cookie preferences below. These settings allow you to control which types of cookies you allow on our website.
              We value your privacy and are committed to transparency about how we use cookies.
              For more information about how we use cookies, please read our{' '}
              <a href="/cookie-policy" className="text-primary hover:text-primary-light underline">Cookie Policy</a>.
            </Text>
            
            <Text className="text-sm text-text-muted">
              Last updated: {consent.timestamp ? new Date(consent.timestamp).toLocaleDateString() : 'Not set'}
            </Text>
            
            <div className="space-y-6 mt-8">
              <div className="p-4 border border-border">
                <div className="flex items-center justify-between gap-6">
                  <div className="flex-1">
                    <Heading as="h3" className="text-lg mb-2">Necessary Cookies</Heading>
                    <Text className="text-sm text-text-muted">
                      These cookies are essential for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies, and they cannot be disabled.
                    </Text>
                  </div>
                  <div className="flex items-center self-stretch">
                    <Checkbox
                      checked={true}
                      disabled
                      aria-label="Necessary cookies (always enabled)"
                    />
                  </div>
                </div>
              </div>
              
              <div className="p-4 border border-border">
                <div className="flex items-center justify-between gap-6">
                  <div className="flex-1">
                    <Heading as="h3" className="text-lg mb-2">Preference Cookies</Heading>
                    <Text className="text-sm text-text-muted">
                      These cookies allow the website to remember choices you make (such as your preferred language or the region you are in) and provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.
                    </Text>
                  </div>
                  <div className="flex items-center self-stretch">
                    <Checkbox
                      id="preferences-checkbox"
                      checked={preferences.preferences}
                      onChange={(e) => setPreferences({...preferences, preferences: (e.target as HTMLInputElement).checked})}
                      aria-label="Enable preference cookies"
                    />
                  </div>
                </div>
              </div>
              
              <div className="p-4 border border-border">
                <div className="flex items-center justify-between gap-6">
                  <div className="flex-1">
                    <Heading as="h3" className="text-lg mb-2">Analytics Cookies</Heading>
                    <Text className="text-sm text-text-muted">
                      These cookies help us understand how visitors interact with the website by collecting and reporting information anonymously. They help us track metrics such as the number of visitors to the website and the most popular pages, helping us improve our services and user experience.
                    </Text>
                  </div>
                  <div className="flex items-center self-stretch">
                    <Checkbox
                      id="analytics-checkbox"
                      checked={preferences.analytics}
                      onChange={(e) => setPreferences({...preferences, analytics: (e.target as HTMLInputElement).checked})}
                      aria-label="Enable analytics cookies"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 mt-8">
              <button
                type="button"
                onClick={handleSavePreferences}
                className="bg-primary text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-primary-light transition-colors"
                aria-label="Save cookie preferences"
              >
                Save Preferences
              </button>
              <button
                type="button"
                onClick={handleResetPreferences}
                className="bg-transparent border border-border text-text px-6 py-2 rounded-md text-sm font-medium hover:bg-surface transition-colors"
                aria-label="Reset cookie preferences to default"
              >
                Reset All
              </button>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border">
              <Heading as="h2" className="mb-4">Your Privacy Rights</Heading>
              <Text className="mb-4">
                Under various privacy regulations, you have the right to access, correct, delete, or restrict the processing of your personal data.
                For more information about your privacy rights, please read our{' '}
                <a href="/privacy-policy" className="text-primary hover:text-primary-light underline">Privacy Policy</a>.
              </Text>
              <Text>
                If you have any questions or concerns about our cookie practices, please contact us.
              </Text>
            </div>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
};

// End of component
