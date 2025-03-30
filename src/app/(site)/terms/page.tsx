import { Container, PageLayout } from "@/components/layout";
import { Heading, Text } from "@/components/ui/typography";
import Link from "next/link";

/**
 * Terms and Conditions page component
 */
export default function TermsPage() {
  return (
    <PageLayout showHero={false}>
      <Container width="narrow" className="py-24">
        <article className="prose prose-invert max-w-none">
          <Heading as="h1" size="xl" className="mb-4">
            Terms and Conditions
          </Heading>

          <Text className="text-muted-foreground mb-8">
            Last Updated: March 30, 2025
            <br />
            Effective Date: March 30, 2025
          </Text>

          <div className="space-y-4 mb-8">
            <Text>
              These Terms and Conditions ("Terms") govern your use of
              jeffordway.com (the "Website"), which is owned and operated by
              Nielsen Ossowski Creative LLC ("we," "us," or "our"), a limited
              liability company registered in the State of Florida. By accessing
              or using this Website, you agree to be bound by these Terms. If
              you do not agree, please refrain from using the Website.
            </Text>
          </div>

          <Heading as="h2" size="lg" className="mt-8 mb-4">
            1. Acceptance of Terms
          </Heading>
          <div className="space-y-4 mb-8">
            <Text>
              By accessing or using the Website, you confirm that you are at
              least 18 years old and capable of entering into legally binding
              agreements. Your continued use of the Website signifies your
              acceptance of these Terms and any future updates we may post.
            </Text>
          </div>

          <Heading as="h2" size="lg" className="mt-8 mb-4">
            2. Ownership and Operation
          </Heading>
          <div className="space-y-4 mb-8">
            <Text>
              The Website, jeffordway.com, is owned and operated by Nielsen
              Ossowski Creative LLC, a Florida-based limited liability company.
              All content, materials, and services on the Website are the
              property of Nielsen Ossowski Creative LLC unless otherwise noted.
            </Text>
          </div>

          <Heading as="h2" size="lg" className="mt-8 mb-4">
            3. Use of the Website
          </Heading>
          <div className="space-y-4 mb-8">
            <Text>
              You agree to use the Website lawfully and in a way that does not
              harm others or interfere with their use. Prohibited actions
              include:
            </Text>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <Text>Violating any local, state, or federal laws.</Text>
              </li>
              <li>
                <Text>Impersonating individuals or entities.</Text>
              </li>
              <li>
                <Text>Disrupting the Website's functionality or security.</Text>
              </li>
              <li>
                <Text>Transmitting harmful code, such as viruses or malware.</Text>
              </li>
            </ul>
            <Text>
              We reserve the right to suspend or terminate your access to the
              Website if you breach these Terms.
            </Text>
          </div>

          <Heading as="h2" size="lg" className="mt-8 mb-4">
            4. Intellectual Property
          </Heading>
          <div className="space-y-4 mb-8">
            <Text>
              All content on jeffordway.com, including text, images, logos,
              graphics, and software, is the intellectual property of Nielsen
              Ossowski Creative LLC or its licensors. This content is protected
              by copyright, trademark, and other laws. You may not copy,
              distribute, modify, or create derivative works from it without our
              prior written permission.
            </Text>
          </div>

          <Heading as="h2" size="lg" className="mt-8 mb-4">
            5. Disclaimer of Warranties
          </Heading>
          <div className="space-y-4 mb-8">
            <Text>
              The Website and its content are provided "as is" and "as
              available," without any warranties, whether express or implied.
              Nielsen Ossowski Creative LLC disclaims all warranties, including:
            </Text>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <Text>The accuracy or completeness of the content.</Text>
              </li>
              <li>
                <Text>Continuous or error-free operation of the Website.</Text>
              </li>
              <li>
                <Text>The absence of viruses or other harmful elements.</Text>
              </li>
            </ul>
            <Text>You use the Website at your own risk.</Text>
          </div>

          <Heading as="h2" size="lg" className="mt-8 mb-4">
            6. Limitation of Liability
          </Heading>
          <div className="space-y-4 mb-8">
            <Text>
              To the maximum extent allowed by law, Nielsen Ossowski Creative
              LLC will not be liable for any damages—direct, indirect,
              incidental, consequential, or punitive—arising from your use of
              the Website. This includes, but is not limited to:
            </Text>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <Text>Loss of data, profits, or business.</Text>
              </li>
              <li>
                <Text>Website errors or downtime.</Text>
              </li>
              <li>
                <Text>Unauthorized access to your information.</Text>
              </li>
            </ul>
            <Text>
              This applies even if we've been notified of the potential for such
              damages.
            </Text>
          </div>

          <Heading as="h2" size="lg" className="mt-8 mb-4">
            7. Third-Party Links
          </Heading>
          <div className="space-y-4 mb-8">
            <Text>
              The Website may include links to external sites not controlled by
              Nielsen Ossowski Creative LLC. We are not responsible for the
              content, policies, or practices of these third-party sites.
              Clicking these links is at your own discretion and risk.
            </Text>
          </div>

          <Heading as="h2" size="lg" className="mt-8 mb-4">
            8. User-Generated Content
          </Heading>
          <div className="space-y-4 mb-8">
            <Text>
              If you submit content (e.g., comments or testimonials) to the
              Website, you grant Nielsen Ossowski Creative LLC a non-exclusive,
              royalty-free, worldwide license to use, reproduce, and display it.
              You are responsible for ensuring your submissions comply with all
              laws and do not infringe on third-party rights.
            </Text>
          </div>

          <Heading as="h2" size="lg" className="mt-8 mb-4">
            9. Changes to the Terms
          </Heading>
          <div className="space-y-4 mb-8">
            <Text>
              We may update these Terms at any time. Changes will be posted here
              with an updated "Last Updated" date. Your continued use of the
              Website after such changes indicates your acceptance of the
              revised Terms.
            </Text>
          </div>

          <Heading as="h2" size="lg" className="mt-8 mb-4">
            10. Governing Law
          </Heading>
          <div className="space-y-4 mb-8">
            <Text>
              These Terms and your use of the Website are governed by the laws
              of the State of Florida, without regard to its conflict of law
              rules. Any disputes related to these Terms or the Website will be
              resolved exclusively in Florida courts.
            </Text>
          </div>

          <Heading as="h2" size="lg" className="mt-8 mb-4">
            11. Contact for Legal Inquiries
          </Heading>
          <div className="space-y-4 mb-8">
            <Text>
              For questions, concerns, or legal notices about these Terms or the
              Website, please reach out to Nielsen Ossowski Creative LLC at:
            </Text>
            <Text>
              Email:{" "}
              <Link
                href="mailto:contact@nielsenossowski.com"
                className="text-primary hover:underline"
              >
                contact@nielsenossowski.com
              </Link>
            </Text>
            <Text>
              Mailing Address: 1317 Edgewater Dr STE 5758, Orlando, FL 32804
            </Text>
          </div>
        </article>
      </Container>
    </PageLayout>
  );
}
