import { Container } from "@/components/layout";
import { Heading, Text } from "@/components/ui/typography";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function NotFoundPage() {
  // Render 404 page with background image and content
  return (
    <div className="min-h-screen relative flex items-center justify-center text-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1436918671239-a2b72ace4880?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Background"
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-background opacity-10 backdrop-blur-md"></div>
      </div>
      
      {/* Content */}
      <Container width="narrow" className="relative z-10">
        <div className="flex flex-col items-center gap-4 w-full text-center">
          <Heading 
            as="h1" 
            size="xl" 
            weight="medium"
            className="text-primary"
          >
            404 | Page Not Found
          </Heading>
          
          <Text 
            size="3xl" 
            align="center" 
            leading="relaxed"
            className="max-w-3xl mx-auto"
          >
            Oops! The page you were looking for doesn't seem to exist.
          </Text>
          
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
