import React from "react";
import { clsx } from "clsx";
import { Tooltip } from "@/components/ui/tooltip";

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Text content to display in the tag
   */
  label: string;
  
  /**
   * Optional tooltip content that appears on hover
   */
  tooltipContent?: React.ReactNode;
}

/**
 * Tag Component
 * 
 * A lightweight component for displaying labels, categories, or status indicators.
 * Features optional tooltip support and consistent styling with customization options.
 */
export const Tag: React.FC<TagProps> = ({ 
  label, 
  className, 
  tooltipContent, 
  ...props 
}) => {
  const tagElement = (
    <span
      className={clsx(
        "inline-block",
        "px-2 py-1",
        "text-xs font-medium",
        "bg-foreground/10",
        "rounded-full",
        "text-foreground/80",
        className
      )}
      {...props}
    >
      {label}
    </span>
  );

  if (tooltipContent) {
    return <Tooltip content={tooltipContent}>{tagElement}</Tooltip>;
  }

  return tagElement;
};
