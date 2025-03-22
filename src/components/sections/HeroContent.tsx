import React from 'react';
import { Heading, Text } from '@/components/ui/typography';
import clsx from 'clsx';

interface HeroContentProps {
  title: string;
  subtitle: string;
  className?: string;
}

/**
 * Hero content component with title and subtitle
 */
export const HeroContent: React.FC<HeroContentProps> = ({
  title,
  subtitle,
  className,
}) => {
  return (
    <div className={clsx('flex flex-col items-center text-center gap-4', className)}>
      <Heading as="h1" size="xl" weight="medium">
        {title}
      </Heading>
      <Text size="2xl" align="center" fullWidth={false} className='text-white'>
        {subtitle}
      </Text>
    </div>
  );
};
