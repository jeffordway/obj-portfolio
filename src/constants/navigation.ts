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
  { label: "Projects", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/**
 * Footer-specific navigation items
 */
export const footerLinks: NavItem[] = [
  { label: "Terms", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Disclaimer", href: "/disclaimer" },
];
