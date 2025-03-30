import { Container } from "@/components/layout";
import { Heading, Text } from "@/components/ui/typography";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function NotFound() {
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
        <div className="absolute inset-0 bg-background opacity-90 backdrop-blur-md"></div>
      </div>
      
      {/* Content */}
      <Container width="narrow" className="py-16 relative z-10">
        <Heading as="h1" size="xl" className="mb-4">404 | Page Not Found</Heading>
        <Text className="mb-8">Oops! The page you were looking for doesn't seem to exist.</Text>
        
        <Link href="/" passHref>
          <Button variant="primary">Go to Homepage</Button>
        </Link>
      </Container>
    </div>
  );
}
