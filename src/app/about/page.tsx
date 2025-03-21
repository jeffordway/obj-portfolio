import { Hero, ScrollableContent, Section } from "@/components/layout";
import { Heading, Text } from "@/components/ui/typography";

export const metadata = {
  title: "About | Jeff Ordway",
  description: "Learn more about Jeff Ordway and his experience",
};

export default function AboutPage() {
  return (
    <>
      <Hero>
        <div className="text-center px-4">
          <Heading size="4xl" weight="bold" tracking="tight">
            About Me
          </Heading>
          <Text size="xl" className="mt-4 max-w-xl">
            My background and experience
          </Text>
        </div>
      </Hero>

      <ScrollableContent>
        <Section padding="large">
          <Heading>About</Heading>
          <Text className="mt-4">
            This is a placeholder for the about page content.
          </Text>
        </Section>
      </ScrollableContent>
    </>
  );
}
