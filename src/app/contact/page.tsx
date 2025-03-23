import { PageLayout, Section } from "@/components/layout";
import { Heading, Text } from "@/components/ui/typography";
import { ContactForm } from "@/components/sections/contact";

export const metadata = {
  title: "Contact | Jeff Ordway",
  description: "Get in touch with Jeff Ordway",
};

export default function ContactPage() {
  return (
    <PageLayout
      showHero={false}
    >
      <Section padding="none" width="narrow" className="pt-20 md:pt-24">
        <Heading>Get in Touch</Heading>
        <Text className="mt-6 mb-8">
          Have a question or want to work together? Fill out the form below and I'll get back to you as soon as possible.
        </Text>
        
        <ContactForm />
      </Section>
    </PageLayout>
  );
}
