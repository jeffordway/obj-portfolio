import React from "react";
import Image from "next/image";
import Link from "next/link";
import { clsx } from "clsx";
import { Tag } from "@/components/ui/tag";
import { Heading, Text } from "@/components/ui/typography";
import { SanityProject } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export interface CardProps {
  /**
   * Sanity project data
   */
  project: SanityProject;

  /**
   * Optional additional className for the container
   */
  className?: string;

  /**
   * Optional children to render inside the item
   */
  children?: React.ReactNode;
}

/**
 * Project card component with image, title, description, and tags
 * Features hover animation and link functionality
 */
export const Card: React.FC<CardProps> = ({ project, className, children }) => {
  // Extract data from Sanity project
  const title = project.title;
  const description = project.headline;
  const imageSrc = urlFor(project.heroImage).width(800).height(600).url();
  const imageAlt = `${project.title} project image`;
  const href = `/${project.slug.current}`;

  // Use categories for tags
  const tags = project.categories.map((category) => category.title);

  // All links are internal by default
  const external = false;

  // External link props
  const externalProps = external
    ? {
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": `${title} (opens in new tab)`,
      }
    : {};

  return (
    <Link
      href={href}
      className={clsx(
        // Layout and positioning
        "relative overflow-hidden w-full",
        "aspect-square", // Force square aspect ratio

        // Interactive states
        "group cursor-pointer",

        // Additional classes
        className
      )}
      {...externalProps}
    >
      {/* Background image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className={clsx(
            "object-cover",
            "transition-all duration-500 group-hover:scale-110",
            "z-0" // Ensure image is behind content
          )}
          priority
        />
      </div>

      {/* Overlay gradient */}
      <div
        className={clsx(
          "absolute inset-0",
          "bg-radial from-background/90 to-background/60",
          "opacity-0 group-hover:opacity-100",
          "transition-opacity duration-500",
          "z-10" // Above image, below content
        )}
      ></div>

      {/* Content container */}
      <div
        className={clsx(
          "absolute inset-0",
          "flex flex-col items-center justify-center",
          "p-4 md:p-6",
          "text-foreground opacity-0 group-hover:opacity-100",
          "transition-opacity duration-500",
          "z-20" // Above overlay
        )}
      >
        <div className="text-center max-w-[85%]">
          <Heading
            as="h3"
            size={description ? "xl" : "lg"}
            weight="medium"
       
            className="mb-2"
          >
            {title}
          </Heading>

          {description && (
            <Text
              size="sm"
              align="center"
              leading="relaxed"
              className="mb-4"
            >
              {description}
            </Text>
          )}

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 justify-center mt-2">
              {tags.map((tagLabel, index) => (
                <Tag key={index} label={tagLabel} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Optional children */}
      {children}
    </Link>
  );
};
