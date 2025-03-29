import { PageLayout } from "@/components/layout";
import Hero from "@/components/layout/Hero";
import { Container } from "@/components/layout/Container";
import { Heading, Text } from "@/components/ui/typography";
import { Divider } from "@/components/ui/divider";
import { BentoImage } from "@/components/ui/image";
import Image from "next/image";
import {
  getCategoriesWithSkills,
  SanityCategoryWithSkills,
} from "@/sanity/lib/queries";
import { Tag } from "@/components/ui/tag";
import React from "react";
import {
  aboutHeaderData,
  coreValues,
  missionStatement,
  visionStatement,
} from "@/constants/about";

export const metadata = {
  title: "About | Jeff Ordway",
  description: "Learn more about Jeff Ordway and his experience",
};

export default async function AboutPage() {
  const categoriesWithSkills = await getCategoriesWithSkills();

  const pageContent = {
    hero: {
      title: "My Journey: From Curveballs to Clarity",
      subtitle: `
   Hey, it's me, Jeff Ordway. I'm glad you stuck around. 
   I love creating with joy and a sense of fun. But life 
   throws curveballs, and I've hit some unexpected roadblocks.
    Yet, through faith, I've seen God turn those broken moments 
    into purpose. My journey is about discovering clarity in chaos 
    and embracing my God-given calling.
      `
        .trim()
        .replace(/\s+/g, " "),
    },
  };

  return (
    <PageLayout
      heroContent={
        <Hero
          title={pageContent.hero.title}
          subtitle={pageContent.hero.subtitle}
          textAlign="center"
          contentAlign="center"
          direction="column"
        />
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
      <section id="about">
        <Container width="container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8">
            {/* --- Intro Section --- */}
            <div className="col-span-12 md:col-span-3">
              <div className="relative aspect-square w-full max-w-xs mx-auto md:max-w-none overflow-hidden">
                <Image
                  src={aboutHeaderData.imageSrc}
                  alt={aboutHeaderData.imageAlt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="col-span-12 md:col-span-9">
              <Heading className="text-3xl md:text-4xl mb-4">{aboutHeaderData.title}</Heading>
              <Text className="text-lg md:text-xl">
                {aboutHeaderData.bio}
              </Text>
            </div>

            {/* --- Bento Grid Section --- */}
            <div className="col-span-12 grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-8 md:h-[32rem]">
              <BentoImage
                imageSrc="https://images.unsplash.com/photo-1562593028-2e975fe28a0c?q=80&w=4000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                imageAlt="Jeff hiking through mountains with a backpack, representing his love for adventure and exploration"
                title="Adventure Exploer"
                subtitle="I've explored the globe, hitting nearly every US state and Major League ballpark. I love chasing adventure one step at a time!"
                colSpan={1}
                rowSpan={1}
                className="aspect-square md:aspect-auto md:col-span-8 md:row-span-2"
              />

              <BentoImage
                imageSrc="https://images.unsplash.com/photo-1547638375-ebf04735d792?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                imageAlt="Trivia night with friends around a table with quiz cards and drinks"
                title="Trivia Titan"
                subtitle="I once won a trivia contest by knowing the only fish that can blink—it's the mudskipper!"
                colSpan={1}
                rowSpan={1}
                className="aspect-square md:aspect-auto md:col-span-4 md:row-span-4"
              />

              <BentoImage
                imageSrc="https://images.unsplash.com/photo-1526401485004-46910ecc8e51?q=80&w=5184&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                imageAlt="Person lifting weights in a gym, demonstrating strength training"
                title="Defying Gravity"
                subtitle="During an intense workout, I let go of a barbell from an overhead posistion, thinking it'd hover—spoiler: gravity won that round!"
                colSpan={1}
                rowSpan={1}
                className="aspect-square md:aspect-auto md:col-span-4 md:row-span-2"
              />

              <BentoImage
                imageSrc="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=4795&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                imageAlt="Person playing recreational volleybal with friends, showing casual athletic activity"
                title="Aggressively Average"
                subtitle="In sports, I'm aggressively average—able to score, but not without tripping over my own feet."
                colSpan={1}
                rowSpan={1}
                className="aspect-square md:aspect-auto md:col-span-4 md:row-span-2"
              />
            </div>

            {/* --- Main Content Section (2 Columns) --- */}

            {/* Column 1: Mission, Vision, Core Values (span-3) */}
            <div className="col-span-12 md:col-span-3 order-2 md:order-1">
              <div className="space-y-8">
                <div>
                  <Heading
                    as="h2"
                    size="lg"
                    className="mb-4 text-2xl md:text-3xl"
                  >
                    Mission
                  </Heading>
                  <Text className="mb-4 text-base">{missionStatement}</Text>
                </div>

                <Divider />

                <div>
                  <Heading
                    as="h2"
                    size="lg"
                    className="mb-4 text-2xl md:text-3xl"
                  >
                    Vision
                  </Heading>
                  <Text className="mb-4 text-base">{visionStatement}</Text>
                </div>

                <Divider />

                {/* Core Values Section */}
                <div>
                  <Heading
                    as="h2"
                    size="lg"
                    className="mb-4 text-2xl md:text-3xl"
                  >
                    Core Values
                  </Heading>
                  <div className="space-y-8">
                    {coreValues.map((value, index) => (
                      <div key={index}>
                        <Heading
                          as="h3"
                          size="sm"
                          weight="semibold"
                          muted={false}
                          className="mb-4 text-base"
                        >
                          {value.title}
                        </Heading>
                        <Text size="base" className="mb-1">
                          {value.description}
                        </Text>
                        <div className="text-foreground/70 text-sm italic">
                          (
                          {value.scriptureRefs.map((ref, refIndex) => (
                            <React.Fragment key={refIndex}>
                              {refIndex > 0 && ", "}
                              <a
                                href={ref.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-primary hover:underline transition-colors"
                              >
                                {ref.text}
                              </a>
                            </React.Fragment>
                          ))}
                          )
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: Story and Skills (span-9) */}
            <div className="col-span-12 md:col-span-9 order-1 md:order-2">
              <div className="space-y-12">
                {/* My Story Section */}
                <div>
                  <Heading
                    as="h2"
                    size="lg"
                    className="mb-4 text-2xl md:text-3xl"
                  >
                    My Story
                  </Heading>
                  <div className="space-y-4 text-base">
                    <Text>
                      Picture this: I'm knee-deep in the chaos of the Parks and
                      Recreation office, juggling event schedules. Suddenly, the
                      door slams open, and a wild-eyed woman charges in,
                      thrusting a goose at me. "It swallowed a bunch of
                      marbles!" she yells. The bird is a bundle of
                      chaos—feathers ruffled, beady eyes glaring. Papers
                      scatter, coworkers gawk, and I'm wrestling with this
                      honking disaster until Fish & Wildlife arrives. It's
                      absurd, and I can't help but laugh. That ridiculous moment
                      taught me that resilience isn't just about grit; it's
                      about trusting God when life turns into a sitcom gone
                      wrong.
                    </Text>
                    <Text>
                      Fast forward several years, and I swapped parks for a new
                      passion: mobile design and development. After grinding
                      through late nights, I landed my dream job in Nashville,
                      Tennessee. Life felt like it was finally clicking into
                      place—until a sepsis infection blindsided me. One moment
                      everything was great; the next, I found myself flat on my
                      back in a hospital bed, tubes everywhere, with doctors
                      giving me 50-50 odds. The room smelled of bleach, monitors
                      beeped endlessly, and my body ached as if it were shutting
                      down. Staring at the cracked ceiling, I realized I had
                      been holding onto my life too tightly, thinking I could
                      control it all. I couldn't. Jesus didn't just save me
                      spiritually; He pulled me through that darkness. My faith
                      stopped being just an idea; it became my anchor.
                    </Text>
                    <Text>
                      Surviving changed everything. That hospital bed wasn't a
                      grave; it became a launchpad. A sense of purpose surged
                      within me—not just designing and coding for a paycheck,
                      but building something bigger. Now, I create digital tools
                      to help people grow—spiritually, mentally, and
                      physically—rooted in faith. It's tough and messy work, but
                      joy creeps in. Life's a wild ride—filled with goose
                      fiascoes, career highs, and near-death lows—but every
                      twist weaves into a story of guts, grace, and the steady
                      truth: God's got the wheel, and I'm never alone.
                    </Text>
                  </div>
                </div>

                <Divider />

                {/* Skills Section */}
                <div>
                  <Heading
                    as="h2"
                    size="lg"
                    className="mb-4 text-2xl md:text-3xl"
                  >
                    Skills
                  </Heading>
                  <div className="space-y-8">
                    {categoriesWithSkills && categoriesWithSkills.length > 0 ? (
                      categoriesWithSkills.map((category) => (
                        <div key={category._id}>
                          <Heading
                            as="h3"
                            size="sm"
                            weight="semibold"
                            muted={false}
                            className="mb-4 text-base"
                          >
                            {category.title}
                          </Heading>
                          {category.skills && category.skills.length > 0 ? (
                            <div className="flex flex-wrap gap-2">
                              {category.skills.map((skill) => (
                                <Tag
                                  key={skill._id}
                                  label={skill.title}
                                  tooltipContent={skill.description}
                                />
                              ))}
                            </div>
                          ) : (
                            <Text className="text-sm text-foreground/60 italic">
                              No skills listed for this category.
                            </Text>
                          )}
                        </div>
                      ))
                    ) : (
                      <Text className="text-sm text-foreground/60 italic">
                        No skill categories found.
                      </Text>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
