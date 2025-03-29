import { PageLayout } from '@/components/layout';
import { Container } from '@/components/layout/Container';
import Hero from '@/components/layout/Hero';
import { getAllProjects } from '@/sanity/lib/queries';
import { Heading, Text } from '@/components/ui/typography';
import { Card } from '@/components/ui/card';
import { homePageData } from '@/constants/home';

/**
 * Home page component that showcases the hero section and featured projects
 */
export default async function Home() {
  // Use content from constants file
  const content = homePageData;

  // No action buttons needed for the home page

  // Fetch projects data
  const projects = await getAllProjects();

  return (
    <PageLayout
      // Background media configuration
      showBackgroundMedia={true}
      mediaType={content.background.mediaType}
      mediaSrc={content.background.mediaSrc}
      mediaOpacity={content.background.mediaOpacity}
      showColoredOverlay={true}
      overlayColor={content.background.overlayColor}
      overlayOpacity={content.background.overlayOpacity}
      blurAmount={content.background.blurAmount}
      
      // Custom hero content
      heroContent={
        <Hero
          title={content.hero.title}
          subtitle={content.hero.subtitle}
          avatar={content.hero.avatar}
          highlightColor="text-primary"
          textAlign="center"
          contentAlign="center"
          direction="column"
        />
      }
    >
      {/* Projects section with ID for anchor linking */}
      <section id="projects">
        <Container width="full">
          {/* Projects grid directly without header */}

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card
                key={project._id}
                project={project}
              />
            ))}
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
