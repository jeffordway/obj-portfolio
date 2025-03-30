/**
 * Project data for the portfolio site
 * This will eventually be replaced with data from a CMS
 */

export interface Project {
  /**
   * Unique identifier for the project
   */
  id: string;
  
  /**
   * Project title
   */
  title: string;
  
  /**
   * Project description
   */
  description: string;
  
  /**
   * Project image URL
   */
  imageSrc: string;
  
  /**
   * Alt text for the image
   */
  imageAlt: string;
  
  /**
   * URL to the project (can be internal or external)
   */
  href: string;
  
  /**
   * Whether the link is external
   */
  external?: boolean;
  
  /**
   * Tags for the project (technologies, categories, etc.)
   */
  tags: string[];
  
  /**
   * Whether this is a featured project
   */
  featured?: boolean;
}

/**
 * Sample project data
 * This will be replaced with data from a CMS in the future
 */
export const projects: Project[] = [
  {
    id: 'portfolio',
    title: 'Modern Portfolio',
    description: 'A responsive portfolio site built with Next.js, TypeScript, and Tailwind CSS featuring a modern design with smooth animations.',
    imageSrc: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt: 'Laptop displaying a modern portfolio website',
    href: '/projects/portfolio',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    featured: true
  },
  {
    id: 'e-commerce',
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce solution with product management, cart functionality, and secure checkout integration.',
    imageSrc: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt: 'Mobile phone displaying an e-commerce app',
    href: '/projects/e-commerce',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    featured: true
  },
  {
    id: 'fitness-app',
    title: 'Fitness Tracker',
    description: 'A mobile-first fitness application that helps users track workouts, set goals, and monitor progress with detailed analytics.',
    imageSrc: 'https://images.unsplash.com/photo-1510440777527-38815cfc6cc2?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt: 'Person using a fitness tracking app on a smartwatch',
    href: 'https://fitness-tracker-demo.vercel.app',
    external: true,
    tags: ['React Native', 'Firebase', 'GraphQL']
  },
  {
    id: 'ai-assistant',
    title: 'AI Content Assistant',
    description: 'An AI-powered content creation tool that helps writers generate ideas, improve grammar, and enhance their writing style.',
    imageSrc: 'https://images.unsplash.com/photo-1741850820782-d01d62e2a4cc?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt: 'AI-generated digital art representing artificial intelligence',
    href: 'https://github.com/jeffordway/ai-content-assistant',
    external: true,
    tags: ['OpenAI API', 'Next.js', 'Zustand']
  }
];

/**
 * Projects page constants
 */

export interface ProjectsPageData {
  /**
   * Meta title for SEO
   */
  metaTitle: string;
  
  /**
   * Meta description for SEO
   */
  metaDescription: string;
  
  /**
   * Hero section title
   */
  heroTitle: string;
  
  /**
   * Hero section subtitle
   */
  heroSubtitle: string;
  
  /**
   * Hero section background image URL
   */
  heroImageUrl: string;
  
  /**
   * Hero section background image alt text
   */
  heroImageAlt: string;
}

/**
 * Projects page data
 */
export const projectsPageData: ProjectsPageData = {
  metaTitle: "Projects | Jeff Ordway",
  metaDescription: "View a selection of projects by Jeff Ordway.",
  heroTitle: "My Projects",
  heroSubtitle: "A curated selection of my work, showcasing skills in design and development.",
  heroImageUrl: "/images/hero/projects-hero.jpg", // Replace with your actual image path
  heroImageAlt: "Abstract digital art representing projects",
};

/**
 * Get featured projects
 */
export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

/**
 * Get all projects
 */
export const getAllProjects = (): Project[] => {
  return projects;
};
