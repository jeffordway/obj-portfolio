import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Hero } from '@/components/sections/hero';
import { PageLayout } from '@/components/layout';
import { ContentSection } from '@/components/sections';

export default function ProjectNotFound() {
  return (
    <PageLayout
      heroContent={
        <Hero
          title="Project Not Found"
          subtitle="Oops! The project you were looking for doesn't seem to exist. Let's get you back to all projects."
          textAlign="center"
          contentAlign="center"
          direction="column"
          actionButtons={[
            {
              text: "View All Projects",
              url: "/projects",
              variant: "outline",
              isExternal: false
            },
            {
              text: "Go to Homepage",
              url: "/",
              variant: "primary",
              isExternal: false
            }
          ]}
        />
      }
      showBackgroundMedia={true}
      mediaType="image"
      mediaSrc="https://images.unsplash.com/photo-1436918671239-a2b72ace4880?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      mediaOpacity={5}
      showColoredOverlay={true}
      overlayColor="bg-background"
      overlayOpacity={50}
      blurAmount={8}
    >
      {/* Empty children content - required by PageLayout */}
      <ContentSection id="empty-content">
        <div className="min-h-[200px]"></div>
      </ContentSection>
    </PageLayout>
  );
}
