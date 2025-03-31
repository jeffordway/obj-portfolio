/**
 * Next.js Configuration
 * 
 * This file configures Next.js behavior including image domains
 * for external image optimization.
 * 
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "cdn.sanity.io"],
  },
};

module.exports = nextConfig;
