"use client";

import React from 'react';
import Image from 'next/image';

interface LogoProps {
  size?: number;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 160,
  className,
}) => {
  return (
    <Image
      src="/images/icons/ordway_jeff_wordmark.svg"
      alt="Jeff Ordway"
      width={size}
      height={size / 4}
      className={className}
      priority
    />
  );
};
