import { PageLayout } from "@/components/layout";
import { Heading, Text } from "@/components/ui/typography";
import { SimpleHero } from "@/components/sections/hero";
import { clsx } from "clsx";
import Image from "next/image";

export const metadata = {
  title: "About | Jeff Ordway",
  description: "Learn more about Jeff Ordway and his experience",
};

export default function AboutPage() {
  // Page content variables for easier management
  const pageContent = {
    hero: {
      title: "Jeff of All Trades, Master of None",
      subtitle: `
      Hey, it's me, Jeff Ordway. I'm glad you stuck around. I love designing 
      and coding fun stuff with a purpose. I'm inspired by faith and the chance 
      to make a real difference. I find renewal in getting outside to explore 
      the world around me, crushing it at the gym, or just laughing with friends 
      over a meal, game, or some epic trivia.
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
        <SimpleHero title={pageContent.hero.title} subtitle={pageContent.hero.subtitle} />
      }
      showBackgroundMedia={true}
      mediaType="video"
      mediaSrc="/videos/about_background.mp4"
      mediaOpacity={10}
      showColoredOverlay={true}
      overlayColor="bg-background"
      overlayOpacity={60}
      blurAmount={5}
    >
          {/* Top section with profile image and intro text */}
          <div
            className={clsx(
              "grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16",
              "items-start"
            )}
          >
            {/* Left column - Profile image */}
            <div className="lg:col-span-4">
              <div
                className={clsx(
                  "relative aspect-square w-full",
                  "rounded-md overflow-hidden"
                )}
              >
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Jeff Ordway"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Right column - Bio text */}
            <div className="lg:col-span-8">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  I'm a passionate designer and developer with over 10 years of
                  experience creating digital solutions that make a difference.
                  My approach combines strategic thinking with creative
                  execution to deliver results that exceed expectations.
                </p>

                <p>
                  I believe that great design should be purposeful, accessible,
                  and impactful. Whether I'm designing a brand identity,
                  building a website, or developing an application, I focus on
                  creating experiences that resonate with users and drive
                  meaningful outcomes.
                </p>

                <p>
                  My background spans across various industries including
                  healthcare, education, and technology, giving me a versatile
                  perspective that I bring to every project. I'm constantly
                  learning and evolving my skills to stay at the forefront of
                  design and development practices.
                </p>
              </div>
            </div>
          </div>

          {/* Bento grid layout for project examples */}
          <div
            className={clsx(
              "grid grid-cols-12 gap-4 mb-16", // 12-column grid with consistent gaps
              "auto-rows-[minmax(120px,auto)]" // Minimum row height
            )}
          >
            {/* Large feature item - spans 8 columns on all screens */}
            <div
              className={clsx(
                "col-span-12 md:col-span-8", // Full width on mobile, 8/12 on larger screens
                "row-span-2", // Spans 2 rows
                "relative",
                "rounded-md overflow-hidden"
              )}
            >
              <Image
                src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Project example"
                fill
                className="object-cover"
              />
            </div>

            {/* Tall item - spans 4 columns and 2 rows */}
            <div
              className={clsx(
                "col-span-6 md:col-span-4", // Half width on mobile, 4/12 on larger screens
                "row-span-2", // Spans 2 rows
                "relative",
                "rounded-md overflow-hidden"
              )}
            >
              <Image
                src="https://images.unsplash.com/photo-1593062096033-9a26b09da705?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Project example"
                fill
                className="object-cover"
              />
            </div>

            {/* Square item - spans 6 columns and 1 row */}
            <div
              className={clsx(
                "col-span-6 md:col-span-4", // Half width on mobile, 4/12 on larger screens
                "row-span-1", // Spans 1 row
                "relative",
                "rounded-md overflow-hidden"
              )}
            >
              <Image
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Project example"
                fill
                className="object-cover"
              />
            </div>

            {/* Small square item - spans 6 columns and 1 row */}
            <div
              className={clsx(
                "col-span-6 md:col-span-4", // Half width on mobile, 4/12 on larger screens
                "row-span-1", // Spans 1 row
                "relative aspect-square", // Square aspect ratio
                "rounded-md overflow-hidden"
              )}
            >
              <Image
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Project example"
                fill
                className="object-cover"
              />
            </div>

            {/* Wide item - spans 12 columns and 1 row */}
            <div
              className={clsx(
                "col-span-12", // Full width on all screens
                "row-span-1", // Spans 1 row
                "relative aspect-[16/5]", // Wide aspect ratio
                "rounded-md overflow-hidden"
              )}
            >
              <Image
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                alt="Project example"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Bottom section with skills and experience */}
          <div className={clsx("grid grid-cols-1 lg:grid-cols-2 gap-16")}>
            {/* Left column - Skills */}
            <div>
              <Heading as="h3" size="lg" className="mb-6">
                Skills
              </Heading>
              <div className={clsx("grid grid-cols-1 gap-3", "md:grid-cols-2")}>
                <Text>UI/UX Design</Text>
                <Text>Web Development</Text>
                <Text>Brand Identity</Text>
                <Text>React/Next.js</Text>
                <Text>TypeScript</Text>
                <Text>Tailwind CSS</Text>
              </div>
            </div>

            {/* Right column - Experience */}
            <div>
              <Heading as="h3" size="lg" className="mb-6">
                Experience
              </Heading>
              <div className={clsx("flex flex-col", "gap-5")}>
                <div>
                  <Text weight="medium">Senior Developer</Text>
                  <Text size="sm" className="text-foreground/70">
                    TechInnovate • 2020-Present
                  </Text>
                </div>
                <div>
                  <Text weight="medium">UX Designer</Text>
                  <Text size="sm" className="text-foreground/70">
                    DesignStudio • 2017-2020
                  </Text>
                </div>
                <div>
                  <Text weight="medium">Frontend Developer</Text>
                  <Text size="sm" className="text-foreground/70">
                    WebSolutions • 2015-2017
                  </Text>
                </div>
              </div>

              <Heading as="h3" size="lg" className="mt-10 mb-6">
                Education
              </Heading>
              <div className={clsx("flex flex-col", "gap-5")}>
                <div>
                  <Text weight="medium">Master of Design</Text>
                  <Text size="sm" className="text-foreground/70">
                    Design Institute • 2015
                  </Text>
                </div>
                <div>
                  <Text weight="medium">Bachelor of Computer Science</Text>
                  <Text size="sm" className="text-foreground/70">
                    Tech University • 2013
                  </Text>
                </div>
              </div>
            </div>
          </div>
    </PageLayout>
  );
}
