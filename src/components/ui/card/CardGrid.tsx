import React from "react";
import { clsx } from "clsx";
import { Card } from "./Card";
import { Heading, Text } from "@/components/ui/typography";
import { SanityProject } from "@/sanity/lib/queries";

export interface CardGridProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Array of Sanity projects to display
   */
  projects: SanityProject[];
  
  /**
   * Optional additional className for the container
   */
  className?: string;
}

/**
 * CardGrid Component
 * 
 * A responsive grid layout for displaying project cards in a consistent format.
 * Automatically adjusts to display projects in a visually appealing grid.
 */
export const CardGrid: React.FC<CardGridProps> = ({
  projects,
  className,
}) => {
  // Define responsive grid layout
  const gridColumnsClass = "md:grid-cols-2";

  return (
    <section className={clsx(
      "w-full",
      className
    )}>
      <div className="w-full px-4 md:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Projects grid */}
          <div className={clsx(
            "grid grid-cols-2", // Always show 2 columns
            "gap-8", // Match the gap from the about page bento grid
            "max-w-full" // Ensure grid doesn't exceed container width
          )}>
            {projects.map((project) => (
              <Card
                key={project._id}
                project={project}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardGrid;
