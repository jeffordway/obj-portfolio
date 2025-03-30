import React from 'react';
import {
  PortableText as BasePortableText,
  PortableTextReactComponents,
  PortableTextComponentProps,
} from '@portabletext/react';
import { urlFor } from '@/sanity/lib/image';
import { Text, Heading } from '@/components/ui/typography';
import Image from 'next/image';

// Define custom components for the PortableText renderer
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
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
      return (
        <a 
          href={value?.href} 
          target={target} 
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          className="text-primary hover:underline transition-colors"
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="my-6 relative w-full h-auto rounded-lg overflow-hidden">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || ''}
            width={800}
            height={500}
            className="w-full h-auto object-cover rounded-lg"
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

interface PortableTextProps {
  value: any;
  className?: string;
}

/**
 * PortableText component for rendering Sanity's Portable Text format
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
