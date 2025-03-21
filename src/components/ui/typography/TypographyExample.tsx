import React from "react";
import { Heading } from "./Heading";
import { Text } from "./Text";

export const TypographyExample: React.FC = () => {
  return (
    <div className="space-y-8 p-6">
      <section>
        <Text size="lg" weight="semibold" className="mb-4">
          Heading Component Examples
        </Text>
        
        <div className="space-y-4">
          <Heading as="h1" size="4xl" weight="extrabold">
            Heading 1 (4XL)
          </Heading>
          
          <Heading as="h2" size="3xl" weight="bold">
            Heading 2 (3XL)
          </Heading>
          
          <Heading as="h3" size="2xl" weight="semibold">
            Heading 3 (2XL)
          </Heading>
          
          <Heading as="h4" size="xl">
            Heading 4 (XL)
          </Heading>
          
          <Heading as="h5" size="lg">
            Heading 5 (LG)
          </Heading>
          
          <Heading as="h6" size="md">
            Heading 6 (MD)
          </Heading>
        </div>
      </section>

      <section>
        <Text size="lg" weight="semibold" className="mb-4">
          Heading Styles
        </Text>
        
        <div className="space-y-4">
          <Heading size="2xl" weight="bold">
            Default Heading
          </Heading>
          
          <Heading size="2xl" weight="bold" tracking="wide">
            Wide Tracking
          </Heading>
          
          <Heading size="2xl" weight="bold" gradient>
            Gradient Heading
          </Heading>
          
          <Heading size="2xl" weight="normal">
            Normal Weight
          </Heading>
          
          <div className="flex gap-4 items-center">
            <Heading size="2xl" muted={false}>
              Non-Muted
            </Heading>
            <Text>← Full opacity (muted=false)</Text>
          </div>
          
          <div className="flex gap-4 items-center">
            <Heading size="2xl" muted={true}>
              Muted
            </Heading>
            <Text>← Reduced opacity (muted=true)</Text>
          </div>
          
          <div className="max-w-md">
            <Heading size="xl" truncate>
              This is a very long heading that will be truncated with an ellipsis when it overflows the container width
            </Heading>
          </div>
        </div>
      </section>

      <section>
        <Text size="lg" weight="semibold" className="mb-4">
          Text Component Examples
        </Text>
        
        <div className="space-y-4 max-w-2xl">
          <Text size="xl">
            Extra Large Text - Perfect for introductory paragraphs or important information that needs to stand out.
          </Text>
          
          <Text size="lg">
            Large Text - Great for subheadings or featured content that needs slightly more emphasis than regular body text.
          </Text>
          
          <Text>
            Base Text - This is the default text size, ideal for most body content. It provides good readability while maintaining a clean and professional appearance.
          </Text>
          
          <Text size="sm">
            Small Text - Useful for secondary information, captions, or when space is limited but legibility is still important.
          </Text>
          
          <Text size="xs">
            Extra Small Text - Best for legal text, footnotes, or other supplementary content that doesn't need to be prominent.
          </Text>
        </div>
      </section>

      <section>
        <Text size="lg" weight="semibold" className="mb-4">
          Text Styles
        </Text>
        
        <div className="space-y-4 max-w-2xl">
          <Text weight="bold">
            Bold text adds emphasis and creates visual hierarchy.
          </Text>
          
          <Text weight="semibold">
            Semibold text provides moderate emphasis without being too heavy.
          </Text>
          
          <Text weight="medium">
            Medium weight offers a subtle emphasis that works well for subheadings.
          </Text>
          
          <Text weight="normal">
            Normal weight is the standard for body text, providing good readability.
          </Text>
          
          <Text weight="light">
            Light weight text can create an elegant, sophisticated feel.
          </Text>
          
          <Text muted>
            Muted text is displayed with reduced opacity, perfect for secondary information.
          </Text>
          
          <Text align="center">
            This text is center-aligned, which works well for quotes or featured content.
          </Text>
          
          <Text leading="relaxed">
            Text with relaxed line height provides more breathing room between lines, making longer passages easier to read and creating a more open, airy feel to your content.
          </Text>
          
          <div className="max-w-xs">
            <Text truncate>
              This text will be truncated with an ellipsis when it overflows the container width, which is useful for handling unknown content lengths in constrained spaces.
            </Text>
          </div>
        </div>
      </section>

      <section>
        <Text size="lg" weight="semibold" className="mb-4">
          Combined Typography Example
        </Text>
        
        <div className="max-w-2xl space-y-4 border border-foreground/20 p-6 rounded-lg">
          <Heading size="3xl" weight="bold">
            Building Beautiful Interfaces
          </Heading>
          
          <Text size="lg" leading="relaxed" className="mt-2">
            Typography is the foundation of good design. It establishes hierarchy, improves readability, and creates visual interest.
          </Text>
          
          <Text className="mt-4">
            Our typography components make it easy to maintain consistent text styling throughout your application. With a variety of options for size, weight, and spacing, you can create beautiful, readable text that enhances the user experience.
          </Text>
          
          <div className="mt-6">
            <Heading as="h3" size="xl" weight="semibold">
              Key Features
            </Heading>
            
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>
                <Text>Consistent type scale across your application</Text>
              </li>
              <li>
                <Text>Flexible options for different contexts</Text>
              </li>
              <li>
                <Text>Semantic HTML with appropriate heading levels</Text>
              </li>
              <li>
                <Text>Responsive and accessible by default</Text>
              </li>
            </ul>
          </div>
          
          <Text size="sm" muted className="mt-6">
            Inspired by modern design principles and best practices in typography.
          </Text>
        </div>
      </section>
    </div>
  );
};

export default TypographyExample;
