"use client";

import React from 'react';
import { clsx } from 'clsx';
import { Heading, Text } from '@/components/ui/typography';
import { Container } from './Container';

export interface ContactProps {
  /**
   * Section ID for navigation
   */
  id?: string;

  /**
   * Section title
   */
  title: string;
  
  /**
   * Section description
   */
  description?: string;
  
  /**
   * Contact form or content
   */
  contactContent?: React.ReactNode;
  
  /**
   * Section padding size
   * @default 'default'
   */
  padding?: "none" | "small" | "default" | "large";

  /**
   * Section width
   * @default 'container'
   */
  width?: "full" | "container" | "narrow";
  
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Contact component for displaying contact information and forms
 */
const Contact: React.FC<ContactProps> = ({
  id = "contact",
  title,
  description,
  contactContent,
  padding = "default",
  width = "container",
  className,
}) => {
  // Padding mapping with responsive values
  const paddingClasses = {
    none: "py-0",
    small: "py-4 sm:py-6 md:py-8",
    default: "py-8 sm:py-12 md:py-16",
    large: "py-16 sm:py-20 md:py-24",
  };

  return (
    <div 
      id={id} 
      className={clsx(
        "w-full",
        paddingClasses[padding],
        className
      )}
    >
      <Container width={width}>
        <div className="space-y-8">
          <div className="space-y-4 text-center">
            <Heading as="h2" size="2xl" weight="medium">
              {title}
            </Heading>
            
            {description && (
              <Text 
                size="lg" 
                align="center"
                leading="relaxed"
                className="max-w-3xl mx-auto"
              >
                {description}
              </Text>
            )}
          </div>
          
          {contactContent && (
            <div className="w-full max-w-2xl mx-auto space-y-6">
              {contactContent}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Contact;
