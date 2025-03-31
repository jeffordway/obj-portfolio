import { Container, PageLayout } from "@/components/layout";
import { Heading, Text } from "@/components/ui/typography";
import { CookieSettingsButton } from "@/components/cookies";
import Link from "next/link";

export default function CookiePolicyPage() {
  // Render cookie policy page with legal content
  return (
    <PageLayout showHero={false}>
      <Container width="narrow" className="py-24">
        {/* Policy Content */}
        <article className="prose prose-invert max-w-none">
          {/* Policy Header */}
          <Heading as="h1" size="xl" className="mb-4">
            Cookie Policy
          </Heading>

          <Text className="text-muted-foreground mb-8">
            Effective Date: March 30, 2025
            <br />
            Last Updated: March 30, 2025
          </Text>

          {/* Introduction */}
          <div className="space-y-4 mb-8">
            <Text>
              This Cookie Policy explains how Nielsen Ossowski Creative LLC
              ("we," "us," or "our"), a Florida-based limited liability company,
              uses cookies and similar technologies on our website,
              jeffordway.com (the "Website"). By using the Website, you consent
              to our use of cookies as described in this policy.
            </Text>
          </div>

          {/* What Are Cookies Section */}
          <Heading as="h2" size="lg" className="mt-8 mb-4">
            What Are Cookies?
          </Heading>
          <div className="space-y-4 mb-8">
            <Text>
              Cookies are small text files placed on your device when you visit
              a website. They store small pieces of information to help the
              website function properly, enhance your experience, and provide
              insights into how the site is used.
            </Text>
          </div>

          {/* How We Use Cookies Section */}
          <Heading as="h2" size="lg" className="mt-8 mb-4">
            How We Use Cookies
          </Heading>
          <div className="space-y-4 mb-8">
            <Text>We use cookies for several purposes, including:</Text>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <Text>Ensuring the Website operates correctly.</Text>
              </li>
              <li>
                <Text>Enhancing security measures.</Text>
              </li>
              <li>
                <Text>Improving your user experience.</Text>
              </li>
              <li>
                <Text>Analyzing Website performance and user interactions.</Text>
              </li>
            </ul>
            <Text>
              These purposes allow us to maintain a functional, secure, and
              user-friendly website while identifying areas for improvement.
            </Text>
          </div>

          {/* Types of Cookies Section */}
          <Heading as="h2" size="lg" className="mt-8 mb-4">
            Types of Cookies We Use
          </Heading>
          <div className="space-y-4 mb-8">
            <Text>
              We use both first-party and third-party cookies, categorized as
              follows:
            </Text>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <Text>
                  <strong>Essential Cookies:</strong> These are necessary for
                  the Website to function properly. They enable core features
                  like page navigation and access to secure areas. They do not
                  collect personally identifiable information.
                </Text>
              </li>
              <li>
                <Text>
                  <strong>Analytical/Performance Cookies:</strong> These help us
                  understand how users interact with the Website, allowing us to
                  analyze performance and enhance functionality.
                </Text>
              </li>
              <li>
                <Text>
                  <strong>Functional Cookies:</strong> These remember your
                  preferences and choices (e.g., language settings) to provide a
                  more personalized experience.
                </Text>
              </li>
            </ul>
            {/* This div will be populated by the CookieYes script */}
            <div className="cky-audit-table-element"></div>
          </div>

          {/* Managing Cookie Preferences Section */}
          <Heading as="h2" size="lg" className="mt-8 mb-4">
            Managing Cookie Preferences
          </Heading>
          <div className="space-y-4 mb-8">
            <Text>
              You can manage your cookie preferences at any time through our
              cookie consent tool, accessible via the "Cookie Settings" button
              on the Website. This tool allows you to accept or reject
              non-essential cookies.
            </Text>
            
            <CookieSettingsButton
              variant="outline"
              size="lg"
              className="mb-6"
            />

            <Text>
              Additionally, you can control cookies directly through your
              browser settings. Below are links to instructions for managing
              cookies in major browsers:
            </Text>

            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>
                <strong>Chrome:</strong>{" "}
                <Link
                  href="https://support.google.com/accounts/answer/32050"
                  target="_blank"
                  className="text-primary hover:underline"
                >
                  https://support.google.com/accounts/answer/32050
                </Link>
              </li>
              <li>
                <strong>Safari:</strong>{" "}
                <Link
                  href="https://support.apple.com/en-in/guide/safari/sfri11471/mac"
                  target="_blank"
                  className="text-primary hover:underline"
                >
                  https://support.apple.com/en-in/guide/safari/sfri11471/mac
                </Link>
              </li>
              <li>
                <strong>Firefox:</strong>{" "}
                <Link
                  href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox"
                  target="_blank"
                  className="text-primary hover:underline"
                >
                  https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox
                </Link>
              </li>
              <li>
                <strong>Internet Explorer:</strong>{" "}
                <Link
                  href="https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc"
                  target="_blank"
                  className="text-primary hover:underline"
                >
                  https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc
                </Link>
              </li>
            </ul>

            <Text>
              If you use a different browser, please refer to its official
              support documentation. Be aware that disabling cookies may impact
              the Website's functionality.
            </Text>
          </div>

          {/* Policy Changes Section */}
          <Heading as="h2" size="lg" className="mt-8 mb-4">
            Changes to This Cookie Policy
          </Heading>
          <div className="space-y-4 mb-8">
            <Text>
              We may update this Cookie Policy from time to time to reflect
              changes in our practices or legal requirements. The "Last
              Updated" date at the top of this page indicates when the policy
              was last revised. We encourage you to review this policy
              periodically to stay informed.
            </Text>
          </div>

          {/* Contact Information Section */}
          <Heading as="h2" size="lg" className="mt-8 mb-4">
            Contact Us
          </Heading>
          <div className="space-y-4 mb-8">
            <Text>
              If you have questions or concerns about our use of cookies, please
              reach out to us at:
            </Text>
            <Text>Nielsen Ossowski Creative LLC</Text>
            <Text>1317 Edgewater Dr STE 5758</Text>
            <Text>Orlando, FL 32804</Text>
            <Text>
              Email:{" "}
              <Link
                href="mailto:contact@nielsenossowski.com"
                className="text-primary hover:underline"
              >
                contact@nielsenossowski.com
              </Link>
            </Text>
            <Text>Phone: 941-363-1748</Text>
          </div>
        </article>
      </Container>
    </PageLayout>
  );
}
