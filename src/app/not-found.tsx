import { MainLayout } from "@/components/layout/MainLayout";
import Hero from "@/components/layout/Hero";

export default function NotFound() {
  return (
    <MainLayout showHero={true}>
      <Hero
        title="404 | Page Not Found"
        subtitle="Oops! The page you were looking for doesn't seem to exist."
        textAlign="center"
        contentAlign="center"
        direction="column"
        actionButtons={[
          {
            text: "Go to Homepage",
            url: "/",
            variant: "primary",
            isExternal: false
          }
        ]}
        showBackgroundMedia={true}
        mediaType="image"
        mediaSrc="https://images.unsplash.com/photo-1436918671239-a2b72ace4880?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        mediaOpacity={5}
        showColoredOverlay={true}
        overlayColor="bg-background"
        overlayOpacity={10}
        blurAmount={8}
      />
    </MainLayout>
  );
}
