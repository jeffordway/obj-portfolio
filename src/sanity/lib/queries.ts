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

// --- GROQ Query ---
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

// --- Fetch Function ---
export async function getCategoriesWithSkills(): Promise<SanityCategoryWithSkills[]> {
  // Fetch data using the configured client
  const data = await client.fetch<SanityCategoryWithSkills[]>(categoriesWithSkillsQuery);
  return data;
}
