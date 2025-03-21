/**
 * Navigation item type
 */
export interface NavItem {
  label: string;
  href: string;
}

/**
 * Main navigation items used across the site
 */
export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
