// Contact page constants

// Contact data interface
export interface ContactData {
  // Page title
  title: string;
  
  // Page description
  description: string;
  
  // Meta title for SEO
  metaTitle: string;
  
  // Meta description for SEO
  metaDescription: string;
}

// Contact page data
export const contactData: ContactData = {
  title: "Get in Touch",
  description: "Have a question or want to chat? Fill out the form below and I'll get back to you as soon as possible.",
  metaTitle: "Contact | Jeff Ordway",
  metaDescription: "Get in touch with Jeff Ordway",
};
