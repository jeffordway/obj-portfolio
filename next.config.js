/**
 * Next.js Configuration
 * 
 * This file configures Next.js behavior including image domains
 * for external image optimization, ESLint and TypeScript checking configuration,
 * and bundle analysis for performance optimization.
 * 
 * @type {import('next').NextConfig}
 */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "cdn.sanity.io"],
  },
  // Enable ESLint during production builds for code quality
  eslint: {
    // Run ESLint during builds to catch issues
    ignoreDuringBuilds: false,
  },
  // Enable TypeScript checking during builds
  typescript: {
    // Run type checking during build for type safety
    ignoreBuildErrors: false,
  },
};

module.exports = withBundleAnalyzer(nextConfig);
