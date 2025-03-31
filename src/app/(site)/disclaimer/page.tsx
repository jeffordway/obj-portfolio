import { Container, PageLayout } from "@/components/layout";
import { Heading, Text } from "@/components/ui/typography";
import Link from "next/link";

export default function DisclaimerPage() {
  // Render disclaimer page with legal content
  return (
    <PageLayout showHero={false}>
      <Container width="narrow" className="py-24">
        {/* Disclaimer Content */}
        <article className="prose prose-invert max-w-none">
          {/* Disclaimer Header */}
          <Heading as="h1" size="xl" className="mb-4">
            Disclaimer
          </Heading>

          <Text className="text-muted-foreground mb-8">
            Last Updated: March 30, 2025
            <br />
            Effective Date: March 30, 2025
          </Text>

          {/* General Disclaimer */}
          <div className="space-y-4 mb-8">
            <Text>
              jeffordway.com is owned and operated by Nielsen Ossowski Creative
              LLC, a limited liability company registered in the State of
              Florida. The content on this website is provided for general
              informational purposes only. While we strive to keep the
              information accurate and current, Nielsen Ossowski Creative LLC
              makes no warranties or representations, express or implied, about
              its completeness, accuracy, or reliability. Your use of this
              website and its content is at your own risk.
            </Text>

            <Text>
              Nielsen Ossowski Creative LLC is not liable for any direct,
              indirect, incidental, or consequential damages resulting from your
              use of this website or its information.
            </Text>
          </div>

          {/* External Links Section */}
          <Heading as="h2" size="lg" className="mt-8 mb-4">
            External Links Disclaimer
          </Heading>
          <div className="space-y-4 mb-8">
            <Text>
              This website may include links to third-party sites not controlled
              by Nielsen Ossowski Creative LLC. We do not endorse or take
              responsibility for the content or practices of these external
              sites. You access these links at your own risk.
            </Text>
          </div>

          {/* Professional Advice Section */}
          <Heading as="h2" size="lg" className="mt-8 mb-4">
            Professional Advice Disclaimer
          </Heading>
          <div className="space-y-4 mb-8">
            <Text>
              The information on jeffordway.com is not intended as professional
              advice, including but not limited to legal, financial, or medical
              guidance. It should not substitute for consultation with qualified
              professionals. Nielsen Ossowski Creative LLC is not responsible for
              actions taken based on this website&apos;s content.
            </Text>
          </div>

          {/* Testimonial Section */}
          <Heading as="h2" size="lg" className="mt-8 mb-4">
            Testimonial Disclaimer
          </Heading>
          <div className="space-y-4 mb-8">
            <Text>
              Testimonials on jeffordway.com reflect the personal experiences of individual users and are not intended to represent or guarantee that every user will achieve similar results. Individual outcomes may vary. Testimonials are presented as submitted, except for corrections of grammar or spelling, and may be shortened for brevity without changing their meaning. Nielsen Ossowski Creative LLC does not compensate users for testimonials, and the views expressed are solely those of the individuals.
            </Text>
          </div>

          {/* Governing Law Section */}
          <Heading as="h2" size="lg" className="mt-8 mb-4">
            Governing Law
          </Heading>
          <div className="space-y-4 mb-8">
            <Text>
              This disclaimer and your use of jeffordway.com are governed by the
              laws of the State of Florida.
            </Text>
          </div>

          {/* Contact Information Section */}
          <Heading as="h2" size="lg" className="mt-8 mb-4">
            Contact for Legal Inquiries
          </Heading>
          <div className="space-y-4 mb-8">
            <Text>
              For legal inquiries or notices regarding this website, please
              contact Nielsen Ossowski Creative LLC at:
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
