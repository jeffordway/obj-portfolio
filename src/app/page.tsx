import { Hero, ScrollableContent, Section } from "@/components/layout";
import { Heading, Text } from "@/components/ui/typography";


export default function Home() {
  return (
    <>
      <Hero>
        <div className="text-center px-4">
          <Heading size="4xl" weight="bold" tracking="tight">
            Jeff Ordway
          </Heading>
          <Text size="xl" className="mt-4 max-w-xl">
            Frontend Developer & Designer
          </Text>
        </div>
      </Hero>

      <ScrollableContent>
        <Section padding="large">
          <Heading>Welcome to my portfolio</Heading>
          <Text className="mt-4">
            This is a placeholder for the home page content.
          </Text>
        </Section>
      </ScrollableContent>
    </>
  );
}
