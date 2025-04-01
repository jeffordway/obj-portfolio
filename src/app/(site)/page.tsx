import { PageLayout } from "@/components/layout";
import { Container } from "@/components/layout/Container";
import Hero from "@/components/layout/Hero";
import { getAllProjects } from "@/sanity/lib/queries";
import { Card } from "@/components/ui/card";
import { homePageData } from "@/constants/home";

// Add proper Next.js caching and revalidation
export const revalidate = 3600; // Revalidate content every hour

export default async function Home() {
  // Load content from constants file
  const content = homePageData;

  // Fetch all projects for the portfolio grid with caching
  const projects = await getAllProjects();

  // Render home page with hero and projects grid
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
      
      // Hero section with title and subtitle
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
      {/* Projects Section */}
      <section id="projects">
        <Container width="full">
          {/* Projects Grid - Portfolio Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Map through projects and render cards */}
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
