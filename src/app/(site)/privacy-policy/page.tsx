import { Container, PageLayout } from "@/components/layout";
import { Heading, Text } from "@/components/ui/typography";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  // Render privacy policy page with legal content
  return (
    <PageLayout showHero={false}>
      <Container width="narrow" className="py-24">
        {/* Policy Content */}
        <article className="prose prose-invert max-w-none">
          {/* Policy Header */}
          <Heading as="h1" size="xl" className="mb-4">
            Privacy Policy
          </Heading>

          <Text className="text-muted-foreground mb-8">
            Last Updated: March 30, 2025
            <br />
            Effective Date: March 30, 2025
          </Text>

          {/* Introduction */}
          <div className="space-y-4 mb-8">
            <Text>
              This Privacy Policy outlines how Nielsen Ossowski Creative LLC
              ("we," "us," or "our"), a limited liability company registered in
              the State of Florida, collects, uses, and discloses your
              information when you access or use our website, jeffordway.com
              (the "Service" or "Website"). By using the Service, you consent to
              the collection, use, and disclosure of your information as
              described in this Privacy Policy. If you do not agree, please
              refrain from accessing or using the Service.
            </Text>

            <Text>
              We may update this Privacy Policy periodically. The revised policy
              will be posted on the Website with an updated "Last Updated" date.
              Significant changes will take effect 180 days after posting, and
              your continued use of the Service thereafter signifies your
              acceptance of the revised terms. We recommend reviewing this page
              periodically.
            </Text>
          </div>

          {/* Policy Sections */}
          <ol className="list-decimal pl-5 space-y-8 mb-8">
            {/* Section 1: Information Collection */}
            <li>
              <Heading as="h2" size="lg" className="mt-4 mb-4">
                How We Collect Your Information
              </Heading>
              <div className="space-y-4">
                <Text>
                  We may collect the following types of information when you use
                  the Service:
                </Text>

                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <Text>
                      <strong>Personal Information:</strong> Includes your name,
                      email address, phone number, or other details you
                      voluntarily provide (e.g., when contacting us or
                      subscribing to updates).
                    </Text>
                  </li>
                  <li>
                    <Text>
                      <strong>Usage Data:</strong> Automatically collected data
                      such as your IP address, browser type, pages visited, and
                      time spent on the Website.
                    </Text>
                  </li>
                  <li>
                    <Text>
                      <strong>Cookies and Tracking Technologies:</strong> We use
                      cookies and similar tools to enhance your experience. See
                      our{" "}
                      <Link
                        href="/cookie-policy"
                        className="text-primary hover:underline"
                      >
                        Cookie Policy
                      </Link>{" "}
                      for details.
                    </Text>
                  </li>
                </ul>
              </div>
            </li>

            {/* Section 2: Information Usage */}
            <li>
              <Heading as="h2" size="lg" className="mt-4 mb-4">
                How We Use Your Information
              </Heading>
              <div className="space-y-4">
                <Text>
                  We use the information we collect for the following purposes:
                </Text>

                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <Text>
                      <strong>Marketing and Promotional Activities:</strong> To
                      send you newsletters, updates, or promotional materials
                      (with your consent).
                    </Text>
                  </li>
                  <li>
                    <Text>
                      <strong>Administrative Purposes:</strong> To respond to
                      inquiries, manage requests, and improve the Service's
                      functionality.
                    </Text>
                  </li>
                  <li>
                    <Text>
                      <strong>Analytics:</strong> To analyze user behavior and
                      enhance our offerings.
                    </Text>
                  </li>
                </ul>

                <Text>
                  We will not use your information for any other purpose without
                  your explicit consent, unless required by law.
                </Text>
              </div>
            </li>

            {/* Section 3: Information Sharing */}
            <li>
              <Heading as="h2" size="lg" className="mt-4 mb-4">
                How We Share Your Information
              </Heading>
              <div className="space-y-4">
                <Text>
                  We do not sell or share your personal information with third
                  parties without your consent, except in these limited
                  circumstances:
                </Text>

                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <Text>
                      <strong>Analytics Providers:</strong> We may share data
                      with trusted third parties (e.g., analytics services) to
                      help us operate and improve the Service. These providers
                      are bound by contract to use your information only for the
                      intended purpose and not retain it longer than necessary.
                    </Text>
                  </li>
                  <li>
                    <Text>
                      <strong>Legal Obligations:</strong> We may disclose your
                      information to comply with laws, regulations, court
                      orders, or legal processes, or to enforce our agreements,
                      including this Privacy Policy.
                    </Text>
                  </li>
                  <li>
                    <Text>
                      <strong>Business Transfers:</strong> If Nielsen Ossowski
                      Creative LLC merges, is acquired, or sells assets, your
                      information may be transferred to the new owner.
                    </Text>
                  </li>
                </ul>
              </div>
            </li>

            {/* Section 4: User Rights */}
            <li>
              <Heading as="h2" size="lg" className="mt-4 mb-4">
                Your Rights
              </Heading>
              <div className="space-y-4">
                <Text>
                  Depending on applicable law, you may have the following rights
                  regarding your personal information:
                </Text>

                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <Text>
                      <strong>Access and Correction:</strong> Request access to
                      or updates to your data.
                    </Text>
                  </li>
                  <li>
                    <Text>
                      <strong>Erasure:</strong> Request deletion of your
                      personal data.
                    </Text>
                  </li>
                  <li>
                    <Text>
                      <strong>Data Portability:</strong> Obtain a copy of your
                      data in a structured format.
                    </Text>
                  </li>
                  <li>
                    <Text>
                      <strong>Restriction or Objection:</strong> Limit or object
                      to how we process your data.
                    </Text>
                  </li>
                  <li>
                    <Text>
                      <strong>Withdraw Consent:</strong> Revoke consent for data
                      processing where applicable.
                    </Text>
                  </li>
                </ul>

                <Text>
                  To exercise these rights, email us at{" "}
                  <Link
                    href="mailto:contact@nielsenossowski.com"
                    className="text-primary hover:underline"
                  >
                    contact@nielsenossowski.com
                  </Link>
                  . We will respond in accordance with applicable law. Note that
                  restricting or withdrawing consent may limit your ability to
                  use certain features of the Service.
                </Text>
              </div>
            </li>

            {/* Section 5: Cookies */}
            <li>
              <Heading as="h2" size="lg" className="mt-4 mb-4">
                Cookies and Tracking Technologies
              </Heading>
              <div className="space-y-4">
                <Text>
                  We use cookies and similar technologies to improve your
                  experience. For more details and to manage your preferences,
                  please refer to our{" "}
                  <Link
                    href="/cookie-policy"
                    className="text-primary hover:underline"
                  >
                    Cookie Policy
                  </Link>
                  .
                </Text>
              </div>
            </li>

            {/* Section 6: Security */}
            <li>
              <Heading as="h2" size="lg" className="mt-4 mb-4">
                Security
              </Heading>
              <div className="space-y-4">
                <Text>
                  We take reasonable measures to safeguard your information from
                  loss, misuse, or unauthorized access. However, no internet
                  transmission is entirely secure, and we cannot guarantee
                  absolute security. You provide your information at your own
                  risk.
                </Text>
              </div>
            </li>

            {/* Section 7: Third-Party Links */}
            <li>
              <Heading as="h2" size="lg" className="mt-4 mb-4">
                Third-Party Links
              </Heading>
              <div className="space-y-4">
                <Text>
                  The Service may include links to external websites not
                  operated by us. This Privacy Policy does not apply to those
                  sites, and we are not responsible for their practices. We
                  encourage you to review the privacy policies of any
                  third-party sites you visit.
                </Text>
              </div>
            </li>

            {/* Section 8: Children's Privacy */}
            <li>
              <Heading as="h2" size="lg" className="mt-4 mb-4">
                Children's Privacy
              </Heading>
              <div className="space-y-4">
                <Text>
                  The Service is not designed for individuals under 18. We do
                  not knowingly collect personal information from children. If
                  we learn we have such data, we will delete it promptly.
                </Text>
              </div>
            </li>

            {/* Section 9: Policy Changes */}
            <li>
              <Heading as="h2" size="lg" className="mt-4 mb-4">
                Changes to This Privacy Policy
              </Heading>
              <div className="space-y-4">
                <Text>
                  We may revise this Privacy Policy as needed. Updates will be
                  posted on the Service, and significant changes will take
                  effect 180 days after posting. Your continued use of the
                  Service after that period indicates your acceptance of the
                  changes.
                </Text>
              </div>
            </li>

            {/* Section 10: Contact Information */}
            <li>
              <Heading as="h2" size="lg" className="mt-4 mb-4">
                Contact Us
              </Heading>
              <div className="space-y-4">
                <Text>
                  For questions, concerns, or to exercise your rights, contact
                  us at:
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
                <Text>
                  You may also reach our Grievance Officer at the above email
                  for data protection inquiries or concerns. We will address
                  your issues in accordance with applicable law.
                </Text>
              </div>
            </li>
          </ol>
        </article>
      </Container>
    </PageLayout>
  );
}
