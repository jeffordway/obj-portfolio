import { Hero, ScrollableContent, Section } from "@/components/layout";
import { Heading, Text } from "@/components/ui/typography";

export const metadata = {
  title: "Contact | Jeff Ordway",
  description: "Get in touch with Jeff Ordway",
};

export default function ContactPage() {
  return (
    <>
      <Hero>
        <div className="text-center px-4">
          <Heading size="4xl" weight="bold" tracking="tight">
            Contact
          </Heading>
          <Text size="xl" className="mt-4 max-w-xl">
            Let's get in touch
          </Text>
        </div>
      </Hero>

      <ScrollableContent>
        <Section padding="large">
          <Heading>Contact Me</Heading>
          <Text className="mt-4">
            This is a placeholder for the contact page content.
          </Text>
        </Section>
      </ScrollableContent>
    </>
  );
}
