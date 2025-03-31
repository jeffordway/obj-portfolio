import React from "react";
import {
  PortableText as BasePortableText,
  PortableTextReactComponents,
  PortableTextBlock,
} from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";
import { Text, Heading } from "@/components/ui/typography";
import Image from "next/image";

/**
 * Custom components for the PortableText renderer
 * 
 * Defines how different block types, marks, and custom types should be rendered with
 * consistent styling that matches the application's design system.
 */
const components: Partial<PortableTextReactComponents> = {
  block: {
    // Different block styles
    normal: ({ children }) => (
      <Text className="text-foreground mb-4">{children}</Text>
    ),
    h1: ({ children }) => (
      <Heading as="h1" size="xl" className="mt-8 mb-4 text-foreground/80">{children}</Heading>
    ),
    h2: ({ children }) => (
      <Heading as="h2" size="lg" className="mt-8 mb-3 text-foreground/80">{children}</Heading>
    ),
    h3: ({ children }) => (
      <Heading as="h3" size="md" className="mt-4 mb-2 text-foreground/80">{children}</Heading>
    ),
    h4: ({ children }) => (
      <Heading as="h4" size="sm" className="mt-4 mb-2 text-foreground/80">{children}</Heading>
    ),
    blockquote: ({ children }) => (
      <blockquote className="pl-4 border-l-4 border-primary/50 italic my-4">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 mb-4 space-y-2">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="text-foreground">{children}</li>
    ),
    number: ({ children }) => (
      <li className="text-foreground">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic">{children}</em>
    ),
    code: ({ children }) => (
      <code className="bg-muted px-1.5 py-0.5 rounded font-mono text-sm">{children}</code>
    ),
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http") ? "_blank" : undefined;
      return (
        <a 
          href={value?.href} 
          target={target} 
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className="text-primary hover:underline transition-colors"
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value, index }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      
      // Get optimized image dimensions
      const imageWidth = value.width || 800;
      const imageHeight = value.height || 500;
      
      return (
        <div className="my-6 relative w-full h-auto rounded-lg overflow-hidden">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || ""}
            width={imageWidth}
            height={imageHeight}
            priority={index === 0} // Add priority loading for first image
            loading={index === 0 ? "eager" : "lazy"}
            className="w-full h-auto object-cover rounded-lg"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 800px"
          />
          {value.caption && (
            <div className="mt-2 text-sm text-foreground/60 italic">
              {value.caption}
            </div>
          )}
        </div>
      );
    },
    // Add more custom types as needed
  },
};

/**
 * Props for the PortableText component
 */
export interface PortableTextProps {
  /**
   * Portable Text content from Sanity to be rendered
   * Using a specific type for Portable Text blocks
   */
  value: PortableTextBlock | PortableTextBlock[];
  /**
   * Optional additional CSS classes
   */
  className?: string;
}

/**
 * PortableText Component
 * 
 * Renders Sanity's Portable Text format with custom styling and components.
 * Handles various content types including headings, lists, images, and rich text formatting.
 * Provides consistent typography, spacing, and visual styling across all rendered content.
 * 
 * @example
 * <PortableText value={content.body} className="my-custom-class" />
 */
export const PortableText: React.FC<PortableTextProps> = ({ value, className }) => {
  if (!value) {
    return null;
  }

  return (
    <div className={className}>
      <BasePortableText value={value} components={components} />
    </div>
  );
};

// For backward compatibility
export const SimplePortableText = PortableText;

export default PortableText;
