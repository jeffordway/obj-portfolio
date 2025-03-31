import { Container } from "@/components/layout";
import { Heading } from "@/components/ui/typography";
import { SafeText } from "@/components/ui/typography/SafeText";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

/**
 * 404 Not Found Page Component
 * 
 * Displays a visually appealing 404 error page with a background image,
 * error message, and a button to navigate back to the homepage.
 */
export function NotFoundPage() {
  return (
    <div className="min-h-screen relative flex items-center justify-center text-center">
      {/* Background image with semi-transparent overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1436918671239-a2b72ace4880?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Ocean background for 404 page"
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-50"
        />
        {/* Semi-transparent overlay with blur effect */}
        <div className="absolute inset-0 bg-background opacity-10 backdrop-blur-md"></div>
      </div>
      
      {/* Main content container */}
      <Container width="narrow" className="relative z-10">
        <div className="flex flex-col items-center gap-4 w-full text-center">
          {/* Page title */}
          <Heading 
            as="h1" 
            size="xl" 
            weight="medium"
            className="text-primary"
          >
            404 | Page Not Found
          </Heading>
          
          {/* Error message */}
          <SafeText 
            className="text-3xl text-center leading-relaxed max-w-3xl mx-auto"
            as="p"
          >
            Oops! The page you were looking for doesn&apos;t seem to exist.
          </SafeText>
          
          {/* Navigation button */}
          <div className="flex flex-wrap gap-4 justify-center mt-2 z-50 relative pointer-events-auto">
            <Link href="/" passHref className="inline-block">
              <Button variant="primary" size="lg">Go to Homepage</Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
