// Project page content constants

// Text labels for project details page
export interface ProjectPageLabels {
  // Hero section
  heroBackButtonText: string;
  
  // Skills section
  skillsSectionTitle: string;
  noSkillsFoundText: string;
  
  // Date section
  completedSectionTitle: string;
  
  // Content section
  overviewSectionTitle: string;
  noContentText: string;
  
  // Image sections
  gallerySectionTitle: string;
  projectImagesSectionTitle: string;
  additionalImagesSectionTitle: string;
}

// Default text content for project pages
export const projectPageLabels: ProjectPageLabels = {
  // Hero section
  heroBackButtonText: "Back to Projects",
  
  // Skills section
  skillsSectionTitle: "Skills Used",
  noSkillsFoundText: "No skills found for this project.",
  
  // Date section
  completedSectionTitle: "Completed",
  
  // Content section
  overviewSectionTitle: "Project Overview",
  noContentText: "This project doesn't have any detailed content yet.",
  
  // Image sections
  gallerySectionTitle: "Project Gallery",
  projectImagesSectionTitle: "Project Images",
  additionalImagesSectionTitle: "Additional Images",
};

// Metadata for project pages
export const projectMetadata = {
  titleSuffix: " | Jeff Ordway",
  defaultDescription: "View project details",
};

// GitHub button default text
export const githubButtonText = "View on GitHub";

// Prototype button default text if not specified in CMS
export const defaultPrototypeButtonText = "View Prototype";
