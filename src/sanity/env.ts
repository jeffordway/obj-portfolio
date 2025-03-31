// Sanity environment configuration

// API version for Sanity Studio
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-03-28";

// Dataset name from environment variables
export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET"
);

// Project ID from environment variables
export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"
);

// Helper function to validate required environment variables
function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
