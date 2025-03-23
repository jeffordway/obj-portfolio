"use client";

import React from 'react';
import { Section } from '@/components/layout';
import { Heading, Text } from '@/components/ui/typography';
import { clsx } from 'clsx';

export interface ContactSectionProps {
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
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Contact section component
 */
const ContactSection: React.FC<ContactSectionProps> = ({
  title,
  description,
  contactContent,
  className,
}) => {
  return (
    <Section 
      id="contact" 
      padding="large" 
      className={className}
    >
      <div className={clsx(
        'flex flex-col', // Layout
        'gap-8' // Spacing
      )}>
        <div className={clsx(
          'flex flex-col', // Layout
          'gap-4' // Spacing between title and description
        )}>
          <Heading>{title}</Heading>
          {description && <Text>{description}</Text>}
        </div>
        
        {contactContent && (
          <div className={clsx(
            'w-full max-w-2xl mx-auto', // Width constraints
            'flex flex-col', // Layout
            'gap-6' // Spacing
          )}>
            {contactContent}
          </div>
        )}
      </div>
    </Section>
  );
};

export default ContactSection;
