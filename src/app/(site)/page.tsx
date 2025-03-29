import { PageLayout } from "@/components/layout";
import { Text, Heading } from "@/components/ui/typography";
import {
  AvatarHero,
  ProjectsSection,
  SkillsSection,
  ContactSection,
  ContentSection,
} from "@/components/sections";
import { CardGrid } from "@/components/ui/card";
import { projects } from "@/constants";

export default function Home() {
  // Page content variables for easier management
  const pageContent = {
    hero: {
      title: "Purpose-Driven Design and Development",
      subtitle: `
      Hey, I'm Jeff Ordway, a creator with a passion for purpose and 
      a knack for turning faith into action. I build tools to help you 
      live boldly, pursue excellence, and serve purposefully."
      `
        .trim()
        .replace(/\s+/g, " "),
    },
    main: {
      heading: "Welcome to my portfolio",
      subheading: "This is a placeholder for the home page content.",
    },
  };

  return (
    <PageLayout
      heroContent={
        <AvatarHero
          title={pageContent.hero.title}
          subtitle={pageContent.hero.subtitle}
          avatarSize={100}
        />
      }
      showBackgroundMedia={true}
      mediaType="video"
      mediaSrc="/videos/background_video.mp4"
      mediaOpacity={5}
      showColoredOverlay={true}
      overlayColor="bg-background"
      overlayOpacity={50}
      blurAmount={8}
    >
      <CardGrid 
        projects={projects}
        className="py-12"
      />
    </PageLayout>
  );
}
