import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { PageLayout, Hero, Content } from '@/components/layout';
import { ActionButton } from '@/components/layout/Hero';
import { Heading, Text } from '@/components/ui/typography';
import { Divider } from '@/components/ui/divider';
import { Tag } from '@/components/ui/tag';
import { getProjectBySlug } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';
import { FaGithub, FaArrowUpRightFromSquare } from 'react-icons/fa6';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const project = await getProjectBySlug(params.slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.'
    };
  }
  
  return {
    title: `${project.title} | Jeff Ordway`,
    description: project.headline || 'View project details'
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  try {
    const project = await getProjectBySlug(params.slug);
    
    if (!project) {
      notFound();
    }
  
  // Format the hero image URL
  const heroImageUrl = urlFor(project.heroImage).width(1920).height(1080).url();
  
  // Prepare action buttons if GitHub repo or prototype links are enabled
  const actionButtons: ActionButton[] = [];
  
  if (project.githubRepo?.showButton) {
    actionButtons.push({
      text: 'View on GitHub',
      url: project.githubRepo.url,
      variant: 'outline',
      isExternal: true
    });
  }
  
  if (project.prototype?.showButton) {
    actionButtons.push({
      text: project.prototype.buttonText || 'View Prototype',
      url: project.prototype.url,
      variant: 'primary',
      isExternal: true
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
      <Content id="project-details" padding="large">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Main Content Grid */}
          <div className="col-span-12 md:col-span-3 order-2 md:order-1">
            <div className="space-y-8">
              {/* Skills Section */}
              <div>
                <Heading
                  as="h2"
                  size="lg"
                  className="mb-4 text-2xl md:text-3xl"
                >
                  Skills Used
                </Heading>
                <div className="space-y-6">
                  {project.categories && project.categories.length > 0 ? (
                    project.categories.map((category) => (
                      <div key={category._id}>
                        <Heading
                          as="h3"
                          size="sm"
                          weight="semibold"
                          muted={false}
                          className="mb-2 text-base"
                        >
                          {category.title}
                        </Heading>
                        <div className="flex flex-wrap gap-2">
                          {project.skills
                            .filter(skill => skill._id.includes(category._id))
                            .map((skill) => (
                              <Tag
                                key={skill._id}
                                label={skill.title}
                              />
                            ))}
                        </div>
                      </div>
                    ))
                  ) : (
                    <Text className="text-sm text-foreground/60 italic">
                      No categories found for this project.
                    </Text>
                  )}
                </div>
              </div>
              
              <Divider />
              
              {/* Project Date */}
              {project.date && (
                <div>
                  <Heading
                    as="h2"
                    size="lg"
                    className="mb-4 text-2xl md:text-3xl"
                  >
                    Completed
                  </Heading>
                  <Text className="text-base">
                    {new Date(project.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long'
                    })}
                  </Text>
                </div>
              )}
            </div>
          </div>
          
          {/* Project Content */}
          <div className="col-span-12 md:col-span-9 order-1 md:order-2">
            <div className="space-y-12">
              {/* Project Description */}
              <div>
                <Heading
                  as="h2"
                  size="lg"
                  className="mb-4 text-2xl md:text-3xl"
                >
                  Project Overview
                </Heading>
                <div className="space-y-4 text-base">
                  {/* For now, we'll use a placeholder text until we implement the Portable Text renderer */}
                  <Text>
                    {project.content ? 
                      'Project content will be displayed here once we implement the Portable Text renderer.' : 
                      'This project doesn\'t have any detailed content yet.'}
                  </Text>
                </div>
              </div>
              
              {/* Additional Images */}
              {project.additionalImages && project.additionalImages.length > 0 && (
                <>
                  <Divider />
                  
                  <div>
                    <Heading
                      as="h2"
                      size="lg"
                      className="mb-4 text-2xl md:text-3xl"
                    >
                      Project Gallery
                    </Heading>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {project.additionalImages.map((image, index) => (
                        <div key={index} className="space-y-2">
                          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                            <Image
                              src={urlFor(image).width(800).height(450).url()}
                              alt={image.alt || `Project image ${index + 1}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                          {image.caption && (
                            <Text size="sm" className="text-foreground/70 italic">
                              {image.caption}
                            </Text>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </Content>
    </PageLayout>
  );
  } catch (error) {
    console.error(`Error fetching project with slug '${params.slug}':`, error);
    notFound();
  }
}
