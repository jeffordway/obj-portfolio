# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Sanity CMS.

## Technologies

- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **CMS**: Sanity.io for content management
- **Analytics**: Google Analytics for tracking user interactions
- **State Management**: Zustand for local-first state management

## Features

- Responsive design that works on all devices
- Content management through Sanity Studio
- Project showcase with filtering capabilities
- Skills and experience sections
- Contact form
- Analytics tracking with cookie consent management
- SEO optimization

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install
# or
yarn install

# Set up environment variables
# Create a .env.local file with the following variables:
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2023-05-03
NEXT_PUBLIC_GA_MEASUREMENT_ID=your-ga-id
```

### Development

```bash
# Run the development server
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

### Sanity Studio

The Sanity Studio is available at [http://localhost:3000/studio](http://localhost:3000/studio) when running the development server.

## Deployment

This project is optimized for deployment on Vercel:

```bash
# Build for production
npm run build
# or
yarn build
```

## Project Structure

- `src/app`: Next.js app router pages
- `src/components`: React components
- `src/constants`: Application constants
- `src/sanity`: Sanity CMS configuration and schemas
- `src/store`: Zustand state management
- `src/styles`: Global styles and Tailwind configuration
- `src/types`: TypeScript type definitions
- `src/utils`: Utility functions
