import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Text, Heading } from "@/components/ui/typography";
import { MainLayout } from "@/components/layout/MainLayout";
import Hero from "@/components/layout/Hero";
import clsx from "clsx";

export default function NotFound() {
  return (
    <MainLayout showHero={true}>
      <Hero
        showBackgroundMedia={true}
        mediaType="image"
        mediaSrc="https://images.unsplash.com/photo-1436918671239-a2b72ace4880?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        mediaOpacity={5}
        showColoredOverlay={true}
        overlayColor="bg-background"
        overlayOpacity={50}
        blurAmount={8}
      >
        <div
          className={clsx(
            "flex flex-col items-center", // Layout
            "max-w-5xl text-center", // Text alignment
            "gap-4" // Spacing
          )}
        >
          <Heading as="h1" size="xl" weight="medium">
            404 | Page Not Found
          </Heading>

          <Text size="3xl" align="center">
            Oops! The page you were looking for doesn't seem to exist.
            <br />
            Let's get you back on track.
          </Text>

          <Button variant="primary" size="lg" hoverEffect={true}>
            <Link
              href="/"
              className="flex items-center justify-center w-full h-full"
            >
              Go to Homepage
            </Link>
          </Button>
        </div>
      </Hero>
    </MainLayout>
  );
}
