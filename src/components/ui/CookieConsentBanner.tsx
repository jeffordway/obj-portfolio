"use client";

import React from "react";
import Link from "next/link";
import CookieConsentBase from "react-cookie-consent";
import { COOKIE_NAME, COOKIE_EXPIRY_DAYS } from "@/store/cookieStore";
import Button from "@/components/ui/button/Button";
import Text from "@/components/ui/typography/Text";
import { RiCloseLine } from "react-icons/ri";

/**
 * Props for the CookieConsentBanner component
 */
interface CookieConsentBannerProps {
  onAccept: () => void;
  onDecline: () => void;
  onPreferencesOnly: () => void;
  /**
   * Optional prop to specify the user's region for geo-targeted banners
   * This can be used to show different banners based on user location (GDPR vs CCPA)
   */
  userRegion?: 'eu' | 'us' | 'other';
}

/**
 * Cookie consent banner component
 * Displays a banner at the bottom of the screen with options to accept, decline, or customize cookie settings
 */
export function CookieConsentBanner({
  onAccept,
  onDecline,
  onPreferencesOnly,
}: CookieConsentBannerProps) {
  return (
    <CookieConsentBase
      location="bottom"
      buttonText="Accept All"
      declineButtonText="Decline All"
      cookieName={COOKIE_NAME}
      style={{
        background: "var(--color-background)",
        color: "var(--color-foreground)",
        zIndex: 9999,
        width: "100%",
        padding: "0",
        boxShadow: "0 -4px 10px -1px rgba(0, 0, 0, 0.1)",
        borderTop: "1px solid var(--color-border)",
      }}
      buttonStyle={{
        display: "none", // Hide default buttons
      }}
      declineButtonStyle={{
        display: "none", // Hide default buttons
      }}
      contentStyle={{
        flex: 1,
        margin: 0,
        padding: 0,
      }}
      enableDeclineButton
      onAccept={onAccept}
      onDecline={onDecline}
      expires={COOKIE_EXPIRY_DAYS}
      disableButtonStyles={true}
      ButtonComponent={({
        children,
        ...props
      }: {
        children: React.ReactNode;
        [key: string]: any;
      }) => null}
    >
      <div
        className="mx-auto px-4 sm:px-6 lg:px-8 py-8 relative"
        style={{ backgroundColor: "var(--color-accent)" }}
      >
        <button
          onClick={onDecline}
          className="absolute top-1/2 right-4 p-2 -translate-y-1/2 text-foreground/70 hover:text-foreground transition-colors"
          aria-label="Close cookie consent banner"
        >
          <RiCloseLine size={24} />
        </button>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex-1">
            <Text size="sm" fullWidth>
              We use cookies to enhance your browsing experience, serve
              personalized content, and analyze our traffic. This site uses essential, preference, and analytics cookies.
              By clicking "Accept All", you consent to our use of all cookies. Click "Necessary Only" to only allow
              essential cookies. You can adjust your preferences in{" "}
              <Link
                href="/cookie-settings"
                className="text-foreground underline hover:text-foreground/80 transition-colors"
              >
                Cookie Settings
              </Link>
              {" "}or read our{" "}
              <Link
                href="/cookie-policy"
                className="text-foreground underline hover:text-foreground/80 transition-colors"
              >
                Cookie Policy
              </Link>
              {" "}for more information.
            </Text>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button 
              variant="primary" 
              onClick={onAccept}
              aria-label="Accept all cookies"
            >
              Accept All
            </Button>
            <Button 
              variant="outline" 
              onClick={onPreferencesOnly}
              aria-label="Accept only necessary cookies"
            >
              Necessary Only
            </Button>
            <Button 
              variant="link" 
              onClick={() => window.location.href = '/cookie-settings'}
              className="text-foreground font-medium hover:text-foreground/80 no-underline"
              aria-label="Manage cookie settings"
            >
              Manage Settings
            </Button>
            <Button 
              variant="link" 
              onClick={() => window.location.href = '/do-not-sell'}
              className="text-xs text-foreground/70 hover:text-foreground/90 transition-colors no-underline"
              aria-label="Do not sell or share my personal information"
            >
              Do Not Sell My Personal Information
            </Button>
          </div>
        </div>
      </div>
    </CookieConsentBase>
  );
}
