import { PageLayout } from "@/components/layout";
import { Heading, Text } from "@/components/ui/typography";
import { Divider } from "@/components/ui/divider";
import { SimpleHero } from "@/components/sections/hero";
import { BentoImage } from "@/components/ui/image";
import Image from "next/image";
import { ContentSection } from "@/components/sections";
import {
  getCategoriesWithSkills,
  SanityCategoryWithSkills,
} from "@/sanity/lib/queries";
import { Tag } from "@/components/ui/tag";

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
        <SimpleHero
          title={pageContent.hero.title}
          subtitle={pageContent.hero.subtitle}
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
      <ContentSection id="about">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8">
          {/* --- Intro Section --- */}
          <div className="col-span-12 md:col-span-3">
            <div className="relative aspect-square w-full max-w-xs mx-auto md:max-w-none overflow-hidden">
              <Image
                src="/images/about/ordway_jeff_brandmark_alt_large.jpg"
                alt="Jeff Ordway"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="col-span-12 md:col-span-9">
            <Heading className="text-3xl md:text-4xl mb-4">About Me</Heading>
            <Text className="text-base">
              Hey, I'm Jeff Ordway. I design and code things to help you live
              boldly, pursue excellence, and serve purposefully. My faith keeps
              me grounded, my grit keeps me going, and my love for laughter
              keeps it all fun. When I'm not coding, you'll find me hiking
              trails, pushing my limits at the gym, or sharing laughs with
              friends over a meal or a game.
            </Text>
          </div>

          {/* --- Bento Grid Section --- */}
          <div className="col-span-12 grid grid-cols-12 gap-8 h-[24rem] md:h-[32rem]">
            <BentoImage
              imageSrc="https://images.unsplash.com/photo-1562593028-2e975fe28a0c?q=80&w=4000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              imageAlt="Jeff hiking through mountains with a backpack, representing his love for adventure and exploration"
              title="Adventure Exploer"
              subtitle="I've explored the globe, hitting nearly every US state and Major League ballpark. I love chasing adventure one step at a time!"
              colSpan={12}
              rowSpan={2}
              className="md:col-span-8"
            />

            <BentoImage
              imageSrc="https://images.unsplash.com/photo-1547638375-ebf04735d792?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              imageAlt="Trivia night with friends around a table with quiz cards and drinks"
              title="Trivia Titan"
              subtitle="I once won a trivia contest by knowing the only fish that can blink—it's the mudskipper!"
              colSpan={12}
              rowSpan={4}
              className="md:col-span-4"
            />

            <BentoImage
              imageSrc="https://images.unsplash.com/photo-1526401485004-46910ecc8e51?q=80&w=5184&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              imageAlt="Person lifting weights in a gym, demonstrating strength training"
              title="Defying Gravity"
              subtitle="During an intense workout, I let go of a barbell from an overhead posistion, thinking it'd hover—spoiler: gravity won that round!"
              colSpan={4}
              rowSpan={2}
            />

            <BentoImage
              imageSrc="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=4795&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              imageAlt="Person playing recreational volleybal with friends, showing casual athletic activity"
              title="Aggressively Average"
              subtitle="In sports, I'm aggressively average—able to score, but not without tripping over my own feet."
              colSpan={4}
              rowSpan={2}
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
                <Text className="mb-4 text-base">
                  To inspire and equip people to live boldly, pursue excellence,
                  and serve with purpose.
                </Text>
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
                <Text className="mb-4 text-base">
                  A world where men and women enthusiastically embrace their
                  God-given purpose, leaving a lasting legacy for future
                  generations.
                </Text>
              </div>

              <Divider />

              {/* Core Values Section - Moved to Column 1, Restyled */}
              <div>
                <Heading
                  as="h2"
                  size="lg"
                  className="mb-4 text-2xl md:text-3xl"
                >
                  Core Values
                </Heading>
                <div className="space-y-6">
                  <div>
                    <Text>
                      <strong className="font-semibold block text-base mb-4">
                        Live Boldly
                      </strong>
                      <span className="text-base">
                        Living boldly in faith, taking purposeful steps to
                        reflect God's design and leave a legacy of impact.{" "}
                        <em className="text-foreground/70">
                          (
                          <a
                            href="https://www.bible.com/bible/59/JOS.1.9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary hover:underline transition-colors"
                          >
                            Joshua 1:9
                          </a>
                          ,{" "}
                          <a
                            href="https://www.bible.com/bible/59/EPH.6.10"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary hover:underline transition-colors"
                          >
                            Ephesians 6:10
                          </a>
                          ,{" "}
                          <a
                            href="https://www.bible.com/bible/59/2TI.1.7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary hover:underline transition-colors"
                          >
                            2 Timothy 1:7
                          </a>
                          )
                        </em>
                      </span>
                    </Text>
                  </div>
                  <div>
                    <Text>
                      <strong className="font-semibold block text-base mb-4">
                        Pursue Excellence
                      </strong>
                      <span className="text-base">
                        Pursuing excellence with grit and grace, turning
                        challenges into growth opportunities.{" "}
                        <em className="text-foreground/70">
                          (
                          <a
                            href="https://www.bible.com/bible/59/COL.3.23"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary hover:underline transition-colors"
                          >
                            Colossians 3:23
                          </a>
                          ,{" "}
                          <a
                            href="https://www.bible.com/bible/59/PRO.22.29"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary hover:underline transition-colors"
                          >
                            Proverbs 22:29
                          </a>
                          ,{" "}
                          <a
                            href="https://www.bible.com/bible/59/PHP.3.14"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary hover:underline transition-colors"
                          >
                            Philippians 3:14
                          </a>
                          )
                        </em>
                      </span>
                    </Text>
                  </div>
                  <div>
                    <Text>
                      <strong className="font-semibold block text-base mb-4">
                        Serve Purposefully
                      </strong>
                      <span className="text-base">
                        Building authentic connections and serving others with
                        strength and humility.{" "}
                        <em className="text-foreground/70">
                          (
                          <a
                            href="https://www.bible.com/bible/59/MRK.10.45"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary hover:underline transition-colors"
                          >
                            Mark 10:45
                          </a>
                          ,{" "}
                          <a
                            href="https://www.bible.com/bible/59/GAL.5.13"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary hover:underline transition-colors"
                          >
                            Galatians 5:13
                          </a>
                          ,{" "}
                          <a
                            href="https://www.bible.com/bible/59/1PE.4.10"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary hover:underline transition-colors"
                          >
                            1 Peter 4:10
                          </a>
                          )
                        </em>
                      </span>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Story and Skills (span-9) - Reordered */}
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
                    door slams open, and a wild-eyed woman charges in, thrusting
                    a goose at me. 'It swallowed a bunch of marbles!' she yells.
                    The bird is chaotic—feathers ruffled, beady eyes glaring.
                    Papers scatter, coworkers gawk, and I'm wrestling this
                    honking disaster until Fish & Wildlife arrives. It's absurd,
                    and I can't help but laugh. That ridiculous moment taught me
                    resilience isn't just about grit—it's about trusting God
                    when life turns into a sitcom gone wrong.
                  </Text>
                  <Text>
                    Flash forward several years, and I swapped parks for a new
                    passion: mobile design and development. After grinding
                    through late nights, I landed my dream job in Florida. Life
                    felt like it was clicking into place—until a sepsis
                    infection blindsided me. One moment, everything's great; the
                    next, I'm flat on my back in a hospital bed, tubes
                    everywhere, doctors giving me 50-50 odds. The room smelled
                    of bleach, monitors beeped endlessly, and my body ached like
                    it was shutting down. Staring at the cracked ceiling, I
                    realized I'd been holding onto my life too tightly, thinking
                    I could control it all. I couldn't. Jesus didn't just save
                    me spiritually—He pulled me through that darkness. Faith
                    stopped being an idea and became my anchor.
                  </Text>
                  <Text>
                    Surviving changed everything. That bed wasn't a grave—it was
                    a launchpad. Purpose surged within me—not just designing and
                    coding for a paycheck, but building something bigger. Now, I
                    create digital tools to help people grow—spiritually,
                    mentally, and physically—rooted in faith. It's tough, messy
                    work, but joy creeps in. Life's a wild ride—goose fiascoes,
                    career highs, near-death lows—but every twist weaves into a
                    story of guts, grace, and the steady truth: God's got the
                    wheel, and I'm never alone.
                  </Text>
                </div>
              </div>

              <Divider />

              {/* Skills Section - Moved to Column 2 */}
              <div>
                <Heading
                  as="h2"
                  size="lg"
                  className="mb-4 text-2xl md:text-3xl"
                >
                  Skills
                </Heading>
                <div className="space-y-6">
                  {categoriesWithSkills && categoriesWithSkills.length > 0 ? (
                    categoriesWithSkills.map((category) => (
                      <div key={category._id}>
                        <Text>
                          <strong className="text-base font-semibold block mb-4">
                            {category.title}
                          </strong>
                        </Text>
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
      </ContentSection>
    </PageLayout>
  );
}
