import { Container, ContactForm } from "@/components/layout";
import Footer from "@/components/layout/Footer";
import { Heading, Text } from "@/components/ui/typography";
import { contactData } from "@/constants/contact";

export const metadata = {
  title: contactData.metaTitle,
  description: contactData.metaDescription,
};

export default function ContactPage() {
  // Render contact page with form and footer
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Main Content Area */}
      <main className="flex-grow">
        <Container width="narrow" className="pt-16 md:pt-30 pb-16">
          {/* Contact Header */}
          <Heading>{contactData.title}</Heading>
          <Text className="mt-4 mb-8">{contactData.description}</Text>

          {/* Contact Form Component */}
          <ContactForm />
        </Container>
      </main>
      {/* Page Footer */}
      <Footer />
    </div>
  );
}
