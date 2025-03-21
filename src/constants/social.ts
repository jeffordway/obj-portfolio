/**
 * Social link type with icon identifier
 */
export interface SocialLink {
  name: string;
  href: string;
  iconName: 'github' | 'linkedin' | 'twitter';
}

/**
 * Social media links used across the site
 */
export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com",
    iconName: "github",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    iconName: "linkedin",
  },
  {
    name: "X (Twitter)",
    href: "https://twitter.com",
    iconName: "twitter",
  },
];
