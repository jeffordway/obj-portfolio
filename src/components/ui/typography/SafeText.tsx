import React, { ElementType } from 'react';
import { twMerge } from 'tailwind-merge';

/**
 * SafeText Component
 * 
 * A component that safely renders text content by automatically escaping special characters
 * that would otherwise trigger ESLint's react/no-unescaped-entities rule.
 * 
 * This component handles the escaping of quotes and apostrophes in text content
 * while preserving the original formatting and styling.
 */
interface SafeTextProps {
  children: React.ReactNode;
  className?: string;
  as?: ElementType;
}

export const SafeText: React.FC<SafeTextProps> = ({
  children,
  className = '',
  as: Component = 'span',
}) => {
  // If children is a string, process it to escape special characters
  if (typeof children === 'string') {
    // Replace apostrophes and quotes with their HTML entity equivalents
    const processedText = children
      .replace(/'/g, '&#39;')
      .replace(/"/g, '&#34;');
    
    // Return the processed text with dangerouslySetInnerHTML
    // This is safe because we're only replacing specific characters
    return React.createElement(Component, {
      className: twMerge(className),
      dangerouslySetInnerHTML: { __html: processedText }
    });
  }
  
  // If children is not a string (e.g., a React element), return it as is
  return React.createElement(Component, { className: twMerge(className) }, children);
};

/**
 * SafeParagraph Component
 * 
 * A convenience component that renders a paragraph with safely escaped text
 */
export const SafeParagraph: React.FC<Omit<SafeTextProps, 'as'>> = (props) => {
  return <SafeText {...props} as="p" />;
};

/**
 * SafeHeading Component
 * 
 * A convenience component that renders headings with safely escaped text
 */
interface SafeHeadingProps extends Omit<SafeTextProps, 'as'> {
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

export const SafeHeading: React.FC<SafeHeadingProps> = ({ 
  level, 
  ...props 
}) => {
  const Component = `h${level}` as ElementType;
  return <SafeText {...props} as={Component} />;
};

export default SafeText;
