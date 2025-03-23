import { PageLayout, Section } from "@/components/layout";
import { Heading, Text } from "@/components/ui/typography";

export default function PrivacyPolicy() {
  return (
    <PageLayout 
      showHero={false}
    >
      <Section padding="none" width="narrow" className="pt-20 md:pt-24">
        <Heading>Privacy Policy</Heading>
        <Text className="mt-6 mb-8">
          Last updated: March 21, 2025
        </Text>
        
        <div className="space-y-8">
          <div>
            <Heading as="h2" className="mb-4">Introduction</Heading>
            <Text>
              This Privacy Policy describes how your personal information is collected, used, and shared when you visit this website. We respect your privacy and are committed to protecting your personal data.
            </Text>
          </div>
          
          <div>
            <Heading as="h2" className="mb-4">Information We Collect</Heading>
            <Text className="mb-4">
              When you visit the website, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
            </Text>
            <Text>
              Additionally, as you browse the site, we collect information about the individual web pages that you view, what websites or search terms referred you to the site, and information about how you interact with the site.
            </Text>
          </div>
          
          <div>
            <Heading as="h2" className="mb-4">How We Use Your Information</Heading>
            <Text className="mb-4">
              We use the information we collect to:
            </Text>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <Text>Improve and optimize our website</Text>
              </li>
              <li>
                <Text>Understand user behavior and preferences</Text>
              </li>
              <li>
                <Text>Identify potential technical issues</Text>
              </li>
              <li>
                <Text>Develop new features and functionality</Text>
              </li>
            </ul>
          </div>
          
          <div>
            <Heading as="h2" className="mb-4">Sharing Your Information</Heading>
            <Text>
              We do not share your Personal Information with third parties except as described in this Privacy Policy. We may share your Personal Information with service providers to help us operate our website, conduct our business, or serve our users.
            </Text>
          </div>
          
          <div>
            <Heading as="h2" className="mb-4">Your Rights</Heading>
            <Text className="mb-4">
              If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us.
            </Text>
            <Text>
              Additionally, if you are a European resident, we note that we are processing your information in order to fulfill contracts we might have with you, or otherwise to pursue our legitimate business interests listed above.
            </Text>
          </div>
          
          <div>
            <Heading as="h2" className="mb-4">Changes</Heading>
            <Text>
              We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.
            </Text>
          </div>
          
          <div>
            <Heading as="h2" className="mb-4">Contact Us</Heading>
            <Text>
              For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail or by mail using the details provided on our contact page.
            </Text>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}
