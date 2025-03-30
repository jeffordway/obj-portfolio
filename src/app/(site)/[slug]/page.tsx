import { notFound } from "next/navigation";
import Image from "next/image";
import { PageLayout } from "@/components/layout";
import Hero from "@/components/layout/Hero";
import { Container } from "@/components/layout/Container";
import { Heading, Text } from "@/components/ui/typography";
import { Divider } from "@/components/ui/divider";
import { Tag } from "@/components/ui/tag";
import {
  getProjectBySlug,
  getCategoriesWithSkills,
} from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { ButtonVariant } from "@/components/ui/button";
import { PortableText } from "@/components/ui/portable-text/PortableText";
import {
  projectPageLabels,
  projectMetadata,
  githubButtonText,
  defaultPrototypeButtonText,
} from "@/constants/project";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata(props: ProjectPageProps) {
  // Properly await the params object before accessing its properties
  const { params } = props;
  const resolvedParams = await Promise.resolve(params);
  const slug = resolvedParams.slug;
  
  // Now fetch the project with the validated slug
  const project = await getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }

  return {
    title: `${project.title}${projectMetadata.titleSuffix}`,
    description: project.headline || projectMetadata.defaultDescription,
  };
}

export default async function ProjectPage(props: ProjectPageProps) {
  // Properly await the params object before accessing its properties
  const { params } = props;
  const resolvedParams = await Promise.resolve(params);
  const slug = resolvedParams.slug;
  
  // Fetch both project and categories with skills concurrently
  const [project, categoriesWithSkills] = await Promise.all([
    getProjectBySlug(slug),
    getCategoriesWithSkills(),
  ]);

  if (!project) {
    notFound();
  }

  // Format the hero image URL
  const heroImageUrl = urlFor(project.heroImage).width(1920).height(1080).url();

  // Prepare action buttons if GitHub repo or prototype links are enabled
  const actionButtons: Array<{
    text: string;
    url: string;
    variant: ButtonVariant;
    icon: React.ReactNode;
    isExternal: boolean;
  }> = [];

  if (project.githubRepo?.showButton) {
    actionButtons.push({
      text: githubButtonText,
      url: project.githubRepo.url,
      variant: "outline",
      icon: <FaGithub />,
      isExternal: true,
    });
  }

  if (project.prototype?.showButton) {
    actionButtons.push({
      text: project.prototype.buttonText || defaultPrototypeButtonText,
      url: project.prototype.url,
      variant: "primary",
      icon: <FaArrowUpRightFromSquare />,
      isExternal: true,
    });
  }

  return (
    <PageLayout
      heroContent={
        <Hero
          title={project.title}
          subtitle={project.headline}
          actionButtons={actionButtons}
          textAlign="center"
          contentAlign="center"
          direction="column"
        />
      }
      showBackgroundMedia={true}
      mediaType="image"
      mediaSrc={heroImageUrl}
      mediaOpacity={10}
      showColoredOverlay={true}
      overlayColor="bg-background"
      overlayOpacity={60}
      blurAmount={5}
    >
      <Container width="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Content Grid */}
          <div className="col-span-12 md:col-span-3 order-2 md:order-1">
            <div className="space-y-8">
              {/* Skills Section */}
              <div>
                <Heading as="h2" size="lg" className="mb-4">
                  {projectPageLabels.skillsSectionTitle}
                </Heading>
                <div className="space-y-4">
                  {project.categories?.length > 0 ? (
                    project.categories.map((category) => {
                      // Get skills for this category from the project
                      const categorySkills =
                        categoriesWithSkills
                          .find((cat) => cat._id === category._id)
                          ?.skills.filter((catSkill) =>
                            project.skills.some(
                              (projSkill) => projSkill._id === catSkill._id
                            )
                          ) || [];

                      return categorySkills.length > 0 ? (
                        <div key={category._id}>
                          <Text
                            weight="medium"
                            size="sm"
                      
                            className="mb-3 block"
                          >
                            {category.title}
                          </Text>
                          <div className="flex flex-wrap gap-2">
                            {categorySkills.map((skill) => (
                              <Tag
                                key={skill._id}
                                label={skill.title}
                                tooltipContent={skill.description}
                              />
                            ))}
                          </div>
                        </div>
                      ) : null;
                    })
                  ) : (
                    <Text className="text-foreground/60 italic">
                      {projectPageLabels.noSkillsFoundText}
                    </Text>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Project Content */}
          <div className="col-span-12 md:col-span-9 order-1 md:order-2">
            <div className="space-y-12">
              {/* Project Description */}
              <div>
                <Heading as="h2" size="lg" className="mb-4">
                  {projectPageLabels.overviewSectionTitle}
                </Heading>
                <div className="space-y-4">
                  {project.content ? (
                    <PortableText value={project.content} />
                  ) : (
                    <Text className="text-foreground/60 italic">
                      {projectPageLabels.noContentText}
                    </Text>
                  )}
                </div>
              </div>

              {/* Additional Images */}
              {project.additionalImages &&
                project.additionalImages.length > 0 && (
                  <>
                    <Divider />

                    <div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {project.additionalImages.map((image, index) => (
                          <div key={index} className="space-y-2">
                            <div className="relative aspect-video w-full overflow-hidden">
                              <Image
                                src={urlFor(image).width(800).height(450).url()}
                                alt={image.alt || `Project image ${index + 1}`}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
            </div>
          </div>
        </div>
      </Container>
    </PageLayout>
  );
}
