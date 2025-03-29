import { groq } from 'next-sanity';
import { client } from './client';

// --- Interfaces ---
export interface SanitySkill {
  _id: string;
  title: string;
  description?: string; // Make description optional as it might not always exist
}

export interface SanityCategoryWithSkills {
  _id: string;
  title: string;
  skills: SanitySkill[];
}

export interface SanityProject {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  headline: string;
  heroImage: {
    asset: {
      _ref: string;
    };
  };
  categories: {
    _id: string;
    title: string;
  }[];
  skills: {
    _id: string;
    title: string;
  }[];
  githubRepo?: {
    showButton: boolean;
    url: string;
  };
  prototype?: {
    showButton: boolean;
    url: string;
    buttonText: string;
  };
  additionalImages?: {
    asset: {
      _ref: string;
    };
    alt?: string;
    caption?: string;
  }[];
  date?: string;
}

// --- GROQ Queries ---
const categoriesWithSkillsQuery = groq`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    "skills": *[_type == "skill" && references(^._id)] | order(title asc) {
      _id,
      title,
      description
    }
  }
`;

const projectsQuery = groq`
  *[_type == "project"] | order(date desc) {
    _id,
    title,
    slug,
    headline,
    heroImage,
    categories[]->{ _id, title },
    skills[]->{ _id, title },
    githubRepo,
    prototype,
    additionalImages,
    date
  }
`;

// --- Fetch Functions ---
export async function getCategoriesWithSkills(): Promise<SanityCategoryWithSkills[]> {
  // Fetch data using the configured client
  const data = await client.fetch<SanityCategoryWithSkills[]>(categoriesWithSkillsQuery);
  return data;
}

export async function getAllProjects(): Promise<SanityProject[]> {
  return await client.fetch<SanityProject[]>(projectsQuery);
}
