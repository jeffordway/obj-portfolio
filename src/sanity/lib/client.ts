import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

// Sanity client configuration for content fetching
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  // Add performance optimizations
  perspective: 'published',
  stega: {
    enabled: false, // Disable stega for production
  },
});

// Configure client to use in-memory cache
// This improves performance by reducing redundant API calls
client.config({
  // @ts-expect-error - Next-Sanity types may not include all options
  cache: {
    enabled: true,
    ttl: 60 * 60, // Cache for 1 hour
  },
});
