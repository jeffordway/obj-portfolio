import { Hero, ScrollableContent, Section } from "@/components/layout";
import { Heading, Text } from "@/components/ui/typography";
import { HeroContent } from "@/components/sections";

export default function Home() {
  return (
    <>
      <Hero>
        <HeroContent
          title="Jeff Ordway"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

"
         
        />
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
