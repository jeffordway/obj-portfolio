import { notFound } from "next/navigation";
import { PageLayout } from "@/components/layout";
import Hero from "@/components/layout/Hero";
import { Container } from "@/components/layout/Container";
import { Heading, Text } from "@/components/ui/typography";
import { Tag } from "@/components/ui/tag";
import {
  getProjectBySlug,
  getCategoriesWithSkills,
} from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { ButtonVariant } from "@/components/ui/button";
import { PortableText } from "@/components/ui/portable-text/PortableText";
import { ProjectImage } from "@/components/ui/image/ProjectImage";
import { SquareImage } from "@/components/ui/image/SquareImage";
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
  const { params } = props;
  const resolvedParams = await Promise.resolve(params);
  const slug = resolvedParams.slug;

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

export default async function ProjectPage({ params }: ProjectPageProps) {
  // Extract and validate slug parameter
  const resolvedParams = await Promise.resolve(params);
  const slug = resolvedParams.slug;

  // Fetch project data and categories concurrently
  const [project, categoriesWithSkills] = await Promise.all([
    getProjectBySlug(slug),
    getCategoriesWithSkills(),
  ]);

  if (!project) {
    notFound();
  }

  // Prepare hero image and action buttons
  const heroImageUrl = urlFor(project.heroImage).width(1920).height(1080).url();

  const actionButtons: Array<{
    text: string;
    url: string;
    variant: ButtonVariant;
    icon: React.ReactNode;
    isExternal: boolean;
  }> = [];

  // Add GitHub repository button if enabled
  if (project.githubRepo?.showButton) {
    actionButtons.push({
      text: githubButtonText,
      url: project.githubRepo.url,
      variant: "outline",
      icon: <FaGithub />,
      isExternal: true,
    });
  }

  // Add prototype/demo button if enabled
  if (project.prototype?.showButton) {
    actionButtons.push({
      text: project.prototype.buttonText || defaultPrototypeButtonText,
      url: project.prototype.url,
      variant: "primary",
      icon: <FaArrowUpRightFromSquare />,
      isExternal: true,
    });
  }

  // Render project page with hero and content sections
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
      showBackgroundMedia
      mediaType="image"
      mediaSrc={heroImageUrl}
      mediaOpacity={10}
      showColoredOverlay
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
                      // Filter skills for this category
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

              {/* Project Images - 16:9 ratio, one per column */}
              {project.projectImages && project.projectImages.length > 0 && (
                <div>
                  <div className="grid grid-cols-1 gap-8">
                    {project.projectImages.map((image, index) => (
                      <ProjectImage
                        key={index}
                        imageSrc={urlFor(image).width(1200).height(675).url()}
                        imageAlt={image.alt || `Project image ${index + 1}`}
                        title={image.title}
                        headline={image.headline}
                        className="w-full"
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Additional Images - 1:1 ratio, two per column */}
              {project.additionalImages &&
                project.additionalImages.length > 0 && (
                  <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {project.additionalImages.map((image, index) => (
                        <SquareImage
                          key={index}
                          imageSrc={urlFor(image).width(600).height(600).url()}
                          imageAlt={
                            image.alt || `Additional image ${index + 1}`
                          }
                          title={image.title}
                          headline={image.headline}
                          className="w-full"
                        />
                      ))}
                    </div>
                  </div>
                )}
            </div>
          </div>
        </div>
      </Container>
    </PageLayout>
  );
}
