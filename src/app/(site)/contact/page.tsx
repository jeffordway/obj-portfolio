import { Container, ContactForm } from "@/components/layout";
import Footer from "@/components/layout/Footer";
import { Heading, Text } from "@/components/ui/typography";
import { contactData } from "@/constants/contact";

export const metadata = {
  title: contactData.metaTitle,
  description: contactData.metaDescription,
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow">
        <Container width="narrow" className="pt-16 md:pt-30 pb-16">
          <Heading>{contactData.title}</Heading>
          <Text className="mt-4 mb-8">{contactData.description}</Text>

          <ContactForm />
        </Container>
      </main>
      <Footer />
    </div>
  );
}
