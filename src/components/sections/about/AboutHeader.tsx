import React from 'react';
import { clsx } from 'clsx';
import Image from 'next/image';
import { Heading, Text } from '@/components/ui/typography';

export interface AboutHeaderProps {
  /**
   * Profile image URL
   */
  profileImageUrl: string;
  
  /**
   * Profile name
   */
  name: string;
  
  /**
   * Profile title or role
   */
  title?: string;
  
  /**
   * Biography paragraphs
   */
  bioParagraphs: string[];
  
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * About page header component with profile image and biography
 */
const AboutHeader: React.FC<AboutHeaderProps> = ({
  profileImageUrl,
  name,
  title,
  bioParagraphs,
  className,
}) => {
  return (
    <div className={clsx(
      'grid grid-cols-1 lg:grid-cols-12 gap-12',
      'items-start',
      className
    )}>
      {/* Left column - Profile image */}
      <div className="lg:col-span-4">
        <div className={clsx(
          'relative aspect-square w-full',
          'rounded-md overflow-hidden'
        )}>
          <Image 
            src={profileImageUrl}
            alt={name} 
            fill 
            className="object-cover"
            priority
          />
        </div>
      </div>
      
      {/* Right column - Bio text */}
      <div className="lg:col-span-8">
        <Heading as="h1" size="2xl" className="mb-2">{name}</Heading>
        {title && (
          <Heading as="h2" size="lg" className="mb-6 text-foreground/70">{title}</Heading>
        )}
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {bioParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;
