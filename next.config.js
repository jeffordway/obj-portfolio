/**
 * Next.js Configuration
 * 
 * This file configures Next.js behavior including image domains
 * for external image optimization, ESLint and TypeScript checking configuration,
 * and performance optimizations.
 * 
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "cdn.sanity.io"],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
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
  // Temporarily disable experimental features to fix build issues
  // experimental: {
  //   optimizeCss: true,
  //   scrollRestoration: true,
  //   workerThreads: true,
  // },
  // Configure headers for better caching
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
      {
        source: '/(.*)\\.(jpg|jpeg|png|webp|avif|ico|svg)$',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/(.*)\\.(js|css)$',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
