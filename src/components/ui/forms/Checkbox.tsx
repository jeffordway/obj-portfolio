"use client";

import React from 'react';
import { clsx } from 'clsx';
import { RiCheckLine } from 'react-icons/ri';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /**
   * Label for the checkbox
   */
  label?: string;
  
  /**
   * Whether the checkbox is checked
   */
  checked?: boolean;
  
  /**
   * Whether the checkbox is disabled
   */
  disabled?: boolean;
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * CSS classes for the checkbox container
   */
  containerClassName?: string;
}

/**
 * Custom checkbox component that aligns with the design system
 */
const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked = false,
  disabled = false,
  className,
  containerClassName,
  onChange,
  ...props
}) => {
  return (
    <label 
      className={clsx(
        'inline-flex items-center',
        disabled && 'opacity-50 cursor-not-allowed',
        !disabled && 'cursor-pointer',
        containerClassName
      )}
    >
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          className="sr-only" // Hide the actual input
          {...props}
        />
        <div 
          className={clsx(
            'h-6 w-6 flex items-center justify-center',
            'border-2 transition-colors',
            checked ? 'bg-accent border-accent' : 'bg-transparent border-border',
            !disabled && !checked && 'hover:border-accent/70',
            className
          )}
        >
          {checked && (
            <RiCheckLine className="h-4 w-4 text-foreground" />
          )}
        </div>
      </div>
      {label && (
        <span className={clsx(
          'ml-4 text-sm', // Increased margin from ml-2 to ml-4
          disabled ? 'text-foreground/50' : 'text-foreground'
        )}>
          {label}
        </span>
      )}
    </label>
  );
};

export default Checkbox;
