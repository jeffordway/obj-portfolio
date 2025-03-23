"use client";

import React from 'react';
import { clsx } from 'clsx';
import { Text } from '@/components/ui/typography';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * Label for the textarea
   */
  label?: string;
  
  /**
   * Error message to display
   */
  error?: string;
  
  /**
   * Helper text to display below the textarea
   */
  helperText?: string;
  
  /**
   * Whether the textarea is full width
   * @default true
   */
  fullWidth?: boolean;
  
  /**
   * Additional CSS classes for the textarea container
   */
  className?: string;
}

/**
 * Textarea component with label, error, and helper text
 */
const Textarea: React.FC<TextareaProps> = ({
  label,
  error,
  helperText,
  fullWidth = true,
  className,
  id,
  rows = 4,
  ...props
}) => {
  // Generate a unique ID if not provided
  const textareaId = id || `textarea-${Math.random().toString(36).substring(2, 9)}`;
  
  return (
    <div 
      className={clsx(
        'flex flex-col', // Layout
        fullWidth ? 'w-full' : 'w-auto', // Width
        className
      )}
    >
      {label && (
        <div className="mb-2">
          <label htmlFor={textareaId}>
            <Text
              size="base"
              weight="medium"
              muted={false}
              className="cursor-pointer"
            >
              {label}
            </Text>
          </label>
        </div>
      )}
      
      <textarea
        id={textareaId}
        rows={rows}
        className={clsx(
          'p-4', // Padding
          'rounded-none', // Shape
          'bg-background', // Background
          'text-foreground', // Text color
          'border border-foreground', // Border
          'focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary', // Focus
          'transition duration-200', // Animation
          'resize-y', // Allow vertical resizing
          error ? 'border-red-500 focus:ring-red-500/50 focus:border-red-500' : '', // Error state
          props.disabled ? 'opacity-60 cursor-not-allowed' : '' // Disabled state
        )}
        {...props}
      />
      
      {error && (
        <Text size="xs" className="mt-1 text-red-500">
          {error}
        </Text>
      )}
      
      {helperText && !error && (
        <Text size="xs" muted className="mt-1">
          {helperText}
        </Text>
      )}
    </div>
  );
};

export default Textarea;
