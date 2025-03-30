import { PageLayout, Container, ContactForm } from "@/components/layout";
import { Heading, Text } from "@/components/ui/typography";
import { contactData } from "@/constants/contact";

export const metadata = {
  title: contactData.metaTitle,
  description: contactData.metaDescription,
};

export default function ContactPage() {
  return (
    <PageLayout showHero={false} noHeroPadding={10}>
      <Container width="narrow" className="pt-16 md:pt-20">
        <Heading>{contactData.title}</Heading>
        <Text className="mt-4 mb-8">{contactData.description}</Text>

        <ContactForm />
      </Container>
    </PageLayout>
  );
}
