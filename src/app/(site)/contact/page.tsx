import { PageLayout, Section, Container } from "@/components/layout";
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
      <Section className="pt-20 md:pt-24 py-0">
        <Container width="narrow">
          <Heading>Get in Touch</Heading>
          <Text className="mt-6 mb-8">
            Have a question or want to chat? Fill out the form below and I'll get back to you as soon as possible.
          </Text>
          
          <ContactForm />
        </Container>
      </Section>
    </PageLayout>
  );
}
